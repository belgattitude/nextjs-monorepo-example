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
import { usePageTranslation } from '../hooks';

type Props = {
  children?: never;
};
export const CtaSection: FC<Props> = () => {
  const { t } = usePageTranslation();

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
            <Typography variant="h3">{t('home:CtaSection.title')}</Typography>
            <Typography variant="h5" color="primary">
              {t('home:CtaSection.subtitle')}
            </Typography>
          </Grid>
          <Grid item sm={12} md={6} alignItems="center" display="flex">
            <Stack direction="row" spacing={1}>
              <Button color="primary" href="#" variant="contained" size="large">
                {t('home:CtaSection.getStarted')}
              </Button>
              <Button
                color="secondary"
                href="#"
                variant="contained"
                size="large"
              >
                {t('home:CtaSection.learnMore')}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
