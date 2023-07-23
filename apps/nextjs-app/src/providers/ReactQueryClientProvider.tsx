import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { FC, PropsWithChildren } from 'react';
import { queryClientConfig } from '@/config/react-query.config';

const queryClient = new QueryClient(queryClientConfig);

type Props = PropsWithChildren;

export const ReactQueryClientProvider: FC<Props> = (props) => {
  const { children } = props;
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
