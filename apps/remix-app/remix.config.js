/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  appDirectory: './src',
  cacheDirectory: '../../.cache/remix-app/remix',
  ignoredRouteFiles: ['**/*'],
  // serverModuleFormat: 'cjs',
  // serverPlatform: 'node',
  tailwind: true,
  postcss: true,
  watchPaths: ['./tailwind.config.ts'],
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  /*
  routes(defineRoutes) {
    return defineRoutes((route) => {
      if (process.env.NODE_ENV === "production") return;
      console.log("⚠️  Test routes enabled.");
      const appDir = path.join(__dirname, "app");
      route(
          "__tests/create-user",
          path.relative(appDir, "cypress/support/test-routes/create-user.ts")
      );
    });
  },
  */
};
