import type { NextApiRequest, NextApiResponse } from 'next';
import { getExampleDataFromSource } from '../../../features/home/sections/agencies-section.api';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const data = await getExampleDataFromSource();
    res.setHeader('Cache-Control', 'public,max-age=3600,s-maxage=3600');
    return res.json(data);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
