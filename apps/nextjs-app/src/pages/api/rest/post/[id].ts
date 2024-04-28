import { assertHttpMethod } from '@httpx/assert';
import { HttpBadRequest, HttpException } from '@httpx/exception';
import { JsonApiResponseFactory } from '@httpx/json-api';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { PostRepositorySsr } from '@/server/api/rest/post-repository.ssr';
import { prismaClient } from '@/server/config/container.config';

const schema = z.object({
  id: z.preprocess((input) => {
    const processed = z
      .string()
      .regex(/^\d+$/)
      .transform(Number)
      .safeParse(input);
    return processed.success ? processed.data : input;
  }, z.number().min(0)),
});

export default async function handleGetPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    assertHttpMethod('GET', req.method, () => {
      return new HttpBadRequest();
    });
    const { id } = schema.parse(req);
    const postRepo = new PostRepositorySsr(prismaClient);
    const post = await postRepo.getPost(id);
    res.json(JsonApiResponseFactory.fromSuccess(post));
  } catch (e) {
    const { statusCode, message } =
      e instanceof HttpException
        ? e
        : { statusCode: 500, message: 'Unknown error' };
    res
      .status(statusCode)
      .json(JsonApiResponseFactory.fromError(message, statusCode));
  }
}
