import { Card, CardContent, Typography } from '@mqs/ui-lib';
import Head from 'next/head';
import type { FC } from 'react';
import { MainLayout } from '@/layouts/MainLayout';

type Props = {
  statusCode?: number;
  title?: string;
  error?: Error;
  message?: string;
  sentryErrorId?: string;
  children?: never;
};

export const ErrorPage: FC<Props> = (props) => {
  const { error, sentryErrorId, message, statusCode } = props;
  const title = props.title || statusCode;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MainLayout>
        <Card>
          <CardContent>
            {title ? <Typography variant="h4">{title}</Typography> : null}
            {message ? <Typography>{message}</Typography> : null}
            {sentryErrorId ? (
              <Typography>Sentry id: {sentryErrorId}</Typography>
            ) : null}
            {error?.message ? (
              <Typography>Error: {error?.message}</Typography>
            ) : null}
          </CardContent>
        </Card>
      </MainLayout>
    </>
  );
};
