/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    tsconfigPaths(),
    svgr({
      // Set it to `true` to export React component as default.
      // Notice that it will override the default behavior of Vite.
      exportAsDefault: true,
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {},
    }),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    passWithNoTests: false,
    exclude: ['**/e2e/**'],
    setupFiles: './config/tests/setupVitest.ts',
  },
});
