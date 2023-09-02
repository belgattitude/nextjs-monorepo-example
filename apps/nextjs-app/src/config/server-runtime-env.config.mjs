// @ts-check

import { isParsableDsn } from '@httpx/dsn-parser';
import { default as isCI } from 'is-ci';
import { z } from 'zod';
import {
  getValidatedServerRuntimeEnv,
  zConvertTruthyStrToBool,
} from '../lib/env/index.mjs';

// Although used by many tools, production phases are internal and not documented in nextjs.
// So we're left with one option, specifying via an env variable (not a build-env cause they validate at build time)
// and we want to keep something that works at build (ie docker) and runtime.
// @see confirmed by Lee Robinson - https://github.com/vercel/next.js/issues/37269#issuecomment-1608579557
const isProductionPhaseBuild = process.env.NEXTJS_PRODUCTION_PHASE === 'build';
const isTest = process.env.NODE_ENV === 'test';
const isRunningInCI = process.env.CI === 'true' || isCI;

const disableRuntimeValidation =
  isProductionPhaseBuild || isTest || isRunningInCI;

/**
 * @type {import('zod').ZodType<string>}
 */
const dsnSchema = z.custom((dsn) => isParsableDsn(dsn), 'Invalid DSN format.');

/**
 * @typedef {import('zod').infer<typeof serverRuntimeEnvSchema>} ServerRuntimeEnv
 */

export const serverRuntimeEnvSchema = z.object({
  // --------------------------------------------------------------------
  // Global server side services
  // --------------------------------------------------------------------
  APP_CACHE_DSN: z.union([dsnSchema, z.literal('')]),
  PRISMA_DATABASE_URL: dsnSchema,

  // --------------------------------------------------------------------
  // Authentication related
  // --------------------------------------------------------------------
  AUTH_ENABLE_DEMO_ADMIN_USER: zConvertTruthyStrToBool(false),

  NEXTAUTH_SECRET: z.string().min(40),
  NEXTAUTH_URL: z.string().min(10).url(),
  // @see alternative for production: https://next-auth.js.org/configuration/options#logger
  NEXTAUTH_DEBUG: zConvertTruthyStrToBool(false),
  // Disable https protection
  NEXTAUTH_DISABLE_SECURE_COOKIE: zConvertTruthyStrToBool(false),
});

/**
 * @type any
 */
const disabledServerRuntimeEnv = {};

/**
 * @return {ServerRuntimeEnv}
 */
export const getServerRuntimeEnv = () => {
  return disableRuntimeValidation
    ? /** @type ServerRuntimeEnv */ disabledServerRuntimeEnv
    : getValidatedServerRuntimeEnv(serverRuntimeEnvSchema);
};
