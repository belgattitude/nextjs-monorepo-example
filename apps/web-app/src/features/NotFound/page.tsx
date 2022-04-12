import {
  ArrowBackIcon,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from '@mqs/ui-lib';
import { captureMessage } from '@sentry/react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import type { FC, ReactElement } from 'react';
import { useMemo, useEffect, useCallback } from 'react';
import { usePageTranslation } from '@/features/NotFound/hooks';
import { MainLayout } from '@/layouts/MainLayout';

type Props = {
  children?: never;
};

export const NotFoundPage: FC<Props> = () => {
  const { t } = usePageTranslation();
  const router = useRouter();
  const pathname = useMemo(() => router.asPath || '', [router.asPath]);

  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);

  const section = useMemo(
    () => (
      <Box component="section" sx={{ paddingY: 6 }}>
        <Card>
          <CardHeader
            title={t('notFound:title')}
            subheader={t('notFound:subtitle')}
          />
          <CardContent>
            <Typography>{t('notFound:body', { pathname })}</Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              size="large"
              onClick={handleGoBack}
              startIcon={<ArrowBackIcon />}
            >
              {t('common:actions.back')}
            </Button>
          </CardActions>
        </Card>
      </Box>
    ),
    [handleGoBack, pathname, t]
  );

  useEffect(() => {
    captureMessage(`404: ${pathname}`);
  }, [pathname]);

  return (
    <>
      <NextSeo
        title={t('common:pages.notFound.title')}
        description={t('common:pages.notFound.description')}
      />

      {section}
    </>
  );
};

export const getServerSideLayout = (page: ReactElement) => {
  return (
    <>
      <MainLayout>
        <Container>{page}</Container>
      </MainLayout>
    </>
  );
};
