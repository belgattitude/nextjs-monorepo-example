import type { FC, ReactNode } from 'react';
import { AdminSidebar } from '@/layouts/admin/AdminSidebar';

export const AdminLayout: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;
  return (
    <div className="flex h-screen flex-col">
      <AdminSidebar />
      <main>{children}</main>
    </div>
  );
};
