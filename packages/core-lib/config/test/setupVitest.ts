import { vi } from 'vitest';

const jestCompatOverride = {
  fn: vi.fn,
  spyOn: vi.spyOn,
};

(globalThis as unknown as Record<'jest', unknown>).jest = jestCompatOverride;
