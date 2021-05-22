import { isNonEmptyString, isParsableNumeric } from '../typeguards';

describe('Typeguards tests', () => {
  describe('isNonEmptyString', () => {
    it('should trim by default', () => {
      expect(isNonEmptyString('  ')).toStrictEqual(isNonEmptyString(''));
    });
    describe('when trim === true (default)', () => {
      it('should work as expected', () => {
        expect(isNonEmptyString('cool')).toBeTruthy();
        expect(isNonEmptyString(1)).toBeFalsy();
        expect(isNonEmptyString('  ')).toBeFalsy();
        expect(isNonEmptyString('')).toBeFalsy();
        expect(isNonEmptyString(null)).toBeFalsy();
        expect(isNonEmptyString({})).toBeFalsy();
      });
    });
    describe('when trim === false', () => {
      it('should work as expected', () => {
        expect(isNonEmptyString('cool ', false)).toBeTruthy();
        expect(isNonEmptyString('  ', false)).toBeTruthy();
      });
    });
  });
  describe('isParsableNumeric', () => {
    it('should work as expected', () => {
      expect(isParsableNumeric(10)).toBeTruthy();
      expect(isParsableNumeric('100')).toBeTruthy();
      expect(isParsableNumeric('-3')).toBeTruthy();
      expect(isParsableNumeric('2.12')).toBeTruthy();
      expect(isParsableNumeric(NaN)).toBeFalsy();
      expect(isParsableNumeric(undefined)).toBeFalsy();
      expect(isParsableNumeric(null)).toBeFalsy();
      expect(isParsableNumeric(false)).toBeFalsy();
      expect(isParsableNumeric({})).toBeFalsy();
      expect(isParsableNumeric([])).toBeFalsy();
      expect(isParsableNumeric(new Date())).toBeFalsy();
    });
  });
});
