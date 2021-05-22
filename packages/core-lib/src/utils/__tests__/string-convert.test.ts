import { StringConvert } from '../string-convert';

describe('StringConvert tests', () => {
  describe('.toSafeInteger', () => {
    it('should work as expected', () => {
      expect(StringConvert.toSafeInteger('')).toStrictEqual(null);
      expect(StringConvert.toSafeInteger(10)).toStrictEqual(10);
      expect(StringConvert.toSafeInteger('10')).toStrictEqual(10);
      expect(StringConvert.toSafeInteger('32568888')).toStrictEqual(32568888);
      expect(StringConvert.toSafeInteger('10.2')).toStrictEqual(null);
      expect(StringConvert.toSafeInteger(null)).toStrictEqual(null);
      expect(StringConvert.toSafeInteger('-3')).toStrictEqual(-3);
      expect(StringConvert.toSafeInteger(undefined)).toStrictEqual(null);
      expect(StringConvert.toSafeInteger(null)).toStrictEqual(null);
      expect(StringConvert.toSafeInteger(false)).toStrictEqual(null);
      expect(StringConvert.toSafeInteger(NaN)).toStrictEqual(null);
    });
  });

  describe('.toFloat', () => {
    it('should work as expected', () => {
      expect(StringConvert.toFloat(10)).toStrictEqual(10);
      expect(StringConvert.toFloat('10.2345')).toStrictEqual(10.2345);
      expect(StringConvert.toFloat('.2')).toStrictEqual(0.2);
      expect(StringConvert.toFloat('-10.234')).toStrictEqual(-10.234);
      expect(StringConvert.toFloat(undefined)).toStrictEqual(null);
      expect(StringConvert.toFloat(null)).toStrictEqual(null);
      expect(StringConvert.toFloat(NaN)).toStrictEqual(null);
      expect(StringConvert.toFloat(false)).toStrictEqual(null);
    });
  });
});
