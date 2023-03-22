import type { JsonApiResponse } from '@your-org/core-lib/api/json-api';
import { isJsonApiSuccessResponse } from '@your-org/core-lib/api/json-api';
import type { SearchPoems } from '@/backend/features/poem/SearchPoems';
import { kyJsonApi } from '@/config/ky';

export const fetchPoemsWithKy = async (): Promise<SearchPoems> => {
  return kyJsonApi
    .get('/api/rest/poem')
    .json<JsonApiResponse<SearchPoems>>()
    .then((resp) => {
      if (!isJsonApiSuccessResponse(resp)) {
        throw new Error(
          // @todo improve error reporting
          `Error fetching poems: ${JSON.stringify(resp?.errors ?? '')}`
        );
      }
      return resp.data;
    });
};
