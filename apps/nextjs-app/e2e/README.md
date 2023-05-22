# WIP

## Launch server on the host

```
cd apps/nextjs-app
yarn build && yarn start
# or
yarn dev
```

## Launch docker

```bash
export PLAYWRIGHT_VERSION=$(npm ls @playwright/test | grep @playwright | sed 's/.*@//')
docker run -it --rm --ipc=host --add-host=host.docker.internal:host-gateway -v $PWD:/app -w /app mcr.microsoft.com/playwright:v${PLAYWRIGHT_VERSION}-jammy /bin/bash
```

## In the docker container

```
yarn install
cd apps/nextjs-app/e2e
npx playwright test --config $PWD/playwright.config.ts
```
