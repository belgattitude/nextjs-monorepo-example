import { createServer } from '@graphql-yoga/node';
import { graphqlSchema } from '@/backend/graphql/graphqlSchema';

const server = createServer({
  schema: graphqlSchema,
  endpoint: '/api/graphql',
  graphiql: true,
});

export default server;
