**Monorepo concepts oriented around [nextjs](https://www.nextjs.org) apps**, useful to

- Set a **structure** and show a lifecycle perspective (dx, ci/cd...)
- Clarify **advantages** of monorepos (sharing locales, images, code, conventions, shared api types...).
- Integrate **tools & configs** (ts, jest, changelogs, versioning...).
  
- Create nextjs/vercel/prisma... bug reports with **reproducible examples** *(initial purpose)*.

> *The approach doesn't rely on specific monorepo tooling like [Rush](https://rushjs.io/) 
> or [Nx](https://nx.dev/). This repo focus to be manageable with a regular package manager 
> like [yarn](https://github.com/yarnpkg/berry), pnpm... Yet most recipes can be replicated, adapted
> or opted-out easily.
> Accent here is to have something as agnostic as possible, complex enough to forge ideas and get a decent CI/CD 
> speed baseline (under a minute). *

## What ?

Oh all in typescript, latest nextjs 10.2+, webpack5, yarn v3, ts-jest, prettier, eslint, emotion,
tailwind, prisma 2... check older branches if stuck on older nextjs.

### Two apps

- [apps/web-app](./apps/web-app): SSR and API: https://nextjs-monorepo-example-web-app.vercel.app
- [apps/blog-app](./apps/blog-app): SSG, consumes web-app API: https://nextjs-monorepo-example-blog-app.vercel.app

### Some shared code

- [packages/ui-lib](./packages/ui-lib): shared with typescript baseUrl resolution initiated in [#13542](https://github.com/vercel/next.js/pull/13542) 
- [packages/core-lib](./packages/core-lib): @your-org/core-lib: shared with [next-transpile-modules](https://github.com/martpie/next-transpile-modules)

### Structure

```
.
├── apps
│   ├── blog-app                 (NextJS SSG app)
│   │   ├── src/
│   │   ├── CHANGELOG.md
│   │   ├── package.json
│   │   └── tsconfig.json       (extends base config)
│   ├── web-app                 (NextJS app with api-routes)
│   │   ├── src/
│   │   ├── CHANGELOG.md
│   │   ├── package.json
│   │   └── tsconfig.json       (extends base config)
├── packages
│   ├── core-lib                 
│   │   ├── src/
│   │   ├── CHANGELOG.md
│   │   ├── package.json
│   │   └── tsconfig.json       
│   ├── ui-lib                   
│   │   ├── src/
│   │   ├── CHANGELOG.md
│   │   ├── package.json
│   │   └── tsconfig.json       
├── .yarnrc.yml
├── package.json                     (the workspace config)
└── tsconfig.base.json               (base typescript config)
```

### How to

#### Config

- Declare your workspaces paths in [package.json](./package.json)

1. For typescript config base path:

- In [tsconfig.base.json](tsconfig.base.json) at the root.
  Set `baseUrl` to '.' and define your dependencies in `paths`.
- Configure webpack in [next.config.js](./apps/web-app/next.config.js)

2. For next-transpile-module

- Define your shared packages in your apps, i.e: [next.config.js](./apps/web-app/next.config.js)
- Your shared packages have to indicate a `main` field *(since next-transpile-modules v6)*, i.e: 
  [package.json](packages/core-lib/package.json). 


3. For deployments

- Be sure you build as 'serverless' to benefit from vercel monorepo support. 

## Deploy

### Vercel

Vercel support natively monorepos, see the [vercel-monorepo-deploy](./docs/deploy/deploy-vercel.md) document.

### Others

Netlify, aws-amplify, k8s-docker, serverless-nextjs recipes might be added in the future. PR's welcome too.

### Pros/Cons

@your-org/ui-lib is shared through typescript baseUrl resolution improvements from [#13542](https://github.com/vercel/next.js/pull/13542) 
(rather than next-transpile-module). 

| Support matrix        | tsconfig paths | next-transpile-module |
|-----------------------|----------------|-----------------------|
| Typescript            | ✅              | ✅                    |
| Javascript            | ✅              | ✅                    |
| NextJs Fast refresh   | ✅              | ✅                    |
| CSS                   | ❌              | ✅                    |
| SCSS                  | ❌              | ✅                    |
| CSS-in-JS             | ✅              | ✅                    |
| ts-jest               | ✅              | ?                    |
| Vercel monorepo       | ✅              | ✅                    |
| Yarn 2 PNP            | ✅              | ❌                    |
| Experimental webpack5 | ?               | ❌  (working on it)  |
| Publishable (npm)     | ✅               | ❌  (cause they rely on "main")  |


#### Advantages over next-transpile-modules

- Fast refresh works out of the box, see https://github.com/martpie/next-transpile-modules/issues/9 and `resolveSymlinks` that
  can help. 
- ts-jest should honour the config.

#### Advantages of next-transpile-modules

- It handles css/scss as well


### Notes

- Monorepos are not monoliths, this approach is for sanity while developing and using sandboxes 
  (a scenario where you generally don't want to version and publish your shared packages). 
- You might have to create multiple tsconfig.json (i.e: tsconfig.dev.json, tsconfig.build.json...) if you 
  want to use a distributed package rather than transpiling. 
- Better to keep all deps at the same version. You might run into problem if one package depends a v1 version and another in a v2.
  (There's a script to check that `yarn deps:check`)
  

### Links

- RFC: https://github.com/vercel/next.js/discussions/15327
- Vercel monorepo support: https://github.com/vercel/vercel/issues/3547#issuecomment-673687255
- shared with typescript baseUrl resolution initiated in [#13542](https://github.com/vercel/next.js/pull/13542)

