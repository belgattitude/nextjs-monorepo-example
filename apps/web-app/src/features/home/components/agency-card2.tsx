import { Dialog } from '@mui/material';
import { LazyImage } from '@your-org/ui-lib/component/image/lazy-image';
import { LongtailSummary } from '@/features/home/api/fetch-longtail-summary';
import { GetAgenciesData } from '@/features/home/api/fetch.agencies';
import { GraphQlAgency } from '@/features/home/api/use-longtail-agencies';

type Props = {
  agency: GraphQlAgency;
  children?: never;
};

export const AgencyCard2: React.FC<Props> = (props) => {
  const { agency } = props;

  const keywords = [
    'mountain',
    ...agency.name
      .replace(/(,)/, '')
      .split(/(\ -)/)
      .filter((el) => el.length > 4)
      .map((el) => {
        return encodeURIComponent(el);
      }),
  ];

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="aspect-w-16 aspect-h-9 lg:aspect-none h-56">
        <LazyImage
          strategy={'browser'}
          imgLoading={'lazy'}
          imgProps={{
            className:
              'w-full h-full object-center object-cover lg:w-full lg:h-full',
            width: 200,
            src: `https://source.unsplash.com/random/300x300?${keywords.slice(
              0,
              2
            )}`,
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
          {agency.description}
        </p>
      </article>

      <div className="px-6 pt-4 pb-2">
        {agency.servicesByProviderId.edges.map((services) => {
          const { id, name, budget } = services.node;
          return (
            <span
              key={id}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{name}
            </span>
          );
        })}
      </div>
    </div>
  );
};
