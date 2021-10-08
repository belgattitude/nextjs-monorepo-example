import { Fragment } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useLongtailAgencies } from '@/features/home/api/use-longtail-agencies';
import { AgencyCard } from '@/features/home/components/agency-card';
import { AgencyCard2 } from '@/features/home/components/agency-card2';

type Props = {
  children?: never;
};

export const AgenciesRealBlock: React.FC<Props> = () => {
  const { data, error, isLoading } = useLongtailAgencies();
  console.log('data', data);
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        {error && <div>Error</div>}
        {isLoading && <div>Loading</div>}

        {data && (
          <div className="w-full container ml-auto mr-auto flex flex-wrap items-start">
            {data.map((agency) => {
              return (
                <Fragment key={agency?.slug}>
                  <AgencyCard2 agency={agency} />
                </Fragment>
              );
            })}
          </div>
        )}
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </div>
  );
};
