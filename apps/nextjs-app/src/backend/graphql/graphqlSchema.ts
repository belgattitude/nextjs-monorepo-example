import SchemaBuilder from '@pothos/core';
import PluginErrors from '@pothos/plugin-errors';
import PluginPrisma from '@pothos/plugin-prisma';
import type { DbMainPrismaTypes } from '@your-org/db-main-prisma';
import { prismaDbMain } from '@/backend/config';

const builder = new SchemaBuilder<{
  // eslint-disable-next-line @typescript-eslint/naming-convention
  PrismaTypes: DbMainPrismaTypes;
}>({
  plugins: [PluginErrors, PluginPrisma],
  prisma: {
    client: prismaDbMain,
    // defaults to false, uses /// comments from prisma schema as descriptions
    // for object types, relations and exposed fields.
    // descriptions can be omitted by setting description to false
    exposeDescriptions: { models: true, fields: true },
    // use where clause from prismaRelatedConnection for totalCount (will true by default in next major version)
    filterConnectionTotalCount: true,
  },
  errorOptions: {
    defaultTypes: [],
  },
});

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      args: {
        name: t.arg.string(),
      },
      resolve: (parent, { name }) => `hello, ${name || 'World'}`,
    }),
    /*
    me: t.prismaField({
      type: 'User',
      args: {
        id: t.arg.int({ required: true }),
      },
      resolve: async (query, root, args) => {
        return await prismaDbMain.user.findUniqueOrThrow({
          ...query,
          where: {
            id: args.id,
          },
        });
      },
    }),
    */
  }),
});

export const graphqlSchema = builder.toSchema({});
