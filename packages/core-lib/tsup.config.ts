import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  splitting: true,
  treeshake: true,
  clean: true,
  dts: true,
  format: ['esm'],
  platform: 'browser',
  target: ['es2020', 'chrome80', 'edge18', 'firefox70', 'node18'],
  tsconfig: new URL('tsconfig.build.json', import.meta.url).pathname,
  sourcemap: !options.watch,
  minify: !options.watch,
}));
