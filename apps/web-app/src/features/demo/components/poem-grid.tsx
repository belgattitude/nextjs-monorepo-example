import { ArrayUtils } from '@mqs/core-lib';
import { Grid } from '@mqs/ui-lib';
import type { FC } from 'react';
import type { GetPoems } from '@/backend/api/rest/poem-repository.ssr';
import { PoemCard } from './poem-card';

const waterImages = new Array(25).fill('').map((img, idx) => {
  const index = String(idx + 1).padStart(2, '0');
  return `/shared-assets/images/water/water-${index}.jpg`;
});

export const PoemList: FC<{ poems: GetPoems; children?: never }> = (props) => {
  const { poems } = props;
  let images = waterImages;
  return (
    <Grid container spacing={1}>
      {poems.map((poem) => {
        const randomImg = ArrayUtils.getRandom(images);
        const defaultImg = `/_next/image?url=${encodeURIComponent(
          randomImg
        )}&w=640&q=85`;
        images =
          images.length < 1
            ? waterImages
            : ArrayUtils.removeItem(images, randomImg);

        const unsplashImg = `https://source.unsplash.com/random/640x480?${(
          poem.keywords ?? []
        )
          .map((keyword) => encodeURIComponent(keyword))
          .join(',')}`;

        return (
          <Grid item xs={12} md={6} lg={4} key={`${poem.id}`}>
            <PoemCard
              poem={{
                ...poem,
                image: unsplashImg,
              }}
              defaultImg={defaultImg}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
