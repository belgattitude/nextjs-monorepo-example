import { assertNonEmptyString } from '../assertions';
describe('assertions test', () => {
  describe('assertNonEmptyString', () => {
    it('should work as expected', () => {
      expect(() => {
        assertNonEmptyString('cool');
      }).not.toThrowError('');
      expect(() => {
        assertNonEmptyString('    ', 'message');
      }).toThrow('message');
      expect(() => {
        assertNonEmptyString(true, () => {
          return new Error('message2');
        });
      }).toThrowError('message2');
      expect(() => {
        assertNonEmptyString(new Date(), new Error('message3'));
      }).toThrowError('message3');
    });
  });
});
