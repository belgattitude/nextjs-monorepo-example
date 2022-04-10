/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/belgattitude/nextjs-monorepo-example/blob/main/docs/about-linters.md
 */

module.exports = {
  root: true,
  ignorePatterns: ['dist'],
  extends: [
    '@your-org/eslint-config-bases/typescript',
    '@your-org/eslint-config-bases/sonar',
    '@your-org/eslint-config-bases/jest',
    '@your-org/eslint-config-bases/react',
    '@your-org/eslint-config-bases/react-testing-library',
  ],
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
  },
  overrides: [],
};
