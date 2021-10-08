import {
  JsonApiResponseFactory,
  JsonApiSuccessResponse,
} from '@your-org/core-lib/api/json-api';

export type LongtailSummary = {
  city: string;
};

type Params = {
  locationSlug?: string;
};

export const fetchLongtailSummary = (
  params: Params
): JsonApiSuccessResponse<LongtailSummary> => {
  const { locationSlug } = params;

  // Let's pretend hey

  return JsonApiResponseFactory.fromSuccess({
    city: 'Brussels',
  });
};
