import {
  Alert,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Grid,
  Skeleton,
  Typography,
} from '@mqs/ui-lib';
import type { FC } from 'react';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { fetchPoemsWithKy } from '@/features/Demo/api/fetch-poems-ky.api';

type NoChildrenProps = {
  children?: never;
};

export const DemoApiSection: FC<NoChildrenProps> = () => {
  const { data, error } = useQuery('posts', () => fetchPoemsWithKy(), {});

  const content = useMemo(() => {
    if (error) {
      return (
        <Alert severity="error" variant="outlined">
          {JSON.stringify(error)}
        </Alert>
      );
    }

    const poems =
      data ||
      new Array(10).map(() => ({
        keywords: null,
        id: null,
        author: null,
        title: null,
        content: null,
      }));

    return (
      <Grid container spacing={1}>
        {poems?.map(({ keywords, id, author, title, content }, index) => {
          const keywordURI = (keywords ?? [])
            .map((keyword) => encodeURIComponent(keyword))
            .join(',');
          const image = `https://source.unsplash.com/random/640x480?${keywordURI}`;

          return (
            <Grid item xs={12} md={6} lg={4} key={id || index}>
              <Card>
                <CardHeader
                  title={title ?? <Skeleton />}
                  subheader={author ? `By ${author}` : <Skeleton />}
                />
                {keywords ? (
                  <CardMedia component="img" src={image} alt={title} />
                ) : (
                  <Skeleton height="300px" width="100%" />
                )}
                <CardContent>
                  <Typography variant="caption">
                    {content ?? (
                      <>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                      </>
                    )}
                  </Typography>
                </CardContent>
                <CardActions>
                  {keywords?.map((keyword) => (
                    <Chip color="primary" key={keyword} label={`#${keyword}`} />
                  ))}
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  }, [error, data]);

  return <section>{content}</section>;
};
