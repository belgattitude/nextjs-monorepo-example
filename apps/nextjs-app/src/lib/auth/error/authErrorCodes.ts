export const authErrorCodes = {
  AUTHENTICATION_FAILED: 'AUTHENTICATION_FAILED',
} as const;

export type AuthErrorCodes =
  (typeof authErrorCodes)[keyof typeof authErrorCodes];
