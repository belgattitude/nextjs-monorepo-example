import {
  Alert,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mqs/ui-lib';
import type { FC } from 'react';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { usePageTranslation } from '@/features/home/hooks';
import { fetchPoemsWithKy } from '../api/fetch-poems-ky.api';

type NoChildrenProps = {
  children?: never;
};

export const DemoApiSection: FC<NoChildrenProps> = () => {
  const { t } = usePageTranslation();
  const {
    data: poems,
    isLoading,
    error,
  } = useQuery('posts', () => fetchPoemsWithKy(), {});

  const content = useMemo(() => {
    if (isLoading) {
      return <CircularProgress />;
    }

    if (error) {
      return (
        <Alert severity="error" variant="outlined">
          {JSON.stringify(error)}
        </Alert>
      );
    }

    return (
      <Grid container spacing={1}>
        {poems?.map(({ id, title, author, content, keywords }) => {
          const keywordURI = (keywords ?? [])
            .map((keyword) => encodeURIComponent(keyword))
            .join(',');
          const image = `https://source.unsplash.com/random/640x480?${keywordURI}`;

          return (
            <Grid item xs={12} md={6} lg={4} key={id}>
              <Card>
                <CardHeader title={title} subheader={`By ${author}`} />
                <CardMedia component="img" src={image} alt={title} />
                <CardContent>
                  <Typography variant="caption">{content}</Typography>
                </CardContent>
                <CardActions>
                  {keywords.map((keyword) => (
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
        <Typography variant="h3">{t('demo:DemoApiSection.title')}</Typography>
        <Typography variant="h4" color="primary">
          {t('demo:DemoApiSection.subtitle')}
        </Typography>
        {content}
      </Container>
    </section>
  );
};
