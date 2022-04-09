import {
  AppBarTop,
  Box,
  Button,
  CloseIcon,
  SpeakerIcon,
  Typography,
  visuallyHidden,
} from '@mqs/ui-lib';
import type { FC } from 'react';

type Props = {
  children?: never;
};

export const Banner: FC<Props> = () => {
  return (
    <AppBarTop position="sticky">
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <span>
          <SpeakerIcon aria-hidden="true" />
          &nbsp;
          <Typography sx={{ display: { xs: 'inline', md: 'none' } }}>
            We announced a new product!
          </Typography>
          <Typography sx={{ display: { xs: 'none', md: 'inline' } }}>
            Big news! We're excited to announce a brand new product.
          </Typography>
        </span>
      </Box>
      <Box sx={{ flexGrow: 0 }}>
        <Button variant="text" color="inherit" href="#">
          Learn more
        </Button>
        <Button variant="text" color="inherit" href="#">
          <Box component="span" sx={visuallyHidden}>
            Dismiss
          </Box>
          <CloseIcon aria-hidden="true" />
        </Button>
      </Box>
    </AppBarTop>
  );
};
