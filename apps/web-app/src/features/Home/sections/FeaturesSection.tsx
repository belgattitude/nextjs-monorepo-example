import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Grid,
  Typography,
  AccessAlarmIcon,
  LightbulbIcon,
  LinearScaleIcon,
  MobileFriendlyIcon,
  uiLinearGradient,
} from '@mqs/ui-lib';
import type { FC } from 'react';
import { useMemo } from 'react';
import { usePageTranslation } from '@/features/Home/hooks';

type Props = {
  children?: never;
};

export const FeaturesSection: FC<Props> = () => {
  const { t } = usePageTranslation();
  const features = useMemo(
    () => [
      {
        name: 'Competitive exchange rates',
        description: t('common:loreum'), // eslint-disable-line sonarjs/no-duplicate-string
        icon: AccessAlarmIcon,
      },
      {
        name: 'No hidden fees',
        description: t('common:loreum'), // eslint-disable-line sonarjs/no-duplicate-string
        icon: LinearScaleIcon,
      },
      {
        name: 'Transfers are instant',
        description: t('common:loreum'), // eslint-disable-line sonarjs/no-duplicate-string
        icon: LightbulbIcon,
      },
      {
        name: 'Mobile notifications',
        description: t('common:loreum'), // eslint-disable-line sonarjs/no-duplicate-string
        icon: MobileFriendlyIcon,
      },
    ],
    [t]
  );

  return (
    <Box component="section" sx={{ paddingY: 6, background: uiLinearGradient }}>
      <Container>
        <Card>
          <CardContent>
            <Stack spacing={3}>
              <span>
                <Typography color="primary" variant="h4" textAlign="center">
                  {t('home:featuresSection.title')}
                </Typography>
                <Typography variant="body1" textAlign="center">
                  {t('home:featuresSection.subtitle')}
                </Typography>
                <Typography variant="body2" textAlign="center">
                  {t('common:loreum')}
                </Typography>
              </span>
              <Grid container spacing={3}>
                {features.map(({ description, icon: Icon, name }) => (
                  <Grid key={name} item xs={12} sm={6} md={6} lg={3}>
                    <Stack direction="row" spacing={1}>
                      <Avatar sx={{ backgroundColor: 'primary.main' }}>
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
