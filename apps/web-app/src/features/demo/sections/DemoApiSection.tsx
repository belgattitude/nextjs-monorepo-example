import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
} from '@mqs/ui-lib';
import type { FC } from 'react';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { fetchPoemsWithKy } from '../api/fetch-poems-ky.api';

type NoChildrenProps = {
  children?: never;
};

export const DemoApiSection: FC<NoChildrenProps> = () => {
  const {
    data: poems,
    isLoading,
    error,
  } = useQuery('posts', () => fetchPoemsWithKy(), {});

  const content = useMemo(() => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error {JSON.stringify(error)}</div>;
    }

    return (
      <Grid container spacing={1}>
        {poems?.map((poem) => {
          const image = `https://source.unsplash.com/random/640x480?${(
            poem.keywords ?? []
          )
            .map((keyword) => encodeURIComponent(keyword))
            .join(',')}`;

          return (
            <Grid item xs={12} md={6} lg={4} key={poem.id}>
              <Card>
                <CardHeader
                  title={poem.title}
                  subheader={`By ${poem.author}`}
                />
                <CardMedia component="img" src={image} alt={poem.title} />
                <CardContent>
                  <Typography variant="caption">{poem.content}</Typography>
                </CardContent>
                <CardActions>
                  {poem.keywords.map((keyword) => (
                    <Chip color="primary" key={keyword} label={`#${keyword}`} />
                  ))}
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  }, [isLoading, error, poems]);

  return (
    <section>
      <Container>
        <Typography variant="h3">Poetry on the wild.</Typography>
        <Typography variant="h4" color="primary">
          Client fetch with ky / react-query from nextjs api, db in supabase.io,
          connection with prisma. Ui with material ui
        </Typography>
        {content}
      </Container>
    </section>
  );
};
