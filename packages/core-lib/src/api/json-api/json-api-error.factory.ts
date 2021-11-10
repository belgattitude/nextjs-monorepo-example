import type { Exception } from '@tsed/exceptions';
import type { JsonApiError } from './json-api-response.types';

export class JsonApiErrorFactory {
  static fromCatchVariable = (
    error: unknown,
    defaultHttpStatus = 500
  ): JsonApiError => {
    const e =
      typeof error === 'string' || error instanceof Error
        ? error
        : `Unknown error (type of catched variable: ${typeof error}`;
    return JsonApiErrorFactory.fromTsedException(e, defaultHttpStatus);
  };

  static fromTsedException = (
    exception: Exception | Error | string,
    /** fallback http status if it can't be inferred from exception */
    defaultHttpStatus = 500
  ): JsonApiError => {
    let title: string, status: number;
    if (typeof exception === 'string') {
      title = exception;
      status = defaultHttpStatus;
    } else {
      title = exception.message;
      status = 'status' in exception ? exception.status : defaultHttpStatus;
    }
    return {
      title,
      status,
    };
  };
}
