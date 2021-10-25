const base = require('../../.eslintrc.base.js');
module.exports = {
  root: true,
  ignorePatterns: ['node_modules/*', 'dist', 'build'],
  extends: ['../../.eslintrc.base.js'],
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  parserOptions: {
    ...base.parserOptions,
    project: ['./tsconfig.json'],
  },
  rules: {},
  overrides: [],
};
