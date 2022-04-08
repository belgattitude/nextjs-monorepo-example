// To test out support for emotion-11/css prop in storybook

import type { CardActionsProps as MuiCardActionsProps } from '@mui/material/CardActions';
import MuiCardActions from '@mui/material/CardActions';
import type { FC } from 'react';
import React from 'react';

type CardActionsProps = MuiCardActionsProps;

/**
 *
 * Material Design:
 * - [Responsive Layout CardActions](https://material.io/design/layout/responsive-layout-cardactions.html)
 *
 * Material UI:
 * - [CardActions API](https://mui.com/api/cardactions/)
 * - [CardActions Demos](https://mui.com/components/cardactions/)
 *
 */
export const CardActions: FC<CardActionsProps> = (props) => {
  return <MuiCardActions {...props} />;
};
