import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { AppBarTop } from './AppBarTop';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'AppBarTop',
  component: AppBarTop,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppBarTop>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppBarTop> = (args) => (
  <AppBarTop {...args} />
);

export const AppBarTopExample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AppBarTopExample.args = {
  children: 'AppBarTop',
};
