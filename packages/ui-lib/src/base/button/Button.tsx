// To test out support for emotion-11/css prop in storybook

import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import MuiButton from '@mui/material/Button';
import type { FC } from 'react';
import React from 'react';

type ButtonProps = MuiButtonProps;

/**
 *
 * Material Design:
 * - [Button Docs](https://material.io/components/buttons)
 *
 * Material UI:
 * - [Button API](https://mui.com/api/button/)
 * - [Button Demos](https://mui.com/components/buttons/)
 *
 */
export const Button: FC<ButtonProps> = (props) => {
  return <MuiButton {...props} />;
};
