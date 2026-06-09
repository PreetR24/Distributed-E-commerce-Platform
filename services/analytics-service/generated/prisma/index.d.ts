
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
 * Model AnalyticsMetric
 * 
 */
export type AnalyticsMetric = $Result.DefaultSelection<Prisma.$AnalyticsMetricPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AnalyticsMetrics
 * const analyticsMetrics = await prisma.analyticsMetric.findMany()
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
   * // Fetch zero or more AnalyticsMetrics
   * const analyticsMetrics = await prisma.analyticsMetric.findMany()
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
   * `prisma.analyticsMetric`: Exposes CRUD operations for the **AnalyticsMetric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalyticsMetrics
    * const analyticsMetrics = await prisma.analyticsMetric.findMany()
    * ```
    */
  get analyticsMetric(): Prisma.AnalyticsMetricDelegate<ExtArgs>;
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
    AnalyticsMetric: 'AnalyticsMetric'
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
      modelProps: "analyticsMetric"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AnalyticsMetric: {
        payload: Prisma.$AnalyticsMetricPayload<ExtArgs>
        fields: Prisma.AnalyticsMetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsMetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsMetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsMetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsMetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload>
          }
          findMany: {
            args: Prisma.AnalyticsMetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload>[]
          }
          create: {
            args: Prisma.AnalyticsMetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload>
          }
          createMany: {
            args: Prisma.AnalyticsMetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyticsMetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload>[]
          }
          delete: {
            args: Prisma.AnalyticsMetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload>
          }
          update: {
            args: Prisma.AnalyticsMetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsMetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsMetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnalyticsMetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsMetricPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsMetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalyticsMetric>
          }
          groupBy: {
            args: Prisma.AnalyticsMetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsMetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsMetricCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsMetricCountAggregateOutputType> | number
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
   * Model AnalyticsMetric
   */

  export type AggregateAnalyticsMetric = {
    _count: AnalyticsMetricCountAggregateOutputType | null
    _avg: AnalyticsMetricAvgAggregateOutputType | null
    _sum: AnalyticsMetricSumAggregateOutputType | null
    _min: AnalyticsMetricMinAggregateOutputType | null
    _max: AnalyticsMetricMaxAggregateOutputType | null
  }

  export type AnalyticsMetricAvgAggregateOutputType = {
    totalRevenue: number | null
    totalOrders: number | null
    successfulPayments: number | null
    failedPayments: number | null
    totalProducts: number | null
  }

  export type AnalyticsMetricSumAggregateOutputType = {
    totalRevenue: number | null
    totalOrders: number | null
    successfulPayments: number | null
    failedPayments: number | null
    totalProducts: number | null
  }

  export type AnalyticsMetricMinAggregateOutputType = {
    id: string | null
    totalRevenue: number | null
    totalOrders: number | null
    successfulPayments: number | null
    failedPayments: number | null
    totalProducts: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnalyticsMetricMaxAggregateOutputType = {
    id: string | null
    totalRevenue: number | null
    totalOrders: number | null
    successfulPayments: number | null
    failedPayments: number | null
    totalProducts: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnalyticsMetricCountAggregateOutputType = {
    id: number
    totalRevenue: number
    totalOrders: number
    successfulPayments: number
    failedPayments: number
    totalProducts: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnalyticsMetricAvgAggregateInputType = {
    totalRevenue?: true
    totalOrders?: true
    successfulPayments?: true
    failedPayments?: true
    totalProducts?: true
  }

  export type AnalyticsMetricSumAggregateInputType = {
    totalRevenue?: true
    totalOrders?: true
    successfulPayments?: true
    failedPayments?: true
    totalProducts?: true
  }

  export type AnalyticsMetricMinAggregateInputType = {
    id?: true
    totalRevenue?: true
    totalOrders?: true
    successfulPayments?: true
    failedPayments?: true
    totalProducts?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnalyticsMetricMaxAggregateInputType = {
    id?: true
    totalRevenue?: true
    totalOrders?: true
    successfulPayments?: true
    failedPayments?: true
    totalProducts?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnalyticsMetricCountAggregateInputType = {
    id?: true
    totalRevenue?: true
    totalOrders?: true
    successfulPayments?: true
    failedPayments?: true
    totalProducts?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnalyticsMetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsMetric to aggregate.
     */
    where?: AnalyticsMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsMetrics to fetch.
     */
    orderBy?: AnalyticsMetricOrderByWithRelationInput | AnalyticsMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalyticsMetrics
    **/
    _count?: true | AnalyticsMetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalyticsMetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalyticsMetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsMetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsMetricMaxAggregateInputType
  }

  export type GetAnalyticsMetricAggregateType<T extends AnalyticsMetricAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalyticsMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalyticsMetric[P]>
      : GetScalarType<T[P], AggregateAnalyticsMetric[P]>
  }




  export type AnalyticsMetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsMetricWhereInput
    orderBy?: AnalyticsMetricOrderByWithAggregationInput | AnalyticsMetricOrderByWithAggregationInput[]
    by: AnalyticsMetricScalarFieldEnum[] | AnalyticsMetricScalarFieldEnum
    having?: AnalyticsMetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsMetricCountAggregateInputType | true
    _avg?: AnalyticsMetricAvgAggregateInputType
    _sum?: AnalyticsMetricSumAggregateInputType
    _min?: AnalyticsMetricMinAggregateInputType
    _max?: AnalyticsMetricMaxAggregateInputType
  }

  export type AnalyticsMetricGroupByOutputType = {
    id: string
    totalRevenue: number
    totalOrders: number
    successfulPayments: number
    failedPayments: number
    totalProducts: number
    createdAt: Date
    updatedAt: Date
    _count: AnalyticsMetricCountAggregateOutputType | null
    _avg: AnalyticsMetricAvgAggregateOutputType | null
    _sum: AnalyticsMetricSumAggregateOutputType | null
    _min: AnalyticsMetricMinAggregateOutputType | null
    _max: AnalyticsMetricMaxAggregateOutputType | null
  }

  type GetAnalyticsMetricGroupByPayload<T extends AnalyticsMetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsMetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsMetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsMetricGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsMetricGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsMetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalRevenue?: boolean
    totalOrders?: boolean
    successfulPayments?: boolean
    failedPayments?: boolean
    totalProducts?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["analyticsMetric"]>

  export type AnalyticsMetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalRevenue?: boolean
    totalOrders?: boolean
    successfulPayments?: boolean
    failedPayments?: boolean
    totalProducts?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["analyticsMetric"]>

  export type AnalyticsMetricSelectScalar = {
    id?: boolean
    totalRevenue?: boolean
    totalOrders?: boolean
    successfulPayments?: boolean
    failedPayments?: boolean
    totalProducts?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AnalyticsMetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalyticsMetric"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      totalRevenue: number
      totalOrders: number
      successfulPayments: number
      failedPayments: number
      totalProducts: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["analyticsMetric"]>
    composites: {}
  }

  type AnalyticsMetricGetPayload<S extends boolean | null | undefined | AnalyticsMetricDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsMetricPayload, S>

  type AnalyticsMetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnalyticsMetricFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnalyticsMetricCountAggregateInputType | true
    }

  export interface AnalyticsMetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalyticsMetric'], meta: { name: 'AnalyticsMetric' } }
    /**
     * Find zero or one AnalyticsMetric that matches the filter.
     * @param {AnalyticsMetricFindUniqueArgs} args - Arguments to find a AnalyticsMetric
     * @example
     * // Get one AnalyticsMetric
     * const analyticsMetric = await prisma.analyticsMetric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsMetricFindUniqueArgs>(args: SelectSubset<T, AnalyticsMetricFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsMetricClient<$Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AnalyticsMetric that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AnalyticsMetricFindUniqueOrThrowArgs} args - Arguments to find a AnalyticsMetric
     * @example
     * // Get one AnalyticsMetric
     * const analyticsMetric = await prisma.analyticsMetric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsMetricFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsMetricClient<$Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AnalyticsMetric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsMetricFindFirstArgs} args - Arguments to find a AnalyticsMetric
     * @example
     * // Get one AnalyticsMetric
     * const analyticsMetric = await prisma.analyticsMetric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsMetricFindFirstArgs>(args?: SelectSubset<T, AnalyticsMetricFindFirstArgs<ExtArgs>>): Prisma__AnalyticsMetricClient<$Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AnalyticsMetric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsMetricFindFirstOrThrowArgs} args - Arguments to find a AnalyticsMetric
     * @example
     * // Get one AnalyticsMetric
     * const analyticsMetric = await prisma.analyticsMetric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsMetricFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsMetricClient<$Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AnalyticsMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsMetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalyticsMetrics
     * const analyticsMetrics = await prisma.analyticsMetric.findMany()
     * 
     * // Get first 10 AnalyticsMetrics
     * const analyticsMetrics = await prisma.analyticsMetric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsMetricWithIdOnly = await prisma.analyticsMetric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsMetricFindManyArgs>(args?: SelectSubset<T, AnalyticsMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AnalyticsMetric.
     * @param {AnalyticsMetricCreateArgs} args - Arguments to create a AnalyticsMetric.
     * @example
     * // Create one AnalyticsMetric
     * const AnalyticsMetric = await prisma.analyticsMetric.create({
     *   data: {
     *     // ... data to create a AnalyticsMetric
     *   }
     * })
     * 
     */
    create<T extends AnalyticsMetricCreateArgs>(args: SelectSubset<T, AnalyticsMetricCreateArgs<ExtArgs>>): Prisma__AnalyticsMetricClient<$Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AnalyticsMetrics.
     * @param {AnalyticsMetricCreateManyArgs} args - Arguments to create many AnalyticsMetrics.
     * @example
     * // Create many AnalyticsMetrics
     * const analyticsMetric = await prisma.analyticsMetric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsMetricCreateManyArgs>(args?: SelectSubset<T, AnalyticsMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalyticsMetrics and returns the data saved in the database.
     * @param {AnalyticsMetricCreateManyAndReturnArgs} args - Arguments to create many AnalyticsMetrics.
     * @example
     * // Create many AnalyticsMetrics
     * const analyticsMetric = await prisma.analyticsMetric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalyticsMetrics and only return the `id`
     * const analyticsMetricWithIdOnly = await prisma.analyticsMetric.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyticsMetricCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyticsMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AnalyticsMetric.
     * @param {AnalyticsMetricDeleteArgs} args - Arguments to delete one AnalyticsMetric.
     * @example
     * // Delete one AnalyticsMetric
     * const AnalyticsMetric = await prisma.analyticsMetric.delete({
     *   where: {
     *     // ... filter to delete one AnalyticsMetric
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsMetricDeleteArgs>(args: SelectSubset<T, AnalyticsMetricDeleteArgs<ExtArgs>>): Prisma__AnalyticsMetricClient<$Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AnalyticsMetric.
     * @param {AnalyticsMetricUpdateArgs} args - Arguments to update one AnalyticsMetric.
     * @example
     * // Update one AnalyticsMetric
     * const analyticsMetric = await prisma.analyticsMetric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsMetricUpdateArgs>(args: SelectSubset<T, AnalyticsMetricUpdateArgs<ExtArgs>>): Prisma__AnalyticsMetricClient<$Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AnalyticsMetrics.
     * @param {AnalyticsMetricDeleteManyArgs} args - Arguments to filter AnalyticsMetrics to delete.
     * @example
     * // Delete a few AnalyticsMetrics
     * const { count } = await prisma.analyticsMetric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsMetricDeleteManyArgs>(args?: SelectSubset<T, AnalyticsMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsMetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalyticsMetrics
     * const analyticsMetric = await prisma.analyticsMetric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsMetricUpdateManyArgs>(args: SelectSubset<T, AnalyticsMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AnalyticsMetric.
     * @param {AnalyticsMetricUpsertArgs} args - Arguments to update or create a AnalyticsMetric.
     * @example
     * // Update or create a AnalyticsMetric
     * const analyticsMetric = await prisma.analyticsMetric.upsert({
     *   create: {
     *     // ... data to create a AnalyticsMetric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalyticsMetric we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsMetricUpsertArgs>(args: SelectSubset<T, AnalyticsMetricUpsertArgs<ExtArgs>>): Prisma__AnalyticsMetricClient<$Result.GetResult<Prisma.$AnalyticsMetricPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AnalyticsMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsMetricCountArgs} args - Arguments to filter AnalyticsMetrics to count.
     * @example
     * // Count the number of AnalyticsMetrics
     * const count = await prisma.analyticsMetric.count({
     *   where: {
     *     // ... the filter for the AnalyticsMetrics we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsMetricCountArgs>(
      args?: Subset<T, AnalyticsMetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsMetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalyticsMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsMetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalyticsMetricAggregateArgs>(args: Subset<T, AnalyticsMetricAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsMetricAggregateType<T>>

    /**
     * Group by AnalyticsMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsMetricGroupByArgs} args - Group by arguments.
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
      T extends AnalyticsMetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsMetricGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsMetricGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalyticsMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalyticsMetric model
   */
  readonly fields: AnalyticsMetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalyticsMetric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsMetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AnalyticsMetric model
   */ 
  interface AnalyticsMetricFieldRefs {
    readonly id: FieldRef<"AnalyticsMetric", 'String'>
    readonly totalRevenue: FieldRef<"AnalyticsMetric", 'Float'>
    readonly totalOrders: FieldRef<"AnalyticsMetric", 'Int'>
    readonly successfulPayments: FieldRef<"AnalyticsMetric", 'Int'>
    readonly failedPayments: FieldRef<"AnalyticsMetric", 'Int'>
    readonly totalProducts: FieldRef<"AnalyticsMetric", 'Int'>
    readonly createdAt: FieldRef<"AnalyticsMetric", 'DateTime'>
    readonly updatedAt: FieldRef<"AnalyticsMetric", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalyticsMetric findUnique
   */
  export type AnalyticsMetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsMetric
     */
    select?: AnalyticsMetricSelect<ExtArgs> | null
    /**
     * Filter, which AnalyticsMetric to fetch.
     */
    where: AnalyticsMetricWhereUniqueInput
  }

  /**
   * AnalyticsMetric findUniqueOrThrow
   */
  export type AnalyticsMetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsMetric
     */
    select?: AnalyticsMetricSelect<ExtArgs> | null
    /**
     * Filter, which AnalyticsMetric to fetch.
     */
    where: AnalyticsMetricWhereUniqueInput
  }

  /**
   * AnalyticsMetric findFirst
   */
  export type AnalyticsMetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsMetric
     */
    select?: AnalyticsMetricSelect<ExtArgs> | null
    /**
     * Filter, which AnalyticsMetric to fetch.
     */
    where?: AnalyticsMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsMetrics to fetch.
     */
    orderBy?: AnalyticsMetricOrderByWithRelationInput | AnalyticsMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsMetrics.
     */
    cursor?: AnalyticsMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsMetrics.
     */
    distinct?: AnalyticsMetricScalarFieldEnum | AnalyticsMetricScalarFieldEnum[]
  }

  /**
   * AnalyticsMetric findFirstOrThrow
   */
  export type AnalyticsMetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsMetric
     */
    select?: AnalyticsMetricSelect<ExtArgs> | null
    /**
     * Filter, which AnalyticsMetric to fetch.
     */
    where?: AnalyticsMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsMetrics to fetch.
     */
    orderBy?: AnalyticsMetricOrderByWithRelationInput | AnalyticsMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsMetrics.
     */
    cursor?: AnalyticsMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsMetrics.
     */
    distinct?: AnalyticsMetricScalarFieldEnum | AnalyticsMetricScalarFieldEnum[]
  }

  /**
   * AnalyticsMetric findMany
   */
  export type AnalyticsMetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsMetric
     */
    select?: AnalyticsMetricSelect<ExtArgs> | null
    /**
     * Filter, which AnalyticsMetrics to fetch.
     */
    where?: AnalyticsMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsMetrics to fetch.
     */
    orderBy?: AnalyticsMetricOrderByWithRelationInput | AnalyticsMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalyticsMetrics.
     */
    cursor?: AnalyticsMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsMetrics.
     */
    skip?: number
    distinct?: AnalyticsMetricScalarFieldEnum | AnalyticsMetricScalarFieldEnum[]
  }

  /**
   * AnalyticsMetric create
   */
  export type AnalyticsMetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsMetric
     */
    select?: AnalyticsMetricSelect<ExtArgs> | null
    /**
     * The data needed to create a AnalyticsMetric.
     */
    data: XOR<AnalyticsMetricCreateInput, AnalyticsMetricUncheckedCreateInput>
  }

  /**
   * AnalyticsMetric createMany
   */
  export type AnalyticsMetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalyticsMetrics.
     */
    data: AnalyticsMetricCreateManyInput | AnalyticsMetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalyticsMetric createManyAndReturn
   */
  export type AnalyticsMetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsMetric
     */
    select?: AnalyticsMetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AnalyticsMetrics.
     */
    data: AnalyticsMetricCreateManyInput | AnalyticsMetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalyticsMetric update
   */
  export type AnalyticsMetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsMetric
     */
    select?: AnalyticsMetricSelect<ExtArgs> | null
    /**
     * The data needed to update a AnalyticsMetric.
     */
    data: XOR<AnalyticsMetricUpdateInput, AnalyticsMetricUncheckedUpdateInput>
    /**
     * Choose, which AnalyticsMetric to update.
     */
    where: AnalyticsMetricWhereUniqueInput
  }

  /**
   * AnalyticsMetric updateMany
   */
  export type AnalyticsMetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalyticsMetrics.
     */
    data: XOR<AnalyticsMetricUpdateManyMutationInput, AnalyticsMetricUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsMetrics to update
     */
    where?: AnalyticsMetricWhereInput
  }

  /**
   * AnalyticsMetric upsert
   */
  export type AnalyticsMetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsMetric
     */
    select?: AnalyticsMetricSelect<ExtArgs> | null
    /**
     * The filter to search for the AnalyticsMetric to update in case it exists.
     */
    where: AnalyticsMetricWhereUniqueInput
    /**
     * In case the AnalyticsMetric found by the `where` argument doesn't exist, create a new AnalyticsMetric with this data.
     */
    create: XOR<AnalyticsMetricCreateInput, AnalyticsMetricUncheckedCreateInput>
    /**
     * In case the AnalyticsMetric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsMetricUpdateInput, AnalyticsMetricUncheckedUpdateInput>
  }

  /**
   * AnalyticsMetric delete
   */
  export type AnalyticsMetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsMetric
     */
    select?: AnalyticsMetricSelect<ExtArgs> | null
    /**
     * Filter which AnalyticsMetric to delete.
     */
    where: AnalyticsMetricWhereUniqueInput
  }

  /**
   * AnalyticsMetric deleteMany
   */
  export type AnalyticsMetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsMetrics to delete
     */
    where?: AnalyticsMetricWhereInput
  }

  /**
   * AnalyticsMetric without action
   */
  export type AnalyticsMetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsMetric
     */
    select?: AnalyticsMetricSelect<ExtArgs> | null
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


  export const AnalyticsMetricScalarFieldEnum: {
    id: 'id',
    totalRevenue: 'totalRevenue',
    totalOrders: 'totalOrders',
    successfulPayments: 'successfulPayments',
    failedPayments: 'failedPayments',
    totalProducts: 'totalProducts',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnalyticsMetricScalarFieldEnum = (typeof AnalyticsMetricScalarFieldEnum)[keyof typeof AnalyticsMetricScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type AnalyticsMetricWhereInput = {
    AND?: AnalyticsMetricWhereInput | AnalyticsMetricWhereInput[]
    OR?: AnalyticsMetricWhereInput[]
    NOT?: AnalyticsMetricWhereInput | AnalyticsMetricWhereInput[]
    id?: StringFilter<"AnalyticsMetric"> | string
    totalRevenue?: FloatFilter<"AnalyticsMetric"> | number
    totalOrders?: IntFilter<"AnalyticsMetric"> | number
    successfulPayments?: IntFilter<"AnalyticsMetric"> | number
    failedPayments?: IntFilter<"AnalyticsMetric"> | number
    totalProducts?: IntFilter<"AnalyticsMetric"> | number
    createdAt?: DateTimeFilter<"AnalyticsMetric"> | Date | string
    updatedAt?: DateTimeFilter<"AnalyticsMetric"> | Date | string
  }

  export type AnalyticsMetricOrderByWithRelationInput = {
    id?: SortOrder
    totalRevenue?: SortOrder
    totalOrders?: SortOrder
    successfulPayments?: SortOrder
    failedPayments?: SortOrder
    totalProducts?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnalyticsMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalyticsMetricWhereInput | AnalyticsMetricWhereInput[]
    OR?: AnalyticsMetricWhereInput[]
    NOT?: AnalyticsMetricWhereInput | AnalyticsMetricWhereInput[]
    totalRevenue?: FloatFilter<"AnalyticsMetric"> | number
    totalOrders?: IntFilter<"AnalyticsMetric"> | number
    successfulPayments?: IntFilter<"AnalyticsMetric"> | number
    failedPayments?: IntFilter<"AnalyticsMetric"> | number
    totalProducts?: IntFilter<"AnalyticsMetric"> | number
    createdAt?: DateTimeFilter<"AnalyticsMetric"> | Date | string
    updatedAt?: DateTimeFilter<"AnalyticsMetric"> | Date | string
  }, "id">

  export type AnalyticsMetricOrderByWithAggregationInput = {
    id?: SortOrder
    totalRevenue?: SortOrder
    totalOrders?: SortOrder
    successfulPayments?: SortOrder
    failedPayments?: SortOrder
    totalProducts?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnalyticsMetricCountOrderByAggregateInput
    _avg?: AnalyticsMetricAvgOrderByAggregateInput
    _max?: AnalyticsMetricMaxOrderByAggregateInput
    _min?: AnalyticsMetricMinOrderByAggregateInput
    _sum?: AnalyticsMetricSumOrderByAggregateInput
  }

  export type AnalyticsMetricScalarWhereWithAggregatesInput = {
    AND?: AnalyticsMetricScalarWhereWithAggregatesInput | AnalyticsMetricScalarWhereWithAggregatesInput[]
    OR?: AnalyticsMetricScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsMetricScalarWhereWithAggregatesInput | AnalyticsMetricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalyticsMetric"> | string
    totalRevenue?: FloatWithAggregatesFilter<"AnalyticsMetric"> | number
    totalOrders?: IntWithAggregatesFilter<"AnalyticsMetric"> | number
    successfulPayments?: IntWithAggregatesFilter<"AnalyticsMetric"> | number
    failedPayments?: IntWithAggregatesFilter<"AnalyticsMetric"> | number
    totalProducts?: IntWithAggregatesFilter<"AnalyticsMetric"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AnalyticsMetric"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AnalyticsMetric"> | Date | string
  }

  export type AnalyticsMetricCreateInput = {
    id?: string
    totalRevenue?: number
    totalOrders?: number
    successfulPayments?: number
    failedPayments?: number
    totalProducts?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalyticsMetricUncheckedCreateInput = {
    id?: string
    totalRevenue?: number
    totalOrders?: number
    successfulPayments?: number
    failedPayments?: number
    totalProducts?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalyticsMetricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    totalOrders?: IntFieldUpdateOperationsInput | number
    successfulPayments?: IntFieldUpdateOperationsInput | number
    failedPayments?: IntFieldUpdateOperationsInput | number
    totalProducts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsMetricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    totalOrders?: IntFieldUpdateOperationsInput | number
    successfulPayments?: IntFieldUpdateOperationsInput | number
    failedPayments?: IntFieldUpdateOperationsInput | number
    totalProducts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsMetricCreateManyInput = {
    id?: string
    totalRevenue?: number
    totalOrders?: number
    successfulPayments?: number
    failedPayments?: number
    totalProducts?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalyticsMetricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    totalOrders?: IntFieldUpdateOperationsInput | number
    successfulPayments?: IntFieldUpdateOperationsInput | number
    failedPayments?: IntFieldUpdateOperationsInput | number
    totalProducts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsMetricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    totalOrders?: IntFieldUpdateOperationsInput | number
    successfulPayments?: IntFieldUpdateOperationsInput | number
    failedPayments?: IntFieldUpdateOperationsInput | number
    totalProducts?: IntFieldUpdateOperationsInput | number
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

  export type AnalyticsMetricCountOrderByAggregateInput = {
    id?: SortOrder
    totalRevenue?: SortOrder
    totalOrders?: SortOrder
    successfulPayments?: SortOrder
    failedPayments?: SortOrder
    totalProducts?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnalyticsMetricAvgOrderByAggregateInput = {
    totalRevenue?: SortOrder
    totalOrders?: SortOrder
    successfulPayments?: SortOrder
    failedPayments?: SortOrder
    totalProducts?: SortOrder
  }

  export type AnalyticsMetricMaxOrderByAggregateInput = {
    id?: SortOrder
    totalRevenue?: SortOrder
    totalOrders?: SortOrder
    successfulPayments?: SortOrder
    failedPayments?: SortOrder
    totalProducts?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnalyticsMetricMinOrderByAggregateInput = {
    id?: SortOrder
    totalRevenue?: SortOrder
    totalOrders?: SortOrder
    successfulPayments?: SortOrder
    failedPayments?: SortOrder
    totalProducts?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnalyticsMetricSumOrderByAggregateInput = {
    totalRevenue?: SortOrder
    totalOrders?: SortOrder
    successfulPayments?: SortOrder
    failedPayments?: SortOrder
    totalProducts?: SortOrder
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AnalyticsMetricDefaultArgs instead
     */
    export type AnalyticsMetricArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnalyticsMetricDefaultArgs<ExtArgs>

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