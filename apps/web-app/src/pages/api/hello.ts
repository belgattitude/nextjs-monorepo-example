import { sayHello } from '@mqs/core-lib';
import { withSentry } from '@sentry/nextjs';
import type { NextApiRequest, NextApiResponse } from 'next';

export default withSentry(async function handleApiHelloRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.send(sayHello('world loaded from /api/hello'));
});
