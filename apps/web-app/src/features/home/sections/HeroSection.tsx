import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from '@mqs/ui-lib';
import Image from 'next/image';
import type { FC } from 'react';
import { usePageTranslation } from '../hooks';

type Props = {
  children?: never;
};

export const HeroSection: FC<Props> = () => {
  const { t } = usePageTranslation();
  const theme = useTheme();

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
                  {t('home:HeroSection.title')}
                </Typography>
                <Typography>{t('home:HeroSection.description')}</Typography>
              </CardContent>
              <CardActions>
                <Stack direction="row" spacing={1}>
                  <Button color="primary" variant="contained" size="large">
                    {t('home:HeroSection.button')}
                  </Button>
                  <Button color="secondary" variant="contained" size="large">
                    {t('home:HeroSection.button')}
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
              style={{ borderRadius: theme.shape.borderRadius }}
              width={720}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
