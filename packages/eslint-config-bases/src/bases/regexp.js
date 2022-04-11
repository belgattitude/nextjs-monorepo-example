/**
 * Custom config base for projects that wants to enable regexp rules.
 */

module.exports = {
  // @see https://github.com/ota-meshi/eslint-plugin-regexp
  extends: ['plugin:regexp/recommended'],
  rules: {
    'regexp/prefer-result-array-groups': 'off',
  },
  overrides: [],
};
