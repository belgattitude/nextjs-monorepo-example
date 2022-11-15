import { createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';
import { graphqlSchema } from '@/backend/graphql/graphqlSchema';

// Docs: https://vercel.com/docs/concepts/functions/serverless-functions
export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema: graphqlSchema,
  graphqlEndpoint: '/api/graphql',
  graphiql: true,
});
