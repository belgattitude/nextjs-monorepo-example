import { Fragment } from 'react';
import { useQuery } from 'react-query';
import { GetExampleData, getExampleData } from './agencies-section.api';
import { LazyImage } from '@your-org/ui-lib/component/image/lazy-image';
import { isBrowser } from '@your-org/ui-lib/utils/is-browser';

type Props = {
  children?: never;
};

const supportsBrowserLoading = () => {
  return isBrowser() && 'loading' in document.createElement('img');
};

const Card: React.FC<{ agency: GetExampleData['agencies'][0] }> = (props) => {
  const { agency } = props;
  const logoUrl = `https://sortlist.gumlet.io/sortlist-core-api/${agency.logo.key}?w=200&format=auto`;

  return (
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          {/*
          <LazyLoad
            height={200}
            once={true}
            offset={100}
            scroll={true}
            resize={true}
            overflow={false}>
            <img
              alt={agency.name}
              src={logoUrl}
              width={200}
              className="h-64 ml-auto mr-auto"
            />
          </LazyLoad>
          */}

          {/*
          <picture className="h-64 ml-auto mr-auto">
            <source
              media="(min-width: 800px)"
              srcSet={`https://sortlist.gumlet.io/sortlist-core-api/${agency.logo.key}?w=300&format=auto, https://sortlist.gumlet.io/sortlist-core-api/${agency.logo.key}?w=600&format=auto 2x`}
            />
            <source
              media="(min-width: 450px)"
              srcSet={`https://sortlist.gumlet.io/sortlist-core-api/${agency.logo.key}?w=150&format=auto, https://sortlist.gumlet.io/sortlist-core-api/${agency.logo.key}?w=300&format=auto 2x`}
            />
            <img
              src="head-fb.jpg"
              srcSet="head-fb-2x.jpg 2x"
              alt="a head carved out of wood"
            />
          </picture>
          */}
          {/* let's try this */}
          <LazyImage
            strategy={supportsBrowserLoading() ? 'browser' : 'react-lazyload'}
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

export const AgenciesSection: React.FC<Props> = () => {
  const { error, isLoading, data } = useQuery(`example-data`, () =>
    getExampleData()
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
                  <Card agency={agency} />
                </Fragment>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
