import { getBuiltMesh } from '@your-org/api-gateway';
import { createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';

// Docs: https://vercel.com/docs/concepts/functions/serverless-functions
export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};

async function buildServer() {
  const mesh = await getBuiltMesh();
  return createYoga({
    plugins: mesh.plugins,
    // schema: mesh.schema,
    graphqlEndpoint: '/api/gateway/graphql',
    graphiql: {
      title: 'GraphQL ApiGateway',
    },
  });
}

const server$ = buildServer();

export default async function apiHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return (await server$).requestListener(req, res);
}
