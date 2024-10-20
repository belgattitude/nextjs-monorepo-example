/**
 * Opinionated config base for projects using react.
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */

const reactPatterns = {
  files: ['*.{jsx,tsx}'],
};

/**
 * Fine-tune naming convention react typescript jsx (function components)
 * @link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
 */

module.exports = {
  overrides: [
    {
      extends: [
        // @see https://tanstack.com/query/v4/docs/react/eslint/eslint-plugin-query
        'plugin:@tanstack/eslint-plugin-query/recommended',
      ],
      files: [...reactPatterns.files],
      // rules: { },
    },
  ],
};
