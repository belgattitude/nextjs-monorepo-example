import { MainFooter } from '@/components/layout/main-footer';

export const MainLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col h-screen">
      <main>{children}</main>
      <MainFooter />
    </div>
  );
};
