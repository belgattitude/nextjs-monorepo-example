/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/belgattitude/nextjs-monorepo-example/blob/main/docs/about-linters.md
 */

module.exports = {
  root: true,
  ignorePatterns: ['.next', '**/.out'],
  extends: [
    '@your-org/eslint-config-bases/typescript',
    '@your-org/eslint-config-bases/sonar',
    '@your-org/eslint-config-bases/jest',
    '@your-org/eslint-config-bases/storybook',
    '@your-org/eslint-config-bases/react',
    '@your-org/eslint-config-bases/react-testing-library',
    '@your-org/eslint-config-bases/graphql-schema',
    // Add specific rules for nextjs
    'plugin:@next/next/core-web-vitals',
  ],
  rules: {
    // https://github.com/vercel/next.js/discussions/16832
    '@next/next/no-img-element': 'off',
    // For the sake of example
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': 'off',
  },
  overrides: [
    {
      files: ['src/pages/**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/display-name': 'off',
      },
    },
    {
      files: ['src/backend/**/*graphql*schema*.ts'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            // Fine-tune naming convention for graphql resolvers and allow PascalCase
            selector: ['objectLiteralProperty'],
            format: ['camelCase', 'PascalCase'],
          },
        ],
      },
    },
    {
      files: ['src/backend/api/**/*.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
