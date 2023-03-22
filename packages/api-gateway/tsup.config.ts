import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  splitting: false,
  clean: true,
  dts: true,
  format: ['cjs'],
  // platform: 'node',
  target: ['node18'],
  tsconfig: new URL('./tsconfig.build.json', import.meta.url).pathname,
  sourcemap: !options.watch,
  minify: !options.watch,
}));
