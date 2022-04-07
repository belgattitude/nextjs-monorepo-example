# @mqs/db-main-prisma

<p align="left">
  <a aria-label="Build" href="https://github.com/mqschwanda/nextjs-monorepo/actions?query=workflow%3ACI">
    <img alt="build" src="https://img.shields.io/github/workflow/status/mqschwanda/nextjs-monorepo/CI-web-app/main?label=CI&logo=github&style=flat-quare&labelColor=000000" />
  </a>
</p>

## Intro

Basic demo of a shared package using [prisma](<(https://prisma.io)>) to handle database access, part of the [nextjs-monorepo-example](https://github.com/mqschwanda/nextjs-monorepo)

## Quick start

Start the database with `docker-compose up database` then run

```bash
cd packages/db-main-prisma
yarn prisma-db-push
yarn prisma-db-seed
```

> See the .env(.local|.production|.development) file to edit the connection.
> **Curious about the setup ?**, we use [dotenv-flow](https://github.com/kerimdzhanov/dotenv-flow) under the hood read [this](https://github.com/prisma/prisma/issues/3865)
> and see the script section of [./package.json](./package.json)

## Install

### Database

#### Option 1: Postgresql local

The default env for `PRISMA_DATABASE_URL` is defined in the main [.env](.env) file.
By default, it connects to the postgresql service defined in [../../docker-compose.yml](../../docker-compose.yml).

Ensure you have docker and docker-compose and run

```bash
# In the root folder
docker-compose up database
# Alternatively, from any folder
yarn docker:up
```

#### Option 2: An hosted postgres instance

To quick start, you can use a free tier at supabase.io, but all providers will work.

As an example, simply create an `.env.local` and set the supabase pgbouncer url:

```env
PRISMA_DATABASE_URL=postgresql://postgres:[PASSWORD]@[HOST]:[PORT]/postgres?schema=public&pgbouncer=true&sslmode=require&sslaccept=strict&sslcert=../config/certs/supabase-prod-ca-2021.crt
```

> You can append `&connection_limit=1` if deploying on a serverless/lambda provider (ie: vercel, netlify...)

## DB creation

To create the database, simply run

```bash
yarn prisma-db-push
```

## DB Seeding

Create and seed the database the first time or after a change.

```bash
yarn prisma-db-seed
```

## DB type generation

Create or update the types. This is generally automatically done in
a postinstall from any app, see script section of [../../apps/web-app/package.json](../../apps/web-app/package.json)
or try it out with `yarn workspace web-app postinstall`

```bash
yarn prisma generate
```
