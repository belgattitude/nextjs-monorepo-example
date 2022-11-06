import { getPrismaClientDbMain } from './prisma/db-main-prisma.config';
export const prismaDbMain = getPrismaClientDbMain();
export {
  corsAllowedOrigins,
  corsWhilelistedOriginsRegexp,
  corsDefaultOptions,
} from './cors.config';
