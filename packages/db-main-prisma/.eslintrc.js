module.exports = {
  root: true,
  ignorePatterns: ['node_modules/*', 'dist', 'build'],
  extends: ['../../.eslintrc.base.js'],
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  rules: {},
  overrides: [],
};
