import type { FC, PropsWithChildren } from 'react';
import { MainLayout } from '@/layouts/main';

export const AdminLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <MainLayout>{children}</MainLayout>;
};
