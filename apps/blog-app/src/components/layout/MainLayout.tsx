import type { FC } from 'react';
import { MainFooter } from '@/components/layout/MainFooter';
import { MainHeader } from '@/components/layout/MainHeader';

export const MainLayout: FC = (props) => {
  const { children } = props;

  return (
    <div className="flex flex-col h-screen">
      <MainHeader />
      <main className="overflow-y-auto flex-1 p-5">{children}</main>
      <MainFooter />
    </div>
  );
};
