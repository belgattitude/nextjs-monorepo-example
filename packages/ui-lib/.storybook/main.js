const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  framework: '@storybook/react',
  // Keep react 17 render, till mdx 2 is fully supported
  // - https://github.com/mdx-js/mdx/issues/1945
  // - https://github.com/storybookjs/storybook/issues/18094
  // @link https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#react18-new-root-api
  reactOptions: { legacyRootApi: true },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx|js|jsx)'],
  /** Not needed as per sb 6.5
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
  */
  features: {
    // Still issues with mdx2 and react 18
    // @link https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#opt-in-mdx2-support
    previewMdx2: false,
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
    // Typescript paths hacks (only for webpack 4)
    // Wish next storybook versions will help us to remove this

    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      })
    );

    // Emotion 11 hacks

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

    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: true,
        },
      },
    },
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
