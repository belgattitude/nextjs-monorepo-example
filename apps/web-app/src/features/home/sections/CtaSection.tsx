import {
  Button,
  Box,
  Container,
  Stack,
  Grid,
  Typography,
  grey,
} from '@mqs/ui-lib';
import type { FC } from 'react';

type Props = {
  children?: never;
};
export const CtaSection: FC<Props> = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: grey.A100,
        paddingY: 6,
      }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item sm={12} md={6}>
            <Typography variant="h3">Ready to dive in?</Typography>
            <Typography variant="h5" color="primary">
              Start your free trial today.
            </Typography>
          </Grid>
          <Grid item sm={12} md={6} alignItems="center" display="flex">
            <Stack direction="row" spacing={1}>
              <Button color="primary" href="#" variant="contained" size="large">
                Get started
              </Button>
              <Button
                color="secondary"
                href="#"
                variant="contained"
                size="large"
              >
                Learn more
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
