import { GetPosts } from '../../api/rest/post-repository.ssr';
import ky from 'ky';
import {
  isJsonApiSuccessResponse,
  JsonApiResponse,
} from '@your-org/core-lib/api/json-api';

export const fetchPostsWithKy = async (): Promise<GetPosts> => {
  return ky
    .get('/api/rest/post', {
      throwHttpErrors: true,
    })
    .json<JsonApiResponse<GetPosts>>()
    .then((resp) => {
      if (!isJsonApiSuccessResponse(resp)) {
        throw new Error(`Error fetching posts: ${resp.errors}`);
      }
      return resp.data;
    });
};
