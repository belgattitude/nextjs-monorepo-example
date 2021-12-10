/**
 * Notably for storybook & independent releases
 * @link https://storybook.js.org/addons/@storybook/addon-postcss
 */
module.exports = {
  plugins: [require('autoprefixer'), require('postcss-flexbugs-fixes')],
};
