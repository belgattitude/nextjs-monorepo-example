**Monorepo concepts oriented around [nextjs](https://www.nextjs.org) apps**, useful to

- Set a **structure** and show a lifecycle perspective (dx, ci/cd...)
- How to create **shared packages**, shared locales, assets, images folders, api types...
- Integrate **tools & configs** (ts, jest, changelogs, versioning...).
- Clarify some **advantages** of monorepos (team conventions, consistency...).
- Create nextjs/vercel/prisma... bug reports with **reproducible examples** *(initial goal of this repo)*.

> The approach doesn't rely on monorepo tools such as [Rush](https://rushjs.io/) 
> or [Nx](https://nx.dev/). It does not try to compete, accent is on recipes with a focus on 
> regular package managers like [yarn 3.0](https://github.com/yarnpkg/berry), pnpm... 
> By keeping the examples as **agnostic** as possible, it should be very easy to apply them
> in others tools. See also the FAQ about differences.

## 1. Structure

All in typescript, latest nextjs 10.2+, webpack5, yarn v3, ts-jest, prettier, eslint, emotion,
tailwind, prisma 2... add as much as you like.

#### Two apps

- [apps/web-app](./apps/web-app): SSR and API: https://nextjs-monorepo-example-web-app.vercel.app
- [apps/blog-app](./apps/blog-app): SSG, consumes web-app API: https://nextjs-monorepo-example-blog-app.vercel.app

#### Some shared code

- [packages/ui-lib](./packages/ui-lib): shared with typescript baseUrl resolution initiated in [#13542](https://github.com/vercel/next.js/pull/13542) 
- [packages/core-lib](./packages/core-lib): @your-org/core-lib: shared with [next-transpile-modules](https://github.com/martpie/next-transpile-modules)

#### Folder overview

```
.
├── apps
│   ├── blog-app                 (NextJS SSG app)
│   │   ├── src/
│   │   ├── CHANGELOG.md
│   │   ├── jest.config.js
│   │   ├── next.config.js
│   │   ├── package.json
│   │   └── tsconfig.json       (extends base config)
│   ├── web-app                 (NextJS app with api-routes)
│   │   ├── src/
│   │   ├── CHANGELOG.md
│   │   ├── jest.config.js
│   │   ├── next.config.js
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

## 2. Howtos ?

### 2.1 How create a new shared package ?

1. Workspace config lives in the root [package.json](./package.json), see workspace section. 
   there's already 2 roots defined: ./packages/* and ./apps/*. So nothing to do.
   
2. Create a new folder, i.e: `mkdir packages/magnificent-poney`.
   
3. Initialize a `package.json`, set a name and dependencies you'll need. For inspiration,
   take the [ui-lib](./packages/ui-lib/package.json) as an example. Copy/paste other files
   you might need (tsconfig.json...). Place sources in the `magnificent-poney/src` folder.
   
4. To use it in an app first declare the dependency in its package.json deps by adding 
   `"@your-org/magnificent-poney": "workspace:*"`. Inspiration in [web-app/package.json](./apps/web-app/package.json).
   
5. Run `yarn install` to update the workspace and create symlinks.
   
6. Add tsconfig paths in the app `tsconfig.json`, take an example in [web-app/tsconfig.json](./apps/web-app/tsconfig.json)
   
   ```json5
   {
      "compilerOptions": {
        "paths": { 
          "@your-org/magnificent-poney/*": ["../../../packages/magnificent-poney/src/*"],
          "@your-org/magnificent-poney": ["../../../packages/magnificent-poney/src/index"]
        },
   }
   ``` 
7. Be sure you next.config.js overrides webpack like in [nextjs.config.js](./apps/web-app/next.config.js):
   
   ```js
   webpack: function (config, { defaultLoaders }) {
      const resolvedBaseUrl = path.resolve(config.context, '../../');
      // Will allow transpilation of shared packages through tsonfig paths
      // @link https://github.com/vercel/next.js/pull/13542
      config.module.rules = [
        ...config.module.rules,
        {
          test: /\.(tsx|ts|js|jsx|json)$/,
          include: [resolvedBaseUrl],
          use: defaultLoaders.babel,
          exclude: (excludePath) => {
            return /node_modules/.test(excludePath);
          },
        },
      ];
      return config;
    }
   ```
   
   > PS: 
   >  - NextJS 10.2+ [has an experimental.externalDir option](https://github.com/vercel/next.js/pull/22867) for monorepo, 
   >    when time comes it might allow to skip the webpack config override above.
   >  - If your shared package make use of scss bundler...  A custom webpack configuration will be necessary 
   >    or use [next-transpile-modules](https://github.com/martpie/next-transpile-modules), see FAQ below.

8. Package publishing.
   
   All packages can be published to npm or private repositories. An example based on microbundle is
   present in each package. Versioning and publishing can be done with [atlassian/changeset](https://github.com/atlassian/changesets),
   and it's simple as typing:
      
   ```bash
   $ yarn changeset 
   ```
   
   PS: To disable automatic publishing of some packages, just set `"private": "true"` in their package.json.

## 3. Monorepo essentials 

To ease ... see monorepo commands in root [./package.json](./package.json)

### 3.1 How to keep all deps fresh

At the root

```bash
$ yarn deps:check
$ yarn deps:update 
```




## 8. Deploy

#### Vercel

Vercel support natively monorepos, see the [vercel-monorepo-deploy](./docs/deploy/deploy-vercel.md) document.

#### Others

Netlify, aws-amplify, k8s-docker, serverless-nextjs recipes might be added in the future. PR's welcome too.

## FAQ

#### Quid next-transpile-modules ?

And why this repo example doesn't use it to support package sharing.

[next-transpile-modules](https://github.com/martpie/next-transpile-modules) is one of the most installed
packages for nextjs. It basically allows you to transpile some 3rd party packages present in your node_modules folder.
This can be helpful for transpiling packages for legacy browser support (ie11), esm packages (till it lands in nextjs) and
handle shared packages.

In this repo, we use next-transpile-modules only for ie11 and esm. The monorepo management is done through [tsconfig path](https://github.com/vercel/next.js/pull/13542).
It will work best regarding to external tooling (ts-jest...), but comes with some limitations if your shared package use an
scss compiler for example. Note that future version of NextJs might improve monorepo support through [experimental.externalDir option](https://github.com/vercel/next.js/pull/22867).

See here a quick comparison:

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
| Yarn 2 PNP            | ✅              | ✅                    |
| Experimental webpack5 | ?               | ✅                   |
| Publishable (npm)     | ✅               | ❌  (cause they rely on "main")  |



