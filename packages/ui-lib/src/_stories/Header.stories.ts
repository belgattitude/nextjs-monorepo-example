import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Header } from './Header';

const meta = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    onLogout: fn(),
    onLogin: fn(),
    onCreateAccount: fn(),
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {
  args: {
    onLogout: fn(),
    onLogin: fn(),
    onCreateAccount: fn(),
  },
};
