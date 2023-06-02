import { CacheProvider } from '@emotion/react';
import { RemixBrowser } from '@remix-run/react';
import type { ReactNode } from 'react';
import { useState, startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { createEmotionCache, EmotionStyleClientContext } from '@/lib/emotion';

/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/docs/en/main/file-conventions/entry.client
 */

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

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <ClientCacheProvider>
        <RemixBrowser />
      </ClientCacheProvider>
    </StrictMode>
  );
});
