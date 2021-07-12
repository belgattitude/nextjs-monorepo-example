export class ArrayUtils {
  static getRandom<T>(items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
  }
}
