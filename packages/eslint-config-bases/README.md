# @your-org/eslint-config-bases

<p align="left">
  <a aria-label="Build" href="https://github.com/belgattitude/nextjs-monorepo-example/actions?query=workflow%3ACI">
    <img alt="build" src="https://img.shields.io/github/workflow/status/belgattitude/nextjs-monorepo-example/CI-web-app/main?label=CI&logo=github&style=flat-quare&labelColor=000000" />
  </a>
</p>

# About

Customizable eslint config bases that can be easily shared and fine-tuned by apps and
packages that lives in the [monorepo example](https://github.com/belgattitude/nextjs-monorepo-example).

## Features

- **Perf:** Plugins enabled on conventional file patterns rather than all files.
- **Customizable:** Each app can extend multiple bases and customize them.
- **Compatible:** Compatibility with prettier.

## Install

```bash
$ yarn add --dev @your-org/eslint-config-bases:"workspace:^"
```

> **Tip:** You may need to add the eslint peer dep as well: `yarn add --dev eslint`.

## Usage

In your app or package, create an `./apps/my-app/.eslintrc.js` file that extends any of the
existing base configs. For example:

```javascript
module.exports = {
  root: true, // Be sure to set root to true in monorepo.
  ignorePatterns: ["**/node_modules", "**/.cache", "build", ".next"],
  extends: [
    "@your-org/eslint-config-bases/typescript",
    "@your-org/eslint-config-bases/sonar",
    "@your-org/eslint-config-bases/regexp",
    "@your-org/eslint-config-bases/jest",
    "@your-org/eslint-config-bases/react",
    "@your-org/eslint-config-bases/rtl",
    "@your-org/eslint-config-bases/graphql-schema",
    "@your-org/eslint-config-bases/storybook",

    // Add specific rules for your framework if needed.
    // ie:
    // - nextjs: 'plugin:@next/next/core-web-vitals',
    // - remix:  '@remix-run/eslint-config',
    // ...

    // Post configure the prettier base so there won't be
    // any conficts between eslint / prettier
    "@your-org/eslint-config-bases/prettier",
  ],
  rules: {
    // Specific global rules for your app or package
  },
  overrides: [
    // Specific file rules for your app or package
  ],
};
```

> **Tip:** "@your-org/eslint-config-bases/prettier" must be set at the end to disable any
> conflicting rules.

## Prettier integration

On top level re-export the prettier base from `@your-org/eslint-config-bases`, for example

```javascript
const { getPrettierConfig } = require("@your-org/eslint-config-bases/helpers");
module.exports = {
  ...prettierConfig,
  overrides: [
    // whatever you need
  ],
};
```

So eslint and prettier won't confict.

## Bases

You can find the bases in `./src/bases` and see how they are defined.

### Typescript

Generic typescript project, mostly based on

| Type/Plugin                                                                                                             | Comment                                                                      |
| :---------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| [eslint:recommended](https://eslint.org/docs/rules/)                                                                    | The basics for code linting.                                                 |
| [@typescript-eslint/recommended](https://typescript-eslint.io/rules/)                                                   | The basics for typescript.                                                   |
| [@typescript-eslint/consistent-type](https://typescript-eslint.io/rules/consistent-type-imports)                        | Use TS 3.8+ imports/exports, helps with [esbuild](https://esbuild.github.io) |
| [@typescript-eslint/naming-convention](https://typescript-eslint.io/rules/naming-convention)                            |                                                                              |
| [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)                                               | Order imports                                                                |
| [eslint-plugin-sonarjs/recommended](https://github.com/SonarSource/eslint-plugin-sonarjs)                               | Help to keep complexity sane                                                 |
| [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)                                            | Run prettier formatting from eslint                                          |
| [eslint-plugin-regexp/recommended](https://github.com/ota-meshi/eslint-plugin-regexp)                                   |                                                                              |
| [eslint-plugin-jest/recommended](https://github.com/jest-community/eslint-plugin-jest)                                  | Jest recommended practices.                                                  |
| [eslint-plugin-react/recommended](https://github.com/yannickcr/eslint-plugin-react)                                     |                                                                              |
| [eslint-plugin-react-hooks/recommended](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) |                                                                              |
| [eslint-plugin-jsx-a11y/recommended](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)                              | Helps to produce accessibility-ready jsx                                     |
| [eslint-plugin-testing-library/recommended](https://github.com/testing-library/eslint-plugin-testing-library)           | Ease when using react-testing-library                                        |

### React

| Type/Plugin                                                                                                             | Comment                                  |
| :---------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- |
| [eslint-plugin-react/recommended](https://github.com/yannickcr/eslint-plugin-react)                                     |                                          |
| [eslint-plugin-react-hooks/recommended](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) |                                          |
| [eslint-plugin-jsx-a11y/recommended](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)                              | Helps to produce accessibility-ready jsx |

### Jest

| Type/Plugin                                                                            | Comment                     |
| :------------------------------------------------------------------------------------- | :-------------------------- |
| [eslint-plugin-jest/recommended](https://github.com/jest-community/eslint-plugin-jest) | Jest recommended practices. |

### React Testing Library

| Type/Plugin                                                                                                   | Comment                               |
| :------------------------------------------------------------------------------------------------------------ | :------------------------------------ |
| [eslint-plugin-testing-library/recommended](https://github.com/testing-library/eslint-plugin-testing-library) | Ease when using react-testing-library |

### Regexp

| Type/Plugin                                                                           | Comment |
| :------------------------------------------------------------------------------------ | :------ |
| [eslint-plugin-regexp/recommended](https://github.com/ota-meshi/eslint-plugin-regexp) |         |

### Etc

...
