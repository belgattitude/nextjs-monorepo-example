export type Post = {
  slug: string;
  title: string;
};

const posts: Post[] = [
  { slug: 'post1', title: 'The first blog post' },
  { slug: 'post2', title: 'The second blog post' },
];

export const getPosts = (): Post[] => posts;
