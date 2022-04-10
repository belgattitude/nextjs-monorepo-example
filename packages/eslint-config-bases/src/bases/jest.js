/**
 * Custom config base for projects using jest.
 * @see https://github.com/jest-community/eslint-plugin-jest
 */

const jestPatterns = {
  files: ['**/*.test.{js,jsx,ts,tsx}'],
};

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  overrides: [
    {
      // Perf: To ensure best performance enable eslint-plugin-jest for test files only.
      files: jestPatterns.files,
      // @see https://github.com/jest-community/eslint-plugin-jest
      extends: ['plugin:jest/recommended'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
};
