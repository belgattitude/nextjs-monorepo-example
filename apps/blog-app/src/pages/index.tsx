import { sayHello } from '@your-org/core-lib';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { MainLayout } from '@/components/layout/main-layout';
import type { Post } from '../data/blog';
import { getPosts } from '../data/blog';

type Props = {
  posts: Post[];
};

export default function Blog({ posts }: Props) {
  return (
    <>
      <NextSeo
        title="[blog-app] nextjs-monorepo example"
        description="See https://github.com/belgattitude/nextjs-monorepo-example"
      />
      <MainLayout>
        <h3>I'm the SSG blog-app</h3>
        <ul>
          <li>{`Foo says: ${sayHello('World')} from @your-org/core-lib`}</li>
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
          src={'/shared-assets/images/nextjs-logo.png'}
          alt={'logo'}
          width={400}
          height={240}
        />
      </MainLayout>
    </>
  );
}

export async function getStaticProps(): Promise<{ props: Props }> {
  return {
    props: {
      posts: getPosts(),
    },
  };
}
