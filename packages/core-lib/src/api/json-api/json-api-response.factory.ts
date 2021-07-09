import {
  JsonApiError,
  JsonApiErrorResponse,
  JsonApiSuccessResponse,
} from './json-api-response.types';
import { isPlainObject } from '../../utils/typeguards';

export class JsonApiResponseFactory {
  static fromError = (
    errors: string | JsonApiError | JsonApiError[],
    httpStatus?: number
  ): JsonApiErrorResponse => {
    let errs: JsonApiError[];
    if (typeof errors === 'string') {
      errs = [{ title: errors, ...(httpStatus ? { status: httpStatus } : {}) }];
    } else if (isPlainObject(errors)) {
      errs = [errors];
    } else {
      errs = errors;
    }
    return {
      success: false,
      errors: errs,
    };
  };
  static fromSuccess = <T>(
    data: T,
    metadata: JsonApiSuccessResponse<T>['meta'],
    autoParseJson = true
  ): JsonApiSuccessResponse<T> => {
    return {
      success: true,
      data: autoParseJson && typeof data === 'string' ? JSON.parse(data) : data,
      meta: metadata,
    };
  };
}
