import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const WebAppUiContext = createContext<{
  isWebAppDrawerPermanent: boolean;
  setWebAppDrawerOpen: Dispatch<SetStateAction<boolean>>;
  webAppDrawerOpen: boolean;
}>({
  isWebAppDrawerPermanent: false,
  setWebAppDrawerOpen: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  webAppDrawerOpen: false,
});
