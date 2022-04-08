import { Box, Container, Stack, Grid, Typography } from '@mqs/ui-lib';
import {
  AccessAlarm,
  Lightbulb,
  LinearScale,
  MobileFriendly,
} from '@mui/icons-material';
import { Avatar, Card, CardContent } from '@mui/material';
import type { FC } from 'react';

type Props = {
  children?: never;
};

const lorem =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.';

const features = [
  {
    name: 'Competitive exchange rates',
    description: lorem,
    icon: AccessAlarm,
  },
  {
    name: 'No hidden fees',
    description: lorem,
    icon: LinearScale,
  },
  {
    name: 'Transfers are instant',
    description: lorem,
    icon: Lightbulb,
  },
  {
    name: 'Mobile notifications',
    description: lorem,
    icon: MobileFriendly,
  },
];

export const FeaturesBlock: FC<Props> = () => {
  return (
    <Box
      component="section"
      sx={{
        background: (theme) =>
          `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 13%, ${theme.palette.secondary.main} 100%)`,
      }}
    >
      <Container>
        <br />
        <br />
        <Card>
          <CardContent>
            <Stack spacing={3}>
              <Typography textAlign="center">
                <Typography color="primary" variant="h4">
                  Transactions
                </Typography>
                <Typography variant="body1">
                  A better way to send money
                </Typography>
                <Typography variant="caption">{lorem}</Typography>
              </Typography>
              <Grid container spacing={3}>
                {features.map(({ description, icon: Icon, name }) => (
                  <Grid key={name} item xs={12} sm={6} md={6} lg={3}>
                    <Stack direction="row" spacing={1}>
                      <Avatar
                        sx={{
                          backgroundColor: 'primary.main',
                        }}
                      >
                        <Icon aria-hidden="true" />
                      </Avatar>
                      <Stack>
                        <Typography>{name}</Typography>
                        <Typography variant="caption">{description}</Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </CardContent>
        </Card>
        <br />
        <br />
      </Container>
    </Box>
  );
};
