const path = require('path');
const packageJson = require('./package');
const { withSentryConfig } = require('@sentry/nextjs');
const { i18n } = require('./next-i18next.config');
const NEXTJS_BUILD_TARGET = process.env.NEXTJS_BUILD_TARGET || 'server';
const NEXTJS_IGNORE_ESLINT = process.env.NEXTJS_IGNORE_ESLINT === '1' || false;
const isProd = process.env.NODE_ENV === 'production';

// Tell webpack to compile those packages
// @link https://www.npmjs.com/package/next-transpile-modules
const tmModules = [
  // for legacy browsers support (only in prod)
  ...(isProd
    ? [
        // ie: '@react-google-maps/api'...
      ]
    : []),
  // ESM only packages are not yet supported by NextJs
  // @link https://github.com/vercel/next.js/issues/23725
  // @link https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
  ...[
    // ie: newer versions of https://github.com/sindresorhus packages
    'ky',
  ],
];
const withTM = require('next-transpile-modules')(tmModules, {
  resolveSymlinks: true,
  debug: false,
});

/**
 * A way to allow CI optimization when the build done there is not used
 * to deliver an image or deploy the files.
 * @link https://nextjs.org/docs/advanced-features/source-maps
 */
const disableSourceMaps = process.env.NEXT_DISABLE_SOURCEMAPS === 'true';
if (disableSourceMaps) {
  console.log(
    '[INFO]: Sourcemaps generation have been disabled through NEXT_DISABLE_SOURCEMAPS'
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

const baseConfig = withTM({
  target: NEXTJS_BUILD_TARGET,
  reactStrictMode: true,
  webpack5: true,
  productionBrowserSourceMaps: !disableSourceMaps,
  i18n,
  optimizeFonts: true,

  // @link https://nextjs.org/docs/basic-features/image-optimization
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    disableStaticImages: false,
    // Allowed domains for next/image
    domains: ['source.unsplash.com'],
  },

  eslint: {
    ignoreDuringBuilds: NEXTJS_IGNORE_ESLINT,
    dirs: ['src'],
  },

  async headers() {
    return [{ source: '/(.*)', headers: secureHeaders }];
  },

  webpack: (config, { defaultLoaders, isServer }) => {
    // This extra config allows to use paths defined in tsconfig
    // rather than next-transpile-modules.
    // @link https://github.com/vercel/next.js/pull/13542
    const resolvedBaseUrl = path.resolve(config.context, '../../');
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

    // A temp workaround for https://github.com/prisma/prisma/issues/6899#issuecomment-849126557
    if (isServer) {
      config.externals.push('_http_common');
    }

    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  env: {
    APP_NAME: packageJson.name,
    APP_VERSION: packageJson.version,
    BUILD_TIME: new Date().getTime(),
    SENTRY_RELEASE: process.env.SENTRY_RELEASE
      ? process.env.SENTRY_RELEASE
      : `${packageJson.name}@${packageJson.version}`,
    NEXT_PUBLIC_SENTRY_DSN: process.env.SENTRY_DSN,
  },
  serverRuntimeConfig: {
    // to bypass https://github.com/zeit/next.js/issues/8251
    PROJECT_ROOT: __dirname,
  },
});

let config = baseConfig;

if (process.env.NEXT_DISABLE_SENTRY !== '1') {
  config = withSentryConfig(baseConfig, {
    dryRun:
      process.env.NODE_ENV !== 'production' ||
      process.env.NEXT_SENTRY_DRY_RUN === '1',
  });
}

if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  });
  config = withBundleAnalyzer(config);
}

module.exports = config;
