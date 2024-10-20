import { useGraphQlJit } from '@envelop/graphql-jit';
import { useValidationCache } from '@envelop/validation-cache';
import { characterLimitPlugin } from '@escape.tech/graphql-armor-character-limit';
import { costLimitPlugin } from '@escape.tech/graphql-armor-cost-limit';
import { maxAliasesPlugin } from '@escape.tech/graphql-armor-max-aliases';
import { maxDepthPlugin } from '@escape.tech/graphql-armor-max-depth';
import { maxDirectivesPlugin } from '@escape.tech/graphql-armor-max-directives';
import { maxTokensPlugin } from '@escape.tech/graphql-armor-max-tokens';
import { createYoga, useExecutionCancellation } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';
import { graphqlSchema } from '@/server/graphql/graphqlSchema';

// Warning on vercel upload limit is 4Mb
// @link https://nextjs.org/docs/pages/building-your-application/routing/api-routes
// @link https://vercel.com/docs/concepts/functions/serverless-functions
export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
    sizeLimit: '4mb',
    responseLimit: '10mb',
  },
};

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema: graphqlSchema,
  graphqlEndpoint: '/api/graphql',
  graphiql: true,
  batching: {
    /** @link https://the-guild.dev/graphql/yoga-server/docs/features/request-batching */
    limit: 2,
  },
  // @link https://the-guild.dev/graphql/yoga-server/docs/features/cors
  cors: (request) => {
    const requestOrigin = request.headers.get('origin') ?? '*';
    return {
      origin: requestOrigin,
      credentials: true,
      allowedHeaders: ['X-Custom-Header'],
      methods: ['POST', 'GET'],
    };
  },
  // @link https://the-guild.dev/graphql/yoga-server/docs/features/parsing-and-validation-caching
  parserAndValidationCache: true,
  plugins: [
    useGraphQlJit(),
    useExecutionCancellation(),
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
        maxCost: 5000,
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
        n: 1000,
      }
    ),
    maxAliasesPlugin({
      // @link https://escape.tech/graphql-armor/docs/plugins/max-aliases
      n: 15,
      allowList: [],
    }),
  ],
});
