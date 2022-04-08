// To test out support for emotion-11/css prop in storybook

import type { ContainerProps as MuiContainerProps } from '@mui/material/Container';
import MuiContainer from '@mui/material/Container';
import type { FC } from 'react';
import React from 'react';

type ContainerProps = MuiContainerProps;

/**
 *
 * Material Design:
 * - [Responsive Layout Container](https://material.io/design/layout/responsive-layout-container.html)
 *
 * Material UI:
 * - [Container API](https://mui.com/api/container/)
 * - [Container Demos](https://mui.com/components/container/)
 *
 */
export const Container: FC<ContainerProps> = (props) => {
  return <MuiContainer {...props} />;
};
