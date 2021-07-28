import { GraphqlSdlContext } from './graphql-sdl-context';
import { makeExecutableSchema, gql } from 'apollo-server-micro';
import { PoemRepositorySsr } from '@/backend/api/rest/poem-repository.ssr';

const typeDefs = gql`
  type Poem {
    id: Int!
    title: String
  }
  type Query {
    allPoems: [Poem!]!
  }
`;

const resolvers = {
  Query: {
    allPoems: (
      _parent: unknown,
      _args: {
        limit?: number;
        offset?: number;
      },
      context: GraphqlSdlContext
    ) => {
      const poemRepo = new PoemRepositorySsr(context.prisma);
      console.log('poemRepo', context);
      //return [{ id: 10, title: 'cool' }];
      return poemRepo.getPoems({
        limit: _args.limit,
        offset: _args.offset,
      });
    },
  },
};

export const graphqlSdlSchema = makeExecutableSchema({
  resolvers,
  typeDefs,
});
