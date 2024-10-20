module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['simple-import-sort'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-duplicate-imports': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
  },
};
