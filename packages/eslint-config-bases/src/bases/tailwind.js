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
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      extends: [
        // @see https://github.com/francoismassart/eslint-plugin-tailwindcss,
        'plugin:tailwindcss/recommended',
      ],
      files: [...reactPatterns.files],
      rules: {
        'tailwindcss/no-custom-classname': 'off',
      },
    },
  ],
};
