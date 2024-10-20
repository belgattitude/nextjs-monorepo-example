/**
 * Opinionated config base for projects using graphql schemas (*.graphql)
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */
const graphqlSchemaPatterns = {
  files: ['*.graphql'],
};

module.exports = {
  overrides: [
    {
      // @see https://github.com/B2o5T/graphql-eslint
      extends: 'plugin:@graphql-eslint/schema-recommended',
      files: graphqlSchemaPatterns.files,
      rules: {
        '@graphql-eslint/known-type-names': 'error',
      },
    },
  ],
};
