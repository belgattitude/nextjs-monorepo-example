import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    entry: ['src/index.ts'],
    splitting: true,
    clean: true,
    dts: true,
    format: ['esm'],
    platform: 'node',
    target: ['node18'],
    tsconfig: new URL('./tsconfig.build.json', import.meta.url).pathname,
    sourcemap: !options.watch,
    // Do not minify node only packages to let patching possible by the consumer (ie: patch-package)
    minify: false,
  };
});
