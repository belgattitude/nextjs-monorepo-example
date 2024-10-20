/**
 * Custom config base for projects using jest.
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */
const { filePatterns } = require('../config/file-patterns');

module.exports = {
  extends: ['plugin:import-x/typescript', 'plugin:import-x/recommended'],
  rules: {
    'import-x/no-unused-modules': 'warn',
    'import-x/no-absolute-path': 'error',
    'import-x/no-useless-path-segments': 'error',
  },
  overrides: [
    {
      files: filePatterns.test,
      rules: {
        'import-x/namespace': 'off',
      },
    },
  ],
  settings: {
    'import-x/resolver': {
      typescript: true,
      node: true,
    },
  },
};
