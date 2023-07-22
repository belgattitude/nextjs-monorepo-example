import { HttpUnauthorized } from '@httpx/exception';
import { authErrorCodes } from './authErrorCodes';

export const createHttpUnauthorized = (
  message?: string,
  errorCause?: Error
): HttpUnauthorized => {
  return new HttpUnauthorized({
    message,
    code: authErrorCodes.AUTHENTICATION_FAILED,
    cause: errorCause,
  });
};
