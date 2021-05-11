import { sayHello } from '@optional-package-scope/foo';
import { getPosts, Post } from '../data/blog';
import { MainLayout } from '@/components/layout/main-layout';
import Image from 'next/image';

type Props = {
  posts: Post[];
};

export default function Blog({ posts }: Props) {
  return (
    <MainLayout>
      <h3>I'm the SSG blog-app</h3>
      <ul>
        <li>{`Foo says: ${sayHello(
          'World'
        )} from @optional-package-scope/foo`}</li>
      </ul>
      <h3>Here's the blog posts</h3>
      <ul>
        {posts.map(({ title, slug }) => (
          <article key={slug} className="prose lg:prose-xl">
            <p>{title}</p>
          </article>
        ))}
      </ul>
      <Image
        src={'/images/nextjs-logo.png'}
        alt={'logo'}
        width={400}
        height={240}
      />
    </MainLayout>
  );
}

export async function getStaticProps(): Promise<{ props: Props }> {
  return {
    props: {
      posts: getPosts(),
    },
  };
}
