import { CacheProvider } from '@emotion/react';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { hydrate } from 'react-dom';
import { RemixBrowser } from 'remix';
import { createEmotionCache } from '@/core/emotion/create-emotion-cache';
import { EmotionStyleClientContext } from '@/core/emotion/emotion-style-client.context';

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
