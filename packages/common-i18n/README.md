# @your-org/common-i18n

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/belgattitude/nextjs-monorepo-example/ci-packages.yml?style=for-the-badge&label=CI)

## Purpose

Provide a central place to store translations for the monorepo apps and packages.

## Dependencies

Although no deps are required to use the translations, the choice of json files and their
organization into namespaces fits well with i18next/react-i18next/next-18next.

### Usage

Add the workspace dependency to the consuming app or package.

```bash
yarn add @your-org/common-locales:"workspace:^"
```

Add the paths in the app tsconfig.json.

```json5
{
  "compilerOptions": {
    "paths": {
      "@your-org/common-i18n": ["../../../packages/common-i18n/src/index"],
      "@your-org/common-i18n/locales/*": [
        "../../../packages/common-i18n/src/locales/*",
      ],
    },
  },
}
```

## i18next support

Optionally create a file named `apps/my-app/types.d/i18next.d.ts` to enable typechecks and autocompletion of keys.

```typescript
/**
 * Types augmentation for translation keys to allow to typecheck
 * and suggesting keys to the t function. In case it's too slow
 * you can opt out by commenting the following code.
 * @link https://react.i18next.com/latest/typescript
 */
import type { I18nResources } from "@your-org/common-i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: I18nResources;
  }
}
```
