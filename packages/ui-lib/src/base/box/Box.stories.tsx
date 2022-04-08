import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Box } from './Box';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Box',
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Container = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Container.args = {
  children: 'Box',
};
S;
