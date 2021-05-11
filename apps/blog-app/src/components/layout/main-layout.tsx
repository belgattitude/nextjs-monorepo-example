import { FC } from 'react';
import { MainHeader } from '@/components/layout/main-header';
import { MainFooter } from '@/components/layout/main-footer';

export const MainLayout: FC = (props) => {
  const { children } = props;

  return (
    <div className="flex flex-col h-screen">
      <MainHeader />
      <main className="flex-1 overflow-y-auto p-5">{children}</main>
      <MainFooter />
    </div>
  );
};
