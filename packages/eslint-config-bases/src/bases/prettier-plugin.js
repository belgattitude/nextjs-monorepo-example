/**
 * Custom config base for projects using prettier.
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */

const { getPrettierConfig } = require('../helpers');

const { ...prettierConfig } = getPrettierConfig();

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'prettier/prettier': ['error', prettierConfig],
  },
};
