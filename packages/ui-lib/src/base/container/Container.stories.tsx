import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Container } from './Container';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Container',
  component: Container,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Container>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const ContainerExample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ContainerExample.args = {
  children: 'Container',
};
