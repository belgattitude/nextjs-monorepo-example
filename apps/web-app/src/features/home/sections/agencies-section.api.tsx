import axios from 'axios';
import { JsonApiResponse } from '../../../core/json-api/json-api';

export type GetExampleData = {
  count: number | null;
  agencies: Array<{
    slug: string;
    name: string;
    plan: string;
    verified: boolean;
    size: number;
    min_budget: number;
    reviews_count: number;
    reviews_rating: number;
    location_name: string;
    location_prefix: string;
    country_name: string;
    country_prefix: string;
    works_count: number;
    logo: {
      url: string;
      type: {
        provider: 'youtube' | 'vimeo' | 's3' | null;
        mediaType: 'video' | 'image' | null;
        key?: string | null;
      };
      key?: string | null;
      position?: number | null;
    };
  }>;
};

export const getExampleData = async (): Promise<GetExampleData> => {
  const url = '/api/rest/example';
  const data = await axios
    .get<JsonApiResponse<GetExampleData>>(url)
    .then((res) => res.data);
  if (data.success) {
    return data.data;
  }
  throw new Error('Cant load data');
};

export const getExampleDataFromSource = async (): Promise<
  JsonApiResponse<GetExampleData>
> => {
  const url =
    'https://public-app-git-feature-longtail-1-sortlist.vercel.app/api/query/longtail/agencies?locale=en&locationSlug=brussels-brussels-be&_limit=300';
  return axios
    .get<JsonApiResponse<GetExampleData>>(url)
    .then((res) => res.data);
};
