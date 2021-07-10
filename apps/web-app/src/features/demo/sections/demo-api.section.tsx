import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { fetchPoemsWithKy } from '../api/fetch-poems-ky.api';
import { GetPoems } from '@/backend/api/rest/poem-repository.ssr';

type Props = {
  children?: never;
};

const BlogCtn = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: center;
  padding: 0.5rem;
  text-align: center;
  font-size: 1.2rem;
  background-color: #333333;
  color: #d9d9d9;
  img {
    width: 100%;
    transition: transform 0.5s ease-in-out;
    &:hover {
      transform: scale(1.07);
    }
  }
  div {
    position: absolute;
    max-width: 400px;
    margin: 0;
    padding: 0.5rem;
    word-break: break-word;
    font-size: 1.25rem;
    background-color: rgba(0, 0, 0, 0.3);
    color: #f2f2f2;

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
      color: #e6e6e6;
      transition: all ease 0.5s;
    }
  }
`;

const Poem: React.FC<{ poem: GetPoems[number]; children?: never }> = (
  props
) => {
  const { poem } = props;
  const img =
    poem.image ??
    `https://source.unsplash.com/random/800x600?${(poem.keywords ?? [])
      .map((keyword) => encodeURI(keyword))
      .join(',')}`;
  return (
    <BlogCtn>
      <img src={img} alt={'cool'} />
      <div>
        <h3>{poem.title}</h3>
      </div>
    </BlogCtn>
  );
};

const BlogListCtn = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1.5rem;
  justify-items: center;
  padding: 0;
`;

const PoemList: React.FC<{ poems: GetPoems; children?: never }> = (props) => {
  const { poems } = props;
  return (
    <BlogListCtn>
      {poems.map((poem) => (
        <Poem key={poem.id} poem={poem} />
      ))}
    </BlogListCtn>
  );
};

const ReactQueryApi: React.FC = () => {
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
  return <div>{data && <PoemList poems={data} />}</div>;
};

export const DemoApiSection: React.FC<Props> = () => {
  return (
    <div
      css={css`
        width: 100px;
      `}>
      <ReactQueryApi />
    </div>
  );
};
