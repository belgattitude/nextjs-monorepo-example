import react from '@vitejs/plugin-react-swc';
import magicalSvg from 'vite-plugin-magical-svg';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
const testFiles = ['./src/**/*.test.{js,jsx,ts,tsx}'];

export default defineConfig({
  cacheDir: '../../.cache/vitest/nextjs-app',
  plugins: [
    react({
      devTarget: 'es2022',
      jsxImportSource: '@emotion/react',
    }),
    tsconfigPaths(),
    magicalSvg({
      target: 'react',
      svgo: false,
    }),
  ],
  test: {
    globals: true,
    deps: {
      optimizer: {
        web: {
          enabled: true,
        },
        ssr: { enabled: true },
      },
    },
    typecheck: {
      enabled: false,
    },
    // forks or threads are good options, vmThreads might sometimes be faster (perf++) but comes with possible memory leaks
    // @link https://vitest.dev/config/#vmthreads
    pool: 'forks',
    poolOptions: {
      forks: {
        isolate: true,
      },
      vmThreads: {
        // useAtomics -> perf+
        // @link https://vitest.dev/config/#pooloptions-threads-useatomics
        useAtomics: true,
      },
      threads: {
        // minThreads: 4,
        // maxThreads: 16,
        // useAtomics -> perf+
        // @link https://vitest.dev/config/#pooloptions-threads-useatomics
        useAtomics: true,
        // isolate to false makes perf++ but comes with limitations
        // @link https://vitest.dev/config/#pooloptions-threads-isolate
        isolate: true,
      },
    },
    environmentMatchGlobs: [
      ['**/*.ts', 'node'],
      ['**/*.tsx', 'happy-dom'],
    ],
    passWithNoTests: false,
    setupFiles: './config/tests/setupVitest.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'clover'],
      extension: ['js', 'jsx', 'ts', 'tsx'],
    },
    include: testFiles,
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    // css: true,
    // To mimic Jest behaviour regarding mocks.
    // @link https://vitest.dev/config/#clearmocks
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.next/**',
      '**/.{idea,git,cache,output,temp}/**',
    ],
  },
});
