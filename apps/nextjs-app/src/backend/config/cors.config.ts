import type { CorsOptions } from 'cors';

export const corsAllowedOrigins: string[] = [
  // previews
  '.+\\-belgattitude.vercel.app',
  // for local development
  'localhost',
];

export const getCorsWhitelistOriginRegexp = (allowedOrigins?: string[]) => {
  const origins =
    allowedOrigins !== undefined ? allowedOrigins : corsAllowedOrigins;
  return new RegExp(
    `^https?://(([^/])+\\.)?(${origins.join('|')})(\\:\\d+)?$`,
    'i'
  );
};

type CorsDefaultOptions = Pick<CorsOptions, 'maxAge'>;

export const corsDefaultOptions: CorsDefaultOptions = {
  maxAge: 3600,
};
