# The web-app

<p align="left">
  <a aria-label="Build" href="https://github.com/belgattitude/nextjs-monorepo-example/actions?query=workflow%3ACI">
    <img alt="build" src="https://img.shields.io/github/workflow/status/belgattitude/nextjs-monorepo-example/CI-web-app/main?label=CI&logo=github&style=flat-quare&labelColor=000000" />
  </a>
</p>

> Part of the [nextjs-monorepo-example](https://github.com/belgattitude/nextjs-monorepo-example)

## Develop

```bash
$ cd apps/web-app
$ yarn dev -p 3001
# Alternatively: yarn workspace webapp run dev -p 3000
```

## Prisma

### Generate client

```bash
$ yarn prisma generate
```

### Seeding data

```bash
$ yarn prisma db seed --preview-feature
``
```
