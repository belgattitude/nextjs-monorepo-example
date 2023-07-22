ARG NODE_VERSION=18.16
ARG ALPINE_VERSION=3.18
ARG NEXTJS_APP=nextjs-app

#############################################################
# Stage 1 - App extraction / pruning                        #
#############################################################

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} as app-builder

RUN corepack enable

ENV NEXTJS_APP=$NEXTJS_APP

WORKDIR /app

# We can't run turbo without yarn install first, let's install locally and make sure
# both local and docker are aligned on the package.json version.
RUN TURBO_VERSION=$(npm ls turbo | grep turbo | sed 's/.*@//') npm i -g turbo@${TURBO_VERSION}

COPY --link . .

# https://turbo.build/repo/docs/handbook/deploying-with-docker
RUN turbo prune --scope=nextjs-app --docker --out-dir=./out/nextjs-app/

#############################################################
# Stage 2 - App installation                                #
#############################################################

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} as app-installer

RUN apk add --no-cache libc6-compat git && corepack enable

ENV NEXTJS_APP=$NEXTJS_APP

ENV NEXT_BUILD_ENV_TYPECHECK=false
ENV NEXT_BUILD_ENV_LINT=false
ENV NEXT_BUILD_ENV_OUTPUT=standalone

ENV TZ=Europe/Brussels

# Optimize for YARN installation speed
ENV YARN_ENABLE_GLOBAL_CACHE=false
ENV YARN_ENABLE_MIRROR=false
ENV YARN_NODE_LINKER=node-modules
ENV YARN_NM_MODE=hardlinks-local

# If using different compression level than in local (recommended: do not)
ENV YARN_COMPRESSION_LEVEL=mixed
ENV YARN_CHECKSUM_BEHAVIOR=ignore

# Disabling some well-known postinstall scripts
ENV PRISMA_SKIP_POSTINSTALL_GENERATE=true
ENV HUSKY=0

WORKDIR /app

# First install the dependencies (as they change less often)
COPY --link .gitignore .gitignore
COPY --from=app-builder /app/out/nextjs-app/json/ .
COPY --from=app-builder /app/out/nextjs-app/yarn.lock ./yarn.lock

RUN yarn install --inline-builds

# Build the project
COPY --from=app-builder /app/out/nextjs-app/full/ .
COPY --link turbo.json turbo.json
COPY --link tsconfig.base.json tsconfig.base.json

RUN yarn workspace @your-org/db-main-prisma prisma-generate
RUN yarn turbo run build --filter=nextjs-app...

#############################################################
# Stage 3 - App runner                                      #
#############################################################

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} as app-runner

# Bort PORT / HOSTNAME envs are respected by nextjs start/dev.
ENV PORT=${NEXTJS_APP_PORT:-3000}
ENV TZ=Europe/Brussels

RUN apk add --no-cache tzdata bash && corepack enable

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

COPY --from=app-installer --link /app/apps/nextjs-app/next.config.mjs \
                    /app/apps/nextjs-app/next-i18next.config.mjs \
                    /app/apps/nextjs-app/package.json \
                    ./

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=app-installer --link --chown=nextjs:nodejs /app/apps/nextjs-app/.next/standalone ./
COPY --from=app-installer --link --chown=nextjs:nodejs /app/apps/nextjs-app/.next/static ./apps/nextjs-app/.next/static
COPY --from=app-installer --link --chown=nextjs:nodejs /app/apps/nextjs-app/public ./apps/nextjs-app/.next/public

EXPOSE ${PORT}

CMD ["node", "apps/nextjs-app/server.js"]

