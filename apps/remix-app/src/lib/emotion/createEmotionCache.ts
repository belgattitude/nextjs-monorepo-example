import createCache, { type EmotionCache } from '@emotion/cache';

export const createEmotionCache = (): EmotionCache => {
  return createCache({ key: 'css' });
};
