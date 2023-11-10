import {
  isJsonApiSuccessResponse,
  type JsonApiResponse,
} from '@httpx/json-api';
import { apiFetcher } from '@/config/api-fetcher.config';
import type { SearchPoems } from '@/server/features/poem/SearchPoems';

export const fetchPoems = async (): Promise<SearchPoems> => {
  return apiFetcher<JsonApiResponse<SearchPoems>>('/api/rest/poem').then(
    (resp) => {
      if (!isJsonApiSuccessResponse(resp)) {
        throw new Error(
          // @todo improve error reporting
          `Error fetching poems: ${JSON.stringify(resp?.errors ?? '')}`
        );
      }
      return resp.data;
    }
  );
};
