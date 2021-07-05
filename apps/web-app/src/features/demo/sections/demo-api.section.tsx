import axios from 'axios';
import { useQuery } from 'react-query';

type Props = {
  children?: never;
};

const fetchPost = async (): Promise<any> => {
  return axios.get('/api/rest/post/1');
};

const ReactQueryApi: React.FC = () => {
  const { data, isLoading, error } = useQuery('post-1', () => fetchPost(), {});
  return <div>{JSON.stringify(data)}</div>;
};

export const DemoApiSection: React.FC<Props> = () => {
  return (
    <div>
      <ReactQueryApi />
    </div>
  );
};
