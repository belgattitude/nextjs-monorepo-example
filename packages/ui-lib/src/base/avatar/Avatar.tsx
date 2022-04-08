// To test out support for emotion-11/css prop in storybook

import type { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';
import MuiAvatar from '@mui/material/Avatar';
import type { FC } from 'react';
import React from 'react';

type AvatarProps = MuiAvatarProps;

/**
 *
 * Material Design:
 * - [Responsive Layout Avatar](https://material.io/design/layout/responsive-layout-avatar.html)
 *
 * Material UI:
 * - [Avatar API](https://mui.com/api/avatar/)
 * - [Avatar Demos](https://mui.com/components/avatar/)
 *
 */
export const Avatar: FC<AvatarProps> = (props) => {
  return <MuiAvatar {...props} />;
};
