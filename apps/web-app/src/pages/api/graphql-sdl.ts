import { ApolloServer } from 'apollo-server-micro';
import { graphqlSdlSchema } from '@/backend/api/graphql-sdl/graphql-sdl-schema';
import { graphqlSdlContext } from '@/backend/api/graphql-sdl/graphql-sdl-context';

const apolloServer = new ApolloServer({
  schema: graphqlSdlSchema,
  context: graphqlSdlContext,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql-sdl' });
