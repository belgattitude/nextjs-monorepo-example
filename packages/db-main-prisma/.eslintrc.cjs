/**
 * Specific eslint rules for this workspace, learn how to compose
 * @link https://github.com/belgattitude/perso/tree/main/packages/eslint-config-bases
 */

// Workaround for https://github.com/eslint/eslint/issues/3458
require('@your-org/eslint-config-bases/patch/modern-module-resolution');

const {
  getDefaultIgnorePatterns,
} = require('@your-org/eslint-config-bases/helpers');

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  ignorePatterns: [...getDefaultIgnorePatterns(), 'src/generated'],
  extends: [
    '@your-org/eslint-config-bases/typescript',
    '@your-org/eslint-config-bases/sonar',
    '@your-org/eslint-config-bases/regexp',
    // Apply prettier and disable incompatible rules
    '@your-org/eslint-config-bases/prettier',
  ],
  overrides: [
    // optional overrides per project file match
    {
      files: ['**/*seed.ts'],
      rules: {
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
};
