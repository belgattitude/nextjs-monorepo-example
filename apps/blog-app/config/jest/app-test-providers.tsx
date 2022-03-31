import type { FC } from 'react';
import { AppProviders } from '../../src/app-providers';

export const AppTestProviders: FC = ({ children }) => {
  return <AppProviders>{children}</AppProviders>;
};
