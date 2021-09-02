module.exports = {
  root: true,
  ignorePatterns: ['node_modules/*', 'dist', 'build'],
  extends: [
    '../../.eslintrc.base.js',
    // Add specific rules for react and nextjs
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:testing-library/react',
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
  overrides: [],
};
