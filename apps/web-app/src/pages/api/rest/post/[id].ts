import type { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from '@/backend/config/container.config';
import {
  BadRequest,
  InternalServerError,
  MethodNotAllowed,
  NotFound,
} from '@tsed/exceptions';
import { Asserts } from '@your-org/core-lib';
import { StringConvert } from '@your-org/core-lib/utils/string-convert';
import { JsonApiResponseFactory } from '@your-org/core-lib/api/json-api';
import { JsonApiErrorFactory } from '@your-org/core-lib/api/json-api/json-api-error.factory';

export default async function handleGetPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;
      const postId = StringConvert.toSafeInteger(id);

      Asserts.safeInteger(postId, () => new BadRequest('Wrong param id'));

      return res.json(await getPostSsr(postId));
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
const getPostSsr = async (postId: number) => {
  try {
    const post = await prismaClient.post.findUnique({
      where: { id: postId },
      include: { author: true },
    });
    Asserts.isPresent(
      post,
      () => new NotFound(`Post ${postId} can't be found`)
    );
    return post;
  } catch (e) {
    throw new InternalServerError(`Post ${postId} can't be retrieved`, e);
  }
};
