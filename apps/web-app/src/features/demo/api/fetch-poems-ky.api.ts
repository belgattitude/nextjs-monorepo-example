import type { JsonApiResponse } from '@your-org/core-lib/api/json-api';
import { isJsonApiSuccessResponse } from '@your-org/core-lib/api/json-api';
import type { GetPoems } from '@/backend/api/rest/poem-repository.ssr';
import { ky } from '@/config/ky';

export const fetchPoemsWithKy = async (): Promise<GetPoems> => {
  return ky
    .get('/api/rest/poem')
    .json<JsonApiResponse<GetPoems>>()
    .then((resp) => {
      if (!isJsonApiSuccessResponse(resp)) {
        throw new Error(`Error fetching poems: ${resp.errors}`);
      }
      return resp.data;
    });
};
