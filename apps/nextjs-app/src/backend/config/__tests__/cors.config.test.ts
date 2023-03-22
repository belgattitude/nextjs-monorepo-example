import { getCorsWhitelistOriginRegexp } from '../cors.config';

describe('cors.config "smoke" test', () => {
  describe('ensure validity of regexp in config', () => {
    const corsAllowedOrigins: string[] = [
      '.+\\-belgattitude.vercel.app',
      'failwell.be',
      'localhost',
    ];
    const regexp = getCorsWhitelistOriginRegexp(corsAllowedOrigins);

    it('regexp should not fail', () => {
      expect(regexp.test('https://nothing')).toStrictEqual(false);
      expect(regexp.test('localhost')).toStrictEqual(false);
      expect(regexp.test('http://localhost')).toStrictEqual(true);
      expect(regexp.test('http://localhost:3000')).toStrictEqual(true);
      expect(
        regexp.test('https://preview-belgattitude.vercel.app')
      ).toStrictEqual(true);
      expect(regexp.test('https://failwell.be')).toStrictEqual(true);
      expect(regexp.test('https://www.failwell.be')).toStrictEqual(true);
    });
  });
});
