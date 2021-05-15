const NEXTJS_BUILD_TARGET = process.env.NEXTJS_BUILD_TARGET || 'server';
const isProd = process.env.NODE_ENV === 'production';

// Tell webpack to compile those packages
// @link https://www.npmjs.com/package/next-transpile-modules
const withTM = require('next-transpile-modules')(['@your-org/core-lib'], {
  resolveSymlinks: true,
  debug: false,
});

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

// Example of setting up secure headers
// @link https://github.com/jagaapple/next-secure-headers
const { createSecureHeaders } = require('next-secure-headers');
const secureHeaders = createSecureHeaders({
  contentSecurityPolicy: {
    directives: {
      //defaultSrc: "'self'",
      //styleSrc: ["'self'"],
    },
  },
  ...(isProd
    ? {
        forceHTTPSRedirect: [
          true,
          { maxAge: 60 * 60 * 24 * 4, includeSubDomains: true },
        ],
      }
    : {}),
  referrerPolicy: 'same-origin',
});

const config = withBundleAnalyzer(
  withTM({
    target: NEXTJS_BUILD_TARGET,
    reactStrictMode: true,
    future: { webpack5: true },
    productionBrowserSourceMaps: !disableSourceMaps,

    async headers() {
      return [{ source: '/(.*)', headers: secureHeaders }];
    },
  })
);

module.exports = config;
