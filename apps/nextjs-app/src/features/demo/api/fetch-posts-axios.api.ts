import type { JsonApiResponse } from '@your-org/core-lib/api/json-api';
import { isJsonApiSuccessResponse } from '@your-org/core-lib/api/json-api';
import axios from 'axios';
import type { GetPosts } from '@/backend/api/rest/post-repository.ssr';

export const fetchPostsWithAxios = async (): Promise<GetPosts> => {
  return axios
    .get<JsonApiResponse<GetPosts>>('/api/rest/post', {
      responseType: 'json',
    })
    .then((resp) => {
      const payload = resp.data;
      if (!isJsonApiSuccessResponse(payload)) {
        throw new Error(
          `Error fetching posts: ${JSON.stringify(payload.errors)}`
        );
      }
      return payload.data;
    });
};
