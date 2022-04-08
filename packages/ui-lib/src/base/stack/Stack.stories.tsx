import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Stack } from './Stack';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Stack',
  component: Stack,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Stack>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const StackExample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StackExample.args = {
  children: 'Stack',
};
