import { LazyImage } from '@your-org/ui-lib/component/image/lazy-image';
import { GetAgenciesData } from '@/features/home/api/fetch.agencies';

type Props = {
  agency: GetAgenciesData['agencies'][0];
  children?: never;
};

export const AgencyCard: React.FC<Props> = (props) => {
  const { agency } = props;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="aspect-w-16 aspect-h-9 lg:aspect-none h-56">
        <LazyImage
          strategy={'browser'}
          imgLoading={'lazy'}
          imgProps={{
            className:
              'w-full h-full object-center object-cover lg:w-full lg:h-full',
            srcSet: `https://sortlist.gumlet.io/sortlist-core-api/${agency.logo.key}?w=150&format=auto 480w,
                     https://sortlist.gumlet.io/sortlist-core-api/${agency.logo.key}?w=200&format=auto 800w`,
            sizes: '(max-width: 600px) 480px, 800px',
            width: 200,
            src: `https://sortlist.gumlet.io/sortlist-core-api/${agency.logo.key}?w=200&format=auto`,
            alt: agency.name,
          }}
        />
        {/*
        <img
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          src={image ?? ''}
          alt={title}
        />
        */}
      </div>
      <article className="prose px-6 py-4">
        <div className="font-bold text-xl mb-2">{agency.name}</div>
        <p className="text-gray-700 text-base line-clamp-4">
          {agency.location_name}
        </p>
      </article>
      {/*
      <div className="px-6 pt-4 pb-2">
        {agency..map((keyword) => {
          return (
            <span
              key={keyword}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{keyword}
            </span>
          );
        })}
      </div>
      */}
    </div>
  );
};
