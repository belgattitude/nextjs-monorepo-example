import { Container, Typography } from '@mqs/ui-lib/components';
import type { FC } from 'react';
import { useQuery } from 'react-query';
import { fetchPoemsWithKy } from '../api/fetch-poems-ky.api';
import { PoemList } from '../components/poem-grid';

type NoChildrenProps = {
  children?: never;
};

const PoemGridWithReactQueryAndKy: FC<NoChildrenProps> = () => {
  const { data, isLoading, error } = useQuery(
    'posts',
    () => fetchPoemsWithKy(),
    {}
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error {JSON.stringify(error)}</div>;
  }
  return <>{data && <PoemList poems={data} />}</>;
};

export const DemoApiBlock: FC<NoChildrenProps> = () => {
  return (
    <section>
      <Container>
        <Typography variant="h3">Poetry on the wild.</Typography>
        <Typography variant="h4" color="primary">
          Client fetch with ky / react-query from nextjs api, db in supabase.io,
          connection with prisma. Ui with material ui
        </Typography>
        <PoemGridWithReactQueryAndKy />
      </Container>
    </section>
  );
};
