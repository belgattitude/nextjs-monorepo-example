import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Avatar } from './Avatar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Container = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Container.args = {
  children: 'Avatar',
};
