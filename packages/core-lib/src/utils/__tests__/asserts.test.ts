import { Asserts } from '../asserts';

describe('asserts test', () => {
  describe('asserts.nonEmptyString', () => {
    it('should work as expected', () => {
      expect(() => {
        Asserts.nonEmptyString('cool');
      }).not.toThrow();
      expect(() => {
        Asserts.nonEmptyString(' ', 'message');
      }).toThrow('message');
      expect(() => {
        Asserts.nonEmptyString(true, () => {
          return new Error('message2');
        });
      }).toThrow('message2');
    });
  });
});
