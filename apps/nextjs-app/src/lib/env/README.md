# Env utilities

Safe validation utilities for envs . Some projects exist in the wild (ie: @t3-app/env)

- see [getValidatedBuildEnv](#getvalidatedbuildenv) for build related envs.
- see [getValidatedServerRuntimeEnv](#getvalidatedserverruntimeenv) for server side only / secrets envs.

## getValidatedServerRuntimeEnv

> doc wip

## getValidatedBuildEnv

Return a validated / transformed environment object from a zodSchema. This is to be used to tune
the build/dev process in next.config.mjs. By convention prefer the `NEXT_BUILD_` prefix if there isn't a
good reason to do otherwise. Using a convention makes it easy to invalidate caches with a wildcard
(ie: turbo)repo.

Validated build envs are shown in the console by default. In case of error it will
exit/die with an error indicating missing requirements. This is particularly helpful in CI,
multiple deployments (previews, staging...) to give a clear indication a build parameters
used (or debug).

```dotenv
# File: ./env
NEXT_BUILD_ENV_OUTPUT=classic
NEXT_BUILD_ENV_TYPECHECK=1
```

```typescript
// File: ./src/config/build-env.config.mjs

// @ts-check

import { z } from "zod";
import {
  getValidatedBuildEnv,
  zConvertTruthyStrToBool,
} from "../lib/env/index.mjs";

export const buildEnvSchema = z.object({
  NEXT_BUILD_ENABLE_TYPECHECK: zConvertTruthyStrToBool().default(
    process.env.NODE_ENV === "development"
  ),
  NEXT_BUILD_ENV_OUTPUT: z
    .enum(["standalone", "classic"], {
      description:
        "For standalone mode: https://nextjs.org/docs/pages/api-reference/next-config-js/output",
    })
    .default("classic"),
});

export const buildEnv = getValidatedBuildEnv(buildEnvSchema);
```

```typescript
// File: ./next/config.mjs

// @ts-check

import { buildEnv } from "./src/config/build-env.config.mjs";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: !buildEnv.NEXT_BUILD_ENABLE_TYPECHECK,
  },
  experimental: {
    output: buildEnv.NEXT_BUILD_ENV_OUTPUT,
  },
};
export default config;
```

### Example output

On success

```bash
$ yarn build

# - info Loaded env from /.env
# - info Build env(s) validation successful:
# - info NEXT_BUILD_ENV_OUTPUT=classic
# - info NEXT_BUILD_ENV_TYPECHECK=false
```

On error

```bash
$ yarn build

# - info Loaded env from /.env
# - error  Invalid server env(s): NEXT_BUILD_ENV_OUTPUT
# {
#  "NEXT_BUILD_ENV_OUTPUT": {
#    "_errors": [
#      "Invalid enum value. Expected 'standalone' | 'classic', received 'clas'"
#    ]
#  }
# }
```

## Example turborepo

```json5
{
  "$schema": "https://turbo.build/schema.json",
  "extends": ["//"],
  "pipeline": {
    "build": {
      /** EASY TO INVALIDATE CACHE BY WILDCARD */
      "env": ["NEXT_BUILD_ENV_*", "NEXT_PUBLIC_*"],
      "outputs": [".next/**", "!.next/cache/**"],
    },
  },
}
```
