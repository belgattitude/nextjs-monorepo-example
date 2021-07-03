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

> For rest/api database access be sure to start `docker-compose up database`,
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
- [x] Styling: [Emotion](https://emotion.sh/) support with critical path extraction enabled.
- [x] Styling: [Tailwind](https://tailwindcss.com/) with JIT mode enabled and common plugins.
- [x] Security: [next-secure-headers](https://github.com/jagaapple/next-secure-headers) with basic defaults.
- [x] Seo: [next-seo](https://github.com/garmeeh/next-seo)
- [x] Tests: Jest with ts-jest enabled

Database access for api's and server-side rendered

### Monorepo deps

This app relies on packages in the monorepo, see [how](https://github.com/belgattitude/nextjs-monorepo-example)

```json5
{
  dependencies: {
    '@your-org/core-lib': 'workspace:*',
    '@your-org/db-main-prisma': 'workspace:*',
    '@your-org/ui-lib': 'workspace:*',
  },
}
```

### Structure

```
.
├── apps
│   └── web-app
│       ├── public/
│       │   └── locales/
│       ├── src/
│       │   ├── features/*
│       │   └── pages/api
│       └── next.config.js
└── packages  (monorepo's packages that this app is using)
    ├── core-lib
    ├── main-db-prisma
    └── ui-lib
```

### Develop

```
$ yarn dev
```
