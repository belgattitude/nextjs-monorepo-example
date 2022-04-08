// To test out support for emotion-11/css prop in storybook

import type { CardContentProps as MuiCardContentProps } from '@mui/material/CardContent';
import MuiCardContent from '@mui/material/CardContent';
import type { FC } from 'react';
import React from 'react';

type CardContentProps = MuiCardContentProps;

/**
 *
 * Material Design:
 * - [Responsive Layout CardContent](https://material.io/design/layout/responsive-layout-cardcontent.html)
 *
 * Material UI:
 * - [CardContent API](https://mui.com/api/cardcontent/)
 * - [CardContent Demos](https://mui.com/components/cardcontent/)
 *
 */
export const CardContent: FC<CardContentProps> = (props) => {
  return <MuiCardContent {...props} />;
};
