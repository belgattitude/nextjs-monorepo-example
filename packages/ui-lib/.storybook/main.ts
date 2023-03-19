import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // Not working in storybook v7 + vite
    // '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: true,
      builder: {
        viteConfigPath: './vite.config.storybook.ts',
      },
    },
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Docs', // set to change the name of generated docs entries
  },
};
export default config;
