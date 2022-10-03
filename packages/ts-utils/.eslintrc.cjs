/**
 * Specific eslint rules for this workspace, learn how to compose
 * @link https://github.com/belgattitude/nextjs-monorepo-example/tree/main/packages/eslint-config-bases
 */

const {
  getDefaultIgnorePatterns,
} = require('@your-org/eslint-config-bases/helpers');

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  ignorePatterns: [...getDefaultIgnorePatterns()],
  extends: [
    '@your-org/eslint-config-bases/typescript',
    '@your-org/eslint-config-bases/sonar',
    '@your-org/eslint-config-bases/regexp',
    '@your-org/eslint-config-bases/jest',
    // Apply prettier and disable incompatible rules
    '@your-org/eslint-config-bases/prettier',
  ],
  rules: {
    // optional overrides per project
  },
  overrides: [
    // optional overrides per project file match
  ],
};
