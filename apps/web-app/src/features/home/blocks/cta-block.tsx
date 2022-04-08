import { Button, Typography } from '@mqs/ui-lib';
import { Paper, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import type { FC } from 'react';

type Props = {
  children?: never;
};
export const CtaBlock: FC<Props> = () => {
  return (
    <Paper
      square
      elevation={0}
      sx={{
        backgroundColor: grey.A100,
        padding: 4,
        display: {
          lg: 'flex',
        },
        justifyContent: {
          lg: 'space-between',
        },
        alignItems: {
          lg: 'center',
        },
      }}
    >
      <span>
        <Typography variant="h3">Ready to dive in?</Typography>
        <Typography variant="h5" color="primary">
          Start your free trial today.
        </Typography>
      </span>
      <Stack direction="row" spacing={1}>
        <Button variant="contained" href="#">
          Get started
        </Button>
        <Button variant="contained" href="#">
          Learn more
        </Button>
      </Stack>
    </Paper>
  );
};
