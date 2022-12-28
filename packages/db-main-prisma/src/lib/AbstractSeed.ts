import type { PrismaClient } from '@prisma/client';

export abstract class AbstractSeed {
  constructor(public prisma: PrismaClient) {}

  abstract execute(): Promise<void>;

  protected log = (operation: 'UPSERT' | 'CREATE' | 'UPDATE', msg: string) => {
    console.log(`${operation}: ${msg}`);
  };
}
