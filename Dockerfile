# Install dependencies only when needed
FROM node:alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn
#RUN yarn install --immutable --inline-builds
RUN yarn install

# For development
FROM deps AS development
ENV NODE_ENV=development
EXPOSE 8000
CMD ["yarn", "workspace", "web-app", "dev", "-p", "8000"]

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