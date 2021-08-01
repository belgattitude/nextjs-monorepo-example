<div align="center">
  <h1 align="center"><a aria-label="NextJs Monorepo" href="https://github.com/belgattitude/nextjs-monorepo-example">NextJs Monorepo</a></h1>
  <p align="center"><strong>Monorepo concepts, tips and tricks oriented around NextJs</strong></p>
</div>
<p align="center">
  <a aria-label="Build" href="https://github.com/belgattitude/nextjs-monorepo-example/actions?query=workflow%3ACI">
    <img alt="build" src="https://img.shields.io/github/workflow/status/belgattitude/nextjs-monorepo-example/CI-web-app/main?label=CI&logo=github&style=flat-quare&labelColor=000000" />
  </a>
  <a aria-label="Codefactor grade" href=https://www.codefactor.io/repository/github/belgattitude/nextjs-monorepo-example">
    <img alt="Codefactor" src="https://img.shields.io/codefactor/grade/github/belgattitude/nextjs-monorepo-example?label=Codefactor&logo=codefactor&style=flat-quare&labelColor=000000" />
  </a>
  <a aria-label="CodeClimate maintainability" href="https://codeclimate.com/github/belgattitude/nextjs-monorepo-example">
    <img alt="Maintainability" src="https://img.shields.io/codeclimate/maintainability/belgattitude/nextjs-monorepo-example?label=Maintainability&logo=code-climate&style=flat-quare&labelColor=000000" />
  </a>
  <a aria-label="CodeClimate technical debt" href="https://codeclimate.com/github/belgattitude/nextjs-monorepo-example">
    <img alt="Techdebt" src="https://img.shields.io/codeclimate/tech-debt/belgattitude/nextjs-monorepo-example?label=TechDebt&logo=code-climate&style=flat-quare&labelColor=000000" />
  </a>
  <a aria-label="Codacy grade" href="https://www.codacy.com/gh/belgattitude/nextjs-monorepo-example/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=belgattitude/nextjs-monorepo-example&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/dff9c944af284a0fad4e165eb1727467?logo=codacy&style=flat-square&labelColor=000&label=Codacy">
  </a>
  <a aria-label="LoC">  
    <img alt="LoC" src="https://img.shields.io/tokei/lines/github/belgattitude/nextjs-monorepo-example?style=flat-quare&labelColor=000000" />
  </a>
  <a aria-label="Top language" href="https://github.com/belgattitude/nextjs-monorepo-example/search?l=typescript">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/belgattitude/nextjs-monorepo-example?style=flat-square&labelColor=000&color=blue">
  </a>
  <a aria-label="Licence" href="https://github.com/belgattitude/nextjs-monorepo-example/blob/main/LICENSE">
    <img alt="Licence" src="https://img.shields.io/github/license/belgattitude/nextjs-monorepo-example?style=flat-quare&labelColor=000000" />
  </a>
</p>

> **WARNING** This document covers the most recent version based on Yarn 3.0 and NextJs 10.2+. Docs and examples are
> still WIP.

Useful to

- Establish a **structure** and show a lifecycle perspective (dx, ci/cd...)
- How to create **shared packages**, shared locales, assets, images folders, api types...
- Integrate **tools & configs** (ts, jest, changelogs, versioning...).
- Clarify some **advantages** of monorepos (team cohesion, consistency, duplication...).
- Create nextjs/vercel/prisma/webpack5... bug reports with **reproducible examples** _(initial goal of this repo)_.

> The approach doesn't rely on monorepo tools such as [Rush](https://rushjs.io/)
> or [Nx](https://nx.dev/). It does not try to compete, accent is on recipes with a focus on
> workspace enabled package managers like [yarn 3.0](https://github.com/yarnpkg/berry), pnpm, npm v7...
> By keeping the examples as **agnostic** as possible, it should be very easy to apply them
> in others tools. Code is shared through typescript aliases (no build necessary), topology and
> dependency graph handled by the package manager, caches by NextJs. See also the FAQ about differences.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/belgattitude/nextjs-monorepo-example)

## 1. Structure

All in typescript, latest nextjs 10.2+, webpack5, yarn v3, ts-jest, prettier, eslint, emotion,
tailwind, prisma 2... add or remove as much as you like.

#### Two apps

- [apps/web-app](./apps/web-app): SSR and API. [README](./apps/web-app/README.md) | [DEMO/Vercel](https://nextjs-monorepo-example-web-app.vercel.app) | [CHANGELOG](./apps/web-app/CHANGELOG.md)
- [apps/blog-app](./apps/blog-app): SSG. [README](./apps/blog-app/README.md) | [DEMO/Vercel](https://nextjs-monorepo-example-blog-app.vercel.app) | [CHANGELOG](./apps/blog-app/CHANGELOG.md)

> Apps should not depend on apps, they can depend on packages

#### Some shared code

- [packages/core-lib](./packages/core-lib): used by web-app and blog-app, publishable. [README](./packages/core-lib/README.md) | [CHANGELOG](./packages/core-lib/CHANGELOG.md)
- [packages/db-main-prisma](./packages/db-main-prisma): used by web-app. [README](./packages/db-main-prisma/README.md) | [CHANGELOG](./packages/db-main-prisma/CHANGELOG.md)
- [packages/ui-lib](./packages/ui-lib): used by web-app and blog-app, publishable. [README](./packages/ui-lib/README.md) | [CHANGELOG](./packages/ui-lib/CHANGELOG.md)

> Apps can depend on packages, packages can depend on each others...

#### Static shared assets

If needed static resources like **locales**, **images**,... can be shared by using symlinks in the repo.

- See the global [static](./static) folder.

#### Folder overview

```
.
├── apps
│   ├── blog-app                 (NextJS SSG app)
│   │   ├── public/
│   │   │   └── shared-assets/   (symlink to global static/assets)
│   │   ├── src/
│   │   ├── CHANGELOG.md         (autogenerated with changesets)
│   │   ├── jest.config.js
│   │   ├── next.config.js
│   │   ├── package.json         (define package workspace:package deps)
│   │   └── tsconfig.json        (define path to packages)
│   │
│   └── web-app                  (NextJS app with api-routes)
│       ├── public/
│       │   ├── shared-assets/   (possible symlink to global assets)
│       │   └── shared-locales/  (possible symlink to global locales)
│       ├── src/
│       │   └── pages/api        (api routes)
│       ├── CHANGELOG.md
│       ├── jest.config.js
│       ├── next.config.js
│       ├── package.json         (define package workspace:package deps)
│       └── tsconfig.json        (define path to packages)
│
├── packages
│   ├── core-lib                 (basic ts libs)
│   │   ├── src/
│   │   ├── CHANGELOG.md
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── db-main-prisma          (basic db layer with prisma)
│   │   ├── prisma/
│   │   ├── src/
│   │   ├── CHANGELOG.md
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── ui-lib                  (basic design-system in react)
│       ├── src/
│       ├── CHANGELOG.md
│       ├── package.json
│       └── tsconfig.json
│
├── static                       (no code: images, json, locales,...)
│   ├── assets
│   └── locales
├── .yarnrc.yml
├── docker-compose.yml           (database service for now)
├── package.json                 (the workspace config)
└── tsconfig.base.json           (base typescript config)
```

## 3. Quick start

> As an example you can start with the web-app

```bash
# Install the monorepo
yarn install
# In another terminal
docker-compose up database
# Run the web-app
cd apps/web-app
yarn dev
```

## 3. Howtos ?

### 3.1 How create a new shared package ?

1. Workspace config lives in the root [package.json](./package.json), see workspace section.
   there's already 2 roots defined: ./packages/_ and ./apps/_. So nothing to do.

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
        "baseUrl": "./src",
        "paths": {
          // regular app aliases
          "@/components/*": ["./components/*"],
          // packages aliases, relative to app_directory/baseUrl
          "@your-org/magnificent-poney/*": ["../../../packages/magnificent-poney/src/*"],
          "@your-org/magnificent-poney": ["../../../packages/magnificent-poney/src/index"]
        },
   }
   ```

   > PS: The packages aliases should be declared per app (not in the tsconfig.base.json), so
   > to keep being explicit with the dependencies.

7. Be sure your next.config.js app overrides webpack like in [nextjs.config.js](./apps/web-app/next.config.js):

   ```js
   webpack: (config, { defaultLoaders }) => {
     // Will allow transpilation of shared packages through tsonfig paths
     // @link https://github.com/vercel/next.js/pull/13542
     const resolvedBaseUrl = path.resolve(config.context, "../../");
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
   };
   ```

   > PS:
   >
   > - NextJS 10.2+ [has an experimental.externalDir option](https://github.com/vercel/next.js/pull/22867) for monorepo,
   >   when time comes it might allow to skip the webpack config override above.
   > - If your shared package make use of scss bundler... A custom webpack configuration will be necessary
   >   or use [next-transpile-modules](https://github.com/martpie/next-transpile-modules), see FAQ below.

8. Using the package in your app

   The packages are now linked to your app, just import them like regular packages: `import { poney } from '@your-org/magnificent-poney'`.

9. Optional package publishing.

   If you need to share some packages outside of the monorepo, you can publish them to npm or private repositories.
   An example based on microbundle is present in each package. Versioning and publishing can be done with [atlassian/changeset](https://github.com/atlassian/changesets),
   and it's simple as typing:

   ```bash
   $ yarn changeset
   ```

   Follow the instructions... and commit the changeset file. A "Version Packages" P/R will appear after CI checks.
   When merging it, a [github action](./.github/workflows/release.yml) will publish the packages
   with resulting semver version and generate CHANGELOGS for you.

   > PS:
   >
   > - Even if you don't need to publish, changeset can maintain an automated changelog for your apps. Nice !
   > - To disable automatic publishing of some packages, just set `"private": "true"` in their package.json.
   > - Want to tune the behaviour, see [.changeset/config.json](./.changeset/config.json).

## 4. Monorepo essentials

### 4.1 Monorepo scripts

Some convenience global scripts are defined in the [root package.json](./package.json), they generally
call their counterparts defined in packages and apps.

```json5
{
  "scripts": {
    "clean": "yarn workspaces foreach -ptv run clean",
    "test": "run-s 'test:*'",
    "test:unit": "yarn workspaces foreach -ptv run test:unit",
    "fix:staged-files": "yarn workspaces foreach -t run fix:staged-files",
    "fix:all-files": "yarn workspaces foreach -ptv run fix:all-files",
    // Manage versions and releases with atlassion/changesets
    "changeset": "changeset",
    "release": "yarn build && changeset publish",
    // Utility scripts to check/upgrade deps across the entire monorepo
    // use yarn dedupe after install
    "deps:check": "npm-check-updates --deep --dep prod,dev,optional",
    "deps:update": "npm-check-updates -u --deep --dep prod,dev,optional",
    "typecheck": "yarn workspaces foreach -ptv run typecheck",
    "lint": "yarn workspaces foreach -ptv run lint",
    "share:static:symlink": "yarn workspaces foreach -pv --include '*-app' run share:static:symlink",
    "share:static:hardlink": "yarn workspaces foreach -pv --include '*-app' run share:static:hardlink",
    "apps:build": "yarn workspaces foreach -ptv --include '*-app' run build",
    "apps:clean": "yarn workspaces foreach -ptv --include '*-app' run clean",
    "packages:build": "yarn workspaces foreach -ptv --include '@your-org/*' run build",
    "packages:lint": "yarn workspaces foreach -ptv --include '@your-org/*' run lint",
    "packages:typecheck": "yarn workspaces foreach -ptv --include '@your-org/*' run typecheck",
    "packages:clean": "yarn workspaces foreach -ptv --include '@your-org/*' run clean",
    "docker:up": "docker-compose up -d",
    "docker:up:database": "docker-compose up -d database",
    "docker:down": "docker-compose down",
    "docker:clean": "docker container rm -f $(docker container ls -qa) && docker image rm -f $(docker image ls -q)",
  },
}
```

> PS:
>
> - Convention: whatever the script name (ie: test:unit), keeps it consistent over root commands, packages and apps.
> - The use of [yarn workspaces commands](https://yarnpkg.com/features/workspaces) can be replicated in pnpm, nmp7+lerna...

### 4.2 Maintaining deps updated

The global commands `yarn deps:check` and `yarn deps:update` will help to maintain the same versions across the entire monorepo.
They are based on the excellent [npm-check-updates](https://github.com/raineorshine/npm-check-updates)
(see [options](https://github.com/raineorshine/npm-check-updates#options), i.e: `yarn check:deps -t minor`).

> After running `yarn deps:update`, a `yarn install` is required. To prevent
> having duplicates in the yarn.lock, you can run `yarn dedupe --check` and `yarn dedupe` to
> apply deduplication. The duplicate check is enforced in the example github actions.

## 5. Quality

### 5.1 Linters

An example of base eslint configuration can be found in [./.eslint.base.json](./.eslintrc.base.json), apps
and packages extends it in their own root folder, as an example see [./apps/web-app/.eslintrc.json](./apps/web-app/.eslintrc.json).
Prettier is included in eslint configuration as well as [eslint-config-next](https://nextjs.org/docs/basic-features/eslint) for nextjs apps.

### 5.2 Hooks / Lint-staged

Check the [.husky](./.husky) folder content to see what hooks are enabled. Lint-staged is used to guarantee
that lint and prettier are applied automatically on commit and/or pushes.

### 5.3 Tests

Tests relies on ts-jest with support for typescript path aliases. React-testing-library is enabled
whenever react is involved. Configuration lives in the root folder of each apps/packages. As an
example see [./apps/web-app/jest.config.js](./apps/web-app/jest.config.js).

### 5.4 CI

You'll find some example workflows for github action in [.github/workflows](./.github/workflows).
By default, they will ensure that

- You don't have package duplicates.
- You don't have typecheck errors.
- You don't have linter / code-style errors.
- Your test suite is successful.
- Your apps (nextjs) or packages can be successfully built.
- Basic size-limit example in web-app.

Each of those steps can be opted-out.

To ensure decent performance, those features are present in the example actions:

- **Caching** of packages (node_modules...) - install around 25s
- **Caching** of nextjs previous build - built around 20s
- **Triggered when changed** using [actions paths](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths), ie:

  > ```
  >  paths:
  >    - "apps/blog-app/**"
  >    - "packages/**"
  >    - "package.json"
  >    - "tsconfig.base.json"
  >    - "yarn.lock"
  >    - ".yarnrc.yml"
  >    - ".github/workflows/**"
  >    - ".eslintrc.base.json"
  >    - ".eslintignore"
  > ```

## 8. Deploy

#### Vercel

Vercel support natively monorepos, see the [vercel-monorepo-deploy](./docs/deploy/deploy-vercel.md) document.

#### Others

Netlify, aws-amplify, k8s-docker, serverless-nextjs recipes might be added in the future. PR's welcome too.

## FAQ

#### Exact vs semver dependencies

Apps dependencies and devDependencies are pinned to exact versions. Packages deps will use semver compatible ones.
For more info about this change see [reasoning here](https://docs.renovatebot.com/dependency-pinning/) and our
[renovabot.json5](renovate.json5) configuration file.

To help keeping deps up-to-date, see the `yarn deps:check && yarn deps:update` scripts and / or use the [renovatebot](https://github.com/marketplace/renovate).

> When adding a dep through yarn cli (i.e.: yarn add something), it's possible to set the save-exact behaviour automatically
> by setting `defaultSemverRangePrefix: ""` in [yarnrc.yml](./.yarnrc.yml). But this would make the default for packages/\* as well.
> Better to handle `yarn add something --exact` on per-case basis.

#### About next-transpile-modules

And why this repo example doesn't use it to support package sharing.

[next-transpile-modules](https://github.com/martpie/next-transpile-modules) is one of the most installed
packages for nextjs. It basically allows you to transpile some 3rd party packages present in your node_modules folder.
This can be helpful for transpiling packages for legacy browser support (ie11), esm packages (till it lands in nextjs) and
handle shared packages.

In this repo, we use next-transpile-modules only for ie11 and esm. The monorepo management is done through [tsconfig path](https://github.com/vercel/next.js/pull/13542).
It will work best when external tooling is involved (ts-jest...), but comes with some limitations if your shared package use an
scss compiler for example. Note that future version of NextJs might improve monorepo support through [experimental.externalDir option](https://github.com/vercel/next.js/pull/22867).

See here a quick comparison:

| Support matrix      | tsconfig paths     | next-transpile-module     |
| ------------------- | ------------------ | ------------------------- |
| Typescript          | ✅                 | ✅                        |
| Javascript          | ✅                 | ✅                        |
| NextJs Fast refresh | ✅                 | ✅                        |
| CSS                 | custom webpack cfg | ✅                        |
| SCSS                | custom webpack cfg | ✅                        |
| CSS-in-JS           | ✅                 | ✅                        |
| ts-jest             | ✅                 | custom aliases            |
| Vercel monorepo     | ✅                 | ✅                        |
| Yarn 2 PNP          | ✅                 | ✅                        |
| Webpack5            | ✅                 | ✅                        |
| Publishable (npm)   | ✅                 | ❌ (ntm relies on "main") |

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbelgattitude%2Fnextjs-monorepo-example.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbelgattitude%2Fnextjs-monorepo-example?ref=badge_large)
