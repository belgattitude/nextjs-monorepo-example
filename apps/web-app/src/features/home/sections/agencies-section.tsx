import { useQuery } from 'react-query';
import { getExampleData } from './agencies-section.api';

type Props = {
  children?: never;
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
        {data &&
          data.agencies.map((agency) => {
            return (
              <div key={agency.slug}>
                <img alt={agency.name} src={agency.logo.url} width={200} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
