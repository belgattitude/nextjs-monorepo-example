import { Box, Button, Typography } from '@mqs/ui-lib';
import {
  Speaker as SpeakerIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { AppBar, Container, Toolbar } from '@mui/material';
import type { FC } from 'react';

type Props = {
  children?: never;
};

export const Banner: FC<Props> = () => {
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <span>
              <SpeakerIcon aria-hidden="true" />
              &nbsp;
              <Typography className="md:hidden">
                We announced a new product!
              </Typography>
              <Typography className="hidden md:inline">
                Big news! We're excited to announce a brand new product.
              </Typography>
            </span>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button variant="text" color="inherit" href="#">
              Learn more
            </Button>
            <Button variant="text" color="inherit" href="#">
              <span className="sr-only">Dismiss</span>
              <CloseIcon aria-hidden="true" />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
