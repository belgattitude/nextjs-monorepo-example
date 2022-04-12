/**
 * Opinionated config base for projects using react.
 * @see https://github.com/belgattitude/nextjs-monorepo-example/tree/main/packages/eslint-config-bases
 */

const reactPatterns = {
  files: ['*.{jsx,tsx}'],
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: reactPatterns.files,
      extends: [
        // @see https://github.com/yannickcr/eslint-plugin-react
        'plugin:react/recommended',
        // @see https://www.npmjs.com/package/eslint-plugin-react-hooks
        'plugin:react-hooks/recommended',
        // @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
        'plugin:jsx-a11y/recommended',
      ],
      rules: {
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
        'react/no-unescaped-entities': ['error', { forbid: ['>'] }],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        // Fine-tune naming convention react typescript jsx (function components)
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase'],
          },
          {
            selector: ['function'],
            format: ['camelCase', 'PascalCase'],
          },
          {
            selector: 'parameter',
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'allow',
          },
        ],
      },
    },
  ],
};
