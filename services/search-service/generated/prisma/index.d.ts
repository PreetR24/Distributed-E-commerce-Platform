
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ProductSearch
 * 
 */
export type ProductSearch = $Result.DefaultSelection<Prisma.$ProductSearchPayload>
/**
 * Model SearchAnalytics
 * 
 */
export type SearchAnalytics = $Result.DefaultSelection<Prisma.$SearchAnalyticsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ProductSearches
 * const productSearches = await prisma.productSearch.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ProductSearches
   * const productSearches = await prisma.productSearch.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.productSearch`: Exposes CRUD operations for the **ProductSearch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductSearches
    * const productSearches = await prisma.productSearch.findMany()
    * ```
    */
  get productSearch(): Prisma.ProductSearchDelegate<ExtArgs>;

  /**
   * `prisma.searchAnalytics`: Exposes CRUD operations for the **SearchAnalytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchAnalytics
    * const searchAnalytics = await prisma.searchAnalytics.findMany()
    * ```
    */
  get searchAnalytics(): Prisma.SearchAnalyticsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ProductSearch: 'ProductSearch',
    SearchAnalytics: 'SearchAnalytics'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "productSearch" | "searchAnalytics"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ProductSearch: {
        payload: Prisma.$ProductSearchPayload<ExtArgs>
        fields: Prisma.ProductSearchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductSearchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSearchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductSearchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSearchPayload>
          }
          findFirst: {
            args: Prisma.ProductSearchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSearchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductSearchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSearchPayload>
          }
          findMany: {
            args: Prisma.ProductSearchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSearchPayload>[]
          }
          create: {
            args: Prisma.ProductSearchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSearchPayload>
          }
          createMany: {
            args: Prisma.ProductSearchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductSearchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSearchPayload>[]
          }
          delete: {
            args: Prisma.ProductSearchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSearchPayload>
          }
          update: {
            args: Prisma.ProductSearchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSearchPayload>
          }
          deleteMany: {
            args: Prisma.ProductSearchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductSearchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductSearchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSearchPayload>
          }
          aggregate: {
            args: Prisma.ProductSearchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductSearch>
          }
          groupBy: {
            args: Prisma.ProductSearchGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductSearchGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductSearchCountArgs<ExtArgs>
            result: $Utils.Optional<ProductSearchCountAggregateOutputType> | number
          }
        }
      }
      SearchAnalytics: {
        payload: Prisma.$SearchAnalyticsPayload<ExtArgs>
        fields: Prisma.SearchAnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchAnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchAnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchAnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchAnalyticsPayload>
          }
          findFirst: {
            args: Prisma.SearchAnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchAnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchAnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchAnalyticsPayload>
          }
          findMany: {
            args: Prisma.SearchAnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchAnalyticsPayload>[]
          }
          create: {
            args: Prisma.SearchAnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchAnalyticsPayload>
          }
          createMany: {
            args: Prisma.SearchAnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchAnalyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchAnalyticsPayload>[]
          }
          delete: {
            args: Prisma.SearchAnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchAnalyticsPayload>
          }
          update: {
            args: Prisma.SearchAnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchAnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.SearchAnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchAnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SearchAnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchAnalyticsPayload>
          }
          aggregate: {
            args: Prisma.SearchAnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearchAnalytics>
          }
          groupBy: {
            args: Prisma.SearchAnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchAnalyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchAnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<SearchAnalyticsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ProductSearch
   */

  export type AggregateProductSearch = {
    _count: ProductSearchCountAggregateOutputType | null
    _avg: ProductSearchAvgAggregateOutputType | null
    _sum: ProductSearchSumAggregateOutputType | null
    _min: ProductSearchMinAggregateOutputType | null
    _max: ProductSearchMaxAggregateOutputType | null
  }

  export type ProductSearchAvgAggregateOutputType = {
    price: number | null
  }

  export type ProductSearchSumAggregateOutputType = {
    price: number | null
  }

  export type ProductSearchMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    categoryId: string | null
    categoryName: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductSearchMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    categoryId: string | null
    categoryName: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductSearchCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    categoryId: number
    categoryName: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductSearchAvgAggregateInputType = {
    price?: true
  }

  export type ProductSearchSumAggregateInputType = {
    price?: true
  }

  export type ProductSearchMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    categoryId?: true
    categoryName?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductSearchMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    categoryId?: true
    categoryName?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductSearchCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    categoryId?: true
    categoryName?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductSearchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSearch to aggregate.
     */
    where?: ProductSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSearches to fetch.
     */
    orderBy?: ProductSearchOrderByWithRelationInput | ProductSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductSearches
    **/
    _count?: true | ProductSearchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductSearchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSearchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductSearchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductSearchMaxAggregateInputType
  }

  export type GetProductSearchAggregateType<T extends ProductSearchAggregateArgs> = {
        [P in keyof T & keyof AggregateProductSearch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductSearch[P]>
      : GetScalarType<T[P], AggregateProductSearch[P]>
  }




  export type ProductSearchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSearchWhereInput
    orderBy?: ProductSearchOrderByWithAggregationInput | ProductSearchOrderByWithAggregationInput[]
    by: ProductSearchScalarFieldEnum[] | ProductSearchScalarFieldEnum
    having?: ProductSearchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductSearchCountAggregateInputType | true
    _avg?: ProductSearchAvgAggregateInputType
    _sum?: ProductSearchSumAggregateInputType
    _min?: ProductSearchMinAggregateInputType
    _max?: ProductSearchMaxAggregateInputType
  }

  export type ProductSearchGroupByOutputType = {
    id: string
    name: string
    description: string
    price: number
    categoryId: string
    categoryName: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductSearchCountAggregateOutputType | null
    _avg: ProductSearchAvgAggregateOutputType | null
    _sum: ProductSearchSumAggregateOutputType | null
    _min: ProductSearchMinAggregateOutputType | null
    _max: ProductSearchMaxAggregateOutputType | null
  }

  type GetProductSearchGroupByPayload<T extends ProductSearchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductSearchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductSearchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductSearchGroupByOutputType[P]>
            : GetScalarType<T[P], ProductSearchGroupByOutputType[P]>
        }
      >
    >


  export type ProductSearchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryId?: boolean
    categoryName?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["productSearch"]>

  export type ProductSearchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryId?: boolean
    categoryName?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["productSearch"]>

  export type ProductSearchSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryId?: boolean
    categoryName?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ProductSearchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductSearch"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      price: number
      categoryId: string
      categoryName: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productSearch"]>
    composites: {}
  }

  type ProductSearchGetPayload<S extends boolean | null | undefined | ProductSearchDefaultArgs> = $Result.GetResult<Prisma.$ProductSearchPayload, S>

  type ProductSearchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductSearchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductSearchCountAggregateInputType | true
    }

  export interface ProductSearchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductSearch'], meta: { name: 'ProductSearch' } }
    /**
     * Find zero or one ProductSearch that matches the filter.
     * @param {ProductSearchFindUniqueArgs} args - Arguments to find a ProductSearch
     * @example
     * // Get one ProductSearch
     * const productSearch = await prisma.productSearch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductSearchFindUniqueArgs>(args: SelectSubset<T, ProductSearchFindUniqueArgs<ExtArgs>>): Prisma__ProductSearchClient<$Result.GetResult<Prisma.$ProductSearchPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductSearch that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductSearchFindUniqueOrThrowArgs} args - Arguments to find a ProductSearch
     * @example
     * // Get one ProductSearch
     * const productSearch = await prisma.productSearch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductSearchFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductSearchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductSearchClient<$Result.GetResult<Prisma.$ProductSearchPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductSearch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSearchFindFirstArgs} args - Arguments to find a ProductSearch
     * @example
     * // Get one ProductSearch
     * const productSearch = await prisma.productSearch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductSearchFindFirstArgs>(args?: SelectSubset<T, ProductSearchFindFirstArgs<ExtArgs>>): Prisma__ProductSearchClient<$Result.GetResult<Prisma.$ProductSearchPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductSearch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSearchFindFirstOrThrowArgs} args - Arguments to find a ProductSearch
     * @example
     * // Get one ProductSearch
     * const productSearch = await prisma.productSearch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductSearchFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductSearchFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductSearchClient<$Result.GetResult<Prisma.$ProductSearchPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductSearches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSearchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductSearches
     * const productSearches = await prisma.productSearch.findMany()
     * 
     * // Get first 10 ProductSearches
     * const productSearches = await prisma.productSearch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productSearchWithIdOnly = await prisma.productSearch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductSearchFindManyArgs>(args?: SelectSubset<T, ProductSearchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSearchPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductSearch.
     * @param {ProductSearchCreateArgs} args - Arguments to create a ProductSearch.
     * @example
     * // Create one ProductSearch
     * const ProductSearch = await prisma.productSearch.create({
     *   data: {
     *     // ... data to create a ProductSearch
     *   }
     * })
     * 
     */
    create<T extends ProductSearchCreateArgs>(args: SelectSubset<T, ProductSearchCreateArgs<ExtArgs>>): Prisma__ProductSearchClient<$Result.GetResult<Prisma.$ProductSearchPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductSearches.
     * @param {ProductSearchCreateManyArgs} args - Arguments to create many ProductSearches.
     * @example
     * // Create many ProductSearches
     * const productSearch = await prisma.productSearch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductSearchCreateManyArgs>(args?: SelectSubset<T, ProductSearchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductSearches and returns the data saved in the database.
     * @param {ProductSearchCreateManyAndReturnArgs} args - Arguments to create many ProductSearches.
     * @example
     * // Create many ProductSearches
     * const productSearch = await prisma.productSearch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductSearches and only return the `id`
     * const productSearchWithIdOnly = await prisma.productSearch.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductSearchCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductSearchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSearchPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProductSearch.
     * @param {ProductSearchDeleteArgs} args - Arguments to delete one ProductSearch.
     * @example
     * // Delete one ProductSearch
     * const ProductSearch = await prisma.productSearch.delete({
     *   where: {
     *     // ... filter to delete one ProductSearch
     *   }
     * })
     * 
     */
    delete<T extends ProductSearchDeleteArgs>(args: SelectSubset<T, ProductSearchDeleteArgs<ExtArgs>>): Prisma__ProductSearchClient<$Result.GetResult<Prisma.$ProductSearchPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductSearch.
     * @param {ProductSearchUpdateArgs} args - Arguments to update one ProductSearch.
     * @example
     * // Update one ProductSearch
     * const productSearch = await prisma.productSearch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductSearchUpdateArgs>(args: SelectSubset<T, ProductSearchUpdateArgs<ExtArgs>>): Prisma__ProductSearchClient<$Result.GetResult<Prisma.$ProductSearchPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductSearches.
     * @param {ProductSearchDeleteManyArgs} args - Arguments to filter ProductSearches to delete.
     * @example
     * // Delete a few ProductSearches
     * const { count } = await prisma.productSearch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductSearchDeleteManyArgs>(args?: SelectSubset<T, ProductSearchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSearchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductSearches
     * const productSearch = await prisma.productSearch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductSearchUpdateManyArgs>(args: SelectSubset<T, ProductSearchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductSearch.
     * @param {ProductSearchUpsertArgs} args - Arguments to update or create a ProductSearch.
     * @example
     * // Update or create a ProductSearch
     * const productSearch = await prisma.productSearch.upsert({
     *   create: {
     *     // ... data to create a ProductSearch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductSearch we want to update
     *   }
     * })
     */
    upsert<T extends ProductSearchUpsertArgs>(args: SelectSubset<T, ProductSearchUpsertArgs<ExtArgs>>): Prisma__ProductSearchClient<$Result.GetResult<Prisma.$ProductSearchPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSearchCountArgs} args - Arguments to filter ProductSearches to count.
     * @example
     * // Count the number of ProductSearches
     * const count = await prisma.productSearch.count({
     *   where: {
     *     // ... the filter for the ProductSearches we want to count
     *   }
     * })
    **/
    count<T extends ProductSearchCountArgs>(
      args?: Subset<T, ProductSearchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductSearchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSearchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductSearchAggregateArgs>(args: Subset<T, ProductSearchAggregateArgs>): Prisma.PrismaPromise<GetProductSearchAggregateType<T>>

    /**
     * Group by ProductSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSearchGroupByArgs} args - Group by arguments.
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
      T extends ProductSearchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductSearchGroupByArgs['orderBy'] }
        : { orderBy?: ProductSearchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProductSearchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductSearchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductSearch model
   */
  readonly fields: ProductSearchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductSearch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductSearchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductSearch model
   */ 
  interface ProductSearchFieldRefs {
    readonly id: FieldRef<"ProductSearch", 'String'>
    readonly name: FieldRef<"ProductSearch", 'String'>
    readonly description: FieldRef<"ProductSearch", 'String'>
    readonly price: FieldRef<"ProductSearch", 'Float'>
    readonly categoryId: FieldRef<"ProductSearch", 'String'>
    readonly categoryName: FieldRef<"ProductSearch", 'String'>
    readonly isActive: FieldRef<"ProductSearch", 'Boolean'>
    readonly createdAt: FieldRef<"ProductSearch", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductSearch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductSearch findUnique
   */
  export type ProductSearchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSearch
     */
    select?: ProductSearchSelect<ExtArgs> | null
    /**
     * Filter, which ProductSearch to fetch.
     */
    where: ProductSearchWhereUniqueInput
  }

  /**
   * ProductSearch findUniqueOrThrow
   */
  export type ProductSearchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSearch
     */
    select?: ProductSearchSelect<ExtArgs> | null
    /**
     * Filter, which ProductSearch to fetch.
     */
    where: ProductSearchWhereUniqueInput
  }

  /**
   * ProductSearch findFirst
   */
  export type ProductSearchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSearch
     */
    select?: ProductSearchSelect<ExtArgs> | null
    /**
     * Filter, which ProductSearch to fetch.
     */
    where?: ProductSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSearches to fetch.
     */
    orderBy?: ProductSearchOrderByWithRelationInput | ProductSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSearches.
     */
    cursor?: ProductSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSearches.
     */
    distinct?: ProductSearchScalarFieldEnum | ProductSearchScalarFieldEnum[]
  }

  /**
   * ProductSearch findFirstOrThrow
   */
  export type ProductSearchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSearch
     */
    select?: ProductSearchSelect<ExtArgs> | null
    /**
     * Filter, which ProductSearch to fetch.
     */
    where?: ProductSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSearches to fetch.
     */
    orderBy?: ProductSearchOrderByWithRelationInput | ProductSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSearches.
     */
    cursor?: ProductSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSearches.
     */
    distinct?: ProductSearchScalarFieldEnum | ProductSearchScalarFieldEnum[]
  }

  /**
   * ProductSearch findMany
   */
  export type ProductSearchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSearch
     */
    select?: ProductSearchSelect<ExtArgs> | null
    /**
     * Filter, which ProductSearches to fetch.
     */
    where?: ProductSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSearches to fetch.
     */
    orderBy?: ProductSearchOrderByWithRelationInput | ProductSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductSearches.
     */
    cursor?: ProductSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSearches.
     */
    skip?: number
    distinct?: ProductSearchScalarFieldEnum | ProductSearchScalarFieldEnum[]
  }

  /**
   * ProductSearch create
   */
  export type ProductSearchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSearch
     */
    select?: ProductSearchSelect<ExtArgs> | null
    /**
     * The data needed to create a ProductSearch.
     */
    data: XOR<ProductSearchCreateInput, ProductSearchUncheckedCreateInput>
  }

  /**
   * ProductSearch createMany
   */
  export type ProductSearchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductSearches.
     */
    data: ProductSearchCreateManyInput | ProductSearchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductSearch createManyAndReturn
   */
  export type ProductSearchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSearch
     */
    select?: ProductSearchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductSearches.
     */
    data: ProductSearchCreateManyInput | ProductSearchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductSearch update
   */
  export type ProductSearchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSearch
     */
    select?: ProductSearchSelect<ExtArgs> | null
    /**
     * The data needed to update a ProductSearch.
     */
    data: XOR<ProductSearchUpdateInput, ProductSearchUncheckedUpdateInput>
    /**
     * Choose, which ProductSearch to update.
     */
    where: ProductSearchWhereUniqueInput
  }

  /**
   * ProductSearch updateMany
   */
  export type ProductSearchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductSearches.
     */
    data: XOR<ProductSearchUpdateManyMutationInput, ProductSearchUncheckedUpdateManyInput>
    /**
     * Filter which ProductSearches to update
     */
    where?: ProductSearchWhereInput
  }

  /**
   * ProductSearch upsert
   */
  export type ProductSearchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSearch
     */
    select?: ProductSearchSelect<ExtArgs> | null
    /**
     * The filter to search for the ProductSearch to update in case it exists.
     */
    where: ProductSearchWhereUniqueInput
    /**
     * In case the ProductSearch found by the `where` argument doesn't exist, create a new ProductSearch with this data.
     */
    create: XOR<ProductSearchCreateInput, ProductSearchUncheckedCreateInput>
    /**
     * In case the ProductSearch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductSearchUpdateInput, ProductSearchUncheckedUpdateInput>
  }

  /**
   * ProductSearch delete
   */
  export type ProductSearchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSearch
     */
    select?: ProductSearchSelect<ExtArgs> | null
    /**
     * Filter which ProductSearch to delete.
     */
    where: ProductSearchWhereUniqueInput
  }

  /**
   * ProductSearch deleteMany
   */
  export type ProductSearchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSearches to delete
     */
    where?: ProductSearchWhereInput
  }

  /**
   * ProductSearch without action
   */
  export type ProductSearchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSearch
     */
    select?: ProductSearchSelect<ExtArgs> | null
  }


  /**
   * Model SearchAnalytics
   */

  export type AggregateSearchAnalytics = {
    _count: SearchAnalyticsCountAggregateOutputType | null
    _avg: SearchAnalyticsAvgAggregateOutputType | null
    _sum: SearchAnalyticsSumAggregateOutputType | null
    _min: SearchAnalyticsMinAggregateOutputType | null
    _max: SearchAnalyticsMaxAggregateOutputType | null
  }

  export type SearchAnalyticsAvgAggregateOutputType = {
    totalSearches: number | null
  }

  export type SearchAnalyticsSumAggregateOutputType = {
    totalSearches: number | null
  }

  export type SearchAnalyticsMinAggregateOutputType = {
    id: string | null
    searchTerm: string | null
    totalSearches: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchAnalyticsMaxAggregateOutputType = {
    id: string | null
    searchTerm: string | null
    totalSearches: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchAnalyticsCountAggregateOutputType = {
    id: number
    searchTerm: number
    totalSearches: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SearchAnalyticsAvgAggregateInputType = {
    totalSearches?: true
  }

  export type SearchAnalyticsSumAggregateInputType = {
    totalSearches?: true
  }

  export type SearchAnalyticsMinAggregateInputType = {
    id?: true
    searchTerm?: true
    totalSearches?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchAnalyticsMaxAggregateInputType = {
    id?: true
    searchTerm?: true
    totalSearches?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchAnalyticsCountAggregateInputType = {
    id?: true
    searchTerm?: true
    totalSearches?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SearchAnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchAnalytics to aggregate.
     */
    where?: SearchAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchAnalytics to fetch.
     */
    orderBy?: SearchAnalyticsOrderByWithRelationInput | SearchAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchAnalytics
    **/
    _count?: true | SearchAnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SearchAnalyticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SearchAnalyticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchAnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchAnalyticsMaxAggregateInputType
  }

  export type GetSearchAnalyticsAggregateType<T extends SearchAnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchAnalytics[P]>
      : GetScalarType<T[P], AggregateSearchAnalytics[P]>
  }




  export type SearchAnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchAnalyticsWhereInput
    orderBy?: SearchAnalyticsOrderByWithAggregationInput | SearchAnalyticsOrderByWithAggregationInput[]
    by: SearchAnalyticsScalarFieldEnum[] | SearchAnalyticsScalarFieldEnum
    having?: SearchAnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchAnalyticsCountAggregateInputType | true
    _avg?: SearchAnalyticsAvgAggregateInputType
    _sum?: SearchAnalyticsSumAggregateInputType
    _min?: SearchAnalyticsMinAggregateInputType
    _max?: SearchAnalyticsMaxAggregateInputType
  }

  export type SearchAnalyticsGroupByOutputType = {
    id: string
    searchTerm: string
    totalSearches: number
    createdAt: Date
    updatedAt: Date
    _count: SearchAnalyticsCountAggregateOutputType | null
    _avg: SearchAnalyticsAvgAggregateOutputType | null
    _sum: SearchAnalyticsSumAggregateOutputType | null
    _min: SearchAnalyticsMinAggregateOutputType | null
    _max: SearchAnalyticsMaxAggregateOutputType | null
  }

  type GetSearchAnalyticsGroupByPayload<T extends SearchAnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchAnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchAnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchAnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], SearchAnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type SearchAnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    searchTerm?: boolean
    totalSearches?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["searchAnalytics"]>

  export type SearchAnalyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    searchTerm?: boolean
    totalSearches?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["searchAnalytics"]>

  export type SearchAnalyticsSelectScalar = {
    id?: boolean
    searchTerm?: boolean
    totalSearches?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SearchAnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchAnalytics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      searchTerm: string
      totalSearches: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["searchAnalytics"]>
    composites: {}
  }

  type SearchAnalyticsGetPayload<S extends boolean | null | undefined | SearchAnalyticsDefaultArgs> = $Result.GetResult<Prisma.$SearchAnalyticsPayload, S>

  type SearchAnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SearchAnalyticsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SearchAnalyticsCountAggregateInputType | true
    }

  export interface SearchAnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchAnalytics'], meta: { name: 'SearchAnalytics' } }
    /**
     * Find zero or one SearchAnalytics that matches the filter.
     * @param {SearchAnalyticsFindUniqueArgs} args - Arguments to find a SearchAnalytics
     * @example
     * // Get one SearchAnalytics
     * const searchAnalytics = await prisma.searchAnalytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchAnalyticsFindUniqueArgs>(args: SelectSubset<T, SearchAnalyticsFindUniqueArgs<ExtArgs>>): Prisma__SearchAnalyticsClient<$Result.GetResult<Prisma.$SearchAnalyticsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SearchAnalytics that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SearchAnalyticsFindUniqueOrThrowArgs} args - Arguments to find a SearchAnalytics
     * @example
     * // Get one SearchAnalytics
     * const searchAnalytics = await prisma.searchAnalytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchAnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchAnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchAnalyticsClient<$Result.GetResult<Prisma.$SearchAnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SearchAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchAnalyticsFindFirstArgs} args - Arguments to find a SearchAnalytics
     * @example
     * // Get one SearchAnalytics
     * const searchAnalytics = await prisma.searchAnalytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchAnalyticsFindFirstArgs>(args?: SelectSubset<T, SearchAnalyticsFindFirstArgs<ExtArgs>>): Prisma__SearchAnalyticsClient<$Result.GetResult<Prisma.$SearchAnalyticsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SearchAnalytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchAnalyticsFindFirstOrThrowArgs} args - Arguments to find a SearchAnalytics
     * @example
     * // Get one SearchAnalytics
     * const searchAnalytics = await prisma.searchAnalytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchAnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchAnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchAnalyticsClient<$Result.GetResult<Prisma.$SearchAnalyticsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SearchAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchAnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchAnalytics
     * const searchAnalytics = await prisma.searchAnalytics.findMany()
     * 
     * // Get first 10 SearchAnalytics
     * const searchAnalytics = await prisma.searchAnalytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchAnalyticsWithIdOnly = await prisma.searchAnalytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchAnalyticsFindManyArgs>(args?: SelectSubset<T, SearchAnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchAnalyticsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SearchAnalytics.
     * @param {SearchAnalyticsCreateArgs} args - Arguments to create a SearchAnalytics.
     * @example
     * // Create one SearchAnalytics
     * const SearchAnalytics = await prisma.searchAnalytics.create({
     *   data: {
     *     // ... data to create a SearchAnalytics
     *   }
     * })
     * 
     */
    create<T extends SearchAnalyticsCreateArgs>(args: SelectSubset<T, SearchAnalyticsCreateArgs<ExtArgs>>): Prisma__SearchAnalyticsClient<$Result.GetResult<Prisma.$SearchAnalyticsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SearchAnalytics.
     * @param {SearchAnalyticsCreateManyArgs} args - Arguments to create many SearchAnalytics.
     * @example
     * // Create many SearchAnalytics
     * const searchAnalytics = await prisma.searchAnalytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchAnalyticsCreateManyArgs>(args?: SelectSubset<T, SearchAnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SearchAnalytics and returns the data saved in the database.
     * @param {SearchAnalyticsCreateManyAndReturnArgs} args - Arguments to create many SearchAnalytics.
     * @example
     * // Create many SearchAnalytics
     * const searchAnalytics = await prisma.searchAnalytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SearchAnalytics and only return the `id`
     * const searchAnalyticsWithIdOnly = await prisma.searchAnalytics.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchAnalyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchAnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchAnalyticsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SearchAnalytics.
     * @param {SearchAnalyticsDeleteArgs} args - Arguments to delete one SearchAnalytics.
     * @example
     * // Delete one SearchAnalytics
     * const SearchAnalytics = await prisma.searchAnalytics.delete({
     *   where: {
     *     // ... filter to delete one SearchAnalytics
     *   }
     * })
     * 
     */
    delete<T extends SearchAnalyticsDeleteArgs>(args: SelectSubset<T, SearchAnalyticsDeleteArgs<ExtArgs>>): Prisma__SearchAnalyticsClient<$Result.GetResult<Prisma.$SearchAnalyticsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SearchAnalytics.
     * @param {SearchAnalyticsUpdateArgs} args - Arguments to update one SearchAnalytics.
     * @example
     * // Update one SearchAnalytics
     * const searchAnalytics = await prisma.searchAnalytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchAnalyticsUpdateArgs>(args: SelectSubset<T, SearchAnalyticsUpdateArgs<ExtArgs>>): Prisma__SearchAnalyticsClient<$Result.GetResult<Prisma.$SearchAnalyticsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SearchAnalytics.
     * @param {SearchAnalyticsDeleteManyArgs} args - Arguments to filter SearchAnalytics to delete.
     * @example
     * // Delete a few SearchAnalytics
     * const { count } = await prisma.searchAnalytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchAnalyticsDeleteManyArgs>(args?: SelectSubset<T, SearchAnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchAnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchAnalytics
     * const searchAnalytics = await prisma.searchAnalytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchAnalyticsUpdateManyArgs>(args: SelectSubset<T, SearchAnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SearchAnalytics.
     * @param {SearchAnalyticsUpsertArgs} args - Arguments to update or create a SearchAnalytics.
     * @example
     * // Update or create a SearchAnalytics
     * const searchAnalytics = await prisma.searchAnalytics.upsert({
     *   create: {
     *     // ... data to create a SearchAnalytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchAnalytics we want to update
     *   }
     * })
     */
    upsert<T extends SearchAnalyticsUpsertArgs>(args: SelectSubset<T, SearchAnalyticsUpsertArgs<ExtArgs>>): Prisma__SearchAnalyticsClient<$Result.GetResult<Prisma.$SearchAnalyticsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SearchAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchAnalyticsCountArgs} args - Arguments to filter SearchAnalytics to count.
     * @example
     * // Count the number of SearchAnalytics
     * const count = await prisma.searchAnalytics.count({
     *   where: {
     *     // ... the filter for the SearchAnalytics we want to count
     *   }
     * })
    **/
    count<T extends SearchAnalyticsCountArgs>(
      args?: Subset<T, SearchAnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchAnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchAnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SearchAnalyticsAggregateArgs>(args: Subset<T, SearchAnalyticsAggregateArgs>): Prisma.PrismaPromise<GetSearchAnalyticsAggregateType<T>>

    /**
     * Group by SearchAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchAnalyticsGroupByArgs} args - Group by arguments.
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
      T extends SearchAnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchAnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: SearchAnalyticsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SearchAnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchAnalytics model
   */
  readonly fields: SearchAnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchAnalytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchAnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SearchAnalytics model
   */ 
  interface SearchAnalyticsFieldRefs {
    readonly id: FieldRef<"SearchAnalytics", 'String'>
    readonly searchTerm: FieldRef<"SearchAnalytics", 'String'>
    readonly totalSearches: FieldRef<"SearchAnalytics", 'Int'>
    readonly createdAt: FieldRef<"SearchAnalytics", 'DateTime'>
    readonly updatedAt: FieldRef<"SearchAnalytics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SearchAnalytics findUnique
   */
  export type SearchAnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchAnalytics
     */
    select?: SearchAnalyticsSelect<ExtArgs> | null
    /**
     * Filter, which SearchAnalytics to fetch.
     */
    where: SearchAnalyticsWhereUniqueInput
  }

  /**
   * SearchAnalytics findUniqueOrThrow
   */
  export type SearchAnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchAnalytics
     */
    select?: SearchAnalyticsSelect<ExtArgs> | null
    /**
     * Filter, which SearchAnalytics to fetch.
     */
    where: SearchAnalyticsWhereUniqueInput
  }

  /**
   * SearchAnalytics findFirst
   */
  export type SearchAnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchAnalytics
     */
    select?: SearchAnalyticsSelect<ExtArgs> | null
    /**
     * Filter, which SearchAnalytics to fetch.
     */
    where?: SearchAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchAnalytics to fetch.
     */
    orderBy?: SearchAnalyticsOrderByWithRelationInput | SearchAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchAnalytics.
     */
    cursor?: SearchAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchAnalytics.
     */
    distinct?: SearchAnalyticsScalarFieldEnum | SearchAnalyticsScalarFieldEnum[]
  }

  /**
   * SearchAnalytics findFirstOrThrow
   */
  export type SearchAnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchAnalytics
     */
    select?: SearchAnalyticsSelect<ExtArgs> | null
    /**
     * Filter, which SearchAnalytics to fetch.
     */
    where?: SearchAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchAnalytics to fetch.
     */
    orderBy?: SearchAnalyticsOrderByWithRelationInput | SearchAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchAnalytics.
     */
    cursor?: SearchAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchAnalytics.
     */
    distinct?: SearchAnalyticsScalarFieldEnum | SearchAnalyticsScalarFieldEnum[]
  }

  /**
   * SearchAnalytics findMany
   */
  export type SearchAnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchAnalytics
     */
    select?: SearchAnalyticsSelect<ExtArgs> | null
    /**
     * Filter, which SearchAnalytics to fetch.
     */
    where?: SearchAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchAnalytics to fetch.
     */
    orderBy?: SearchAnalyticsOrderByWithRelationInput | SearchAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchAnalytics.
     */
    cursor?: SearchAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchAnalytics.
     */
    skip?: number
    distinct?: SearchAnalyticsScalarFieldEnum | SearchAnalyticsScalarFieldEnum[]
  }

  /**
   * SearchAnalytics create
   */
  export type SearchAnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchAnalytics
     */
    select?: SearchAnalyticsSelect<ExtArgs> | null
    /**
     * The data needed to create a SearchAnalytics.
     */
    data: XOR<SearchAnalyticsCreateInput, SearchAnalyticsUncheckedCreateInput>
  }

  /**
   * SearchAnalytics createMany
   */
  export type SearchAnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchAnalytics.
     */
    data: SearchAnalyticsCreateManyInput | SearchAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchAnalytics createManyAndReturn
   */
  export type SearchAnalyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchAnalytics
     */
    select?: SearchAnalyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SearchAnalytics.
     */
    data: SearchAnalyticsCreateManyInput | SearchAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchAnalytics update
   */
  export type SearchAnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchAnalytics
     */
    select?: SearchAnalyticsSelect<ExtArgs> | null
    /**
     * The data needed to update a SearchAnalytics.
     */
    data: XOR<SearchAnalyticsUpdateInput, SearchAnalyticsUncheckedUpdateInput>
    /**
     * Choose, which SearchAnalytics to update.
     */
    where: SearchAnalyticsWhereUniqueInput
  }

  /**
   * SearchAnalytics updateMany
   */
  export type SearchAnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchAnalytics.
     */
    data: XOR<SearchAnalyticsUpdateManyMutationInput, SearchAnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which SearchAnalytics to update
     */
    where?: SearchAnalyticsWhereInput
  }

  /**
   * SearchAnalytics upsert
   */
  export type SearchAnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchAnalytics
     */
    select?: SearchAnalyticsSelect<ExtArgs> | null
    /**
     * The filter to search for the SearchAnalytics to update in case it exists.
     */
    where: SearchAnalyticsWhereUniqueInput
    /**
     * In case the SearchAnalytics found by the `where` argument doesn't exist, create a new SearchAnalytics with this data.
     */
    create: XOR<SearchAnalyticsCreateInput, SearchAnalyticsUncheckedCreateInput>
    /**
     * In case the SearchAnalytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchAnalyticsUpdateInput, SearchAnalyticsUncheckedUpdateInput>
  }

  /**
   * SearchAnalytics delete
   */
  export type SearchAnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchAnalytics
     */
    select?: SearchAnalyticsSelect<ExtArgs> | null
    /**
     * Filter which SearchAnalytics to delete.
     */
    where: SearchAnalyticsWhereUniqueInput
  }

  /**
   * SearchAnalytics deleteMany
   */
  export type SearchAnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchAnalytics to delete
     */
    where?: SearchAnalyticsWhereInput
  }

  /**
   * SearchAnalytics without action
   */
  export type SearchAnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchAnalytics
     */
    select?: SearchAnalyticsSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductSearchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    categoryId: 'categoryId',
    categoryName: 'categoryName',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductSearchScalarFieldEnum = (typeof ProductSearchScalarFieldEnum)[keyof typeof ProductSearchScalarFieldEnum]


  export const SearchAnalyticsScalarFieldEnum: {
    id: 'id',
    searchTerm: 'searchTerm',
    totalSearches: 'totalSearches',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SearchAnalyticsScalarFieldEnum = (typeof SearchAnalyticsScalarFieldEnum)[keyof typeof SearchAnalyticsScalarFieldEnum]


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
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductSearchWhereInput = {
    AND?: ProductSearchWhereInput | ProductSearchWhereInput[]
    OR?: ProductSearchWhereInput[]
    NOT?: ProductSearchWhereInput | ProductSearchWhereInput[]
    id?: StringFilter<"ProductSearch"> | string
    name?: StringFilter<"ProductSearch"> | string
    description?: StringFilter<"ProductSearch"> | string
    price?: FloatFilter<"ProductSearch"> | number
    categoryId?: StringFilter<"ProductSearch"> | string
    categoryName?: StringFilter<"ProductSearch"> | string
    isActive?: BoolFilter<"ProductSearch"> | boolean
    createdAt?: DateTimeFilter<"ProductSearch"> | Date | string
    updatedAt?: DateTimeFilter<"ProductSearch"> | Date | string
  }

  export type ProductSearchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSearchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductSearchWhereInput | ProductSearchWhereInput[]
    OR?: ProductSearchWhereInput[]
    NOT?: ProductSearchWhereInput | ProductSearchWhereInput[]
    name?: StringFilter<"ProductSearch"> | string
    description?: StringFilter<"ProductSearch"> | string
    price?: FloatFilter<"ProductSearch"> | number
    categoryId?: StringFilter<"ProductSearch"> | string
    categoryName?: StringFilter<"ProductSearch"> | string
    isActive?: BoolFilter<"ProductSearch"> | boolean
    createdAt?: DateTimeFilter<"ProductSearch"> | Date | string
    updatedAt?: DateTimeFilter<"ProductSearch"> | Date | string
  }, "id">

  export type ProductSearchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductSearchCountOrderByAggregateInput
    _avg?: ProductSearchAvgOrderByAggregateInput
    _max?: ProductSearchMaxOrderByAggregateInput
    _min?: ProductSearchMinOrderByAggregateInput
    _sum?: ProductSearchSumOrderByAggregateInput
  }

  export type ProductSearchScalarWhereWithAggregatesInput = {
    AND?: ProductSearchScalarWhereWithAggregatesInput | ProductSearchScalarWhereWithAggregatesInput[]
    OR?: ProductSearchScalarWhereWithAggregatesInput[]
    NOT?: ProductSearchScalarWhereWithAggregatesInput | ProductSearchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductSearch"> | string
    name?: StringWithAggregatesFilter<"ProductSearch"> | string
    description?: StringWithAggregatesFilter<"ProductSearch"> | string
    price?: FloatWithAggregatesFilter<"ProductSearch"> | number
    categoryId?: StringWithAggregatesFilter<"ProductSearch"> | string
    categoryName?: StringWithAggregatesFilter<"ProductSearch"> | string
    isActive?: BoolWithAggregatesFilter<"ProductSearch"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProductSearch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductSearch"> | Date | string
  }

  export type SearchAnalyticsWhereInput = {
    AND?: SearchAnalyticsWhereInput | SearchAnalyticsWhereInput[]
    OR?: SearchAnalyticsWhereInput[]
    NOT?: SearchAnalyticsWhereInput | SearchAnalyticsWhereInput[]
    id?: StringFilter<"SearchAnalytics"> | string
    searchTerm?: StringFilter<"SearchAnalytics"> | string
    totalSearches?: IntFilter<"SearchAnalytics"> | number
    createdAt?: DateTimeFilter<"SearchAnalytics"> | Date | string
    updatedAt?: DateTimeFilter<"SearchAnalytics"> | Date | string
  }

  export type SearchAnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    searchTerm?: SortOrder
    totalSearches?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchAnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    searchTerm?: string
    AND?: SearchAnalyticsWhereInput | SearchAnalyticsWhereInput[]
    OR?: SearchAnalyticsWhereInput[]
    NOT?: SearchAnalyticsWhereInput | SearchAnalyticsWhereInput[]
    totalSearches?: IntFilter<"SearchAnalytics"> | number
    createdAt?: DateTimeFilter<"SearchAnalytics"> | Date | string
    updatedAt?: DateTimeFilter<"SearchAnalytics"> | Date | string
  }, "id" | "searchTerm">

  export type SearchAnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    searchTerm?: SortOrder
    totalSearches?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SearchAnalyticsCountOrderByAggregateInput
    _avg?: SearchAnalyticsAvgOrderByAggregateInput
    _max?: SearchAnalyticsMaxOrderByAggregateInput
    _min?: SearchAnalyticsMinOrderByAggregateInput
    _sum?: SearchAnalyticsSumOrderByAggregateInput
  }

  export type SearchAnalyticsScalarWhereWithAggregatesInput = {
    AND?: SearchAnalyticsScalarWhereWithAggregatesInput | SearchAnalyticsScalarWhereWithAggregatesInput[]
    OR?: SearchAnalyticsScalarWhereWithAggregatesInput[]
    NOT?: SearchAnalyticsScalarWhereWithAggregatesInput | SearchAnalyticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SearchAnalytics"> | string
    searchTerm?: StringWithAggregatesFilter<"SearchAnalytics"> | string
    totalSearches?: IntWithAggregatesFilter<"SearchAnalytics"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SearchAnalytics"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SearchAnalytics"> | Date | string
  }

  export type ProductSearchCreateInput = {
    id: string
    name: string
    description: string
    price: number
    categoryId: string
    categoryName: string
    isActive: boolean
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ProductSearchUncheckedCreateInput = {
    id: string
    name: string
    description: string
    price: number
    categoryId: string
    categoryName: string
    isActive: boolean
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ProductSearchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSearchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSearchCreateManyInput = {
    id: string
    name: string
    description: string
    price: number
    categoryId: string
    categoryName: string
    isActive: boolean
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type ProductSearchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSearchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchAnalyticsCreateInput = {
    id?: string
    searchTerm: string
    totalSearches?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchAnalyticsUncheckedCreateInput = {
    id?: string
    searchTerm: string
    totalSearches?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchAnalyticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchTerm?: StringFieldUpdateOperationsInput | string
    totalSearches?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchAnalyticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchTerm?: StringFieldUpdateOperationsInput | string
    totalSearches?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchAnalyticsCreateManyInput = {
    id?: string
    searchTerm: string
    totalSearches?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchAnalyticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchTerm?: StringFieldUpdateOperationsInput | string
    totalSearches?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchAnalyticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    searchTerm?: StringFieldUpdateOperationsInput | string
    totalSearches?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductSearchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSearchAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductSearchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSearchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSearchSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SearchAnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    searchTerm?: SortOrder
    totalSearches?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchAnalyticsAvgOrderByAggregateInput = {
    totalSearches?: SortOrder
  }

  export type SearchAnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    searchTerm?: SortOrder
    totalSearches?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchAnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    searchTerm?: SortOrder
    totalSearches?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchAnalyticsSumOrderByAggregateInput = {
    totalSearches?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProductSearchDefaultArgs instead
     */
    export type ProductSearchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductSearchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SearchAnalyticsDefaultArgs instead
     */
    export type SearchAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SearchAnalyticsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}