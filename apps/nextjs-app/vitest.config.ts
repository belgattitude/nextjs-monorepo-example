import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const testFiles = ['./src/**/*.test.{js,jsx,ts,tsx}'];
export default defineConfig({
  plugins: [
    react({
      devTarget: 'es2022',
      jsxImportSource: '@emotion/react',
    }),
    tsconfigPaths(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {},
    }),
  ],
  test: {
    globals: true,
    /*
    deps: {
      optimizer: {
        web: {
          enabled: false,
        },
        ssr: { enabled: false },
      },
    }, */
    typecheck: {
      enabled: false,
    },
    pool: 'threads',
    poolOptions: {
      threads: {
        minThreads: 1,
        maxThreads: 16,
        // useAtomics: true,
        // isolate: false,
      },
    },
    environmentMatchGlobs: [
      ['**/*.ts', 'node'],
      ['**/*.tsx', 'happy-dom'],
    ],
    passWithNoTests: false,
    setupFiles: './config/tests/setupVitest.ts',
    cache: {
      dir: '../../.cache/vitest/nextjs-app',
    },
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
