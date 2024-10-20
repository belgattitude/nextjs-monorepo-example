import { getRandomInt } from '../getRandomInt';

describe('getRandomInt tests', () => {
  it('should return an integer between min and max', () => {
    expect([100, 101]).toContain(getRandomInt(100, 101));
    expect([-101, -100]).toContain(getRandomInt(-101, -100));
  });

  it('should throw if not a number', () => {
    expect(() => getRandomInt(NaN, 100)).toThrow(/min/i);
    expect(() => getRandomInt(10, {} as unknown as number)).toThrow(/max/i);
  });

  it('should throw if min > max', () => {
    expect(() => getRandomInt(100, 10)).toThrow(/greater/i);
  });
});
