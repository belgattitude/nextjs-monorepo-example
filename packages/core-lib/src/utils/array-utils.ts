import { RandomUtils } from './random-utils';

export class ArrayUtils {
  static getRandom<T>(items: T[]): T {
    return items[RandomUtils.getRandomInt(0, items.length)];
  }
}
