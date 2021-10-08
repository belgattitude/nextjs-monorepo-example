import { LazyImage } from '@your-org/ui-lib/component/image/lazy-image';
import { Fragment } from 'react';
import { useQuery } from 'react-query';
import {
  fetchAgenciesFromInternalApi,
  GetAgenciesData,
} from '@/features/home/api/fetch.agencies';
import { AgencyCard } from '@/features/home/components/agency-card';

type Props = {
  children?: never;
};

const Card: React.FC<{ agency: GetAgenciesData['agencies'][0] }> = (props) => {
  const { agency } = props;

  return (
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          <LazyImage
            strategy={'browser'}
            imgLoading={'lazy'}
            imgProps={{
              className: 'h-64 ml-auto mr-auto object-contain p-15 sm:p-5',
              srcSet: `https://sortlist.gumlet.io/sortlist-core-api/${agency.logo.key}?w=150&format=auto 480w,
                     https://sortlist.gumlet.io/sortlist-core-api/${agency.logo.key}?w=200&format=auto 800w`,
              sizes: '(max-width: 600px) 480px, 800px',
              width: 200,
              src: `https://sortlist.gumlet.io/sortlist-core-api/${agency.logo.key}?w=200&format=auto`,
              alt: agency.name,
            }}
          />
        </figure>
        <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
          <div>
            <h5 className="text-white text-2xl font-bold leading-none">
              {agency.name}
            </h5>
            <span className="text-xs text-gray-400 leading-none">
              {agency.slug}
            </span>
          </div>
          <div className="flex items-center">
            <div className="text-lg text-white font-light">$1099,00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AgenciesBlock: React.FC<Props> = () => {
  const { error, isLoading, data } = useQuery(`example-data`, () =>
    fetchAgenciesFromInternalApi().then((resp) => resp.data)
  );
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        {error && <div>Error</div>}
        {isLoading && <div>Loading</div>}
        {data && (
          <div className="w-full container ml-auto mr-auto flex flex-wrap items-start">
            {data.agencies.map((agency) => {
              return (
                <Fragment key={agency.slug}>
                  <AgencyCard agency={agency} />
                </Fragment>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
