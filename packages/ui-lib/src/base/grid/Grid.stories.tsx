import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Grid } from './Grid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Grid',
  component: Grid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Grid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Container = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Container.args = {
  container: true,
  children: 'Grid',
};

export const Item = Template.bind({});
Item.args = {
  item: true,
  children: 'body',
  xs: 12,
  sm: 6,
};
