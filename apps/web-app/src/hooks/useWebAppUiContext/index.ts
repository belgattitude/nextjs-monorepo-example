import { useContext } from 'react';
import { WebAppUiContext } from './context';

export default function useWebAppUiContext() {
  return useContext(WebAppUiContext);
}
