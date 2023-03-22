import { createHttpException, type HttpException } from '@httpx/exception';
import { useQuery } from '@tanstack/react-query';
import { HTTPError } from 'ky';
import type { FC } from 'react';
import { fetchPoemsWithKy } from '../../api/fetch-poems-ky.api';
import { PoemGrid } from '../../components/PoemGrid';

const PoemGridWithReactQueryAndKy: FC = () => {
  const { data, isLoading, error } = useQuery(
    ['posts'],
    async () => fetchPoemsWithKy(),
    {
      onError: (err): HttpException => {
        if (err instanceof HTTPError) {
          return createHttpException(err.response.status, {
            message: err.message,
          });
        }
        return createHttpException(500);
      },
    }
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    const { message, name } = error as HttpException;
    return (
      <div>
        Error {message} ({name})
      </div>
    );
  }
  return <>{data && <PoemGrid poems={data} />}</>;
};

export const PoetryBlock: FC = () => {
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
