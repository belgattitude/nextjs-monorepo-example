// To test out support for emotion-11/css prop in storybook

import type { CardProps as MuiCardProps } from '@mui/material/Card';
import MuiCard from '@mui/material/Card';
import type { FC } from 'react';
import React from 'react';

type CardProps = MuiCardProps;

/**
 *
 * Material Design:
 * - [Responsive Layout Card](https://material.io/design/layout/responsive-layout-card.html)
 *
 * Material UI:
 * - [Card API](https://mui.com/api/card/)
 * - [Card Demos](https://mui.com/components/card/)
 *
 */
export const Card: FC<CardProps> = (props) => {
  return <MuiCard {...props} />;
};
