import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Grid,
  Typography,
} from '@mqs/ui-lib';
import {
  AccessAlarm,
  Lightbulb,
  LinearScale,
  MobileFriendly,
} from '@mui/icons-material';
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
        paddingY: 6,
        background: ({
          palette: {
            primary: { main: primary },
            secondary: { main: secondary },
          },
        }) =>
          `linear-gradient(90deg, ${secondary} 0%, ${primary} 13%, ${secondary} 100%)`,
      }}
    >
      <Container>
        <Card>
          <CardContent>
            <Stack spacing={3}>
              <span>
                <Typography color="primary" variant="h4" textAlign="center">
                  Transactions
                </Typography>
                <Typography variant="body1" textAlign="center">
                  A better way to send money
                </Typography>
                <Typography variant="body2" textAlign="center">
                  {lorem}
                </Typography>
              </span>
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
      </Container>
    </Box>
  );
};
