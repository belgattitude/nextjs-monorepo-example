import type { CorsOptions } from 'cors';

export const corsAllowedOrigins = [
  // previews
  '.+\\-belgattitude.vercel.app',
  // for local development
  'localhost',
];

const regexpString = `^https?://(([^/])+\\.)?(${corsAllowedOrigins.join(
  '|'
)})(\\:\\d+)?$`;

export const corsWhilelistedOriginsRegexp = new RegExp(regexpString);

type CorsDefaultOptions = Pick<CorsOptions, 'maxAge'>;

export const corsDefaultOptions: CorsDefaultOptions = {
  maxAge: 3600,
};
