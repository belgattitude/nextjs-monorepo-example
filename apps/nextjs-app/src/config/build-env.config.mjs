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
 * @todo working with jsdoc/mjs is limited, see later on how to improve this
 * @satisfies { Record<`NEXT_BUILD_ENV_${string}`, import('zod').ZodSchema> }
 */
const schema = {
  NEXT_BUILD_ENV_OUTPUT: z
    .enum(['standalone', 'classic'], {
      description:
        'For standalone mode: https://nextjs.org/docs/pages/api-reference/next-config-js/output',
    })
    .default('classic'),
  // https://nextjs.org/docs/advanced-features/source-maps',
  NEXT_BUILD_ENV_SOURCEMAPS: zConvertTruthyStrToBool.default(isProd),
  NEXT_BUILD_ENV_LINT: zConvertTruthyStrToBool.default(falseOnCi),
  NEXT_BUILD_ENV_TYPECHECK: zConvertTruthyStrToBool.default(falseOnCi),
  NEXT_BUILD_ENV_CSP: zConvertTruthyStrToBool.default(true),
  NEXT_BUILD_ENV_CI: zConvertTruthyStrToBool.default(isCI),

  // --------------------------------------------------------------------
  // Sentry related
  // --------------------------------------------------------------------
  NEXT_BUILD_ENV_SENTRY_ENABLED: zConvertTruthyStrToBool.default(true),
  NEXT_BUILD_ENV_SENTRY_UPLOAD_DRY_RUN: zConvertTruthyStrToBool.default(true),
  NEXT_BUILD_ENV_SENTRY_DEBUG: zConvertTruthyStrToBool.default(false),
  NEXT_BUILD_ENV_SENTRY_TRACING: zConvertTruthyStrToBool.default(false),
};

export const buildEnvSchema = z.object(schema);

export const buildEnv = getValidatedBuildEnv(buildEnvSchema);
