import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Typography,
} from '@mqs/ui-lib';
import type { FC } from 'react';
import type { GetPoems } from '@/backend/api/rest/poem-repository.ssr';

type Props = {
  poem: GetPoems[0];
  defaultImg?: string;
  children?: never;
};

export const PoemCard: FC<Props> = (props) => {
  const {
    poem: { image: img, content, author, title, keywords },
    defaultImg,
  } = props;
  const image = img ?? defaultImg;
  return (
    <Card>
      <CardHeader title={title} subheader={`By ${author}`} />
      <CardMedia component="img" src={image ?? ''} alt={title} />
      <CardContent>
        <Typography variant="caption">{content}</Typography>
      </CardContent>
      <CardActions>
        {keywords.map((keyword) => (
          <Chip color="primary" key={keyword} label={`#${keyword}`} />
        ))}
      </CardActions>
    </Card>
  );
};
