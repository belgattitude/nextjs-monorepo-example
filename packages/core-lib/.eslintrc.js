/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/belgattitude/nextjs-monorepo-example/blob/main/docs/about-linters.md
 */

module.exports = {
  root: true,
  // ignorePatterns: ['dist', 'build'],
  extends: [
    // Extend the monorepo default configuration
    '../../.eslintrc.base.js',
    // Add specific rules for react
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
  overrides: [
    {
      // For performance run jest/recommended on test files, not regular code
      files: ['**/__tests__/**/*.{ts,tsx}'],
      extends: ['plugin:testing-library/react'],
    },
  ],
};
