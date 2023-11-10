import { HttpMethodNotAllowed } from '@httpx/exception';
import { JsonApiResponseFactory, JsonApiErrorFactory } from '@httpx/json-api';
import type { NextApiRequest, NextApiResponse } from 'next';
import { PostRepositorySsr } from '@/server/api/rest/post-repository.ssr';
import { prismaClient } from '@/server/config/container.config';

export default async function handleListPosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const postRepo = new PostRepositorySsr(prismaClient);
    try {
      return res.json(
        JsonApiResponseFactory.fromSuccess(
          await postRepo.getPosts({
            limit: 100,
          })
        )
      );
    } catch (e) {
      const apiError = JsonApiErrorFactory.fromCatchVariable(e);
      return res
        .status(apiError.status ?? 500)
        .json(JsonApiResponseFactory.fromError(apiError));
    }
  } else {
    return res
      .status(HttpMethodNotAllowed.STATUS)
      .json(
        JsonApiResponseFactory.fromError(
          `The HTTP ${req.method} method is not supported at this route.`,
          HttpMethodNotAllowed.STATUS
        )
      );
  }
}
