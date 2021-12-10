module.exports = {
  root: true,
  ignorePatterns: ['dist', 'build', 'src/generated'],
  extends: ['../../.eslintrc.base.js'],
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  rules: {},
  overrides: [],
};
