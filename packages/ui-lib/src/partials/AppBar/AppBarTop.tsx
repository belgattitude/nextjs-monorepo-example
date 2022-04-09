import type { AppBarProps } from '@mui/material/AppBar';
import type { FC } from 'react';
import React from 'react';
import { AppBar, Toolbar, Container } from '../../components';

type AppBarTopProps = AppBarProps;

/**
 *
 * The top app bar displays information and actions relating to the current screen.
 *
 * Material Design:
 * - [App Bar Top Docs](https://material.io/components/app-bars-top)
 *
 * Material UI:
 * - [AppBar API](https://mui.com/api/app-bar/)
 * - [AppBar Demos](https://mui.com/components/app-bar/)
 *
 */
export const AppBarTop: FC<AppBarTopProps> = ({ children, ...props }) => {
  return (
    <AppBar {...props}>
      <Container>
        <Toolbar>{children}</Toolbar>
      </Container>
    </AppBar>
  );
};
