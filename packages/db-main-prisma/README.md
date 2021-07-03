# @your-org/db-main-prisma

<p align="left">
  <a aria-label="Build" href="https://github.com/belgattitude/nextjs-monorepo-example/actions?query=workflow%3ACI">
    <img alt="build" src="https://img.shields.io/github/workflow/status/belgattitude/nextjs-monorepo-example/CI-web-app/main?label=CI&logo=github&style=flat-quare&labelColor=000000" />
  </a>
</p>

## Intro

Basic demo of a shared package using [prisma](<(https://prisma.io)>) to handle database access, part of the [nextjs-monorepo-example](https://github.com/belgattitude/nextjs-monorepo-example)

## Install

### Pre-requisites

> Have a database running

#### Option 1: Postgresql local

The default env for `PRISMA_DATABASE_URL` is defined in the main [.env](.env) file.
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

## DB Seeding

Create and seed the database the first time or after a change.

```bash
# Using push here rather than migrate it's easier for
# the example.
$ yarn prisma:db:push
$ yarn prisma:db:seed
```

> **Warning**. Notice how we use ':' rather than spaces. Why ? Cause prisma
> [does not support](https://github.com/prisma/prisma/issues/3865) the .env.[local|development...] supported by nextjs.
> Curious ? Open the package.json script folder to see how we use [dotenv-flow](https://github.com/kerimdzhanov/dotenv-flow) under the hood read [this](https://github.com/prisma/prisma/issues/3865).
