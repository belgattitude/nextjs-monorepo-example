import { prismaClient } from '@/backend/config/container.config';
import { PrismaClient } from '@your-org/db-main-prisma';

export type GraphqlSdlContext = {
  prisma: PrismaClient;
};

export const graphqlSdlContext: GraphqlSdlContext = {
  prisma: prismaClient,
};
