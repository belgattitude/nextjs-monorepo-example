import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { AppBar } from './AppBar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'AppBar',
  component: AppBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />;

export const Container = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Container.args = {
  children: 'AppBar',
};
