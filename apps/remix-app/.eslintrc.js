/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/belgattitude/nextjs-monorepo-example/blob/main/docs/about-linters.md
 */

const {
  getDefaultIgnorePatterns,
} = require('@your-org/eslint-config-bases/helpers');

module.exports = {
  root: true,
  ignorePatterns: [
    ...getDefaultIgnorePatterns(),
    'public/build',
    'api/_build',
    '.cache',
  ],
  extends: [
    '@your-org/eslint-config-bases/typescript',
    '@your-org/eslint-config-bases/sonar',
    '@your-org/eslint-config-bases/regexp',
    '@your-org/eslint-config-bases/jest',
    '@your-org/eslint-config-bases/react',
    '@your-org/eslint-config-bases/rtl',
    '@your-org/eslint-config-bases/graphql-schema',
    // Specific rules for remix
    '@remix-run/eslint-config',
    // Apply prettier and disable incompatible rules
    '@your-org/eslint-config-bases/prettier',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {},
  overrides: [],
};
