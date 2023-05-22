import type { StoryObj, Meta } from '@storybook/react';
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
} as Meta<typeof BasicCard>;

export const BasicCardExample: StoryObj<typeof BasicCard> = {
  render: (_args) => (
    <div>
      <BasicCard
        title={'John Doe'}
        description={'The famous goat milk'}
        image={'https://picsum.photos/200/300'}
      />
    </div>
  ),
};
