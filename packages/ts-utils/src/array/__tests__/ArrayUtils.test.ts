import type { NonEmptyArray } from '../../types';
import { ArrayUtils } from '../ArrayUtils';

describe('ArrayUtils', () => {
  describe('removeItem', () => {
    it('should return remove the first item', () => {
      expect(ArrayUtils.removeItem([1, 2, 2], 2)).toStrictEqual([1, 2]);
    });
    it('should return the array intact if value not found', () => {
      expect(ArrayUtils.removeItem([1, 2], 3)).toStrictEqual([1, 2]);
    });
  });
  describe('getRandom', () => {
    it('should return different elements', () => {
      const arr = ['cool', 'test', true, 0] satisfies NonEmptyArray<any>;
      const results: NonEmptyArray<(typeof arr)[number]> = [0];
      const maxIterations = 20;
      for (let i = 0; i < maxIterations; i++) {
        results.push(ArrayUtils.getRandom(arr));
      }
      const unique = results.filter((v, i, a) => a.indexOf(v) === i);
      expect(unique.length).toBeGreaterThan(1);
    });
    it('should always return an element from the array', () => {
      const arr = ['cool', 'test', true, 0] satisfies NonEmptyArray<any>;
      const maxIterations = 20;
      for (let i = 0; i < maxIterations; i++) {
        const el = ArrayUtils.getRandom(arr);
        expect(arr.indexOf(el)).toBeGreaterThanOrEqual(0);
      }
    });
  });
});
