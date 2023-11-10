import { HttpMethodNotAllowed } from '@httpx/exception';
import { JsonApiResponseFactory, JsonApiErrorFactory } from '@httpx/json-api';
import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'superjson';
import { prismaClient } from '@/server/config/container.config';
import { SearchPoemsQuery } from '@/server/features/poem/SearchPoems';

const searchPoem = new SearchPoemsQuery(prismaClient);

export default async function handleListPoems(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { json: serializableData, meta } = serialize(
        await searchPoem.execute({
          limit: 100,
        })
      );
      return res.json(
        JsonApiResponseFactory.fromSuccess(serializableData, {
          serializer: 'superjson',
          superjsonMeta: meta ?? {},
        })
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
