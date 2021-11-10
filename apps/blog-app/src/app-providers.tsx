import type { FC } from 'react';

/**
 * Set your global app-providers (i.e: redux, react-query,...) here
 */
export const AppProviders: FC = (props) => {
  return <>{props.children}</>;
};
