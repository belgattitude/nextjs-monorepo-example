import { isNonEmptyString } from '../typeguards';

describe('Typeguards tests', () => {
  describe('isNonEmptyString', () => {
    it('should trim by default', () => {
      expect(isNonEmptyString('  ')).toStrictEqual(isNonEmptyString(''));
    });
    describe('When trim === true (default)', () => {
      it('should work as expected', () => {
        expect(isNonEmptyString('cool')).toBeTruthy();
        expect(isNonEmptyString(1)).toBeFalsy();
        expect(isNonEmptyString('  ')).toBeFalsy();
        expect(isNonEmptyString('')).toBeFalsy();
        expect(isNonEmptyString(null)).toBeFalsy();
        expect(isNonEmptyString({})).toBeFalsy();
      });
    });
    describe('When trim === false', () => {
      it('should work as expected', () => {
        expect(isNonEmptyString('cool ', false)).toBeTruthy();
        expect(isNonEmptyString('  ', false)).toBeTruthy();
      });
    });
  });
});
