import { prismaClient } from '@/backend/config/container.config';
import { PrismaClientDbMain } from '@your-org/db-main-prisma';

export type GraphqlSdlContext = {
  prisma: PrismaClientDbMain;
};

export const graphqlSdlContext: GraphqlSdlContext = {
  prisma: prismaClient,
};
