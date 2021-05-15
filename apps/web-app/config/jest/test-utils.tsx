/**
 * Automatically add app-providers
 * @see https://testing-library.com/docs/react-testing-library/setup#configuring-jest-with-test-utils
 */
import React from 'react';
import { render } from '@testing-library/react';
import { AppProviders } from '../../src/app-providers';

const AllTheProviders: React.FC = ({ children }) => {
  return <AppProviders>{children}</AppProviders>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
