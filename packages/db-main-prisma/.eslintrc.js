/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/mqschwanda/nextjs-monorepo/blob/main/docs/about-linters.md
 */

module.exports = {
  root: true,
  ignorePatterns: ['dist', 'build', 'src/generated'],
  extends: ['../../.eslintrc.base.js'],
  env: {
    browser: false,
    es6: true,
    node: true,
  },
};
