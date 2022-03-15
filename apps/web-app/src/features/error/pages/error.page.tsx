import Head from 'next/head';
import type { FC } from 'react';

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
      <Head>
        <title>Error {statusCode}</title>
      </Head>
      <div id="nextjs-error-page">
        <h1>Error {statusCode}</h1>
        <p>{message}</p>
        <p>Sentry id: {sentryErrorId}</p>
        <p>Error: {error?.message}</p>
      </div>
    </>
  );
};
