import { GetPoems } from '@/backend/api/rest/poem-repository.ssr';

type Props = {
  img: GetPoems[0]['image'];
  title: GetPoems[0]['title'];
  author: GetPoems[0]['author'];
  content: GetPoems[0]['content'];
  keywords: GetPoems[0]['keywords'];
  defaultImg?: string;
  children?: never;
};

export const PoemCard: React.FC<Props> = (props) => {
  const { img, content, author, title, keywords, defaultImg } = props;
  const image = img ?? defaultImg;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="aspect-w-16 aspect-h-9 lg:aspect-none h-56">
        <img
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          src={image ?? ''}
          alt={title}
        />
      </div>
      <article className="prose px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-indigo-600">By {author}</p>
        <p className="text-gray-700 text-base line-clamp-4">{content}</p>
      </article>
      <div className="px-6 pt-4 pb-2">
        {keywords.map((keyword) => {
          return (
            <span
              key={keyword}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{keyword}
            </span>
          );
        })}
      </div>
    </div>
  );
};
