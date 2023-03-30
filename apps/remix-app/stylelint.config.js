/**
 * @link https://stylelint.io/user-guide/rules/list/
 */
module.exports = {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['./src/tailwind.css'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
    // 'color-function-notation': null,
    // 'value-keyword-case': null,
    'selector-class-pattern': null,
  },
};
