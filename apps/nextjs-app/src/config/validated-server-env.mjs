// @ts-check

import { isParsableDsn } from '@soluble/dsn-parser';
import pc from 'picocolors';
import { z } from 'zod';

const dsnSchema = z.custom((dsn) => isParsableDsn(dsn), 'Invalid DSN format.');

export const serverEnvSchema = z.object({
  APP_CACHE_DSN: z.union([dsnSchema, z.literal('')]),
  PRISMA_DATABASE_URL: dsnSchema,
  NEXTAUTH_SECRET: z.string().min(15),
  NEXTAUTH_URL: z.string().url(),
});

const parsedEnv = serverEnvSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    pc.red('error'.padEnd(6)).concat('- Invalid server env(s):'),
    Object.keys(parsedEnv.error.flatten().fieldErrors).join(',')
  );
  console.error(JSON.stringify(parsedEnv.error.format(), null, 2));
  process.exit(1);
}

export const validatedServerEnv = parsedEnv.data;
