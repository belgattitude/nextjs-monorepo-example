import { usePromise } from '@mqs/core-lib/hooks';
import type { FC } from 'react';
import { ErrorPage } from '@/features/Error';

const fetchAndAlwaysThrow = async () => {
  throw new Error(
    'Error purposely crafted for monitoring sentry (/pages/_monitor/sentry/csr-page.tsx)'
  );
};

const MonitorSentryCsrRoute: FC<{ children?: never }> = () => {
  const { error } = usePromise(fetchAndAlwaysThrow, {});
  if (error) {
    throw error;
  }
  return (
    <ErrorPage
      title="Unexpected error"
      message="If you see this message, it means that an error thrown in a static NextJs page wasn't caught by the global error handler (pages/_error.tsx). This is a bug in the application and may affect the ability to display error pages and log errors on Sentry. See the monitoring page in /pages/_monitor/sentry/csr-page.tsx."
    />
  );
};

export default MonitorSentryCsrRoute;
