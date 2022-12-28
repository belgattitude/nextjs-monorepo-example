import { HttpInternalServerError } from '@httpx/exception';
import type { PrismaClientDbMain } from '@your-org/db-main-prisma';
import type { UnPromisify } from '@your-org/ts-utils';
import type { SearchPoemsParams } from './SearchPoems.types';

type SearchPoems = UnPromisify<ReturnType<SearchPoemsQuery['searchPoems']>>;

export class SearchPoemsQuery {
  constructor(private readonly prisma: PrismaClientDbMain) {}

  execute = async (params: SearchPoemsParams) => {
    return this.mapToResult(await this.searchPoems(params));
  };

  private mapToResult = (rows: SearchPoems) => {
    // https://www.prisma.io/docs/support/help-articles/working-with-many-to-many-relations#explicit-relations
    return rows.map((poem) => {
      const { createdAt, updatedAt, keywords, ...rest } = poem;
      return {
        ...rest,
        keywords: keywords.map((keyword) => keyword.keyword.name),
      };
    });
  };

  /**
   * @todo for many-to-many better to use raw query for
   * significantly better performance (n+1...)
   */
  private searchPoems = async (params: SearchPoemsParams) => {
    const { limit, offset } = params ?? {};
    try {
      return await this.prisma.poem.findMany({
        skip: offset,
        take: limit,
        include: {
          keywords: {
            include: {
              keyword: true,
            },
          },
        },
        orderBy: { author: 'desc' },
      });
    } catch (e) {
      throw new HttpInternalServerError({
        message: `Poems can't be retrieved`,
        cause: e instanceof Error ? e : undefined,
      });
    }
  };
}
