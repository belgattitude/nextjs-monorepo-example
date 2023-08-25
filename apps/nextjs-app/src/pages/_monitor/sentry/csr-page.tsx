import { useEffect, useState, type FC } from 'react';

// eslint-disable-next-line @typescript-eslint/require-await
const getAsyncError = async (): Promise<never> => {
  throw new Error(
    'Error purposely crafted for monitoring sentry (/pages/_monitor/sentry/csr-page.tsx)'
  );
};

const MonitorSentryCsrRoute: FC = () => {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getAsyncError().catch((err) => setError(err as Error));
  }, []);

  if (error) {
    throw error;
  }
  return (
    <div>
      <h1>Unexpected error</h1>
      <p>
        If you see this message, it means that an error thrown in a static
        NextJs page wasn't caught by the global error handler
        (pages/_error.tsx). This is a bug in the application and may affect the
        ability to display error pages and log errors on Sentry. See the
        monitoring page in /pages/_monitor/sentry/csr-page.tsx.
      </p>
    </div>
  );
};

export default MonitorSentryCsrRoute;
