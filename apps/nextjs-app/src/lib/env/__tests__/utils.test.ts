import { z } from 'zod';
import { zConvertTruthyStrToBool } from '../utils.mjs';

describe('utils', () => {
  describe('zConvertTruthyToBool', () => {
    it.each([
      [undefined, false, false],
      [undefined, true, true],
      ['true', true, true],
      ['true', false, true],
      ['1', true, true],
      ['0', true, false],
    ] as [value: string | undefined, defaultVal: boolean, expected: boolean][])(
      'when "%s" is given should return "%s"',
      (value, defaultVal, expected) => {
        const schema = z.object({
          TEST: zConvertTruthyStrToBool(defaultVal),
        });

        const parsed = schema.safeParse({ TEST: value });
        expect(parsed).toStrictEqual({
          data: {
            TEST: expected,
          },
          success: true,
        });
      }
    );
  });
});
