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

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * A way to allow CI optimization when the build done there is not used
 * to deliver an image or deploy the files.
 * @link https://nextjs.org/docs/advanced-features/source-maps
 */
const disableSourceMaps = process.env.NEXT_DISABLE_SOURCEMAPS === 'true';
if (disableSourceMaps) {
  console.log(
    '[INFO]: Sourcemaps have been disabled through NEXT_DISABLE_SOURCEMAPS'
  );
}

const config = withBundleAnalyzer(
  withTM({
    target: NEXTJS_BUILD_TARGET,
    reactStrictMode: true,
    future: { webpack5: true },
    productionBrowserSourceMaps: !disableSourceMaps,
  })
);

module.exports = config;
