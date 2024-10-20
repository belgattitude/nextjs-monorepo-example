import { stringToFloat, stringToSafeInteger } from '..';

describe('StringConvert tests', () => {
  describe('stringtoSafeInteger', () => {
    it('should work as expected', () => {
      expect(stringToSafeInteger('')).toBeNull();
      expect(stringToSafeInteger(10)).toBe(10);
      expect(stringToSafeInteger('10')).toBe(10);
      expect(stringToSafeInteger('32568888')).toBe(32_568_888);
      expect(stringToSafeInteger('10.2')).toBeNull();
      expect(stringToSafeInteger(null)).toBeNull();
      expect(stringToSafeInteger('-3')).toBe(-3);
      expect(stringToSafeInteger(undefined)).toBeNull();
      expect(stringToSafeInteger(null)).toBeNull();
      expect(stringToSafeInteger(false)).toBeNull();
      expect(stringToSafeInteger(NaN)).toBeNull();
    });
  });

  describe('stringToFloat', () => {
    it('should work as expected', () => {
      expect(stringToFloat(10)).toBe(10);
      expect(stringToFloat('10.2345')).toBe(10.2345);
      expect(stringToFloat('.2')).toBe(0.2);
      expect(stringToFloat('-10.234')).toBe(-10.234);
      expect(stringToFloat(undefined)).toBeNull();
      expect(stringToFloat(null)).toBeNull();
      expect(stringToFloat(NaN)).toBeNull();
      expect(stringToFloat(false)).toBeNull();
    });
  });
});
