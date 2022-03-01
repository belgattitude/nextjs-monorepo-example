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

> Howtos for monorepo. New to monorepos ? [check this FAQ](./README.md#monorepo). This example is managed by [Yarn 3.2+](https://dev.to/arcanis/yarn-32-libc-yarn-explain-next-major--o22)
> / [typescript path aliases](https://www.typescriptlang.org/tsconfig#paths). Not the only way to do.

Useful to

- Establish a **structure** and present a lifecycle perspective (dx, ci/cd, deployments...)
- How to create and consume **shared packages**, locales, assets, api types...
- Integrate **tools & configs** (eslint, jest, playwright, storybook, changelogs, versioning, codecov, codeclimate...).
- Clarify some **advantages** of monorepos (team cohesion, consistency, duplication, refactorings, atomic commits...).
- Create nextjs/vercel/prisma... bug reports with **reproducible examples** _(initial goal of this repo)_.

## Structure

[![Open in Gitpod](https://img.shields.io/badge/Open%20In-Gitpod.io-%231966D2?style=for-the-badge&logo=gitpod)](https://gitpod.io/#https://github.com/belgattitude/nextjs-monorepo-example)

```
.
├── apps
│   ├── blog-app   (nextjs, e2e playwright)
│   ├── remix-app
│   ├── vite-app
│   └── web-app    (nextjs, i18n, ssr, e2e playwright)
└── packages
    ├── core-lib
    ├── db-main-prisma
    └── ui-lib     (emotion, storybook)
```

#### Example apps

- [apps/web-app](./apps/web-app): SSR, i18n, tailwind v3, emotion, graphQL, rest... [README](./apps/web-app/README.md) | [DEMO/Vercel](https://nextjs-monorepo-example-web-app.vercel.app) | [CHANGELOG](./apps/web-app/CHANGELOG.md)
- [apps/blog-app](./apps/blog-app): Simple nextjs. [README](./apps/blog-app/README.md) | [DEMO/Vercel](https://nextjs-monorepo-example-blog-app.vercel.app) | [CHANGELOG](./apps/blog-app/CHANGELOG.md)
- [apps/remix-app](./apps/remix-app): Remix. [README](./apps/remix-app/README.md) | [~~DEMO/Vercel~~] | [CHANGELOG](./apps/remix-app/CHANGELOG.md)
- [apps/vite-app](./apps/vite-app): Basic vite-app. [README](./apps/vite-app/README.md) | [DEMO/Vercel](https://nextjs-monorepo-example-vite-app.vercel.app) | [CHANGELOG](./apps/vite-app/CHANGELOG.md)

> Apps should not depend on apps, they can depend on packages

#### Example shared packages

- [packages/core-lib](./packages/core-lib): used by web-app and blog-app, publishable. [README](./packages/core-lib/README.md) | [CHANGELOG](./packages/core-lib/CHANGELOG.md)
- [packages/db-main-prisma](./packages/db-main-prisma): used by web-app. [README](./packages/db-main-prisma/README.md) | [CHANGELOG](./packages/db-main-prisma/CHANGELOG.md)
- [packages/ui-lib](./packages/ui-lib): used by web-app and blog-app, publishable. [README](./packages/ui-lib/README.md) | [CHANGELOG](./packages/ui-lib/CHANGELOG.md)

> Apps can depend on packages, packages can depend on each others...

#### Shared static assets

If needed static resources like **locales**, **images**,... can be shared by using symlinks in the repo.

- See the global [static](./static) folder.

#### Folder overview

<details>
<summary>Detailed folder structure</summary>

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
│   ├── remix-app                (Remix.run app as an example)
│   │   ├── app/
│   │   ├── package.json         (define package workspace:package deps)
│   │   └── tsconfig.json        (define path to packages)
│   │
│   ├── vite-app                 (Vite app as an example)
│   │   ├── src/
│   │   ├── package.json         (define package workspace:package deps)
│   │   └── tsconfig.json        (define path to packages)
│   │
│   └── web-app                  (NextJS app with api-routes)
│       ├── e2e/                 (E2E tests with playwright)
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
│   │   ├── e2e/                (E2E tests)
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
├── .dockerignore
├── docker-compose.web-app.yml   (compose specific for web-app)
├── docker-compose.yml           (general services like postgresql...)
├── Dockerfile                   (multistage build for web-app)
├── package.json                 (the workspace config)
└── tsconfig.base.json           (base typescript config)
```

</details>

## Howto

### 1. Enable workspace support

<details>
<summary>Root package.json with workspace directories</summary>

```json5
{
  "name": "nextjs-monorepo-example",
  // Set the directories where your apps, packages will be placed
  "workspaces": ["apps/*", "packages/*"],
  //...
}
```

_The package manager will scan those directories and look for children `package.json`. Their
content is used to define the workspace topology (apps, libs, dependencies...)._

</details>

### 2. Create a new package

Create a folder in [./packages/](./packages) directory with the name of
your package.

<details>
   <summary>Create the package folder</summary>

```bash
mkdir packages/magnificent-poney
mkdir packages/magnificent-poney/src
cd packages/magnificent-poney
```

</details>

Initialize a package.json with the name of your package.

> Rather than typing `yarn init`, prefer to take the [./packages/ui-lib/package.json](./packages/ui-lib/package.json)
> as a working example and edit its values.

<details>
<summary>Example of package.json</summary>

```json5
{
  "name": "@your-org/magnificent-poney",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "clean": "rimraf --no-glob ./tsconfig.tsbuildinfo",
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx",
    "typecheck": "tsc --project ./tsconfig.json --noEmit",
    "test": "run-s 'test:*'",
    "test:unit": "echo \"No tests yet\"",
    "fix:staged-files": "lint-staged --allow-empty",
    "fix:all-files": "eslint . --ext .ts,.tsx,.js,.jsx --fix",
  },
  "devDependencies": {
    "@testing-library/jest-dom": "5.14.1",
    "@testing-library/react": "12.0.0",
    "@testing-library/react-hooks": "7.0.1",
    "@types/node": "16.4.10",
    "@types/react": "17.0.15",
    "@types/react-dom": "17.0.9",
    "@typescript-eslint/eslint-plugin": "4.29.0",
    "@typescript-eslint/parser": "4.29.0",
    "camelcase": "6.2.0",
    "eslint": "7.32.0",
    "eslint-config-prettier": "8.3.0",
    "eslint-plugin-import": "2.23.4",
    "eslint-plugin-jest": "24.4.0",
    "eslint-plugin-jest-formatting": "3.0.0",
    "eslint-plugin-jsx-a11y": "6.4.1",
    "eslint-plugin-prettier": "3.4.0",
    "eslint-plugin-react": "7.24.0",
    "eslint-plugin-react-hooks": "4.2.0",
    "eslint-plugin-testing-library": "4.10.1",
    "jest": "27.0.6",
    "npm-run-all": "4.1.5",
    "prettier": "2.3.2",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "rimraf": "3.0.2",
    "shell-quote": "1.7.2",
    "ts-jest": "27.0.4",
    "typescript": "4.3.5",
  },
  "peerDependencies": {
    "react": "^16.14.0 || ^17.0.2",
    "react-dom": "^16.14.0 || ^17.0.2",
  },
}
```

> _Note that as we want to be strict with dependencies, the best is to
> define all you need (eslint, ...) per package. And not in the monorepo root.
> That might seem weird, but on the long run it's much safer._

</details>

### 3. Using the package in app

#### Step 3.1: package.json

First add the package to the app package.json. The recommended way is to
use the [workspace protocol](https://yarnpkg.com/features/protocols#workspace) supported by
yarn and pnpm.

```bash
cd apps/my-app
yarn add @your-org/magnificent-poney@'workspace:*'
```

Inspiration can be found in [apps/web-app/package.json](./apps/web-app/package.json).

<details>
<summary>package.json</summary>

```json5
{
  "name": "my-app",
  "dependencies": {
    "@your-org/magnificient-poney": "workspace:*",
  },
}
```

</details>

#### Step 3.2: In tsconfig.json

Then add a typescript path alias in the app tsconfig.json. This
will allow you to import it directly (no build needed)

Inspiration can be found in [apps/web-app/tsconfig.json](./apps/web-app/tsconfig.json).

<details>
  <summary>Example of tsonfig.json</summary>

```json5
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      // regular app aliases
      "@/components/*": ["./components/*"],
      // packages aliases, relative to app_directory/baseUrl
      "@your-org/magnificent-poney/*": [
        "../../../packages/magnificent-poney/src/*",
      ],
      "@your-org/magnificent-poney": [
        "../../../packages/magnificent-poney/src/index",
      ],
    },
  },
}
```

> PS:
>
> - Don't try to set aliases in the global tsonfig.base.json to keep strict with
>   graph dependencies.
> - The **star** in `@your-org/magnificent-poney/*` allows you to import subfolders. If you use
>   a barrel file (index.ts), the alias with star can be removed.

</details>

#### Step 3.3: Next config

Edit your `next.config.js` and enable the [experimental.externalDir option](https://github.com/vercel/next.js/pull/22867).
Feedbacks [here](https://github.com/vercel/next.js/discussions/26420).

```js
const nextConfig = {
  experimental: {
    externalDir: true,
  },
};
export default nextConfig;
```

<details>
  <summary>Using a NextJs version prior to 10.2.0 ?</summary>

If you're using an older NextJs version and don't have the experimental flag, you can simply override your
webpack config.

```js
const nextConfig = {
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
  },
};
```

</details>

> PS: If your shared package make use of scss bundler... A custom webpack configuration will be necessary
> or use [next-transpile-modules](https://github.com/martpie/next-transpile-modules), see FAQ below.

#### Step 3.4: Using the package

The packages are now linked to your app, just import them like regular packages: `import { poney } from '@your-org/magnificent-poney'`.

### 4. Publishing

> Optional

If you need to share some packages outside of the monorepo, you can publish them to npm or private repositories.
An example based on microbundle is present in each package. Versioning and publishing can be done with [atlassian/changeset](https://github.com/atlassian/changesets),
and it's simple as typing:

```bash
$ yarn g:changeset
```

Follow the instructions... and commit the changeset file. A "Version Packages" P/R will appear after CI checks.
When merging it, a [github action](./.github/workflows/release-or-version-pr.yml) will publish the packages
with resulting semver version and generate CHANGELOGS for you.

> PS:
>
> - Even if you don't need to publish, changeset can maintain an automated changelog for your apps. Nice !
> - To disable automatic publishing of some packages, just set `"private": "true"` in their package.json.
> - Want to tune the behaviour, see [.changeset/config.json](./.changeset/config.json).

## 4. Monorepo essentials

### Monorepo scripts

Some convenience scripts can be run in any folder of this repo and will call their counterparts defined in packages and apps.

| Name                         | Description                                                                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `yarn g:changeset`           | Add a changeset                                                                                                                      |
| `yarn g:typecheck`           | Run typechecks in all apps & packages                                                                                                |
| `yarn g:lint`                | Display linter issues in all apps & packages                                                                                         |
| `yarn g:lint --fix`          | Attempt to run linter auto-fix in all apps & packages                                                                                |
| `yarn g:lint-styles`         | Display css stylelint issues in all apps & packages                                                                                  |
| `yarn g:lint-styles --fix`   | Attempt to run stylelint auto-fix issues in all apps & packages                                                                      |
| `yarn g:test`                | Run tests in all apps & packages                                                                                                     |
| `yarn g:test-unit`           | Run unit tests in all apps & packages                                                                                                |
| `yarn g:test-e2e`            | Run unit tests in all apps & packages                                                                                                |
| `yarn g:build`               | Clean every caches and dist folders in all apps & packages                                                                           |
| `yarn g:clean`               | Add a changeset                                                                                                                      |
| `yarn g:check-dist`          | Ensure build dist files passes es2017 (run `g:build` first).                                                                         |
| `yarn deps:check --dep dev`  | Will print what packages can be upgraded globally (see also [.ncurc.yml](https://github.com/sortlist/packages/blob/main/.ncurc.yml)) |
| `yarn deps:update --dep dev` | Apply possible updates (run `yarn install && yarn dedupe` after)                                                                     |
| `yarn check:install`         | Verify if there's no dependency missing in packages                                                                                  |
| `yarn install:playwright`    | Install playwright for e2e                                                                                                           |
| `yarn dedupe`                | Built-in yarn deduplication of the lock file                                                                                         |

> Why using `:` to prefix scripts names ? It's convenient in yarn 3+, we can call those scripts from any folder in the monorepo.
> `g:` is a shortcut for `global:`. See the complete list in [root package.json](./package.json).

### Maintaining deps updated

The global commands `yarn deps:check` and `yarn deps:update` will help to maintain the same versions across the entire monorepo.
They are based on the excellent [npm-check-updates](https://github.com/raineorshine/npm-check-updates)
(see [options](https://github.com/raineorshine/npm-check-updates#options), i.e: `yarn check:deps -t minor`).

> After running `yarn deps:update`, a `yarn install` is required. To prevent
> having duplicates in the yarn.lock, you can run `yarn dedupe --check` and `yarn dedupe` to
> apply deduplication. The duplicate check is enforced in the example github actions.

## 5. Quality

### 5.1 Linters

An example of base eslint configuration can be found in [./.eslint.base.js](./.eslintrc.base.js), apps
and packages extends it in their own root folder, as an example see [./apps/web-app/.eslintrc.js](./apps/web-app/.eslintrc.js).
Prettier is included in eslint configuration as well as [eslint-config-next](https://nextjs.org/docs/basic-features/eslint) for nextjs apps.

For code complexity and deeper code analysis [sonarjs plugin](https://github.com/SonarSource/eslint-plugin-sonarjs) is activated.

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

## 6. Editor support

### 6.1 VSCode

The ESLint plugin requires that the `eslint.workingDirectories` setting is set:

```
"eslint.workingDirectories": [
    {
        "pattern": "./apps/*/"
    },
    {
        "pattern": "./packages/*/"
    }
],
```

More info [here](https://github.com/microsoft/vscode-eslint#mono-repository-setup)

## 7. Deploy

### Vercel

Vercel support natively monorepos, see the [vercel-monorepo-deploy](./docs/deploy/deploy-vercel.md) document.

### Docker

There's a basic example for building a docker image, read the [docker doc](./docs/docker/docker.md).

### Others

Netlify, aws-amplify, k8s-docker, serverless-nextjs recipes might be added in the future. PR's welcome too.

## FAQ

### Monorepo

#### Benefits

- [x] **Ease of code reuse.** You can easily extract shared libraries (like api, shared ui, locales, images...) and use them across apps without
      the need of handling them in separate git repos (removing the need to publish, version, test separately...). This limit the tendency to create code duplication
      amongst developers when time is short.
- [x] **Atomic commits.** When projects that work together are contained in separate repositories, releases need to sync which versions of one project work
      with the other. In monorepo CI, sandboxes and releases are much easier to reason about (ie: [dependency hell](https://en.wikipedia.org/wiki/Dependency_hell)...).
      A pull-request contains all changes at once, no need to coordinate multiple packages versions to test it integrally (multiple published canary versions...).
- [x] **Code refactoring.** Changes made on a library will immediately propagate to all consuming apps / packages.
      Typescript / typechecks, tests, ci, sandboxes... will improve the confidence to make a change _(or the right one thanks to improved discoverability of
      possible side effects)_. It also limits the tendency to create tech debt as it invites the dev to refactor all the code that depends on a change.
- [x] **Collaboration across teams**. Consistency, linters, discoverability, duplication... helps to maintain
      cohesion and collaboration across teams.

#### Drawbacks

- [x] **Increased build time**. Generally a concern but not relevant in this context thanks to the combination of
      nextjs/webpack5, typescript path aliases and yarn. Deps does
      not need to be build... modified files are included as needed and properly cached (nextjs webpack5, ci, deploy, docker/buildkit...).
- [x] **Versioning and publishing**. Sometimes a concern when you want to use the shared libraries outside of the monorepo.
      See the notes about [atlassian changeset](https://github.com/atlassian/changesets). Not relevant here.
- [x] **Git repo size**. All packages and apps and history will fit in the same git repository increasing its size and
      checkout time. Generally when you reach size problems, check for assets like images first and extract
      packages that don't churn anymore.
- [x] **Multi-languages**. Setting up a monorepo containing code in multiple languages (php, ruby, java, node) is extremely
      difficult to handle due to nonexistence of mature tooling (bazel...).The general idea is
      to create a monorepo with the same stack (node, typescript...) and managed by the same
      package manager (yarn, pnpm,...)

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

## See also

- https://stackoverflow.com/a/69554480/5490184

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbelgattitude%2Fnextjs-monorepo-example.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbelgattitude%2Fnextjs-monorepo-example?ref=badge_large)
