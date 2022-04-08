import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Typography } from './Typography';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: 'primary',
  children: 'Typography',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Typography',
};

export const Body = Template.bind({});
Body.args = {
  variant: 'body1',
  children: 'body',
};

export const Caption = Template.bind({});
Caption.args = {
  variant: 'caption',
  children: 'caption',
};
