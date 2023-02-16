import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const testFiles = ['./e2e/suites/*.test.{js,ts}'];

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'node',
    testTimeout: 15_000,
    passWithNoTests: false,
    // setupFiles: './config/tests/setupVitest.ts',
    cache: {
      dir: '../../.cache/vitest/db-main-e2e',
    },
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'clover'],
      extension: ['js', 'jsx', 'ts', 'tsx'],
    },
    include: testFiles,
    // To mimic Jest behaviour regarding mocks.
    // @link https://vitest.dev/config/#clearmocks
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
    exclude: [
      '**/node_modules/**',
      'dist/**',
      '**/coverage/**',
      '**/.{idea,git,cache,output,temp}/**',
    ],
  },
});
