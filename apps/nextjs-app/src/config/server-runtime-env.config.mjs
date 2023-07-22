// @ts-check

import { isParsableDsn } from '@httpx/dsn-parser';
import { z } from 'zod';
import {
  getValidatedServerRuntimeEnv,
  zConvertTruthyStrToBool,
} from '../lib/env/index.mjs';

const dsnSchema = z.custom((dsn) => isParsableDsn(dsn), 'Invalid DSN format.');

export const serverRuntimeEnvSchema = z.object({
  // --------------------------------------------------------------------
  // Global server side services
  // --------------------------------------------------------------------
  APP_CACHE_DSN: z.union([dsnSchema, z.literal('')]),
  PRISMA_DATABASE_URL: dsnSchema,

  // --------------------------------------------------------------------
  // Authentication related
  // --------------------------------------------------------------------
  AUTH_ENABLE_DEMO_ADMIN_USER: zConvertTruthyStrToBool.default(false),

  NEXTAUTH_SECRET: z.string().min(15),
  NEXTAUTH_URL: z.string().url(),
});

export const getServerRuntimeEnv = () =>
  getValidatedServerRuntimeEnv(serverRuntimeEnvSchema);
