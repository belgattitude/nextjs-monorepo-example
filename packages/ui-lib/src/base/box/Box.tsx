// To test out support for emotion-11/css prop in storybook

import type { BoxProps as MuiBoxProps } from '@mui/material/Box';
import MuiBox from '@mui/material/Box';
import type { FC } from 'react';
import React from 'react';

type BoxProps = MuiBoxProps;

/**
 *
 * Material Design:
 * - [Responsive Layout Box](https://material.io/design/layout/responsive-layout-box.html)
 *
 * Material UI:
 * - [Box API](https://mui.com/api/box/)
 * - [Box Demos](https://mui.com/components/box/)
 *
 */
export const Box: FC<BoxProps> = (props) => {
  return <MuiBox {...props} />;
};
