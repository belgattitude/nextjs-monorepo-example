import { useGraphQlJit } from '@envelop/graphql-jit';
import { useValidationCache } from '@envelop/validation-cache';
import { characterLimitPlugin } from '@escape.tech/graphql-armor-character-limit';
import { costLimitPlugin } from '@escape.tech/graphql-armor-cost-limit';
import { maxAliasesPlugin } from '@escape.tech/graphql-armor-max-aliases';
import { maxDepthPlugin } from '@escape.tech/graphql-armor-max-depth';
import { maxDirectivesPlugin } from '@escape.tech/graphql-armor-max-directives';
import { maxTokensPlugin } from '@escape.tech/graphql-armor-max-tokens';
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
  plugins: [
    useGraphQlJit(),
    useValidationCache(),
    characterLimitPlugin(
      // // @link https://escape.tech/graphql-armor/docs/plugins/character-limit
      {
        maxLength: 15_000,
      }
    ),
    costLimitPlugin(
      // @link https://escape.tech/graphql-armor/docs/plugins/cost-limit
      {
        maxCost: 5_000,
        objectCost: 2,
        scalarCost: 1,
        depthCostFactor: 1.5,
        ignoreIntrospection: true,
      }
    ),
    maxDepthPlugin({
      // @link https://escape.tech/graphql-armor/docs/plugins/max-depth
      n: 6,
    }),
    maxDirectivesPlugin(
      // @link https://escape.tech/graphql-armor/docs/plugins/max-directives
      {
        n: 50,
      }
    ),
    maxTokensPlugin(
      // @link https://escape.tech/graphql-armor/docs/plugins/max-tokens
      {
        n: 1_000,
      }
    ),
    maxAliasesPlugin({
      // @link https://escape.tech/graphql-armor/docs/plugins/max-aliases
      n: 15,
    }),
  ],
});
