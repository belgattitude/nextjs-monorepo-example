import { MapCacheAdapter } from '@soluble/cache-interop';
import {
  getIoRedisOptionsFromDsn,
  IoRedisCacheAdapter,
} from '@soluble/cache-ioredis';
import { validatedServerEnv } from '@/config/validated-server-env.mjs';

const appCacheDsn = validatedServerEnv.APP_CACHE_DSN ?? null;

export const appCache = !appCacheDsn
  ? new MapCacheAdapter()
  : new IoRedisCacheAdapter({
      connection: getIoRedisOptionsFromDsn(appCacheDsn, {
        connectTimeout: 3_000,
        maxRetriesPerRequest: 2,
      }),
    });
