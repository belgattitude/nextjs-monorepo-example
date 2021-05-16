# Vercel

## How to deploy a monorepo on Vercel ?

Vercel supports it natively, so there's pretty much nothing to do.

## Steps

1. Select the app
   ![](./images/vercel-monorepo-import.jpg)
   
2. Choose the name
   ![](./images/vercel-monorepo-naming.jpg)

3. (Option) add cache support for yarn 2+  
   Override install with `YARN_CACHE_FOLDER=./node_modules/.yarn-cache yarn install`   
   ![](./images/vercel-monorepo-cache.jpg)