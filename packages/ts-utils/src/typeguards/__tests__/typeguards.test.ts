import {
  isHttpStatusCode,
  isIsoDateString,
  isNonEmptyString,
  isParsableNumeric,
  isParsableSafeInteger,
  isPlainObject,
  isPresent,
} from '..';

describe('Typeguards tests', () => {
  describe('isNonEmptyString', () => {
    it('should trim by default', () => {
      expect(isNonEmptyString('  ')).toStrictEqual(isNonEmptyString(''));
    });
    describe('when trim === true (default)', () => {
      it('should work as expected', () => {
        expect(isNonEmptyString('cool')).toBe(true);
        expect(isNonEmptyString(1)).toBe(false);
        expect(isNonEmptyString('  ')).toBe(false);
        expect(isNonEmptyString('')).toBe(false);
        expect(isNonEmptyString(null)).toBe(false);
        expect(isNonEmptyString({})).toBe(false);
      });
    });
    describe('when trim === false', () => {
      it('should work as expected', () => {
        expect(isNonEmptyString('cool ', false)).toBe(true);
        expect(isNonEmptyString('  ', false)).toBe(true);
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

  describe('isHttpStatusCode', () => {
    it.each([
      [200, true],
      [800, false],
      ['-3', false],
      [NaN, false],
      [undefined, false],
      [false, false],
      [null, false],
      [[], false],
      [new Date(), false],
    ])('when "%p" is given should return "%b"', (value, expected) => {
      expect(isHttpStatusCode(value)).toStrictEqual(expected);
    });
  });

  describe('isIsoDateString', () => {
    it('should return true for valid isoDate strings', () => {
      expect(isIsoDateString('2022-02-06T15:20:19.131Z')).toBe(true);
    });
    it('should return false for invalid isDate strings', () => {
      expect(isIsoDateString('2022-40-20T15:20:19.131Z')).toBe(false);
      expect(isIsoDateString(new Date())).toBe(false);
      expect(isIsoDateString(null)).toBe(false);
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

  describe('isParsableSafeInteger', () => {
    it.each([
      [10, true],
      [-10, true],
      ['10', true],
      ['-10', true],
      [Number.MAX_SAFE_INTEGER, true],
      [`${Number.MIN_SAFE_INTEGER}`, true],
      [BigInt(1), false],
      [0, true],
      ['0', true],
      ['0.0', false],
      [1.234, false],
      [false, false],
      [undefined, false],
      [null, false],
      [() => 'cool', false],
    ])('when "%p" is given, should return %p', (v, expected) => {
      expect(isParsableSafeInteger(v)).toStrictEqual(expected);
    });
  });

  describe('isPresent', () => {
    it('should return false when null or undefined', () => {
      expect(isPresent(null)).toBe(false);
      expect(isPresent(undefined)).toBe(false);
    });
    it('should return true when not null and not undefined', () => {
      expect(isPresent(false)).toBe(true);
      expect(isPresent(true)).toBe(true);
      expect(isPresent(NaN)).toBe(true);
      expect(isPresent('hello')).toBe(true);
      expect(isPresent(0)).toBe(true);
    });
  });
});
