import type { FC } from 'react';
import { MainLayout } from '@/components/layout/main-layout';

type Props = {
  statusCode?: number | null;
  error?: Error;
  message?: string;
  sentryErrorId?: string;
  children?: never;
};

export const ErrorPage: FC<Props> = (props) => {
  const { error, sentryErrorId, message, statusCode } = props;

  return (
    <>
      <MainLayout>
        <h1>Error {statusCode}</h1>
        <p>{message}</p>
        <p>Sentry id: {sentryErrorId}</p>
        <p>Error: {error?.message}</p>
      </MainLayout>
    </>
  );
};
