import { HttpException, HttpNotFound } from '@httpx/exception';
import { zodReq } from '@nextvalid/zod-request';
import { JsonApiResponseFactory } from '@your-org/core-lib/api/json-api';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { PostRepositorySsr } from '@/backend/api/rest/post-repository.ssr';
import { prismaClient } from '@/backend/config/container.config';

const schema = zodReq({
  method: 'GET',
  query: {
    id: z.preprocess((input) => {
      const processed = z
        .string()
        .regex(/^\d+$/)
        .transform(Number)
        .safeParse(input);
      return processed.success ? processed.data : input;
    }, z.number().min(0)),
  },
});

export default async function handleGetPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = schema.parse(req).query;
    const postRepo = new PostRepositorySsr(prismaClient);
    const post = await postRepo.getPost(id);
    if (!post) {
      throw new HttpNotFound(`Post ${id} not found`);
    }
    return res.json(JsonApiResponseFactory.fromSuccess(post));
  } catch (e) {
    const { statusCode, message } =
      e instanceof HttpException
        ? e
        : { statusCode: 500, message: 'Unknown error' };
    return res
      .status(statusCode)
      .json(JsonApiResponseFactory.fromError(message, statusCode));
  }
}
