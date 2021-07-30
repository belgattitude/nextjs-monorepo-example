import { useQuery } from 'react-query';
import { fetchPoemsWithKy } from '../api/fetch-poems-ky.api';
import { PoemList } from '../components/poem-grid';

type NoChildrenProps = {
  children?: never;
};

const PoemGridWithReactQueryAndKy: React.FC<NoChildrenProps> = () => {
  const { data, isLoading, error } = useQuery(
    'posts',
    () => fetchPoemsWithKy(),
    {}
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error {JSON.stringify(error)}</div>;
  }
  return <>{data && <PoemList poems={data} />}</>;
};

export const DemoApiSection: React.FC<NoChildrenProps> = () => {
  return (
    <div>
      <div className="lg:container lg:mx-auto">
        <h1 className="font-bold text-4xl mb-2">Some poems</h1>
        <h2 className="font-bold text-xl mb-2 text-indigo-600">
          Regular client fetch with react-query and ky from nextjs api, db in
          supabase.io, connection with prisma. Ui with tailwind
        </h2>
        <PoemGridWithReactQueryAndKy />
      </div>
    </div>
  );
};
