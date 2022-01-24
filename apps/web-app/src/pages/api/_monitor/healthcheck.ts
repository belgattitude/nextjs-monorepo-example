import type { NextApiRequest, NextApiResponse } from 'next';

export default async function healthCheckRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(400).end();
    return;
  }

  res.setHeader('Content-Type', 'application/json');

  const payload = {
    success: true,
    timestamp: new Date().toISOString(),
  };

  res.status(200).send(JSON.stringify(payload, undefined, 2));
  res.end();
}
