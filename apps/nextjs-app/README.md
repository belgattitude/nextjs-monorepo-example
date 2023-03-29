# The web-app

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/belgattitude/nextjs-monorepo-example/ci-nextjs-app.yml?style=for-the-badge&label=CI)
![GitHub Workflow E2E Status](https://img.shields.io/github/actions/workflow/status/belgattitude/nextjs-monorepo-example/ci-e2e-nextjs-app.yml?style=for-the-badge&label=E2E)

## Intro

Basic demo of a nextjs app, part of the [nextjs-monorepo-example](https://github.com/belgattitude/nextjs-monorepo-example).

- Home: [Demo/Vercel](https://monorepo-nextjs-app.vercel.app)
- SSR-I18n: [Demo/Vercel english](https://monorepo-nextjs-app.vercel.app/en/home) | [Demo/vercel french](https://monorepo-nextjs-app.vercel.app/fr/home)
- REST API: [Demo rest/Vercel](https://monorepo-nextjs-app.vercel.app/api/rest/post/1)
- GRAPHIQL: [Demo rest/Vercel](https://monorepo-nextjs-app.vercel.app/api/graphql)
- [Changelog](https://github.com/belgattitude/monorepo-nextjs-app/blob/main/apps/nextjs-app/CHANGELOG.md)

## Quick start

```bash
$ yarn install
$ cd apps/nextjs-app
$ yarn dev
```

### Backend

For rest/api database access be sure to start

```bash
docker-compose up main-db
```

To create the database and seed it: see the [@your-org/db-main-prisma README](https://github.com/belgattitude/nextjs-monorepo-example/blob/main/packages/db-main-prisma/README.md).

### Features

> Some common features that have been enabled to widen monorepo testing scenarios.

- [x] Api routes: some api routes for rest.
- [x] I18n: based on [next-i18next](https://github.com/isaachinman/next-i18next)
- [x] Styling: [Emotion v11](https://emotion.sh/) support with critical path extraction enabled.
- [x] Styling: [Tailwind v3](https://tailwindcss.com/) with JIT mode enabled and common plugins.
- [x] Security: [next-secure-headers](https://github.com/jagaapple/next-secure-headers) with basic defaults.
- [x] Seo: [next-seo](https://github.com/garmeeh/next-seo)
- [x] Tests: [jest](https://jestjs.io/) + [ts-jest](https://github.com/kulshekhar/ts-jest) + [@testing-library/react](https://testing-library.com/)
- [x] E2E: [Playwright](https://playwright.dev/)

### Monorepo deps

This app relies on packages in the monorepo, see detailed instructions in [README.md](https://github.com/belgattitude/nextjs-monorepo-example)

```json5
{
  dependencies: {
    "@your-org/core-lib": "workspace:*",
    "@your-org/db-main-prisma": "workspace:*",
    "@your-org/ui-lib": "workspace:*",
  },
}
```

And their counterparts in [tsconfig.json](./tsconfig.json)

```json5
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@your-org/ui-lib/*": ["../../../packages/ui-lib/src/*"],
      "@your-org/ui-lib": ["../../../packages/ui-lib/src/index"],
      "@your-org/core-lib/*": ["../../../packages/core-lib/src/*"],
      "@your-org/core-lib": ["../../../packages/core-lib/src/index"],
      "@your-org/db-main-prisma/*": ["../../../packages/db-main-prisma/src/*"],
      "@your-org/db-main-prisma": [
        "../../../packages/db-main-prisma/src/index",
      ],
    },
  },
}
```

## API routes

### Rest api

Try this route http://localhost:3000/api/rest/poem

### Graphql (sdl)

In development just open http://localhost:3000/api/graphql to have the graphiql console.

Try

```gql
query {
  getUser(id: 1) {
    id
    email
  }
}
```

## Some tips

### I18N & typings

Translations are handled by [next-i18next](https://github.com/isaachinman/next-i18next).
See the [next-i18next.config.mjs](./next-i18next.config.mjs).
The keys autocompletion and typechecks are enabled in [./src/types.d/i18next.d.ts](./src/types.d/i18next.d.ts).

## Structure

```
.
├── apps
│   └── nextjs-app
│       ├── public/
│       │   └── locales/
│       ├── src/
│       │   ├── backend/*     (backend code)
│       │   ├── components/*
│       │   ├── features/*    (regrouped by context)
│       │   └── pages/api     (api routes)
│       ├── .env
│       ├── .env.development
│       ├── (.env.local)*
│       ├── next.config.mjs
│       ├── next-i18next.config.mjs
│       ├── tsconfig.json    (local paths enabled)
│       └── tailwind.config.js
└── packages  (monorepo's packages that this app is using)
    ├── core-lib
    ├── main-db-prisma
    └── ui-lib
```

### Develop

```
$ yarn dev
```
