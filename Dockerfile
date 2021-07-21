#
# EXAMPLE OF MULTISTAGE BUILD FOR MONOREPOS
#
# @author Vanvelthem Sébastien (https://github.com/belgattitude)
# @link https://github.com/belgattitude/nextjs-monorepo-example
#

###################################################################
# Stage 1: Install all workspaces (dev)dependencies               #
#          and generates node_modules folder (s)                  #
# ----------------------------------------------------------------#
# Notes:                                                          #
#   1. this stage relies on buildkit features                     #
#   2. depend on .dockerignore, you must at least                 #
#      ignore: all **/node_modules folders and .yarn/cache        #
#   3. Use https://github.com/wagoodman/dive to debug / monitor   #
#      layer sizes                                                #
###################################################################

FROM node:14-alpine AS workspaces-full-install
RUN apk add --no-cache rsync

WORKDIR /workspace-install

COPY yarn.lock .yarnrc.yml ./
COPY .yarn/ ./.yarn/

# Specific to monerepo's as docker COPY command is pretty limited
# we use buidkit to prepare all files that are necessary for install
# and that will be used to invalidate docker cache:
#
# Files are copied with rsync:
#
#   - All package.json present in the host (root, apps/*, packages/*)
#   - All schema.prisma (cause prisma will generate a schema on postinstall)
#

RUN --mount=type=bind,target=/docker-context \
    rsync -amv --delete \
          --exclude='node_modules' \
          --exclude='*/node_modules' \
          --include='package.json' \
          --include='schema.prisma' \
          --include='*/' --exclude='*' \
          /docker-context/ /workspace-install/;

#
# To speed up installations, we override the default yarn cache folder
# and mount it as a buildkit cache mount (builkit will rotate it if needed)
# This strategy allows to exclude the yarn cache in subsequent docker
# layers (size benefit) and reduce packages fetches.
#
# PS:
#  1. Cache mounts can be used in CI (github actions)
#  2. To manually clear the cache
#     > docker builder prune --filter type=exec.cachemount
#

RUN --mount=type=cache,target=/root/.yarn-cache \
    YARN_CACHE_FOLDER=/root/.yarn-cache yarn install --immutable --inline-builds


###################################################################
# Stage 2: Build production app                                   #
# ----------------------------------------------------------------#
# Notes:                                                          #
#   1. this stage relies on buildkit features                     #
#   2. this stage will use workspaces-full-install stage          #                                                                 #
###################################################################

FROM node:14-alpine AS builder
ENV NODE_ENV=production

WORKDIR /app
COPY . .
COPY --from=workspaces-full-install /workspace-install ./

RUN yarn workspace web-app build

RUN --mount=type=cache,target=/root/.yarn-cache \
    SKIP_POSTINSTALL=1 \
    YARN_CACHE_FOLDER=/root/.yarn-cache \
    yarn workspaces focus web-app --production
# ./node_modules/.bin/next apps/web-app/ -p 8000

#RUN cd apps/web-app && \
#    yarn build && \
#    YARN_CACHE_FOLDER=/root/.yarn-cache \
#    yarn workspaces focus web-app --production



# For development
FROM node:14-alpine AS web-app-dev
ENV NODE_ENV=development

WORKDIR /app

COPY --from=workspaces-full-install /workspace-install ./

EXPOSE 8000
CMD ["yarn", "workspace", "web-app", "dev", "-p", "8000"]
#CMD ["sh"]
# Rebuild the source code only when needed
#FROM node:alpine AS builder
#WORKDIR /app
#COPY . .
#COPY --from=deps /app/node_modules ./node_modules
# Clean here is required due to pah changes and webpack 5
#RUN yarn workspace web-app clean && yarn workspace web-app build && yarn workspaces focus web-app --production

# Production image, copy all the files and run next
#FROM node:alpine AS runner
#WORKDIR /app

#ENV NODE_ENV production

#RUN addgroup -g 1001 -S nodejs
#RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
#COPY --from=builder /app/public ./public
#COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
#COPY --from=builder /app/node_modules ./node_modules
#COPY --from=builder /app/package.json ./package.json

#USER nextjs

#EXPOSE 8000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

#CMD ["yarn", "start", "-p", "8000"]