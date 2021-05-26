import type { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from '@/backend/config/container.config';
import { BadRequest, InternalServerError, NotFound } from '@tsed/exceptions';
import { Asserts } from '@your-org/core-lib';
import { StringConvert } from '@your-org/core-lib/utils/string-convert';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const postId = StringConvert.toSafeInteger(id);
  Asserts.safeInteger(postId, () => new BadRequest('Wrong param id'));

  if (req.method === 'GET') {
    return res.json(await getPostSsr(postId));
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

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
