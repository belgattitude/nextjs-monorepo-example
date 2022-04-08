// import { useTranslation } from 'next-i18next';
import { Button, Typography } from '@mqs/ui-lib';
import { Container, Grid, Stack } from '@mui/material';
import Image from 'next/image';
import type { FC } from 'react';

type Props = {
  children?: never;
};

export const HeroBlock: FC<Props> = () => {
  // const { t } = useTranslation(['home', 'common']);

  return (
    <section>
      <Container>
        <Grid paddingY={8} spacing={8} container>
          <Grid item xs={12} md={6}>
            <Typography variant="h3">
              Before they sold out&nbsp;
              <br className="hidden lg:inline-block" />
              readymade gluten
            </Typography>
            <Typography>
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button variant="contained" color="primary">
                Button
              </Button>
              <Button variant="contained" color="secondary">
                Button
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              width={720}
              height={600}
              loading={'eager'}
              src={'/assets/annie-spratt-unsplash.jpg'}
              alt={'tailwind-ui-logo'}
              className="object-cover object-center rounded"
              layout={'responsive'}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
