/**
 * Custom config base for projects that want to enable sonar-js
 */
module.exports = {
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      excludedFiles: ['**/__tests__/**/*.{js,jsx,ts,tsx}'],
      extends: ['plugin:sonarjs/recommended'],
      rules: {
        'sonarjs/no-nested-template-literals': 'off',
      },
    },
    {
      files: ['*.js', '*.cjs'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 2020,
      },
      rules: {
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-all-duplicated-branches': 'off',
      },
    },
  ],
};
