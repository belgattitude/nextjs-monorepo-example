module.exports = {
  root: true,
  extends: [
    '../../.eslintrc.base.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  // By loading testing-library and storybook in plugins rather than extending the recommended
  // we keep the possibility to enable them on specific files only (*.test.ts, *.stories.ts...)
  plugins: ['testing-library', 'storybook'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
  overrides: [
    {
      // For performance run jest/recommended on test files, not regular code
      files: ['**/__tests__/**/*.{ts,tsx}'],
      extends: ['plugin:testing-library/react'],
    },
    {
      // For performance run storybook/recommended on test files, not regular code
      files: ['**/*.stories.{ts,tsx,mdx}'],
      extends: ['plugin:storybook/recommended'],
    },
  ],
};
