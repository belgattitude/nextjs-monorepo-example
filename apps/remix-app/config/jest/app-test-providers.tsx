import type { FC, ReactNode } from 'react';

export const AppTestProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};
