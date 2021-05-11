import { FC } from 'react';

type Props = {
  children?: never;
};

export const MainFooter: FC<Props> = () => {
  return (
    <footer className="py-5 bg-gray-700 text-center text-white">
      <a href={'https://github.com/belgattitude/nextjs-monorepo-example'}>
        Github
      </a>{' '}
      😎
    </footer>
  );
};
