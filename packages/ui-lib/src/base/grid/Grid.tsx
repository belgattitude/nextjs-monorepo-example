// To test out support for emotion-11/css prop in storybook

import type { GridProps as MuiGridProps } from '@mui/material/Grid';
import MuiGrid from '@mui/material/Grid';
import type { FC } from 'react';
import React from 'react';

type GridProps = MuiGridProps;

/**
 *
 * Material Design:
 * - [Responsive Layout Grid](https://material.io/design/layout/responsive-layout-grid.html)
 *
 * Material UI:
 * - [Grid API](https://mui.com/api/grid/)
 * - [Grid Demos](https://mui.com/components/grid/)
 *
 */
export const Grid: FC<GridProps> = (props) => {
  return <MuiGrid {...props} />;
};
