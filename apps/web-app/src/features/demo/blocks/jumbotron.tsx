import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { FC } from 'react';
import { useState } from 'react';
import { useIntervalWhen } from 'rooks';

const gradients = {
  sky: css`
    background: linear-gradient(
      90deg,
      rgba(33, 169, 192, 1) 0%,
      rgba(113, 223, 208, 1) 70%,
      rgba(113, 223, 208, 1) 100%
    );
  `,
  orange: css`
    background: linear-gradient(
      90deg,
      rgb(217, 102, 23) 0%,
      rgb(69, 112, 229) 70%,
      rgb(127, 151, 249) 100%
    );
  `,
  yellow: css`
    background: linear-gradient(
      90deg,
      rgb(155, 235, 16) 0%,
      rgb(213, 226, 13) 70%,
      rgb(48, 206, 17) 100%
    );
  `,
  violet: css`
    background: linear-gradient(
      90deg,
      rgb(117, 4, 139) 0%,
      rgb(194, 69, 229) 70%,
      rgb(252, 14, 174) 100%
    );
  `,
  fun: css`
    background-image: url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif);
    background-size: cover;
  `,
} as const;

type GradientTextBackgrounds = keyof typeof gradients;
type Props = {
  bg?: GradientTextBackgrounds;
};

const GradientText = styled.span<Props>`
  ${(props) => gradients[props?.bg ?? 'sky']};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const titles: [string, GradientTextBackgrounds][] = [
  ['Typescript', 'sky'],
  ['React', 'orange'],
  ['Nextjs', 'violet'],
  ['Prisma', 'yellow'],
  ['Emotion', 'fun'],
];

export const Jumbotron: FC = () => {
  const [count, setCount] = useState(0);
  useIntervalWhen(() => {
    setCount(count >= titles.length - 1 ? 0 : count + 1);
  }, 2000);
  console.log('count', count);
  return (
    <div
      css={css`
        font-weight: bolder;
        font-size: 3em;
        line-height: 1.1em;
        @media (min-width: 600px) {
          font-size: 5em;
        } ;
      `}>
      One of many ways to start with{' '}
      {titles.map((title, idx) => {
        const [label, grad] = titles[idx];
        return (
          <GradientText
            key={grad}
            css={css`
              opacity: ${idx === count ? 1 : 0.7};
              font-size: ${idx === count ? '3em' : '0.5em'};
            `}
            bg={grad}>
            {label}
          </GradientText>
        );
      })}
    </div>
  );
};
