import type { LinksFunction } from '@remix-run/node';

import stylesheet from '../styles/tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];
