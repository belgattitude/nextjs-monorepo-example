import { BadRequest, MethodNotAllowed } from '@tsed/exceptions';
import { Asserts } from '@your-org/core-lib';
import { JsonApiResponseFactory } from '@your-org/core-lib/api/json-api';
import { JsonApiErrorFactory } from '@your-org/core-lib/api/json-api/json-api-error.factory';
import { StringConvert } from '@your-org/core-lib/utils/string-convert';
import type { NextApiRequest, NextApiResponse } from 'next';
import { PostRepositorySsr } from '@/backend/api/rest/post-repository.ssr';
import { prismaClient } from '@/backend/config/container.config';

export default async function handleGetPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const postId = StringConvert.toSafeInteger(id);
    const postRepo = new PostRepositorySsr(prismaClient);

    try {
      Asserts.safeInteger(postId, () => new BadRequest('Wrong param id'));

      return res.json(
        JsonApiResponseFactory.fromSuccess(await postRepo.getPost(postId))
      );
    } catch (e) {
      const apiError = JsonApiErrorFactory.fromCatchVariable(e);
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
