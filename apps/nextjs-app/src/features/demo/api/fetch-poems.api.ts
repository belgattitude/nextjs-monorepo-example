import {
  isJsonApiSuccessResponse,
  type JsonApiResponse,
} from '@httpx/json-api';
import type { SearchPoems } from '@/backend/features/poem/SearchPoems';
import { apiFetcher } from '@/config/api-fetcher.config';

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
