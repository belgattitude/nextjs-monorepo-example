// To test out support for emotion-11/css prop in storybook

import type { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import MuiTypography from '@mui/material/Typography';
import type { FC } from 'react';
import React from 'react';

type TypographyProps = MuiTypographyProps;

/**
 *
 * Material Design:
 * - [Type System](https://material.io/design/typography/the-type-system.html)
 * - [Understanding Typography](https://material.io/design/typography/understanding-typography.html)
 *
 * Material UI:
 * - [Typography API](https://mui.com/api/typography/)
 * - [Typography Demos](https://mui.com/components/typography/)
 *
 */
export const Typography: FC<TypographyProps> = (props) => {
  return <MuiTypography {...props} />;
};
