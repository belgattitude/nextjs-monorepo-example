const path = require('path');
const NEXTJS_BUILD_TARGET = process.env.NEXTJS_BUILD_TARGET || 'server';

// Tell webpack to compile those packages
// @link https://www.npmjs.com/package/next-transpile-modules
const withTM = require('next-transpile-modules')(
  [
    '@optional-package-scope/foo',
    // The transpilation of the bar package will
    // be handled by tsconfig paths rather than next-transpile-modules
    //'@optional-package-scope/bar'
  ],
  {
    resolveSymlinks: true,
    debug: false,
  }
);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const config = withBundleAnalyzer(
  withTM({
    target: NEXTJS_BUILD_TARGET,
    reactStrictMode: true,
    future: { webpack5: true },
    resolve: {
      fallback: {
        // Fixes npm packages that depend on `fs` module
        fs: false,
      },
    },
    webpack: function (config, { defaultLoaders }) {
      const resolvedBaseUrl = path.resolve(config.context, '../../');
      // This extra config allows to use paths defined in tsconfig
      // rather than next-transpile-modules.
      // @link https://github.com/vercel/next.js/pull/13542
      config.module.rules = [
        ...config.module.rules,
        {
          test: /\.(tsx|ts|js|jsx|json)$/,
          include: [resolvedBaseUrl],
          use: defaultLoaders.babel,
          exclude: (excludePath) => {
            return /node_modules/.test(excludePath);
          },
        },
      ];
      return config;
    },
  })
);

module.exports = config;
