import { getPrismaClientDbMain } from './prisma/db-main-prisma.config';
export const prismaDbMain = getPrismaClientDbMain();
export {
  corsAllowedOrigins,
  getCorsWhitelistOriginRegexp,
  corsDefaultOptions,
} from './cors.config';
