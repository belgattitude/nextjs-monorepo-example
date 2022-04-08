// To test out support for emotion-11/css prop in storybook

import type { CardMediaProps as MuiCardMediaProps } from '@mui/material/CardMedia';
import MuiCardMedia from '@mui/material/CardMedia';
import type { FC } from 'react';
import React from 'react';

type CardMediaProps = MuiCardMediaProps;

/**
 *
 * Material Design:
 * - [Responsive Layout CardMedia](https://material.io/design/layout/responsive-layout-cardmedia.html)
 *
 * Material UI:
 * - [CardMedia API](https://mui.com/api/cardmedia/)
 * - [CardMedia Demos](https://mui.com/components/cardmedia/)
 *
 */
export const CardMedia: FC<CardMediaProps> = (props) => {
  return <MuiCardMedia {...props} />;
};
