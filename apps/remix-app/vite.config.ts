import { unstable_vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  plugins: [
    remix({
      ignoredRouteFiles: ['**/.*'],
      appDirectory: './src/app',
    }),
    tsconfigPaths(),
  ],
});
