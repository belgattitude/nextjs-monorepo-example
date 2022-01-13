
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Poem
 * 
 */
export type Poem = {
  id: number
  slug: string
  title: string
  content: string
  keywords: string[]
  author: string
  link: string | null
  image: string | null
}

/**
 * Model Post
 * 
 */
export type Post = {
  id: number
  title: string
  content: string | null
  link: string | null
  image: string | null
  authorId: number | null
  publishedAt: Date | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model User
 * 
 */
export type User = {
  id: number
  firstName: string | null
  lastName: string | null
  nickname: string
  email: string
  emailVerified: Date | null
  image: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model AuthAccount
 * 
 */
export type AuthAccount = {
  id: number
  compoundId: string
  userId: number
  providerType: string
  providerId: string
  providerAccountId: string
  refreshToken: string | null
  accessToken: string | null
  accessTokenExpires: Date | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model AuthSession
 * 
 */
export type AuthSession = {
  id: number
  userId: number
  expires: Date
  sessionToken: string
  accessToken: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model AuthVerificationRequest
 * 
 */
export type AuthVerificationRequest = {
  id: number
  identifier: string
  token: string
  expires: Date
  createdAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Poems
 * const poems = await prisma.poem.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Poems
   * const poems = await prisma.poem.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.poem`: Exposes CRUD operations for the **Poem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Poems
    * const poems = await prisma.poem.findMany()
    * ```
    */
  get poem(): Prisma.PoemDelegate<GlobalReject>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.authAccount`: Exposes CRUD operations for the **AuthAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthAccounts
    * const authAccounts = await prisma.authAccount.findMany()
    * ```
    */
  get authAccount(): Prisma.AuthAccountDelegate<GlobalReject>;

  /**
   * `prisma.authSession`: Exposes CRUD operations for the **AuthSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthSessions
    * const authSessions = await prisma.authSession.findMany()
    * ```
    */
  get authSession(): Prisma.AuthSessionDelegate<GlobalReject>;

  /**
   * `prisma.authVerificationRequest`: Exposes CRUD operations for the **AuthVerificationRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthVerificationRequests
    * const authVerificationRequests = await prisma.authVerificationRequest.findMany()
    * ```
    */
  get authVerificationRequest(): Prisma.AuthVerificationRequestDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.8.0
   * Query Engine version: 34df67547cf5598f5a6cd3eb45f14ee70c3fb86f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Poem: 'Poem',
    Post: 'Post',
    User: 'User',
    AuthAccount: 'AuthAccount',
    AuthSession: 'AuthSession',
    AuthVerificationRequest: 'AuthVerificationRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    posts: number
  }

  export type UserCountOutputTypeSelect = {
    posts?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserCountOutputType ?UserCountOutputType [P]
  : 
     never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Poem
   */


  export type AggregatePoem = {
    _count: PoemCountAggregateOutputType | null
    _avg: PoemAvgAggregateOutputType | null
    _sum: PoemSumAggregateOutputType | null
    _min: PoemMinAggregateOutputType | null
    _max: PoemMaxAggregateOutputType | null
  }

  export type PoemAvgAggregateOutputType = {
    id: number | null
  }

  export type PoemSumAggregateOutputType = {
    id: number | null
  }

  export type PoemMinAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
    content: string | null
    author: string | null
    link: string | null
    image: string | null
  }

  export type PoemMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
    content: string | null
    author: string | null
    link: string | null
    image: string | null
  }

  export type PoemCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    content: number
    keywords: number
    author: number
    link: number
    image: number
    _all: number
  }


  export type PoemAvgAggregateInputType = {
    id?: true
  }

  export type PoemSumAggregateInputType = {
    id?: true
  }

  export type PoemMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    content?: true
    author?: true
    link?: true
    image?: true
  }

  export type PoemMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    content?: true
    author?: true
    link?: true
    image?: true
  }

  export type PoemCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    content?: true
    keywords?: true
    author?: true
    link?: true
    image?: true
    _all?: true
  }

  export type PoemAggregateArgs = {
    /**
     * Filter which Poem to aggregate.
     * 
    **/
    where?: PoemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Poems to fetch.
     * 
    **/
    orderBy?: Enumerable<PoemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PoemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Poems from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Poems.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Poems
    **/
    _count?: true | PoemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoemMaxAggregateInputType
  }

  export type GetPoemAggregateType<T extends PoemAggregateArgs> = {
        [P in keyof T & keyof AggregatePoem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoem[P]>
      : GetScalarType<T[P], AggregatePoem[P]>
  }




  export type PoemGroupByArgs = {
    where?: PoemWhereInput
    orderBy?: Enumerable<PoemOrderByWithAggregationInput>
    by: Array<PoemScalarFieldEnum>
    having?: PoemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoemCountAggregateInputType | true
    _avg?: PoemAvgAggregateInputType
    _sum?: PoemSumAggregateInputType
    _min?: PoemMinAggregateInputType
    _max?: PoemMaxAggregateInputType
  }


  export type PoemGroupByOutputType = {
    id: number
    slug: string
    title: string
    content: string
    keywords: string[]
    author: string
    link: string | null
    image: string | null
    _count: PoemCountAggregateOutputType | null
    _avg: PoemAvgAggregateOutputType | null
    _sum: PoemSumAggregateOutputType | null
    _min: PoemMinAggregateOutputType | null
    _max: PoemMaxAggregateOutputType | null
  }

  type GetPoemGroupByPayload<T extends PoemGroupByArgs> = Promise<
    Array<
      PickArray<PoemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoemGroupByOutputType[P]>
            : GetScalarType<T[P], PoemGroupByOutputType[P]>
        }
      >
    >


  export type PoemSelect = {
    id?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    keywords?: boolean
    author?: boolean
    link?: boolean
    image?: boolean
  }

  export type PoemGetPayload<
    S extends boolean | null | undefined | PoemArgs,
    U = keyof S
      > = S extends true
        ? Poem
    : S extends undefined
    ? never
    : S extends PoemArgs | PoemFindManyArgs
    ?'include' extends U
    ? Poem 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Poem ?Poem [P]
  : 
     never
  } 
    : Poem
  : Poem


  type PoemCountArgs = Merge<
    Omit<PoemFindManyArgs, 'select' | 'include'> & {
      select?: PoemCountAggregateInputType | true
    }
  >

  export interface PoemDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Poem that matches the filter.
     * @param {PoemFindUniqueArgs} args - Arguments to find a Poem
     * @example
     * // Get one Poem
     * const poem = await prisma.poem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PoemFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PoemFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Poem'> extends True ? CheckSelect<T, Prisma__PoemClient<Poem>, Prisma__PoemClient<PoemGetPayload<T>>> : CheckSelect<T, Prisma__PoemClient<Poem | null >, Prisma__PoemClient<PoemGetPayload<T> | null >>

    /**
     * Find the first Poem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemFindFirstArgs} args - Arguments to find a Poem
     * @example
     * // Get one Poem
     * const poem = await prisma.poem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PoemFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PoemFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Poem'> extends True ? CheckSelect<T, Prisma__PoemClient<Poem>, Prisma__PoemClient<PoemGetPayload<T>>> : CheckSelect<T, Prisma__PoemClient<Poem | null >, Prisma__PoemClient<PoemGetPayload<T> | null >>

    /**
     * Find zero or more Poems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Poems
     * const poems = await prisma.poem.findMany()
     * 
     * // Get first 10 Poems
     * const poems = await prisma.poem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const poemWithIdOnly = await prisma.poem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PoemFindManyArgs>(
      args?: SelectSubset<T, PoemFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Poem>>, PrismaPromise<Array<PoemGetPayload<T>>>>

    /**
     * Create a Poem.
     * @param {PoemCreateArgs} args - Arguments to create a Poem.
     * @example
     * // Create one Poem
     * const Poem = await prisma.poem.create({
     *   data: {
     *     // ... data to create a Poem
     *   }
     * })
     * 
    **/
    create<T extends PoemCreateArgs>(
      args: SelectSubset<T, PoemCreateArgs>
    ): CheckSelect<T, Prisma__PoemClient<Poem>, Prisma__PoemClient<PoemGetPayload<T>>>

    /**
     * Create many Poems.
     *     @param {PoemCreateManyArgs} args - Arguments to create many Poems.
     *     @example
     *     // Create many Poems
     *     const poem = await prisma.poem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PoemCreateManyArgs>(
      args?: SelectSubset<T, PoemCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Poem.
     * @param {PoemDeleteArgs} args - Arguments to delete one Poem.
     * @example
     * // Delete one Poem
     * const Poem = await prisma.poem.delete({
     *   where: {
     *     // ... filter to delete one Poem
     *   }
     * })
     * 
    **/
    delete<T extends PoemDeleteArgs>(
      args: SelectSubset<T, PoemDeleteArgs>
    ): CheckSelect<T, Prisma__PoemClient<Poem>, Prisma__PoemClient<PoemGetPayload<T>>>

    /**
     * Update one Poem.
     * @param {PoemUpdateArgs} args - Arguments to update one Poem.
     * @example
     * // Update one Poem
     * const poem = await prisma.poem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PoemUpdateArgs>(
      args: SelectSubset<T, PoemUpdateArgs>
    ): CheckSelect<T, Prisma__PoemClient<Poem>, Prisma__PoemClient<PoemGetPayload<T>>>

    /**
     * Delete zero or more Poems.
     * @param {PoemDeleteManyArgs} args - Arguments to filter Poems to delete.
     * @example
     * // Delete a few Poems
     * const { count } = await prisma.poem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PoemDeleteManyArgs>(
      args?: SelectSubset<T, PoemDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Poems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Poems
     * const poem = await prisma.poem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PoemUpdateManyArgs>(
      args: SelectSubset<T, PoemUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Poem.
     * @param {PoemUpsertArgs} args - Arguments to update or create a Poem.
     * @example
     * // Update or create a Poem
     * const poem = await prisma.poem.upsert({
     *   create: {
     *     // ... data to create a Poem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Poem we want to update
     *   }
     * })
    **/
    upsert<T extends PoemUpsertArgs>(
      args: SelectSubset<T, PoemUpsertArgs>
    ): CheckSelect<T, Prisma__PoemClient<Poem>, Prisma__PoemClient<PoemGetPayload<T>>>

    /**
     * Count the number of Poems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemCountArgs} args - Arguments to filter Poems to count.
     * @example
     * // Count the number of Poems
     * const count = await prisma.poem.count({
     *   where: {
     *     // ... the filter for the Poems we want to count
     *   }
     * })
    **/
    count<T extends PoemCountArgs>(
      args?: Subset<T, PoemCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Poem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PoemAggregateArgs>(args: Subset<T, PoemAggregateArgs>): PrismaPromise<GetPoemAggregateType<T>>

    /**
     * Group by Poem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PoemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoemGroupByArgs['orderBy'] }
        : { orderBy?: PoemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PoemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoemGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Poem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PoemClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Poem findUnique
   */
  export type PoemFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Poem
     * 
    **/
    select?: PoemSelect | null
    /**
     * Throw an Error if a Poem can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Poem to fetch.
     * 
    **/
    where: PoemWhereUniqueInput
  }


  /**
   * Poem findFirst
   */
  export type PoemFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Poem
     * 
    **/
    select?: PoemSelect | null
    /**
     * Throw an Error if a Poem can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Poem to fetch.
     * 
    **/
    where?: PoemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Poems to fetch.
     * 
    **/
    orderBy?: Enumerable<PoemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Poems.
     * 
    **/
    cursor?: PoemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Poems from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Poems.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Poems.
     * 
    **/
    distinct?: Enumerable<PoemScalarFieldEnum>
  }


  /**
   * Poem findMany
   */
  export type PoemFindManyArgs = {
    /**
     * Select specific fields to fetch from the Poem
     * 
    **/
    select?: PoemSelect | null
    /**
     * Filter, which Poems to fetch.
     * 
    **/
    where?: PoemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Poems to fetch.
     * 
    **/
    orderBy?: Enumerable<PoemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Poems.
     * 
    **/
    cursor?: PoemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Poems from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Poems.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PoemScalarFieldEnum>
  }


  /**
   * Poem create
   */
  export type PoemCreateArgs = {
    /**
     * Select specific fields to fetch from the Poem
     * 
    **/
    select?: PoemSelect | null
    /**
     * The data needed to create a Poem.
     * 
    **/
    data: XOR<PoemCreateInput, PoemUncheckedCreateInput>
  }


  /**
   * Poem createMany
   */
  export type PoemCreateManyArgs = {
    data: Enumerable<PoemCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Poem update
   */
  export type PoemUpdateArgs = {
    /**
     * Select specific fields to fetch from the Poem
     * 
    **/
    select?: PoemSelect | null
    /**
     * The data needed to update a Poem.
     * 
    **/
    data: XOR<PoemUpdateInput, PoemUncheckedUpdateInput>
    /**
     * Choose, which Poem to update.
     * 
    **/
    where: PoemWhereUniqueInput
  }


  /**
   * Poem updateMany
   */
  export type PoemUpdateManyArgs = {
    data: XOR<PoemUpdateManyMutationInput, PoemUncheckedUpdateManyInput>
    where?: PoemWhereInput
  }


  /**
   * Poem upsert
   */
  export type PoemUpsertArgs = {
    /**
     * Select specific fields to fetch from the Poem
     * 
    **/
    select?: PoemSelect | null
    /**
     * The filter to search for the Poem to update in case it exists.
     * 
    **/
    where: PoemWhereUniqueInput
    /**
     * In case the Poem found by the `where` argument doesn't exist, create a new Poem with this data.
     * 
    **/
    create: XOR<PoemCreateInput, PoemUncheckedCreateInput>
    /**
     * In case the Poem was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PoemUpdateInput, PoemUncheckedUpdateInput>
  }


  /**
   * Poem delete
   */
  export type PoemDeleteArgs = {
    /**
     * Select specific fields to fetch from the Poem
     * 
    **/
    select?: PoemSelect | null
    /**
     * Filter which Poem to delete.
     * 
    **/
    where: PoemWhereUniqueInput
  }


  /**
   * Poem deleteMany
   */
  export type PoemDeleteManyArgs = {
    where?: PoemWhereInput
  }


  /**
   * Poem without action
   */
  export type PoemArgs = {
    /**
     * Select specific fields to fetch from the Poem
     * 
    **/
    select?: PoemSelect | null
  }



  /**
   * Model Post
   */


  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    link: string | null
    image: string | null
    authorId: number | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    link: string | null
    image: string | null
    authorId: number | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    link: number
    image: number
    authorId: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    link?: true
    image?: true
    authorId?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    link?: true
    image?: true
    authorId?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    link?: true
    image?: true
    authorId?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs = {
    /**
     * Filter which Post to aggregate.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs = {
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByWithAggregationInput>
    by: Array<PostScalarFieldEnum>
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }


  export type PostGroupByOutputType = {
    id: number
    title: string
    content: string | null
    link: string | null
    image: string | null
    authorId: number | null
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Promise<
    Array<
      PickArray<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect = {
    id?: boolean
    title?: boolean
    content?: boolean
    link?: boolean
    image?: boolean
    author?: boolean | UserArgs
    authorId?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostInclude = {
    author?: boolean | UserArgs
  }

  export type PostGetPayload<
    S extends boolean | null | undefined | PostArgs,
    U = keyof S
      > = S extends true
        ? Post
    : S extends undefined
    ? never
    : S extends PostArgs | PostFindManyArgs
    ?'include' extends U
    ? Post  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'author'
        ? UserGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Post ?Post [P]
  : 
          P extends 'author'
        ? UserGetPayload<S['select'][P]> | null : never
  } 
    : Post
  : Post


  type PostCountArgs = Merge<
    Omit<PostFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }
  >

  export interface PostDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Post'> extends True ? CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>> : CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Post'> extends True ? CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>> : CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Throw an Error if a Post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Throw an Error if a Post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     * 
    **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Posts to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post create
   */
  export type PostCreateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to create a Post.
     * 
    **/
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs = {
    data: Enumerable<PostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to update a Post.
     * 
    **/
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs = {
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The filter to search for the Post to update in case it exists.
     * 
    **/
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     * 
    **/
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter which Post to delete.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs = {
    where?: PostWhereInput
  }


  /**
   * Post without action
   */
  export type PostArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    nickname: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    nickname: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    nickname: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    nickname?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    nickname?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    nickname?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    firstName: string | null
    lastName: string | null
    nickname: string
    email: string
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    nickname?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | PostFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    posts?: boolean | PostFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'posts'
        ? Array < PostGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'posts'
        ? Array < PostGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    posts<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model AuthAccount
   */


  export type AggregateAuthAccount = {
    _count: AuthAccountCountAggregateOutputType | null
    _avg: AuthAccountAvgAggregateOutputType | null
    _sum: AuthAccountSumAggregateOutputType | null
    _min: AuthAccountMinAggregateOutputType | null
    _max: AuthAccountMaxAggregateOutputType | null
  }

  export type AuthAccountAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AuthAccountSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AuthAccountMinAggregateOutputType = {
    id: number | null
    compoundId: string | null
    userId: number | null
    providerType: string | null
    providerId: string | null
    providerAccountId: string | null
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthAccountMaxAggregateOutputType = {
    id: number | null
    compoundId: string | null
    userId: number | null
    providerType: string | null
    providerId: string | null
    providerAccountId: string | null
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthAccountCountAggregateOutputType = {
    id: number
    compoundId: number
    userId: number
    providerType: number
    providerId: number
    providerAccountId: number
    refreshToken: number
    accessToken: number
    accessTokenExpires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthAccountAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AuthAccountSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AuthAccountMinAggregateInputType = {
    id?: true
    compoundId?: true
    userId?: true
    providerType?: true
    providerId?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthAccountMaxAggregateInputType = {
    id?: true
    compoundId?: true
    userId?: true
    providerType?: true
    providerId?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthAccountCountAggregateInputType = {
    id?: true
    compoundId?: true
    userId?: true
    providerType?: true
    providerId?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthAccountAggregateArgs = {
    /**
     * Filter which AuthAccount to aggregate.
     * 
    **/
    where?: AuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthAccounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthAccounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthAccounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthAccounts
    **/
    _count?: true | AuthAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthAccountMaxAggregateInputType
  }

  export type GetAuthAccountAggregateType<T extends AuthAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthAccount[P]>
      : GetScalarType<T[P], AggregateAuthAccount[P]>
  }




  export type AuthAccountGroupByArgs = {
    where?: AuthAccountWhereInput
    orderBy?: Enumerable<AuthAccountOrderByWithAggregationInput>
    by: Array<AuthAccountScalarFieldEnum>
    having?: AuthAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthAccountCountAggregateInputType | true
    _avg?: AuthAccountAvgAggregateInputType
    _sum?: AuthAccountSumAggregateInputType
    _min?: AuthAccountMinAggregateInputType
    _max?: AuthAccountMaxAggregateInputType
  }


  export type AuthAccountGroupByOutputType = {
    id: number
    compoundId: string
    userId: number
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AuthAccountCountAggregateOutputType | null
    _avg: AuthAccountAvgAggregateOutputType | null
    _sum: AuthAccountSumAggregateOutputType | null
    _min: AuthAccountMinAggregateOutputType | null
    _max: AuthAccountMaxAggregateOutputType | null
  }

  type GetAuthAccountGroupByPayload<T extends AuthAccountGroupByArgs> = Promise<
    Array<
      PickArray<AuthAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthAccountGroupByOutputType[P]>
            : GetScalarType<T[P], AuthAccountGroupByOutputType[P]>
        }
      >
    >


  export type AuthAccountSelect = {
    id?: boolean
    compoundId?: boolean
    userId?: boolean
    providerType?: boolean
    providerId?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    accessTokenExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthAccountGetPayload<
    S extends boolean | null | undefined | AuthAccountArgs,
    U = keyof S
      > = S extends true
        ? AuthAccount
    : S extends undefined
    ? never
    : S extends AuthAccountArgs | AuthAccountFindManyArgs
    ?'include' extends U
    ? AuthAccount 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof AuthAccount ?AuthAccount [P]
  : 
     never
  } 
    : AuthAccount
  : AuthAccount


  type AuthAccountCountArgs = Merge<
    Omit<AuthAccountFindManyArgs, 'select' | 'include'> & {
      select?: AuthAccountCountAggregateInputType | true
    }
  >

  export interface AuthAccountDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one AuthAccount that matches the filter.
     * @param {AuthAccountFindUniqueArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuthAccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AuthAccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AuthAccount'> extends True ? CheckSelect<T, Prisma__AuthAccountClient<AuthAccount>, Prisma__AuthAccountClient<AuthAccountGetPayload<T>>> : CheckSelect<T, Prisma__AuthAccountClient<AuthAccount | null >, Prisma__AuthAccountClient<AuthAccountGetPayload<T> | null >>

    /**
     * Find the first AuthAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountFindFirstArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuthAccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AuthAccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AuthAccount'> extends True ? CheckSelect<T, Prisma__AuthAccountClient<AuthAccount>, Prisma__AuthAccountClient<AuthAccountGetPayload<T>>> : CheckSelect<T, Prisma__AuthAccountClient<AuthAccount | null >, Prisma__AuthAccountClient<AuthAccountGetPayload<T> | null >>

    /**
     * Find zero or more AuthAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthAccounts
     * const authAccounts = await prisma.authAccount.findMany()
     * 
     * // Get first 10 AuthAccounts
     * const authAccounts = await prisma.authAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authAccountWithIdOnly = await prisma.authAccount.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuthAccountFindManyArgs>(
      args?: SelectSubset<T, AuthAccountFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<AuthAccount>>, PrismaPromise<Array<AuthAccountGetPayload<T>>>>

    /**
     * Create a AuthAccount.
     * @param {AuthAccountCreateArgs} args - Arguments to create a AuthAccount.
     * @example
     * // Create one AuthAccount
     * const AuthAccount = await prisma.authAccount.create({
     *   data: {
     *     // ... data to create a AuthAccount
     *   }
     * })
     * 
    **/
    create<T extends AuthAccountCreateArgs>(
      args: SelectSubset<T, AuthAccountCreateArgs>
    ): CheckSelect<T, Prisma__AuthAccountClient<AuthAccount>, Prisma__AuthAccountClient<AuthAccountGetPayload<T>>>

    /**
     * Create many AuthAccounts.
     *     @param {AuthAccountCreateManyArgs} args - Arguments to create many AuthAccounts.
     *     @example
     *     // Create many AuthAccounts
     *     const authAccount = await prisma.authAccount.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuthAccountCreateManyArgs>(
      args?: SelectSubset<T, AuthAccountCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a AuthAccount.
     * @param {AuthAccountDeleteArgs} args - Arguments to delete one AuthAccount.
     * @example
     * // Delete one AuthAccount
     * const AuthAccount = await prisma.authAccount.delete({
     *   where: {
     *     // ... filter to delete one AuthAccount
     *   }
     * })
     * 
    **/
    delete<T extends AuthAccountDeleteArgs>(
      args: SelectSubset<T, AuthAccountDeleteArgs>
    ): CheckSelect<T, Prisma__AuthAccountClient<AuthAccount>, Prisma__AuthAccountClient<AuthAccountGetPayload<T>>>

    /**
     * Update one AuthAccount.
     * @param {AuthAccountUpdateArgs} args - Arguments to update one AuthAccount.
     * @example
     * // Update one AuthAccount
     * const authAccount = await prisma.authAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuthAccountUpdateArgs>(
      args: SelectSubset<T, AuthAccountUpdateArgs>
    ): CheckSelect<T, Prisma__AuthAccountClient<AuthAccount>, Prisma__AuthAccountClient<AuthAccountGetPayload<T>>>

    /**
     * Delete zero or more AuthAccounts.
     * @param {AuthAccountDeleteManyArgs} args - Arguments to filter AuthAccounts to delete.
     * @example
     * // Delete a few AuthAccounts
     * const { count } = await prisma.authAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuthAccountDeleteManyArgs>(
      args?: SelectSubset<T, AuthAccountDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthAccounts
     * const authAccount = await prisma.authAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuthAccountUpdateManyArgs>(
      args: SelectSubset<T, AuthAccountUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one AuthAccount.
     * @param {AuthAccountUpsertArgs} args - Arguments to update or create a AuthAccount.
     * @example
     * // Update or create a AuthAccount
     * const authAccount = await prisma.authAccount.upsert({
     *   create: {
     *     // ... data to create a AuthAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthAccount we want to update
     *   }
     * })
    **/
    upsert<T extends AuthAccountUpsertArgs>(
      args: SelectSubset<T, AuthAccountUpsertArgs>
    ): CheckSelect<T, Prisma__AuthAccountClient<AuthAccount>, Prisma__AuthAccountClient<AuthAccountGetPayload<T>>>

    /**
     * Count the number of AuthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountCountArgs} args - Arguments to filter AuthAccounts to count.
     * @example
     * // Count the number of AuthAccounts
     * const count = await prisma.authAccount.count({
     *   where: {
     *     // ... the filter for the AuthAccounts we want to count
     *   }
     * })
    **/
    count<T extends AuthAccountCountArgs>(
      args?: Subset<T, AuthAccountCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthAccountAggregateArgs>(args: Subset<T, AuthAccountAggregateArgs>): PrismaPromise<GetAuthAccountAggregateType<T>>

    /**
     * Group by AuthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthAccountGroupByArgs['orderBy'] }
        : { orderBy?: AuthAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthAccountGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AuthAccountClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * AuthAccount findUnique
   */
  export type AuthAccountFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the AuthAccount
     * 
    **/
    select?: AuthAccountSelect | null
    /**
     * Throw an Error if a AuthAccount can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which AuthAccount to fetch.
     * 
    **/
    where: AuthAccountWhereUniqueInput
  }


  /**
   * AuthAccount findFirst
   */
  export type AuthAccountFindFirstArgs = {
    /**
     * Select specific fields to fetch from the AuthAccount
     * 
    **/
    select?: AuthAccountSelect | null
    /**
     * Throw an Error if a AuthAccount can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which AuthAccount to fetch.
     * 
    **/
    where?: AuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthAccounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthAccounts.
     * 
    **/
    cursor?: AuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthAccounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthAccounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthAccounts.
     * 
    **/
    distinct?: Enumerable<AuthAccountScalarFieldEnum>
  }


  /**
   * AuthAccount findMany
   */
  export type AuthAccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the AuthAccount
     * 
    **/
    select?: AuthAccountSelect | null
    /**
     * Filter, which AuthAccounts to fetch.
     * 
    **/
    where?: AuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthAccounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthAccounts.
     * 
    **/
    cursor?: AuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthAccounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthAccounts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AuthAccountScalarFieldEnum>
  }


  /**
   * AuthAccount create
   */
  export type AuthAccountCreateArgs = {
    /**
     * Select specific fields to fetch from the AuthAccount
     * 
    **/
    select?: AuthAccountSelect | null
    /**
     * The data needed to create a AuthAccount.
     * 
    **/
    data: XOR<AuthAccountCreateInput, AuthAccountUncheckedCreateInput>
  }


  /**
   * AuthAccount createMany
   */
  export type AuthAccountCreateManyArgs = {
    data: Enumerable<AuthAccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AuthAccount update
   */
  export type AuthAccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the AuthAccount
     * 
    **/
    select?: AuthAccountSelect | null
    /**
     * The data needed to update a AuthAccount.
     * 
    **/
    data: XOR<AuthAccountUpdateInput, AuthAccountUncheckedUpdateInput>
    /**
     * Choose, which AuthAccount to update.
     * 
    **/
    where: AuthAccountWhereUniqueInput
  }


  /**
   * AuthAccount updateMany
   */
  export type AuthAccountUpdateManyArgs = {
    data: XOR<AuthAccountUpdateManyMutationInput, AuthAccountUncheckedUpdateManyInput>
    where?: AuthAccountWhereInput
  }


  /**
   * AuthAccount upsert
   */
  export type AuthAccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the AuthAccount
     * 
    **/
    select?: AuthAccountSelect | null
    /**
     * The filter to search for the AuthAccount to update in case it exists.
     * 
    **/
    where: AuthAccountWhereUniqueInput
    /**
     * In case the AuthAccount found by the `where` argument doesn't exist, create a new AuthAccount with this data.
     * 
    **/
    create: XOR<AuthAccountCreateInput, AuthAccountUncheckedCreateInput>
    /**
     * In case the AuthAccount was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AuthAccountUpdateInput, AuthAccountUncheckedUpdateInput>
  }


  /**
   * AuthAccount delete
   */
  export type AuthAccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the AuthAccount
     * 
    **/
    select?: AuthAccountSelect | null
    /**
     * Filter which AuthAccount to delete.
     * 
    **/
    where: AuthAccountWhereUniqueInput
  }


  /**
   * AuthAccount deleteMany
   */
  export type AuthAccountDeleteManyArgs = {
    where?: AuthAccountWhereInput
  }


  /**
   * AuthAccount without action
   */
  export type AuthAccountArgs = {
    /**
     * Select specific fields to fetch from the AuthAccount
     * 
    **/
    select?: AuthAccountSelect | null
  }



  /**
   * Model AuthSession
   */


  export type AggregateAuthSession = {
    _count: AuthSessionCountAggregateOutputType | null
    _avg: AuthSessionAvgAggregateOutputType | null
    _sum: AuthSessionSumAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  export type AuthSessionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AuthSessionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AuthSessionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    expires: Date | null
    sessionToken: string | null
    accessToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthSessionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    expires: Date | null
    sessionToken: string | null
    accessToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthSessionCountAggregateOutputType = {
    id: number
    userId: number
    expires: number
    sessionToken: number
    accessToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthSessionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AuthSessionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AuthSessionMinAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    accessToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    accessToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthSessionCountAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    accessToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthSessionAggregateArgs = {
    /**
     * Filter which AuthSession to aggregate.
     * 
    **/
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthSessions
    **/
    _count?: true | AuthSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthSessionMaxAggregateInputType
  }

  export type GetAuthSessionAggregateType<T extends AuthSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthSession[P]>
      : GetScalarType<T[P], AggregateAuthSession[P]>
  }




  export type AuthSessionGroupByArgs = {
    where?: AuthSessionWhereInput
    orderBy?: Enumerable<AuthSessionOrderByWithAggregationInput>
    by: Array<AuthSessionScalarFieldEnum>
    having?: AuthSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthSessionCountAggregateInputType | true
    _avg?: AuthSessionAvgAggregateInputType
    _sum?: AuthSessionSumAggregateInputType
    _min?: AuthSessionMinAggregateInputType
    _max?: AuthSessionMaxAggregateInputType
  }


  export type AuthSessionGroupByOutputType = {
    id: number
    userId: number
    expires: Date
    sessionToken: string
    accessToken: string
    createdAt: Date
    updatedAt: Date
    _count: AuthSessionCountAggregateOutputType | null
    _avg: AuthSessionAvgAggregateOutputType | null
    _sum: AuthSessionSumAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  type GetAuthSessionGroupByPayload<T extends AuthSessionGroupByArgs> = Promise<
    Array<
      PickArray<AuthSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
            : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
        }
      >
    >


  export type AuthSessionSelect = {
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
    accessToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthSessionGetPayload<
    S extends boolean | null | undefined | AuthSessionArgs,
    U = keyof S
      > = S extends true
        ? AuthSession
    : S extends undefined
    ? never
    : S extends AuthSessionArgs | AuthSessionFindManyArgs
    ?'include' extends U
    ? AuthSession 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof AuthSession ?AuthSession [P]
  : 
     never
  } 
    : AuthSession
  : AuthSession


  type AuthSessionCountArgs = Merge<
    Omit<AuthSessionFindManyArgs, 'select' | 'include'> & {
      select?: AuthSessionCountAggregateInputType | true
    }
  >

  export interface AuthSessionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one AuthSession that matches the filter.
     * @param {AuthSessionFindUniqueArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuthSessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AuthSessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AuthSession'> extends True ? CheckSelect<T, Prisma__AuthSessionClient<AuthSession>, Prisma__AuthSessionClient<AuthSessionGetPayload<T>>> : CheckSelect<T, Prisma__AuthSessionClient<AuthSession | null >, Prisma__AuthSessionClient<AuthSessionGetPayload<T> | null >>

    /**
     * Find the first AuthSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindFirstArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuthSessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AuthSessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AuthSession'> extends True ? CheckSelect<T, Prisma__AuthSessionClient<AuthSession>, Prisma__AuthSessionClient<AuthSessionGetPayload<T>>> : CheckSelect<T, Prisma__AuthSessionClient<AuthSession | null >, Prisma__AuthSessionClient<AuthSessionGetPayload<T> | null >>

    /**
     * Find zero or more AuthSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthSessions
     * const authSessions = await prisma.authSession.findMany()
     * 
     * // Get first 10 AuthSessions
     * const authSessions = await prisma.authSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authSessionWithIdOnly = await prisma.authSession.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuthSessionFindManyArgs>(
      args?: SelectSubset<T, AuthSessionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<AuthSession>>, PrismaPromise<Array<AuthSessionGetPayload<T>>>>

    /**
     * Create a AuthSession.
     * @param {AuthSessionCreateArgs} args - Arguments to create a AuthSession.
     * @example
     * // Create one AuthSession
     * const AuthSession = await prisma.authSession.create({
     *   data: {
     *     // ... data to create a AuthSession
     *   }
     * })
     * 
    **/
    create<T extends AuthSessionCreateArgs>(
      args: SelectSubset<T, AuthSessionCreateArgs>
    ): CheckSelect<T, Prisma__AuthSessionClient<AuthSession>, Prisma__AuthSessionClient<AuthSessionGetPayload<T>>>

    /**
     * Create many AuthSessions.
     *     @param {AuthSessionCreateManyArgs} args - Arguments to create many AuthSessions.
     *     @example
     *     // Create many AuthSessions
     *     const authSession = await prisma.authSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuthSessionCreateManyArgs>(
      args?: SelectSubset<T, AuthSessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a AuthSession.
     * @param {AuthSessionDeleteArgs} args - Arguments to delete one AuthSession.
     * @example
     * // Delete one AuthSession
     * const AuthSession = await prisma.authSession.delete({
     *   where: {
     *     // ... filter to delete one AuthSession
     *   }
     * })
     * 
    **/
    delete<T extends AuthSessionDeleteArgs>(
      args: SelectSubset<T, AuthSessionDeleteArgs>
    ): CheckSelect<T, Prisma__AuthSessionClient<AuthSession>, Prisma__AuthSessionClient<AuthSessionGetPayload<T>>>

    /**
     * Update one AuthSession.
     * @param {AuthSessionUpdateArgs} args - Arguments to update one AuthSession.
     * @example
     * // Update one AuthSession
     * const authSession = await prisma.authSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuthSessionUpdateArgs>(
      args: SelectSubset<T, AuthSessionUpdateArgs>
    ): CheckSelect<T, Prisma__AuthSessionClient<AuthSession>, Prisma__AuthSessionClient<AuthSessionGetPayload<T>>>

    /**
     * Delete zero or more AuthSessions.
     * @param {AuthSessionDeleteManyArgs} args - Arguments to filter AuthSessions to delete.
     * @example
     * // Delete a few AuthSessions
     * const { count } = await prisma.authSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuthSessionDeleteManyArgs>(
      args?: SelectSubset<T, AuthSessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthSessions
     * const authSession = await prisma.authSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuthSessionUpdateManyArgs>(
      args: SelectSubset<T, AuthSessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one AuthSession.
     * @param {AuthSessionUpsertArgs} args - Arguments to update or create a AuthSession.
     * @example
     * // Update or create a AuthSession
     * const authSession = await prisma.authSession.upsert({
     *   create: {
     *     // ... data to create a AuthSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthSession we want to update
     *   }
     * })
    **/
    upsert<T extends AuthSessionUpsertArgs>(
      args: SelectSubset<T, AuthSessionUpsertArgs>
    ): CheckSelect<T, Prisma__AuthSessionClient<AuthSession>, Prisma__AuthSessionClient<AuthSessionGetPayload<T>>>

    /**
     * Count the number of AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionCountArgs} args - Arguments to filter AuthSessions to count.
     * @example
     * // Count the number of AuthSessions
     * const count = await prisma.authSession.count({
     *   where: {
     *     // ... the filter for the AuthSessions we want to count
     *   }
     * })
    **/
    count<T extends AuthSessionCountArgs>(
      args?: Subset<T, AuthSessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthSessionAggregateArgs>(args: Subset<T, AuthSessionAggregateArgs>): PrismaPromise<GetAuthSessionAggregateType<T>>

    /**
     * Group by AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthSessionGroupByArgs['orderBy'] }
        : { orderBy?: AuthSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthSessionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AuthSessionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * AuthSession findUnique
   */
  export type AuthSessionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the AuthSession
     * 
    **/
    select?: AuthSessionSelect | null
    /**
     * Throw an Error if a AuthSession can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which AuthSession to fetch.
     * 
    **/
    where: AuthSessionWhereUniqueInput
  }


  /**
   * AuthSession findFirst
   */
  export type AuthSessionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the AuthSession
     * 
    **/
    select?: AuthSessionSelect | null
    /**
     * Throw an Error if a AuthSession can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which AuthSession to fetch.
     * 
    **/
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthSessions.
     * 
    **/
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     * 
    **/
    distinct?: Enumerable<AuthSessionScalarFieldEnum>
  }


  /**
   * AuthSession findMany
   */
  export type AuthSessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the AuthSession
     * 
    **/
    select?: AuthSessionSelect | null
    /**
     * Filter, which AuthSessions to fetch.
     * 
    **/
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthSessions.
     * 
    **/
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AuthSessionScalarFieldEnum>
  }


  /**
   * AuthSession create
   */
  export type AuthSessionCreateArgs = {
    /**
     * Select specific fields to fetch from the AuthSession
     * 
    **/
    select?: AuthSessionSelect | null
    /**
     * The data needed to create a AuthSession.
     * 
    **/
    data: XOR<AuthSessionCreateInput, AuthSessionUncheckedCreateInput>
  }


  /**
   * AuthSession createMany
   */
  export type AuthSessionCreateManyArgs = {
    data: Enumerable<AuthSessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AuthSession update
   */
  export type AuthSessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the AuthSession
     * 
    **/
    select?: AuthSessionSelect | null
    /**
     * The data needed to update a AuthSession.
     * 
    **/
    data: XOR<AuthSessionUpdateInput, AuthSessionUncheckedUpdateInput>
    /**
     * Choose, which AuthSession to update.
     * 
    **/
    where: AuthSessionWhereUniqueInput
  }


  /**
   * AuthSession updateMany
   */
  export type AuthSessionUpdateManyArgs = {
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyInput>
    where?: AuthSessionWhereInput
  }


  /**
   * AuthSession upsert
   */
  export type AuthSessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the AuthSession
     * 
    **/
    select?: AuthSessionSelect | null
    /**
     * The filter to search for the AuthSession to update in case it exists.
     * 
    **/
    where: AuthSessionWhereUniqueInput
    /**
     * In case the AuthSession found by the `where` argument doesn't exist, create a new AuthSession with this data.
     * 
    **/
    create: XOR<AuthSessionCreateInput, AuthSessionUncheckedCreateInput>
    /**
     * In case the AuthSession was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AuthSessionUpdateInput, AuthSessionUncheckedUpdateInput>
  }


  /**
   * AuthSession delete
   */
  export type AuthSessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the AuthSession
     * 
    **/
    select?: AuthSessionSelect | null
    /**
     * Filter which AuthSession to delete.
     * 
    **/
    where: AuthSessionWhereUniqueInput
  }


  /**
   * AuthSession deleteMany
   */
  export type AuthSessionDeleteManyArgs = {
    where?: AuthSessionWhereInput
  }


  /**
   * AuthSession without action
   */
  export type AuthSessionArgs = {
    /**
     * Select specific fields to fetch from the AuthSession
     * 
    **/
    select?: AuthSessionSelect | null
  }



  /**
   * Model AuthVerificationRequest
   */


  export type AggregateAuthVerificationRequest = {
    _count: AuthVerificationRequestCountAggregateOutputType | null
    _avg: AuthVerificationRequestAvgAggregateOutputType | null
    _sum: AuthVerificationRequestSumAggregateOutputType | null
    _min: AuthVerificationRequestMinAggregateOutputType | null
    _max: AuthVerificationRequestMaxAggregateOutputType | null
  }

  export type AuthVerificationRequestAvgAggregateOutputType = {
    id: number | null
  }

  export type AuthVerificationRequestSumAggregateOutputType = {
    id: number | null
  }

  export type AuthVerificationRequestMinAggregateOutputType = {
    id: number | null
    identifier: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthVerificationRequestMaxAggregateOutputType = {
    id: number | null
    identifier: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthVerificationRequestCountAggregateOutputType = {
    id: number
    identifier: number
    token: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthVerificationRequestAvgAggregateInputType = {
    id?: true
  }

  export type AuthVerificationRequestSumAggregateInputType = {
    id?: true
  }

  export type AuthVerificationRequestMinAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthVerificationRequestMaxAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthVerificationRequestCountAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthVerificationRequestAggregateArgs = {
    /**
     * Filter which AuthVerificationRequest to aggregate.
     * 
    **/
    where?: AuthVerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthVerificationRequests to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthVerificationRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AuthVerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthVerificationRequests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthVerificationRequests.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthVerificationRequests
    **/
    _count?: true | AuthVerificationRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthVerificationRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthVerificationRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthVerificationRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthVerificationRequestMaxAggregateInputType
  }

  export type GetAuthVerificationRequestAggregateType<T extends AuthVerificationRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthVerificationRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthVerificationRequest[P]>
      : GetScalarType<T[P], AggregateAuthVerificationRequest[P]>
  }




  export type AuthVerificationRequestGroupByArgs = {
    where?: AuthVerificationRequestWhereInput
    orderBy?: Enumerable<AuthVerificationRequestOrderByWithAggregationInput>
    by: Array<AuthVerificationRequestScalarFieldEnum>
    having?: AuthVerificationRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthVerificationRequestCountAggregateInputType | true
    _avg?: AuthVerificationRequestAvgAggregateInputType
    _sum?: AuthVerificationRequestSumAggregateInputType
    _min?: AuthVerificationRequestMinAggregateInputType
    _max?: AuthVerificationRequestMaxAggregateInputType
  }


  export type AuthVerificationRequestGroupByOutputType = {
    id: number
    identifier: string
    token: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: AuthVerificationRequestCountAggregateOutputType | null
    _avg: AuthVerificationRequestAvgAggregateOutputType | null
    _sum: AuthVerificationRequestSumAggregateOutputType | null
    _min: AuthVerificationRequestMinAggregateOutputType | null
    _max: AuthVerificationRequestMaxAggregateOutputType | null
  }

  type GetAuthVerificationRequestGroupByPayload<T extends AuthVerificationRequestGroupByArgs> = Promise<
    Array<
      PickArray<AuthVerificationRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthVerificationRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthVerificationRequestGroupByOutputType[P]>
            : GetScalarType<T[P], AuthVerificationRequestGroupByOutputType[P]>
        }
      >
    >


  export type AuthVerificationRequestSelect = {
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthVerificationRequestGetPayload<
    S extends boolean | null | undefined | AuthVerificationRequestArgs,
    U = keyof S
      > = S extends true
        ? AuthVerificationRequest
    : S extends undefined
    ? never
    : S extends AuthVerificationRequestArgs | AuthVerificationRequestFindManyArgs
    ?'include' extends U
    ? AuthVerificationRequest 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof AuthVerificationRequest ?AuthVerificationRequest [P]
  : 
     never
  } 
    : AuthVerificationRequest
  : AuthVerificationRequest


  type AuthVerificationRequestCountArgs = Merge<
    Omit<AuthVerificationRequestFindManyArgs, 'select' | 'include'> & {
      select?: AuthVerificationRequestCountAggregateInputType | true
    }
  >

  export interface AuthVerificationRequestDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one AuthVerificationRequest that matches the filter.
     * @param {AuthVerificationRequestFindUniqueArgs} args - Arguments to find a AuthVerificationRequest
     * @example
     * // Get one AuthVerificationRequest
     * const authVerificationRequest = await prisma.authVerificationRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuthVerificationRequestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AuthVerificationRequestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AuthVerificationRequest'> extends True ? CheckSelect<T, Prisma__AuthVerificationRequestClient<AuthVerificationRequest>, Prisma__AuthVerificationRequestClient<AuthVerificationRequestGetPayload<T>>> : CheckSelect<T, Prisma__AuthVerificationRequestClient<AuthVerificationRequest | null >, Prisma__AuthVerificationRequestClient<AuthVerificationRequestGetPayload<T> | null >>

    /**
     * Find the first AuthVerificationRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationRequestFindFirstArgs} args - Arguments to find a AuthVerificationRequest
     * @example
     * // Get one AuthVerificationRequest
     * const authVerificationRequest = await prisma.authVerificationRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuthVerificationRequestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AuthVerificationRequestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AuthVerificationRequest'> extends True ? CheckSelect<T, Prisma__AuthVerificationRequestClient<AuthVerificationRequest>, Prisma__AuthVerificationRequestClient<AuthVerificationRequestGetPayload<T>>> : CheckSelect<T, Prisma__AuthVerificationRequestClient<AuthVerificationRequest | null >, Prisma__AuthVerificationRequestClient<AuthVerificationRequestGetPayload<T> | null >>

    /**
     * Find zero or more AuthVerificationRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthVerificationRequests
     * const authVerificationRequests = await prisma.authVerificationRequest.findMany()
     * 
     * // Get first 10 AuthVerificationRequests
     * const authVerificationRequests = await prisma.authVerificationRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authVerificationRequestWithIdOnly = await prisma.authVerificationRequest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuthVerificationRequestFindManyArgs>(
      args?: SelectSubset<T, AuthVerificationRequestFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<AuthVerificationRequest>>, PrismaPromise<Array<AuthVerificationRequestGetPayload<T>>>>

    /**
     * Create a AuthVerificationRequest.
     * @param {AuthVerificationRequestCreateArgs} args - Arguments to create a AuthVerificationRequest.
     * @example
     * // Create one AuthVerificationRequest
     * const AuthVerificationRequest = await prisma.authVerificationRequest.create({
     *   data: {
     *     // ... data to create a AuthVerificationRequest
     *   }
     * })
     * 
    **/
    create<T extends AuthVerificationRequestCreateArgs>(
      args: SelectSubset<T, AuthVerificationRequestCreateArgs>
    ): CheckSelect<T, Prisma__AuthVerificationRequestClient<AuthVerificationRequest>, Prisma__AuthVerificationRequestClient<AuthVerificationRequestGetPayload<T>>>

    /**
     * Create many AuthVerificationRequests.
     *     @param {AuthVerificationRequestCreateManyArgs} args - Arguments to create many AuthVerificationRequests.
     *     @example
     *     // Create many AuthVerificationRequests
     *     const authVerificationRequest = await prisma.authVerificationRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuthVerificationRequestCreateManyArgs>(
      args?: SelectSubset<T, AuthVerificationRequestCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a AuthVerificationRequest.
     * @param {AuthVerificationRequestDeleteArgs} args - Arguments to delete one AuthVerificationRequest.
     * @example
     * // Delete one AuthVerificationRequest
     * const AuthVerificationRequest = await prisma.authVerificationRequest.delete({
     *   where: {
     *     // ... filter to delete one AuthVerificationRequest
     *   }
     * })
     * 
    **/
    delete<T extends AuthVerificationRequestDeleteArgs>(
      args: SelectSubset<T, AuthVerificationRequestDeleteArgs>
    ): CheckSelect<T, Prisma__AuthVerificationRequestClient<AuthVerificationRequest>, Prisma__AuthVerificationRequestClient<AuthVerificationRequestGetPayload<T>>>

    /**
     * Update one AuthVerificationRequest.
     * @param {AuthVerificationRequestUpdateArgs} args - Arguments to update one AuthVerificationRequest.
     * @example
     * // Update one AuthVerificationRequest
     * const authVerificationRequest = await prisma.authVerificationRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuthVerificationRequestUpdateArgs>(
      args: SelectSubset<T, AuthVerificationRequestUpdateArgs>
    ): CheckSelect<T, Prisma__AuthVerificationRequestClient<AuthVerificationRequest>, Prisma__AuthVerificationRequestClient<AuthVerificationRequestGetPayload<T>>>

    /**
     * Delete zero or more AuthVerificationRequests.
     * @param {AuthVerificationRequestDeleteManyArgs} args - Arguments to filter AuthVerificationRequests to delete.
     * @example
     * // Delete a few AuthVerificationRequests
     * const { count } = await prisma.authVerificationRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuthVerificationRequestDeleteManyArgs>(
      args?: SelectSubset<T, AuthVerificationRequestDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthVerificationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthVerificationRequests
     * const authVerificationRequest = await prisma.authVerificationRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuthVerificationRequestUpdateManyArgs>(
      args: SelectSubset<T, AuthVerificationRequestUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one AuthVerificationRequest.
     * @param {AuthVerificationRequestUpsertArgs} args - Arguments to update or create a AuthVerificationRequest.
     * @example
     * // Update or create a AuthVerificationRequest
     * const authVerificationRequest = await prisma.authVerificationRequest.upsert({
     *   create: {
     *     // ... data to create a AuthVerificationRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthVerificationRequest we want to update
     *   }
     * })
    **/
    upsert<T extends AuthVerificationRequestUpsertArgs>(
      args: SelectSubset<T, AuthVerificationRequestUpsertArgs>
    ): CheckSelect<T, Prisma__AuthVerificationRequestClient<AuthVerificationRequest>, Prisma__AuthVerificationRequestClient<AuthVerificationRequestGetPayload<T>>>

    /**
     * Count the number of AuthVerificationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationRequestCountArgs} args - Arguments to filter AuthVerificationRequests to count.
     * @example
     * // Count the number of AuthVerificationRequests
     * const count = await prisma.authVerificationRequest.count({
     *   where: {
     *     // ... the filter for the AuthVerificationRequests we want to count
     *   }
     * })
    **/
    count<T extends AuthVerificationRequestCountArgs>(
      args?: Subset<T, AuthVerificationRequestCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthVerificationRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthVerificationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthVerificationRequestAggregateArgs>(args: Subset<T, AuthVerificationRequestAggregateArgs>): PrismaPromise<GetAuthVerificationRequestAggregateType<T>>

    /**
     * Group by AuthVerificationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthVerificationRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthVerificationRequestGroupByArgs['orderBy'] }
        : { orderBy?: AuthVerificationRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthVerificationRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthVerificationRequestGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthVerificationRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AuthVerificationRequestClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * AuthVerificationRequest findUnique
   */
  export type AuthVerificationRequestFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the AuthVerificationRequest
     * 
    **/
    select?: AuthVerificationRequestSelect | null
    /**
     * Throw an Error if a AuthVerificationRequest can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which AuthVerificationRequest to fetch.
     * 
    **/
    where: AuthVerificationRequestWhereUniqueInput
  }


  /**
   * AuthVerificationRequest findFirst
   */
  export type AuthVerificationRequestFindFirstArgs = {
    /**
     * Select specific fields to fetch from the AuthVerificationRequest
     * 
    **/
    select?: AuthVerificationRequestSelect | null
    /**
     * Throw an Error if a AuthVerificationRequest can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which AuthVerificationRequest to fetch.
     * 
    **/
    where?: AuthVerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthVerificationRequests to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthVerificationRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthVerificationRequests.
     * 
    **/
    cursor?: AuthVerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthVerificationRequests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthVerificationRequests.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthVerificationRequests.
     * 
    **/
    distinct?: Enumerable<AuthVerificationRequestScalarFieldEnum>
  }


  /**
   * AuthVerificationRequest findMany
   */
  export type AuthVerificationRequestFindManyArgs = {
    /**
     * Select specific fields to fetch from the AuthVerificationRequest
     * 
    **/
    select?: AuthVerificationRequestSelect | null
    /**
     * Filter, which AuthVerificationRequests to fetch.
     * 
    **/
    where?: AuthVerificationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthVerificationRequests to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthVerificationRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthVerificationRequests.
     * 
    **/
    cursor?: AuthVerificationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthVerificationRequests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthVerificationRequests.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AuthVerificationRequestScalarFieldEnum>
  }


  /**
   * AuthVerificationRequest create
   */
  export type AuthVerificationRequestCreateArgs = {
    /**
     * Select specific fields to fetch from the AuthVerificationRequest
     * 
    **/
    select?: AuthVerificationRequestSelect | null
    /**
     * The data needed to create a AuthVerificationRequest.
     * 
    **/
    data: XOR<AuthVerificationRequestCreateInput, AuthVerificationRequestUncheckedCreateInput>
  }


  /**
   * AuthVerificationRequest createMany
   */
  export type AuthVerificationRequestCreateManyArgs = {
    data: Enumerable<AuthVerificationRequestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AuthVerificationRequest update
   */
  export type AuthVerificationRequestUpdateArgs = {
    /**
     * Select specific fields to fetch from the AuthVerificationRequest
     * 
    **/
    select?: AuthVerificationRequestSelect | null
    /**
     * The data needed to update a AuthVerificationRequest.
     * 
    **/
    data: XOR<AuthVerificationRequestUpdateInput, AuthVerificationRequestUncheckedUpdateInput>
    /**
     * Choose, which AuthVerificationRequest to update.
     * 
    **/
    where: AuthVerificationRequestWhereUniqueInput
  }


  /**
   * AuthVerificationRequest updateMany
   */
  export type AuthVerificationRequestUpdateManyArgs = {
    data: XOR<AuthVerificationRequestUpdateManyMutationInput, AuthVerificationRequestUncheckedUpdateManyInput>
    where?: AuthVerificationRequestWhereInput
  }


  /**
   * AuthVerificationRequest upsert
   */
  export type AuthVerificationRequestUpsertArgs = {
    /**
     * Select specific fields to fetch from the AuthVerificationRequest
     * 
    **/
    select?: AuthVerificationRequestSelect | null
    /**
     * The filter to search for the AuthVerificationRequest to update in case it exists.
     * 
    **/
    where: AuthVerificationRequestWhereUniqueInput
    /**
     * In case the AuthVerificationRequest found by the `where` argument doesn't exist, create a new AuthVerificationRequest with this data.
     * 
    **/
    create: XOR<AuthVerificationRequestCreateInput, AuthVerificationRequestUncheckedCreateInput>
    /**
     * In case the AuthVerificationRequest was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AuthVerificationRequestUpdateInput, AuthVerificationRequestUncheckedUpdateInput>
  }


  /**
   * AuthVerificationRequest delete
   */
  export type AuthVerificationRequestDeleteArgs = {
    /**
     * Select specific fields to fetch from the AuthVerificationRequest
     * 
    **/
    select?: AuthVerificationRequestSelect | null
    /**
     * Filter which AuthVerificationRequest to delete.
     * 
    **/
    where: AuthVerificationRequestWhereUniqueInput
  }


  /**
   * AuthVerificationRequest deleteMany
   */
  export type AuthVerificationRequestDeleteManyArgs = {
    where?: AuthVerificationRequestWhereInput
  }


  /**
   * AuthVerificationRequest without action
   */
  export type AuthVerificationRequestArgs = {
    /**
     * Select specific fields to fetch from the AuthVerificationRequest
     * 
    **/
    select?: AuthVerificationRequestSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const PoemScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    content: 'content',
    keywords: 'keywords',
    author: 'author',
    link: 'link',
    image: 'image'
  };

  export type PoemScalarFieldEnum = (typeof PoemScalarFieldEnum)[keyof typeof PoemScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    link: 'link',
    image: 'image',
    authorId: 'authorId',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    nickname: 'nickname',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AuthAccountScalarFieldEnum: {
    id: 'id',
    compoundId: 'compoundId',
    userId: 'userId',
    providerType: 'providerType',
    providerId: 'providerId',
    providerAccountId: 'providerAccountId',
    refreshToken: 'refreshToken',
    accessToken: 'accessToken',
    accessTokenExpires: 'accessTokenExpires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthAccountScalarFieldEnum = (typeof AuthAccountScalarFieldEnum)[keyof typeof AuthAccountScalarFieldEnum]


  export const AuthSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expires: 'expires',
    sessionToken: 'sessionToken',
    accessToken: 'accessToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthSessionScalarFieldEnum = (typeof AuthSessionScalarFieldEnum)[keyof typeof AuthSessionScalarFieldEnum]


  export const AuthVerificationRequestScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    token: 'token',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthVerificationRequestScalarFieldEnum = (typeof AuthVerificationRequestScalarFieldEnum)[keyof typeof AuthVerificationRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type PoemWhereInput = {
    AND?: Enumerable<PoemWhereInput>
    OR?: Enumerable<PoemWhereInput>
    NOT?: Enumerable<PoemWhereInput>
    id?: IntFilter | number
    slug?: StringFilter | string
    title?: StringFilter | string
    content?: StringFilter | string
    keywords?: StringNullableListFilter
    author?: StringFilter | string
    link?: StringNullableFilter | string | null
    image?: StringNullableFilter | string | null
  }

  export type PoemOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    keywords?: SortOrder
    author?: SortOrder
    link?: SortOrder
    image?: SortOrder
  }

  export type PoemWhereUniqueInput = {
    id?: number
    slug?: string
  }

  export type PoemOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    keywords?: SortOrder
    author?: SortOrder
    link?: SortOrder
    image?: SortOrder
    _count?: PoemCountOrderByAggregateInput
    _avg?: PoemAvgOrderByAggregateInput
    _max?: PoemMaxOrderByAggregateInput
    _min?: PoemMinOrderByAggregateInput
    _sum?: PoemSumOrderByAggregateInput
  }

  export type PoemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PoemScalarWhereWithAggregatesInput>
    OR?: Enumerable<PoemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PoemScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    slug?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    keywords?: StringNullableListFilter
    author?: StringWithAggregatesFilter | string
    link?: StringNullableWithAggregatesFilter | string | null
    image?: StringNullableWithAggregatesFilter | string | null
  }

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>
    OR?: Enumerable<PostWhereInput>
    NOT?: Enumerable<PostWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    link?: StringNullableFilter | string | null
    image?: StringNullableFilter | string | null
    author?: XOR<UserRelationFilter, UserWhereInput> | null
    authorId?: IntNullableFilter | number | null
    publishedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    image?: SortOrder
    author?: UserOrderByWithRelationInput
    authorId?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostWhereUniqueInput = {
    id?: number
  }

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    image?: SortOrder
    authorId?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    content?: StringNullableWithAggregatesFilter | string | null
    link?: StringNullableWithAggregatesFilter | string | null
    image?: StringNullableWithAggregatesFilter | string | null
    authorId?: IntNullableWithAggregatesFilter | number | null
    publishedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    nickname?: StringFilter | string
    email?: StringFilter | string
    emailVerified?: DateTimeNullableFilter | Date | string | null
    image?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    posts?: PostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posts?: PostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    nickname?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    firstName?: StringNullableWithAggregatesFilter | string | null
    lastName?: StringNullableWithAggregatesFilter | string | null
    nickname?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    emailVerified?: DateTimeNullableWithAggregatesFilter | Date | string | null
    image?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AuthAccountWhereInput = {
    AND?: Enumerable<AuthAccountWhereInput>
    OR?: Enumerable<AuthAccountWhereInput>
    NOT?: Enumerable<AuthAccountWhereInput>
    id?: IntFilter | number
    compoundId?: StringFilter | string
    userId?: IntFilter | number
    providerType?: StringFilter | string
    providerId?: StringFilter | string
    providerAccountId?: StringFilter | string
    refreshToken?: StringNullableFilter | string | null
    accessToken?: StringNullableFilter | string | null
    accessTokenExpires?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type AuthAccountOrderByWithRelationInput = {
    id?: SortOrder
    compoundId?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    accessTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthAccountWhereUniqueInput = {
    id?: number
    compoundId?: string
  }

  export type AuthAccountOrderByWithAggregationInput = {
    id?: SortOrder
    compoundId?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    accessTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthAccountCountOrderByAggregateInput
    _avg?: AuthAccountAvgOrderByAggregateInput
    _max?: AuthAccountMaxOrderByAggregateInput
    _min?: AuthAccountMinOrderByAggregateInput
    _sum?: AuthAccountSumOrderByAggregateInput
  }

  export type AuthAccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AuthAccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<AuthAccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AuthAccountScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    compoundId?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
    providerType?: StringWithAggregatesFilter | string
    providerId?: StringWithAggregatesFilter | string
    providerAccountId?: StringWithAggregatesFilter | string
    refreshToken?: StringNullableWithAggregatesFilter | string | null
    accessToken?: StringNullableWithAggregatesFilter | string | null
    accessTokenExpires?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AuthSessionWhereInput = {
    AND?: Enumerable<AuthSessionWhereInput>
    OR?: Enumerable<AuthSessionWhereInput>
    NOT?: Enumerable<AuthSessionWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    expires?: DateTimeFilter | Date | string
    sessionToken?: StringFilter | string
    accessToken?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type AuthSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthSessionWhereUniqueInput = {
    id?: number
    sessionToken?: string
    accessToken?: string
  }

  export type AuthSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthSessionCountOrderByAggregateInput
    _avg?: AuthSessionAvgOrderByAggregateInput
    _max?: AuthSessionMaxOrderByAggregateInput
    _min?: AuthSessionMinOrderByAggregateInput
    _sum?: AuthSessionSumOrderByAggregateInput
  }

  export type AuthSessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AuthSessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<AuthSessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AuthSessionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    expires?: DateTimeWithAggregatesFilter | Date | string
    sessionToken?: StringWithAggregatesFilter | string
    accessToken?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AuthVerificationRequestWhereInput = {
    AND?: Enumerable<AuthVerificationRequestWhereInput>
    OR?: Enumerable<AuthVerificationRequestWhereInput>
    NOT?: Enumerable<AuthVerificationRequestWhereInput>
    id?: IntFilter | number
    identifier?: StringFilter | string
    token?: StringFilter | string
    expires?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type AuthVerificationRequestOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthVerificationRequestWhereUniqueInput = {
    id?: number
    token?: string
  }

  export type AuthVerificationRequestOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthVerificationRequestCountOrderByAggregateInput
    _avg?: AuthVerificationRequestAvgOrderByAggregateInput
    _max?: AuthVerificationRequestMaxOrderByAggregateInput
    _min?: AuthVerificationRequestMinOrderByAggregateInput
    _sum?: AuthVerificationRequestSumOrderByAggregateInput
  }

  export type AuthVerificationRequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AuthVerificationRequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<AuthVerificationRequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AuthVerificationRequestScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    identifier?: StringWithAggregatesFilter | string
    token?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PoemCreateInput = {
    slug: string
    title: string
    content: string
    author: string
    link?: string | null
    image?: string | null
    keywords?: PoemCreatekeywordsInput | Enumerable<string>
  }

  export type PoemUncheckedCreateInput = {
    id?: number
    slug: string
    title: string
    content: string
    author: string
    link?: string | null
    image?: string | null
    keywords?: PoemCreatekeywordsInput | Enumerable<string>
  }

  export type PoemUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: PoemUpdatekeywordsInput | Enumerable<string>
  }

  export type PoemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: PoemUpdatekeywordsInput | Enumerable<string>
  }

  export type PoemCreateManyInput = {
    id?: number
    slug: string
    title: string
    content: string
    author: string
    link?: string | null
    image?: string | null
    keywords?: PoemCreateManykeywordsInput | Enumerable<string>
  }

  export type PoemUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: PoemUpdatekeywordsInput | Enumerable<string>
  }

  export type PoemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: PoemUpdatekeywordsInput | Enumerable<string>
  }

  export type PostCreateInput = {
    title: string
    content?: string | null
    link?: string | null
    image?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author?: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    content?: string | null
    link?: string | null
    image?: string | null
    authorId?: number | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutPostsInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    content?: string | null
    link?: string | null
    image?: string | null
    authorId?: number | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    firstName?: string | null
    lastName?: string | null
    nickname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    nickname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutAuthorInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    nickname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthAccountCreateInput = {
    compoundId: string
    userId: number
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthAccountUncheckedCreateInput = {
    id?: number
    compoundId: string
    userId: number
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthAccountUpdateInput = {
    compoundId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    compoundId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthAccountCreateManyInput = {
    id?: number
    compoundId: string
    userId: number
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthAccountUpdateManyMutationInput = {
    compoundId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    compoundId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionCreateInput = {
    userId: number
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthSessionUncheckedCreateInput = {
    id?: number
    userId: number
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthSessionUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionCreateManyInput = {
    id?: number
    userId: number
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthSessionUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthVerificationRequestCreateInput = {
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthVerificationRequestUncheckedCreateInput = {
    id?: number
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthVerificationRequestUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthVerificationRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthVerificationRequestCreateManyInput = {
    id?: number
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthVerificationRequestUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthVerificationRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type PoemCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    keywords?: SortOrder
    author?: SortOrder
    link?: SortOrder
    image?: SortOrder
  }

  export type PoemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PoemMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    author?: SortOrder
    link?: SortOrder
    image?: SortOrder
  }

  export type PoemMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    author?: SortOrder
    link?: SortOrder
    image?: SortOrder
  }

  export type PoemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    image?: SortOrder
    authorId?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    image?: SortOrder
    authorId?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    image?: SortOrder
    authorId?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthAccountCountOrderByAggregateInput = {
    id?: SortOrder
    compoundId?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    accessTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AuthAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    compoundId?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    accessTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthAccountMinOrderByAggregateInput = {
    id?: SortOrder
    compoundId?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    accessTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthAccountSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AuthSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AuthSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthSessionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AuthVerificationRequestCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthVerificationRequestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthVerificationRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthVerificationRequestMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthVerificationRequestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PoemCreatekeywordsInput = {
    set: Enumerable<string>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PoemUpdatekeywordsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PoemCreateManykeywordsInput = {
    set: Enumerable<string>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type PostUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserCreateWithoutPostsInput = {
    firstName?: string | null
    lastName?: string | null
    nickname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    nickname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateWithoutAuthorInput = {
    title: string
    content?: string | null
    link?: string | null
    image?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    content?: string | null
    link?: string | null
    image?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: Enumerable<PostCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostsInput>
  }

  export type PostScalarWhereInput = {
    AND?: Enumerable<PostScalarWhereInput>
    OR?: Enumerable<PostScalarWhereInput>
    NOT?: Enumerable<PostScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    link?: StringNullableFilter | string | null
    image?: StringNullableFilter | string | null
    authorId?: IntNullableFilter | number | null
    publishedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PostCreateManyAuthorInput = {
    id?: number
    title: string
    content?: string | null
    link?: string | null
    image?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}