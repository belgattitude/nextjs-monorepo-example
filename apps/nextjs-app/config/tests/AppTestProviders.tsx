import type { FC, ReactNode } from 'react';
import { AppProviders } from '../../src/app-providers';
import { I18nextTestStubProvider } from './I18nextTestStubProvider';

export const AppTestProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AppProviders>
      <I18nextTestStubProvider>{children}</I18nextTestStubProvider>
    </AppProviders>
  );
};
