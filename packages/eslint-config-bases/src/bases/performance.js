/**
 * Custom config base for projects that wants to enable regexp rules.
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */

const { filePatterns } = require('../config/file-patterns');

module.exports = {
  overrides: [
    {
      plugins: ['unicorn'],
      files: filePatterns.typescriptAndJsCodeWithoutJsx,
      excludedFiles: filePatterns.nonCodeFile,
      rules: {
        'unicorn/prefer-set-has': 'error',
      },
    },
  ],
};
