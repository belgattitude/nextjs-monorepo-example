---
"nextjs-app": major
"remix-app": major
"vite-app": major
"@your-org/db-main-prisma": major
"@your-org/eslint-config-bases": major
"@your-org/ts-utils": major
"@your-org/api-gateway": major
"@your-org/common-i18n": major
"@your-org/core-lib": major
"@your-org/ui-lib": major
---

Examples moved from yarn to pnpm.

The example repo is now managed by [pnpm7](https://pnpm.io/) rather than [yarn4](). Note
that both package managers are awesome. There's few benefits behind the move:

### Advantages

1. CI install time is ±30% faster (considering package manager install + action cache). See
   [benchmarks](https://gist.github.com/belgattitude/0ecd26155b47e7be1be6163ecfbb0f0b)
   that were made on the nextjs-monorepo-example. From ±1m15s -> ±45s.
2. Future integration with turbo/docker have some more possibles.

### Disadvantages

1. Vercel previews seems slower, lambdas sizes bigger (https://gist.github.com/belgattitude/38bc4b779d14d17793316c936879f06e)
2. Differently from yarn, pnpm version is not committed within the repo. There's some extra work
   to do when updating pnpm version (in ci, docker, locally...). This will probably be solved
   when [corepack](https://nodejs.org/api/corepack.html) is out of experimental status.

### Upgrade

#### Install pnpm

```bash
npm i -g pnpm
rm -rf .yarn
pnpm i
```

#### Deployment

> **Note**
> Only applicable if you were using the [yarn optimized installation command](https://github.com/belgattitude/nextjs-monorepo-example/blob/84e2d7a71f773f68c9d325775ae0633dc7001466/docs/deploy/deploy-vercel.md) to deploy to vercel.

Be sure to add those envs to vercel

- `PRISMA_SKIP_POSTINSTALL_GENERATE`: true
- `HUSKY`: 0

You don't need anymore to override install command, but if you want to keep
the same cache optimizations, replace the command

`YARN_CACHE_FOLDER=./.next/cache/yarn yarn install --immutable --inline-builds`

By

`pnpm install --frozen-lockfile --strict-peer-dependencies --prefer-offline`

Vercel will use by default the latest pnpm version 7 available (in reality few versions behind)...
If you like you can enable the experimental corepack option ENABLE_EXPERIMENTAL_COREPACK=1 in the vercel env.
That way it will help reproducibility

See https://vercel.com/docs/concepts/deployments/configure-a-build#corepack
