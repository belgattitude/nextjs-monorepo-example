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

export const DemoApiBlock: React.FC<NoChildrenProps> = () => {
  return (
    <div>
      <div className="lg:container lg:mx-auto">
        <h1 className="mb-2 text-4xl font-bold">Poetry on the wild.</h1>
        <h2 className="mb-2 text-xl font-bold text-indigo-600">
          Client fetch with ky / react-query from nextjs api, db in supabase.io,
          connection with prisma. Ui with tailwind
        </h2>
        <PoemGridWithReactQueryAndKy />
      </div>
    </div>
  );
};
