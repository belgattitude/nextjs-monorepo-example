import createCache from '@emotion/cache';
import type { EmotionCache } from '@emotion/utils';

export const createEmotionCache = (): EmotionCache => {
  return createCache({ key: 'css' });
};
