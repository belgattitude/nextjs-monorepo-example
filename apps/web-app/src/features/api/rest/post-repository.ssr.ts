import { prismaClient, PrismaClient } from '@your-org/db-main-prisma';
import { InternalServerError } from '@tsed/exceptions';
import { UnPromisify } from '@your-org/core-lib';

export type GetPosts = UnPromisify<
  ReturnType<typeof PostRepositorySsr['prototype']['getPosts']>
>;

export class PostRepositorySsr {
  constructor(private prisma: PrismaClient) {}

  /**
   * @throws Error
   */
  getPosts = async (options?: { limit?: number; offset?: number }) => {
    const { limit = undefined, offset = undefined } = options ?? {};
    try {
      return await prismaClient.post.findMany({
        skip: offset,
        take: limit,
        where: {
          publishedAt: {
            not: null,
          },
        },
        include: {
          author: {
            select: {
              firstName: true,
              lastName: true,
              nickname: true,
            },
          },
        },
        orderBy: { publishedAt: 'desc' },
      });
    } catch (e) {
      throw new InternalServerError(`Posts can't be retrieved`, e);
    }
  };
}
