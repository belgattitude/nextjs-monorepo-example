const bases = {
  graphqlSchema: require('./bases/graphql-schema'),
  jest: require('./bases/jest'),
  playwright: require('./bases/playwright'),
  react: require('./bases/react'),
  reactTestingLibrary: require('./bases/react-testing-library'),
  storybook: require('./bases/storybook'),
  typescript: require('./bases/typescript'),
  sonar: require('./bases/sonar'),
};

module.exports = {
  bases,
};
