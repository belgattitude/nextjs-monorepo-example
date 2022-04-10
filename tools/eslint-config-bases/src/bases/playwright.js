/**
 * Custom config base for projects using playwright.
 * @see https://github.com/playwright-community/eslint-plugin-playwright
 */
module.exports = {
  overrides: [
    {
      // To ensure best performance enable jest/recommended only on test files
      // PS: *.e2e.ts convention is used to disambiguate from regular *.test.[jt]sx? files
      files: ['*.e2e.ts'],
      extends: ['plugin:playwright/recommended'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
};
