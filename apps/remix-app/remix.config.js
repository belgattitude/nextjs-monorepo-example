/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  appDirectory: './src',
  cacheDirectory: '../../.cache/remix-app/remix',
  ignoredRouteFiles: ['**/*'],
  serverModuleFormat: 'cjs',
  serverPlatform: 'node',
  tailwind: true,
  postcss: true,
  watchPaths: ['./tailwind.config.js'],
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  // routes: async defineRoutes => {
  //  return flatRoutes('routes', defineRoutes, {
  //    ignoredRouteFiles: [
  //      '.*',
  //      '**/*.css',
  //      '**/*.test.{js,jsx,ts,tsx}',
  //      '**/__*.*',
  //    ],
  //  })
  // },
};
