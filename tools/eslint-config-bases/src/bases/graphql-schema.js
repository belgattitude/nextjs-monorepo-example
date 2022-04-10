/**
 * Custom config base for projects using graphql schemas (*.graphql)
 * @see https://github.com/B2o5T/graphql-eslint
 */
module.exports = {
  overrides: [
    {
      files: ['*.graphql'],
      extends: 'plugin:@graphql-eslint/schema-recommended',
      rules: {
        '@graphql-eslint/known-type-names': 'error',
      },
    },
  ],
};
