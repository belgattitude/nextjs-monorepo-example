import type { FC } from 'react';

type Props = {
  children?: never;
};

export const MainFooter: FC<Props> = () => {
  return (
    <footer className="py-5 text-center text-white bg-gray-700">
      <a href={'https://github.com/belgattitude/nextjs-monorepo-example'}>
        Github
      </a>{' '}
      😎
    </footer>
  );
};
