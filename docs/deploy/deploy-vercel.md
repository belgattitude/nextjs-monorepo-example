# Vercel

## How to deploy a monorepo on Vercel ?

Vercel supports it natively, so there's pretty much nothing to do.

## Steps

1. Select the app
   ![](./images/vercel-monorepo-import.jpg)
2. Choose the name
   ![](./images/vercel-monorepo-naming.jpg)

3. (Option) To speed up install step, it's necessary to use a workaround
   and save YARN_CACHE_FOLDER into node_modules/.yarn/cache. This might change
   in the future when vercel support yarn 2/3 new caching mechanism.

   To enable the cache on vercel, just overrides the install with [srcipts/vercel-install.sh](../../scripts/vercel-install.sh).  
   ![](./images/vercel-monorepo-cache.jpg)
