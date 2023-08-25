/**
 * Custom config base for projects using typescript / javascript.
 * @see https://github.com/belgattitude/nextjs-monorepo-example/tree/main/packages/eslint-config-bases
 */

// Allow to pass an env to check cycles, defaults to 2 (lint time+++)
// @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
// @see https://medium.com/@steven-lemon182/are-typescript-barrel-files-an-anti-pattern-72a713004250
const checkCycles = process.env?.ESLINT_IMPORT_NO_CYCLE === 'true';

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      globalReturn: false,
    },
    ecmaVersion: 'latest',
    project: ['tsconfig.json'],
    sourceType: 'module',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.mts'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  rules: {
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
    ...(checkCycles ? { 'import/no-cycle': 2 } : {}),
    // will use 'import/no-duplicates'.
    'no-duplicate-imports': 'off',
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'no-empty-function': 'off',
    'import/default': ['error'],
    // Caution this rule is slow https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
    'import/namespace': 'off', // ['error'] If you want the extra check (typechecking will spot most issues already)
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
    'import/no-duplicates': [
      'error',
      { 'prefer-inline': true, considerQueryString: true },
    ],
    'import/no-named-as-default-member': ['warn'],
    'import/no-named-as-default': ['warn'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        minimumDescriptionLength: 10,
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
      },
    ],
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: false }],
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['private-constructors'] },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true,
        allowBoolean: true,
        allowAny: true,
        allowNever: true,
        allowNullish: true,
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/no-import-type-side-effects': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['*.mjs'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/consistent-type-exports': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
      },
    },
    {
      // javascript commonjs
      files: ['*.js', '*.cjs'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 'latest',
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/consistent-type-exports': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
      },
    },
  ],
};
