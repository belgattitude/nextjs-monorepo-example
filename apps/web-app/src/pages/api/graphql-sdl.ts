import { ApolloServer } from 'apollo-server-micro';
import { graphqlSdlSchema } from '@/backend/api/graphql-sdl/graphql-sdl-schema';
import { graphqlSdlContext } from '@/backend/api/graphql-sdl/graphql-sdl-context';
import { NextApiRequest, NextApiResponse } from 'next';

const apolloServer = new ApolloServer({
  typeDefs: graphqlSdlSchema.typeDefs,
  resolvers: graphqlSdlSchema.resolvers,
  context: graphqlSdlContext,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = apolloServer.start();

export default async function graphQLHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Vary'
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql-sdl',
  })(req, res);
}
