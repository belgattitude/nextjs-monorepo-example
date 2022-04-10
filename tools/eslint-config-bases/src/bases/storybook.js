/**
 * Custom config base for projects using storybook.
 */
module.exports = {
  overrides: [
    {
      // For performance run storybook/recommended on test files, not regular code
      files: ['**/*.stories.{ts,tsx,mdx}'],
      extends: ['plugin:storybook/recommended'],
    },
  ],
};
