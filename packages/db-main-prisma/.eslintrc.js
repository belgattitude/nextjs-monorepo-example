/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/belgattitude/nextjs-monorepo-example/blob/main/docs/about-linters.md
 */

module.exports = {
  root: true,
  ignorePatterns: ['dist', 'build', 'src/generated'],
  extends: [
    '@your-org/eslint-config-bases/typescript',
    '@your-org/eslint-config-bases/sonar',
  ],
  rules: {
    // optional overrides per project
  },
  overrides: [
    // optional overrides per project file match
  ],
};
