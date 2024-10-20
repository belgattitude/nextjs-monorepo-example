/**
 * Custom config base for projects using typescript / javascript.
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */

const { filePatterns } = require('../config/file-patterns');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:unicorn/recommended',
  ],
  overrides: [
    {
      files: [
        'tailwind.config.ts',
        'tailwind.config.js',
        '.eslintrc.cjs',
        'lint-staged.config.js',
      ],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: filePatterns.test,
      rules: {
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
        '@typescript-eslint/unbound-method': 'off',
        'require-await': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prefer-number-properties': 'off',
        'unicorn/error-message': 'off',
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/no-await-expression-member': 'off',
        'unicorn/prefer-add-event-listener': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-import-type-side-effects': 'off',
        '@typescript-eslint/no-empty-object-type': 'off',
      },
    },
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['*.mjs'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/consistent-type-exports': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
      },
    },
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      // javascript commonjs
      files: ['*.js', '*.cjs'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 'latest',
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/consistent-type-exports': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'require-await': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
    },
    ecmaVersion: 'latest',
    parserOptions: {
      projectService: true,
      tsconfigRootDir: __dirname,
    },
    sourceType: 'module',
  },
  plugins: ['unused-imports'],
  rules: {
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        minimumDescriptionLength: 10,
        'ts-check': false,
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
      },
    ],
    // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
    '@typescript-eslint/method-signature-style': ['error', 'property'],
    // https://sindresorhus.com/blog/goodbye-nodejs-buffer
    '@typescript-eslint/no-restricted-types': [
      'error',
      {
        types: {
          Buffer: {
            message: 'Use Uint8Array instead.',
            suggest: ['Uint8Array'],
          },
        },
      },
    ],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { fixStyle: 'inline-type-imports', prefer: 'type-imports' },
    ],
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['private-constructors'] },
    ],
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: false }],
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    // Typescript-elint will do
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowAny: true,
        allowBoolean: true,
        allowNever: true,
        allowNullish: true,
        allowNumber: true,
      },
    ],
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
    'linebreak-style': ['error', 'unix'],
    'no-constant-binary-expression': 'error',
    'no-duplicate-imports': 'off', // is handled via 'import-x/no-duplicates'
    'no-throw-literal': 'off', // is enabled via '@typescript-eslint/only-throw-error'
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-empty-function': 'off',
    // https://sindresorhus.com/blog/goodbye-nodejs-buffer
    'no-restricted-globals': [
      'error',
      {
        message: 'Use Uint8Array instead.',
        name: 'Buffer',
      },
    ],
    // https://sindresorhus.com/blog/goodbye-nodejs-buffer
    'no-restricted-imports': [
      'error',
      {
        message: 'Use Uint8Array instead.',
        name: 'buffer',
      },
      {
        message: 'Use Uint8Array instead.',
        name: 'node:buffer',
      },
    ],
    'require-await': 'off',
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          balanced: true,
          exceptions: ['*'],
          markers: ['!'],
        },
        line: {
          exceptions: ['-', '+'],
          markers: ['/'],
        },
      },
    ],
    'sort-imports': 'off',
    // Disabled as it makes too many assumptions - enable per-project
    'unicorn/no-static-only-class': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/switch-case-braces': 'off',
    // Can potentially break your code
    'unicorn/prefer-spread': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/catch-error-name': 'off',
    'unicorn/prefer-set-has': 'off',
    'unicorn/no-null': 'off',
    // https://typescript-eslint.io/rules/default-param-last/
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.mts'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
