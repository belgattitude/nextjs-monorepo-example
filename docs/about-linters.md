# About linters

This doc provides tips and tricks based on [eslint](https://eslint.org) and [prettier](https://prettier.org) in the
context of the [nextjs-monorepo-example](https://github.com/belgattitude/nextjs-monorepo-example).
It covers few popular plugins, their configurations, how to run them efficiently
on CI and how they can be customized per apps or packages.

## Plugins

Depending on the nature of the project (plain typescript, react, nextjs...), the following plugins are enabled:

| Type/Plugin                                                                                                             | Scope  | Comment                                                                      |
| :---------------------------------------------------------------------------------------------------------------------- | :----- | :--------------------------------------------------------------------------- |
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

## Structure

Often in monorepos you might want to apply different plugins or config differently for each package. There's many
ways to achieve it. The [nextjs-monorepo-example](https://github.com/belgattitude/nextjs-monorepo-example) uses a
nested strategy to achieve it:

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

## Performance
