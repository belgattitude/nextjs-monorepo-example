// @ts-check

const pc = require('picocolors');

const { i18n } = require('./next-i18next.config');

const packageJson = require('./package.json');

const NEXTJS_IGNORE_ESLINT = process.env.NEXTJS_IGNORE_ESLINT === '1' || false;
const NEXTJS_IGNORE_TYPECHECK =
  process.env.NEXTJS_IGNORE_TYPECHECK === '1' || false;

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
  // ESM only packages are not yet supported by NextJs if you're not
  // using experimental experimental esmExternals
  // @link {https://nextjs.org/blog/next-11-1#es-modules-support|Blog 11.1.0}
  // @link {https://github.com/vercel/next.js/discussions/27876|Discussion}
  // @link https://github.com/vercel/next.js/issues/23725
  // @link https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
  ...[
    // ie: newer versions of https://github.com/sindresorhus packages
  ],
];

/**
 * A way to allow CI optimization when the build done there is not used
 * to deliver an image or deploy the files.
 * @link https://nextjs.org/docs/advanced-features/source-maps
 */
const disableSourceMaps = process.env.NEXT_DISABLE_SOURCEMAPS === 'true';
if (disableSourceMaps) {
  console.info(
    `${pc.green(
      'notice'
    )}- Sourcemaps generation have been disabled through NEXT_DISABLE_SOURCEMAPS`
  );
}

// Example of setting up secure headers
// @link https://github.com/jagaapple/next-secure-headers
const { createSecureHeaders } = require('next-secure-headers');
const secureHeaders = createSecureHeaders({
  contentSecurityPolicy: {
    directives: {
      // defaultSrc: "'self'",
      // styleSrc: ["'self'"],
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

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: !disableSourceMaps,
  i18n,
  optimizeFonts: true,

  httpAgentOptions: {
    // @link https://nextjs.org/blog/next-11-1#builds--data-fetching
    keepAlive: true,
  },

  // Replace terser by swc
  swcMinify: true,

  experimental: {
    // React 18 related
    // @link https://nextjs.org/docs/advanced-features/react-18
    reactRoot: false,

    // Standalone build
    // @link https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files-experimental
    outputStandalone: false,
    // @link https://nextjs.org/docs/advanced-features/output-file-tracing#caveats
    // outputFileTracingRoot: path.join(__dirname, '../../'),

    // Prefer loading of ES Modules over CommonJS
    // @link {https://nextjs.org/blog/next-11-1#es-modules-support|Blog 11.1.0}
    // @link {https://github.com/vercel/next.js/discussions/27876|Discussion}
    esmExternals: true,
    // Experimental monorepo support
    // @link {https://github.com/vercel/next.js/pull/22867|Original PR}
    // @link {https://github.com/vercel/next.js/discussions/26420|Discussion}
    externalDir: true,
  },
  future: {
    // @link https://github.com/vercel/next.js/pull/20914
    // strictPostcssConfiguration: true,
  },

  // @link https://nextjs.org/docs/basic-features/image-optimization
  images: {
    loader: 'default',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    disableStaticImages: false,
    // https://nextjs.org/docs/api-reference/next/image#caching-behavior
    minimumCacheTTL: 60,
    // Allowed domains for next/image
    domains: ['source.unsplash.com'],
  },

  typescript: {
    ignoreBuildErrors: NEXTJS_IGNORE_TYPECHECK,
  },

  eslint: {
    ignoreDuringBuilds: NEXTJS_IGNORE_ESLINT,
    dirs: ['src'],
  },

  async headers() {
    return [{ source: '/(.*)', headers: secureHeaders }];
  },

  /**
   * @link https://nextjs.org/docs/api-reference/next.config.js/rewrites
   async rewrites() {
    return [
      {
        source: `/`,
        destination: '/demo',
      },
    ];
  },
   */

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Swap sentry/node by sentry/browser
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }

    if (isServer) {
      // Till undici 4 haven't landed in prisma, we need this for docker/alpine
      // @see https://github.com/prisma/prisma/issues/6925#issuecomment-905935585
      config.externals.push('_http_common');
    }

    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: [
        {
          loader: '@svgr/webpack',
          // https://react-svgr.com/docs/webpack/#passing-options
          options: {
            svgo: true,
            // @link https://github.com/svg/svgo#configuration
            svgoConfig: {
              multipass: false,
              datauri: 'base64',
              js2svg: {
                indent: 2,
                pretty: false,
              },
            },
          },
        },
      ],
    });

    return config;
  },
  env: {
    APP_NAME: packageJson.name,
    APP_VERSION: packageJson.version,
    BUILD_TIME: new Date().toISOString(),
  },
  serverRuntimeConfig: {
    // to bypass https://github.com/zeit/next.js/issues/8251
    PROJECT_ROOT: __dirname,
  },
};

let config;

if (tmModules.length > 0) {
  const withNextTranspileModules = require('next-transpile-modules')(
    tmModules,
    {
      resolveSymlinks: true,
      debug: false,
    }
  );
  config = withNextTranspileModules(nextConfig);
} else {
  config = nextConfig;
}

if (process.env.ANALYZE === 'true') {
  // @ts-ignore
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  });
  config = withBundleAnalyzer(config);
}

module.exports = config;
