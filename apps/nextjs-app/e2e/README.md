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
docker run -it --rm --ipc=host --add-host=host.docker.internal:host-gateway -v $PWD:/app -w /app mcr.microsoft.com/playwright:v1.31.0-focal /bin/bash
```

## In the docker container

```
yarn install
cd apps/nextjs-app/e2e
npx playwright test --config $PWD/playwright.config.ts
```
