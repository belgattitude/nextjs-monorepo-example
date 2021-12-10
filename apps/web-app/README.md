# The web-app

<p align="left">
  <a aria-label="Build" href="https://github.com/belgattitude/nextjs-monorepo-example/actions?query=workflow%3ACI">
    <img alt="build" src="https://img.shields.io/github/workflow/status/belgattitude/nextjs-monorepo-example/CI-web-app/main?label=CI&logo=github&style=flat-quare&labelColor=000000" />
  </a>
</p>

## Intro

Basic demo nextjs web-app, part of the [nextjs-monorepo-example](https://github.com/belgattitude/nextjs-monorepo-example).

- Homepage: [Demo/Vercel english](https://nextjs-monorepo-example-web-app.vercel.app/en/home) | [Demo/vercel french](https://nextjs-monorepo-example-web-app.vercel.app/fr/home)
- API: [Demo rest/Vercel](https://nextjs-monorepo-example-web-app.vercel.app/api/rest/post/1)
- [Changelog](https://github.com/belgattitude/nextjs-monorepo-example/blob/main/apps/web-app/CHANGELOG.md)

## Quick start

> For rest/api database access be sure to start `docker-compose up main-db`,
> see detailed instructions (seeding, docker, supabase...) in the [@your-org/db-main-prisma README](https://github.com/belgattitude/nextjs-monorepo-example/blob/main/packages/db-main-prisma/README.md).

```bash
$ yarn install
$ cd apps/web-app
$ yarn dev
```

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

In development just open http://localhost:3000/api/graphql-sdl to have the graphiql console.

Try

```gql
query {
  allPoems {
    id
    title
  }
}
```

## Some tips

### I18N & typings

Translations are handled by [next-i18next](https://github.com/isaachinman/next-i18next).
See the [next-i18next.config.js](./next-i18next.config.js).
The keys autocompletion and typechecks are enabled in [./src/typings/react-i18next.d.ts](./src/typings/react-i18next.d.ts).

## Structure

```
.
├── apps
│   └── web-app
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
│       ├── next.config.js
│       ├── next-i18next.config.js
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
