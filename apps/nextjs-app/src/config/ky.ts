import { createHttpException } from '@httpx/exception';
import {
  isJsonApiErrorResponse,
  type JsonApiResponse,
} from '@your-org/core-lib/api/json-api';
import type { NormalizedOptions, HTTPError } from 'ky';
import { KyFactory } from '@/lib/factory/ky.factory';

export const ky = new KyFactory({
  onAuthFailure: (
    _request: Request,
    _options: NormalizedOptions,
    _response: Response
  ) => {
    console.log('do whatever');
  },
}).create({
  timeout: 10000,
  retry: {
    limit: 1,
    statusCodes: [408, 413, 429, 500, 502, 503, 504],
    afterStatusCodes: [413, 429, 503],
    methods: ['get', 'put', 'head', 'delete', 'options', 'trace'],
  },
});

const tryDecodeJson = async (
  error: HTTPError
): Promise<{ name: string; message: string; status: number } | null> => {
  let errPayload: JsonApiResponse<unknown> | null = null;
  const { response } = error;
  try {
    errPayload = JSON.parse(await response.text());
  } catch (e) {
    return null;
  }
  if (!isJsonApiErrorResponse(errPayload)) {
    return null;
  }
  const { title = error.message, status = response.status } =
    errPayload.errors?.[0] ?? {};
  const name = createHttpException(status).name;
  return {
    message: title,
    name,
    status,
  };
};

export const kyJsonApi = ky.extend({
  hooks: {
    beforeError: [
      async (error) => {
        const jsonApiErrorDetail = await tryDecodeJson(error);
        if (jsonApiErrorDetail) {
          (error.message = jsonApiErrorDetail.message),
            (error.name = jsonApiErrorDetail.name);
        }
        return error;
      },
    ],
  },
});
