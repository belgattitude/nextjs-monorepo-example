import { Grid, Container } from '@mui/material';
import { useQuery } from 'react-query';
import { fetchAgenciesFromInternalApi } from '@/features/home/api/fetch.agencies';
import { AgencyCard } from '@/features/home/components/agency-card';

type Props = {
  children?: never;
};

export const AgenciesBlock: React.FC<Props> = () => {
  const { error, isLoading, data } = useQuery(`example-data`, () =>
    fetchAgenciesFromInternalApi().then((resp) => resp.data)
  );
  return (
    <Container maxWidth="lg">
      {error && <div>Error</div>}
      {isLoading && <div>Loading</div>}
      {data && (
        <Grid
          container
          spacing={2}
          direction={'row'}
          justifyContent={'flex-start'}
          alignItems={'flex-start'}>
          {data.agencies.map((agency) => {
            return (
              <Grid item key={`${agency.slug}`} xs={12}>
                <AgencyCard agency={agency} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
};
