import { useQuery } from 'react-query';
import { fetchAgenciesFromInternalApi } from '@/features/home/api/fetch.agencies';
import { AgencyCard } from '@/features/home/components/agency-card';

type Props = {
  children?: never;
};

export const AgenciesBlock: React.FC<Props> = () => {
  const { error, isLoading, data } = useQuery(`example-data`, () =>
    fetchAgenciesFromInternalApi().then((resp) => resp.data)
  );
  return (
    <div className="bg-gray-50">
      <div className="flex flex-wrap">
        {error && <div>Error</div>}
        {isLoading && <div>Loading</div>}
        {data && (
          <>
            {data.agencies.map((agency) => {
              return (
                <div
                  key={`${agency.slug}`}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 m-2">
                  <AgencyCard agency={agency} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};
