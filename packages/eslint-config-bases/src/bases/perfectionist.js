/**
 * Custom config base for projects using typescript / javascript.
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases#belgattitudeeslint-config-bases
 */

module.exports = {
  overrides: [
    {
      extends: ['plugin:perfectionist/recommended-natural-legacy'],
      files: ['*.js', '*.cjs', '*.mjs', '*.ts'],
      rules: {
        // import/order is used
        'perfectionist/sort-named-imports': 'off',
        'perfectionist/sort-imports': 'off',
        // Keep at false as it can create issue when code relies on keys order
        'perfectionist/sort-maps': 'off',
        // Keep at false as because it does not work with class properties
        'perfectionist/sort-classes': 'off',
        // Keep at false as it can create issue when code relies on keys order
        'perfectionist/sort-objects': 'off',
        // Keep at false as it can create issue when code relies on keys order
        'perfectionist/sort-union-types': 'off',
        // May introduce performance degradation
        'perfectionist/sort-array-includes': 'off',
        'perfectionist/sort-jsx-props': 'off',
      },
    },
  ],
};
