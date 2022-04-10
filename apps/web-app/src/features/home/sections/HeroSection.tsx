import {
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Stack,
  Grid,
  Typography,
} from '@mqs/ui-lib';
import Image from 'next/image';
import type { FC } from 'react';

type Props = {
  children?: never;
};

export const HeroSection: FC<Props> = () => {
  return (
    <Box component="section" sx={{ paddingY: 6 }}>
      <Container>
        <Grid container spacing={8}>
          <Grid
            display="flex"
            flexDirection="column"
            item
            justifyContent="center"
            md={6}
            xs={12}
          >
            <Card elevation={0}>
              <CardContent>
                <Typography variant="h3">
                  Before they sold out &nbsp;
                  <Box
                    component="br"
                    sx={{ display: { xs: 'nonde', lg: 'inline-block' } }}
                  />
                  readymade gluten
                </Typography>
                <Typography>
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.
                </Typography>
              </CardContent>
              <CardActions>
                <Stack direction="row" spacing={1}>
                  <Button color="primary" variant="contained" size="large">
                    Button
                  </Button>
                  <Button color="secondary" variant="contained" size="large">
                    Button
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={6} xs={12}>
            <Image
              alt={'ui-logo'}
              height={600}
              layout={'responsive'}
              loading={'eager'}
              objectFit="cover"
              objectPosition="center"
              src={'/assets/annie-spratt-unsplash.jpg'}
              style={{ borderRadius: '0.25rem' }}
              width={720}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
