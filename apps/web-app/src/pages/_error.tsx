/**
 * Typescript class based component for custom-error
 * @link https://nextjs.org/docs/advanced-features/custom-error-page
 */

import * as Sentry from '@sentry/node';
import { isNonEmptyString } from '@your-org/core-lib';
import type { NextPage, NextPageContext } from 'next';
import NextErrorComponent from 'next/error';
import type { ErrorProps } from 'next/error';

// Adds HttpException to the list of possible error types.
type AugmentedError = NonNullable<NextPageContext['err']> | null;
type CustomErrorProps = {
  err?: AugmentedError;
  message?: string;
  hasGetInitialPropsRun?: boolean;
} & Omit<ErrorProps, 'err'>;

type AugmentedNextPageContext = Omit<NextPageContext, 'err'> & {
  err: AugmentedError;
};

const captureException = async (err: string | Error) => {
  if (
    process.env.NEXT_PUBLIC_SENTRY_DSN &&
    isNonEmptyString(process.env.NEXT_PUBLIC_SENTRY_DSN)
  ) {
    Sentry.captureException(err);
  }
};

const captureExceptionAndFlush = async (
  err: string | Error,
  flushAfter = 2000
) => {
  if (
    process.env.NEXT_PUBLIC_SENTRY_DSN &&
    isNonEmptyString(process.env.NEXT_PUBLIC_SENTRY_DSN)
  ) {
    Sentry.captureException(err);
    if (flushAfter > 0) {
      // Flushing before returning is necessary if deploying to Vercel, see
      // https://vercel.com/docs/platform/limits#streaming-responses
      await Sentry.flush(flushAfter);
    }
  }
};

const CustomError: NextPage<CustomErrorProps> = (props) => {
  const { statusCode, err, hasGetInitialPropsRun } = props;

  if (!hasGetInitialPropsRun && err) {
    // getInitialProps is not called in case of https://github.com/vercel/next.js/issues/8592.
    // As a workaround, we pass err via _app.js so it can be captured

    // Flushing is not required in this case as it only happens on the client
    captureException(err);
  }

  return <NextErrorComponent statusCode={statusCode} />;
};

CustomError.getInitialProps = async ({
  res,
  err,
  asPath,
}: AugmentedNextPageContext) => {
  const errorInitialProps = (await NextErrorComponent.getInitialProps({
    res,
    err,
  } as NextPageContext)) as CustomErrorProps;

  // Workaround for https://github.com/vercel/next.js/issues/8592, mark when
  // getInitialProps has run
  errorInitialProps.hasGetInitialPropsRun = true;

  // Running on the server, the response object (`res`) is available.
  //
  // Next.js will pass an err on the server if a page's data fetching methods
  // threw or returned a Promise that rejected
  //
  // Running on the client (browser), Next.js will provide an err if:
  //
  //  - a page's `getInitialProps` threw or returned a Promise that rejected
  //  - an exception was thrown somewhere in the React lifecycle (render,
  //    componentDidMount, etc) that was caught by Next.js's React Error
  //    Boundary. Read more about what types of exceptions are caught by Error
  //    Boundaries: https://reactjs.org/docs/error-boundaries.html

  if (err) {
    // Flushing before returning is necessary if deploying to Vercel, see
    // https://vercel.com/docs/platform/limits#streaming-responses
    await captureExceptionAndFlush(err, 2000);
    return errorInitialProps;
  }

  // If this point is reached, getInitialProps was called without any
  // information about what the error might be. This is unexpected and may
  // indicate a bug introduced in Next.js, so record it in Sentry
  //
  // Flushing before returning is necessary if deploying to Vercel, see
  // https://vercel.com/docs/platform/limits#streaming-responses
  await captureExceptionAndFlush(
    new Error(`_error.js getInitialProps missing data at path: ${asPath}`),
    2000
  );

  return errorInitialProps;
};

export default CustomError;
