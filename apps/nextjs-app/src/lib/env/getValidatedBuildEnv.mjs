// @ts-check

import { exitOrThrowError, printValidatedEnv } from './utils.mjs';

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
 * @param {{ displayConsole?: boolean, env?: Record<string, string | undefined> }} options
 * @returns { import('zod').infer<T> }
 */
export const getValidatedBuildEnv = (zodSchema, options = {}) => {
  const { env = process.env, displayConsole = true } = options ?? {};
  const parsedEnv = zodSchema.safeParse(env);
  if (parsedEnv.success) {
    if (displayConsole) {
      printValidatedEnv('Build env(s)', parsedEnv);
    }
    return parsedEnv.data;
  }
  exitOrThrowError(parsedEnv);
};
