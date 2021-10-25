import { InternalServerError } from '@tsed/exceptions';
import type { UnPromisify } from '@your-org/core-lib';
import type { PrismaClientDbMain } from '@your-org/db-main-prisma';

export type GetPoems = UnPromisify<
  ReturnType<typeof PoemRepositorySsr['prototype']['getPoems']>
>;

export class PoemRepositorySsr {
  constructor(private prisma: PrismaClientDbMain) {}

  /**
   * @throws Error
   */
  getPoems = async (options?: { limit?: number; offset?: number }) => {
    const { limit, offset } = options ?? {};
    try {
      return await this.prisma.poem.findMany({
        skip: offset,
        take: limit,
        orderBy: { author: 'desc' },
      });
    } catch (e) {
      throw new InternalServerError(`Poems can't be retrieved`, e);
    }
  };
}
