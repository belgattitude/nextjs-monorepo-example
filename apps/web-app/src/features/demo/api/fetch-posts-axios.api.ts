import { GetPosts } from '../../api/rest/post-repository.ssr';
import axios from 'axios';
import {
  isJsonApiSuccessResponse,
  JsonApiResponse,
} from '@your-org/core-lib/api/json-api';

export const fetchPostsWithAxios = async (): Promise<GetPosts> => {
  return axios
    .get<JsonApiResponse<GetPosts>>('/api/rest/post', {
      responseType: 'json',
    })
    .then((resp) => {
      const data = resp.data;
      if (!isJsonApiSuccessResponse(data)) {
        throw new Error(`Error fetching posts: ${data.errors}`);
      }
      return data.data;
    });
};
