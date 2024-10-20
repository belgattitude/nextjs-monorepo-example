const { getDefaultIgnorePatterns } = require('./src/helpers');

module.exports = {
  extends: [
    './src/bases/typescript',
    './src/bases/simple-import-sort',
    './src/bases/import-x',
    './src/bases/sonar',
    './src/bases/regexp',
    './src/bases/perfectionist',
    './src/bases/performance',
    './src/bases/prettier-plugin',
    './src/bases/mdx',
  ],
  ignorePatterns: [...getDefaultIgnorePatterns()],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    projectService: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  rules: {
    '@typescript-eslint/no-require-imports': 'off',
  },
};
