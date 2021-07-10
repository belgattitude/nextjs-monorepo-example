import type { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from '@/backend/config/container.config';
import { InternalServerError, MethodNotAllowed } from '@tsed/exceptions';
import { JsonApiResponseFactory } from '@your-org/core-lib/api/json-api';
import { JsonApiErrorFactory } from '@your-org/core-lib/api/json-api/json-api-error.factory';

export default async function handleListPosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      return res.json(await getPostsSsr());
    } catch (e) {
      const apiError = JsonApiErrorFactory.fromTsedException(e);
      return res
        .status(apiError.status ?? 500)
        .json(JsonApiResponseFactory.fromError(apiError));
    }
  } else {
    return res
      .status(MethodNotAllowed.STATUS)
      .json(
        JsonApiResponseFactory.fromError(
          `The HTTP ${req.method} method is not supported at this route.`,
          MethodNotAllowed.STATUS
        )
      );
  }
}

/**
 * @throws Exception
 */
const getPostsSsr = async () => {
  try {
    const posts = await prismaClient.post.findMany({
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
    return posts;
  } catch (e) {
    throw new InternalServerError(`Posts can't be retrieved`, e);
  }
};
