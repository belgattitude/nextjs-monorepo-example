import { type z } from 'zod';
import { type serverRuntimeEnvSchema } from '../config/server-runtime-env.config.mjs';

/**
 * runtime-server-env.mjs does not mutate process.env. So the exact types can't be
 * known at process.env level.
 */
type ProcessEnvKeyForServerEnv = Record<
  keyof z.infer<typeof serverRuntimeEnvSchema>,
  string | undefined
>;

type AugmentedProcessEnv = ProcessEnvKeyForServerEnv;

declare global {
  declare namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface ProcessEnv extends AugmentedProcessEnv {}
  }
}
