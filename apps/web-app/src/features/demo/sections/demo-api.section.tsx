import axios from 'axios';
import { useQuery } from 'react-query';
import {
  isJsonApiSuccessResponse,
  JsonApiResponse,
} from '@your-org/core-lib/api/json-api';
import ky from 'ky';
import { GetPosts } from '../../api/rest/post-repository.ssr';

type Props = {
  children?: never;
};

const fetchPostWithAxios = async (): Promise<GetPosts> => {
  return axios
    .get<JsonApiResponse<GetPosts>>('/api/rest/post', {
      responseType: 'json',
    })
    .then((resp) => {
      const data = resp.data;
      if (!isJsonApiSuccessResponse(data)) {
        throw new Error(`Error fetching posts: ${data.errors}`);
      }
      return data.data;
    });
};

const fetchPostWithKy = async (): Promise<GetPosts> => {
  return ky
    .get('/api/rest/post', {
      throwHttpErrors: true,
    })
    .json<JsonApiResponse<GetPosts>>()
    .then((resp) => {
      if (!isJsonApiSuccessResponse(resp)) {
        throw new Error(`Error fetching posts: ${resp.errors}`);
      }
      return resp.data;
    });
};

const ReactQueryApi: React.FC = () => {
  const { data, isLoading, error } = useQuery(
    'posts',
    () => fetchPostWithKy(),
    {}
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error {JSON.stringify(error)}</div>;
  }
  return (
    <div>
      {data &&
        data.map((post) => {
          return <img src={post.image ?? ''} alt={'forest'} />;
        })}
    </div>
  );
};

export const DemoApiSection: React.FC<Props> = () => {
  return (
    <div>
      <ReactQueryApi />
    </div>
  );
};
