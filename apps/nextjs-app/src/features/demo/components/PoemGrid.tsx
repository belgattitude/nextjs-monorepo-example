import type { FC } from 'react';
import type { SearchPoems } from '@/server/features/poem/SearchPoems';
import { PoemCard } from './PoemCard';

export const PoemGrid: FC<{ poems: SearchPoems }> = (props) => {
  const { poems } = props;
  return (
    <div className="flex flex-wrap">
      {poems.map((poem) => {
        const unsplashImg = `https://source.unsplash.com/random/640x480?${(
          poem.keywords ?? []
        )
          .map((keyword) => encodeURIComponent(keyword))
          .join(',')}`;

        return (
          <div
            key={`${poem.id}`}
            className="m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
          >
            <PoemCard
              title={poem.title}
              content={poem.content}
              author={poem.author}
              keywords={poem.keywords}
              img={unsplashImg}
            />
          </div>
        );
      })}
    </div>
  );
};
