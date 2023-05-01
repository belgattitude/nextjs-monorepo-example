import { type z } from 'zod';
import { type serverEnvSchema } from '../config/validated-server-env.mjs';

type ValidatedProcessEnv = z.infer<typeof serverEnvSchema>;

declare global {
  declare namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface ProcessEnv extends ValidatedProcessEnv {}
  }
}
