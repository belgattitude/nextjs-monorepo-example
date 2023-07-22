// @ts-check

/**
 * Only for server runtime envs (secrets), not NEXT_PUBLIC_ ones to avoid issues with
 * tree-shaking.
 *
 * Note that libraries such as https://github.com/t3-oss/t3-env aren't yet able to revalidate fully
 * on runtime changes (which limits docker, k8s... ease of use). Others like
 * https://github.com/expatfile/next-runtime-env will do but are not yet prime time.
 *
 * See in the future how it evolves
 */

import { isParsableDsn } from '@soluble/dsn-parser';
import { z } from 'zod';
import { exitOrThrowError, zConvertTruthyStrToBool } from './utils.mjs';

const dsnSchema = z.custom((dsn) => isParsableDsn(dsn), 'Invalid DSN format.');

export const serverRuntimeEnvSchema = z.object({
  APP_CACHE_DSN: z.union([dsnSchema, z.literal('')]),
  PRISMA_DATABASE_URL: dsnSchema,

  // --------------------------------------------------------------------
  // Authentication related
  // --------------------------------------------------------------------
  AUTH_ENABLE_DEMO_ADMIN_USER: zConvertTruthyStrToBool.default(false),

  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(15),

  // @todo implement azure AD
  AZURE_AD_CLIENT_ID: z.string().min(5),
  AZURE_AD_CLIENT_SECRET: z.string().min(20),
  AZURE_AD_TENANT_ID: z.string().min(5),
});

/**
 * Return a validated / transformed environment object from a zodSchema. This is to be used to tune
 * the build/dev process in next.config.mjs. By convention prefer the `NEXT_BUILD_` prefix if there isn't a
 * good reason to do otherwise.
 *
 * Validated build envs are shown in the console by default. In case of error it will
 * exit/die with an error indicating missing requirements. This is particularly helpful in CI,
 * multiple deployments (previews, staging...) to give a clear indication a build parameters
 * used (or debug).
 *
 * @template { import('zod').ZodSchema } T
 * @param { T } zodSchema
 * @param {{ env?: Record<string, string | undefined> }} options
 * @returns { import('zod').infer<T> }
 */
export const getValidatedServerRuntimeEnv = (zodSchema, options = {}) => {
  const { env = process.env } = options ?? {};
  const parsedEnv = zodSchema.safeParse(env);
  if (parsedEnv.success) {
    return parsedEnv.data;
  }
  exitOrThrowError(parsedEnv);
};
