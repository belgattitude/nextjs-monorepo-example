/**
 * Custom config base for projects using react-testing-library
 */
module.exports = {
  overrides: [
    {
      // For performance enable jest/recommended only on test files
      files: ['**/__tests__/**/*.{ts,tsx}'],
      extends: ['plugin:testing-library/react'],
    },
    {
      files: ['**/test-utils.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'import/export': 'off',
      },
    },
    {
      files: ['**/test-utils.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'import/export': 'off',
      },
    },
  ],
};
