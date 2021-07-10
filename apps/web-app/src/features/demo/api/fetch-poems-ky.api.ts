import ky from 'ky';
import {
  isJsonApiSuccessResponse,
  JsonApiResponse,
} from '@your-org/core-lib/api/json-api';
import { GetPoems } from '@/backend/api/rest/poem-repository.ssr';

export const fetchPoemsWithKy = async (): Promise<GetPoems> => {
  return ky
    .get('/api/rest/poem', {
      throwHttpErrors: true,
    })
    .json<JsonApiResponse<GetPoems>>()
    .then((resp) => {
      if (!isJsonApiSuccessResponse(resp)) {
        throw new Error(`Error fetching poems: ${resp.errors}`);
      }
      return resp.data;
    });
};
