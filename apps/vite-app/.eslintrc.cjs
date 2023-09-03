/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/belgattitude/nextjs-monorepo-example/blob/main/docs/about-linters.md
 */

// Workaround for https://github.com/eslint/eslint/issues/3458 (re-export of @rushstack/eslint-patch)
require('@your-org/eslint-config-bases/patch/modern-module-resolution');

const {
  getDefaultIgnorePatterns,
} = require('@your-org/eslint-config-bases/helpers');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  ignorePatterns: [...getDefaultIgnorePatterns()],
  extends: [
    '@your-org/eslint-config-bases/typescript',
    '@your-org/eslint-config-bases/sonar',
    '@your-org/eslint-config-bases/regexp',
    '@your-org/eslint-config-bases/jest',
    '@your-org/eslint-config-bases/react',
    '@your-org/eslint-config-bases/rtl',
    // Apply prettier and disable incompatible rules
    '@your-org/eslint-config-bases/prettier-plugin',
  ],
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
  },
  overrides: [],
};
