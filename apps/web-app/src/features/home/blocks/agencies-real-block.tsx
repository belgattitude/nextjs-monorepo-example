import { LazyImage } from '@your-org/ui-lib/component/image/lazy-image';
import { gql } from 'graphql-request';
import { Fragment } from 'react';
import { useQuery } from 'react-query';
import {
  fetchAgenciesFromInternalApi,
  GetAgenciesData,
} from '@/features/home/api/fetch.agencies';
import { useLongtailAgencies } from '@/features/home/api/use-longtail-agencies';
import { AgencyCard } from '@/features/home/components/agency-card';

type Props = {
  children?: never;
};

export const AgenciesRealBlock: React.FC<Props> = () => {
  const { data, error, isLoading } = useLongtailAgencies();
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        {error && <div>Error</div>}
        {isLoading && <div>Loading</div>}
        {/*
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
        */}
      </div>
    </div>
  );
};
