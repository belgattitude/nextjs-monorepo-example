import { ArrayUtils } from '../array-utils';

describe('ArrayUtils', () => {
  describe('getRandom', () => {
    it('should return different elements', () => {
      const arr = ['cool', 'test', true, 0];
      const results: typeof arr = [];
      const maxIterations = 20;
      for (let i = 0; i < maxIterations; i++) {
        results.push(ArrayUtils.getRandom(arr));
      }
      const unique = results.filter((v, i, a) => a.indexOf(v) === i);
      expect(unique.length).toBeGreaterThan(1);
    });
  });
});
