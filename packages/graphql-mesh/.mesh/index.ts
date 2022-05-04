// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: bigint;
};

export type Query = {
  /** Returns a a list of breeds */
  getBreeds?: Maybe<Array<Maybe<Breed_model>>>;
  /** Returns a random fact */
  getRandomFact?: Maybe<CatFact_model>;
  /** Returns a a list of facts */
  getFacts?: Maybe<Array<Maybe<CatFact_model>>>;
};


export type QuerygetBreedsArgs = {
  input?: InputMaybe<getBreeds_request_Input>;
};


export type QuerygetRandomFactArgs = {
  input?: InputMaybe<getRandomFact_request_Input>;
};


export type QuerygetFactsArgs = {
  input?: InputMaybe<getFacts_request_Input>;
};

/** Breed */
export type Breed_model = {
  /** Breed */
  breed?: Maybe<Scalars['String']>;
  /** Country */
  country?: Maybe<Scalars['String']>;
  /** Origin */
  origin?: Maybe<Scalars['String']>;
  /** Coat */
  coat?: Maybe<Scalars['String']>;
  /** Pattern */
  pattern?: Maybe<Scalars['String']>;
};

export type getBreeds_request_Input = {
  /** limit the amount of results returned */
  limit?: InputMaybe<Scalars['BigInt']>;
};

/** CatFact */
export type CatFact_model = {
  /** Fact */
  fact?: Maybe<Scalars['String']>;
  /** Length */
  length?: Maybe<Scalars['Int']>;
};

export type getRandomFact_request_Input = {
  /** maximum length of returned fact */
  max_length?: InputMaybe<Scalars['BigInt']>;
};

export type getFacts_request_Input = {
  /** maximum length of returned fact */
  max_length?: InputMaybe<Scalars['BigInt']>;
  /** limit the amount of results returned */
  limit?: InputMaybe<Scalars['BigInt']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Breed_model: ResolverTypeWrapper<Breed_model>;
  String: ResolverTypeWrapper<Scalars['String']>;
  getBreeds_request_Input: getBreeds_request_Input;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  CatFact_model: ResolverTypeWrapper<CatFact_model>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  getRandomFact_request_Input: getRandomFact_request_Input;
  getFacts_request_Input: getFacts_request_Input;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Breed_model: Breed_model;
  String: Scalars['String'];
  getBreeds_request_Input: getBreeds_request_Input;
  BigInt: Scalars['BigInt'];
  CatFact_model: CatFact_model;
  Int: Scalars['Int'];
  getRandomFact_request_Input: getRandomFact_request_Input;
  getFacts_request_Input: getFacts_request_Input;
  Boolean: Scalars['Boolean'];
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getBreeds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Breed_model']>>>, ParentType, ContextType, Partial<QuerygetBreedsArgs>>;
  getRandomFact?: Resolver<Maybe<ResolversTypes['CatFact_model']>, ParentType, ContextType, Partial<QuerygetRandomFactArgs>>;
  getFacts?: Resolver<Maybe<Array<Maybe<ResolversTypes['CatFact_model']>>>, ParentType, ContextType, Partial<QuerygetFactsArgs>>;
}>;

export type Breed_modelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Breed_model'] = ResolversParentTypes['Breed_model']> = ResolversObject<{
  breed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  origin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type CatFact_modelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CatFact_model'] = ResolversParentTypes['CatFact_model']> = ResolversObject<{
  fact?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Breed_model?: Breed_modelResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  CatFact_model?: CatFact_modelResolvers<ContextType>;
}>;


import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace CatFactsTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: bigint;
};

export type Query = {
  /** Returns a a list of breeds */
  getBreeds?: Maybe<Array<Maybe<Breed_model>>>;
  /** Returns a random fact */
  getRandomFact?: Maybe<CatFact_model>;
  /** Returns a a list of facts */
  getFacts?: Maybe<Array<Maybe<CatFact_model>>>;
};


export type QuerygetBreedsArgs = {
  input?: InputMaybe<getBreeds_request_Input>;
};


export type QuerygetRandomFactArgs = {
  input?: InputMaybe<getRandomFact_request_Input>;
};


export type QuerygetFactsArgs = {
  input?: InputMaybe<getFacts_request_Input>;
};

/** Breed */
export type Breed_model = {
  /** Breed */
  breed?: Maybe<Scalars['String']>;
  /** Country */
  country?: Maybe<Scalars['String']>;
  /** Origin */
  origin?: Maybe<Scalars['String']>;
  /** Coat */
  coat?: Maybe<Scalars['String']>;
  /** Pattern */
  pattern?: Maybe<Scalars['String']>;
};

export type getBreeds_request_Input = {
  /** limit the amount of results returned */
  limit?: InputMaybe<Scalars['BigInt']>;
};

/** CatFact */
export type CatFact_model = {
  /** Fact */
  fact?: Maybe<Scalars['String']>;
  /** Length */
  length?: Maybe<Scalars['Int']>;
};

export type getRandomFact_request_Input = {
  /** maximum length of returned fact */
  max_length?: InputMaybe<Scalars['BigInt']>;
};

export type getFacts_request_Input = {
  /** maximum length of returned fact */
  max_length?: InputMaybe<Scalars['BigInt']>;
  /** limit the amount of results returned */
  limit?: InputMaybe<Scalars['BigInt']>;
};

    }
    export type QueryCatFactsSdk = {
  /** Returns a a list of breeds **/
  getBreeds: InContextSdkMethod<CatFactsTypes.Query['getBreeds'], CatFactsTypes.QuerygetBreedsArgs, MeshContext>,
  /** Returns a random fact **/
  getRandomFact: InContextSdkMethod<CatFactsTypes.Query['getRandomFact'], CatFactsTypes.QuerygetRandomFactArgs, MeshContext>,
  /** Returns a a list of facts **/
  getFacts: InContextSdkMethod<CatFactsTypes.Query['getFacts'], CatFactsTypes.QuerygetFactsArgs, MeshContext>
};

export type MutationCatFactsSdk = {

};

export type SubscriptionCatFactsSdk = {

};

export type CatFactsContext = {
      ["CatFacts"]: { Query: QueryCatFactsSdk, Mutation: MutationCatFactsSdk, Subscription: SubscriptionCatFactsSdk },
    };

export type MeshContext = CatFactsContext & BaseMeshContext;


import { getMesh, ExecuteMeshFn, SubscribeMeshFn } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { fileURLToPath } from '@graphql-mesh/utils';
import * as ExternalModule_0 from '@graphql-mesh/cache-localforage';
import * as ExternalModule_1 from '@graphql-mesh/new-openapi';
import * as ExternalModule_2 from '@graphql-mesh/merger-bare';
import * as ExternalModule_3 from './sources/CatFacts/jsonSchemaBundle';

const importedModules: Record<string, any> = {
  // @ts-ignore
  ["@graphql-mesh/cache-localforage"]: ExternalModule_0,
  // @ts-ignore
  ["@graphql-mesh/new-openapi"]: ExternalModule_1,
  // @ts-ignore
  ["@graphql-mesh/merger-bare"]: ExternalModule_2,
  // @ts-ignore
  [".mesh/sources/CatFacts/jsonSchemaBundle"]: ExternalModule_3
};

const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  if (!(relativeModuleId in importedModules)) {
    return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
  return Promise.resolve(importedModules[relativeModuleId]);
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: 'ts',
}), {
  readonly: true,
  validate: false
});

import { GetMeshOptions } from '@graphql-mesh/runtime';
import { YamlConfig } from '@graphql-mesh/types';
import { parse } from 'graphql';
import { PubSub } from '@graphql-mesh/utils';
import MeshCache from '@graphql-mesh/cache-localforage';
import { DefaultLogger } from '@graphql-mesh/utils';
import NewOpenapiHandler from '@graphql-mesh/new-openapi'
import BareMerger from '@graphql-mesh/merger-bare';
import { resolveAdditionalResolvers } from '@graphql-mesh/utils';
import { parseWithCache } from '@graphql-mesh/utils';
export const rawConfig: YamlConfig.Config = {"sources":[{"name":"CatFacts","handler":{"newOpenapi":{"baseUrl":"https://catfact.ninja","oasFilePath":"https://catfact.ninja/docs/api-docs.json"}}}]} as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const cache = new (MeshCache as any)({
      ...(rawConfig.cache || {}),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
    } as any)
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger('🕸️  Mesh');
const sources = [];
const transforms = [];
const catFactsTransforms = [];
const additionalTypeDefs = [] as any[];
const catFactsHandler = new NewOpenapiHandler({
              name: rawConfig.sources[0].name,
              config: rawConfig.sources[0].handler["newOpenapi"],
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child(rawConfig.sources[0].name),
              logger: logger.child(rawConfig.sources[0].name),
              importFn
            });
sources.push({
          name: 'CatFacts',
          handler: catFactsHandler,
          transforms: catFactsTransforms
        })
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('BareMerger'),
        store: rootStore.child('bareMerger')
      })
const additionalResolversRawConfig = [];
const additionalResolvers = await resolveAdditionalResolvers(
      baseDir,
      additionalResolversRawConfig,
      importFn,
      pubsub
  )
const liveQueryInvalidations = rawConfig.liveQueryInvalidations;
const additionalEnvelopPlugins = [];
const documents = documentsInSDL.map((documentSdl: string, i: number) => ({
              rawSDL: documentSdl,
              document: parseWithCache(documentSdl),
              location: `document_${i}.graphql`,
            }))

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    liveQueryInvalidations,
    additionalEnvelopPlugins,
    documents,
  };
}

export const documentsInSDL = /*#__PURE__*/ [];

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltMesh(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));

export function getMeshSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltMesh().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}

export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;