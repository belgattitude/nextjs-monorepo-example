import type { FC } from 'react';

type Props = {
  children?: never;
};

export const MainHeader: FC<Props> = () => {
  return (
    <header className="py-5 text-center text-white bg-purple-500">
      NextJs monorepo example - the blog-app
    </header>
  );
};
