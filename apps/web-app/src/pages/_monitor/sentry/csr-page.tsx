import { usePromise } from '@your-org/core-lib/hooks';
import type { FC } from 'react';

const fetchAndAlwaysThrow = async () => {
  throw new Error(
    'Error purposely crafted for monitoring sentry (/pages/_monitor/sentry/csr-page.tsx)'
  );
};

const MonitorSentryCsrPage: FC<{ children?: never }> = () => {
  const { error } = usePromise(fetchAndAlwaysThrow, {});
  if (error) {
    throw error;
  }
  return (
    <div>
      <h1>Sentry CSR error</h1>
      <p>
        The server side error wasn't caught by the global nextjs _error.tsx
        handler and did not propagate to sentry. See
        /pages/_monitor/sentry/csr-page.tsx.
      </p>
    </div>
  );
};

export default MonitorSentryCsrPage;
