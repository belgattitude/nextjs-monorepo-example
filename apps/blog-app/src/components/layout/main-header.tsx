import { FC } from 'react';

type Props = {
  children?: never;
};

export const MainHeader: FC<Props> = () => {
  return (
    <header className="py-5 bg-purple-500 text-white text-center">
      NextJs monorepo example - the blog-app
    </header>
  );
};
