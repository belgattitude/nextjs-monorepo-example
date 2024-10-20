import { getCorsWhitelistOriginRegexp } from '../cors.config';

describe('cors.config "smoke" test', () => {
  describe('ensure validity of regexp in config', () => {
    const corsAllowedOrigins: string[] = [
      String.raw`.+\-belgattitude.vercel.app`,
      'failwell.be',
      'localhost',
    ];
    const regexp = getCorsWhitelistOriginRegexp(corsAllowedOrigins);

    it('regexp should not fail', () => {
      expect(regexp.test('https://nothing')).toBe(false);
      expect(regexp.test('localhost')).toBe(false);
      expect(regexp.test('http://localhost')).toBe(true);
      expect(regexp.test('http://localhost:3000')).toBe(true);
      expect(regexp.test('https://preview-belgattitude.vercel.app')).toBe(true);
      expect(regexp.test('https://failwell.be')).toBe(true);
      expect(regexp.test('https://www.failwell.be')).toBe(true);
    });
  });
});
