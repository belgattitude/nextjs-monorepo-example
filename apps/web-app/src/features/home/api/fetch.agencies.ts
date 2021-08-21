import ky from 'ky';
import {
  isJsonApiSuccessResponse,
  JsonApiResponse,
  JsonApiSuccessResponse,
} from '@your-org/core-lib/api/json-api';

export type GetAgenciesData = {
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

export const fetchAgencies = async (): Promise<
  JsonApiSuccessResponse<GetAgenciesData>
> => {
  const url =
    'https://public-app-git-feature-longtail-1-sortlist.vercel.app/api/query/longtail/agencies?locale=en&locationSlug=brussels-brussels-be&_limit=300';
  return ky
    .get(url, {
      throwHttpErrors: true,
    })
    .json<JsonApiResponse<GetAgenciesData>>()
    .then((resp) => {
      if (!isJsonApiSuccessResponse(resp)) {
        throw new Error(
          `Error fetching agencies: ${JSON.stringify(resp.errors)}`
        );
      }
      return resp;
    });
};
