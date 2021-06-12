import { PrismaClient } from './generated';
import { Asserts } from '@your-org/core-lib';

declare let global: {
  __PRISMA_CLIENT__: PrismaClient | undefined;
};

class PrismaFactory {
  private static instance: PrismaClient | undefined;
  private constructor() {}
  private static createNewInstance(): PrismaClient {
    const url = process.env?.PRISMA_DATABASE_URL ?? null;
    Asserts.nonEmptyString(
      url,
      `Cannot create prisma client instance, missing env variable PRISMA_DATABASE_URL.`
    );
    return new PrismaClient({
      datasources: {
        db: {
          url: url,
        },
      },
    });
  }
  static getInstance() {
    if (process.env.NODE_ENV === 'production') {
      if (!PrismaFactory.instance) {
        PrismaFactory.instance = PrismaFactory.createNewInstance();
      }
      return PrismaFactory.instance;
    } else {
      // PrismaClient is attached to the `global` object in development to prevent
      // exhausting your database connection limit.
      //
      // Learn more:
      // https://pris.ly/d/help/next-js-best-practices
      if (!global.__PRISMA_CLIENT__) {
        global.__PRISMA_CLIENT__ = PrismaFactory.createNewInstance();
        console.log('Development: Created DB connection.');
      }
      return global.__PRISMA_CLIENT__;
    }
  }
}

export const prismaClient = PrismaFactory.getInstance();
