const NEXTJS_BUILD_TARGET = process.env.NEXTJS_BUILD_TARGET || 'server';

// Tell webpack to compile those packages
// @link https://www.npmjs.com/package/next-transpile-modules
const withTM = require('next-transpile-modules')(
  ['@optional-package-scope/foo'],
  {
    resolveSymlinks: true,
    debug: false,
  }
);

const config = withTM({
  target: NEXTJS_BUILD_TARGET,
  reactStrictMode: true,
  future: { webpack5: true },
  resolve: {
    fallback: {
      // Fixes npm packages that depend on `fs` module
      fs: false,
    },
  },
});

module.exports = config;
