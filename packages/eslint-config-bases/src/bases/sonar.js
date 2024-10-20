/**
 * Opinionated config base for projects that enable sonarjs
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */

const { filePatterns } = require('../config/file-patterns');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['sonarjs'],
  overrides: [
    {
      extends: ['plugin:sonarjs/recommended-legacy'],
      excludedFiles: filePatterns.nonCodeFile,
      files: filePatterns.anyCode,
      rules: {
        // better handled by jsx-a11y plugin
        'sonarjs/anchor-is-valid': 'off',
        'sonarjs/label-has-associated-control': 'off',
        // Typescript-eslint does the job well enough
        'sonarjs/no-misused-promises': 'off',
        // Because plugin unused-import does it better (autofix)
        'sonarjs/unused-import': 'off',
        // because it doesn't play well with inlined comment api doc
        'sonarjs/no-commented-code': 'off',
        // because it's handled by typescript-eslint
        'sonarjs/sonar-no-unused-vars': 'off',
        // because it's handled by typescript-eslint
        'sonarjs/deprecation': 'off',
        // it makes too much noise
        'sonarjs/sonar-prefer-read-only-props': 'off',
        // because it doesn't play well with exactOptionalTypes
        'sonarjs/no-redundant-optional': 'off',
        'sonarjs/jsx-no-useless-fragment': 'off',
        'sonarjs/redundant-type-aliases': 'warn',
        'sonarjs/no-nested-template-literals': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-unknown-property': [
          'warn',
          {
            // For NextJs styled-jsx <style jsx>{`...`}</style>
            ignore: ['jsx', 'css'],
          },
        ],
      },
    },
    {
      files: ['*.{jsx,tsx}'],
      rules: {
        // relax complexity for react code
        'sonarjs/cognitive-complexity': ['error', 16],
        // relax duplicate strings
        'sonarjs/no-duplicate-string': 'off',
      },
    },
    {
      // relax javascript code as it often contains obscure configs
      files: ['*.js', '*.cjs'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 'latest',
      },
      rules: {
        'sonarjs/no-all-duplicated-branches': 'off',
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
};
