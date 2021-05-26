# The web-app

<p align="left">
  <a aria-label="Build" href="https://github.com/belgattitude/nextjs-monorepo-example/actions?query=workflow%3ACI">
    <img alt="build" src="https://img.shields.io/github/workflow/status/belgattitude/nextjs-monorepo-example/CI-web-app/main?label=CI&logo=github&style=flat-quare&labelColor=000000" />
  </a>
</p>

> Part of the [nextjs-monorepo-example](https://github.com/belgattitude/nextjs-monorepo-example)

## Quick start

### Step 1: Database

This project uses [Prisma](https://prisma.io) as primary database layer an connect
to a postgresql database. An example schema is defined in [./prisma/schema.prisma](./prisma/schema.prisma),
seeds are available in [./prisma/seeds.ts](./prisma/seed.ts).

#### Option 1: Postgresql local

The default env for PRISMA_DATABASE_URL is defined in the main [.env](.env) file.
By default, it connects to the postgresql service defined in [../../docker-compose.yml](../../docker-compose.yml).

Ensure you have docker and docker-compose and run

```bash
# In the root folder
$ docker-compose up database
# Alternatively, from any folder
$ yarn docker:up
```

#### Option 2: An hosted postgres instance

To quick start, you can use a free tier at supabase.io, but all providers will work.

As an example, simply create an `.env.local` and set the supabase pgbouncer url:

```env
PRISMA_DATABASE_URL=postgresql://postgres:[PASSWORD]@[HOST]:[PORT]/postgres?schema=public&pgbouncer=true&sslmode=require&sslaccept=strict&sslcert=../config/certs/supabase-prod-ca-2021.crt
```

> You can append `&connection_limit=1` if deploying on a serverless/lambda provider (ie: vercel, netlify...)

### Step 2:

Create and seed the database the first time or after a change.

```bash
# Using push here rather than migrate it's easier for
# the example.
$ yarn prisma:db:push
$ yarn prisma:db:seed
```

> **Warning**. Notice how we use ':' rather than spaces. Why ? Cause prisma
> [does not support](https://github.com/prisma/prisma/issues/3865) the .env.[local|development...] supported by nextjs.
> Curious ? Open the package.json script folder to see how we use dotenv-flow under the hood read [this](https://github.com/prisma/prisma/issues/3865).

## Nextjs

### Develop

```
$ yarn dev
```

To test the api/db browse to

- http://localhost:3000/api/rest/post/1
