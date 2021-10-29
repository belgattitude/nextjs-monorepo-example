module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  ignorePatterns: ['node_modules/*', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      globalReturn: false,
    },
    ecmaVersion: 2020,
    project: ['tsconfig.json'],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:regexp/recommended',
    'plugin:prettier/recommended',
  ],
  // By loading jest and sonarjs globally as a plugin
  // we can load recommended on specific code base (regular / tests) through
  // overrides.
  plugins: ['jest', 'sonarjs'],
  globals: {
    context: 'readonly',
    cy: 'readonly',
    assert: 'readonly',
    Cypress: 'readonly',
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['private-constructors'] },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
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
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
  overrides: [
    {
      // For performance run sonarjs/recommended on regular code, not test files.
      files: ['**/*.{js,jsx,ts,tsx}'],
      excludedFiles: ['**/__tests__/**/*.{js,jsx,ts,tsx}'],
      extends: ['plugin:sonarjs/recommended'],
      rules: {
        'sonarjs/no-nested-template-literals': 'off',
      },
    },
    {
      // For performance run jest/recommended on test files, not regular code
      files: ['**/?(*.)+(test|spec).{js,jsx,ts,tsx}'],
      extends: ['plugin:jest/recommended'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-all-duplicated-branches': 'off',
        '@typescript-eslint/consistent-type-exports': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        'import/order': 'off',
      },
    },
  ],
};
