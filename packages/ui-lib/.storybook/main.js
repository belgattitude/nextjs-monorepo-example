const path = require('path');

module.exports = {
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx|js|jsx)'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },

  features: {
    // @link https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-the-v7-store
    storyStoreV7: false,
    // @link https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#emotion11-quasi-compatibility
    emotionAlias: false,
    // @link https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#babel-mode-v7
    babelModeV7: false,
  },
  babel: (config) => {
    config.presets.push(require.resolve('@emotion/babel-preset-css-prop'));
    return config;
  },
  webpackFinal: async (config) => {
    const emotionReactEleven = path.dirname(
      require.resolve('@emotion/react/package.json')
    );
    const emotionStyledEleven = path.dirname(
      require.resolve('@emotion/styled/package.json')
    );

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': emotionReactEleven,
          '@emotion/styled': emotionStyledEleven,
          'emotion-theming': emotionReactEleven,
        },
      },
    };
  },

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    /*
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: true,
        },
      },
    },*/
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
};
