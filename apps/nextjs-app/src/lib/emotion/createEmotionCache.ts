import createCache from '@emotion/cache';
import type { EmotionCache } from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

export const createEmotionCache = (): EmotionCache => {
  let insertionPoint;
  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }
  return createCache({ key: 'css', insertionPoint });
};
