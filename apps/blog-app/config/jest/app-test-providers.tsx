import React from 'react';
import { AppProviders } from '../../src/app-providers';

export const AppTestProviders: React.FC = ({ children }) => {
  return <AppProviders>{children}</AppProviders>;
};
