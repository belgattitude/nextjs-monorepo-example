// @ts-check

import { z } from 'zod';
import {
  getValidatedBuildEnv,
  truthyStrEnvValue,
  zConvertTruthyStrToBool,
} from '../lib/env/index.mjs';

const isCI = truthyStrEnvValue.includes(process.env?.CI ?? 'false');
const isProd = process.env.NODE_ENV === 'production';

const falseOnCi = !isCI;

/**
 * @satisfies { Record<`NEXT_BUILD_ENV_${string}`, import('zod').ZodSchema> }
 */
const schema = {
  NEXT_BUILD_ENV_OUTPUT: z
    .enum(['standalone', 'classic'], {
      description:
        'For standalone mode: https://nextjs.org/docs/pages/api-reference/next-config-js/output',
    })
    .default('classic'),
  NEXT_BUILD_ENV_TSCONFIG: z
    .string()
    .endsWith('.json')
    .default('tsconfig.json'),
  NEXT_BUILD_ENV_TYPECHECK: zConvertTruthyStrToBool(falseOnCi),
  NEXT_BUILD_ENV_LINT: zConvertTruthyStrToBool(falseOnCi),
  NEXT_BUILD_ENV_SOURCEMAPS: zConvertTruthyStrToBool(isProd),
  NEXT_BUILD_ENV_CSP: zConvertTruthyStrToBool(true),
  NEXT_BUILD_ENV_CI: zConvertTruthyStrToBool(isCI),
  NEXT_BUILD_ENV_BUILD_ID: z
    .string()
    .default(isProd ? new Date().toISOString().replace(':', '_') : ''),
  // --------------------------------------------------------------------
  // Sentry related
  // --------------------------------------------------------------------
  NEXT_BUILD_ENV_SENTRY_ENABLED: zConvertTruthyStrToBool(false),
  NEXT_BUILD_ENV_SENTRY_DEBUG: zConvertTruthyStrToBool(false),
  NEXT_BUILD_ENV_SENTRY_TRACING: zConvertTruthyStrToBool(false),
};

export const buildEnvSchema = z.object(schema);

export const buildEnv = getValidatedBuildEnv(buildEnvSchema);
