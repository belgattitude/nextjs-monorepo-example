import type { FC } from 'react';

type Props = {
  hasRunOnServer: boolean;
};

const MonitorSentrySsrPage: FC<Props> = (props) => {
  if (!props.hasRunOnServer) {
    throw new Error(
      'Error purposely crafted for monitoring sentry (/pages/_monitor/sentry/ssr-page.tsx)'
    );
  }
  return (
    <div>
      <h1>Sentry SSR error</h1>
      <p>
        The server side error wasn't caught by the global nextjs _error.tsx
        handler and did not propagate to sentry. See
        /pages/_monitor/sentry/ssr-page.tsx.
      </p>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      hasRunOnServer: false,
    },
  };
}

export default MonitorSentrySsrPage;
