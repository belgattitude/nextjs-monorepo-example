import { useQuery } from 'react-query';
import { fetchPostsWithKy } from '../api/fetch-posts-ky.api';
import { GetPosts } from '../../api/rest/post-repository.ssr';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

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

const Blog: React.FC<{ post: GetPosts[number]; children?: never }> = (
  props
) => {
  const { post } = props;
  return (
    <BlogCtn>
      <img src={post.image ?? ''} alt={'cool'} />
      <div>
        <h3>{post.title}</h3>
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

const BlogList: React.FC<{ posts: GetPosts; children?: never }> = (props) => {
  const { posts } = props;
  return (
    <BlogListCtn>
      {posts.map((post) => (
        <Blog key={post.id} post={post} />
      ))}
    </BlogListCtn>
  );
};

const ReactQueryApi: React.FC = () => {
  const { data, isLoading, error } = useQuery(
    'posts',
    () => fetchPostsWithKy(),
    {}
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error {JSON.stringify(error)}</div>;
  }
  return <div>{data && <BlogList posts={data} />}</div>;
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
