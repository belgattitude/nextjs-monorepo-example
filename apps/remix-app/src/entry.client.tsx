import { CacheProvider } from '@emotion/react';
import { RemixBrowser } from '@remix-run/react';
import { useState, type ReactNode } from 'react';
// eslint-disable-next-line react/no-deprecated
import { hydrate } from 'react-dom';
import { createEmotionCache, EmotionStyleClientContext } from '@/lib/emotion';

interface ClientCacheProviderProps {
  children: ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache());

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <EmotionStyleClientContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </EmotionStyleClientContext.Provider>
  );
}

hydrate(
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
  document
);
