// @ts-check

import { isParsableDsn } from '@soluble/dsn-parser';
import { z } from 'zod';

const serverEnvSchema = z.object({
  APP_CACHE_DSN: z.union([
    z.custom((dsn) => {
      return isParsableDsn(dsn);
    }, 'APP_CACHE_DSN is invalid'),
    z.literal(''),
  ]),
});

const parsedEnv = serverEnvSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    '❌ Invalid environment variables:',
    JSON.stringify(parsedEnv.error.format(), null, 4)
  );
  process.exit(1);
}

export const validatedServerEnv = parsedEnv.data;
