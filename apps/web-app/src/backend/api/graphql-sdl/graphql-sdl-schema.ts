import { gql } from 'apollo-server-micro';
import { PoemRepositorySsr } from '@/backend/api/rest/poem-repository.ssr';
import type { GraphqlSdlContext } from './graphql-sdl-context';

const typeDefs = gql`
  type Poem {
    id: Int!
    title: String
    content: String
    author: String
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
      return poemRepo.getPoems({
        limit: _args.limit,
        offset: _args.offset,
      });
    },
  },
};

export const graphqlSdlSchema = {
  resolvers,
  typeDefs,
};
