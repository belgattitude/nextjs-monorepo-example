// @ts-check

import pc from 'picocolors';
import { z } from 'zod';

const isRunningInNode = process !== undefined;
const isTestEnv = process.env.NODE_ENV === 'test';

export const truthyStrEnvValue = ['true', '1'];

/**
 * Allow to convert truthy string ('1', 'true') values to boolean
 */
export const zConvertTruthyStrToBool = z.preprocess(
  // @ts-ignore
  (val) => truthyStrEnvValue.includes(val),
  z.boolean()
);

/**
 * @type {(zodSafeParseError: import('zod').SafeParseError<unknown>) => never}
 */
export const exitOrThrowError = (zodSafeParseError) => {
  if (isRunningInNode && !isTestEnv) {
    console.error(
      '- ' + pc.red('error'.padEnd(7)).concat('Invalid server env(s):'),
      Object.keys(zodSafeParseError.error.flatten().fieldErrors).join(',')
    );
    console.error(JSON.stringify(zodSafeParseError.error.format(), null, 2));
    process.exit(1);
  } else {
    throw new Error(
      `Invalid server env(s): ${JSON.stringify(
        zodSafeParseError.error.format(),
        null,
        2
      )}}`
    );
  }
};

/**
 * @type {(section: 'Build env(s)' | 'Server env(s)', zodSafeParseSuccess: import('zod').SafeParseSuccess<any>) => void}
 */
export const printValidatedEnv = (section, zodSafeParseSuccess) => {
  if (isRunningInNode && !isTestEnv) {
    const prefix = pc.cyan('- info'.padEnd(7));
    console.info(prefix.concat(`${section} validation successful:`));
    for (const [key, value] of Object.entries(zodSafeParseSuccess.data)) {
      console.info(prefix.concat(`${key}=${value}`));
    }
  }
};
