import type { FC } from 'react';
import type { SearchPoems } from '@/backend/features/poem/SearchPoems';

type Poem = SearchPoems[0];

type Props = {
  img: Poem['image'];
  title: Poem['title'];
  author: Poem['author'];
  content: Poem['content'];
  keywords: Poem['keywords'];
  defaultImg?: string;
  children?: never;
};

export const PoemCard: FC<Props> = (props) => {
  const { img, content, author, title, keywords, defaultImg } = props;
  const image = img ?? defaultImg;
  return (
    <div className="overflow-hidden max-w-sm rounded shadow-lg">
      <div className="h-56 aspect-w-16 aspect-h-9 lg:aspect-none">
        <img
          className="object-cover object-center w-full h-full lg:w-full lg:h-full"
          src={image ?? ''}
          alt={title}
        />
      </div>
      <article className="py-4 px-6 prose">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-indigo-600">By {author}</p>
        <p className="text-base text-gray-700 line-clamp-4">{content}</p>
      </article>
      <div className="px-6 pt-4 pb-2">
        {keywords.map((keyword) => {
          return (
            <span
              key={keyword}
              className="inline-block py-1 px-3 mr-2 mb-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
            >
              #{keyword}
            </span>
          );
        })}
      </div>
    </div>
  );
};
