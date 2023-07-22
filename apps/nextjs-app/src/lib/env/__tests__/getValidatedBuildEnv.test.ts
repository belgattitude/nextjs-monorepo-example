import { z } from 'zod';
import { getValidatedBuildEnv } from '../getValidatedBuildEnv.mjs';
import { zConvertTruthyStrToBool } from '../utils.mjs';

describe('getBuildEnv', () => {
  const createExampleSchema = (options: {
    defaultOutput: 'classic' | 'standalone';
  }) => {
    const { defaultOutput } = options;
    return z.object({
      NEXT_BUILD_ENV_OUTPUT: z
        .enum(['standalone', 'classic'], {
          description:
            'For standalone mode: https://nextjs.org/docs/pages/api-reference/next-config-js/output',
        })
        .default(defaultOutput),
      NEXT_BUILD_ENV_SOURCEMAPS: z
        .boolean({
          description:
            'Disable sourcemaps: https://nextjs.org/docs/advanced-features/source-maps',
        })
        .default(true),
      NEXT_BUILD_ENV_LINT: zConvertTruthyStrToBool.default(true),
      NEXT_BUILD_ENV_TYPECHECK: zConvertTruthyStrToBool.default(true),
    });
  };

  it('should return default values', () => {
    const zodSchema = createExampleSchema({ defaultOutput: 'classic' });
    const injectedEnv = {
      NEXT_BUILD_ENV_OUTPUT: 'classic',
    };
    const buildEnv = getValidatedBuildEnv(zodSchema, {
      env: injectedEnv,
    });
    expect(
      (buildEnv as unknown as typeof injectedEnv).NEXT_BUILD_ENV_OUTPUT
    ).toStrictEqual('classic');
  });

  describe('boolean coercion', () => {
    it.each([
      ['true', true],
      ['1', true],
      ['false', false],
      ['0', false],
    ])('when "%p" is given should return "%b"', (truthyValue, expected) => {
      const zodSchema = createExampleSchema({ defaultOutput: 'classic' });
      const injectedEnv = {
        NEXT_BUILD_ENV_LINT: truthyValue,
      };
      const buildEnv = getValidatedBuildEnv(zodSchema, {
        env: injectedEnv,
      });
      expect(
        (buildEnv as unknown as typeof injectedEnv).NEXT_BUILD_ENV_LINT
      ).toStrictEqual(expected);
    });
  });
});
