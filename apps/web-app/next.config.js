const path = require('path')
const NEXTJS_BUILD_TARGET = process.env.NEXTJS_BUILD_TARGET || 'serverless'

// Tell webpack to compile those packages
// @link https://www.npmjs.com/package/next-transpile-modules
const withTM = require('next-transpile-modules')([
  '@optional-package-scope/foo',
  // The transpilation of the bar package will
  // be handled by tsconfig paths rather than next-transpile-modules
  //'@optional-package-scope/bar'
])

const config = withTM({
  target: NEXTJS_BUILD_TARGET,
  webpack: function (config, { defaultLoaders }) {
    const resolvedBaseUrl = path.resolve(config.context, '../../')
    // This extra config allows to use paths defined in tsconfig
    // rather than next-transpile-modules.
    // @link https://github.com/vercel/next.js/pull/13542
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(tsx|ts|js|mjs|jsx)$/,
        include: [resolvedBaseUrl],
        use: defaultLoaders.babel,
        exclude: (excludePath) => {
          return /node_modules/.test(excludePath)
        },
      },
    ]
    return config
  },
})

module.exports = config
