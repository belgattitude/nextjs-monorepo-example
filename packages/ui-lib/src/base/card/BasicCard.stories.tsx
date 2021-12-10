import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BasicCard } from './BasicCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Card/BasicCard',
  component: BasicCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   bg: {
  //     options: ['sky', 'green', 'blue', 'red'],
  //   },
  // },
} as ComponentMeta<typeof BasicCard>;

export const BasicCardExample: ComponentStory<typeof BasicCard> = (_args) => (
  <div>
    <BasicCard
      title={'John Doe'}
      description={'The famous goat milk'}
      image={
        'https://images.unsplash.com/photo-1638893427709-28865ba8f183?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
      }
    />
  </div>
);
