/**
 * Opinionated config base for https://github.com/mdx-js/eslint-mdx
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */

const mdxPatterns = {
  files: ['*.mdx'],
};

module.exports = {
  overrides: [
    {
      extends: [
        'plugin:mdx/recommended',
        'plugin:@typescript-eslint/disable-type-checked',
      ],
      // For performance enable this only on mdx files
      files: mdxPatterns.files,
      parser: 'eslint-mdx',
      parserOptions: {
        project: null,
      },
      rules: {
        '@typescript-eslint/consistent-type-exports': 'off',
      },
    },
  ],
};
