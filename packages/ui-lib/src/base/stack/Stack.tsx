// To test out support for emotion-11/css prop in storybook

import type { StackProps as MuiStackProps } from '@mui/material/Stack';
import MuiStack from '@mui/material/Stack';
import type { FC } from 'react';
import React from 'react';

type StackProps = MuiStackProps;

/**
 *
 * Material Design:
 * - [Responsive Layout Stack](https://material.io/design/layout/responsive-layout-stack.html)
 *
 * Material UI:
 * - [Stack API](https://mui.com/api/stack/)
 * - [Stack Demos](https://mui.com/components/stack/)
 *
 */
export const Stack: FC<StackProps> = (props) => {
  return <MuiStack {...props} />;
};
