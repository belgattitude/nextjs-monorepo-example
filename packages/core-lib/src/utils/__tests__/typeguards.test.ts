import {
  isIsoDateString,
  isNonEmptyString,
  isParsableNumeric,
  isPlainObject,
} from '../typeguards';

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
    it.each([
      [10, true],
      ['100', true],
      ['-3', true],
      ['2.12', true],
      [NaN, false],
      [undefined, false],
      [false, false],
      [null, false],
      [{}, false],
      [[], false],
      [new Date(), false],
    ])('when "%p" is given should return "%b"', (value, expected) => {
      expect(isParsableNumeric(value)).toStrictEqual(expected);
    });
  });

  describe('isIsoDateString', () => {
    it('should return true for valid isoDate strings', () => {
      expect(isIsoDateString('2022-02-06T15:20:19.131Z')).toBeTruthy();
    });
    it('should return false for invalid isDate strings', () => {
      expect(isIsoDateString('2022-40-20T15:20:19.131Z')).toBeFalsy();
      expect(isIsoDateString(new Date())).toBeFalsy();
      expect(isIsoDateString(null)).toBeFalsy();
    });
  });

  describe('isPlainObject', () => {
    it.each([
      [{}, true],
      [{ name: 'seb' }, true],
      [{ name: 'deep', children: [{ test: 1 }] }, true],
      [new Date(), false],
      [false, false],
      [undefined, false],
      [null, false],
      [() => 'cool', false],
    ])('when "%p" is given, should return %p', (v, expected) => {
      expect(isPlainObject(v)).toStrictEqual(expected);
    });
  });
});
