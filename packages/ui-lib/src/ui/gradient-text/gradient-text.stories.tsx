import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { GradientText } from './gradient-text';
import { useState } from 'react';
import { useIntervalWhen } from 'rooks';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Ui/Exp/GradientText',
  component: GradientText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   bg: {
  //     options: ['sky', 'green', 'blue', 'red'],
  //   },
  // },
} as ComponentMeta<typeof GradientText>;
/*
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GradientText> = (args) => {
  const { children, ...restArgs } = args;
  return <GradientText {...restArgs}>{children}</GradientText>;
};

export const BasicExample = Template.bind({});
BasicExample.args = {
  bg: 'sky',
  children: 'The world is full of surprises',
  css: css`
    font-size: 3em;
    font-weight: 800;
  `,
};
*/

export const BasicExample: ComponentStory<typeof GradientText> = (args) => (
  <div
    style={{
      maxWidth: '500px',
      border: '1px solid blue',
      fontSize: '3em',
      fontWeight: 800,
    }}>
    <span>
      Hello world, this is a long text that will be wrapped to multiple lines{' '}
      <GradientText {...args}>the sky is full of surprises</GradientText>
    </span>
  </div>
);

const titles = [
  ['Typescript', 'sky'],
  ['React', 'orange'],
  ['Nextjs', 'sky'],
  ['Prisma', 'orange'],
  ['Emotion', 'green'],
] as const;

export const AnimatedExample: ComponentStory<typeof GradientText> = (args) => {
  const [count, setCount] = useState(0);
  useIntervalWhen(() => {
    setCount((count) => (count >= titles.length - 1 ? 0 : count + 1));
  }, 1000);
  return (
    <div
      style={{
        maxWidth: '500px',
        border: '1px solid blue',
        fontSize: '3em',
        fontWeight: 800,
      }}>
      <span style={{ overflowWrap: 'break-word' }}>
        We can make a lot of cool things with{' '}
        {titles.map((title, idx) => {
          const [label, grad] = titles[idx];
          const curr = idx === count;
          return (
            <GradientText
              // style={{ position: 'absolute' }}
              className={curr ? 'fadeIn' : 'fadeOut'}
              key={grad}
              bg={grad}>
              {label}
            </GradientText>
          );
        })}
      </span>
    </div>
  );
};
