/**
 * Opinionated config base for projects using storybook.
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */

const { filePatterns } = require('../config/file-patterns');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      extends: ['plugin:storybook/recommended'],
      files: filePatterns.storybook,
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        // Relax rules that are known to be slow and less useful in a test context
        'import-x/namespace': 'off',
        'import-x/no-duplicates': 'off',
        // no checks for exports
        'import-x/no-unused-modules': 'warn',
      },
    },
  ],
};
