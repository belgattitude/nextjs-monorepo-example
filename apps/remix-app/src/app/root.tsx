import type { LinksFunction } from '@remix-run/node';

import stylesheet from '../styles/tailwind.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];
