import { MapCacheAdapter } from '@soluble/cache-interop';
import {
  getIoRedisOptionsFromDsn,
  IoRedisCacheAdapter,
} from '@soluble/cache-ioredis';

const appCacheDsn = process.env.APP_CACHE_DSN ?? null;

export const appCache = appCacheDsn
  ? new IoRedisCacheAdapter({
      connection: getIoRedisOptionsFromDsn(appCacheDsn, {
        connectTimeout: 3000,
        maxRetriesPerRequest: 2,
      }),
    })
  : new MapCacheAdapter();
