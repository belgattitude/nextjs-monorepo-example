// To test out support for emotion-11/css prop in storybook

import { Toolbar } from '@mui/material';
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiAppBar from '@mui/material/AppBar';
import type { FC } from 'react';
import React from 'react';
import { Container } from '../container/Container';

type AppBarProps = MuiAppBarProps;

/**
 *
 * Material Design:
 * - [Responsive Layout AppBar](https://material.io/design/layout/responsive-layout-appBar.html)
 *
 * Material UI:
 * - [AppBar API](https://mui.com/api/appBar/)
 * - [AppBar Demos](https://mui.com/components/appBar/)
 *
 */
export const AppBar: FC<AppBarProps> = ({ children, ...props }) => {
  return (
    <MuiAppBar {...props}>
      <Container>
        <Toolbar>{children}</Toolbar>
      </Container>
    </MuiAppBar>
  );
};
