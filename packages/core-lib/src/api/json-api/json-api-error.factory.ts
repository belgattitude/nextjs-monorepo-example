import { JsonApiError } from './json-api-response.types';
import { Exception } from '@tsed/exceptions';

export class JsonApiErrorFactory {
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
