# About linters

This doc provides tips and tricks based on [eslint](https://eslint.org) and [prettier](https://prettier.org) in the
context of the [nextjs-monorepo-example](https://github.com/belgattitude/nextjs-monorepo-example).
It covers few popular plugins, their configurations, how to run them efficiently
on CI and how they can be customized per apps or packages.

## Plugins

Depending on the nature of the project (plain typescript, react, nextjs...), the following plugins are enabled:

| Type/Plugin                                                                                                             | Scope  | Comment                                                                      |
| :---------------------------------------------------------------------------------------------------------------------- | :----- | :--------------------------------------------------------------------------- |
| [eslint:recommended](https://eslint.org/docs/rules/)                                                                    | base   | The basics for code linting.                                                 |
| [@typescript-eslint/recommended](https://typescript-eslint.io/rules/)                                                   | base   | The basics for typescript.                                                   |
| [@typescript-eslint/consistent-type](https://typescript-eslint.io/rules/consistent-type-imports)                        | base   | Use TS 3.8+ imports/exports, helps with [esbuild](https://esbuild.github.io) |
| [@typescript-eslint/naming-convention](https://typescript-eslint.io/rules/naming-convention)                            | base   |                                                                              |
| [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)                                               | base   | Order imports                                                                |
| [eslint-plugin-sonarjs/recommended](https://github.com/SonarSource/eslint-plugin-sonarjs)                               | base   | Help to keep complexity sane                                                 |
| [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)                                            | base   | Run prettier formatting from eslint                                          |
| [eslint-plugin-regexp/recommended](https://github.com/ota-meshi/eslint-plugin-regexp)                                   | base   |                                                                              |
| [eslint-plugin-jest/recommended](https://github.com/jest-community/eslint-plugin-jest)                                  | base   | Jest recommended practices.                                                  |
| [eslint-plugin-react/recommended](https://github.com/yannickcr/eslint-plugin-react)                                     | react  |                                                                              |
| [eslint-plugin-react-hooks/recommended](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) | react  |                                                                              |
| [eslint-plugin-jsx-a11y/recommended](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)                              | react  | Helps to produce accessibility-ready jsx                                     |
| [eslint-plugin-testing-library/recommended](https://github.com/testing-library/eslint-plugin-testing-library)           | react  | Ease when using react-testing-library                                        |
| [@next/next/core-web-vitals](https://nextjs.org/docs/basic-features/eslint#eslint-plugin)                               | nextjs | NextJs specific                                                              |
| ...                                                                                                                     | ...    | ...                                                                          |

There's many more in the wild.

## Structure

Often in monorepo you might want to apply different plugins or config differently for each package. There's many
ways to achieve it. The [nextjs-monorepo-example](https://github.com/belgattitude/nextjs-monorepo-example) uses a
nested approach:

```
.
├── apps
│   ├── remix-app
│   │   └── .eslintrc.js   (extends eslint.base: adds react, rtl...)
│   └── web-app
│       └── .eslintrc.js   (extends eslint.base: adds react, nextjs, rtl...)
├── packages
│   ├── db-main-prisma
│   │   └── .eslintrc.js   (re-export eslint.base: no changes)
│   └── ui-lib
│       └── .eslintrc.js   (extends eslint.base: adds react, rtl, storybook...)
│
├── .eslint.base.js        (base config to extend: just typescript and jest)
├── .prettierignore        (prettier ignored files)
└── .prettierrc.js         (prettier global configuration)
```

Open the files above to know more about configuration.

## Commands

If you are in a specific package, you can run the linter from the package directory.

| Name              | Description            |
| ----------------- | ---------------------- |
| `yarn lint`       | Display linter issues. |
| `yarn lint --fix` | Run automatic fixes.   |

It's possible to run the linter globally from any folder of the monorepo.

| Name                | Description                                    |
| ------------------- | ---------------------------------------------- |
| `yarn g:lint`       | Display linter issues in all apps and packages |
| `yarn g:lint --fix` | Run automatic fixes                            |

## Lint-staged

See the [specific doc](./about-lint-staged.md).

## Performance

By default, all lint command will automatically enable cache.

On Github CI, the cache will be persisted thx to `action/cache`.

<details>
  <summary>action/cache example</summary>

```yaml
- name: Restore packages cache
  uses: actions/cache@v2
  with:
    path: |
      ${{ github.workspace }}/.cache
      ${{ github.workspace }}/**/tsconfig.tsbuildinfo
      ${{ github.workspace }}/**/.eslintcache

    key: ${{ runner.os }}-packages-cache-${{ hashFiles('**/yarn.lock') }}-${{ hashFiles('packages/**.[jt]sx?', 'packages/**.json') }}
    restore-keys: |
      ${{ runner.os }}-packages-cache-${{ hashFiles('**/yarn.lock') }}-
```

</details>

## Installation

In monorepos, rathers than installing linters at the root level, a safer approach is to specify them
per apps/packages. If you're creating a new package, here's the typical dev-dependencies to add:

### Base

Generic typescript project with jest

```bash
yarn add --dev prettier eslint \
               eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-jest \
               eslint-plugin-jest-formatting eslint-plugin-prettier eslint-plugin-regexp \
               eslint-plugin-sonarjs @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### React

Generic react

```bash
yarn add --dev eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks \
               eslint-plugin-testing-library
```

### Nextjs

Specific to nextjs.

```bash
yarn add --dev eslint-config-next
```

## Future

Note that when times come a good move is to create a ./packages/my-eslint-plugin. That
eases the installation and the configuration.
