# @your-org/common-i18n

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/belgattitude/nextjs-monorepo-example/ci-packages.yml?style=for-the-badge&label=CI)

## Intro

One possible way to share locales amongst apps in the monorepo.

### Usage

Add the workspace dependency to the consuming app or package.

```bash
yarn add @your-org/common-locales:"workspace:^"
```

Add an alias in tsconfig.js to enable fast-refresh.

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

Optionally create a file named `./types.d/react-i18next.d.ts` to enable typechecks and autocompletion of keys.

```typescript
import "react-i18next";
import type { I18nNamespaces } from "@your-org/common-i18n";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: I18nNamespaces;
  }
}
```
