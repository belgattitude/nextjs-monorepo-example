import { getRandomInt } from '../random/index';
import type { NonEmptyArray } from '../types';

export class ArrayUtils {
  static getRandom<T>(items: NonEmptyArray<T>): T {
    if (items.length === 1) return items[0];
    return items[getRandomInt(0, items.length - 1)] as unknown as T;
  }

  static removeItem<T>(arr: T[], item: T): T[] {
    const index = arr.indexOf(item);
    if (index !== -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
}
