/**
 * Client
 **/

import * as runtime from './runtime/library.js'
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>

/**
 * Model Project
 *
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Template
 *
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model PublicAgent
 *
 */
export type PublicAgent = $Result.DefaultSelection<Prisma.$PublicAgentPayload>
/**
 * Model Reports
 *
 */
export type Reports = $Result.DefaultSelection<Prisma.$ReportsPayload>
/**
 * Model Likes
 *
 */
export type Likes = $Result.DefaultSelection<Prisma.$LikesPayload>
/**
 * Model Comments
 *
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model AnonymousUser
 *
 */
export type AnonymousUser =
  $Result.DefaultSelection<Prisma.$AnonymousUserPayload>
/**
 * Model Budget
 *
 */
export type Budget = $Result.DefaultSelection<Prisma.$BudgetPayload>
/**
 * Model Promotion
 *
 */
export type Promotion = $Result.DefaultSelection<Prisma.$PromotionPayload>
/**
 * Model agents
 *
 */
export type agents = $Result.DefaultSelection<Prisma.$agentsPayload>
/**
 * Model spells
 *
 */
export type spells = $Result.DefaultSelection<Prisma.$spellsPayload>
/**
 * Model documents
 *
 */
export type documents = $Result.DefaultSelection<Prisma.$documentsPayload>
/**
 * Model customers
 *
 */
export type customers = $Result.DefaultSelection<Prisma.$customersPayload>
/**
 * Model subscriptions
 *
 */
export type subscriptions =
  $Result.DefaultSelection<Prisma.$subscriptionsPayload>
/**
 * Model products
 *
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model prices
 *
 */
export type prices = $Result.DefaultSelection<Prisma.$pricesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PromotionType: {
    INTRO: 'INTRO'
    ADMIN: 'ADMIN'
  }

  export type PromotionType = (typeof PromotionType)[keyof typeof PromotionType]
}

export type PromotionType = $Enums.PromotionType

export const PromotionType: typeof $Enums.PromotionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
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
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>)
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): void

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>

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
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  ): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   */
  get project(): Prisma.ProjectDelegate<ExtArgs>

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Templates
   * const templates = await prisma.template.findMany()
   * ```
   */
  get template(): Prisma.TemplateDelegate<ExtArgs>

  /**
   * `prisma.publicAgent`: Exposes CRUD operations for the **PublicAgent** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more PublicAgents
   * const publicAgents = await prisma.publicAgent.findMany()
   * ```
   */
  get publicAgent(): Prisma.PublicAgentDelegate<ExtArgs>

  /**
   * `prisma.reports`: Exposes CRUD operations for the **Reports** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reports
   * const reports = await prisma.reports.findMany()
   * ```
   */
  get reports(): Prisma.ReportsDelegate<ExtArgs>

  /**
   * `prisma.likes`: Exposes CRUD operations for the **Likes** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Likes
   * const likes = await prisma.likes.findMany()
   * ```
   */
  get likes(): Prisma.LikesDelegate<ExtArgs>

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Comments
   * const comments = await prisma.comments.findMany()
   * ```
   */
  get comments(): Prisma.CommentsDelegate<ExtArgs>

  /**
   * `prisma.anonymousUser`: Exposes CRUD operations for the **AnonymousUser** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AnonymousUsers
   * const anonymousUsers = await prisma.anonymousUser.findMany()
   * ```
   */
  get anonymousUser(): Prisma.AnonymousUserDelegate<ExtArgs>

  /**
   * `prisma.budget`: Exposes CRUD operations for the **Budget** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Budgets
   * const budgets = await prisma.budget.findMany()
   * ```
   */
  get budget(): Prisma.BudgetDelegate<ExtArgs>

  /**
   * `prisma.promotion`: Exposes CRUD operations for the **Promotion** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Promotions
   * const promotions = await prisma.promotion.findMany()
   * ```
   */
  get promotion(): Prisma.PromotionDelegate<ExtArgs>

  /**
   * `prisma.agents`: Exposes CRUD operations for the **agents** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Agents
   * const agents = await prisma.agents.findMany()
   * ```
   */
  get agents(): Prisma.agentsDelegate<ExtArgs>

  /**
   * `prisma.spells`: Exposes CRUD operations for the **spells** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Spells
   * const spells = await prisma.spells.findMany()
   * ```
   */
  get spells(): Prisma.spellsDelegate<ExtArgs>

  /**
   * `prisma.documents`: Exposes CRUD operations for the **documents** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Documents
   * const documents = await prisma.documents.findMany()
   * ```
   */
  get documents(): Prisma.documentsDelegate<ExtArgs>

  /**
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Customers
   * const customers = await prisma.customers.findMany()
   * ```
   */
  get customers(): Prisma.customersDelegate<ExtArgs>

  /**
   * `prisma.subscriptions`: Exposes CRUD operations for the **subscriptions** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Subscriptions
   * const subscriptions = await prisma.subscriptions.findMany()
   * ```
   */
  get subscriptions(): Prisma.subscriptionsDelegate<ExtArgs>

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Products
   * const products = await prisma.products.findMany()
   * ```
   */
  get products(): Prisma.productsDelegate<ExtArgs>

  /**
   * `prisma.prices`: Exposes CRUD operations for the **prices** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Prices
   * const prices = await prisma.prices.findMany()
   * ```
   */
  get prices(): Prisma.pricesDelegate<ExtArgs>
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
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
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
  export type JsonObject = { [Key in string]?: JsonValue }

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue =
    | string
    | number
    | boolean
    | JsonObject
    | JsonArray
    | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {
    readonly [Key in string]?: InputJsonValue | null
  }

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray
    extends ReadonlyArray<InputJsonValue | null> {}

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
  export type InputJsonValue =
    | string
    | number
    | boolean
    | InputJsonObject
    | InputJsonArray
    | { toJSON(): unknown }

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

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>
  > = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  export type Enumerable<T> = T | Array<T>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  }

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T

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

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
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
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
  } & {}

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>
      }
    >
  >

  type Key = string | number | symbol
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never
  type AtStrict<O extends object, K extends Key> = O[K & keyof O]
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = {
    1: AtStrict<O, K>
    0: AtLoose<O, K>
  }[strict]

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K]
      } & {}

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K]
  } & {}

  type _Record<K extends keyof any, T> = {
    [P in K]: T
  }

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

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

  type Cast<A, B> = A extends B ? A : B

  export const type: unique symbol

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never
      }
    : never

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
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
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
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>

  export const ModelName: {
    Project: 'Project'
    Template: 'Template'
    PublicAgent: 'PublicAgent'
    Reports: 'Reports'
    Likes: 'Likes'
    Comments: 'Comments'
    AnonymousUser: 'AnonymousUser'
    Budget: 'Budget'
    Promotion: 'Promotion'
    agents: 'agents'
    spells: 'spells'
    documents: 'documents'
    customers: 'customers'
    subscriptions: 'subscriptions'
    products: 'products'
    prices: 'prices'
  }

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]

  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    meta: {
      modelProps:
        | 'project'
        | 'template'
        | 'publicAgent'
        | 'reports'
        | 'likes'
        | 'comments'
        | 'anonymousUser'
        | 'budget'
        | 'promotion'
        | 'agents'
        | 'spells'
        | 'documents'
        | 'customers'
        | 'subscriptions'
        | 'products'
        | 'prices'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      PublicAgent: {
        payload: Prisma.$PublicAgentPayload<ExtArgs>
        fields: Prisma.PublicAgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicAgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicAgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicAgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicAgentPayload>
          }
          findFirst: {
            args: Prisma.PublicAgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicAgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicAgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicAgentPayload>
          }
          findMany: {
            args: Prisma.PublicAgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicAgentPayload>[]
          }
          create: {
            args: Prisma.PublicAgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicAgentPayload>
          }
          createMany: {
            args: Prisma.PublicAgentCreateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PublicAgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicAgentPayload>
          }
          update: {
            args: Prisma.PublicAgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicAgentPayload>
          }
          deleteMany: {
            args: Prisma.PublicAgentDeleteManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PublicAgentUpdateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PublicAgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicAgentPayload>
          }
          aggregate: {
            args: Prisma.PublicAgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicAgent>
          }
          groupBy: {
            args: Prisma.PublicAgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicAgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicAgentCountArgs<ExtArgs>
            result:
              | $Utils.Optional<PublicAgentCountAggregateOutputType>
              | number
          }
        }
      }
      Reports: {
        payload: Prisma.$ReportsPayload<ExtArgs>
        fields: Prisma.ReportsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          findFirst: {
            args: Prisma.ReportsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          findMany: {
            args: Prisma.ReportsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>[]
          }
          create: {
            args: Prisma.ReportsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          createMany: {
            args: Prisma.ReportsCreateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReportsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          update: {
            args: Prisma.ReportsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          deleteMany: {
            args: Prisma.ReportsDeleteManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReportsUpdateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReportsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          aggregate: {
            args: Prisma.ReportsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReports>
          }
          groupBy: {
            args: Prisma.ReportsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportsCountArgs<ExtArgs>
            result: $Utils.Optional<ReportsCountAggregateOutputType> | number
          }
        }
      }
      Likes: {
        payload: Prisma.$LikesPayload<ExtArgs>
        fields: Prisma.LikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findFirst: {
            args: Prisma.LikesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findMany: {
            args: Prisma.LikesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          create: {
            args: Prisma.LikesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          createMany: {
            args: Prisma.LikesCreateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LikesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          update: {
            args: Prisma.LikesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          deleteMany: {
            args: Prisma.LikesDeleteManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LikesUpdateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LikesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          aggregate: {
            args: Prisma.LikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikes>
          }
          groupBy: {
            args: Prisma.LikesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikesCountArgs<ExtArgs>
            result: $Utils.Optional<LikesCountAggregateOutputType> | number
          }
        }
      }
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      AnonymousUser: {
        payload: Prisma.$AnonymousUserPayload<ExtArgs>
        fields: Prisma.AnonymousUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnonymousUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnonymousUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>
          }
          findFirst: {
            args: Prisma.AnonymousUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnonymousUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>
          }
          findMany: {
            args: Prisma.AnonymousUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>[]
          }
          create: {
            args: Prisma.AnonymousUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>
          }
          createMany: {
            args: Prisma.AnonymousUserCreateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AnonymousUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>
          }
          update: {
            args: Prisma.AnonymousUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>
          }
          deleteMany: {
            args: Prisma.AnonymousUserDeleteManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AnonymousUserUpdateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AnonymousUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>
          }
          aggregate: {
            args: Prisma.AnonymousUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnonymousUser>
          }
          groupBy: {
            args: Prisma.AnonymousUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnonymousUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnonymousUserCountArgs<ExtArgs>
            result:
              | $Utils.Optional<AnonymousUserCountAggregateOutputType>
              | number
          }
        }
      }
      Budget: {
        payload: Prisma.$BudgetPayload<ExtArgs>
        fields: Prisma.BudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BudgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BudgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findFirst: {
            args: Prisma.BudgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BudgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findMany: {
            args: Prisma.BudgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          create: {
            args: Prisma.BudgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          createMany: {
            args: Prisma.BudgetCreateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BudgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          update: {
            args: Prisma.BudgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          deleteMany: {
            args: Prisma.BudgetDeleteManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BudgetUpdateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BudgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          aggregate: {
            args: Prisma.BudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBudget>
          }
          groupBy: {
            args: Prisma.BudgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BudgetCountArgs<ExtArgs>
            result: $Utils.Optional<BudgetCountAggregateOutputType> | number
          }
        }
      }
      Promotion: {
        payload: Prisma.$PromotionPayload<ExtArgs>
        fields: Prisma.PromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findFirst: {
            args: Prisma.PromotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findMany: {
            args: Prisma.PromotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          create: {
            args: Prisma.PromotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          createMany: {
            args: Prisma.PromotionCreateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PromotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          update: {
            args: Prisma.PromotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          deleteMany: {
            args: Prisma.PromotionDeleteManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PromotionUpdateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PromotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          aggregate: {
            args: Prisma.PromotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotion>
          }
          groupBy: {
            args: Prisma.PromotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotionCountArgs<ExtArgs>
            result: $Utils.Optional<PromotionCountAggregateOutputType> | number
          }
        }
      }
      agents: {
        payload: Prisma.$agentsPayload<ExtArgs>
        fields: Prisma.agentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.agentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.agentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agentsPayload>
          }
          findFirst: {
            args: Prisma.agentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.agentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agentsPayload>
          }
          findMany: {
            args: Prisma.agentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agentsPayload>[]
          }
          create: {
            args: Prisma.agentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agentsPayload>
          }
          createMany: {
            args: Prisma.agentsCreateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.agentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agentsPayload>
          }
          update: {
            args: Prisma.agentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agentsPayload>
          }
          deleteMany: {
            args: Prisma.agentsDeleteManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.agentsUpdateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.agentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agentsPayload>
          }
          aggregate: {
            args: Prisma.AgentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgents>
          }
          groupBy: {
            args: Prisma.agentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.agentsCountArgs<ExtArgs>
            result: $Utils.Optional<AgentsCountAggregateOutputType> | number
          }
        }
      }
      spells: {
        payload: Prisma.$spellsPayload<ExtArgs>
        fields: Prisma.spellsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.spellsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spellsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.spellsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spellsPayload>
          }
          findFirst: {
            args: Prisma.spellsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spellsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.spellsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spellsPayload>
          }
          findMany: {
            args: Prisma.spellsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spellsPayload>[]
          }
          create: {
            args: Prisma.spellsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spellsPayload>
          }
          createMany: {
            args: Prisma.spellsCreateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.spellsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spellsPayload>
          }
          update: {
            args: Prisma.spellsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spellsPayload>
          }
          deleteMany: {
            args: Prisma.spellsDeleteManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.spellsUpdateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.spellsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spellsPayload>
          }
          aggregate: {
            args: Prisma.SpellsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpells>
          }
          groupBy: {
            args: Prisma.spellsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpellsGroupByOutputType>[]
          }
          count: {
            args: Prisma.spellsCountArgs<ExtArgs>
            result: $Utils.Optional<SpellsCountAggregateOutputType> | number
          }
        }
      }
      documents: {
        payload: Prisma.$documentsPayload<ExtArgs>
        fields: Prisma.documentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.documentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.documentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          findFirst: {
            args: Prisma.documentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.documentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          findMany: {
            args: Prisma.documentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>[]
          }
          create: {
            args: Prisma.documentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          createMany: {
            args: Prisma.documentsCreateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.documentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          update: {
            args: Prisma.documentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          deleteMany: {
            args: Prisma.documentsDeleteManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.documentsUpdateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.documentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          aggregate: {
            args: Prisma.DocumentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocuments>
          }
          groupBy: {
            args: Prisma.documentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.documentsCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentsCountAggregateOutputType> | number
          }
        }
      }
      customers: {
        payload: Prisma.$customersPayload<ExtArgs>
        fields: Prisma.customersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findFirst: {
            args: Prisma.customersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findMany: {
            args: Prisma.customersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          create: {
            args: Prisma.customersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          createMany: {
            args: Prisma.customersCreateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.customersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          update: {
            args: Prisma.customersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          deleteMany: {
            args: Prisma.customersDeleteManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.customersUpdateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.customersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.customersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.customersCountArgs<ExtArgs>
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      subscriptions: {
        payload: Prisma.$subscriptionsPayload<ExtArgs>
        fields: Prisma.subscriptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subscriptionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subscriptionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          findFirst: {
            args: Prisma.subscriptionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subscriptionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          findMany: {
            args: Prisma.subscriptionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>[]
          }
          create: {
            args: Prisma.subscriptionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          createMany: {
            args: Prisma.subscriptionsCreateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.subscriptionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          update: {
            args: Prisma.subscriptionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          deleteMany: {
            args: Prisma.subscriptionsDeleteManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.subscriptionsUpdateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.subscriptionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptions>
          }
          groupBy: {
            args: Prisma.subscriptionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.subscriptionsCountArgs<ExtArgs>
            result:
              | $Utils.Optional<SubscriptionsCountAggregateOutputType>
              | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      prices: {
        payload: Prisma.$pricesPayload<ExtArgs>
        fields: Prisma.pricesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pricesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pricesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pricesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pricesPayload>
          }
          findFirst: {
            args: Prisma.pricesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pricesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pricesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pricesPayload>
          }
          findMany: {
            args: Prisma.pricesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pricesPayload>[]
          }
          create: {
            args: Prisma.pricesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pricesPayload>
          }
          createMany: {
            args: Prisma.pricesCreateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.pricesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pricesPayload>
          }
          update: {
            args: Prisma.pricesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pricesPayload>
          }
          deleteMany: {
            args: Prisma.pricesDeleteManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.pricesUpdateManyArgs<ExtArgs>
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.pricesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pricesPayload>
          }
          aggregate: {
            args: Prisma.PricesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrices>
          }
          groupBy: {
            args: Prisma.pricesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricesGroupByOutputType>[]
          }
          count: {
            args: Prisma.pricesCountArgs<ExtArgs>
            result: $Utils.Optional<PricesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */

  /**
   * Count Type PublicAgentCountOutputType
   */

  export type PublicAgentCountOutputType = {
    comments: number
    likes: number
    Reports: number
  }

  export type PublicAgentCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    comments?: boolean | PublicAgentCountOutputTypeCountCommentsArgs
    likes?: boolean | PublicAgentCountOutputTypeCountLikesArgs
    Reports?: boolean | PublicAgentCountOutputTypeCountReportsArgs
  }

  // Custom InputTypes

  /**
   * PublicAgentCountOutputType without action
   */
  export type PublicAgentCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the PublicAgentCountOutputType
     */
    select?: PublicAgentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PublicAgentCountOutputType without action
   */
  export type PublicAgentCountOutputTypeCountCommentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CommentsWhereInput
  }

  /**
   * PublicAgentCountOutputType without action
   */
  export type PublicAgentCountOutputTypeCountLikesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: LikesWhereInput
  }

  /**
   * PublicAgentCountOutputType without action
   */
  export type PublicAgentCountOutputTypeCountReportsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: ReportsWhereInput
  }

  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    owner: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
    image: string | null
    lastActive: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    owner: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
    image: string | null
    lastActive: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    owner: number
    name: number
    description: number
    createdAt: number
    deletedAt: number
    updatedAt: number
    image: number
    lastActive: number
    _all: number
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    owner?: true
    name?: true
    description?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    image?: true
    lastActive?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    owner?: true
    name?: true
    description?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    image?: true
    lastActive?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    owner?: true
    name?: true
    description?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    image?: true
    lastActive?: true
    _all?: true
  }

  export type ProjectAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?:
      | ProjectOrderByWithRelationAndSearchRelevanceInput
      | ProjectOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Projects
     **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
    [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }

  export type ProjectGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: ProjectWhereInput
    orderBy?:
      | ProjectOrderByWithAggregationInput
      | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    owner: string
    name: string
    description: string | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
    image: string | null
    lastActive: Date | null
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProjectGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ProjectGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >

  export type ProjectSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      owner?: boolean
      name?: boolean
      description?: boolean
      createdAt?: boolean
      deletedAt?: boolean
      updatedAt?: boolean
      image?: boolean
      lastActive?: boolean
    },
    ExtArgs['result']['project']
  >

  export type ProjectSelectScalar = {
    id?: boolean
    owner?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    image?: boolean
    lastActive?: boolean
  }

  export type $ProjectPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Project'
    objects: {}
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        owner: string
        name: string
        description: string | null
        createdAt: Date | null
        deletedAt: Date | null
        updatedAt: Date | null
        image: string | null
        lastActive: Date | null
      },
      ExtArgs['result']['project']
    >
    composites: {}
  }

  type ProjectGetPayload<
    S extends boolean | null | undefined | ProjectDefaultArgs
  > = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: ProjectCountAggregateInputType | true
  }

  export interface ProjectDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Project']
      meta: { name: 'Project' }
    }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends ProjectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find one Project that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<
        Prisma.$ProjectPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends ProjectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     *
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends ProjectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findMany'>
    >

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     *
     **/
    create<T extends ProjectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >

    /**
     * Create many Projects.
     *     @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends ProjectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     *
     **/
    delete<T extends ProjectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends ProjectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends ProjectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends ProjectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     **/
    upsert<T extends ProjectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
     **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(
      args: Subset<T, ProjectAggregateArgs>
    ): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
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
    >(
      args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetProjectGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Project model
     */
    readonly fields: ProjectFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<'Project', 'String'>
    readonly owner: FieldRef<'Project', 'String'>
    readonly name: FieldRef<'Project', 'String'>
    readonly description: FieldRef<'Project', 'String'>
    readonly createdAt: FieldRef<'Project', 'DateTime'>
    readonly deletedAt: FieldRef<'Project', 'DateTime'>
    readonly updatedAt: FieldRef<'Project', 'DateTime'>
    readonly image: FieldRef<'Project', 'String'>
    readonly lastActive: FieldRef<'Project', 'DateTime'>
  }

  // Custom InputTypes

  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?:
      | ProjectOrderByWithRelationAndSearchRelevanceInput
      | ProjectOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?:
      | ProjectOrderByWithRelationAndSearchRelevanceInput
      | ProjectOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?:
      | ProjectOrderByWithRelationAndSearchRelevanceInput
      | ProjectOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
  }

  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    graph: number
    spells: number
    createdAt: number
    deletedAt: number
    updatedAt: number
    _all: number
  }

  export type TemplateMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    graph?: true
    spells?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Templates to fetch.
     */
    orderBy?:
      | TemplateOrderByWithRelationAndSearchRelevanceInput
      | TemplateOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Templates
     **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
    [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }

  export type TemplateGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: TemplateWhereInput
    orderBy?:
      | TemplateOrderByWithAggregationInput
      | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: string
    name: string
    description: string | null
    image: string | null
    graph: JsonValue | null
    spells: string[]
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TemplateGroupByOutputType, T['by']> & {
          [P in keyof T & keyof TemplateGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >

  export type TemplateSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      description?: boolean
      image?: boolean
      graph?: boolean
      spells?: boolean
      createdAt?: boolean
      deletedAt?: boolean
      updatedAt?: boolean
    },
    ExtArgs['result']['template']
  >

  export type TemplateSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    graph?: boolean
    spells?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }

  export type $TemplatePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Template'
    objects: {}
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        name: string
        description: string | null
        image: string | null
        graph: Prisma.JsonValue | null
        spells: string[]
        createdAt: Date | null
        deletedAt: Date | null
        updatedAt: Date | null
      },
      ExtArgs['result']['template']
    >
    composites: {}
  }

  type TemplateGetPayload<
    S extends boolean | null | undefined | TemplateDefaultArgs
  > = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: TemplateCountAggregateInputType | true
  }

  export interface TemplateDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Template']
      meta: { name: 'Template' }
    }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends TemplateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>
    ): Prisma__TemplateClient<
      $Result.GetResult<
        Prisma.$TemplatePayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find one Template that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TemplateClient<
      $Result.GetResult<
        Prisma.$TemplatePayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends TemplateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>
    ): Prisma__TemplateClient<
      $Result.GetResult<
        Prisma.$TemplatePayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TemplateClient<
      $Result.GetResult<
        Prisma.$TemplatePayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     *
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends TemplateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, 'findMany'>
    >

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     *
     **/
    create<T extends TemplateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>
    ): Prisma__TemplateClient<
      $Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >

    /**
     * Create many Templates.
     *     @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     *     @example
     *     // Create many Templates
     *     const template = await prisma.template.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends TemplateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     *
     **/
    delete<T extends TemplateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>
    ): Prisma__TemplateClient<
      $Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends TemplateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>
    ): Prisma__TemplateClient<
      $Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends TemplateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends TemplateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     **/
    upsert<T extends TemplateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>
    ): Prisma__TemplateClient<
      $Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >

    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
     **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateAggregateArgs>(
      args: Subset<T, TemplateAggregateArgs>
    ): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
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
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
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
    >(
      args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetTemplateGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Template model
     */
    readonly fields: TemplateFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<'Template', 'String'>
    readonly name: FieldRef<'Template', 'String'>
    readonly description: FieldRef<'Template', 'String'>
    readonly image: FieldRef<'Template', 'String'>
    readonly graph: FieldRef<'Template', 'Json'>
    readonly spells: FieldRef<'Template', 'String[]'>
    readonly createdAt: FieldRef<'Template', 'DateTime'>
    readonly deletedAt: FieldRef<'Template', 'DateTime'>
    readonly updatedAt: FieldRef<'Template', 'DateTime'>
  }

  // Custom InputTypes

  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Templates to fetch.
     */
    orderBy?:
      | TemplateOrderByWithRelationAndSearchRelevanceInput
      | TemplateOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Templates to fetch.
     */
    orderBy?:
      | TemplateOrderByWithRelationAndSearchRelevanceInput
      | TemplateOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Templates to fetch.
     */
    orderBy?:
      | TemplateOrderByWithRelationAndSearchRelevanceInput
      | TemplateOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
  }

  /**
   * Model PublicAgent
   */

  export type AggregatePublicAgent = {
    _count: PublicAgentCountAggregateOutputType | null
    _min: PublicAgentMinAggregateOutputType | null
    _max: PublicAgentMaxAggregateOutputType | null
  }

  export type PublicAgentMinAggregateOutputType = {
    id: string | null
    agentId: string | null
    userId: string | null
    madePublic: Date | null
    deletedAt: Date | null
    description: string | null
    remixable: boolean | null
    isTemplate: boolean | null
    featured: boolean | null
  }

  export type PublicAgentMaxAggregateOutputType = {
    id: string | null
    agentId: string | null
    userId: string | null
    madePublic: Date | null
    deletedAt: Date | null
    description: string | null
    remixable: boolean | null
    isTemplate: boolean | null
    featured: boolean | null
  }

  export type PublicAgentCountAggregateOutputType = {
    id: number
    agentId: number
    userId: number
    madePublic: number
    deletedAt: number
    description: number
    remixable: number
    isTemplate: number
    featured: number
    _all: number
  }

  export type PublicAgentMinAggregateInputType = {
    id?: true
    agentId?: true
    userId?: true
    madePublic?: true
    deletedAt?: true
    description?: true
    remixable?: true
    isTemplate?: true
    featured?: true
  }

  export type PublicAgentMaxAggregateInputType = {
    id?: true
    agentId?: true
    userId?: true
    madePublic?: true
    deletedAt?: true
    description?: true
    remixable?: true
    isTemplate?: true
    featured?: true
  }

  export type PublicAgentCountAggregateInputType = {
    id?: true
    agentId?: true
    userId?: true
    madePublic?: true
    deletedAt?: true
    description?: true
    remixable?: true
    isTemplate?: true
    featured?: true
    _all?: true
  }

  export type PublicAgentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which PublicAgent to aggregate.
     */
    where?: PublicAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PublicAgents to fetch.
     */
    orderBy?:
      | PublicAgentOrderByWithRelationAndSearchRelevanceInput
      | PublicAgentOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PublicAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PublicAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PublicAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PublicAgents
     **/
    _count?: true | PublicAgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PublicAgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PublicAgentMaxAggregateInputType
  }

  export type GetPublicAgentAggregateType<T extends PublicAgentAggregateArgs> =
    {
      [P in keyof T & keyof AggregatePublicAgent]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregatePublicAgent[P]>
        : GetScalarType<T[P], AggregatePublicAgent[P]>
    }

  export type PublicAgentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: PublicAgentWhereInput
    orderBy?:
      | PublicAgentOrderByWithAggregationInput
      | PublicAgentOrderByWithAggregationInput[]
    by: PublicAgentScalarFieldEnum[] | PublicAgentScalarFieldEnum
    having?: PublicAgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicAgentCountAggregateInputType | true
    _min?: PublicAgentMinAggregateInputType
    _max?: PublicAgentMaxAggregateInputType
  }

  export type PublicAgentGroupByOutputType = {
    id: string
    agentId: string
    userId: string
    madePublic: Date
    deletedAt: Date | null
    description: string
    remixable: boolean
    isTemplate: boolean
    featured: boolean
    _count: PublicAgentCountAggregateOutputType | null
    _min: PublicAgentMinAggregateOutputType | null
    _max: PublicAgentMaxAggregateOutputType | null
  }

  type GetPublicAgentGroupByPayload<T extends PublicAgentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PublicAgentGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof PublicAgentGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicAgentGroupByOutputType[P]>
            : GetScalarType<T[P], PublicAgentGroupByOutputType[P]>
        }
      >
    >

  export type PublicAgentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      agentId?: boolean
      userId?: boolean
      madePublic?: boolean
      deletedAt?: boolean
      description?: boolean
      remixable?: boolean
      isTemplate?: boolean
      featured?: boolean
      comments?: boolean | PublicAgent$commentsArgs<ExtArgs>
      likes?: boolean | PublicAgent$likesArgs<ExtArgs>
      Reports?: boolean | PublicAgent$ReportsArgs<ExtArgs>
      _count?: boolean | PublicAgentCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['publicAgent']
  >

  export type PublicAgentSelectScalar = {
    id?: boolean
    agentId?: boolean
    userId?: boolean
    madePublic?: boolean
    deletedAt?: boolean
    description?: boolean
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
  }

  export type PublicAgentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    comments?: boolean | PublicAgent$commentsArgs<ExtArgs>
    likes?: boolean | PublicAgent$likesArgs<ExtArgs>
    Reports?: boolean | PublicAgent$ReportsArgs<ExtArgs>
    _count?: boolean | PublicAgentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PublicAgentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'PublicAgent'
    objects: {
      comments: Prisma.$CommentsPayload<ExtArgs>[]
      likes: Prisma.$LikesPayload<ExtArgs>[]
      Reports: Prisma.$ReportsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        agentId: string
        userId: string
        madePublic: Date
        deletedAt: Date | null
        description: string
        remixable: boolean
        isTemplate: boolean
        featured: boolean
      },
      ExtArgs['result']['publicAgent']
    >
    composites: {}
  }

  type PublicAgentGetPayload<
    S extends boolean | null | undefined | PublicAgentDefaultArgs
  > = $Result.GetResult<Prisma.$PublicAgentPayload, S>

  type PublicAgentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<PublicAgentFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: PublicAgentCountAggregateInputType | true
  }

  export interface PublicAgentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['PublicAgent']
      meta: { name: 'PublicAgent' }
    }
    /**
     * Find zero or one PublicAgent that matches the filter.
     * @param {PublicAgentFindUniqueArgs} args - Arguments to find a PublicAgent
     * @example
     * // Get one PublicAgent
     * const publicAgent = await prisma.publicAgent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends PublicAgentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PublicAgentFindUniqueArgs<ExtArgs>>
    ): Prisma__PublicAgentClient<
      $Result.GetResult<
        Prisma.$PublicAgentPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find one PublicAgent that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {PublicAgentFindUniqueOrThrowArgs} args - Arguments to find a PublicAgent
     * @example
     * // Get one PublicAgent
     * const publicAgent = await prisma.publicAgent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends PublicAgentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicAgentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PublicAgentClient<
      $Result.GetResult<
        Prisma.$PublicAgentPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find the first PublicAgent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAgentFindFirstArgs} args - Arguments to find a PublicAgent
     * @example
     * // Get one PublicAgent
     * const publicAgent = await prisma.publicAgent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends PublicAgentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicAgentFindFirstArgs<ExtArgs>>
    ): Prisma__PublicAgentClient<
      $Result.GetResult<
        Prisma.$PublicAgentPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find the first PublicAgent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAgentFindFirstOrThrowArgs} args - Arguments to find a PublicAgent
     * @example
     * // Get one PublicAgent
     * const publicAgent = await prisma.publicAgent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends PublicAgentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicAgentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PublicAgentClient<
      $Result.GetResult<
        Prisma.$PublicAgentPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find zero or more PublicAgents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAgentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicAgents
     * const publicAgents = await prisma.publicAgent.findMany()
     *
     * // Get first 10 PublicAgents
     * const publicAgents = await prisma.publicAgent.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const publicAgentWithIdOnly = await prisma.publicAgent.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends PublicAgentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicAgentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PublicAgentPayload<ExtArgs>, T, 'findMany'>
    >

    /**
     * Create a PublicAgent.
     * @param {PublicAgentCreateArgs} args - Arguments to create a PublicAgent.
     * @example
     * // Create one PublicAgent
     * const PublicAgent = await prisma.publicAgent.create({
     *   data: {
     *     // ... data to create a PublicAgent
     *   }
     * })
     *
     **/
    create<T extends PublicAgentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PublicAgentCreateArgs<ExtArgs>>
    ): Prisma__PublicAgentClient<
      $Result.GetResult<Prisma.$PublicAgentPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >

    /**
     * Create many PublicAgents.
     *     @param {PublicAgentCreateManyArgs} args - Arguments to create many PublicAgents.
     *     @example
     *     // Create many PublicAgents
     *     const publicAgent = await prisma.publicAgent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends PublicAgentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicAgentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PublicAgent.
     * @param {PublicAgentDeleteArgs} args - Arguments to delete one PublicAgent.
     * @example
     * // Delete one PublicAgent
     * const PublicAgent = await prisma.publicAgent.delete({
     *   where: {
     *     // ... filter to delete one PublicAgent
     *   }
     * })
     *
     **/
    delete<T extends PublicAgentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PublicAgentDeleteArgs<ExtArgs>>
    ): Prisma__PublicAgentClient<
      $Result.GetResult<Prisma.$PublicAgentPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >

    /**
     * Update one PublicAgent.
     * @param {PublicAgentUpdateArgs} args - Arguments to update one PublicAgent.
     * @example
     * // Update one PublicAgent
     * const publicAgent = await prisma.publicAgent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends PublicAgentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PublicAgentUpdateArgs<ExtArgs>>
    ): Prisma__PublicAgentClient<
      $Result.GetResult<Prisma.$PublicAgentPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >

    /**
     * Delete zero or more PublicAgents.
     * @param {PublicAgentDeleteManyArgs} args - Arguments to filter PublicAgents to delete.
     * @example
     * // Delete a few PublicAgents
     * const { count } = await prisma.publicAgent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends PublicAgentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicAgentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicAgents
     * const publicAgent = await prisma.publicAgent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends PublicAgentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PublicAgentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PublicAgent.
     * @param {PublicAgentUpsertArgs} args - Arguments to update or create a PublicAgent.
     * @example
     * // Update or create a PublicAgent
     * const publicAgent = await prisma.publicAgent.upsert({
     *   create: {
     *     // ... data to create a PublicAgent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicAgent we want to update
     *   }
     * })
     **/
    upsert<T extends PublicAgentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PublicAgentUpsertArgs<ExtArgs>>
    ): Prisma__PublicAgentClient<
      $Result.GetResult<Prisma.$PublicAgentPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >

    /**
     * Count the number of PublicAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAgentCountArgs} args - Arguments to filter PublicAgents to count.
     * @example
     * // Count the number of PublicAgents
     * const count = await prisma.publicAgent.count({
     *   where: {
     *     // ... the filter for the PublicAgents we want to count
     *   }
     * })
     **/
    count<T extends PublicAgentCountArgs>(
      args?: Subset<T, PublicAgentCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicAgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicAgent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublicAgentAggregateArgs>(
      args: Subset<T, PublicAgentAggregateArgs>
    ): Prisma.PrismaPromise<GetPublicAgentAggregateType<T>>

    /**
     * Group by PublicAgent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAgentGroupByArgs} args - Group by arguments.
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
      T extends PublicAgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicAgentGroupByArgs['orderBy'] }
        : { orderBy?: PublicAgentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
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
    >(
      args: SubsetIntersection<T, PublicAgentGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetPublicAgentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the PublicAgent model
     */
    readonly fields: PublicAgentFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicAgent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicAgentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'

    comments<T extends PublicAgent$commentsArgs<ExtArgs> = {}>(
      args?: Subset<T, PublicAgent$commentsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'findMany'> | Null
    >

    likes<T extends PublicAgent$likesArgs<ExtArgs> = {}>(
      args?: Subset<T, PublicAgent$likesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'findMany'> | Null
    >

    Reports<T extends PublicAgent$ReportsArgs<ExtArgs> = {}>(
      args?: Subset<T, PublicAgent$ReportsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, 'findMany'> | Null
    >

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the PublicAgent model
   */
  interface PublicAgentFieldRefs {
    readonly id: FieldRef<'PublicAgent', 'String'>
    readonly agentId: FieldRef<'PublicAgent', 'String'>
    readonly userId: FieldRef<'PublicAgent', 'String'>
    readonly madePublic: FieldRef<'PublicAgent', 'DateTime'>
    readonly deletedAt: FieldRef<'PublicAgent', 'DateTime'>
    readonly description: FieldRef<'PublicAgent', 'String'>
    readonly remixable: FieldRef<'PublicAgent', 'Boolean'>
    readonly isTemplate: FieldRef<'PublicAgent', 'Boolean'>
    readonly featured: FieldRef<'PublicAgent', 'Boolean'>
  }

  // Custom InputTypes

  /**
   * PublicAgent findUnique
   */
  export type PublicAgentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicAgentInclude<ExtArgs> | null
    /**
     * Filter, which PublicAgent to fetch.
     */
    where: PublicAgentWhereUniqueInput
  }

  /**
   * PublicAgent findUniqueOrThrow
   */
  export type PublicAgentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicAgentInclude<ExtArgs> | null
    /**
     * Filter, which PublicAgent to fetch.
     */
    where: PublicAgentWhereUniqueInput
  }

  /**
   * PublicAgent findFirst
   */
  export type PublicAgentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicAgentInclude<ExtArgs> | null
    /**
     * Filter, which PublicAgent to fetch.
     */
    where?: PublicAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PublicAgents to fetch.
     */
    orderBy?:
      | PublicAgentOrderByWithRelationAndSearchRelevanceInput
      | PublicAgentOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PublicAgents.
     */
    cursor?: PublicAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PublicAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PublicAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PublicAgents.
     */
    distinct?: PublicAgentScalarFieldEnum | PublicAgentScalarFieldEnum[]
  }

  /**
   * PublicAgent findFirstOrThrow
   */
  export type PublicAgentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicAgentInclude<ExtArgs> | null
    /**
     * Filter, which PublicAgent to fetch.
     */
    where?: PublicAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PublicAgents to fetch.
     */
    orderBy?:
      | PublicAgentOrderByWithRelationAndSearchRelevanceInput
      | PublicAgentOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PublicAgents.
     */
    cursor?: PublicAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PublicAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PublicAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PublicAgents.
     */
    distinct?: PublicAgentScalarFieldEnum | PublicAgentScalarFieldEnum[]
  }

  /**
   * PublicAgent findMany
   */
  export type PublicAgentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicAgentInclude<ExtArgs> | null
    /**
     * Filter, which PublicAgents to fetch.
     */
    where?: PublicAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PublicAgents to fetch.
     */
    orderBy?:
      | PublicAgentOrderByWithRelationAndSearchRelevanceInput
      | PublicAgentOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PublicAgents.
     */
    cursor?: PublicAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PublicAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PublicAgents.
     */
    skip?: number
    distinct?: PublicAgentScalarFieldEnum | PublicAgentScalarFieldEnum[]
  }

  /**
   * PublicAgent create
   */
  export type PublicAgentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicAgentInclude<ExtArgs> | null
    /**
     * The data needed to create a PublicAgent.
     */
    data: XOR<PublicAgentCreateInput, PublicAgentUncheckedCreateInput>
  }

  /**
   * PublicAgent createMany
   */
  export type PublicAgentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many PublicAgents.
     */
    data: PublicAgentCreateManyInput | PublicAgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicAgent update
   */
  export type PublicAgentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicAgentInclude<ExtArgs> | null
    /**
     * The data needed to update a PublicAgent.
     */
    data: XOR<PublicAgentUpdateInput, PublicAgentUncheckedUpdateInput>
    /**
     * Choose, which PublicAgent to update.
     */
    where: PublicAgentWhereUniqueInput
  }

  /**
   * PublicAgent updateMany
   */
  export type PublicAgentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update PublicAgents.
     */
    data: XOR<
      PublicAgentUpdateManyMutationInput,
      PublicAgentUncheckedUpdateManyInput
    >
    /**
     * Filter which PublicAgents to update
     */
    where?: PublicAgentWhereInput
  }

  /**
   * PublicAgent upsert
   */
  export type PublicAgentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicAgentInclude<ExtArgs> | null
    /**
     * The filter to search for the PublicAgent to update in case it exists.
     */
    where: PublicAgentWhereUniqueInput
    /**
     * In case the PublicAgent found by the `where` argument doesn't exist, create a new PublicAgent with this data.
     */
    create: XOR<PublicAgentCreateInput, PublicAgentUncheckedCreateInput>
    /**
     * In case the PublicAgent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicAgentUpdateInput, PublicAgentUncheckedUpdateInput>
  }

  /**
   * PublicAgent delete
   */
  export type PublicAgentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicAgentInclude<ExtArgs> | null
    /**
     * Filter which PublicAgent to delete.
     */
    where: PublicAgentWhereUniqueInput
  }

  /**
   * PublicAgent deleteMany
   */
  export type PublicAgentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which PublicAgents to delete
     */
    where?: PublicAgentWhereInput
  }

  /**
   * PublicAgent.comments
   */
  export type PublicAgent$commentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?:
      | CommentsOrderByWithRelationAndSearchRelevanceInput
      | CommentsOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * PublicAgent.likes
   */
  export type PublicAgent$likesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?:
      | LikesOrderByWithRelationAndSearchRelevanceInput
      | LikesOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * PublicAgent.Reports
   */
  export type PublicAgent$ReportsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportsInclude<ExtArgs> | null
    where?: ReportsWhereInput
    orderBy?:
      | ReportsOrderByWithRelationAndSearchRelevanceInput
      | ReportsOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: ReportsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * PublicAgent without action
   */
  export type PublicAgentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicAgentInclude<ExtArgs> | null
  }

  /**
   * Model Reports
   */

  export type AggregateReports = {
    _count: ReportsCountAggregateOutputType | null
    _min: ReportsMinAggregateOutputType | null
    _max: ReportsMaxAggregateOutputType | null
  }

  export type ReportsMinAggregateOutputType = {
    id: string | null
    publicAgentId: string | null
    createdAt: Date | null
    message: string | null
  }

  export type ReportsMaxAggregateOutputType = {
    id: string | null
    publicAgentId: string | null
    createdAt: Date | null
    message: string | null
  }

  export type ReportsCountAggregateOutputType = {
    id: number
    publicAgentId: number
    createdAt: number
    message: number
    _all: number
  }

  export type ReportsMinAggregateInputType = {
    id?: true
    publicAgentId?: true
    createdAt?: true
    message?: true
  }

  export type ReportsMaxAggregateInputType = {
    id?: true
    publicAgentId?: true
    createdAt?: true
    message?: true
  }

  export type ReportsCountAggregateInputType = {
    id?: true
    publicAgentId?: true
    createdAt?: true
    message?: true
    _all?: true
  }

  export type ReportsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Reports to aggregate.
     */
    where?: ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reports to fetch.
     */
    orderBy?:
      | ReportsOrderByWithRelationAndSearchRelevanceInput
      | ReportsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Reports
     **/
    _count?: true | ReportsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReportsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReportsMaxAggregateInputType
  }

  export type GetReportsAggregateType<T extends ReportsAggregateArgs> = {
    [P in keyof T & keyof AggregateReports]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReports[P]>
      : GetScalarType<T[P], AggregateReports[P]>
  }

  export type ReportsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: ReportsWhereInput
    orderBy?:
      | ReportsOrderByWithAggregationInput
      | ReportsOrderByWithAggregationInput[]
    by: ReportsScalarFieldEnum[] | ReportsScalarFieldEnum
    having?: ReportsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportsCountAggregateInputType | true
    _min?: ReportsMinAggregateInputType
    _max?: ReportsMaxAggregateInputType
  }

  export type ReportsGroupByOutputType = {
    id: string
    publicAgentId: string
    createdAt: Date
    message: string
    _count: ReportsCountAggregateOutputType | null
    _min: ReportsMinAggregateOutputType | null
    _max: ReportsMaxAggregateOutputType | null
  }

  type GetReportsGroupByPayload<T extends ReportsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ReportsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ReportsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportsGroupByOutputType[P]>
            : GetScalarType<T[P], ReportsGroupByOutputType[P]>
        }
      >
    >

  export type ReportsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      publicAgentId?: boolean
      createdAt?: boolean
      message?: boolean
      publicAgent?: boolean | PublicAgentDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['reports']
  >

  export type ReportsSelectScalar = {
    id?: boolean
    publicAgentId?: boolean
    createdAt?: boolean
    message?: boolean
  }

  export type ReportsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    publicAgent?: boolean | PublicAgentDefaultArgs<ExtArgs>
  }

  export type $ReportsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Reports'
    objects: {
      publicAgent: Prisma.$PublicAgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        publicAgentId: string
        createdAt: Date
        message: string
      },
      ExtArgs['result']['reports']
    >
    composites: {}
  }

  type ReportsGetPayload<
    S extends boolean | null | undefined | ReportsDefaultArgs
  > = $Result.GetResult<Prisma.$ReportsPayload, S>

  type ReportsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<ReportsFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: ReportsCountAggregateInputType | true
  }

  export interface ReportsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Reports']
      meta: { name: 'Reports' }
    }
    /**
     * Find zero or one Reports that matches the filter.
     * @param {ReportsFindUniqueArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends ReportsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReportsFindUniqueArgs<ExtArgs>>
    ): Prisma__ReportsClient<
      $Result.GetResult<
        Prisma.$ReportsPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find one Reports that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {ReportsFindUniqueOrThrowArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends ReportsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReportsClient<
      $Result.GetResult<
        Prisma.$ReportsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find the first Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsFindFirstArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends ReportsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportsFindFirstArgs<ExtArgs>>
    ): Prisma__ReportsClient<
      $Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >

    /**
     * Find the first Reports that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsFindFirstOrThrowArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends ReportsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReportsClient<
      $Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.reports.findMany()
     *
     * // Get first 10 Reports
     * const reports = await prisma.reports.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reportsWithIdOnly = await prisma.reports.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends ReportsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, 'findMany'>
    >

    /**
     * Create a Reports.
     * @param {ReportsCreateArgs} args - Arguments to create a Reports.
     * @example
     * // Create one Reports
     * const Reports = await prisma.reports.create({
     *   data: {
     *     // ... data to create a Reports
     *   }
     * })
     *
     **/
    create<T extends ReportsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReportsCreateArgs<ExtArgs>>
    ): Prisma__ReportsClient<
      $Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >

    /**
     * Create many Reports.
     *     @param {ReportsCreateManyArgs} args - Arguments to create many Reports.
     *     @example
     *     // Create many Reports
     *     const reports = await prisma.reports.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends ReportsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reports.
     * @param {ReportsDeleteArgs} args - Arguments to delete one Reports.
     * @example
     * // Delete one Reports
     * const Reports = await prisma.reports.delete({
     *   where: {
     *     // ... filter to delete one Reports
     *   }
     * })
     *
     **/
    delete<T extends ReportsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReportsDeleteArgs<ExtArgs>>
    ): Prisma__ReportsClient<
      $Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >

    /**
     * Update one Reports.
     * @param {ReportsUpdateArgs} args - Arguments to update one Reports.
     * @example
     * // Update one Reports
     * const reports = await prisma.reports.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends ReportsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReportsUpdateArgs<ExtArgs>>
    ): Prisma__ReportsClient<
      $Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >

    /**
     * Delete zero or more Reports.
     * @param {ReportsDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.reports.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends ReportsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const reports = await prisma.reports.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends ReportsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReportsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reports.
     * @param {ReportsUpsertArgs} args - Arguments to update or create a Reports.
     * @example
     * // Update or create a Reports
     * const reports = await prisma.reports.upsert({
     *   create: {
     *     // ... data to create a Reports
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reports we want to update
     *   }
     * })
     **/
    upsert<T extends ReportsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReportsUpsertArgs<ExtArgs>>
    ): Prisma__ReportsClient<
      $Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >

    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.reports.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
     **/
    count<T extends ReportsCountArgs>(
      args?: Subset<T, ReportsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportsAggregateArgs>(
      args: Subset<T, ReportsAggregateArgs>
    ): Prisma.PrismaPromise<GetReportsAggregateType<T>>

    /**
     * Group by Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsGroupByArgs} args - Group by arguments.
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
      T extends ReportsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportsGroupByArgs['orderBy'] }
        : { orderBy?: ReportsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
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
    >(
      args: SubsetIntersection<T, ReportsGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetReportsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Reports model
     */
    readonly fields: ReportsFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reports.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'

    publicAgent<T extends PublicAgentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PublicAgentDefaultArgs<ExtArgs>>
    ): Prisma__PublicAgentClient<
      | $Result.GetResult<
          Prisma.$PublicAgentPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Reports model
   */
  interface ReportsFieldRefs {
    readonly id: FieldRef<'Reports', 'String'>
    readonly publicAgentId: FieldRef<'Reports', 'String'>
    readonly createdAt: FieldRef<'Reports', 'DateTime'>
    readonly message: FieldRef<'Reports', 'String'>
  }

  // Custom InputTypes

  /**
   * Reports findUnique
   */
  export type ReportsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where: ReportsWhereUniqueInput
  }

  /**
   * Reports findUniqueOrThrow
   */
  export type ReportsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where: ReportsWhereUniqueInput
  }

  /**
   * Reports findFirst
   */
  export type ReportsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reports to fetch.
     */
    orderBy?:
      | ReportsOrderByWithRelationAndSearchRelevanceInput
      | ReportsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Reports.
     */
    cursor?: ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * Reports findFirstOrThrow
   */
  export type ReportsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reports to fetch.
     */
    orderBy?:
      | ReportsOrderByWithRelationAndSearchRelevanceInput
      | ReportsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Reports.
     */
    cursor?: ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * Reports findMany
   */
  export type ReportsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reports to fetch.
     */
    orderBy?:
      | ReportsOrderByWithRelationAndSearchRelevanceInput
      | ReportsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Reports.
     */
    cursor?: ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * Reports create
   */
  export type ReportsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reports.
     */
    data: XOR<ReportsCreateInput, ReportsUncheckedCreateInput>
  }

  /**
   * Reports createMany
   */
  export type ReportsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Reports.
     */
    data: ReportsCreateManyInput | ReportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reports update
   */
  export type ReportsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reports.
     */
    data: XOR<ReportsUpdateInput, ReportsUncheckedUpdateInput>
    /**
     * Choose, which Reports to update.
     */
    where: ReportsWhereUniqueInput
  }

  /**
   * Reports updateMany
   */
  export type ReportsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportsUpdateManyMutationInput, ReportsUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportsWhereInput
  }

  /**
   * Reports upsert
   */
  export type ReportsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reports to update in case it exists.
     */
    where: ReportsWhereUniqueInput
    /**
     * In case the Reports found by the `where` argument doesn't exist, create a new Reports with this data.
     */
    create: XOR<ReportsCreateInput, ReportsUncheckedCreateInput>
    /**
     * In case the Reports was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportsUpdateInput, ReportsUncheckedUpdateInput>
  }

  /**
   * Reports delete
   */
  export type ReportsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * Filter which Reports to delete.
     */
    where: ReportsWhereUniqueInput
  }

  /**
   * Reports deleteMany
   */
  export type ReportsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportsWhereInput
  }

  /**
   * Reports without action
   */
  export type ReportsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportsInclude<ExtArgs> | null
  }

  /**
   * Model Likes
   */

  export type AggregateLikes = {
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  export type LikesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    publicAgentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    publicAgentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikesCountAggregateOutputType = {
    id: number
    userId: number
    publicAgentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type LikesMinAggregateInputType = {
    id?: true
    userId?: true
    publicAgentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikesMaxAggregateInputType = {
    id?: true
    userId?: true
    publicAgentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikesCountAggregateInputType = {
    id?: true
    userId?: true
    publicAgentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LikesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Likes to aggregate.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Likes to fetch.
     */
    orderBy?:
      | LikesOrderByWithRelationAndSearchRelevanceInput
      | LikesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Likes
     **/
    _count?: true | LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LikesMaxAggregateInputType
  }

  export type GetLikesAggregateType<T extends LikesAggregateArgs> = {
    [P in keyof T & keyof AggregateLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikes[P]>
      : GetScalarType<T[P], AggregateLikes[P]>
  }

  export type LikesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: LikesWhereInput
    orderBy?:
      | LikesOrderByWithAggregationInput
      | LikesOrderByWithAggregationInput[]
    by: LikesScalarFieldEnum[] | LikesScalarFieldEnum
    having?: LikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikesCountAggregateInputType | true
    _min?: LikesMinAggregateInputType
    _max?: LikesMaxAggregateInputType
  }

  export type LikesGroupByOutputType = {
    id: string
    userId: string
    publicAgentId: string
    createdAt: Date
    updatedAt: Date | null
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  type GetLikesGroupByPayload<T extends LikesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<LikesGroupByOutputType, T['by']> & {
          [P in keyof T & keyof LikesGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikesGroupByOutputType[P]>
            : GetScalarType<T[P], LikesGroupByOutputType[P]>
        }
      >
    >

  export type LikesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      userId?: boolean
      publicAgentId?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      publicAgent?: boolean | PublicAgentDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['likes']
  >

  export type LikesSelectScalar = {
    id?: boolean
    userId?: boolean
    publicAgentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LikesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    publicAgent?: boolean | PublicAgentDefaultArgs<ExtArgs>
  }

  export type $LikesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Likes'
    objects: {
      publicAgent: Prisma.$PublicAgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        userId: string
        publicAgentId: string
        createdAt: Date
        updatedAt: Date | null
      },
      ExtArgs['result']['likes']
    >
    composites: {}
  }

  type LikesGetPayload<
    S extends boolean | null | undefined | LikesDefaultArgs
  > = $Result.GetResult<Prisma.$LikesPayload, S>

  type LikesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<LikesFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: LikesCountAggregateInputType | true
  }

  export interface LikesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Likes']
      meta: { name: 'Likes' }
    }
    /**
     * Find zero or one Likes that matches the filter.
     * @param {LikesFindUniqueArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends LikesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LikesFindUniqueArgs<ExtArgs>>
    ): Prisma__LikesClient<
      $Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >

    /**
     * Find one Likes that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {LikesFindUniqueOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends LikesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LikesClient<
      $Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >

    /**
     * Find the first Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends LikesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LikesFindFirstArgs<ExtArgs>>
    ): Prisma__LikesClient<
      $Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >

    /**
     * Find the first Likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends LikesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LikesClient<
      $Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.likes.findMany()
     *
     * // Get first 10 Likes
     * const likes = await prisma.likes.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const likesWithIdOnly = await prisma.likes.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends LikesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'findMany'>
    >

    /**
     * Create a Likes.
     * @param {LikesCreateArgs} args - Arguments to create a Likes.
     * @example
     * // Create one Likes
     * const Likes = await prisma.likes.create({
     *   data: {
     *     // ... data to create a Likes
     *   }
     * })
     *
     **/
    create<T extends LikesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LikesCreateArgs<ExtArgs>>
    ): Prisma__LikesClient<
      $Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >

    /**
     * Create many Likes.
     *     @param {LikesCreateManyArgs} args - Arguments to create many Likes.
     *     @example
     *     // Create many Likes
     *     const likes = await prisma.likes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends LikesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Likes.
     * @param {LikesDeleteArgs} args - Arguments to delete one Likes.
     * @example
     * // Delete one Likes
     * const Likes = await prisma.likes.delete({
     *   where: {
     *     // ... filter to delete one Likes
     *   }
     * })
     *
     **/
    delete<T extends LikesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LikesDeleteArgs<ExtArgs>>
    ): Prisma__LikesClient<
      $Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >

    /**
     * Update one Likes.
     * @param {LikesUpdateArgs} args - Arguments to update one Likes.
     * @example
     * // Update one Likes
     * const likes = await prisma.likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends LikesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LikesUpdateArgs<ExtArgs>>
    ): Prisma__LikesClient<
      $Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >

    /**
     * Delete zero or more Likes.
     * @param {LikesDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends LikesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends LikesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LikesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Likes.
     * @param {LikesUpsertArgs} args - Arguments to update or create a Likes.
     * @example
     * // Update or create a Likes
     * const likes = await prisma.likes.upsert({
     *   create: {
     *     // ... data to create a Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Likes we want to update
     *   }
     * })
     **/
    upsert<T extends LikesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LikesUpsertArgs<ExtArgs>>
    ): Prisma__LikesClient<
      $Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >

    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.likes.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
     **/
    count<T extends LikesCountArgs>(
      args?: Subset<T, LikesCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikesAggregateArgs>(
      args: Subset<T, LikesAggregateArgs>
    ): Prisma.PrismaPromise<GetLikesAggregateType<T>>

    /**
     * Group by Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesGroupByArgs} args - Group by arguments.
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
      T extends LikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikesGroupByArgs['orderBy'] }
        : { orderBy?: LikesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
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
    >(
      args: SubsetIntersection<T, LikesGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetLikesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Likes model
     */
    readonly fields: LikesFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'

    publicAgent<T extends PublicAgentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PublicAgentDefaultArgs<ExtArgs>>
    ): Prisma__PublicAgentClient<
      | $Result.GetResult<
          Prisma.$PublicAgentPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Likes model
   */
  interface LikesFieldRefs {
    readonly id: FieldRef<'Likes', 'String'>
    readonly userId: FieldRef<'Likes', 'String'>
    readonly publicAgentId: FieldRef<'Likes', 'String'>
    readonly createdAt: FieldRef<'Likes', 'DateTime'>
    readonly updatedAt: FieldRef<'Likes', 'DateTime'>
  }

  // Custom InputTypes

  /**
   * Likes findUnique
   */
  export type LikesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findUniqueOrThrow
   */
  export type LikesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findFirst
   */
  export type LikesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Likes to fetch.
     */
    orderBy?:
      | LikesOrderByWithRelationAndSearchRelevanceInput
      | LikesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findFirstOrThrow
   */
  export type LikesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Likes to fetch.
     */
    orderBy?:
      | LikesOrderByWithRelationAndSearchRelevanceInput
      | LikesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findMany
   */
  export type LikesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Likes to fetch.
     */
    orderBy?:
      | LikesOrderByWithRelationAndSearchRelevanceInput
      | LikesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes create
   */
  export type LikesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to create a Likes.
     */
    data: XOR<LikesCreateInput, LikesUncheckedCreateInput>
  }

  /**
   * Likes createMany
   */
  export type LikesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Likes.
     */
    data: LikesCreateManyInput | LikesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Likes update
   */
  export type LikesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to update a Likes.
     */
    data: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
    /**
     * Choose, which Likes to update.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes updateMany
   */
  export type LikesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikesWhereInput
  }

  /**
   * Likes upsert
   */
  export type LikesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The filter to search for the Likes to update in case it exists.
     */
    where: LikesWhereUniqueInput
    /**
     * In case the Likes found by the `where` argument doesn't exist, create a new Likes with this data.
     */
    create: XOR<LikesCreateInput, LikesUncheckedCreateInput>
    /**
     * In case the Likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
  }

  /**
   * Likes delete
   */
  export type LikesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter which Likes to delete.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes deleteMany
   */
  export type LikesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Likes to delete
     */
    where?: LikesWhereInput
  }

  /**
   * Likes without action
   */
  export type LikesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikesInclude<ExtArgs> | null
  }

  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    publicAgentId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    publicAgentId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    userId: number
    publicAgentId: number
    content: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    userId?: true
    publicAgentId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    userId?: true
    publicAgentId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    userId?: true
    publicAgentId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CommentsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentsOrderByWithRelationAndSearchRelevanceInput
      | CommentsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Comments
     **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
    [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }

  export type CommentsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CommentsWhereInput
    orderBy?:
      | CommentsOrderByWithAggregationInput
      | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: string
    userId: string
    publicAgentId: string
    content: string
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CommentsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CommentsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >

  export type CommentsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      userId?: boolean
      publicAgentId?: boolean
      content?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      deletedAt?: boolean
      publicAgent?: boolean | PublicAgentDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['comments']
  >

  export type CommentsSelectScalar = {
    id?: boolean
    userId?: boolean
    publicAgentId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CommentsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    publicAgent?: boolean | PublicAgentDefaultArgs<ExtArgs>
  }

  export type $CommentsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Comments'
    objects: {
      publicAgent: Prisma.$PublicAgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        userId: string
        publicAgentId: string
        content: string
        createdAt: Date
        updatedAt: Date | null
        deletedAt: Date | null
      },
      ExtArgs['result']['comments']
    >
    composites: {}
  }

  type CommentsGetPayload<
    S extends boolean | null | undefined | CommentsDefaultArgs
  > = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: CommentsCountAggregateInputType | true
  }

  export interface CommentsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Comments']
      meta: { name: 'Comments' }
    }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends CommentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentsClient<
      $Result.GetResult<
        Prisma.$CommentsPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find one Comments that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentsClient<
      $Result.GetResult<
        Prisma.$CommentsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends CommentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>
    ): Prisma__CommentsClient<
      $Result.GetResult<
        Prisma.$CommentsPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentsClient<
      $Result.GetResult<
        Prisma.$CommentsPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     *
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends CommentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'findMany'>
    >

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     *
     **/
    create<T extends CommentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>
    ): Prisma__CommentsClient<
      $Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >

    /**
     * Create many Comments.
     *     @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comments = await prisma.comments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends CommentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     *
     **/
    delete<T extends CommentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>
    ): Prisma__CommentsClient<
      $Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends CommentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>
    ): Prisma__CommentsClient<
      $Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends CommentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends CommentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     **/
    upsert<T extends CommentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>
    ): Prisma__CommentsClient<
      $Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
     **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(
      args: Subset<T, CommentsAggregateArgs>
    ): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
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
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
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
    >(
      args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetCommentsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Comments model
     */
    readonly fields: CommentsFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'

    publicAgent<T extends PublicAgentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PublicAgentDefaultArgs<ExtArgs>>
    ): Prisma__PublicAgentClient<
      | $Result.GetResult<
          Prisma.$PublicAgentPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<'Comments', 'String'>
    readonly userId: FieldRef<'Comments', 'String'>
    readonly publicAgentId: FieldRef<'Comments', 'String'>
    readonly content: FieldRef<'Comments', 'String'>
    readonly createdAt: FieldRef<'Comments', 'DateTime'>
    readonly updatedAt: FieldRef<'Comments', 'DateTime'>
    readonly deletedAt: FieldRef<'Comments', 'DateTime'>
  }

  // Custom InputTypes

  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentsOrderByWithRelationAndSearchRelevanceInput
      | CommentsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentsOrderByWithRelationAndSearchRelevanceInput
      | CommentsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentsOrderByWithRelationAndSearchRelevanceInput
      | CommentsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude<ExtArgs> | null
  }

  /**
   * Model AnonymousUser
   */

  export type AggregateAnonymousUser = {
    _count: AnonymousUserCountAggregateOutputType | null
    _min: AnonymousUserMinAggregateOutputType | null
    _max: AnonymousUserMaxAggregateOutputType | null
  }

  export type AnonymousUserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    anonymousId: string | null
    fingerprint: string | null
    lastAccessed: Date | null
  }

  export type AnonymousUserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    anonymousId: string | null
    fingerprint: string | null
    lastAccessed: Date | null
  }

  export type AnonymousUserCountAggregateOutputType = {
    id: number
    createdAt: number
    anonymousId: number
    fingerprint: number
    lastAccessed: number
    _all: number
  }

  export type AnonymousUserMinAggregateInputType = {
    id?: true
    createdAt?: true
    anonymousId?: true
    fingerprint?: true
    lastAccessed?: true
  }

  export type AnonymousUserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    anonymousId?: true
    fingerprint?: true
    lastAccessed?: true
  }

  export type AnonymousUserCountAggregateInputType = {
    id?: true
    createdAt?: true
    anonymousId?: true
    fingerprint?: true
    lastAccessed?: true
    _all?: true
  }

  export type AnonymousUserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which AnonymousUser to aggregate.
     */
    where?: AnonymousUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AnonymousUsers to fetch.
     */
    orderBy?:
      | AnonymousUserOrderByWithRelationAndSearchRelevanceInput
      | AnonymousUserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AnonymousUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AnonymousUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AnonymousUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AnonymousUsers
     **/
    _count?: true | AnonymousUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AnonymousUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AnonymousUserMaxAggregateInputType
  }

  export type GetAnonymousUserAggregateType<
    T extends AnonymousUserAggregateArgs
  > = {
    [P in keyof T & keyof AggregateAnonymousUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnonymousUser[P]>
      : GetScalarType<T[P], AggregateAnonymousUser[P]>
  }

  export type AnonymousUserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: AnonymousUserWhereInput
    orderBy?:
      | AnonymousUserOrderByWithAggregationInput
      | AnonymousUserOrderByWithAggregationInput[]
    by: AnonymousUserScalarFieldEnum[] | AnonymousUserScalarFieldEnum
    having?: AnonymousUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnonymousUserCountAggregateInputType | true
    _min?: AnonymousUserMinAggregateInputType
    _max?: AnonymousUserMaxAggregateInputType
  }

  export type AnonymousUserGroupByOutputType = {
    id: string
    createdAt: Date
    anonymousId: string
    fingerprint: string
    lastAccessed: Date | null
    _count: AnonymousUserCountAggregateOutputType | null
    _min: AnonymousUserMinAggregateOutputType | null
    _max: AnonymousUserMaxAggregateOutputType | null
  }

  type GetAnonymousUserGroupByPayload<T extends AnonymousUserGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AnonymousUserGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof AnonymousUserGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnonymousUserGroupByOutputType[P]>
            : GetScalarType<T[P], AnonymousUserGroupByOutputType[P]>
        }
      >
    >

  export type AnonymousUserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      createdAt?: boolean
      anonymousId?: boolean
      fingerprint?: boolean
      lastAccessed?: boolean
    },
    ExtArgs['result']['anonymousUser']
  >

  export type AnonymousUserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    anonymousId?: boolean
    fingerprint?: boolean
    lastAccessed?: boolean
  }

  export type $AnonymousUserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'AnonymousUser'
    objects: {}
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        createdAt: Date
        anonymousId: string
        fingerprint: string
        lastAccessed: Date | null
      },
      ExtArgs['result']['anonymousUser']
    >
    composites: {}
  }

  type AnonymousUserGetPayload<
    S extends boolean | null | undefined | AnonymousUserDefaultArgs
  > = $Result.GetResult<Prisma.$AnonymousUserPayload, S>

  type AnonymousUserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<AnonymousUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: AnonymousUserCountAggregateInputType | true
  }

  export interface AnonymousUserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['AnonymousUser']
      meta: { name: 'AnonymousUser' }
    }
    /**
     * Find zero or one AnonymousUser that matches the filter.
     * @param {AnonymousUserFindUniqueArgs} args - Arguments to find a AnonymousUser
     * @example
     * // Get one AnonymousUser
     * const anonymousUser = await prisma.anonymousUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends AnonymousUserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AnonymousUserFindUniqueArgs<ExtArgs>>
    ): Prisma__AnonymousUserClient<
      $Result.GetResult<
        Prisma.$AnonymousUserPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find one AnonymousUser that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {AnonymousUserFindUniqueOrThrowArgs} args - Arguments to find a AnonymousUser
     * @example
     * // Get one AnonymousUser
     * const anonymousUser = await prisma.anonymousUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends AnonymousUserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnonymousUserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AnonymousUserClient<
      $Result.GetResult<
        Prisma.$AnonymousUserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find the first AnonymousUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserFindFirstArgs} args - Arguments to find a AnonymousUser
     * @example
     * // Get one AnonymousUser
     * const anonymousUser = await prisma.anonymousUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends AnonymousUserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AnonymousUserFindFirstArgs<ExtArgs>>
    ): Prisma__AnonymousUserClient<
      $Result.GetResult<
        Prisma.$AnonymousUserPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find the first AnonymousUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserFindFirstOrThrowArgs} args - Arguments to find a AnonymousUser
     * @example
     * // Get one AnonymousUser
     * const anonymousUser = await prisma.anonymousUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends AnonymousUserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnonymousUserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AnonymousUserClient<
      $Result.GetResult<
        Prisma.$AnonymousUserPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find zero or more AnonymousUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnonymousUsers
     * const anonymousUsers = await prisma.anonymousUser.findMany()
     *
     * // Get first 10 AnonymousUsers
     * const anonymousUsers = await prisma.anonymousUser.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const anonymousUserWithIdOnly = await prisma.anonymousUser.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends AnonymousUserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnonymousUserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, 'findMany'>
    >

    /**
     * Create a AnonymousUser.
     * @param {AnonymousUserCreateArgs} args - Arguments to create a AnonymousUser.
     * @example
     * // Create one AnonymousUser
     * const AnonymousUser = await prisma.anonymousUser.create({
     *   data: {
     *     // ... data to create a AnonymousUser
     *   }
     * })
     *
     **/
    create<T extends AnonymousUserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AnonymousUserCreateArgs<ExtArgs>>
    ): Prisma__AnonymousUserClient<
      $Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >

    /**
     * Create many AnonymousUsers.
     *     @param {AnonymousUserCreateManyArgs} args - Arguments to create many AnonymousUsers.
     *     @example
     *     // Create many AnonymousUsers
     *     const anonymousUser = await prisma.anonymousUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends AnonymousUserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnonymousUserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AnonymousUser.
     * @param {AnonymousUserDeleteArgs} args - Arguments to delete one AnonymousUser.
     * @example
     * // Delete one AnonymousUser
     * const AnonymousUser = await prisma.anonymousUser.delete({
     *   where: {
     *     // ... filter to delete one AnonymousUser
     *   }
     * })
     *
     **/
    delete<T extends AnonymousUserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AnonymousUserDeleteArgs<ExtArgs>>
    ): Prisma__AnonymousUserClient<
      $Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >

    /**
     * Update one AnonymousUser.
     * @param {AnonymousUserUpdateArgs} args - Arguments to update one AnonymousUser.
     * @example
     * // Update one AnonymousUser
     * const anonymousUser = await prisma.anonymousUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends AnonymousUserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AnonymousUserUpdateArgs<ExtArgs>>
    ): Prisma__AnonymousUserClient<
      $Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >

    /**
     * Delete zero or more AnonymousUsers.
     * @param {AnonymousUserDeleteManyArgs} args - Arguments to filter AnonymousUsers to delete.
     * @example
     * // Delete a few AnonymousUsers
     * const { count } = await prisma.anonymousUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends AnonymousUserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnonymousUserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnonymousUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnonymousUsers
     * const anonymousUser = await prisma.anonymousUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends AnonymousUserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AnonymousUserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AnonymousUser.
     * @param {AnonymousUserUpsertArgs} args - Arguments to update or create a AnonymousUser.
     * @example
     * // Update or create a AnonymousUser
     * const anonymousUser = await prisma.anonymousUser.upsert({
     *   create: {
     *     // ... data to create a AnonymousUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnonymousUser we want to update
     *   }
     * })
     **/
    upsert<T extends AnonymousUserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AnonymousUserUpsertArgs<ExtArgs>>
    ): Prisma__AnonymousUserClient<
      $Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >

    /**
     * Count the number of AnonymousUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserCountArgs} args - Arguments to filter AnonymousUsers to count.
     * @example
     * // Count the number of AnonymousUsers
     * const count = await prisma.anonymousUser.count({
     *   where: {
     *     // ... the filter for the AnonymousUsers we want to count
     *   }
     * })
     **/
    count<T extends AnonymousUserCountArgs>(
      args?: Subset<T, AnonymousUserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnonymousUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnonymousUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnonymousUserAggregateArgs>(
      args: Subset<T, AnonymousUserAggregateArgs>
    ): Prisma.PrismaPromise<GetAnonymousUserAggregateType<T>>

    /**
     * Group by AnonymousUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserGroupByArgs} args - Group by arguments.
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
      T extends AnonymousUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnonymousUserGroupByArgs['orderBy'] }
        : { orderBy?: AnonymousUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
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
    >(
      args: SubsetIntersection<T, AnonymousUserGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetAnonymousUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the AnonymousUser model
     */
    readonly fields: AnonymousUserFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnonymousUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnonymousUserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the AnonymousUser model
   */
  interface AnonymousUserFieldRefs {
    readonly id: FieldRef<'AnonymousUser', 'String'>
    readonly createdAt: FieldRef<'AnonymousUser', 'DateTime'>
    readonly anonymousId: FieldRef<'AnonymousUser', 'String'>
    readonly fingerprint: FieldRef<'AnonymousUser', 'String'>
    readonly lastAccessed: FieldRef<'AnonymousUser', 'DateTime'>
  }

  // Custom InputTypes

  /**
   * AnonymousUser findUnique
   */
  export type AnonymousUserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Filter, which AnonymousUser to fetch.
     */
    where: AnonymousUserWhereUniqueInput
  }

  /**
   * AnonymousUser findUniqueOrThrow
   */
  export type AnonymousUserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Filter, which AnonymousUser to fetch.
     */
    where: AnonymousUserWhereUniqueInput
  }

  /**
   * AnonymousUser findFirst
   */
  export type AnonymousUserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Filter, which AnonymousUser to fetch.
     */
    where?: AnonymousUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AnonymousUsers to fetch.
     */
    orderBy?:
      | AnonymousUserOrderByWithRelationAndSearchRelevanceInput
      | AnonymousUserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AnonymousUsers.
     */
    cursor?: AnonymousUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AnonymousUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AnonymousUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AnonymousUsers.
     */
    distinct?: AnonymousUserScalarFieldEnum | AnonymousUserScalarFieldEnum[]
  }

  /**
   * AnonymousUser findFirstOrThrow
   */
  export type AnonymousUserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Filter, which AnonymousUser to fetch.
     */
    where?: AnonymousUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AnonymousUsers to fetch.
     */
    orderBy?:
      | AnonymousUserOrderByWithRelationAndSearchRelevanceInput
      | AnonymousUserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AnonymousUsers.
     */
    cursor?: AnonymousUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AnonymousUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AnonymousUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AnonymousUsers.
     */
    distinct?: AnonymousUserScalarFieldEnum | AnonymousUserScalarFieldEnum[]
  }

  /**
   * AnonymousUser findMany
   */
  export type AnonymousUserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Filter, which AnonymousUsers to fetch.
     */
    where?: AnonymousUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AnonymousUsers to fetch.
     */
    orderBy?:
      | AnonymousUserOrderByWithRelationAndSearchRelevanceInput
      | AnonymousUserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AnonymousUsers.
     */
    cursor?: AnonymousUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AnonymousUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AnonymousUsers.
     */
    skip?: number
    distinct?: AnonymousUserScalarFieldEnum | AnonymousUserScalarFieldEnum[]
  }

  /**
   * AnonymousUser create
   */
  export type AnonymousUserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * The data needed to create a AnonymousUser.
     */
    data: XOR<AnonymousUserCreateInput, AnonymousUserUncheckedCreateInput>
  }

  /**
   * AnonymousUser createMany
   */
  export type AnonymousUserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many AnonymousUsers.
     */
    data: AnonymousUserCreateManyInput | AnonymousUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnonymousUser update
   */
  export type AnonymousUserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * The data needed to update a AnonymousUser.
     */
    data: XOR<AnonymousUserUpdateInput, AnonymousUserUncheckedUpdateInput>
    /**
     * Choose, which AnonymousUser to update.
     */
    where: AnonymousUserWhereUniqueInput
  }

  /**
   * AnonymousUser updateMany
   */
  export type AnonymousUserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update AnonymousUsers.
     */
    data: XOR<
      AnonymousUserUpdateManyMutationInput,
      AnonymousUserUncheckedUpdateManyInput
    >
    /**
     * Filter which AnonymousUsers to update
     */
    where?: AnonymousUserWhereInput
  }

  /**
   * AnonymousUser upsert
   */
  export type AnonymousUserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * The filter to search for the AnonymousUser to update in case it exists.
     */
    where: AnonymousUserWhereUniqueInput
    /**
     * In case the AnonymousUser found by the `where` argument doesn't exist, create a new AnonymousUser with this data.
     */
    create: XOR<AnonymousUserCreateInput, AnonymousUserUncheckedCreateInput>
    /**
     * In case the AnonymousUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnonymousUserUpdateInput, AnonymousUserUncheckedUpdateInput>
  }

  /**
   * AnonymousUser delete
   */
  export type AnonymousUserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Filter which AnonymousUser to delete.
     */
    where: AnonymousUserWhereUniqueInput
  }

  /**
   * AnonymousUser deleteMany
   */
  export type AnonymousUserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which AnonymousUsers to delete
     */
    where?: AnonymousUserWhereInput
  }

  /**
   * AnonymousUser without action
   */
  export type AnonymousUserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
  }

  /**
   * Model Budget
   */

  export type AggregateBudget = {
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  export type BudgetAvgAggregateOutputType = {
    balance: Decimal | null
    currentCost: Decimal | null
  }

  export type BudgetSumAggregateOutputType = {
    balance: Decimal | null
    currentCost: Decimal | null
  }

  export type BudgetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    balance: Decimal | null
    currentCost: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BudgetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    balance: Decimal | null
    currentCost: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BudgetCountAggregateOutputType = {
    id: number
    userId: number
    balance: number
    currentCost: number
    modelCost: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type BudgetAvgAggregateInputType = {
    balance?: true
    currentCost?: true
  }

  export type BudgetSumAggregateInputType = {
    balance?: true
    currentCost?: true
  }

  export type BudgetMinAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    currentCost?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BudgetMaxAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    currentCost?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BudgetCountAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    currentCost?: true
    modelCost?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BudgetAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Budget to aggregate.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Budgets to fetch.
     */
    orderBy?:
      | BudgetOrderByWithRelationAndSearchRelevanceInput
      | BudgetOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Budgets
     **/
    _count?: true | BudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: BudgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: BudgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BudgetMaxAggregateInputType
  }

  export type GetBudgetAggregateType<T extends BudgetAggregateArgs> = {
    [P in keyof T & keyof AggregateBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudget[P]>
      : GetScalarType<T[P], AggregateBudget[P]>
  }

  export type BudgetGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: BudgetWhereInput
    orderBy?:
      | BudgetOrderByWithAggregationInput
      | BudgetOrderByWithAggregationInput[]
    by: BudgetScalarFieldEnum[] | BudgetScalarFieldEnum
    having?: BudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetCountAggregateInputType | true
    _avg?: BudgetAvgAggregateInputType
    _sum?: BudgetSumAggregateInputType
    _min?: BudgetMinAggregateInputType
    _max?: BudgetMaxAggregateInputType
  }

  export type BudgetGroupByOutputType = {
    id: string
    userId: string
    balance: Decimal
    currentCost: Decimal | null
    modelCost: JsonValue | null
    createdAt: Date
    updatedAt: Date | null
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  type GetBudgetGroupByPayload<T extends BudgetGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BudgetGroupByOutputType, T['by']> & {
          [P in keyof T & keyof BudgetGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetGroupByOutputType[P]>
        }
      >
    >

  export type BudgetSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      userId?: boolean
      balance?: boolean
      currentCost?: boolean
      modelCost?: boolean
      createdAt?: boolean
      updatedAt?: boolean
    },
    ExtArgs['result']['budget']
  >

  export type BudgetSelectScalar = {
    id?: boolean
    userId?: boolean
    balance?: boolean
    currentCost?: boolean
    modelCost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type $BudgetPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Budget'
    objects: {}
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        userId: string
        balance: Prisma.Decimal
        currentCost: Prisma.Decimal | null
        modelCost: Prisma.JsonValue | null
        createdAt: Date
        updatedAt: Date | null
      },
      ExtArgs['result']['budget']
    >
    composites: {}
  }

  type BudgetGetPayload<
    S extends boolean | null | undefined | BudgetDefaultArgs
  > = $Result.GetResult<Prisma.$BudgetPayload, S>

  type BudgetCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<BudgetFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: BudgetCountAggregateInputType | true
  }

  export interface BudgetDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Budget']
      meta: { name: 'Budget' }
    }
    /**
     * Find zero or one Budget that matches the filter.
     * @param {BudgetFindUniqueArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends BudgetFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BudgetFindUniqueArgs<ExtArgs>>
    ): Prisma__BudgetClient<
      $Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >

    /**
     * Find one Budget that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {BudgetFindUniqueOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends BudgetFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BudgetFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BudgetClient<
      $Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >

    /**
     * Find the first Budget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends BudgetFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BudgetFindFirstArgs<ExtArgs>>
    ): Prisma__BudgetClient<
      $Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >

    /**
     * Find the first Budget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends BudgetFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BudgetFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BudgetClient<
      $Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >

    /**
     * Find zero or more Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Budgets
     * const budgets = await prisma.budget.findMany()
     *
     * // Get first 10 Budgets
     * const budgets = await prisma.budget.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const budgetWithIdOnly = await prisma.budget.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends BudgetFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BudgetFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, 'findMany'>
    >

    /**
     * Create a Budget.
     * @param {BudgetCreateArgs} args - Arguments to create a Budget.
     * @example
     * // Create one Budget
     * const Budget = await prisma.budget.create({
     *   data: {
     *     // ... data to create a Budget
     *   }
     * })
     *
     **/
    create<T extends BudgetCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BudgetCreateArgs<ExtArgs>>
    ): Prisma__BudgetClient<
      $Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >

    /**
     * Create many Budgets.
     *     @param {BudgetCreateManyArgs} args - Arguments to create many Budgets.
     *     @example
     *     // Create many Budgets
     *     const budget = await prisma.budget.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends BudgetCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BudgetCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Budget.
     * @param {BudgetDeleteArgs} args - Arguments to delete one Budget.
     * @example
     * // Delete one Budget
     * const Budget = await prisma.budget.delete({
     *   where: {
     *     // ... filter to delete one Budget
     *   }
     * })
     *
     **/
    delete<T extends BudgetDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BudgetDeleteArgs<ExtArgs>>
    ): Prisma__BudgetClient<
      $Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >

    /**
     * Update one Budget.
     * @param {BudgetUpdateArgs} args - Arguments to update one Budget.
     * @example
     * // Update one Budget
     * const budget = await prisma.budget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends BudgetUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BudgetUpdateArgs<ExtArgs>>
    ): Prisma__BudgetClient<
      $Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >

    /**
     * Delete zero or more Budgets.
     * @param {BudgetDeleteManyArgs} args - Arguments to filter Budgets to delete.
     * @example
     * // Delete a few Budgets
     * const { count } = await prisma.budget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends BudgetDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BudgetDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends BudgetUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BudgetUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Budget.
     * @param {BudgetUpsertArgs} args - Arguments to update or create a Budget.
     * @example
     * // Update or create a Budget
     * const budget = await prisma.budget.upsert({
     *   create: {
     *     // ... data to create a Budget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Budget we want to update
     *   }
     * })
     **/
    upsert<T extends BudgetUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BudgetUpsertArgs<ExtArgs>>
    ): Prisma__BudgetClient<
      $Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >

    /**
     * Count the number of Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCountArgs} args - Arguments to filter Budgets to count.
     * @example
     * // Count the number of Budgets
     * const count = await prisma.budget.count({
     *   where: {
     *     // ... the filter for the Budgets we want to count
     *   }
     * })
     **/
    count<T extends BudgetCountArgs>(
      args?: Subset<T, BudgetCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BudgetAggregateArgs>(
      args: Subset<T, BudgetAggregateArgs>
    ): Prisma.PrismaPromise<GetBudgetAggregateType<T>>

    /**
     * Group by Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetGroupByArgs} args - Group by arguments.
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
      T extends BudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BudgetGroupByArgs['orderBy'] }
        : { orderBy?: BudgetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
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
    >(
      args: SubsetIntersection<T, BudgetGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetBudgetGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Budget model
     */
    readonly fields: BudgetFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Budget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BudgetClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Budget model
   */
  interface BudgetFieldRefs {
    readonly id: FieldRef<'Budget', 'String'>
    readonly userId: FieldRef<'Budget', 'String'>
    readonly balance: FieldRef<'Budget', 'Decimal'>
    readonly currentCost: FieldRef<'Budget', 'Decimal'>
    readonly modelCost: FieldRef<'Budget', 'Json'>
    readonly createdAt: FieldRef<'Budget', 'DateTime'>
    readonly updatedAt: FieldRef<'Budget', 'DateTime'>
  }

  // Custom InputTypes

  /**
   * Budget findUnique
   */
  export type BudgetFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findUniqueOrThrow
   */
  export type BudgetFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findFirst
   */
  export type BudgetFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Budgets to fetch.
     */
    orderBy?:
      | BudgetOrderByWithRelationAndSearchRelevanceInput
      | BudgetOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findFirstOrThrow
   */
  export type BudgetFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Budgets to fetch.
     */
    orderBy?:
      | BudgetOrderByWithRelationAndSearchRelevanceInput
      | BudgetOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findMany
   */
  export type BudgetFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Filter, which Budgets to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Budgets to fetch.
     */
    orderBy?:
      | BudgetOrderByWithRelationAndSearchRelevanceInput
      | BudgetOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Budgets.
     */
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget create
   */
  export type BudgetCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * The data needed to create a Budget.
     */
    data: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
  }

  /**
   * Budget createMany
   */
  export type BudgetCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Budget update
   */
  export type BudgetUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * The data needed to update a Budget.
     */
    data: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
    /**
     * Choose, which Budget to update.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget updateMany
   */
  export type BudgetUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
  }

  /**
   * Budget upsert
   */
  export type BudgetUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * The filter to search for the Budget to update in case it exists.
     */
    where: BudgetWhereUniqueInput
    /**
     * In case the Budget found by the `where` argument doesn't exist, create a new Budget with this data.
     */
    create: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
    /**
     * In case the Budget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
  }

  /**
   * Budget delete
   */
  export type BudgetDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Filter which Budget to delete.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget deleteMany
   */
  export type BudgetDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Budgets to delete
     */
    where?: BudgetWhereInput
  }

  /**
   * Budget without action
   */
  export type BudgetDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
  }

  /**
   * Model Promotion
   */

  export type AggregatePromotion = {
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  export type PromotionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PromotionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PromotionMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    type: $Enums.PromotionType | null
    amount: Decimal | null
    description: string | null
    validFrom: Date | null
    validUntil: Date | null
    isUsed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    type: $Enums.PromotionType | null
    amount: Decimal | null
    description: string | null
    validFrom: Date | null
    validUntil: Date | null
    isUsed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotionCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    type: number
    amount: number
    description: number
    validFrom: number
    validUntil: number
    isUsed: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type PromotionAvgAggregateInputType = {
    amount?: true
  }

  export type PromotionSumAggregateInputType = {
    amount?: true
  }

  export type PromotionMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    type?: true
    amount?: true
    description?: true
    validFrom?: true
    validUntil?: true
    isUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotionMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    type?: true
    amount?: true
    description?: true
    validFrom?: true
    validUntil?: true
    isUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotionCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    type?: true
    amount?: true
    description?: true
    validFrom?: true
    validUntil?: true
    isUsed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromotionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Promotion to aggregate.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Promotions to fetch.
     */
    orderBy?:
      | PromotionOrderByWithRelationAndSearchRelevanceInput
      | PromotionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Promotions
     **/
    _count?: true | PromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PromotionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PromotionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PromotionMaxAggregateInputType
  }

  export type GetPromotionAggregateType<T extends PromotionAggregateArgs> = {
    [P in keyof T & keyof AggregatePromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotion[P]>
      : GetScalarType<T[P], AggregatePromotion[P]>
  }

  export type PromotionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: PromotionWhereInput
    orderBy?:
      | PromotionOrderByWithAggregationInput
      | PromotionOrderByWithAggregationInput[]
    by: PromotionScalarFieldEnum[] | PromotionScalarFieldEnum
    having?: PromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionCountAggregateInputType | true
    _avg?: PromotionAvgAggregateInputType
    _sum?: PromotionSumAggregateInputType
    _min?: PromotionMinAggregateInputType
    _max?: PromotionMaxAggregateInputType
  }

  export type PromotionGroupByOutputType = {
    id: string
    name: string
    userId: string
    type: $Enums.PromotionType
    amount: Decimal
    description: string | null
    validFrom: Date
    validUntil: Date
    isUsed: boolean
    createdAt: Date
    updatedAt: Date | null
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  type GetPromotionGroupByPayload<T extends PromotionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PromotionGroupByOutputType, T['by']> & {
          [P in keyof T & keyof PromotionGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionGroupByOutputType[P]>
        }
      >
    >

  export type PromotionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      userId?: boolean
      type?: boolean
      amount?: boolean
      description?: boolean
      validFrom?: boolean
      validUntil?: boolean
      isUsed?: boolean
      createdAt?: boolean
      updatedAt?: boolean
    },
    ExtArgs['result']['promotion']
  >

  export type PromotionSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    validFrom?: boolean
    validUntil?: boolean
    isUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type $PromotionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Promotion'
    objects: {}
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        name: string
        userId: string
        type: $Enums.PromotionType
        amount: Prisma.Decimal
        description: string | null
        validFrom: Date
        validUntil: Date
        isUsed: boolean
        createdAt: Date
        updatedAt: Date | null
      },
      ExtArgs['result']['promotion']
    >
    composites: {}
  }

  type PromotionGetPayload<
    S extends boolean | null | undefined | PromotionDefaultArgs
  > = $Result.GetResult<Prisma.$PromotionPayload, S>

  type PromotionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<PromotionFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: PromotionCountAggregateInputType | true
  }

  export interface PromotionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Promotion']
      meta: { name: 'Promotion' }
    }
    /**
     * Find zero or one Promotion that matches the filter.
     * @param {PromotionFindUniqueArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends PromotionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionFindUniqueArgs<ExtArgs>>
    ): Prisma__PromotionClient<
      $Result.GetResult<
        Prisma.$PromotionPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find one Promotion that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {PromotionFindUniqueOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends PromotionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PromotionClient<
      $Result.GetResult<
        Prisma.$PromotionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find the first Promotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends PromotionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionFindFirstArgs<ExtArgs>>
    ): Prisma__PromotionClient<
      $Result.GetResult<
        Prisma.$PromotionPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find the first Promotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends PromotionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PromotionClient<
      $Result.GetResult<
        Prisma.$PromotionPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find zero or more Promotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotions
     * const promotions = await prisma.promotion.findMany()
     *
     * // Get first 10 Promotions
     * const promotions = await prisma.promotion.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const promotionWithIdOnly = await prisma.promotion.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends PromotionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'findMany'>
    >

    /**
     * Create a Promotion.
     * @param {PromotionCreateArgs} args - Arguments to create a Promotion.
     * @example
     * // Create one Promotion
     * const Promotion = await prisma.promotion.create({
     *   data: {
     *     // ... data to create a Promotion
     *   }
     * })
     *
     **/
    create<T extends PromotionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionCreateArgs<ExtArgs>>
    ): Prisma__PromotionClient<
      $Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >

    /**
     * Create many Promotions.
     *     @param {PromotionCreateManyArgs} args - Arguments to create many Promotions.
     *     @example
     *     // Create many Promotions
     *     const promotion = await prisma.promotion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends PromotionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Promotion.
     * @param {PromotionDeleteArgs} args - Arguments to delete one Promotion.
     * @example
     * // Delete one Promotion
     * const Promotion = await prisma.promotion.delete({
     *   where: {
     *     // ... filter to delete one Promotion
     *   }
     * })
     *
     **/
    delete<T extends PromotionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionDeleteArgs<ExtArgs>>
    ): Prisma__PromotionClient<
      $Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >

    /**
     * Update one Promotion.
     * @param {PromotionUpdateArgs} args - Arguments to update one Promotion.
     * @example
     * // Update one Promotion
     * const promotion = await prisma.promotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends PromotionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionUpdateArgs<ExtArgs>>
    ): Prisma__PromotionClient<
      $Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >

    /**
     * Delete zero or more Promotions.
     * @param {PromotionDeleteManyArgs} args - Arguments to filter Promotions to delete.
     * @example
     * // Delete a few Promotions
     * const { count } = await prisma.promotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends PromotionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends PromotionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promotion.
     * @param {PromotionUpsertArgs} args - Arguments to update or create a Promotion.
     * @example
     * // Update or create a Promotion
     * const promotion = await prisma.promotion.upsert({
     *   create: {
     *     // ... data to create a Promotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotion we want to update
     *   }
     * })
     **/
    upsert<T extends PromotionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionUpsertArgs<ExtArgs>>
    ): Prisma__PromotionClient<
      $Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >

    /**
     * Count the number of Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCountArgs} args - Arguments to filter Promotions to count.
     * @example
     * // Count the number of Promotions
     * const count = await prisma.promotion.count({
     *   where: {
     *     // ... the filter for the Promotions we want to count
     *   }
     * })
     **/
    count<T extends PromotionCountArgs>(
      args?: Subset<T, PromotionCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromotionAggregateArgs>(
      args: Subset<T, PromotionAggregateArgs>
    ): Prisma.PrismaPromise<GetPromotionAggregateType<T>>

    /**
     * Group by Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionGroupByArgs} args - Group by arguments.
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
      T extends PromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotionGroupByArgs['orderBy'] }
        : { orderBy?: PromotionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
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
    >(
      args: SubsetIntersection<T, PromotionGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetPromotionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Promotion model
     */
    readonly fields: PromotionFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Promotion model
   */
  interface PromotionFieldRefs {
    readonly id: FieldRef<'Promotion', 'String'>
    readonly name: FieldRef<'Promotion', 'String'>
    readonly userId: FieldRef<'Promotion', 'String'>
    readonly type: FieldRef<'Promotion', 'PromotionType'>
    readonly amount: FieldRef<'Promotion', 'Decimal'>
    readonly description: FieldRef<'Promotion', 'String'>
    readonly validFrom: FieldRef<'Promotion', 'DateTime'>
    readonly validUntil: FieldRef<'Promotion', 'DateTime'>
    readonly isUsed: FieldRef<'Promotion', 'Boolean'>
    readonly createdAt: FieldRef<'Promotion', 'DateTime'>
    readonly updatedAt: FieldRef<'Promotion', 'DateTime'>
  }

  // Custom InputTypes

  /**
   * Promotion findUnique
   */
  export type PromotionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findUniqueOrThrow
   */
  export type PromotionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findFirst
   */
  export type PromotionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Promotions to fetch.
     */
    orderBy?:
      | PromotionOrderByWithRelationAndSearchRelevanceInput
      | PromotionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findFirstOrThrow
   */
  export type PromotionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Promotions to fetch.
     */
    orderBy?:
      | PromotionOrderByWithRelationAndSearchRelevanceInput
      | PromotionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findMany
   */
  export type PromotionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotions to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Promotions to fetch.
     */
    orderBy?:
      | PromotionOrderByWithRelationAndSearchRelevanceInput
      | PromotionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Promotions.
     */
    skip?: number
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion create
   */
  export type PromotionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * The data needed to create a Promotion.
     */
    data: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
  }

  /**
   * Promotion createMany
   */
  export type PromotionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotion update
   */
  export type PromotionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * The data needed to update a Promotion.
     */
    data: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
    /**
     * Choose, which Promotion to update.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion updateMany
   */
  export type PromotionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Promotions.
     */
    data: XOR<
      PromotionUpdateManyMutationInput,
      PromotionUncheckedUpdateManyInput
    >
    /**
     * Filter which Promotions to update
     */
    where?: PromotionWhereInput
  }

  /**
   * Promotion upsert
   */
  export type PromotionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * The filter to search for the Promotion to update in case it exists.
     */
    where: PromotionWhereUniqueInput
    /**
     * In case the Promotion found by the `where` argument doesn't exist, create a new Promotion with this data.
     */
    create: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
    /**
     * In case the Promotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
  }

  /**
   * Promotion delete
   */
  export type PromotionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter which Promotion to delete.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion deleteMany
   */
  export type PromotionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Promotions to delete
     */
    where?: PromotionWhereInput
  }

  /**
   * Promotion without action
   */
  export type PromotionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
  }

  /**
   * Model agents
   */

  export type AggregateAgents = {
    _count: AgentsCountAggregateOutputType | null
    _avg: AgentsAvgAggregateOutputType | null
    _sum: AgentsSumAggregateOutputType | null
    _min: AgentsMinAggregateOutputType | null
    _max: AgentsMaxAggregateOutputType | null
  }

  export type AgentsAvgAggregateOutputType = {
    likesCount: number | null
    commentsCount: number | null
  }

  export type AgentsSumAggregateOutputType = {
    likesCount: number | null
    commentsCount: bigint | null
  }

  export type AgentsMinAggregateOutputType = {
    id: string | null
    publicVariables: string | null
    secrets: string | null
    name: string | null
    enabled: boolean | null
    updatedAt: string | null
    pingedAt: string | null
    projectId: string | null
    runState: string | null
    image: string | null
    rootSpellId: string | null
    default: boolean | null
    createdAt: Date | null
    currentSpellReleaseId: string | null
    embedModel: string | null
    version: string | null
    embeddingProvider: string | null
    embeddingModel: string | null
    publicAgentId: string | null
    description: string | null
    remixable: boolean | null
    featured: boolean | null
    isTemplate: boolean | null
    isPublic: boolean | null
    creatorId: string | null
    creatorName: string | null
    creatorImage: string | null
    likesCount: number | null
    commentsCount: bigint | null
    isDraft: boolean | null
    draftAgentId: string | null
  }

  export type AgentsMaxAggregateOutputType = {
    id: string | null
    publicVariables: string | null
    secrets: string | null
    name: string | null
    enabled: boolean | null
    updatedAt: string | null
    pingedAt: string | null
    projectId: string | null
    runState: string | null
    image: string | null
    rootSpellId: string | null
    default: boolean | null
    createdAt: Date | null
    currentSpellReleaseId: string | null
    embedModel: string | null
    version: string | null
    embeddingProvider: string | null
    embeddingModel: string | null
    publicAgentId: string | null
    description: string | null
    remixable: boolean | null
    featured: boolean | null
    isTemplate: boolean | null
    isPublic: boolean | null
    creatorId: string | null
    creatorName: string | null
    creatorImage: string | null
    likesCount: number | null
    commentsCount: bigint | null
    isDraft: boolean | null
    draftAgentId: string | null
  }

  export type AgentsCountAggregateOutputType = {
    id: number
    rootSpell: number
    publicVariables: number
    secrets: number
    name: number
    enabled: number
    updatedAt: number
    pingedAt: number
    projectId: number
    data: number
    runState: number
    image: number
    rootSpellId: number
    default: number
    createdAt: number
    currentSpellReleaseId: number
    embedModel: number
    version: number
    embeddingProvider: number
    embeddingModel: number
    publicAgentId: number
    description: number
    remixable: number
    featured: number
    isTemplate: number
    isPublic: number
    creatorId: number
    creatorName: number
    creatorImage: number
    likesCount: number
    commentsCount: number
    isDraft: number
    draftAgentId: number
    _all: number
  }

  export type AgentsAvgAggregateInputType = {
    likesCount?: true
    commentsCount?: true
  }

  export type AgentsSumAggregateInputType = {
    likesCount?: true
    commentsCount?: true
  }

  export type AgentsMinAggregateInputType = {
    id?: true
    publicVariables?: true
    secrets?: true
    name?: true
    enabled?: true
    updatedAt?: true
    pingedAt?: true
    projectId?: true
    runState?: true
    image?: true
    rootSpellId?: true
    default?: true
    createdAt?: true
    currentSpellReleaseId?: true
    embedModel?: true
    version?: true
    embeddingProvider?: true
    embeddingModel?: true
    publicAgentId?: true
    description?: true
    remixable?: true
    featured?: true
    isTemplate?: true
    isPublic?: true
    creatorId?: true
    creatorName?: true
    creatorImage?: true
    likesCount?: true
    commentsCount?: true
    isDraft?: true
    draftAgentId?: true
  }

  export type AgentsMaxAggregateInputType = {
    id?: true
    publicVariables?: true
    secrets?: true
    name?: true
    enabled?: true
    updatedAt?: true
    pingedAt?: true
    projectId?: true
    runState?: true
    image?: true
    rootSpellId?: true
    default?: true
    createdAt?: true
    currentSpellReleaseId?: true
    embedModel?: true
    version?: true
    embeddingProvider?: true
    embeddingModel?: true
    publicAgentId?: true
    description?: true
    remixable?: true
    featured?: true
    isTemplate?: true
    isPublic?: true
    creatorId?: true
    creatorName?: true
    creatorImage?: true
    likesCount?: true
    commentsCount?: true
    isDraft?: true
    draftAgentId?: true
  }

  export type AgentsCountAggregateInputType = {
    id?: true
    rootSpell?: true
    publicVariables?: true
    secrets?: true
    name?: true
    enabled?: true
    updatedAt?: true
    pingedAt?: true
    projectId?: true
    data?: true
    runState?: true
    image?: true
    rootSpellId?: true
    default?: true
    createdAt?: true
    currentSpellReleaseId?: true
    embedModel?: true
    version?: true
    embeddingProvider?: true
    embeddingModel?: true
    publicAgentId?: true
    description?: true
    remixable?: true
    featured?: true
    isTemplate?: true
    isPublic?: true
    creatorId?: true
    creatorName?: true
    creatorImage?: true
    likesCount?: true
    commentsCount?: true
    isDraft?: true
    draftAgentId?: true
    _all?: true
  }

  export type AgentsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which agents to aggregate.
     */
    where?: agentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agents to fetch.
     */
    orderBy?:
      | agentsOrderByWithRelationAndSearchRelevanceInput
      | agentsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: agentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned agents
     **/
    _count?: true | AgentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AgentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AgentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AgentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AgentsMaxAggregateInputType
  }

  export type GetAgentsAggregateType<T extends AgentsAggregateArgs> = {
    [P in keyof T & keyof AggregateAgents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgents[P]>
      : GetScalarType<T[P], AggregateAgents[P]>
  }

  export type agentsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: agentsWhereInput
    orderBy?:
      | agentsOrderByWithAggregationInput
      | agentsOrderByWithAggregationInput[]
    by: AgentsScalarFieldEnum[] | AgentsScalarFieldEnum
    having?: agentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentsCountAggregateInputType | true
    _avg?: AgentsAvgAggregateInputType
    _sum?: AgentsSumAggregateInputType
    _min?: AgentsMinAggregateInputType
    _max?: AgentsMaxAggregateInputType
  }

  export type AgentsGroupByOutputType = {
    id: string
    rootSpell: JsonValue | null
    publicVariables: string | null
    secrets: string | null
    name: string | null
    enabled: boolean | null
    updatedAt: string | null
    pingedAt: string | null
    projectId: string | null
    data: JsonValue | null
    runState: string | null
    image: string | null
    rootSpellId: string | null
    default: boolean | null
    createdAt: Date | null
    currentSpellReleaseId: string | null
    embedModel: string | null
    version: string | null
    embeddingProvider: string | null
    embeddingModel: string | null
    publicAgentId: string | null
    description: string | null
    remixable: boolean | null
    featured: boolean | null
    isTemplate: boolean | null
    isPublic: boolean | null
    creatorId: string | null
    creatorName: string | null
    creatorImage: string | null
    likesCount: number | null
    commentsCount: bigint | null
    isDraft: boolean | null
    draftAgentId: string | null
    _count: AgentsCountAggregateOutputType | null
    _avg: AgentsAvgAggregateOutputType | null
    _sum: AgentsSumAggregateOutputType | null
    _min: AgentsMinAggregateOutputType | null
    _max: AgentsMaxAggregateOutputType | null
  }

  type GetAgentsGroupByPayload<T extends agentsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AgentsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AgentsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentsGroupByOutputType[P]>
            : GetScalarType<T[P], AgentsGroupByOutputType[P]>
        }
      >
    >

  export type agentsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      rootSpell?: boolean
      publicVariables?: boolean
      secrets?: boolean
      name?: boolean
      enabled?: boolean
      updatedAt?: boolean
      pingedAt?: boolean
      projectId?: boolean
      data?: boolean
      runState?: boolean
      image?: boolean
      rootSpellId?: boolean
      default?: boolean
      createdAt?: boolean
      currentSpellReleaseId?: boolean
      embedModel?: boolean
      version?: boolean
      embeddingProvider?: boolean
      embeddingModel?: boolean
      publicAgentId?: boolean
      description?: boolean
      remixable?: boolean
      featured?: boolean
      isTemplate?: boolean
      isPublic?: boolean
      creatorId?: boolean
      creatorName?: boolean
      creatorImage?: boolean
      likesCount?: boolean
      commentsCount?: boolean
      isDraft?: boolean
      draftAgentId?: boolean
    },
    ExtArgs['result']['agents']
  >

  export type agentsSelectScalar = {
    id?: boolean
    rootSpell?: boolean
    publicVariables?: boolean
    secrets?: boolean
    name?: boolean
    enabled?: boolean
    updatedAt?: boolean
    pingedAt?: boolean
    projectId?: boolean
    data?: boolean
    runState?: boolean
    image?: boolean
    rootSpellId?: boolean
    default?: boolean
    createdAt?: boolean
    currentSpellReleaseId?: boolean
    embedModel?: boolean
    version?: boolean
    embeddingProvider?: boolean
    embeddingModel?: boolean
    publicAgentId?: boolean
    description?: boolean
    remixable?: boolean
    featured?: boolean
    isTemplate?: boolean
    isPublic?: boolean
    creatorId?: boolean
    creatorName?: boolean
    creatorImage?: boolean
    likesCount?: boolean
    commentsCount?: boolean
    isDraft?: boolean
    draftAgentId?: boolean
  }

  export type $agentsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'agents'
    objects: {}
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        rootSpell: Prisma.JsonValue | null
        publicVariables: string | null
        secrets: string | null
        name: string | null
        enabled: boolean | null
        updatedAt: string | null
        pingedAt: string | null
        projectId: string | null
        data: Prisma.JsonValue | null
        runState: string | null
        image: string | null
        rootSpellId: string | null
        default: boolean | null
        createdAt: Date | null
        currentSpellReleaseId: string | null
        embedModel: string | null
        version: string | null
        embeddingProvider: string | null
        embeddingModel: string | null
        publicAgentId: string | null
        description: string | null
        remixable: boolean | null
        featured: boolean | null
        isTemplate: boolean | null
        isPublic: boolean | null
        creatorId: string | null
        creatorName: string | null
        creatorImage: string | null
        likesCount: number | null
        commentsCount: bigint | null
        isDraft: boolean | null
        draftAgentId: string | null
      },
      ExtArgs['result']['agents']
    >
    composites: {}
  }

  type agentsGetPayload<
    S extends boolean | null | undefined | agentsDefaultArgs
  > = $Result.GetResult<Prisma.$agentsPayload, S>

  type agentsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<agentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: AgentsCountAggregateInputType | true
  }

  export interface agentsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['agents']
      meta: { name: 'agents' }
    }
    /**
     * Find zero or one Agents that matches the filter.
     * @param {agentsFindUniqueArgs} args - Arguments to find a Agents
     * @example
     * // Get one Agents
     * const agents = await prisma.agents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends agentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, agentsFindUniqueArgs<ExtArgs>>
    ): Prisma__agentsClient<
      $Result.GetResult<Prisma.$agentsPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >

    /**
     * Find one Agents that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {agentsFindUniqueOrThrowArgs} args - Arguments to find a Agents
     * @example
     * // Get one Agents
     * const agents = await prisma.agents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends agentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, agentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__agentsClient<
      $Result.GetResult<Prisma.$agentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >

    /**
     * Find the first Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agentsFindFirstArgs} args - Arguments to find a Agents
     * @example
     * // Get one Agents
     * const agents = await prisma.agents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends agentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, agentsFindFirstArgs<ExtArgs>>
    ): Prisma__agentsClient<
      $Result.GetResult<Prisma.$agentsPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >

    /**
     * Find the first Agents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agentsFindFirstOrThrowArgs} args - Arguments to find a Agents
     * @example
     * // Get one Agents
     * const agents = await prisma.agents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends agentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, agentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__agentsClient<
      $Result.GetResult<Prisma.$agentsPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agents.findMany()
     *
     * // Get first 10 Agents
     * const agents = await prisma.agents.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const agentsWithIdOnly = await prisma.agents.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends agentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, agentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$agentsPayload<ExtArgs>, T, 'findMany'>
    >

    /**
     * Create a Agents.
     * @param {agentsCreateArgs} args - Arguments to create a Agents.
     * @example
     * // Create one Agents
     * const Agents = await prisma.agents.create({
     *   data: {
     *     // ... data to create a Agents
     *   }
     * })
     *
     **/
    create<T extends agentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, agentsCreateArgs<ExtArgs>>
    ): Prisma__agentsClient<
      $Result.GetResult<Prisma.$agentsPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >

    /**
     * Create many Agents.
     *     @param {agentsCreateManyArgs} args - Arguments to create many Agents.
     *     @example
     *     // Create many Agents
     *     const agents = await prisma.agents.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends agentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, agentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Agents.
     * @param {agentsDeleteArgs} args - Arguments to delete one Agents.
     * @example
     * // Delete one Agents
     * const Agents = await prisma.agents.delete({
     *   where: {
     *     // ... filter to delete one Agents
     *   }
     * })
     *
     **/
    delete<T extends agentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, agentsDeleteArgs<ExtArgs>>
    ): Prisma__agentsClient<
      $Result.GetResult<Prisma.$agentsPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >

    /**
     * Update one Agents.
     * @param {agentsUpdateArgs} args - Arguments to update one Agents.
     * @example
     * // Update one Agents
     * const agents = await prisma.agents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends agentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, agentsUpdateArgs<ExtArgs>>
    ): Prisma__agentsClient<
      $Result.GetResult<Prisma.$agentsPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >

    /**
     * Delete zero or more Agents.
     * @param {agentsDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends agentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, agentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agents = await prisma.agents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends agentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, agentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agents.
     * @param {agentsUpsertArgs} args - Arguments to update or create a Agents.
     * @example
     * // Update or create a Agents
     * const agents = await prisma.agents.upsert({
     *   create: {
     *     // ... data to create a Agents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agents we want to update
     *   }
     * })
     **/
    upsert<T extends agentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, agentsUpsertArgs<ExtArgs>>
    ): Prisma__agentsClient<
      $Result.GetResult<Prisma.$agentsPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >

    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agentsCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agents.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
     **/
    count<T extends agentsCountArgs>(
      args?: Subset<T, agentsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgentsAggregateArgs>(
      args: Subset<T, AgentsAggregateArgs>
    ): Prisma.PrismaPromise<GetAgentsAggregateType<T>>

    /**
     * Group by Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agentsGroupByArgs} args - Group by arguments.
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
      T extends agentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agentsGroupByArgs['orderBy'] }
        : { orderBy?: agentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
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
    >(
      args: SubsetIntersection<T, agentsGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetAgentsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the agents model
     */
    readonly fields: agentsFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for agents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agentsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the agents model
   */
  interface agentsFieldRefs {
    readonly id: FieldRef<'agents', 'String'>
    readonly rootSpell: FieldRef<'agents', 'Json'>
    readonly publicVariables: FieldRef<'agents', 'String'>
    readonly secrets: FieldRef<'agents', 'String'>
    readonly name: FieldRef<'agents', 'String'>
    readonly enabled: FieldRef<'agents', 'Boolean'>
    readonly updatedAt: FieldRef<'agents', 'String'>
    readonly pingedAt: FieldRef<'agents', 'String'>
    readonly projectId: FieldRef<'agents', 'String'>
    readonly data: FieldRef<'agents', 'Json'>
    readonly runState: FieldRef<'agents', 'String'>
    readonly image: FieldRef<'agents', 'String'>
    readonly rootSpellId: FieldRef<'agents', 'String'>
    readonly default: FieldRef<'agents', 'Boolean'>
    readonly createdAt: FieldRef<'agents', 'DateTime'>
    readonly currentSpellReleaseId: FieldRef<'agents', 'String'>
    readonly embedModel: FieldRef<'agents', 'String'>
    readonly version: FieldRef<'agents', 'String'>
    readonly embeddingProvider: FieldRef<'agents', 'String'>
    readonly embeddingModel: FieldRef<'agents', 'String'>
    readonly publicAgentId: FieldRef<'agents', 'String'>
    readonly description: FieldRef<'agents', 'String'>
    readonly remixable: FieldRef<'agents', 'Boolean'>
    readonly featured: FieldRef<'agents', 'Boolean'>
    readonly isTemplate: FieldRef<'agents', 'Boolean'>
    readonly isPublic: FieldRef<'agents', 'Boolean'>
    readonly creatorId: FieldRef<'agents', 'String'>
    readonly creatorName: FieldRef<'agents', 'String'>
    readonly creatorImage: FieldRef<'agents', 'String'>
    readonly likesCount: FieldRef<'agents', 'Int'>
    readonly commentsCount: FieldRef<'agents', 'BigInt'>
    readonly isDraft: FieldRef<'agents', 'Boolean'>
    readonly draftAgentId: FieldRef<'agents', 'String'>
  }

  // Custom InputTypes

  /**
   * agents findUnique
   */
  export type agentsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
    /**
     * Filter, which agents to fetch.
     */
    where: agentsWhereUniqueInput
  }

  /**
   * agents findUniqueOrThrow
   */
  export type agentsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
    /**
     * Filter, which agents to fetch.
     */
    where: agentsWhereUniqueInput
  }

  /**
   * agents findFirst
   */
  export type agentsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
    /**
     * Filter, which agents to fetch.
     */
    where?: agentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agents to fetch.
     */
    orderBy?:
      | agentsOrderByWithRelationAndSearchRelevanceInput
      | agentsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for agents.
     */
    cursor?: agentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of agents.
     */
    distinct?: AgentsScalarFieldEnum | AgentsScalarFieldEnum[]
  }

  /**
   * agents findFirstOrThrow
   */
  export type agentsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
    /**
     * Filter, which agents to fetch.
     */
    where?: agentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agents to fetch.
     */
    orderBy?:
      | agentsOrderByWithRelationAndSearchRelevanceInput
      | agentsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for agents.
     */
    cursor?: agentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of agents.
     */
    distinct?: AgentsScalarFieldEnum | AgentsScalarFieldEnum[]
  }

  /**
   * agents findMany
   */
  export type agentsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
    /**
     * Filter, which agents to fetch.
     */
    where?: agentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agents to fetch.
     */
    orderBy?:
      | agentsOrderByWithRelationAndSearchRelevanceInput
      | agentsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing agents.
     */
    cursor?: agentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agents.
     */
    skip?: number
    distinct?: AgentsScalarFieldEnum | AgentsScalarFieldEnum[]
  }

  /**
   * agents create
   */
  export type agentsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
    /**
     * The data needed to create a agents.
     */
    data: XOR<agentsCreateInput, agentsUncheckedCreateInput>
  }

  /**
   * agents createMany
   */
  export type agentsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many agents.
     */
    data: agentsCreateManyInput | agentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agents update
   */
  export type agentsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
    /**
     * The data needed to update a agents.
     */
    data: XOR<agentsUpdateInput, agentsUncheckedUpdateInput>
    /**
     * Choose, which agents to update.
     */
    where: agentsWhereUniqueInput
  }

  /**
   * agents updateMany
   */
  export type agentsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update agents.
     */
    data: XOR<agentsUpdateManyMutationInput, agentsUncheckedUpdateManyInput>
    /**
     * Filter which agents to update
     */
    where?: agentsWhereInput
  }

  /**
   * agents upsert
   */
  export type agentsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
    /**
     * The filter to search for the agents to update in case it exists.
     */
    where: agentsWhereUniqueInput
    /**
     * In case the agents found by the `where` argument doesn't exist, create a new agents with this data.
     */
    create: XOR<agentsCreateInput, agentsUncheckedCreateInput>
    /**
     * In case the agents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agentsUpdateInput, agentsUncheckedUpdateInput>
  }

  /**
   * agents delete
   */
  export type agentsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
    /**
     * Filter which agents to delete.
     */
    where: agentsWhereUniqueInput
  }

  /**
   * agents deleteMany
   */
  export type agentsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which agents to delete
     */
    where?: agentsWhereInput
  }

  /**
   * agents without action
   */
  export type agentsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the agents
     */
    select?: agentsSelect<ExtArgs> | null
  }

  /**
   * Model spells
   */

  export type AggregateSpells = {
    _count: SpellsCountAggregateOutputType | null
    _min: SpellsMinAggregateOutputType | null
    _max: SpellsMaxAggregateOutputType | null
  }

  export type SpellsMinAggregateOutputType = {
    id: string | null
    name: string | null
    projectId: string | null
    createdAt: string | null
    updatedAt: string | null
    type: string | null
    spellReleaseId: string | null
  }

  export type SpellsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    projectId: string | null
    createdAt: string | null
    updatedAt: string | null
    type: string | null
    spellReleaseId: string | null
  }

  export type SpellsCountAggregateOutputType = {
    id: number
    name: number
    projectId: number
    graph: number
    createdAt: number
    updatedAt: number
    type: number
    spellReleaseId: number
    _all: number
  }

  export type SpellsMinAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    spellReleaseId?: true
  }

  export type SpellsMaxAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    spellReleaseId?: true
  }

  export type SpellsCountAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    graph?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    spellReleaseId?: true
    _all?: true
  }

  export type SpellsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which spells to aggregate.
     */
    where?: spellsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of spells to fetch.
     */
    orderBy?:
      | spellsOrderByWithRelationAndSearchRelevanceInput
      | spellsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: spellsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` spells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` spells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned spells
     **/
    _count?: true | SpellsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SpellsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SpellsMaxAggregateInputType
  }

  export type GetSpellsAggregateType<T extends SpellsAggregateArgs> = {
    [P in keyof T & keyof AggregateSpells]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpells[P]>
      : GetScalarType<T[P], AggregateSpells[P]>
  }

  export type spellsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: spellsWhereInput
    orderBy?:
      | spellsOrderByWithAggregationInput
      | spellsOrderByWithAggregationInput[]
    by: SpellsScalarFieldEnum[] | SpellsScalarFieldEnum
    having?: spellsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpellsCountAggregateInputType | true
    _min?: SpellsMinAggregateInputType
    _max?: SpellsMaxAggregateInputType
  }

  export type SpellsGroupByOutputType = {
    id: string
    name: string | null
    projectId: string | null
    graph: JsonValue | null
    createdAt: string | null
    updatedAt: string | null
    type: string | null
    spellReleaseId: string | null
    _count: SpellsCountAggregateOutputType | null
    _min: SpellsMinAggregateOutputType | null
    _max: SpellsMaxAggregateOutputType | null
  }

  type GetSpellsGroupByPayload<T extends spellsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SpellsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof SpellsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpellsGroupByOutputType[P]>
            : GetScalarType<T[P], SpellsGroupByOutputType[P]>
        }
      >
    >

  export type spellsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      projectId?: boolean
      graph?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      type?: boolean
      spellReleaseId?: boolean
    },
    ExtArgs['result']['spells']
  >

  export type spellsSelectScalar = {
    id?: boolean
    name?: boolean
    projectId?: boolean
    graph?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    spellReleaseId?: boolean
  }

  export type $spellsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'spells'
    objects: {}
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        name: string | null
        projectId: string | null
        graph: Prisma.JsonValue | null
        createdAt: string | null
        updatedAt: string | null
        type: string | null
        spellReleaseId: string | null
      },
      ExtArgs['result']['spells']
    >
    composites: {}
  }

  type spellsGetPayload<
    S extends boolean | null | undefined | spellsDefaultArgs
  > = $Result.GetResult<Prisma.$spellsPayload, S>

  type spellsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<spellsFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: SpellsCountAggregateInputType | true
  }

  export interface spellsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['spells']
      meta: { name: 'spells' }
    }
    /**
     * Find zero or one Spells that matches the filter.
     * @param {spellsFindUniqueArgs} args - Arguments to find a Spells
     * @example
     * // Get one Spells
     * const spells = await prisma.spells.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends spellsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, spellsFindUniqueArgs<ExtArgs>>
    ): Prisma__spellsClient<
      $Result.GetResult<Prisma.$spellsPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >

    /**
     * Find one Spells that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {spellsFindUniqueOrThrowArgs} args - Arguments to find a Spells
     * @example
     * // Get one Spells
     * const spells = await prisma.spells.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends spellsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, spellsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__spellsClient<
      $Result.GetResult<Prisma.$spellsPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >

    /**
     * Find the first Spells that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spellsFindFirstArgs} args - Arguments to find a Spells
     * @example
     * // Get one Spells
     * const spells = await prisma.spells.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends spellsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, spellsFindFirstArgs<ExtArgs>>
    ): Prisma__spellsClient<
      $Result.GetResult<Prisma.$spellsPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >

    /**
     * Find the first Spells that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spellsFindFirstOrThrowArgs} args - Arguments to find a Spells
     * @example
     * // Get one Spells
     * const spells = await prisma.spells.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends spellsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, spellsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__spellsClient<
      $Result.GetResult<Prisma.$spellsPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >

    /**
     * Find zero or more Spells that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spellsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spells
     * const spells = await prisma.spells.findMany()
     *
     * // Get first 10 Spells
     * const spells = await prisma.spells.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const spellsWithIdOnly = await prisma.spells.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends spellsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, spellsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$spellsPayload<ExtArgs>, T, 'findMany'>
    >

    /**
     * Create a Spells.
     * @param {spellsCreateArgs} args - Arguments to create a Spells.
     * @example
     * // Create one Spells
     * const Spells = await prisma.spells.create({
     *   data: {
     *     // ... data to create a Spells
     *   }
     * })
     *
     **/
    create<T extends spellsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, spellsCreateArgs<ExtArgs>>
    ): Prisma__spellsClient<
      $Result.GetResult<Prisma.$spellsPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >

    /**
     * Create many Spells.
     *     @param {spellsCreateManyArgs} args - Arguments to create many Spells.
     *     @example
     *     // Create many Spells
     *     const spells = await prisma.spells.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends spellsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, spellsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Spells.
     * @param {spellsDeleteArgs} args - Arguments to delete one Spells.
     * @example
     * // Delete one Spells
     * const Spells = await prisma.spells.delete({
     *   where: {
     *     // ... filter to delete one Spells
     *   }
     * })
     *
     **/
    delete<T extends spellsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, spellsDeleteArgs<ExtArgs>>
    ): Prisma__spellsClient<
      $Result.GetResult<Prisma.$spellsPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >

    /**
     * Update one Spells.
     * @param {spellsUpdateArgs} args - Arguments to update one Spells.
     * @example
     * // Update one Spells
     * const spells = await prisma.spells.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends spellsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, spellsUpdateArgs<ExtArgs>>
    ): Prisma__spellsClient<
      $Result.GetResult<Prisma.$spellsPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >

    /**
     * Delete zero or more Spells.
     * @param {spellsDeleteManyArgs} args - Arguments to filter Spells to delete.
     * @example
     * // Delete a few Spells
     * const { count } = await prisma.spells.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends spellsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, spellsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spellsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spells
     * const spells = await prisma.spells.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends spellsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, spellsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Spells.
     * @param {spellsUpsertArgs} args - Arguments to update or create a Spells.
     * @example
     * // Update or create a Spells
     * const spells = await prisma.spells.upsert({
     *   create: {
     *     // ... data to create a Spells
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spells we want to update
     *   }
     * })
     **/
    upsert<T extends spellsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, spellsUpsertArgs<ExtArgs>>
    ): Prisma__spellsClient<
      $Result.GetResult<Prisma.$spellsPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >

    /**
     * Count the number of Spells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spellsCountArgs} args - Arguments to filter Spells to count.
     * @example
     * // Count the number of Spells
     * const count = await prisma.spells.count({
     *   where: {
     *     // ... the filter for the Spells we want to count
     *   }
     * })
     **/
    count<T extends spellsCountArgs>(
      args?: Subset<T, spellsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpellsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpellsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpellsAggregateArgs>(
      args: Subset<T, SpellsAggregateArgs>
    ): Prisma.PrismaPromise<GetSpellsAggregateType<T>>

    /**
     * Group by Spells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spellsGroupByArgs} args - Group by arguments.
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
      T extends spellsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: spellsGroupByArgs['orderBy'] }
        : { orderBy?: spellsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
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
    >(
      args: SubsetIntersection<T, spellsGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetSpellsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the spells model
     */
    readonly fields: spellsFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for spells.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__spellsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the spells model
   */
  interface spellsFieldRefs {
    readonly id: FieldRef<'spells', 'String'>
    readonly name: FieldRef<'spells', 'String'>
    readonly projectId: FieldRef<'spells', 'String'>
    readonly graph: FieldRef<'spells', 'Json'>
    readonly createdAt: FieldRef<'spells', 'String'>
    readonly updatedAt: FieldRef<'spells', 'String'>
    readonly type: FieldRef<'spells', 'String'>
    readonly spellReleaseId: FieldRef<'spells', 'String'>
  }

  // Custom InputTypes

  /**
   * spells findUnique
   */
  export type spellsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the spells
     */
    select?: spellsSelect<ExtArgs> | null
    /**
     * Filter, which spells to fetch.
     */
    where: spellsWhereUniqueInput
  }

  /**
   * spells findUniqueOrThrow
   */
  export type spellsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the spells
     */
    select?: spellsSelect<ExtArgs> | null
    /**
     * Filter, which spells to fetch.
     */
    where: spellsWhereUniqueInput
  }

  /**
   * spells findFirst
   */
  export type spellsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the spells
     */
    select?: spellsSelect<ExtArgs> | null
    /**
     * Filter, which spells to fetch.
     */
    where?: spellsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of spells to fetch.
     */
    orderBy?:
      | spellsOrderByWithRelationAndSearchRelevanceInput
      | spellsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for spells.
     */
    cursor?: spellsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` spells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` spells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of spells.
     */
    distinct?: SpellsScalarFieldEnum | SpellsScalarFieldEnum[]
  }

  /**
   * spells findFirstOrThrow
   */
  export type spellsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the spells
     */
    select?: spellsSelect<ExtArgs> | null
    /**
     * Filter, which spells to fetch.
     */
    where?: spellsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of spells to fetch.
     */
    orderBy?:
      | spellsOrderByWithRelationAndSearchRelevanceInput
      | spellsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for spells.
     */
    cursor?: spellsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` spells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` spells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of spells.
     */
    distinct?: SpellsScalarFieldEnum | SpellsScalarFieldEnum[]
  }

  /**
   * spells findMany
   */
  export type spellsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the spells
     */
    select?: spellsSelect<ExtArgs> | null
    /**
     * Filter, which spells to fetch.
     */
    where?: spellsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of spells to fetch.
     */
    orderBy?:
      | spellsOrderByWithRelationAndSearchRelevanceInput
      | spellsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing spells.
     */
    cursor?: spellsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` spells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` spells.
     */
    skip?: number
    distinct?: SpellsScalarFieldEnum | SpellsScalarFieldEnum[]
  }

  /**
   * spells create
   */
  export type spellsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the spells
     */
    select?: spellsSelect<ExtArgs> | null
    /**
     * The data needed to create a spells.
     */
    data: XOR<spellsCreateInput, spellsUncheckedCreateInput>
  }

  /**
   * spells createMany
   */
  export type spellsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many spells.
     */
    data: spellsCreateManyInput | spellsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * spells update
   */
  export type spellsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the spells
     */
    select?: spellsSelect<ExtArgs> | null
    /**
     * The data needed to update a spells.
     */
    data: XOR<spellsUpdateInput, spellsUncheckedUpdateInput>
    /**
     * Choose, which spells to update.
     */
    where: spellsWhereUniqueInput
  }

  /**
   * spells updateMany
   */
  export type spellsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update spells.
     */
    data: XOR<spellsUpdateManyMutationInput, spellsUncheckedUpdateManyInput>
    /**
     * Filter which spells to update
     */
    where?: spellsWhereInput
  }

  /**
   * spells upsert
   */
  export type spellsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the spells
     */
    select?: spellsSelect<ExtArgs> | null
    /**
     * The filter to search for the spells to update in case it exists.
     */
    where: spellsWhereUniqueInput
    /**
     * In case the spells found by the `where` argument doesn't exist, create a new spells with this data.
     */
    create: XOR<spellsCreateInput, spellsUncheckedCreateInput>
    /**
     * In case the spells was found with the provided `where` argument, update it with this data.
     */
    update: XOR<spellsUpdateInput, spellsUncheckedUpdateInput>
  }

  /**
   * spells delete
   */
  export type spellsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the spells
     */
    select?: spellsSelect<ExtArgs> | null
    /**
     * Filter which spells to delete.
     */
    where: spellsWhereUniqueInput
  }

  /**
   * spells deleteMany
   */
  export type spellsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which spells to delete
     */
    where?: spellsWhereInput
  }

  /**
   * spells without action
   */
  export type spellsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the spells
     */
    select?: spellsSelect<ExtArgs> | null
  }

  /**
   * Model documents
   */

  export type AggregateDocuments = {
    _count: DocumentsCountAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  export type DocumentsMinAggregateOutputType = {
    id: string | null
    type: string | null
    projectId: string | null
    date: string | null
  }

  export type DocumentsMaxAggregateOutputType = {
    id: string | null
    type: string | null
    projectId: string | null
    date: string | null
  }

  export type DocumentsCountAggregateOutputType = {
    id: number
    type: number
    projectId: number
    date: number
    metadata: number
    _all: number
  }

  export type DocumentsMinAggregateInputType = {
    id?: true
    type?: true
    projectId?: true
    date?: true
  }

  export type DocumentsMaxAggregateInputType = {
    id?: true
    type?: true
    projectId?: true
    date?: true
  }

  export type DocumentsCountAggregateInputType = {
    id?: true
    type?: true
    projectId?: true
    date?: true
    metadata?: true
    _all?: true
  }

  export type DocumentsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which documents to aggregate.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of documents to fetch.
     */
    orderBy?:
      | documentsOrderByWithRelationAndSearchRelevanceInput
      | documentsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned documents
     **/
    _count?: true | DocumentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DocumentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DocumentsMaxAggregateInputType
  }

  export type GetDocumentsAggregateType<T extends DocumentsAggregateArgs> = {
    [P in keyof T & keyof AggregateDocuments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocuments[P]>
      : GetScalarType<T[P], AggregateDocuments[P]>
  }

  export type documentsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: documentsWhereInput
    orderBy?:
      | documentsOrderByWithAggregationInput
      | documentsOrderByWithAggregationInput[]
    by: DocumentsScalarFieldEnum[] | DocumentsScalarFieldEnum
    having?: documentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentsCountAggregateInputType | true
    _min?: DocumentsMinAggregateInputType
    _max?: DocumentsMaxAggregateInputType
  }

  export type DocumentsGroupByOutputType = {
    id: string
    type: string | null
    projectId: string | null
    date: string | null
    metadata: JsonValue | null
    _count: DocumentsCountAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  type GetDocumentsGroupByPayload<T extends documentsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<DocumentsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof DocumentsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
        }
      >
    >

  export type documentsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      type?: boolean
      projectId?: boolean
      date?: boolean
      metadata?: boolean
    },
    ExtArgs['result']['documents']
  >

  export type documentsSelectScalar = {
    id?: boolean
    type?: boolean
    projectId?: boolean
    date?: boolean
    metadata?: boolean
  }

  export type $documentsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'documents'
    objects: {}
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        type: string | null
        projectId: string | null
        date: string | null
        metadata: Prisma.JsonValue | null
      },
      ExtArgs['result']['documents']
    >
    composites: {}
  }

  type documentsGetPayload<
    S extends boolean | null | undefined | documentsDefaultArgs
  > = $Result.GetResult<Prisma.$documentsPayload, S>

  type documentsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<documentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: DocumentsCountAggregateInputType | true
  }

  export interface documentsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['documents']
      meta: { name: 'documents' }
    }
    /**
     * Find zero or one Documents that matches the filter.
     * @param {documentsFindUniqueArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends documentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, documentsFindUniqueArgs<ExtArgs>>
    ): Prisma__documentsClient<
      $Result.GetResult<
        Prisma.$documentsPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find one Documents that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {documentsFindUniqueOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends documentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, documentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__documentsClient<
      $Result.GetResult<
        Prisma.$documentsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find the first Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindFirstArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends documentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, documentsFindFirstArgs<ExtArgs>>
    ): Prisma__documentsClient<
      $Result.GetResult<
        Prisma.$documentsPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find the first Documents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindFirstOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends documentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, documentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__documentsClient<
      $Result.GetResult<
        Prisma.$documentsPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.documents.findMany()
     *
     * // Get first 10 Documents
     * const documents = await prisma.documents.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const documentsWithIdOnly = await prisma.documents.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends documentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, documentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, 'findMany'>
    >

    /**
     * Create a Documents.
     * @param {documentsCreateArgs} args - Arguments to create a Documents.
     * @example
     * // Create one Documents
     * const Documents = await prisma.documents.create({
     *   data: {
     *     // ... data to create a Documents
     *   }
     * })
     *
     **/
    create<T extends documentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, documentsCreateArgs<ExtArgs>>
    ): Prisma__documentsClient<
      $Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >

    /**
     * Create many Documents.
     *     @param {documentsCreateManyArgs} args - Arguments to create many Documents.
     *     @example
     *     // Create many Documents
     *     const documents = await prisma.documents.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends documentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, documentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Documents.
     * @param {documentsDeleteArgs} args - Arguments to delete one Documents.
     * @example
     * // Delete one Documents
     * const Documents = await prisma.documents.delete({
     *   where: {
     *     // ... filter to delete one Documents
     *   }
     * })
     *
     **/
    delete<T extends documentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, documentsDeleteArgs<ExtArgs>>
    ): Prisma__documentsClient<
      $Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >

    /**
     * Update one Documents.
     * @param {documentsUpdateArgs} args - Arguments to update one Documents.
     * @example
     * // Update one Documents
     * const documents = await prisma.documents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends documentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, documentsUpdateArgs<ExtArgs>>
    ): Prisma__documentsClient<
      $Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >

    /**
     * Delete zero or more Documents.
     * @param {documentsDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.documents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends documentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, documentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const documents = await prisma.documents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends documentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, documentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Documents.
     * @param {documentsUpsertArgs} args - Arguments to update or create a Documents.
     * @example
     * // Update or create a Documents
     * const documents = await prisma.documents.upsert({
     *   create: {
     *     // ... data to create a Documents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documents we want to update
     *   }
     * })
     **/
    upsert<T extends documentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, documentsUpsertArgs<ExtArgs>>
    ): Prisma__documentsClient<
      $Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >

    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.documents.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
     **/
    count<T extends documentsCountArgs>(
      args?: Subset<T, documentsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentsAggregateArgs>(
      args: Subset<T, DocumentsAggregateArgs>
    ): Prisma.PrismaPromise<GetDocumentsAggregateType<T>>

    /**
     * Group by Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsGroupByArgs} args - Group by arguments.
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
      T extends documentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: documentsGroupByArgs['orderBy'] }
        : { orderBy?: documentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
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
    >(
      args: SubsetIntersection<T, documentsGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetDocumentsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the documents model
     */
    readonly fields: documentsFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for documents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__documentsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the documents model
   */
  interface documentsFieldRefs {
    readonly id: FieldRef<'documents', 'String'>
    readonly type: FieldRef<'documents', 'String'>
    readonly projectId: FieldRef<'documents', 'String'>
    readonly date: FieldRef<'documents', 'String'>
    readonly metadata: FieldRef<'documents', 'Json'>
  }

  // Custom InputTypes

  /**
   * documents findUnique
   */
  export type documentsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents findUniqueOrThrow
   */
  export type documentsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents findFirst
   */
  export type documentsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of documents to fetch.
     */
    orderBy?:
      | documentsOrderByWithRelationAndSearchRelevanceInput
      | documentsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents findFirstOrThrow
   */
  export type documentsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of documents to fetch.
     */
    orderBy?:
      | documentsOrderByWithRelationAndSearchRelevanceInput
      | documentsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents findMany
   */
  export type documentsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of documents to fetch.
     */
    orderBy?:
      | documentsOrderByWithRelationAndSearchRelevanceInput
      | documentsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` documents.
     */
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents create
   */
  export type documentsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * The data needed to create a documents.
     */
    data: XOR<documentsCreateInput, documentsUncheckedCreateInput>
  }

  /**
   * documents createMany
   */
  export type documentsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many documents.
     */
    data: documentsCreateManyInput | documentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * documents update
   */
  export type documentsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * The data needed to update a documents.
     */
    data: XOR<documentsUpdateInput, documentsUncheckedUpdateInput>
    /**
     * Choose, which documents to update.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents updateMany
   */
  export type documentsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update documents.
     */
    data: XOR<
      documentsUpdateManyMutationInput,
      documentsUncheckedUpdateManyInput
    >
    /**
     * Filter which documents to update
     */
    where?: documentsWhereInput
  }

  /**
   * documents upsert
   */
  export type documentsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * The filter to search for the documents to update in case it exists.
     */
    where: documentsWhereUniqueInput
    /**
     * In case the documents found by the `where` argument doesn't exist, create a new documents with this data.
     */
    create: XOR<documentsCreateInput, documentsUncheckedCreateInput>
    /**
     * In case the documents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<documentsUpdateInput, documentsUncheckedUpdateInput>
  }

  /**
   * documents delete
   */
  export type documentsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Filter which documents to delete.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents deleteMany
   */
  export type documentsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which documents to delete
     */
    where?: documentsWhereInput
  }

  /**
   * documents without action
   */
  export type documentsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
  }

  /**
   * Model customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersAvgAggregateOutputType = {
    balance: number | null
    created: number | null
    next_invoice_sequence: number | null
  }

  export type CustomersSumAggregateOutputType = {
    balance: number | null
    created: number | null
    next_invoice_sequence: number | null
  }

  export type CustomersMinAggregateOutputType = {
    id: string | null
    object: string | null
    description: string | null
    email: string | null
    name: string | null
    phone: string | null
    balance: number | null
    created: number | null
    currency: string | null
    default_source: string | null
    delinquent: boolean | null
    invoice_prefix: string | null
    livemode: boolean | null
    next_invoice_sequence: number | null
    tax_exempt: string | null
    updated_at: Date | null
    deleted: boolean | null
  }

  export type CustomersMaxAggregateOutputType = {
    id: string | null
    object: string | null
    description: string | null
    email: string | null
    name: string | null
    phone: string | null
    balance: number | null
    created: number | null
    currency: string | null
    default_source: string | null
    delinquent: boolean | null
    invoice_prefix: string | null
    livemode: boolean | null
    next_invoice_sequence: number | null
    tax_exempt: string | null
    updated_at: Date | null
    deleted: boolean | null
  }

  export type CustomersCountAggregateOutputType = {
    id: number
    object: number
    address: number
    description: number
    email: number
    metadata: number
    name: number
    phone: number
    shipping: number
    balance: number
    created: number
    currency: number
    default_source: number
    delinquent: number
    discount: number
    invoice_prefix: number
    invoice_settings: number
    livemode: number
    next_invoice_sequence: number
    preferred_locales: number
    tax_exempt: number
    updated_at: number
    deleted: number
    _all: number
  }

  export type CustomersAvgAggregateInputType = {
    balance?: true
    created?: true
    next_invoice_sequence?: true
  }

  export type CustomersSumAggregateInputType = {
    balance?: true
    created?: true
    next_invoice_sequence?: true
  }

  export type CustomersMinAggregateInputType = {
    id?: true
    object?: true
    description?: true
    email?: true
    name?: true
    phone?: true
    balance?: true
    created?: true
    currency?: true
    default_source?: true
    delinquent?: true
    invoice_prefix?: true
    livemode?: true
    next_invoice_sequence?: true
    tax_exempt?: true
    updated_at?: true
    deleted?: true
  }

  export type CustomersMaxAggregateInputType = {
    id?: true
    object?: true
    description?: true
    email?: true
    name?: true
    phone?: true
    balance?: true
    created?: true
    currency?: true
    default_source?: true
    delinquent?: true
    invoice_prefix?: true
    livemode?: true
    next_invoice_sequence?: true
    tax_exempt?: true
    updated_at?: true
    deleted?: true
  }

  export type CustomersCountAggregateInputType = {
    id?: true
    object?: true
    address?: true
    description?: true
    email?: true
    metadata?: true
    name?: true
    phone?: true
    shipping?: true
    balance?: true
    created?: true
    currency?: true
    default_source?: true
    delinquent?: true
    discount?: true
    invoice_prefix?: true
    invoice_settings?: true
    livemode?: true
    next_invoice_sequence?: true
    preferred_locales?: true
    tax_exempt?: true
    updated_at?: true
    deleted?: true
    _all?: true
  }

  export type CustomersAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which customers to aggregate.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?:
      | customersOrderByWithRelationAndSearchRelevanceInput
      | customersOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned customers
     **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CustomersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CustomersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }

  export type customersGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: customersWhereInput
    orderBy?:
      | customersOrderByWithAggregationInput
      | customersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _avg?: CustomersAvgAggregateInputType
    _sum?: CustomersSumAggregateInputType
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    id: string
    object: string | null
    address: JsonValue | null
    description: string | null
    email: string | null
    metadata: JsonValue | null
    name: string | null
    phone: string | null
    shipping: JsonValue | null
    balance: number | null
    created: number | null
    currency: string | null
    default_source: string | null
    delinquent: boolean | null
    discount: JsonValue | null
    invoice_prefix: string | null
    invoice_settings: JsonValue | null
    livemode: boolean | null
    next_invoice_sequence: number | null
    preferred_locales: JsonValue | null
    tax_exempt: string | null
    updated_at: Date | null
    deleted: boolean | null
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends customersGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CustomersGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CustomersGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >

  export type customersSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      object?: boolean
      address?: boolean
      description?: boolean
      email?: boolean
      metadata?: boolean
      name?: boolean
      phone?: boolean
      shipping?: boolean
      balance?: boolean
      created?: boolean
      currency?: boolean
      default_source?: boolean
      delinquent?: boolean
      discount?: boolean
      invoice_prefix?: boolean
      invoice_settings?: boolean
      livemode?: boolean
      next_invoice_sequence?: boolean
      preferred_locales?: boolean
      tax_exempt?: boolean
      updated_at?: boolean
      deleted?: boolean
    },
    ExtArgs['result']['customers']
  >

  export type customersSelectScalar = {
    id?: boolean
    object?: boolean
    address?: boolean
    description?: boolean
    email?: boolean
    metadata?: boolean
    name?: boolean
    phone?: boolean
    shipping?: boolean
    balance?: boolean
    created?: boolean
    currency?: boolean
    default_source?: boolean
    delinquent?: boolean
    discount?: boolean
    invoice_prefix?: boolean
    invoice_settings?: boolean
    livemode?: boolean
    next_invoice_sequence?: boolean
    preferred_locales?: boolean
    tax_exempt?: boolean
    updated_at?: boolean
    deleted?: boolean
  }

  export type $customersPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'customers'
    objects: {}
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        object: string | null
        address: Prisma.JsonValue | null
        description: string | null
        email: string | null
        metadata: Prisma.JsonValue | null
        name: string | null
        phone: string | null
        shipping: Prisma.JsonValue | null
        balance: number | null
        created: number | null
        currency: string | null
        default_source: string | null
        delinquent: boolean | null
        discount: Prisma.JsonValue | null
        invoice_prefix: string | null
        invoice_settings: Prisma.JsonValue | null
        livemode: boolean | null
        next_invoice_sequence: number | null
        preferred_locales: Prisma.JsonValue | null
        tax_exempt: string | null
        updated_at: Date | null
        deleted: boolean | null
      },
      ExtArgs['result']['customers']
    >
    composites: {}
  }

  type customersGetPayload<
    S extends boolean | null | undefined | customersDefaultArgs
  > = $Result.GetResult<Prisma.$customersPayload, S>

  type customersCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<customersFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: CustomersCountAggregateInputType | true
  }

  export interface customersDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['customers']
      meta: { name: 'customers' }
    }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends customersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, customersFindUniqueArgs<ExtArgs>>
    ): Prisma__customersClient<
      $Result.GetResult<
        Prisma.$customersPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find one Customers that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {customersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__customersClient<
      $Result.GetResult<
        Prisma.$customersPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends customersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, customersFindFirstArgs<ExtArgs>>
    ): Prisma__customersClient<
      $Result.GetResult<
        Prisma.$customersPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__customersClient<
      $Result.GetResult<
        Prisma.$customersPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     *
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const customersWithIdOnly = await prisma.customers.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends customersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, 'findMany'>
    >

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     *
     **/
    create<T extends customersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, customersCreateArgs<ExtArgs>>
    ): Prisma__customersClient<
      $Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >

    /**
     * Create many Customers.
     *     @param {customersCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customers = await prisma.customers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends customersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     *
     **/
    delete<T extends customersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, customersDeleteArgs<ExtArgs>>
    ): Prisma__customersClient<
      $Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends customersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, customersUpdateArgs<ExtArgs>>
    ): Prisma__customersClient<
      $Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends customersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends customersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, customersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
     **/
    upsert<T extends customersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, customersUpsertArgs<ExtArgs>>
    ): Prisma__customersClient<
      $Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
     **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomersAggregateArgs>(
      args: Subset<T, CustomersAggregateArgs>
    ): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersGroupByArgs} args - Group by arguments.
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
      T extends customersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customersGroupByArgs['orderBy'] }
        : { orderBy?: customersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
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
    >(
      args: SubsetIntersection<T, customersGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetCustomersGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the customers model
     */
    readonly fields: customersFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customersClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the customers model
   */
  interface customersFieldRefs {
    readonly id: FieldRef<'customers', 'String'>
    readonly object: FieldRef<'customers', 'String'>
    readonly address: FieldRef<'customers', 'Json'>
    readonly description: FieldRef<'customers', 'String'>
    readonly email: FieldRef<'customers', 'String'>
    readonly metadata: FieldRef<'customers', 'Json'>
    readonly name: FieldRef<'customers', 'String'>
    readonly phone: FieldRef<'customers', 'String'>
    readonly shipping: FieldRef<'customers', 'Json'>
    readonly balance: FieldRef<'customers', 'Int'>
    readonly created: FieldRef<'customers', 'Int'>
    readonly currency: FieldRef<'customers', 'String'>
    readonly default_source: FieldRef<'customers', 'String'>
    readonly delinquent: FieldRef<'customers', 'Boolean'>
    readonly discount: FieldRef<'customers', 'Json'>
    readonly invoice_prefix: FieldRef<'customers', 'String'>
    readonly invoice_settings: FieldRef<'customers', 'Json'>
    readonly livemode: FieldRef<'customers', 'Boolean'>
    readonly next_invoice_sequence: FieldRef<'customers', 'Int'>
    readonly preferred_locales: FieldRef<'customers', 'Json'>
    readonly tax_exempt: FieldRef<'customers', 'String'>
    readonly updated_at: FieldRef<'customers', 'DateTime'>
    readonly deleted: FieldRef<'customers', 'Boolean'>
  }

  // Custom InputTypes

  /**
   * customers findUnique
   */
  export type customersFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findUniqueOrThrow
   */
  export type customersFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findFirst
   */
  export type customersFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?:
      | customersOrderByWithRelationAndSearchRelevanceInput
      | customersOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findFirstOrThrow
   */
  export type customersFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?:
      | customersOrderByWithRelationAndSearchRelevanceInput
      | customersOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findMany
   */
  export type customersFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?:
      | customersOrderByWithRelationAndSearchRelevanceInput
      | customersOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers create
   */
  export type customersCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * The data needed to create a customers.
     */
    data: XOR<customersCreateInput, customersUncheckedCreateInput>
  }

  /**
   * customers createMany
   */
  export type customersCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers update
   */
  export type customersUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * The data needed to update a customers.
     */
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update customers.
     */
    data: XOR<
      customersUpdateManyMutationInput,
      customersUncheckedUpdateManyInput
    >
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
  }

  /**
   * customers upsert
   */
  export type customersUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * The filter to search for the customers to update in case it exists.
     */
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     */
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }

  /**
   * customers delete
   */
  export type customersDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Filter which customers to delete.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which customers to delete
     */
    where?: customersWhereInput
  }

  /**
   * customers without action
   */
  export type customersDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
  }

  /**
   * Model subscriptions
   */

  export type AggregateSubscriptions = {
    _count: SubscriptionsCountAggregateOutputType | null
    _avg: SubscriptionsAvgAggregateOutputType | null
    _sum: SubscriptionsSumAggregateOutputType | null
    _min: SubscriptionsMinAggregateOutputType | null
    _max: SubscriptionsMaxAggregateOutputType | null
  }

  export type SubscriptionsAvgAggregateOutputType = {
    current_period_end: number | null
    current_period_start: number | null
    application_fee_percent: number | null
    billing_cycle_anchor: number | null
    cancel_at: number | null
    canceled_at: number | null
    created: number | null
    days_until_due: number | null
    ended_at: number | null
    next_pending_invoice_item_invoice: number | null
    start_date: number | null
  }

  export type SubscriptionsSumAggregateOutputType = {
    current_period_end: number | null
    current_period_start: number | null
    application_fee_percent: number | null
    billing_cycle_anchor: number | null
    cancel_at: number | null
    canceled_at: number | null
    created: number | null
    days_until_due: number | null
    ended_at: number | null
    next_pending_invoice_item_invoice: number | null
    start_date: number | null
  }

  export type SubscriptionsMinAggregateOutputType = {
    id: string | null
    object: string | null
    cancel_at_period_end: boolean | null
    current_period_end: number | null
    current_period_start: number | null
    default_payment_method: string | null
    pending_setup_intent: string | null
    application_fee_percent: number | null
    billing_cycle_anchor: number | null
    cancel_at: number | null
    canceled_at: number | null
    collection_method: string | null
    created: number | null
    days_until_due: number | null
    default_source: string | null
    ended_at: number | null
    livemode: boolean | null
    next_pending_invoice_item_invoice: number | null
    start_date: number | null
    schedule: string | null
    customer: string | null
    latest_invoice: string | null
    plan: string | null
    updated_at: Date | null
  }

  export type SubscriptionsMaxAggregateOutputType = {
    id: string | null
    object: string | null
    cancel_at_period_end: boolean | null
    current_period_end: number | null
    current_period_start: number | null
    default_payment_method: string | null
    pending_setup_intent: string | null
    application_fee_percent: number | null
    billing_cycle_anchor: number | null
    cancel_at: number | null
    canceled_at: number | null
    collection_method: string | null
    created: number | null
    days_until_due: number | null
    default_source: string | null
    ended_at: number | null
    livemode: boolean | null
    next_pending_invoice_item_invoice: number | null
    start_date: number | null
    schedule: string | null
    customer: string | null
    latest_invoice: string | null
    plan: string | null
    updated_at: Date | null
  }

  export type SubscriptionsCountAggregateOutputType = {
    id: number
    object: number
    cancel_at_period_end: number
    current_period_end: number
    current_period_start: number
    default_payment_method: number
    items: number
    metadata: number
    pending_setup_intent: number
    pending_update: number
    application_fee_percent: number
    billing_cycle_anchor: number
    billing_thresholds: number
    cancel_at: number
    canceled_at: number
    collection_method: number
    created: number
    days_until_due: number
    default_source: number
    default_tax_rates: number
    discount: number
    ended_at: number
    livemode: number
    next_pending_invoice_item_invoice: number
    pause_collection: number
    pending_invoice_item_interval: number
    start_date: number
    transfer_data: number
    trial_end: number
    trial_start: number
    schedule: number
    customer: number
    latest_invoice: number
    plan: number
    updated_at: number
    _all: number
  }

  export type SubscriptionsAvgAggregateInputType = {
    current_period_end?: true
    current_period_start?: true
    application_fee_percent?: true
    billing_cycle_anchor?: true
    cancel_at?: true
    canceled_at?: true
    created?: true
    days_until_due?: true
    ended_at?: true
    next_pending_invoice_item_invoice?: true
    start_date?: true
  }

  export type SubscriptionsSumAggregateInputType = {
    current_period_end?: true
    current_period_start?: true
    application_fee_percent?: true
    billing_cycle_anchor?: true
    cancel_at?: true
    canceled_at?: true
    created?: true
    days_until_due?: true
    ended_at?: true
    next_pending_invoice_item_invoice?: true
    start_date?: true
  }

  export type SubscriptionsMinAggregateInputType = {
    id?: true
    object?: true
    cancel_at_period_end?: true
    current_period_end?: true
    current_period_start?: true
    default_payment_method?: true
    pending_setup_intent?: true
    application_fee_percent?: true
    billing_cycle_anchor?: true
    cancel_at?: true
    canceled_at?: true
    collection_method?: true
    created?: true
    days_until_due?: true
    default_source?: true
    ended_at?: true
    livemode?: true
    next_pending_invoice_item_invoice?: true
    start_date?: true
    schedule?: true
    customer?: true
    latest_invoice?: true
    plan?: true
    updated_at?: true
  }

  export type SubscriptionsMaxAggregateInputType = {
    id?: true
    object?: true
    cancel_at_period_end?: true
    current_period_end?: true
    current_period_start?: true
    default_payment_method?: true
    pending_setup_intent?: true
    application_fee_percent?: true
    billing_cycle_anchor?: true
    cancel_at?: true
    canceled_at?: true
    collection_method?: true
    created?: true
    days_until_due?: true
    default_source?: true
    ended_at?: true
    livemode?: true
    next_pending_invoice_item_invoice?: true
    start_date?: true
    schedule?: true
    customer?: true
    latest_invoice?: true
    plan?: true
    updated_at?: true
  }

  export type SubscriptionsCountAggregateInputType = {
    id?: true
    object?: true
    cancel_at_period_end?: true
    current_period_end?: true
    current_period_start?: true
    default_payment_method?: true
    items?: true
    metadata?: true
    pending_setup_intent?: true
    pending_update?: true
    application_fee_percent?: true
    billing_cycle_anchor?: true
    billing_thresholds?: true
    cancel_at?: true
    canceled_at?: true
    collection_method?: true
    created?: true
    days_until_due?: true
    default_source?: true
    default_tax_rates?: true
    discount?: true
    ended_at?: true
    livemode?: true
    next_pending_invoice_item_invoice?: true
    pause_collection?: true
    pending_invoice_item_interval?: true
    start_date?: true
    transfer_data?: true
    trial_end?: true
    trial_start?: true
    schedule?: true
    customer?: true
    latest_invoice?: true
    plan?: true
    updated_at?: true
    _all?: true
  }

  export type SubscriptionsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which subscriptions to aggregate.
     */
    where?: subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscriptions to fetch.
     */
    orderBy?:
      | subscriptionsOrderByWithRelationAndSearchRelevanceInput
      | subscriptionsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned subscriptions
     **/
    _count?: true | SubscriptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SubscriptionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SubscriptionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SubscriptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SubscriptionsMaxAggregateInputType
  }

  export type GetSubscriptionsAggregateType<
    T extends SubscriptionsAggregateArgs
  > = {
    [P in keyof T & keyof AggregateSubscriptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptions[P]>
      : GetScalarType<T[P], AggregateSubscriptions[P]>
  }

  export type subscriptionsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: subscriptionsWhereInput
    orderBy?:
      | subscriptionsOrderByWithAggregationInput
      | subscriptionsOrderByWithAggregationInput[]
    by: SubscriptionsScalarFieldEnum[] | SubscriptionsScalarFieldEnum
    having?: subscriptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionsCountAggregateInputType | true
    _avg?: SubscriptionsAvgAggregateInputType
    _sum?: SubscriptionsSumAggregateInputType
    _min?: SubscriptionsMinAggregateInputType
    _max?: SubscriptionsMaxAggregateInputType
  }

  export type SubscriptionsGroupByOutputType = {
    id: string
    object: string | null
    cancel_at_period_end: boolean | null
    current_period_end: number | null
    current_period_start: number | null
    default_payment_method: string | null
    items: JsonValue | null
    metadata: JsonValue | null
    pending_setup_intent: string | null
    pending_update: JsonValue | null
    application_fee_percent: number | null
    billing_cycle_anchor: number | null
    billing_thresholds: JsonValue | null
    cancel_at: number | null
    canceled_at: number | null
    collection_method: string | null
    created: number | null
    days_until_due: number | null
    default_source: string | null
    default_tax_rates: JsonValue | null
    discount: JsonValue | null
    ended_at: number | null
    livemode: boolean | null
    next_pending_invoice_item_invoice: number | null
    pause_collection: JsonValue | null
    pending_invoice_item_interval: JsonValue | null
    start_date: number | null
    transfer_data: JsonValue | null
    trial_end: JsonValue | null
    trial_start: JsonValue | null
    schedule: string | null
    customer: string | null
    latest_invoice: string | null
    plan: string | null
    updated_at: Date | null
    _count: SubscriptionsCountAggregateOutputType | null
    _avg: SubscriptionsAvgAggregateOutputType | null
    _sum: SubscriptionsSumAggregateOutputType | null
    _min: SubscriptionsMinAggregateOutputType | null
    _max: SubscriptionsMaxAggregateOutputType | null
  }

  type GetSubscriptionsGroupByPayload<T extends subscriptionsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SubscriptionsGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof SubscriptionsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>
        }
      >
    >

  export type subscriptionsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      object?: boolean
      cancel_at_period_end?: boolean
      current_period_end?: boolean
      current_period_start?: boolean
      default_payment_method?: boolean
      items?: boolean
      metadata?: boolean
      pending_setup_intent?: boolean
      pending_update?: boolean
      application_fee_percent?: boolean
      billing_cycle_anchor?: boolean
      billing_thresholds?: boolean
      cancel_at?: boolean
      canceled_at?: boolean
      collection_method?: boolean
      created?: boolean
      days_until_due?: boolean
      default_source?: boolean
      default_tax_rates?: boolean
      discount?: boolean
      ended_at?: boolean
      livemode?: boolean
      next_pending_invoice_item_invoice?: boolean
      pause_collection?: boolean
      pending_invoice_item_interval?: boolean
      start_date?: boolean
      transfer_data?: boolean
      trial_end?: boolean
      trial_start?: boolean
      schedule?: boolean
      customer?: boolean
      latest_invoice?: boolean
      plan?: boolean
      updated_at?: boolean
    },
    ExtArgs['result']['subscriptions']
  >

  export type subscriptionsSelectScalar = {
    id?: boolean
    object?: boolean
    cancel_at_period_end?: boolean
    current_period_end?: boolean
    current_period_start?: boolean
    default_payment_method?: boolean
    items?: boolean
    metadata?: boolean
    pending_setup_intent?: boolean
    pending_update?: boolean
    application_fee_percent?: boolean
    billing_cycle_anchor?: boolean
    billing_thresholds?: boolean
    cancel_at?: boolean
    canceled_at?: boolean
    collection_method?: boolean
    created?: boolean
    days_until_due?: boolean
    default_source?: boolean
    default_tax_rates?: boolean
    discount?: boolean
    ended_at?: boolean
    livemode?: boolean
    next_pending_invoice_item_invoice?: boolean
    pause_collection?: boolean
    pending_invoice_item_interval?: boolean
    start_date?: boolean
    transfer_data?: boolean
    trial_end?: boolean
    trial_start?: boolean
    schedule?: boolean
    customer?: boolean
    latest_invoice?: boolean
    plan?: boolean
    updated_at?: boolean
  }

  export type $subscriptionsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'subscriptions'
    objects: {}
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        object: string | null
        cancel_at_period_end: boolean | null
        current_period_end: number | null
        current_period_start: number | null
        default_payment_method: string | null
        items: Prisma.JsonValue | null
        metadata: Prisma.JsonValue | null
        pending_setup_intent: string | null
        pending_update: Prisma.JsonValue | null
        application_fee_percent: number | null
        billing_cycle_anchor: number | null
        billing_thresholds: Prisma.JsonValue | null
        cancel_at: number | null
        canceled_at: number | null
        collection_method: string | null
        created: number | null
        days_until_due: number | null
        default_source: string | null
        default_tax_rates: Prisma.JsonValue | null
        discount: Prisma.JsonValue | null
        ended_at: number | null
        livemode: boolean | null
        next_pending_invoice_item_invoice: number | null
        pause_collection: Prisma.JsonValue | null
        pending_invoice_item_interval: Prisma.JsonValue | null
        start_date: number | null
        transfer_data: Prisma.JsonValue | null
        trial_end: Prisma.JsonValue | null
        trial_start: Prisma.JsonValue | null
        schedule: string | null
        customer: string | null
        latest_invoice: string | null
        plan: string | null
        updated_at: Date | null
      },
      ExtArgs['result']['subscriptions']
    >
    composites: {}
  }

  type subscriptionsGetPayload<
    S extends boolean | null | undefined | subscriptionsDefaultArgs
  > = $Result.GetResult<Prisma.$subscriptionsPayload, S>

  type subscriptionsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<subscriptionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: SubscriptionsCountAggregateInputType | true
  }

  export interface subscriptionsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['subscriptions']
      meta: { name: 'subscriptions' }
    }
    /**
     * Find zero or one Subscriptions that matches the filter.
     * @param {subscriptionsFindUniqueArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends subscriptionsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionsFindUniqueArgs<ExtArgs>>
    ): Prisma__subscriptionsClient<
      $Result.GetResult<
        Prisma.$subscriptionsPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find one Subscriptions that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {subscriptionsFindUniqueOrThrowArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends subscriptionsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__subscriptionsClient<
      $Result.GetResult<
        Prisma.$subscriptionsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find the first Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsFindFirstArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends subscriptionsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionsFindFirstArgs<ExtArgs>>
    ): Prisma__subscriptionsClient<
      $Result.GetResult<
        Prisma.$subscriptionsPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find the first Subscriptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsFindFirstOrThrowArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends subscriptionsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__subscriptionsClient<
      $Result.GetResult<
        Prisma.$subscriptionsPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscriptions.findMany()
     *
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscriptions.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subscriptionsWithIdOnly = await prisma.subscriptions.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends subscriptionsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, 'findMany'>
    >

    /**
     * Create a Subscriptions.
     * @param {subscriptionsCreateArgs} args - Arguments to create a Subscriptions.
     * @example
     * // Create one Subscriptions
     * const Subscriptions = await prisma.subscriptions.create({
     *   data: {
     *     // ... data to create a Subscriptions
     *   }
     * })
     *
     **/
    create<T extends subscriptionsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionsCreateArgs<ExtArgs>>
    ): Prisma__subscriptionsClient<
      $Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >

    /**
     * Create many Subscriptions.
     *     @param {subscriptionsCreateManyArgs} args - Arguments to create many Subscriptions.
     *     @example
     *     // Create many Subscriptions
     *     const subscriptions = await prisma.subscriptions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends subscriptionsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subscriptions.
     * @param {subscriptionsDeleteArgs} args - Arguments to delete one Subscriptions.
     * @example
     * // Delete one Subscriptions
     * const Subscriptions = await prisma.subscriptions.delete({
     *   where: {
     *     // ... filter to delete one Subscriptions
     *   }
     * })
     *
     **/
    delete<T extends subscriptionsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionsDeleteArgs<ExtArgs>>
    ): Prisma__subscriptionsClient<
      $Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >

    /**
     * Update one Subscriptions.
     * @param {subscriptionsUpdateArgs} args - Arguments to update one Subscriptions.
     * @example
     * // Update one Subscriptions
     * const subscriptions = await prisma.subscriptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends subscriptionsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionsUpdateArgs<ExtArgs>>
    ): Prisma__subscriptionsClient<
      $Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >

    /**
     * Delete zero or more Subscriptions.
     * @param {subscriptionsDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscriptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends subscriptionsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscriptions = await prisma.subscriptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends subscriptionsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscriptions.
     * @param {subscriptionsUpsertArgs} args - Arguments to update or create a Subscriptions.
     * @example
     * // Update or create a Subscriptions
     * const subscriptions = await prisma.subscriptions.upsert({
     *   create: {
     *     // ... data to create a Subscriptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscriptions we want to update
     *   }
     * })
     **/
    upsert<T extends subscriptionsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionsUpsertArgs<ExtArgs>>
    ): Prisma__subscriptionsClient<
      $Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >

    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscriptions.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
     **/
    count<T extends subscriptionsCountArgs>(
      args?: Subset<T, subscriptionsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionsAggregateArgs>(
      args: Subset<T, SubscriptionsAggregateArgs>
    ): Prisma.PrismaPromise<GetSubscriptionsAggregateType<T>>

    /**
     * Group by Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsGroupByArgs} args - Group by arguments.
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
      T extends subscriptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subscriptionsGroupByArgs['orderBy'] }
        : { orderBy?: subscriptionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
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
    >(
      args: SubsetIntersection<T, subscriptionsGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetSubscriptionsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the subscriptions model
     */
    readonly fields: subscriptionsFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for subscriptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subscriptionsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the subscriptions model
   */
  interface subscriptionsFieldRefs {
    readonly id: FieldRef<'subscriptions', 'String'>
    readonly object: FieldRef<'subscriptions', 'String'>
    readonly cancel_at_period_end: FieldRef<'subscriptions', 'Boolean'>
    readonly current_period_end: FieldRef<'subscriptions', 'Int'>
    readonly current_period_start: FieldRef<'subscriptions', 'Int'>
    readonly default_payment_method: FieldRef<'subscriptions', 'String'>
    readonly items: FieldRef<'subscriptions', 'Json'>
    readonly metadata: FieldRef<'subscriptions', 'Json'>
    readonly pending_setup_intent: FieldRef<'subscriptions', 'String'>
    readonly pending_update: FieldRef<'subscriptions', 'Json'>
    readonly application_fee_percent: FieldRef<'subscriptions', 'Float'>
    readonly billing_cycle_anchor: FieldRef<'subscriptions', 'Int'>
    readonly billing_thresholds: FieldRef<'subscriptions', 'Json'>
    readonly cancel_at: FieldRef<'subscriptions', 'Int'>
    readonly canceled_at: FieldRef<'subscriptions', 'Int'>
    readonly collection_method: FieldRef<'subscriptions', 'String'>
    readonly created: FieldRef<'subscriptions', 'Int'>
    readonly days_until_due: FieldRef<'subscriptions', 'Int'>
    readonly default_source: FieldRef<'subscriptions', 'String'>
    readonly default_tax_rates: FieldRef<'subscriptions', 'Json'>
    readonly discount: FieldRef<'subscriptions', 'Json'>
    readonly ended_at: FieldRef<'subscriptions', 'Int'>
    readonly livemode: FieldRef<'subscriptions', 'Boolean'>
    readonly next_pending_invoice_item_invoice: FieldRef<'subscriptions', 'Int'>
    readonly pause_collection: FieldRef<'subscriptions', 'Json'>
    readonly pending_invoice_item_interval: FieldRef<'subscriptions', 'Json'>
    readonly start_date: FieldRef<'subscriptions', 'Int'>
    readonly transfer_data: FieldRef<'subscriptions', 'Json'>
    readonly trial_end: FieldRef<'subscriptions', 'Json'>
    readonly trial_start: FieldRef<'subscriptions', 'Json'>
    readonly schedule: FieldRef<'subscriptions', 'String'>
    readonly customer: FieldRef<'subscriptions', 'String'>
    readonly latest_invoice: FieldRef<'subscriptions', 'String'>
    readonly plan: FieldRef<'subscriptions', 'String'>
    readonly updated_at: FieldRef<'subscriptions', 'DateTime'>
  }

  // Custom InputTypes

  /**
   * subscriptions findUnique
   */
  export type subscriptionsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where: subscriptionsWhereUniqueInput
  }

  /**
   * subscriptions findUniqueOrThrow
   */
  export type subscriptionsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where: subscriptionsWhereUniqueInput
  }

  /**
   * subscriptions findFirst
   */
  export type subscriptionsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where?: subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscriptions to fetch.
     */
    orderBy?:
      | subscriptionsOrderByWithRelationAndSearchRelevanceInput
      | subscriptionsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for subscriptions.
     */
    cursor?: subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of subscriptions.
     */
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * subscriptions findFirstOrThrow
   */
  export type subscriptionsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where?: subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscriptions to fetch.
     */
    orderBy?:
      | subscriptionsOrderByWithRelationAndSearchRelevanceInput
      | subscriptionsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for subscriptions.
     */
    cursor?: subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of subscriptions.
     */
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * subscriptions findMany
   */
  export type subscriptionsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where?: subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subscriptions to fetch.
     */
    orderBy?:
      | subscriptionsOrderByWithRelationAndSearchRelevanceInput
      | subscriptionsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing subscriptions.
     */
    cursor?: subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subscriptions.
     */
    skip?: number
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * subscriptions create
   */
  export type subscriptionsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * The data needed to create a subscriptions.
     */
    data: XOR<subscriptionsCreateInput, subscriptionsUncheckedCreateInput>
  }

  /**
   * subscriptions createMany
   */
  export type subscriptionsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many subscriptions.
     */
    data: subscriptionsCreateManyInput | subscriptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subscriptions update
   */
  export type subscriptionsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * The data needed to update a subscriptions.
     */
    data: XOR<subscriptionsUpdateInput, subscriptionsUncheckedUpdateInput>
    /**
     * Choose, which subscriptions to update.
     */
    where: subscriptionsWhereUniqueInput
  }

  /**
   * subscriptions updateMany
   */
  export type subscriptionsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update subscriptions.
     */
    data: XOR<
      subscriptionsUpdateManyMutationInput,
      subscriptionsUncheckedUpdateManyInput
    >
    /**
     * Filter which subscriptions to update
     */
    where?: subscriptionsWhereInput
  }

  /**
   * subscriptions upsert
   */
  export type subscriptionsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * The filter to search for the subscriptions to update in case it exists.
     */
    where: subscriptionsWhereUniqueInput
    /**
     * In case the subscriptions found by the `where` argument doesn't exist, create a new subscriptions with this data.
     */
    create: XOR<subscriptionsCreateInput, subscriptionsUncheckedCreateInput>
    /**
     * In case the subscriptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subscriptionsUpdateInput, subscriptionsUncheckedUpdateInput>
  }

  /**
   * subscriptions delete
   */
  export type subscriptionsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Filter which subscriptions to delete.
     */
    where: subscriptionsWhereUniqueInput
  }

  /**
   * subscriptions deleteMany
   */
  export type subscriptionsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which subscriptions to delete
     */
    where?: subscriptionsWhereInput
  }

  /**
   * subscriptions without action
   */
  export type subscriptionsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
  }

  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    created: number | null
    updated: number | null
  }

  export type ProductsSumAggregateOutputType = {
    created: number | null
    updated: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    object: string | null
    active: boolean | null
    description: string | null
    name: string | null
    created: number | null
    livemode: boolean | null
    shippable: boolean | null
    statement_descriptor: string | null
    unit_label: string | null
    updated: number | null
    url: string | null
    updated_at: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    object: string | null
    active: boolean | null
    description: string | null
    name: string | null
    created: number | null
    livemode: boolean | null
    shippable: boolean | null
    statement_descriptor: string | null
    unit_label: string | null
    updated: number | null
    url: string | null
    updated_at: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    object: number
    active: number
    description: number
    metadata: number
    name: number
    created: number
    images: number
    livemode: number
    package_dimensions: number
    shippable: number
    statement_descriptor: number
    unit_label: number
    updated: number
    url: number
    updated_at: number
    _all: number
  }

  export type ProductsAvgAggregateInputType = {
    created?: true
    updated?: true
  }

  export type ProductsSumAggregateInputType = {
    created?: true
    updated?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    object?: true
    active?: true
    description?: true
    name?: true
    created?: true
    livemode?: true
    shippable?: true
    statement_descriptor?: true
    unit_label?: true
    updated?: true
    url?: true
    updated_at?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    object?: true
    active?: true
    description?: true
    name?: true
    created?: true
    livemode?: true
    shippable?: true
    statement_descriptor?: true
    unit_label?: true
    updated?: true
    url?: true
    updated_at?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    object?: true
    active?: true
    description?: true
    metadata?: true
    name?: true
    created?: true
    images?: true
    livemode?: true
    package_dimensions?: true
    shippable?: true
    statement_descriptor?: true
    unit_label?: true
    updated?: true
    url?: true
    updated_at?: true
    _all?: true
  }

  export type ProductsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?:
      | productsOrderByWithRelationAndSearchRelevanceInput
      | productsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned products
     **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
    [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }

  export type productsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: productsWhereInput
    orderBy?:
      | productsOrderByWithAggregationInput
      | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: string
    object: string | null
    active: boolean | null
    description: string | null
    metadata: JsonValue | null
    name: string | null
    created: number | null
    images: JsonValue | null
    livemode: boolean | null
    package_dimensions: JsonValue | null
    shippable: boolean | null
    statement_descriptor: string | null
    unit_label: string | null
    updated: number | null
    url: string | null
    updated_at: Date | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProductsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ProductsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >

  export type productsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      object?: boolean
      active?: boolean
      description?: boolean
      metadata?: boolean
      name?: boolean
      created?: boolean
      images?: boolean
      livemode?: boolean
      package_dimensions?: boolean
      shippable?: boolean
      statement_descriptor?: boolean
      unit_label?: boolean
      updated?: boolean
      url?: boolean
      updated_at?: boolean
    },
    ExtArgs['result']['products']
  >

  export type productsSelectScalar = {
    id?: boolean
    object?: boolean
    active?: boolean
    description?: boolean
    metadata?: boolean
    name?: boolean
    created?: boolean
    images?: boolean
    livemode?: boolean
    package_dimensions?: boolean
    shippable?: boolean
    statement_descriptor?: boolean
    unit_label?: boolean
    updated?: boolean
    url?: boolean
    updated_at?: boolean
  }

  export type $productsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'products'
    objects: {}
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        object: string | null
        active: boolean | null
        description: string | null
        metadata: Prisma.JsonValue | null
        name: string | null
        created: number | null
        images: Prisma.JsonValue | null
        livemode: boolean | null
        package_dimensions: Prisma.JsonValue | null
        shippable: boolean | null
        statement_descriptor: string | null
        unit_label: string | null
        updated: number | null
        url: string | null
        updated_at: Date | null
      },
      ExtArgs['result']['products']
    >
    composites: {}
  }

  type productsGetPayload<
    S extends boolean | null | undefined | productsDefaultArgs
  > = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<productsFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: ProductsCountAggregateInputType | true
  }

  export interface productsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['products']
      meta: { name: 'products' }
    }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends productsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<
        Prisma.$productsPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find one Products that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<
        Prisma.$productsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends productsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<
        Prisma.$productsPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<
        Prisma.$productsPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     *
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends productsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findMany'>
    >

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     *
     **/
    create<T extends productsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, productsCreateArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >

    /**
     * Create many Products.
     *     @param {productsCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const products = await prisma.products.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends productsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     *
     **/
    delete<T extends productsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, productsDeleteArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends productsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, productsUpdateArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends productsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends productsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     **/
    upsert<T extends productsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, productsUpsertArgs<ExtArgs>>
    ): Prisma__productsClient<
      $Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
     **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(
      args: Subset<T, ProductsAggregateArgs>
    ): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
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
    >(
      args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetProductsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the products model
     */
    readonly fields: productsFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<'products', 'String'>
    readonly object: FieldRef<'products', 'String'>
    readonly active: FieldRef<'products', 'Boolean'>
    readonly description: FieldRef<'products', 'String'>
    readonly metadata: FieldRef<'products', 'Json'>
    readonly name: FieldRef<'products', 'String'>
    readonly created: FieldRef<'products', 'Int'>
    readonly images: FieldRef<'products', 'Json'>
    readonly livemode: FieldRef<'products', 'Boolean'>
    readonly package_dimensions: FieldRef<'products', 'Json'>
    readonly shippable: FieldRef<'products', 'Boolean'>
    readonly statement_descriptor: FieldRef<'products', 'String'>
    readonly unit_label: FieldRef<'products', 'String'>
    readonly updated: FieldRef<'products', 'Int'>
    readonly url: FieldRef<'products', 'String'>
    readonly updated_at: FieldRef<'products', 'DateTime'>
  }

  // Custom InputTypes

  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?:
      | productsOrderByWithRelationAndSearchRelevanceInput
      | productsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?:
      | productsOrderByWithRelationAndSearchRelevanceInput
      | productsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of products to fetch.
     */
    orderBy?:
      | productsOrderByWithRelationAndSearchRelevanceInput
      | productsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
  }

  /**
   * Model prices
   */

  export type AggregatePrices = {
    _count: PricesCountAggregateOutputType | null
    _avg: PricesAvgAggregateOutputType | null
    _sum: PricesSumAggregateOutputType | null
    _min: PricesMinAggregateOutputType | null
    _max: PricesMaxAggregateOutputType | null
  }

  export type PricesAvgAggregateOutputType = {
    unit_amount: number | null
    created: number | null
  }

  export type PricesSumAggregateOutputType = {
    unit_amount: number | null
    created: number | null
  }

  export type PricesMinAggregateOutputType = {
    id: string | null
    object: string | null
    active: boolean | null
    currency: string | null
    nickname: string | null
    unit_amount: number | null
    billing_scheme: string | null
    created: number | null
    livemode: boolean | null
    lookup_key: string | null
    unit_amount_decimal: string | null
    product: string | null
    updated_at: Date | null
  }

  export type PricesMaxAggregateOutputType = {
    id: string | null
    object: string | null
    active: boolean | null
    currency: string | null
    nickname: string | null
    unit_amount: number | null
    billing_scheme: string | null
    created: number | null
    livemode: boolean | null
    lookup_key: string | null
    unit_amount_decimal: string | null
    product: string | null
    updated_at: Date | null
  }

  export type PricesCountAggregateOutputType = {
    id: number
    object: number
    active: number
    currency: number
    metadata: number
    nickname: number
    recurring: number
    unit_amount: number
    billing_scheme: number
    created: number
    livemode: number
    lookup_key: number
    transform_quantity: number
    unit_amount_decimal: number
    product: number
    updated_at: number
    _all: number
  }

  export type PricesAvgAggregateInputType = {
    unit_amount?: true
    created?: true
  }

  export type PricesSumAggregateInputType = {
    unit_amount?: true
    created?: true
  }

  export type PricesMinAggregateInputType = {
    id?: true
    object?: true
    active?: true
    currency?: true
    nickname?: true
    unit_amount?: true
    billing_scheme?: true
    created?: true
    livemode?: true
    lookup_key?: true
    unit_amount_decimal?: true
    product?: true
    updated_at?: true
  }

  export type PricesMaxAggregateInputType = {
    id?: true
    object?: true
    active?: true
    currency?: true
    nickname?: true
    unit_amount?: true
    billing_scheme?: true
    created?: true
    livemode?: true
    lookup_key?: true
    unit_amount_decimal?: true
    product?: true
    updated_at?: true
  }

  export type PricesCountAggregateInputType = {
    id?: true
    object?: true
    active?: true
    currency?: true
    metadata?: true
    nickname?: true
    recurring?: true
    unit_amount?: true
    billing_scheme?: true
    created?: true
    livemode?: true
    lookup_key?: true
    transform_quantity?: true
    unit_amount_decimal?: true
    product?: true
    updated_at?: true
    _all?: true
  }

  export type PricesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which prices to aggregate.
     */
    where?: pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of prices to fetch.
     */
    orderBy?:
      | pricesOrderByWithRelationAndSearchRelevanceInput
      | pricesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned prices
     **/
    _count?: true | PricesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PricesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PricesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PricesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PricesMaxAggregateInputType
  }

  export type GetPricesAggregateType<T extends PricesAggregateArgs> = {
    [P in keyof T & keyof AggregatePrices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrices[P]>
      : GetScalarType<T[P], AggregatePrices[P]>
  }

  export type pricesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: pricesWhereInput
    orderBy?:
      | pricesOrderByWithAggregationInput
      | pricesOrderByWithAggregationInput[]
    by: PricesScalarFieldEnum[] | PricesScalarFieldEnum
    having?: pricesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricesCountAggregateInputType | true
    _avg?: PricesAvgAggregateInputType
    _sum?: PricesSumAggregateInputType
    _min?: PricesMinAggregateInputType
    _max?: PricesMaxAggregateInputType
  }

  export type PricesGroupByOutputType = {
    id: string
    object: string | null
    active: boolean | null
    currency: string | null
    metadata: JsonValue | null
    nickname: string | null
    recurring: JsonValue | null
    unit_amount: number | null
    billing_scheme: string | null
    created: number | null
    livemode: boolean | null
    lookup_key: string | null
    transform_quantity: JsonValue | null
    unit_amount_decimal: string | null
    product: string | null
    updated_at: Date | null
    _count: PricesCountAggregateOutputType | null
    _avg: PricesAvgAggregateOutputType | null
    _sum: PricesSumAggregateOutputType | null
    _min: PricesMinAggregateOutputType | null
    _max: PricesMaxAggregateOutputType | null
  }

  type GetPricesGroupByPayload<T extends pricesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PricesGroupByOutputType, T['by']> & {
          [P in keyof T & keyof PricesGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricesGroupByOutputType[P]>
            : GetScalarType<T[P], PricesGroupByOutputType[P]>
        }
      >
    >

  export type pricesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean
      object?: boolean
      active?: boolean
      currency?: boolean
      metadata?: boolean
      nickname?: boolean
      recurring?: boolean
      unit_amount?: boolean
      billing_scheme?: boolean
      created?: boolean
      livemode?: boolean
      lookup_key?: boolean
      transform_quantity?: boolean
      unit_amount_decimal?: boolean
      product?: boolean
      updated_at?: boolean
    },
    ExtArgs['result']['prices']
  >

  export type pricesSelectScalar = {
    id?: boolean
    object?: boolean
    active?: boolean
    currency?: boolean
    metadata?: boolean
    nickname?: boolean
    recurring?: boolean
    unit_amount?: boolean
    billing_scheme?: boolean
    created?: boolean
    livemode?: boolean
    lookup_key?: boolean
    transform_quantity?: boolean
    unit_amount_decimal?: boolean
    product?: boolean
    updated_at?: boolean
  }

  export type $pricesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'prices'
    objects: {}
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        object: string | null
        active: boolean | null
        currency: string | null
        metadata: Prisma.JsonValue | null
        nickname: string | null
        recurring: Prisma.JsonValue | null
        unit_amount: number | null
        billing_scheme: string | null
        created: number | null
        livemode: boolean | null
        lookup_key: string | null
        transform_quantity: Prisma.JsonValue | null
        unit_amount_decimal: string | null
        product: string | null
        updated_at: Date | null
      },
      ExtArgs['result']['prices']
    >
    composites: {}
  }

  type pricesGetPayload<
    S extends boolean | null | undefined | pricesDefaultArgs
  > = $Result.GetResult<Prisma.$pricesPayload, S>

  type pricesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<pricesFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: PricesCountAggregateInputType | true
  }

  export interface pricesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['prices']
      meta: { name: 'prices' }
    }
    /**
     * Find zero or one Prices that matches the filter.
     * @param {pricesFindUniqueArgs} args - Arguments to find a Prices
     * @example
     * // Get one Prices
     * const prices = await prisma.prices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends pricesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, pricesFindUniqueArgs<ExtArgs>>
    ): Prisma__pricesClient<
      $Result.GetResult<Prisma.$pricesPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >

    /**
     * Find one Prices that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {pricesFindUniqueOrThrowArgs} args - Arguments to find a Prices
     * @example
     * // Get one Prices
     * const prices = await prisma.prices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends pricesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pricesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__pricesClient<
      $Result.GetResult<Prisma.$pricesPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >

    /**
     * Find the first Prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pricesFindFirstArgs} args - Arguments to find a Prices
     * @example
     * // Get one Prices
     * const prices = await prisma.prices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends pricesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, pricesFindFirstArgs<ExtArgs>>
    ): Prisma__pricesClient<
      $Result.GetResult<Prisma.$pricesPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >

    /**
     * Find the first Prices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pricesFindFirstOrThrowArgs} args - Arguments to find a Prices
     * @example
     * // Get one Prices
     * const prices = await prisma.prices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends pricesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pricesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__pricesClient<
      $Result.GetResult<Prisma.$pricesPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >

    /**
     * Find zero or more Prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pricesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prices
     * const prices = await prisma.prices.findMany()
     *
     * // Get first 10 Prices
     * const prices = await prisma.prices.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pricesWithIdOnly = await prisma.prices.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends pricesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pricesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$pricesPayload<ExtArgs>, T, 'findMany'>
    >

    /**
     * Create a Prices.
     * @param {pricesCreateArgs} args - Arguments to create a Prices.
     * @example
     * // Create one Prices
     * const Prices = await prisma.prices.create({
     *   data: {
     *     // ... data to create a Prices
     *   }
     * })
     *
     **/
    create<T extends pricesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, pricesCreateArgs<ExtArgs>>
    ): Prisma__pricesClient<
      $Result.GetResult<Prisma.$pricesPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >

    /**
     * Create many Prices.
     *     @param {pricesCreateManyArgs} args - Arguments to create many Prices.
     *     @example
     *     // Create many Prices
     *     const prices = await prisma.prices.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends pricesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pricesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prices.
     * @param {pricesDeleteArgs} args - Arguments to delete one Prices.
     * @example
     * // Delete one Prices
     * const Prices = await prisma.prices.delete({
     *   where: {
     *     // ... filter to delete one Prices
     *   }
     * })
     *
     **/
    delete<T extends pricesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, pricesDeleteArgs<ExtArgs>>
    ): Prisma__pricesClient<
      $Result.GetResult<Prisma.$pricesPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >

    /**
     * Update one Prices.
     * @param {pricesUpdateArgs} args - Arguments to update one Prices.
     * @example
     * // Update one Prices
     * const prices = await prisma.prices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends pricesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, pricesUpdateArgs<ExtArgs>>
    ): Prisma__pricesClient<
      $Result.GetResult<Prisma.$pricesPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >

    /**
     * Delete zero or more Prices.
     * @param {pricesDeleteManyArgs} args - Arguments to filter Prices to delete.
     * @example
     * // Delete a few Prices
     * const { count } = await prisma.prices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends pricesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pricesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pricesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prices
     * const prices = await prisma.prices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends pricesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, pricesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prices.
     * @param {pricesUpsertArgs} args - Arguments to update or create a Prices.
     * @example
     * // Update or create a Prices
     * const prices = await prisma.prices.upsert({
     *   create: {
     *     // ... data to create a Prices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prices we want to update
     *   }
     * })
     **/
    upsert<T extends pricesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, pricesUpsertArgs<ExtArgs>>
    ): Prisma__pricesClient<
      $Result.GetResult<Prisma.$pricesPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >

    /**
     * Count the number of Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pricesCountArgs} args - Arguments to filter Prices to count.
     * @example
     * // Count the number of Prices
     * const count = await prisma.prices.count({
     *   where: {
     *     // ... the filter for the Prices we want to count
     *   }
     * })
     **/
    count<T extends pricesCountArgs>(
      args?: Subset<T, pricesCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PricesAggregateArgs>(
      args: Subset<T, PricesAggregateArgs>
    ): Prisma.PrismaPromise<GetPricesAggregateType<T>>

    /**
     * Group by Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pricesGroupByArgs} args - Group by arguments.
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
      T extends pricesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pricesGroupByArgs['orderBy'] }
        : { orderBy?: pricesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
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
    >(
      args: SubsetIntersection<T, pricesGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetPricesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the prices model
     */
    readonly fields: pricesFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for prices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pricesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the prices model
   */
  interface pricesFieldRefs {
    readonly id: FieldRef<'prices', 'String'>
    readonly object: FieldRef<'prices', 'String'>
    readonly active: FieldRef<'prices', 'Boolean'>
    readonly currency: FieldRef<'prices', 'String'>
    readonly metadata: FieldRef<'prices', 'Json'>
    readonly nickname: FieldRef<'prices', 'String'>
    readonly recurring: FieldRef<'prices', 'Json'>
    readonly unit_amount: FieldRef<'prices', 'Int'>
    readonly billing_scheme: FieldRef<'prices', 'String'>
    readonly created: FieldRef<'prices', 'Int'>
    readonly livemode: FieldRef<'prices', 'Boolean'>
    readonly lookup_key: FieldRef<'prices', 'String'>
    readonly transform_quantity: FieldRef<'prices', 'Json'>
    readonly unit_amount_decimal: FieldRef<'prices', 'String'>
    readonly product: FieldRef<'prices', 'String'>
    readonly updated_at: FieldRef<'prices', 'DateTime'>
  }

  // Custom InputTypes

  /**
   * prices findUnique
   */
  export type pricesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the prices
     */
    select?: pricesSelect<ExtArgs> | null
    /**
     * Filter, which prices to fetch.
     */
    where: pricesWhereUniqueInput
  }

  /**
   * prices findUniqueOrThrow
   */
  export type pricesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the prices
     */
    select?: pricesSelect<ExtArgs> | null
    /**
     * Filter, which prices to fetch.
     */
    where: pricesWhereUniqueInput
  }

  /**
   * prices findFirst
   */
  export type pricesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the prices
     */
    select?: pricesSelect<ExtArgs> | null
    /**
     * Filter, which prices to fetch.
     */
    where?: pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of prices to fetch.
     */
    orderBy?:
      | pricesOrderByWithRelationAndSearchRelevanceInput
      | pricesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for prices.
     */
    cursor?: pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of prices.
     */
    distinct?: PricesScalarFieldEnum | PricesScalarFieldEnum[]
  }

  /**
   * prices findFirstOrThrow
   */
  export type pricesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the prices
     */
    select?: pricesSelect<ExtArgs> | null
    /**
     * Filter, which prices to fetch.
     */
    where?: pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of prices to fetch.
     */
    orderBy?:
      | pricesOrderByWithRelationAndSearchRelevanceInput
      | pricesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for prices.
     */
    cursor?: pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of prices.
     */
    distinct?: PricesScalarFieldEnum | PricesScalarFieldEnum[]
  }

  /**
   * prices findMany
   */
  export type pricesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the prices
     */
    select?: pricesSelect<ExtArgs> | null
    /**
     * Filter, which prices to fetch.
     */
    where?: pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of prices to fetch.
     */
    orderBy?:
      | pricesOrderByWithRelationAndSearchRelevanceInput
      | pricesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing prices.
     */
    cursor?: pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` prices.
     */
    skip?: number
    distinct?: PricesScalarFieldEnum | PricesScalarFieldEnum[]
  }

  /**
   * prices create
   */
  export type pricesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the prices
     */
    select?: pricesSelect<ExtArgs> | null
    /**
     * The data needed to create a prices.
     */
    data: XOR<pricesCreateInput, pricesUncheckedCreateInput>
  }

  /**
   * prices createMany
   */
  export type pricesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many prices.
     */
    data: pricesCreateManyInput | pricesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prices update
   */
  export type pricesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the prices
     */
    select?: pricesSelect<ExtArgs> | null
    /**
     * The data needed to update a prices.
     */
    data: XOR<pricesUpdateInput, pricesUncheckedUpdateInput>
    /**
     * Choose, which prices to update.
     */
    where: pricesWhereUniqueInput
  }

  /**
   * prices updateMany
   */
  export type pricesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update prices.
     */
    data: XOR<pricesUpdateManyMutationInput, pricesUncheckedUpdateManyInput>
    /**
     * Filter which prices to update
     */
    where?: pricesWhereInput
  }

  /**
   * prices upsert
   */
  export type pricesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the prices
     */
    select?: pricesSelect<ExtArgs> | null
    /**
     * The filter to search for the prices to update in case it exists.
     */
    where: pricesWhereUniqueInput
    /**
     * In case the prices found by the `where` argument doesn't exist, create a new prices with this data.
     */
    create: XOR<pricesCreateInput, pricesUncheckedCreateInput>
    /**
     * In case the prices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pricesUpdateInput, pricesUncheckedUpdateInput>
  }

  /**
   * prices delete
   */
  export type pricesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the prices
     */
    select?: pricesSelect<ExtArgs> | null
    /**
     * Filter which prices to delete.
     */
    where: pricesWhereUniqueInput
  }

  /**
   * prices deleteMany
   */
  export type pricesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which prices to delete
     */
    where?: pricesWhereInput
  }

  /**
   * prices without action
   */
  export type pricesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the prices
     */
    select?: pricesSelect<ExtArgs> | null
  }

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted'
    ReadCommitted: 'ReadCommitted'
    RepeatableRead: 'RepeatableRead'
    Serializable: 'Serializable'
  }

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

  export const ProjectScalarFieldEnum: {
    id: 'id'
    owner: 'owner'
    name: 'name'
    description: 'description'
    createdAt: 'createdAt'
    deletedAt: 'deletedAt'
    updatedAt: 'updatedAt'
    image: 'image'
    lastActive: 'lastActive'
  }

  export type ProjectScalarFieldEnum =
    (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]

  export const TemplateScalarFieldEnum: {
    id: 'id'
    name: 'name'
    description: 'description'
    image: 'image'
    graph: 'graph'
    spells: 'spells'
    createdAt: 'createdAt'
    deletedAt: 'deletedAt'
    updatedAt: 'updatedAt'
  }

  export type TemplateScalarFieldEnum =
    (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]

  export const PublicAgentScalarFieldEnum: {
    id: 'id'
    agentId: 'agentId'
    userId: 'userId'
    madePublic: 'madePublic'
    deletedAt: 'deletedAt'
    description: 'description'
    remixable: 'remixable'
    isTemplate: 'isTemplate'
    featured: 'featured'
  }

  export type PublicAgentScalarFieldEnum =
    (typeof PublicAgentScalarFieldEnum)[keyof typeof PublicAgentScalarFieldEnum]

  export const ReportsScalarFieldEnum: {
    id: 'id'
    publicAgentId: 'publicAgentId'
    createdAt: 'createdAt'
    message: 'message'
  }

  export type ReportsScalarFieldEnum =
    (typeof ReportsScalarFieldEnum)[keyof typeof ReportsScalarFieldEnum]

  export const LikesScalarFieldEnum: {
    id: 'id'
    userId: 'userId'
    publicAgentId: 'publicAgentId'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type LikesScalarFieldEnum =
    (typeof LikesScalarFieldEnum)[keyof typeof LikesScalarFieldEnum]

  export const CommentsScalarFieldEnum: {
    id: 'id'
    userId: 'userId'
    publicAgentId: 'publicAgentId'
    content: 'content'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
    deletedAt: 'deletedAt'
  }

  export type CommentsScalarFieldEnum =
    (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]

  export const AnonymousUserScalarFieldEnum: {
    id: 'id'
    createdAt: 'createdAt'
    anonymousId: 'anonymousId'
    fingerprint: 'fingerprint'
    lastAccessed: 'lastAccessed'
  }

  export type AnonymousUserScalarFieldEnum =
    (typeof AnonymousUserScalarFieldEnum)[keyof typeof AnonymousUserScalarFieldEnum]

  export const BudgetScalarFieldEnum: {
    id: 'id'
    userId: 'userId'
    balance: 'balance'
    currentCost: 'currentCost'
    modelCost: 'modelCost'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type BudgetScalarFieldEnum =
    (typeof BudgetScalarFieldEnum)[keyof typeof BudgetScalarFieldEnum]

  export const PromotionScalarFieldEnum: {
    id: 'id'
    name: 'name'
    userId: 'userId'
    type: 'type'
    amount: 'amount'
    description: 'description'
    validFrom: 'validFrom'
    validUntil: 'validUntil'
    isUsed: 'isUsed'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type PromotionScalarFieldEnum =
    (typeof PromotionScalarFieldEnum)[keyof typeof PromotionScalarFieldEnum]

  export const AgentsScalarFieldEnum: {
    id: 'id'
    rootSpell: 'rootSpell'
    publicVariables: 'publicVariables'
    secrets: 'secrets'
    name: 'name'
    enabled: 'enabled'
    updatedAt: 'updatedAt'
    pingedAt: 'pingedAt'
    projectId: 'projectId'
    data: 'data'
    runState: 'runState'
    image: 'image'
    rootSpellId: 'rootSpellId'
    default: 'default'
    createdAt: 'createdAt'
    currentSpellReleaseId: 'currentSpellReleaseId'
    embedModel: 'embedModel'
    version: 'version'
    embeddingProvider: 'embeddingProvider'
    embeddingModel: 'embeddingModel'
    publicAgentId: 'publicAgentId'
    description: 'description'
    remixable: 'remixable'
    featured: 'featured'
    isTemplate: 'isTemplate'
    isPublic: 'isPublic'
    creatorId: 'creatorId'
    creatorName: 'creatorName'
    creatorImage: 'creatorImage'
    likesCount: 'likesCount'
    commentsCount: 'commentsCount'
    isDraft: 'isDraft'
    draftAgentId: 'draftAgentId'
  }

  export type AgentsScalarFieldEnum =
    (typeof AgentsScalarFieldEnum)[keyof typeof AgentsScalarFieldEnum]

  export const SpellsScalarFieldEnum: {
    id: 'id'
    name: 'name'
    projectId: 'projectId'
    graph: 'graph'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
    type: 'type'
    spellReleaseId: 'spellReleaseId'
  }

  export type SpellsScalarFieldEnum =
    (typeof SpellsScalarFieldEnum)[keyof typeof SpellsScalarFieldEnum]

  export const DocumentsScalarFieldEnum: {
    id: 'id'
    type: 'type'
    projectId: 'projectId'
    date: 'date'
    metadata: 'metadata'
  }

  export type DocumentsScalarFieldEnum =
    (typeof DocumentsScalarFieldEnum)[keyof typeof DocumentsScalarFieldEnum]

  export const CustomersScalarFieldEnum: {
    id: 'id'
    object: 'object'
    address: 'address'
    description: 'description'
    email: 'email'
    metadata: 'metadata'
    name: 'name'
    phone: 'phone'
    shipping: 'shipping'
    balance: 'balance'
    created: 'created'
    currency: 'currency'
    default_source: 'default_source'
    delinquent: 'delinquent'
    discount: 'discount'
    invoice_prefix: 'invoice_prefix'
    invoice_settings: 'invoice_settings'
    livemode: 'livemode'
    next_invoice_sequence: 'next_invoice_sequence'
    preferred_locales: 'preferred_locales'
    tax_exempt: 'tax_exempt'
    updated_at: 'updated_at'
    deleted: 'deleted'
  }

  export type CustomersScalarFieldEnum =
    (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]

  export const SubscriptionsScalarFieldEnum: {
    id: 'id'
    object: 'object'
    cancel_at_period_end: 'cancel_at_period_end'
    current_period_end: 'current_period_end'
    current_period_start: 'current_period_start'
    default_payment_method: 'default_payment_method'
    items: 'items'
    metadata: 'metadata'
    pending_setup_intent: 'pending_setup_intent'
    pending_update: 'pending_update'
    application_fee_percent: 'application_fee_percent'
    billing_cycle_anchor: 'billing_cycle_anchor'
    billing_thresholds: 'billing_thresholds'
    cancel_at: 'cancel_at'
    canceled_at: 'canceled_at'
    collection_method: 'collection_method'
    created: 'created'
    days_until_due: 'days_until_due'
    default_source: 'default_source'
    default_tax_rates: 'default_tax_rates'
    discount: 'discount'
    ended_at: 'ended_at'
    livemode: 'livemode'
    next_pending_invoice_item_invoice: 'next_pending_invoice_item_invoice'
    pause_collection: 'pause_collection'
    pending_invoice_item_interval: 'pending_invoice_item_interval'
    start_date: 'start_date'
    transfer_data: 'transfer_data'
    trial_end: 'trial_end'
    trial_start: 'trial_start'
    schedule: 'schedule'
    customer: 'customer'
    latest_invoice: 'latest_invoice'
    plan: 'plan'
    updated_at: 'updated_at'
  }

  export type SubscriptionsScalarFieldEnum =
    (typeof SubscriptionsScalarFieldEnum)[keyof typeof SubscriptionsScalarFieldEnum]

  export const ProductsScalarFieldEnum: {
    id: 'id'
    object: 'object'
    active: 'active'
    description: 'description'
    metadata: 'metadata'
    name: 'name'
    created: 'created'
    images: 'images'
    livemode: 'livemode'
    package_dimensions: 'package_dimensions'
    shippable: 'shippable'
    statement_descriptor: 'statement_descriptor'
    unit_label: 'unit_label'
    updated: 'updated'
    url: 'url'
    updated_at: 'updated_at'
  }

  export type ProductsScalarFieldEnum =
    (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]

  export const PricesScalarFieldEnum: {
    id: 'id'
    object: 'object'
    active: 'active'
    currency: 'currency'
    metadata: 'metadata'
    nickname: 'nickname'
    recurring: 'recurring'
    unit_amount: 'unit_amount'
    billing_scheme: 'billing_scheme'
    created: 'created'
    livemode: 'livemode'
    lookup_key: 'lookup_key'
    transform_quantity: 'transform_quantity'
    unit_amount_decimal: 'unit_amount_decimal'
    product: 'product'
    updated_at: 'updated_at'
  }

  export type PricesScalarFieldEnum =
    (typeof PricesScalarFieldEnum)[keyof typeof PricesScalarFieldEnum]

  export const SortOrder: {
    asc: 'asc'
    desc: 'desc'
  }

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull
    JsonNull: typeof JsonNull
  }

  export type NullableJsonNullValueInput =
    (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]

  export const QueryMode: {
    default: 'default'
    insensitive: 'insensitive'
  }

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]

  export const NullsOrder: {
    first: 'first'
    last: 'last'
  }

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]

  export const ProjectOrderByRelevanceFieldEnum: {
    id: 'id'
    owner: 'owner'
    name: 'name'
    description: 'description'
    image: 'image'
  }

  export type ProjectOrderByRelevanceFieldEnum =
    (typeof ProjectOrderByRelevanceFieldEnum)[keyof typeof ProjectOrderByRelevanceFieldEnum]

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull
    JsonNull: typeof JsonNull
    AnyNull: typeof AnyNull
  }

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]

  export const TemplateOrderByRelevanceFieldEnum: {
    id: 'id'
    name: 'name'
    description: 'description'
    image: 'image'
    spells: 'spells'
  }

  export type TemplateOrderByRelevanceFieldEnum =
    (typeof TemplateOrderByRelevanceFieldEnum)[keyof typeof TemplateOrderByRelevanceFieldEnum]

  export const PublicAgentOrderByRelevanceFieldEnum: {
    id: 'id'
    agentId: 'agentId'
    userId: 'userId'
    description: 'description'
  }

  export type PublicAgentOrderByRelevanceFieldEnum =
    (typeof PublicAgentOrderByRelevanceFieldEnum)[keyof typeof PublicAgentOrderByRelevanceFieldEnum]

  export const ReportsOrderByRelevanceFieldEnum: {
    id: 'id'
    publicAgentId: 'publicAgentId'
    message: 'message'
  }

  export type ReportsOrderByRelevanceFieldEnum =
    (typeof ReportsOrderByRelevanceFieldEnum)[keyof typeof ReportsOrderByRelevanceFieldEnum]

  export const LikesOrderByRelevanceFieldEnum: {
    id: 'id'
    userId: 'userId'
    publicAgentId: 'publicAgentId'
  }

  export type LikesOrderByRelevanceFieldEnum =
    (typeof LikesOrderByRelevanceFieldEnum)[keyof typeof LikesOrderByRelevanceFieldEnum]

  export const CommentsOrderByRelevanceFieldEnum: {
    id: 'id'
    userId: 'userId'
    publicAgentId: 'publicAgentId'
    content: 'content'
  }

  export type CommentsOrderByRelevanceFieldEnum =
    (typeof CommentsOrderByRelevanceFieldEnum)[keyof typeof CommentsOrderByRelevanceFieldEnum]

  export const AnonymousUserOrderByRelevanceFieldEnum: {
    id: 'id'
    anonymousId: 'anonymousId'
    fingerprint: 'fingerprint'
  }

  export type AnonymousUserOrderByRelevanceFieldEnum =
    (typeof AnonymousUserOrderByRelevanceFieldEnum)[keyof typeof AnonymousUserOrderByRelevanceFieldEnum]

  export const BudgetOrderByRelevanceFieldEnum: {
    id: 'id'
    userId: 'userId'
  }

  export type BudgetOrderByRelevanceFieldEnum =
    (typeof BudgetOrderByRelevanceFieldEnum)[keyof typeof BudgetOrderByRelevanceFieldEnum]

  export const PromotionOrderByRelevanceFieldEnum: {
    id: 'id'
    name: 'name'
    userId: 'userId'
    description: 'description'
  }

  export type PromotionOrderByRelevanceFieldEnum =
    (typeof PromotionOrderByRelevanceFieldEnum)[keyof typeof PromotionOrderByRelevanceFieldEnum]

  export const agentsOrderByRelevanceFieldEnum: {
    id: 'id'
    publicVariables: 'publicVariables'
    secrets: 'secrets'
    name: 'name'
    updatedAt: 'updatedAt'
    pingedAt: 'pingedAt'
    projectId: 'projectId'
    runState: 'runState'
    image: 'image'
    rootSpellId: 'rootSpellId'
    currentSpellReleaseId: 'currentSpellReleaseId'
    embedModel: 'embedModel'
    version: 'version'
    embeddingProvider: 'embeddingProvider'
    embeddingModel: 'embeddingModel'
    publicAgentId: 'publicAgentId'
    description: 'description'
    creatorId: 'creatorId'
    creatorName: 'creatorName'
    creatorImage: 'creatorImage'
    draftAgentId: 'draftAgentId'
  }

  export type agentsOrderByRelevanceFieldEnum =
    (typeof agentsOrderByRelevanceFieldEnum)[keyof typeof agentsOrderByRelevanceFieldEnum]

  export const spellsOrderByRelevanceFieldEnum: {
    id: 'id'
    name: 'name'
    projectId: 'projectId'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
    type: 'type'
    spellReleaseId: 'spellReleaseId'
  }

  export type spellsOrderByRelevanceFieldEnum =
    (typeof spellsOrderByRelevanceFieldEnum)[keyof typeof spellsOrderByRelevanceFieldEnum]

  export const documentsOrderByRelevanceFieldEnum: {
    id: 'id'
    type: 'type'
    projectId: 'projectId'
    date: 'date'
  }

  export type documentsOrderByRelevanceFieldEnum =
    (typeof documentsOrderByRelevanceFieldEnum)[keyof typeof documentsOrderByRelevanceFieldEnum]

  export const customersOrderByRelevanceFieldEnum: {
    id: 'id'
    object: 'object'
    description: 'description'
    email: 'email'
    name: 'name'
    phone: 'phone'
    currency: 'currency'
    default_source: 'default_source'
    invoice_prefix: 'invoice_prefix'
    tax_exempt: 'tax_exempt'
  }

  export type customersOrderByRelevanceFieldEnum =
    (typeof customersOrderByRelevanceFieldEnum)[keyof typeof customersOrderByRelevanceFieldEnum]

  export const subscriptionsOrderByRelevanceFieldEnum: {
    id: 'id'
    object: 'object'
    default_payment_method: 'default_payment_method'
    pending_setup_intent: 'pending_setup_intent'
    collection_method: 'collection_method'
    default_source: 'default_source'
    schedule: 'schedule'
    customer: 'customer'
    latest_invoice: 'latest_invoice'
    plan: 'plan'
  }

  export type subscriptionsOrderByRelevanceFieldEnum =
    (typeof subscriptionsOrderByRelevanceFieldEnum)[keyof typeof subscriptionsOrderByRelevanceFieldEnum]

  export const productsOrderByRelevanceFieldEnum: {
    id: 'id'
    object: 'object'
    description: 'description'
    name: 'name'
    statement_descriptor: 'statement_descriptor'
    unit_label: 'unit_label'
    url: 'url'
  }

  export type productsOrderByRelevanceFieldEnum =
    (typeof productsOrderByRelevanceFieldEnum)[keyof typeof productsOrderByRelevanceFieldEnum]

  export const pricesOrderByRelevanceFieldEnum: {
    id: 'id'
    object: 'object'
    currency: 'currency'
    nickname: 'nickname'
    billing_scheme: 'billing_scheme'
    lookup_key: 'lookup_key'
    unit_amount_decimal: 'unit_amount_decimal'
    product: 'product'
  }

  export type pricesOrderByRelevanceFieldEnum =
    (typeof pricesOrderByRelevanceFieldEnum)[keyof typeof pricesOrderByRelevanceFieldEnum]

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Json'
  >

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >

  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Decimal'
  >

  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Decimal[]'
  >

  /**
   * Reference to a field of type 'PromotionType'
   */
  export type EnumPromotionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'PromotionType'
  >

  /**
   * Reference to a field of type 'PromotionType[]'
   */
  export type ListEnumPromotionTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'PromotionType[]'>

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >

  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'BigInt'
  >

  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'BigInt[]'
  >

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >

  /**
   * Deep Input Types
   */

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<'Project'> | string
    owner?: StringFilter<'Project'> | string
    name?: StringFilter<'Project'> | string
    description?: StringNullableFilter<'Project'> | string | null
    createdAt?: DateTimeNullableFilter<'Project'> | Date | string | null
    deletedAt?: DateTimeNullableFilter<'Project'> | Date | string | null
    updatedAt?: DateTimeNullableFilter<'Project'> | Date | string | null
    image?: StringNullableFilter<'Project'> | string | null
    lastActive?: DateTimeNullableFilter<'Project'> | Date | string | null
  }

  export type ProjectOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    lastActive?: SortOrderInput | SortOrder
    _relevance?: ProjectOrderByRelevanceInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: ProjectWhereInput | ProjectWhereInput[]
      OR?: ProjectWhereInput[]
      NOT?: ProjectWhereInput | ProjectWhereInput[]
      owner?: StringFilter<'Project'> | string
      name?: StringFilter<'Project'> | string
      description?: StringNullableFilter<'Project'> | string | null
      createdAt?: DateTimeNullableFilter<'Project'> | Date | string | null
      deletedAt?: DateTimeNullableFilter<'Project'> | Date | string | null
      updatedAt?: DateTimeNullableFilter<'Project'> | Date | string | null
      image?: StringNullableFilter<'Project'> | string | null
      lastActive?: DateTimeNullableFilter<'Project'> | Date | string | null
    },
    'id'
  >

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    lastActive?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?:
      | ProjectScalarWhereWithAggregatesInput
      | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?:
      | ProjectScalarWhereWithAggregatesInput
      | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Project'> | string
    owner?: StringWithAggregatesFilter<'Project'> | string
    name?: StringWithAggregatesFilter<'Project'> | string
    description?: StringNullableWithAggregatesFilter<'Project'> | string | null
    createdAt?:
      | DateTimeNullableWithAggregatesFilter<'Project'>
      | Date
      | string
      | null
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'Project'>
      | Date
      | string
      | null
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Project'>
      | Date
      | string
      | null
    image?: StringNullableWithAggregatesFilter<'Project'> | string | null
    lastActive?:
      | DateTimeNullableWithAggregatesFilter<'Project'>
      | Date
      | string
      | null
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: StringFilter<'Template'> | string
    name?: StringFilter<'Template'> | string
    description?: StringNullableFilter<'Template'> | string | null
    image?: StringNullableFilter<'Template'> | string | null
    graph?: JsonNullableFilter<'Template'>
    spells?: StringNullableListFilter<'Template'>
    createdAt?: DateTimeNullableFilter<'Template'> | Date | string | null
    deletedAt?: DateTimeNullableFilter<'Template'> | Date | string | null
    updatedAt?: DateTimeNullableFilter<'Template'> | Date | string | null
  }

  export type TemplateOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    graph?: SortOrderInput | SortOrder
    spells?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: TemplateOrderByRelevanceInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: TemplateWhereInput | TemplateWhereInput[]
      OR?: TemplateWhereInput[]
      NOT?: TemplateWhereInput | TemplateWhereInput[]
      name?: StringFilter<'Template'> | string
      description?: StringNullableFilter<'Template'> | string | null
      image?: StringNullableFilter<'Template'> | string | null
      graph?: JsonNullableFilter<'Template'>
      spells?: StringNullableListFilter<'Template'>
      createdAt?: DateTimeNullableFilter<'Template'> | Date | string | null
      deletedAt?: DateTimeNullableFilter<'Template'> | Date | string | null
      updatedAt?: DateTimeNullableFilter<'Template'> | Date | string | null
    },
    'id'
  >

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    graph?: SortOrderInput | SortOrder
    spells?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?:
      | TemplateScalarWhereWithAggregatesInput
      | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?:
      | TemplateScalarWhereWithAggregatesInput
      | TemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Template'> | string
    name?: StringWithAggregatesFilter<'Template'> | string
    description?: StringNullableWithAggregatesFilter<'Template'> | string | null
    image?: StringNullableWithAggregatesFilter<'Template'> | string | null
    graph?: JsonNullableWithAggregatesFilter<'Template'>
    spells?: StringNullableListFilter<'Template'>
    createdAt?:
      | DateTimeNullableWithAggregatesFilter<'Template'>
      | Date
      | string
      | null
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'Template'>
      | Date
      | string
      | null
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Template'>
      | Date
      | string
      | null
  }

  export type PublicAgentWhereInput = {
    AND?: PublicAgentWhereInput | PublicAgentWhereInput[]
    OR?: PublicAgentWhereInput[]
    NOT?: PublicAgentWhereInput | PublicAgentWhereInput[]
    id?: StringFilter<'PublicAgent'> | string
    agentId?: StringFilter<'PublicAgent'> | string
    userId?: StringFilter<'PublicAgent'> | string
    madePublic?: DateTimeFilter<'PublicAgent'> | Date | string
    deletedAt?: DateTimeNullableFilter<'PublicAgent'> | Date | string | null
    description?: StringFilter<'PublicAgent'> | string
    remixable?: BoolFilter<'PublicAgent'> | boolean
    isTemplate?: BoolFilter<'PublicAgent'> | boolean
    featured?: BoolFilter<'PublicAgent'> | boolean
    comments?: CommentsListRelationFilter
    likes?: LikesListRelationFilter
    Reports?: ReportsListRelationFilter
  }

  export type PublicAgentOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    agentId?: SortOrder
    userId?: SortOrder
    madePublic?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    description?: SortOrder
    remixable?: SortOrder
    isTemplate?: SortOrder
    featured?: SortOrder
    comments?: CommentsOrderByRelationAggregateInput
    likes?: LikesOrderByRelationAggregateInput
    Reports?: ReportsOrderByRelationAggregateInput
    _relevance?: PublicAgentOrderByRelevanceInput
  }

  export type PublicAgentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      agentId?: string
      AND?: PublicAgentWhereInput | PublicAgentWhereInput[]
      OR?: PublicAgentWhereInput[]
      NOT?: PublicAgentWhereInput | PublicAgentWhereInput[]
      userId?: StringFilter<'PublicAgent'> | string
      madePublic?: DateTimeFilter<'PublicAgent'> | Date | string
      deletedAt?: DateTimeNullableFilter<'PublicAgent'> | Date | string | null
      description?: StringFilter<'PublicAgent'> | string
      remixable?: BoolFilter<'PublicAgent'> | boolean
      isTemplate?: BoolFilter<'PublicAgent'> | boolean
      featured?: BoolFilter<'PublicAgent'> | boolean
      comments?: CommentsListRelationFilter
      likes?: LikesListRelationFilter
      Reports?: ReportsListRelationFilter
    },
    'id' | 'agentId'
  >

  export type PublicAgentOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    userId?: SortOrder
    madePublic?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    description?: SortOrder
    remixable?: SortOrder
    isTemplate?: SortOrder
    featured?: SortOrder
    _count?: PublicAgentCountOrderByAggregateInput
    _max?: PublicAgentMaxOrderByAggregateInput
    _min?: PublicAgentMinOrderByAggregateInput
  }

  export type PublicAgentScalarWhereWithAggregatesInput = {
    AND?:
      | PublicAgentScalarWhereWithAggregatesInput
      | PublicAgentScalarWhereWithAggregatesInput[]
    OR?: PublicAgentScalarWhereWithAggregatesInput[]
    NOT?:
      | PublicAgentScalarWhereWithAggregatesInput
      | PublicAgentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'PublicAgent'> | string
    agentId?: StringWithAggregatesFilter<'PublicAgent'> | string
    userId?: StringWithAggregatesFilter<'PublicAgent'> | string
    madePublic?: DateTimeWithAggregatesFilter<'PublicAgent'> | Date | string
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'PublicAgent'>
      | Date
      | string
      | null
    description?: StringWithAggregatesFilter<'PublicAgent'> | string
    remixable?: BoolWithAggregatesFilter<'PublicAgent'> | boolean
    isTemplate?: BoolWithAggregatesFilter<'PublicAgent'> | boolean
    featured?: BoolWithAggregatesFilter<'PublicAgent'> | boolean
  }

  export type ReportsWhereInput = {
    AND?: ReportsWhereInput | ReportsWhereInput[]
    OR?: ReportsWhereInput[]
    NOT?: ReportsWhereInput | ReportsWhereInput[]
    id?: StringFilter<'Reports'> | string
    publicAgentId?: StringFilter<'Reports'> | string
    createdAt?: DateTimeFilter<'Reports'> | Date | string
    message?: StringFilter<'Reports'> | string
    publicAgent?: XOR<PublicAgentRelationFilter, PublicAgentWhereInput>
  }

  export type ReportsOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    publicAgent?: PublicAgentOrderByWithRelationAndSearchRelevanceInput
    _relevance?: ReportsOrderByRelevanceInput
  }

  export type ReportsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: ReportsWhereInput | ReportsWhereInput[]
      OR?: ReportsWhereInput[]
      NOT?: ReportsWhereInput | ReportsWhereInput[]
      publicAgentId?: StringFilter<'Reports'> | string
      createdAt?: DateTimeFilter<'Reports'> | Date | string
      message?: StringFilter<'Reports'> | string
      publicAgent?: XOR<PublicAgentRelationFilter, PublicAgentWhereInput>
    },
    'id'
  >

  export type ReportsOrderByWithAggregationInput = {
    id?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    _count?: ReportsCountOrderByAggregateInput
    _max?: ReportsMaxOrderByAggregateInput
    _min?: ReportsMinOrderByAggregateInput
  }

  export type ReportsScalarWhereWithAggregatesInput = {
    AND?:
      | ReportsScalarWhereWithAggregatesInput
      | ReportsScalarWhereWithAggregatesInput[]
    OR?: ReportsScalarWhereWithAggregatesInput[]
    NOT?:
      | ReportsScalarWhereWithAggregatesInput
      | ReportsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Reports'> | string
    publicAgentId?: StringWithAggregatesFilter<'Reports'> | string
    createdAt?: DateTimeWithAggregatesFilter<'Reports'> | Date | string
    message?: StringWithAggregatesFilter<'Reports'> | string
  }

  export type LikesWhereInput = {
    AND?: LikesWhereInput | LikesWhereInput[]
    OR?: LikesWhereInput[]
    NOT?: LikesWhereInput | LikesWhereInput[]
    id?: StringFilter<'Likes'> | string
    userId?: StringFilter<'Likes'> | string
    publicAgentId?: StringFilter<'Likes'> | string
    createdAt?: DateTimeFilter<'Likes'> | Date | string
    updatedAt?: DateTimeNullableFilter<'Likes'> | Date | string | null
    publicAgent?: XOR<PublicAgentRelationFilter, PublicAgentWhereInput>
  }

  export type LikesOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    publicAgent?: PublicAgentOrderByWithRelationAndSearchRelevanceInput
    _relevance?: LikesOrderByRelevanceInput
  }

  export type LikesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      userId_publicAgentId?: LikesUserIdPublicAgentIdCompoundUniqueInput
      AND?: LikesWhereInput | LikesWhereInput[]
      OR?: LikesWhereInput[]
      NOT?: LikesWhereInput | LikesWhereInput[]
      userId?: StringFilter<'Likes'> | string
      publicAgentId?: StringFilter<'Likes'> | string
      createdAt?: DateTimeFilter<'Likes'> | Date | string
      updatedAt?: DateTimeNullableFilter<'Likes'> | Date | string | null
      publicAgent?: XOR<PublicAgentRelationFilter, PublicAgentWhereInput>
    },
    'id' | 'userId_publicAgentId'
  >

  export type LikesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: LikesCountOrderByAggregateInput
    _max?: LikesMaxOrderByAggregateInput
    _min?: LikesMinOrderByAggregateInput
  }

  export type LikesScalarWhereWithAggregatesInput = {
    AND?:
      | LikesScalarWhereWithAggregatesInput
      | LikesScalarWhereWithAggregatesInput[]
    OR?: LikesScalarWhereWithAggregatesInput[]
    NOT?:
      | LikesScalarWhereWithAggregatesInput
      | LikesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Likes'> | string
    userId?: StringWithAggregatesFilter<'Likes'> | string
    publicAgentId?: StringWithAggregatesFilter<'Likes'> | string
    createdAt?: DateTimeWithAggregatesFilter<'Likes'> | Date | string
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Likes'>
      | Date
      | string
      | null
  }

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: StringFilter<'Comments'> | string
    userId?: StringFilter<'Comments'> | string
    publicAgentId?: StringFilter<'Comments'> | string
    content?: StringFilter<'Comments'> | string
    createdAt?: DateTimeFilter<'Comments'> | Date | string
    updatedAt?: DateTimeNullableFilter<'Comments'> | Date | string | null
    deletedAt?: DateTimeNullableFilter<'Comments'> | Date | string | null
    publicAgent?: XOR<PublicAgentRelationFilter, PublicAgentWhereInput>
  }

  export type CommentsOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    publicAgent?: PublicAgentOrderByWithRelationAndSearchRelevanceInput
    _relevance?: CommentsOrderByRelevanceInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: CommentsWhereInput | CommentsWhereInput[]
      OR?: CommentsWhereInput[]
      NOT?: CommentsWhereInput | CommentsWhereInput[]
      userId?: StringFilter<'Comments'> | string
      publicAgentId?: StringFilter<'Comments'> | string
      content?: StringFilter<'Comments'> | string
      createdAt?: DateTimeFilter<'Comments'> | Date | string
      updatedAt?: DateTimeNullableFilter<'Comments'> | Date | string | null
      deletedAt?: DateTimeNullableFilter<'Comments'> | Date | string | null
      publicAgent?: XOR<PublicAgentRelationFilter, PublicAgentWhereInput>
    },
    'id'
  >

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?:
      | CommentsScalarWhereWithAggregatesInput
      | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?:
      | CommentsScalarWhereWithAggregatesInput
      | CommentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Comments'> | string
    userId?: StringWithAggregatesFilter<'Comments'> | string
    publicAgentId?: StringWithAggregatesFilter<'Comments'> | string
    content?: StringWithAggregatesFilter<'Comments'> | string
    createdAt?: DateTimeWithAggregatesFilter<'Comments'> | Date | string
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Comments'>
      | Date
      | string
      | null
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'Comments'>
      | Date
      | string
      | null
  }

  export type AnonymousUserWhereInput = {
    AND?: AnonymousUserWhereInput | AnonymousUserWhereInput[]
    OR?: AnonymousUserWhereInput[]
    NOT?: AnonymousUserWhereInput | AnonymousUserWhereInput[]
    id?: StringFilter<'AnonymousUser'> | string
    createdAt?: DateTimeFilter<'AnonymousUser'> | Date | string
    anonymousId?: StringFilter<'AnonymousUser'> | string
    fingerprint?: StringFilter<'AnonymousUser'> | string
    lastAccessed?:
      | DateTimeNullableFilter<'AnonymousUser'>
      | Date
      | string
      | null
  }

  export type AnonymousUserOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    createdAt?: SortOrder
    anonymousId?: SortOrder
    fingerprint?: SortOrder
    lastAccessed?: SortOrderInput | SortOrder
    _relevance?: AnonymousUserOrderByRelevanceInput
  }

  export type AnonymousUserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      anonymousId?: string
      AND?: AnonymousUserWhereInput | AnonymousUserWhereInput[]
      OR?: AnonymousUserWhereInput[]
      NOT?: AnonymousUserWhereInput | AnonymousUserWhereInput[]
      createdAt?: DateTimeFilter<'AnonymousUser'> | Date | string
      fingerprint?: StringFilter<'AnonymousUser'> | string
      lastAccessed?:
        | DateTimeNullableFilter<'AnonymousUser'>
        | Date
        | string
        | null
    },
    'id' | 'anonymousId'
  >

  export type AnonymousUserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    anonymousId?: SortOrder
    fingerprint?: SortOrder
    lastAccessed?: SortOrderInput | SortOrder
    _count?: AnonymousUserCountOrderByAggregateInput
    _max?: AnonymousUserMaxOrderByAggregateInput
    _min?: AnonymousUserMinOrderByAggregateInput
  }

  export type AnonymousUserScalarWhereWithAggregatesInput = {
    AND?:
      | AnonymousUserScalarWhereWithAggregatesInput
      | AnonymousUserScalarWhereWithAggregatesInput[]
    OR?: AnonymousUserScalarWhereWithAggregatesInput[]
    NOT?:
      | AnonymousUserScalarWhereWithAggregatesInput
      | AnonymousUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'AnonymousUser'> | string
    createdAt?: DateTimeWithAggregatesFilter<'AnonymousUser'> | Date | string
    anonymousId?: StringWithAggregatesFilter<'AnonymousUser'> | string
    fingerprint?: StringWithAggregatesFilter<'AnonymousUser'> | string
    lastAccessed?:
      | DateTimeNullableWithAggregatesFilter<'AnonymousUser'>
      | Date
      | string
      | null
  }

  export type BudgetWhereInput = {
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    id?: StringFilter<'Budget'> | string
    userId?: StringFilter<'Budget'> | string
    balance?:
      | DecimalFilter<'Budget'>
      | Decimal
      | DecimalJsLike
      | number
      | string
    currentCost?:
      | DecimalNullableFilter<'Budget'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    modelCost?: JsonNullableFilter<'Budget'>
    createdAt?: DateTimeFilter<'Budget'> | Date | string
    updatedAt?: DateTimeNullableFilter<'Budget'> | Date | string | null
  }

  export type BudgetOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currentCost?: SortOrderInput | SortOrder
    modelCost?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: BudgetOrderByRelevanceInput
  }

  export type BudgetWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      userId?: string
      AND?: BudgetWhereInput | BudgetWhereInput[]
      OR?: BudgetWhereInput[]
      NOT?: BudgetWhereInput | BudgetWhereInput[]
      balance?:
        | DecimalFilter<'Budget'>
        | Decimal
        | DecimalJsLike
        | number
        | string
      currentCost?:
        | DecimalNullableFilter<'Budget'>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null
      modelCost?: JsonNullableFilter<'Budget'>
      createdAt?: DateTimeFilter<'Budget'> | Date | string
      updatedAt?: DateTimeNullableFilter<'Budget'> | Date | string | null
    },
    'id' | 'userId'
  >

  export type BudgetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currentCost?: SortOrderInput | SortOrder
    modelCost?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: BudgetCountOrderByAggregateInput
    _avg?: BudgetAvgOrderByAggregateInput
    _max?: BudgetMaxOrderByAggregateInput
    _min?: BudgetMinOrderByAggregateInput
    _sum?: BudgetSumOrderByAggregateInput
  }

  export type BudgetScalarWhereWithAggregatesInput = {
    AND?:
      | BudgetScalarWhereWithAggregatesInput
      | BudgetScalarWhereWithAggregatesInput[]
    OR?: BudgetScalarWhereWithAggregatesInput[]
    NOT?:
      | BudgetScalarWhereWithAggregatesInput
      | BudgetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Budget'> | string
    userId?: StringWithAggregatesFilter<'Budget'> | string
    balance?:
      | DecimalWithAggregatesFilter<'Budget'>
      | Decimal
      | DecimalJsLike
      | number
      | string
    currentCost?:
      | DecimalNullableWithAggregatesFilter<'Budget'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    modelCost?: JsonNullableWithAggregatesFilter<'Budget'>
    createdAt?: DateTimeWithAggregatesFilter<'Budget'> | Date | string
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Budget'>
      | Date
      | string
      | null
  }

  export type PromotionWhereInput = {
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    id?: StringFilter<'Promotion'> | string
    name?: StringFilter<'Promotion'> | string
    userId?: StringFilter<'Promotion'> | string
    type?: EnumPromotionTypeFilter<'Promotion'> | $Enums.PromotionType
    amount?:
      | DecimalFilter<'Promotion'>
      | Decimal
      | DecimalJsLike
      | number
      | string
    description?: StringNullableFilter<'Promotion'> | string | null
    validFrom?: DateTimeFilter<'Promotion'> | Date | string
    validUntil?: DateTimeFilter<'Promotion'> | Date | string
    isUsed?: BoolFilter<'Promotion'> | boolean
    createdAt?: DateTimeFilter<'Promotion'> | Date | string
    updatedAt?: DateTimeNullableFilter<'Promotion'> | Date | string | null
  }

  export type PromotionOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: PromotionOrderByRelevanceInput
  }

  export type PromotionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: PromotionWhereInput | PromotionWhereInput[]
      OR?: PromotionWhereInput[]
      NOT?: PromotionWhereInput | PromotionWhereInput[]
      name?: StringFilter<'Promotion'> | string
      userId?: StringFilter<'Promotion'> | string
      type?: EnumPromotionTypeFilter<'Promotion'> | $Enums.PromotionType
      amount?:
        | DecimalFilter<'Promotion'>
        | Decimal
        | DecimalJsLike
        | number
        | string
      description?: StringNullableFilter<'Promotion'> | string | null
      validFrom?: DateTimeFilter<'Promotion'> | Date | string
      validUntil?: DateTimeFilter<'Promotion'> | Date | string
      isUsed?: BoolFilter<'Promotion'> | boolean
      createdAt?: DateTimeFilter<'Promotion'> | Date | string
      updatedAt?: DateTimeNullableFilter<'Promotion'> | Date | string | null
    },
    'id'
  >

  export type PromotionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PromotionCountOrderByAggregateInput
    _avg?: PromotionAvgOrderByAggregateInput
    _max?: PromotionMaxOrderByAggregateInput
    _min?: PromotionMinOrderByAggregateInput
    _sum?: PromotionSumOrderByAggregateInput
  }

  export type PromotionScalarWhereWithAggregatesInput = {
    AND?:
      | PromotionScalarWhereWithAggregatesInput
      | PromotionScalarWhereWithAggregatesInput[]
    OR?: PromotionScalarWhereWithAggregatesInput[]
    NOT?:
      | PromotionScalarWhereWithAggregatesInput
      | PromotionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Promotion'> | string
    name?: StringWithAggregatesFilter<'Promotion'> | string
    userId?: StringWithAggregatesFilter<'Promotion'> | string
    type?:
      | EnumPromotionTypeWithAggregatesFilter<'Promotion'>
      | $Enums.PromotionType
    amount?:
      | DecimalWithAggregatesFilter<'Promotion'>
      | Decimal
      | DecimalJsLike
      | number
      | string
    description?:
      | StringNullableWithAggregatesFilter<'Promotion'>
      | string
      | null
    validFrom?: DateTimeWithAggregatesFilter<'Promotion'> | Date | string
    validUntil?: DateTimeWithAggregatesFilter<'Promotion'> | Date | string
    isUsed?: BoolWithAggregatesFilter<'Promotion'> | boolean
    createdAt?: DateTimeWithAggregatesFilter<'Promotion'> | Date | string
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Promotion'>
      | Date
      | string
      | null
  }

  export type agentsWhereInput = {
    AND?: agentsWhereInput | agentsWhereInput[]
    OR?: agentsWhereInput[]
    NOT?: agentsWhereInput | agentsWhereInput[]
    id?: UuidFilter<'agents'> | string
    rootSpell?: JsonNullableFilter<'agents'>
    publicVariables?: StringNullableFilter<'agents'> | string | null
    secrets?: StringNullableFilter<'agents'> | string | null
    name?: StringNullableFilter<'agents'> | string | null
    enabled?: BoolNullableFilter<'agents'> | boolean | null
    updatedAt?: StringNullableFilter<'agents'> | string | null
    pingedAt?: StringNullableFilter<'agents'> | string | null
    projectId?: StringNullableFilter<'agents'> | string | null
    data?: JsonNullableFilter<'agents'>
    runState?: StringNullableFilter<'agents'> | string | null
    image?: StringNullableFilter<'agents'> | string | null
    rootSpellId?: UuidNullableFilter<'agents'> | string | null
    default?: BoolNullableFilter<'agents'> | boolean | null
    createdAt?: DateTimeNullableFilter<'agents'> | Date | string | null
    currentSpellReleaseId?: UuidNullableFilter<'agents'> | string | null
    embedModel?: StringNullableFilter<'agents'> | string | null
    version?: StringNullableFilter<'agents'> | string | null
    embeddingProvider?: StringNullableFilter<'agents'> | string | null
    embeddingModel?: StringNullableFilter<'agents'> | string | null
    publicAgentId?: StringNullableFilter<'agents'> | string | null
    description?: StringNullableFilter<'agents'> | string | null
    remixable?: BoolNullableFilter<'agents'> | boolean | null
    featured?: BoolNullableFilter<'agents'> | boolean | null
    isTemplate?: BoolNullableFilter<'agents'> | boolean | null
    isPublic?: BoolNullableFilter<'agents'> | boolean | null
    creatorId?: StringNullableFilter<'agents'> | string | null
    creatorName?: StringNullableFilter<'agents'> | string | null
    creatorImage?: StringNullableFilter<'agents'> | string | null
    likesCount?: IntNullableFilter<'agents'> | number | null
    commentsCount?: BigIntNullableFilter<'agents'> | bigint | number | null
    isDraft?: BoolNullableFilter<'agents'> | boolean | null
    draftAgentId?: StringNullableFilter<'agents'> | string | null
  }

  export type agentsOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    rootSpell?: SortOrderInput | SortOrder
    publicVariables?: SortOrderInput | SortOrder
    secrets?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    enabled?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    pingedAt?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    runState?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    rootSpellId?: SortOrderInput | SortOrder
    default?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    currentSpellReleaseId?: SortOrderInput | SortOrder
    embedModel?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    embeddingProvider?: SortOrderInput | SortOrder
    embeddingModel?: SortOrderInput | SortOrder
    publicAgentId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    remixable?: SortOrderInput | SortOrder
    featured?: SortOrderInput | SortOrder
    isTemplate?: SortOrderInput | SortOrder
    isPublic?: SortOrderInput | SortOrder
    creatorId?: SortOrderInput | SortOrder
    creatorName?: SortOrderInput | SortOrder
    creatorImage?: SortOrderInput | SortOrder
    likesCount?: SortOrderInput | SortOrder
    commentsCount?: SortOrderInput | SortOrder
    isDraft?: SortOrderInput | SortOrder
    draftAgentId?: SortOrderInput | SortOrder
    _relevance?: agentsOrderByRelevanceInput
  }

  export type agentsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: agentsWhereInput | agentsWhereInput[]
      OR?: agentsWhereInput[]
      NOT?: agentsWhereInput | agentsWhereInput[]
      rootSpell?: JsonNullableFilter<'agents'>
      publicVariables?: StringNullableFilter<'agents'> | string | null
      secrets?: StringNullableFilter<'agents'> | string | null
      name?: StringNullableFilter<'agents'> | string | null
      enabled?: BoolNullableFilter<'agents'> | boolean | null
      updatedAt?: StringNullableFilter<'agents'> | string | null
      pingedAt?: StringNullableFilter<'agents'> | string | null
      projectId?: StringNullableFilter<'agents'> | string | null
      data?: JsonNullableFilter<'agents'>
      runState?: StringNullableFilter<'agents'> | string | null
      image?: StringNullableFilter<'agents'> | string | null
      rootSpellId?: UuidNullableFilter<'agents'> | string | null
      default?: BoolNullableFilter<'agents'> | boolean | null
      createdAt?: DateTimeNullableFilter<'agents'> | Date | string | null
      currentSpellReleaseId?: UuidNullableFilter<'agents'> | string | null
      embedModel?: StringNullableFilter<'agents'> | string | null
      version?: StringNullableFilter<'agents'> | string | null
      embeddingProvider?: StringNullableFilter<'agents'> | string | null
      embeddingModel?: StringNullableFilter<'agents'> | string | null
      publicAgentId?: StringNullableFilter<'agents'> | string | null
      description?: StringNullableFilter<'agents'> | string | null
      remixable?: BoolNullableFilter<'agents'> | boolean | null
      featured?: BoolNullableFilter<'agents'> | boolean | null
      isTemplate?: BoolNullableFilter<'agents'> | boolean | null
      isPublic?: BoolNullableFilter<'agents'> | boolean | null
      creatorId?: StringNullableFilter<'agents'> | string | null
      creatorName?: StringNullableFilter<'agents'> | string | null
      creatorImage?: StringNullableFilter<'agents'> | string | null
      likesCount?: IntNullableFilter<'agents'> | number | null
      commentsCount?: BigIntNullableFilter<'agents'> | bigint | number | null
      isDraft?: BoolNullableFilter<'agents'> | boolean | null
      draftAgentId?: StringNullableFilter<'agents'> | string | null
    },
    'id'
  >

  export type agentsOrderByWithAggregationInput = {
    id?: SortOrder
    rootSpell?: SortOrderInput | SortOrder
    publicVariables?: SortOrderInput | SortOrder
    secrets?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    enabled?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    pingedAt?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    runState?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    rootSpellId?: SortOrderInput | SortOrder
    default?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    currentSpellReleaseId?: SortOrderInput | SortOrder
    embedModel?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    embeddingProvider?: SortOrderInput | SortOrder
    embeddingModel?: SortOrderInput | SortOrder
    publicAgentId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    remixable?: SortOrderInput | SortOrder
    featured?: SortOrderInput | SortOrder
    isTemplate?: SortOrderInput | SortOrder
    isPublic?: SortOrderInput | SortOrder
    creatorId?: SortOrderInput | SortOrder
    creatorName?: SortOrderInput | SortOrder
    creatorImage?: SortOrderInput | SortOrder
    likesCount?: SortOrderInput | SortOrder
    commentsCount?: SortOrderInput | SortOrder
    isDraft?: SortOrderInput | SortOrder
    draftAgentId?: SortOrderInput | SortOrder
    _count?: agentsCountOrderByAggregateInput
    _avg?: agentsAvgOrderByAggregateInput
    _max?: agentsMaxOrderByAggregateInput
    _min?: agentsMinOrderByAggregateInput
    _sum?: agentsSumOrderByAggregateInput
  }

  export type agentsScalarWhereWithAggregatesInput = {
    AND?:
      | agentsScalarWhereWithAggregatesInput
      | agentsScalarWhereWithAggregatesInput[]
    OR?: agentsScalarWhereWithAggregatesInput[]
    NOT?:
      | agentsScalarWhereWithAggregatesInput
      | agentsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<'agents'> | string
    rootSpell?: JsonNullableWithAggregatesFilter<'agents'>
    publicVariables?:
      | StringNullableWithAggregatesFilter<'agents'>
      | string
      | null
    secrets?: StringNullableWithAggregatesFilter<'agents'> | string | null
    name?: StringNullableWithAggregatesFilter<'agents'> | string | null
    enabled?: BoolNullableWithAggregatesFilter<'agents'> | boolean | null
    updatedAt?: StringNullableWithAggregatesFilter<'agents'> | string | null
    pingedAt?: StringNullableWithAggregatesFilter<'agents'> | string | null
    projectId?: StringNullableWithAggregatesFilter<'agents'> | string | null
    data?: JsonNullableWithAggregatesFilter<'agents'>
    runState?: StringNullableWithAggregatesFilter<'agents'> | string | null
    image?: StringNullableWithAggregatesFilter<'agents'> | string | null
    rootSpellId?: UuidNullableWithAggregatesFilter<'agents'> | string | null
    default?: BoolNullableWithAggregatesFilter<'agents'> | boolean | null
    createdAt?:
      | DateTimeNullableWithAggregatesFilter<'agents'>
      | Date
      | string
      | null
    currentSpellReleaseId?:
      | UuidNullableWithAggregatesFilter<'agents'>
      | string
      | null
    embedModel?: StringNullableWithAggregatesFilter<'agents'> | string | null
    version?: StringNullableWithAggregatesFilter<'agents'> | string | null
    embeddingProvider?:
      | StringNullableWithAggregatesFilter<'agents'>
      | string
      | null
    embeddingModel?:
      | StringNullableWithAggregatesFilter<'agents'>
      | string
      | null
    publicAgentId?: StringNullableWithAggregatesFilter<'agents'> | string | null
    description?: StringNullableWithAggregatesFilter<'agents'> | string | null
    remixable?: BoolNullableWithAggregatesFilter<'agents'> | boolean | null
    featured?: BoolNullableWithAggregatesFilter<'agents'> | boolean | null
    isTemplate?: BoolNullableWithAggregatesFilter<'agents'> | boolean | null
    isPublic?: BoolNullableWithAggregatesFilter<'agents'> | boolean | null
    creatorId?: StringNullableWithAggregatesFilter<'agents'> | string | null
    creatorName?: StringNullableWithAggregatesFilter<'agents'> | string | null
    creatorImage?: StringNullableWithAggregatesFilter<'agents'> | string | null
    likesCount?: IntNullableWithAggregatesFilter<'agents'> | number | null
    commentsCount?:
      | BigIntNullableWithAggregatesFilter<'agents'>
      | bigint
      | number
      | null
    isDraft?: BoolNullableWithAggregatesFilter<'agents'> | boolean | null
    draftAgentId?: StringNullableWithAggregatesFilter<'agents'> | string | null
  }

  export type spellsWhereInput = {
    AND?: spellsWhereInput | spellsWhereInput[]
    OR?: spellsWhereInput[]
    NOT?: spellsWhereInput | spellsWhereInput[]
    id?: UuidFilter<'spells'> | string
    name?: StringNullableFilter<'spells'> | string | null
    projectId?: StringNullableFilter<'spells'> | string | null
    graph?: JsonNullableFilter<'spells'>
    createdAt?: StringNullableFilter<'spells'> | string | null
    updatedAt?: StringNullableFilter<'spells'> | string | null
    type?: StringNullableFilter<'spells'> | string | null
    spellReleaseId?: UuidNullableFilter<'spells'> | string | null
  }

  export type spellsOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    graph?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    spellReleaseId?: SortOrderInput | SortOrder
    _relevance?: spellsOrderByRelevanceInput
  }

  export type spellsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: spellsWhereInput | spellsWhereInput[]
      OR?: spellsWhereInput[]
      NOT?: spellsWhereInput | spellsWhereInput[]
      name?: StringNullableFilter<'spells'> | string | null
      projectId?: StringNullableFilter<'spells'> | string | null
      graph?: JsonNullableFilter<'spells'>
      createdAt?: StringNullableFilter<'spells'> | string | null
      updatedAt?: StringNullableFilter<'spells'> | string | null
      type?: StringNullableFilter<'spells'> | string | null
      spellReleaseId?: UuidNullableFilter<'spells'> | string | null
    },
    'id'
  >

  export type spellsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    graph?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    spellReleaseId?: SortOrderInput | SortOrder
    _count?: spellsCountOrderByAggregateInput
    _max?: spellsMaxOrderByAggregateInput
    _min?: spellsMinOrderByAggregateInput
  }

  export type spellsScalarWhereWithAggregatesInput = {
    AND?:
      | spellsScalarWhereWithAggregatesInput
      | spellsScalarWhereWithAggregatesInput[]
    OR?: spellsScalarWhereWithAggregatesInput[]
    NOT?:
      | spellsScalarWhereWithAggregatesInput
      | spellsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<'spells'> | string
    name?: StringNullableWithAggregatesFilter<'spells'> | string | null
    projectId?: StringNullableWithAggregatesFilter<'spells'> | string | null
    graph?: JsonNullableWithAggregatesFilter<'spells'>
    createdAt?: StringNullableWithAggregatesFilter<'spells'> | string | null
    updatedAt?: StringNullableWithAggregatesFilter<'spells'> | string | null
    type?: StringNullableWithAggregatesFilter<'spells'> | string | null
    spellReleaseId?: UuidNullableWithAggregatesFilter<'spells'> | string | null
  }

  export type documentsWhereInput = {
    AND?: documentsWhereInput | documentsWhereInput[]
    OR?: documentsWhereInput[]
    NOT?: documentsWhereInput | documentsWhereInput[]
    id?: UuidFilter<'documents'> | string
    type?: StringNullableFilter<'documents'> | string | null
    projectId?: StringNullableFilter<'documents'> | string | null
    date?: StringNullableFilter<'documents'> | string | null
    metadata?: JsonNullableFilter<'documents'>
  }

  export type documentsOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    _relevance?: documentsOrderByRelevanceInput
  }

  export type documentsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: documentsWhereInput | documentsWhereInput[]
      OR?: documentsWhereInput[]
      NOT?: documentsWhereInput | documentsWhereInput[]
      type?: StringNullableFilter<'documents'> | string | null
      projectId?: StringNullableFilter<'documents'> | string | null
      date?: StringNullableFilter<'documents'> | string | null
      metadata?: JsonNullableFilter<'documents'>
    },
    'id'
  >

  export type documentsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: documentsCountOrderByAggregateInput
    _max?: documentsMaxOrderByAggregateInput
    _min?: documentsMinOrderByAggregateInput
  }

  export type documentsScalarWhereWithAggregatesInput = {
    AND?:
      | documentsScalarWhereWithAggregatesInput
      | documentsScalarWhereWithAggregatesInput[]
    OR?: documentsScalarWhereWithAggregatesInput[]
    NOT?:
      | documentsScalarWhereWithAggregatesInput
      | documentsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<'documents'> | string
    type?: StringNullableWithAggregatesFilter<'documents'> | string | null
    projectId?: StringNullableWithAggregatesFilter<'documents'> | string | null
    date?: StringNullableWithAggregatesFilter<'documents'> | string | null
    metadata?: JsonNullableWithAggregatesFilter<'documents'>
  }

  export type customersWhereInput = {
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    id?: StringFilter<'customers'> | string
    object?: StringNullableFilter<'customers'> | string | null
    address?: JsonNullableFilter<'customers'>
    description?: StringNullableFilter<'customers'> | string | null
    email?: StringNullableFilter<'customers'> | string | null
    metadata?: JsonNullableFilter<'customers'>
    name?: StringNullableFilter<'customers'> | string | null
    phone?: StringNullableFilter<'customers'> | string | null
    shipping?: JsonNullableFilter<'customers'>
    balance?: IntNullableFilter<'customers'> | number | null
    created?: IntNullableFilter<'customers'> | number | null
    currency?: StringNullableFilter<'customers'> | string | null
    default_source?: StringNullableFilter<'customers'> | string | null
    delinquent?: BoolNullableFilter<'customers'> | boolean | null
    discount?: JsonNullableFilter<'customers'>
    invoice_prefix?: StringNullableFilter<'customers'> | string | null
    invoice_settings?: JsonNullableFilter<'customers'>
    livemode?: BoolNullableFilter<'customers'> | boolean | null
    next_invoice_sequence?: IntNullableFilter<'customers'> | number | null
    preferred_locales?: JsonNullableFilter<'customers'>
    tax_exempt?: StringNullableFilter<'customers'> | string | null
    updated_at?: DateTimeNullableFilter<'customers'> | Date | string | null
    deleted?: BoolNullableFilter<'customers'> | boolean | null
  }

  export type customersOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    object?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    shipping?: SortOrderInput | SortOrder
    balance?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    default_source?: SortOrderInput | SortOrder
    delinquent?: SortOrderInput | SortOrder
    discount?: SortOrderInput | SortOrder
    invoice_prefix?: SortOrderInput | SortOrder
    invoice_settings?: SortOrderInput | SortOrder
    livemode?: SortOrderInput | SortOrder
    next_invoice_sequence?: SortOrderInput | SortOrder
    preferred_locales?: SortOrderInput | SortOrder
    tax_exempt?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    _relevance?: customersOrderByRelevanceInput
  }

  export type customersWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: customersWhereInput | customersWhereInput[]
      OR?: customersWhereInput[]
      NOT?: customersWhereInput | customersWhereInput[]
      object?: StringNullableFilter<'customers'> | string | null
      address?: JsonNullableFilter<'customers'>
      description?: StringNullableFilter<'customers'> | string | null
      email?: StringNullableFilter<'customers'> | string | null
      metadata?: JsonNullableFilter<'customers'>
      name?: StringNullableFilter<'customers'> | string | null
      phone?: StringNullableFilter<'customers'> | string | null
      shipping?: JsonNullableFilter<'customers'>
      balance?: IntNullableFilter<'customers'> | number | null
      created?: IntNullableFilter<'customers'> | number | null
      currency?: StringNullableFilter<'customers'> | string | null
      default_source?: StringNullableFilter<'customers'> | string | null
      delinquent?: BoolNullableFilter<'customers'> | boolean | null
      discount?: JsonNullableFilter<'customers'>
      invoice_prefix?: StringNullableFilter<'customers'> | string | null
      invoice_settings?: JsonNullableFilter<'customers'>
      livemode?: BoolNullableFilter<'customers'> | boolean | null
      next_invoice_sequence?: IntNullableFilter<'customers'> | number | null
      preferred_locales?: JsonNullableFilter<'customers'>
      tax_exempt?: StringNullableFilter<'customers'> | string | null
      updated_at?: DateTimeNullableFilter<'customers'> | Date | string | null
      deleted?: BoolNullableFilter<'customers'> | boolean | null
    },
    'id' | 'id'
  >

  export type customersOrderByWithAggregationInput = {
    id?: SortOrder
    object?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    shipping?: SortOrderInput | SortOrder
    balance?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    default_source?: SortOrderInput | SortOrder
    delinquent?: SortOrderInput | SortOrder
    discount?: SortOrderInput | SortOrder
    invoice_prefix?: SortOrderInput | SortOrder
    invoice_settings?: SortOrderInput | SortOrder
    livemode?: SortOrderInput | SortOrder
    next_invoice_sequence?: SortOrderInput | SortOrder
    preferred_locales?: SortOrderInput | SortOrder
    tax_exempt?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    _count?: customersCountOrderByAggregateInput
    _avg?: customersAvgOrderByAggregateInput
    _max?: customersMaxOrderByAggregateInput
    _min?: customersMinOrderByAggregateInput
    _sum?: customersSumOrderByAggregateInput
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?:
      | customersScalarWhereWithAggregatesInput
      | customersScalarWhereWithAggregatesInput[]
    OR?: customersScalarWhereWithAggregatesInput[]
    NOT?:
      | customersScalarWhereWithAggregatesInput
      | customersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'customers'> | string
    object?: StringNullableWithAggregatesFilter<'customers'> | string | null
    address?: JsonNullableWithAggregatesFilter<'customers'>
    description?:
      | StringNullableWithAggregatesFilter<'customers'>
      | string
      | null
    email?: StringNullableWithAggregatesFilter<'customers'> | string | null
    metadata?: JsonNullableWithAggregatesFilter<'customers'>
    name?: StringNullableWithAggregatesFilter<'customers'> | string | null
    phone?: StringNullableWithAggregatesFilter<'customers'> | string | null
    shipping?: JsonNullableWithAggregatesFilter<'customers'>
    balance?: IntNullableWithAggregatesFilter<'customers'> | number | null
    created?: IntNullableWithAggregatesFilter<'customers'> | number | null
    currency?: StringNullableWithAggregatesFilter<'customers'> | string | null
    default_source?:
      | StringNullableWithAggregatesFilter<'customers'>
      | string
      | null
    delinquent?: BoolNullableWithAggregatesFilter<'customers'> | boolean | null
    discount?: JsonNullableWithAggregatesFilter<'customers'>
    invoice_prefix?:
      | StringNullableWithAggregatesFilter<'customers'>
      | string
      | null
    invoice_settings?: JsonNullableWithAggregatesFilter<'customers'>
    livemode?: BoolNullableWithAggregatesFilter<'customers'> | boolean | null
    next_invoice_sequence?:
      | IntNullableWithAggregatesFilter<'customers'>
      | number
      | null
    preferred_locales?: JsonNullableWithAggregatesFilter<'customers'>
    tax_exempt?: StringNullableWithAggregatesFilter<'customers'> | string | null
    updated_at?:
      | DateTimeNullableWithAggregatesFilter<'customers'>
      | Date
      | string
      | null
    deleted?: BoolNullableWithAggregatesFilter<'customers'> | boolean | null
  }

  export type subscriptionsWhereInput = {
    AND?: subscriptionsWhereInput | subscriptionsWhereInput[]
    OR?: subscriptionsWhereInput[]
    NOT?: subscriptionsWhereInput | subscriptionsWhereInput[]
    id?: StringFilter<'subscriptions'> | string
    object?: StringNullableFilter<'subscriptions'> | string | null
    cancel_at_period_end?: BoolNullableFilter<'subscriptions'> | boolean | null
    current_period_end?: IntNullableFilter<'subscriptions'> | number | null
    current_period_start?: IntNullableFilter<'subscriptions'> | number | null
    default_payment_method?:
      | StringNullableFilter<'subscriptions'>
      | string
      | null
    items?: JsonNullableFilter<'subscriptions'>
    metadata?: JsonNullableFilter<'subscriptions'>
    pending_setup_intent?: StringNullableFilter<'subscriptions'> | string | null
    pending_update?: JsonNullableFilter<'subscriptions'>
    application_fee_percent?:
      | FloatNullableFilter<'subscriptions'>
      | number
      | null
    billing_cycle_anchor?: IntNullableFilter<'subscriptions'> | number | null
    billing_thresholds?: JsonNullableFilter<'subscriptions'>
    cancel_at?: IntNullableFilter<'subscriptions'> | number | null
    canceled_at?: IntNullableFilter<'subscriptions'> | number | null
    collection_method?: StringNullableFilter<'subscriptions'> | string | null
    created?: IntNullableFilter<'subscriptions'> | number | null
    days_until_due?: IntNullableFilter<'subscriptions'> | number | null
    default_source?: StringNullableFilter<'subscriptions'> | string | null
    default_tax_rates?: JsonNullableFilter<'subscriptions'>
    discount?: JsonNullableFilter<'subscriptions'>
    ended_at?: IntNullableFilter<'subscriptions'> | number | null
    livemode?: BoolNullableFilter<'subscriptions'> | boolean | null
    next_pending_invoice_item_invoice?:
      | IntNullableFilter<'subscriptions'>
      | number
      | null
    pause_collection?: JsonNullableFilter<'subscriptions'>
    pending_invoice_item_interval?: JsonNullableFilter<'subscriptions'>
    start_date?: IntNullableFilter<'subscriptions'> | number | null
    transfer_data?: JsonNullableFilter<'subscriptions'>
    trial_end?: JsonNullableFilter<'subscriptions'>
    trial_start?: JsonNullableFilter<'subscriptions'>
    schedule?: StringNullableFilter<'subscriptions'> | string | null
    customer?: StringNullableFilter<'subscriptions'> | string | null
    latest_invoice?: StringNullableFilter<'subscriptions'> | string | null
    plan?: StringNullableFilter<'subscriptions'> | string | null
    updated_at?: DateTimeNullableFilter<'subscriptions'> | Date | string | null
  }

  export type subscriptionsOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    object?: SortOrderInput | SortOrder
    cancel_at_period_end?: SortOrderInput | SortOrder
    current_period_end?: SortOrderInput | SortOrder
    current_period_start?: SortOrderInput | SortOrder
    default_payment_method?: SortOrderInput | SortOrder
    items?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    pending_setup_intent?: SortOrderInput | SortOrder
    pending_update?: SortOrderInput | SortOrder
    application_fee_percent?: SortOrderInput | SortOrder
    billing_cycle_anchor?: SortOrderInput | SortOrder
    billing_thresholds?: SortOrderInput | SortOrder
    cancel_at?: SortOrderInput | SortOrder
    canceled_at?: SortOrderInput | SortOrder
    collection_method?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    days_until_due?: SortOrderInput | SortOrder
    default_source?: SortOrderInput | SortOrder
    default_tax_rates?: SortOrderInput | SortOrder
    discount?: SortOrderInput | SortOrder
    ended_at?: SortOrderInput | SortOrder
    livemode?: SortOrderInput | SortOrder
    next_pending_invoice_item_invoice?: SortOrderInput | SortOrder
    pause_collection?: SortOrderInput | SortOrder
    pending_invoice_item_interval?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    transfer_data?: SortOrderInput | SortOrder
    trial_end?: SortOrderInput | SortOrder
    trial_start?: SortOrderInput | SortOrder
    schedule?: SortOrderInput | SortOrder
    customer?: SortOrderInput | SortOrder
    latest_invoice?: SortOrderInput | SortOrder
    plan?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _relevance?: subscriptionsOrderByRelevanceInput
  }

  export type subscriptionsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: subscriptionsWhereInput | subscriptionsWhereInput[]
      OR?: subscriptionsWhereInput[]
      NOT?: subscriptionsWhereInput | subscriptionsWhereInput[]
      object?: StringNullableFilter<'subscriptions'> | string | null
      cancel_at_period_end?:
        | BoolNullableFilter<'subscriptions'>
        | boolean
        | null
      current_period_end?: IntNullableFilter<'subscriptions'> | number | null
      current_period_start?: IntNullableFilter<'subscriptions'> | number | null
      default_payment_method?:
        | StringNullableFilter<'subscriptions'>
        | string
        | null
      items?: JsonNullableFilter<'subscriptions'>
      metadata?: JsonNullableFilter<'subscriptions'>
      pending_setup_intent?:
        | StringNullableFilter<'subscriptions'>
        | string
        | null
      pending_update?: JsonNullableFilter<'subscriptions'>
      application_fee_percent?:
        | FloatNullableFilter<'subscriptions'>
        | number
        | null
      billing_cycle_anchor?: IntNullableFilter<'subscriptions'> | number | null
      billing_thresholds?: JsonNullableFilter<'subscriptions'>
      cancel_at?: IntNullableFilter<'subscriptions'> | number | null
      canceled_at?: IntNullableFilter<'subscriptions'> | number | null
      collection_method?: StringNullableFilter<'subscriptions'> | string | null
      created?: IntNullableFilter<'subscriptions'> | number | null
      days_until_due?: IntNullableFilter<'subscriptions'> | number | null
      default_source?: StringNullableFilter<'subscriptions'> | string | null
      default_tax_rates?: JsonNullableFilter<'subscriptions'>
      discount?: JsonNullableFilter<'subscriptions'>
      ended_at?: IntNullableFilter<'subscriptions'> | number | null
      livemode?: BoolNullableFilter<'subscriptions'> | boolean | null
      next_pending_invoice_item_invoice?:
        | IntNullableFilter<'subscriptions'>
        | number
        | null
      pause_collection?: JsonNullableFilter<'subscriptions'>
      pending_invoice_item_interval?: JsonNullableFilter<'subscriptions'>
      start_date?: IntNullableFilter<'subscriptions'> | number | null
      transfer_data?: JsonNullableFilter<'subscriptions'>
      trial_end?: JsonNullableFilter<'subscriptions'>
      trial_start?: JsonNullableFilter<'subscriptions'>
      schedule?: StringNullableFilter<'subscriptions'> | string | null
      customer?: StringNullableFilter<'subscriptions'> | string | null
      latest_invoice?: StringNullableFilter<'subscriptions'> | string | null
      plan?: StringNullableFilter<'subscriptions'> | string | null
      updated_at?:
        | DateTimeNullableFilter<'subscriptions'>
        | Date
        | string
        | null
    },
    'id' | 'id'
  >

  export type subscriptionsOrderByWithAggregationInput = {
    id?: SortOrder
    object?: SortOrderInput | SortOrder
    cancel_at_period_end?: SortOrderInput | SortOrder
    current_period_end?: SortOrderInput | SortOrder
    current_period_start?: SortOrderInput | SortOrder
    default_payment_method?: SortOrderInput | SortOrder
    items?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    pending_setup_intent?: SortOrderInput | SortOrder
    pending_update?: SortOrderInput | SortOrder
    application_fee_percent?: SortOrderInput | SortOrder
    billing_cycle_anchor?: SortOrderInput | SortOrder
    billing_thresholds?: SortOrderInput | SortOrder
    cancel_at?: SortOrderInput | SortOrder
    canceled_at?: SortOrderInput | SortOrder
    collection_method?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    days_until_due?: SortOrderInput | SortOrder
    default_source?: SortOrderInput | SortOrder
    default_tax_rates?: SortOrderInput | SortOrder
    discount?: SortOrderInput | SortOrder
    ended_at?: SortOrderInput | SortOrder
    livemode?: SortOrderInput | SortOrder
    next_pending_invoice_item_invoice?: SortOrderInput | SortOrder
    pause_collection?: SortOrderInput | SortOrder
    pending_invoice_item_interval?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    transfer_data?: SortOrderInput | SortOrder
    trial_end?: SortOrderInput | SortOrder
    trial_start?: SortOrderInput | SortOrder
    schedule?: SortOrderInput | SortOrder
    customer?: SortOrderInput | SortOrder
    latest_invoice?: SortOrderInput | SortOrder
    plan?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: subscriptionsCountOrderByAggregateInput
    _avg?: subscriptionsAvgOrderByAggregateInput
    _max?: subscriptionsMaxOrderByAggregateInput
    _min?: subscriptionsMinOrderByAggregateInput
    _sum?: subscriptionsSumOrderByAggregateInput
  }

  export type subscriptionsScalarWhereWithAggregatesInput = {
    AND?:
      | subscriptionsScalarWhereWithAggregatesInput
      | subscriptionsScalarWhereWithAggregatesInput[]
    OR?: subscriptionsScalarWhereWithAggregatesInput[]
    NOT?:
      | subscriptionsScalarWhereWithAggregatesInput
      | subscriptionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'subscriptions'> | string
    object?: StringNullableWithAggregatesFilter<'subscriptions'> | string | null
    cancel_at_period_end?:
      | BoolNullableWithAggregatesFilter<'subscriptions'>
      | boolean
      | null
    current_period_end?:
      | IntNullableWithAggregatesFilter<'subscriptions'>
      | number
      | null
    current_period_start?:
      | IntNullableWithAggregatesFilter<'subscriptions'>
      | number
      | null
    default_payment_method?:
      | StringNullableWithAggregatesFilter<'subscriptions'>
      | string
      | null
    items?: JsonNullableWithAggregatesFilter<'subscriptions'>
    metadata?: JsonNullableWithAggregatesFilter<'subscriptions'>
    pending_setup_intent?:
      | StringNullableWithAggregatesFilter<'subscriptions'>
      | string
      | null
    pending_update?: JsonNullableWithAggregatesFilter<'subscriptions'>
    application_fee_percent?:
      | FloatNullableWithAggregatesFilter<'subscriptions'>
      | number
      | null
    billing_cycle_anchor?:
      | IntNullableWithAggregatesFilter<'subscriptions'>
      | number
      | null
    billing_thresholds?: JsonNullableWithAggregatesFilter<'subscriptions'>
    cancel_at?: IntNullableWithAggregatesFilter<'subscriptions'> | number | null
    canceled_at?:
      | IntNullableWithAggregatesFilter<'subscriptions'>
      | number
      | null
    collection_method?:
      | StringNullableWithAggregatesFilter<'subscriptions'>
      | string
      | null
    created?: IntNullableWithAggregatesFilter<'subscriptions'> | number | null
    days_until_due?:
      | IntNullableWithAggregatesFilter<'subscriptions'>
      | number
      | null
    default_source?:
      | StringNullableWithAggregatesFilter<'subscriptions'>
      | string
      | null
    default_tax_rates?: JsonNullableWithAggregatesFilter<'subscriptions'>
    discount?: JsonNullableWithAggregatesFilter<'subscriptions'>
    ended_at?: IntNullableWithAggregatesFilter<'subscriptions'> | number | null
    livemode?:
      | BoolNullableWithAggregatesFilter<'subscriptions'>
      | boolean
      | null
    next_pending_invoice_item_invoice?:
      | IntNullableWithAggregatesFilter<'subscriptions'>
      | number
      | null
    pause_collection?: JsonNullableWithAggregatesFilter<'subscriptions'>
    pending_invoice_item_interval?: JsonNullableWithAggregatesFilter<'subscriptions'>
    start_date?:
      | IntNullableWithAggregatesFilter<'subscriptions'>
      | number
      | null
    transfer_data?: JsonNullableWithAggregatesFilter<'subscriptions'>
    trial_end?: JsonNullableWithAggregatesFilter<'subscriptions'>
    trial_start?: JsonNullableWithAggregatesFilter<'subscriptions'>
    schedule?:
      | StringNullableWithAggregatesFilter<'subscriptions'>
      | string
      | null
    customer?:
      | StringNullableWithAggregatesFilter<'subscriptions'>
      | string
      | null
    latest_invoice?:
      | StringNullableWithAggregatesFilter<'subscriptions'>
      | string
      | null
    plan?: StringNullableWithAggregatesFilter<'subscriptions'> | string | null
    updated_at?:
      | DateTimeNullableWithAggregatesFilter<'subscriptions'>
      | Date
      | string
      | null
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: StringFilter<'products'> | string
    object?: StringNullableFilter<'products'> | string | null
    active?: BoolNullableFilter<'products'> | boolean | null
    description?: StringNullableFilter<'products'> | string | null
    metadata?: JsonNullableFilter<'products'>
    name?: StringNullableFilter<'products'> | string | null
    created?: IntNullableFilter<'products'> | number | null
    images?: JsonNullableFilter<'products'>
    livemode?: BoolNullableFilter<'products'> | boolean | null
    package_dimensions?: JsonNullableFilter<'products'>
    shippable?: BoolNullableFilter<'products'> | boolean | null
    statement_descriptor?: StringNullableFilter<'products'> | string | null
    unit_label?: StringNullableFilter<'products'> | string | null
    updated?: IntNullableFilter<'products'> | number | null
    url?: StringNullableFilter<'products'> | string | null
    updated_at?: DateTimeNullableFilter<'products'> | Date | string | null
  }

  export type productsOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    object?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    livemode?: SortOrderInput | SortOrder
    package_dimensions?: SortOrderInput | SortOrder
    shippable?: SortOrderInput | SortOrder
    statement_descriptor?: SortOrderInput | SortOrder
    unit_label?: SortOrderInput | SortOrder
    updated?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _relevance?: productsOrderByRelevanceInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: productsWhereInput | productsWhereInput[]
      OR?: productsWhereInput[]
      NOT?: productsWhereInput | productsWhereInput[]
      object?: StringNullableFilter<'products'> | string | null
      active?: BoolNullableFilter<'products'> | boolean | null
      description?: StringNullableFilter<'products'> | string | null
      metadata?: JsonNullableFilter<'products'>
      name?: StringNullableFilter<'products'> | string | null
      created?: IntNullableFilter<'products'> | number | null
      images?: JsonNullableFilter<'products'>
      livemode?: BoolNullableFilter<'products'> | boolean | null
      package_dimensions?: JsonNullableFilter<'products'>
      shippable?: BoolNullableFilter<'products'> | boolean | null
      statement_descriptor?: StringNullableFilter<'products'> | string | null
      unit_label?: StringNullableFilter<'products'> | string | null
      updated?: IntNullableFilter<'products'> | number | null
      url?: StringNullableFilter<'products'> | string | null
      updated_at?: DateTimeNullableFilter<'products'> | Date | string | null
    },
    'id' | 'id'
  >

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    object?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    livemode?: SortOrderInput | SortOrder
    package_dimensions?: SortOrderInput | SortOrder
    shippable?: SortOrderInput | SortOrder
    statement_descriptor?: SortOrderInput | SortOrder
    unit_label?: SortOrderInput | SortOrder
    updated?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?:
      | productsScalarWhereWithAggregatesInput
      | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?:
      | productsScalarWhereWithAggregatesInput
      | productsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'products'> | string
    object?: StringNullableWithAggregatesFilter<'products'> | string | null
    active?: BoolNullableWithAggregatesFilter<'products'> | boolean | null
    description?: StringNullableWithAggregatesFilter<'products'> | string | null
    metadata?: JsonNullableWithAggregatesFilter<'products'>
    name?: StringNullableWithAggregatesFilter<'products'> | string | null
    created?: IntNullableWithAggregatesFilter<'products'> | number | null
    images?: JsonNullableWithAggregatesFilter<'products'>
    livemode?: BoolNullableWithAggregatesFilter<'products'> | boolean | null
    package_dimensions?: JsonNullableWithAggregatesFilter<'products'>
    shippable?: BoolNullableWithAggregatesFilter<'products'> | boolean | null
    statement_descriptor?:
      | StringNullableWithAggregatesFilter<'products'>
      | string
      | null
    unit_label?: StringNullableWithAggregatesFilter<'products'> | string | null
    updated?: IntNullableWithAggregatesFilter<'products'> | number | null
    url?: StringNullableWithAggregatesFilter<'products'> | string | null
    updated_at?:
      | DateTimeNullableWithAggregatesFilter<'products'>
      | Date
      | string
      | null
  }

  export type pricesWhereInput = {
    AND?: pricesWhereInput | pricesWhereInput[]
    OR?: pricesWhereInput[]
    NOT?: pricesWhereInput | pricesWhereInput[]
    id?: StringFilter<'prices'> | string
    object?: StringNullableFilter<'prices'> | string | null
    active?: BoolNullableFilter<'prices'> | boolean | null
    currency?: StringNullableFilter<'prices'> | string | null
    metadata?: JsonNullableFilter<'prices'>
    nickname?: StringNullableFilter<'prices'> | string | null
    recurring?: JsonNullableFilter<'prices'>
    unit_amount?: IntNullableFilter<'prices'> | number | null
    billing_scheme?: StringNullableFilter<'prices'> | string | null
    created?: IntNullableFilter<'prices'> | number | null
    livemode?: BoolNullableFilter<'prices'> | boolean | null
    lookup_key?: StringNullableFilter<'prices'> | string | null
    transform_quantity?: JsonNullableFilter<'prices'>
    unit_amount_decimal?: StringNullableFilter<'prices'> | string | null
    product?: StringNullableFilter<'prices'> | string | null
    updated_at?: DateTimeNullableFilter<'prices'> | Date | string | null
  }

  export type pricesOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    object?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    recurring?: SortOrderInput | SortOrder
    unit_amount?: SortOrderInput | SortOrder
    billing_scheme?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    livemode?: SortOrderInput | SortOrder
    lookup_key?: SortOrderInput | SortOrder
    transform_quantity?: SortOrderInput | SortOrder
    unit_amount_decimal?: SortOrderInput | SortOrder
    product?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _relevance?: pricesOrderByRelevanceInput
  }

  export type pricesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: pricesWhereInput | pricesWhereInput[]
      OR?: pricesWhereInput[]
      NOT?: pricesWhereInput | pricesWhereInput[]
      object?: StringNullableFilter<'prices'> | string | null
      active?: BoolNullableFilter<'prices'> | boolean | null
      currency?: StringNullableFilter<'prices'> | string | null
      metadata?: JsonNullableFilter<'prices'>
      nickname?: StringNullableFilter<'prices'> | string | null
      recurring?: JsonNullableFilter<'prices'>
      unit_amount?: IntNullableFilter<'prices'> | number | null
      billing_scheme?: StringNullableFilter<'prices'> | string | null
      created?: IntNullableFilter<'prices'> | number | null
      livemode?: BoolNullableFilter<'prices'> | boolean | null
      lookup_key?: StringNullableFilter<'prices'> | string | null
      transform_quantity?: JsonNullableFilter<'prices'>
      unit_amount_decimal?: StringNullableFilter<'prices'> | string | null
      product?: StringNullableFilter<'prices'> | string | null
      updated_at?: DateTimeNullableFilter<'prices'> | Date | string | null
    },
    'id' | 'id'
  >

  export type pricesOrderByWithAggregationInput = {
    id?: SortOrder
    object?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    recurring?: SortOrderInput | SortOrder
    unit_amount?: SortOrderInput | SortOrder
    billing_scheme?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    livemode?: SortOrderInput | SortOrder
    lookup_key?: SortOrderInput | SortOrder
    transform_quantity?: SortOrderInput | SortOrder
    unit_amount_decimal?: SortOrderInput | SortOrder
    product?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: pricesCountOrderByAggregateInput
    _avg?: pricesAvgOrderByAggregateInput
    _max?: pricesMaxOrderByAggregateInput
    _min?: pricesMinOrderByAggregateInput
    _sum?: pricesSumOrderByAggregateInput
  }

  export type pricesScalarWhereWithAggregatesInput = {
    AND?:
      | pricesScalarWhereWithAggregatesInput
      | pricesScalarWhereWithAggregatesInput[]
    OR?: pricesScalarWhereWithAggregatesInput[]
    NOT?:
      | pricesScalarWhereWithAggregatesInput
      | pricesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'prices'> | string
    object?: StringNullableWithAggregatesFilter<'prices'> | string | null
    active?: BoolNullableWithAggregatesFilter<'prices'> | boolean | null
    currency?: StringNullableWithAggregatesFilter<'prices'> | string | null
    metadata?: JsonNullableWithAggregatesFilter<'prices'>
    nickname?: StringNullableWithAggregatesFilter<'prices'> | string | null
    recurring?: JsonNullableWithAggregatesFilter<'prices'>
    unit_amount?: IntNullableWithAggregatesFilter<'prices'> | number | null
    billing_scheme?:
      | StringNullableWithAggregatesFilter<'prices'>
      | string
      | null
    created?: IntNullableWithAggregatesFilter<'prices'> | number | null
    livemode?: BoolNullableWithAggregatesFilter<'prices'> | boolean | null
    lookup_key?: StringNullableWithAggregatesFilter<'prices'> | string | null
    transform_quantity?: JsonNullableWithAggregatesFilter<'prices'>
    unit_amount_decimal?:
      | StringNullableWithAggregatesFilter<'prices'>
      | string
      | null
    product?: StringNullableWithAggregatesFilter<'prices'> | string | null
    updated_at?:
      | DateTimeNullableWithAggregatesFilter<'prices'>
      | Date
      | string
      | null
  }

  export type ProjectCreateInput = {
    id?: string
    owner: string
    name: string
    description?: string | null
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    image?: string | null
    lastActive?: Date | string | null
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    owner: string
    name: string
    description?: string | null
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    image?: string | null
    lastActive?: Date | string | null
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type ProjectCreateManyInput = {
    id?: string
    owner: string
    name: string
    description?: string | null
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    image?: string | null
    lastActive?: Date | string | null
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type TemplateCreateInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    spells?: TemplateCreatespellsInput | string[]
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type TemplateUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    spells?: TemplateCreatespellsInput | string[]
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    spells?: TemplateUpdatespellsInput | string[]
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    spells?: TemplateUpdatespellsInput | string[]
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type TemplateCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    spells?: TemplateCreatespellsInput | string[]
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    spells?: TemplateUpdatespellsInput | string[]
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    spells?: TemplateUpdatespellsInput | string[]
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type PublicAgentCreateInput = {
    id?: string
    agentId: string
    userId: string
    madePublic?: Date | string
    deletedAt?: Date | string | null
    description?: string
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
    comments?: CommentsCreateNestedManyWithoutPublicAgentInput
    likes?: LikesCreateNestedManyWithoutPublicAgentInput
    Reports?: ReportsCreateNestedManyWithoutPublicAgentInput
  }

  export type PublicAgentUncheckedCreateInput = {
    id?: string
    agentId: string
    userId: string
    madePublic?: Date | string
    deletedAt?: Date | string | null
    description?: string
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
    comments?: CommentsUncheckedCreateNestedManyWithoutPublicAgentInput
    likes?: LikesUncheckedCreateNestedManyWithoutPublicAgentInput
    Reports?: ReportsUncheckedCreateNestedManyWithoutPublicAgentInput
  }

  export type PublicAgentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentsUpdateManyWithoutPublicAgentNestedInput
    likes?: LikesUpdateManyWithoutPublicAgentNestedInput
    Reports?: ReportsUpdateManyWithoutPublicAgentNestedInput
  }

  export type PublicAgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentsUncheckedUpdateManyWithoutPublicAgentNestedInput
    likes?: LikesUncheckedUpdateManyWithoutPublicAgentNestedInput
    Reports?: ReportsUncheckedUpdateManyWithoutPublicAgentNestedInput
  }

  export type PublicAgentCreateManyInput = {
    id?: string
    agentId: string
    userId: string
    madePublic?: Date | string
    deletedAt?: Date | string | null
    description?: string
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
  }

  export type PublicAgentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PublicAgentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReportsCreateInput = {
    id?: string
    createdAt?: Date | string
    message: string
    publicAgent: PublicAgentCreateNestedOneWithoutReportsInput
  }

  export type ReportsUncheckedCreateInput = {
    id?: string
    publicAgentId: string
    createdAt?: Date | string
    message: string
  }

  export type ReportsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    publicAgent?: PublicAgentUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicAgentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ReportsCreateManyInput = {
    id?: string
    publicAgentId: string
    createdAt?: Date | string
    message: string
  }

  export type ReportsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ReportsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicAgentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type LikesCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    publicAgent: PublicAgentCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateInput = {
    id?: string
    userId: string
    publicAgentId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type LikesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    publicAgent?: PublicAgentUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    publicAgentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type LikesCreateManyInput = {
    id?: string
    userId: string
    publicAgentId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type LikesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type LikesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    publicAgentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type CommentsCreateInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    publicAgent: PublicAgentCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: string
    userId: string
    publicAgentId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CommentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    publicAgent?: PublicAgentUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    publicAgentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type CommentsCreateManyInput = {
    id?: string
    userId: string
    publicAgentId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CommentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    publicAgentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type AnonymousUserCreateInput = {
    id?: string
    createdAt?: Date | string
    anonymousId: string
    fingerprint: string
    lastAccessed?: Date | string | null
  }

  export type AnonymousUserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    anonymousId: string
    fingerprint: string
    lastAccessed?: Date | string | null
  }

  export type AnonymousUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    fingerprint?: StringFieldUpdateOperationsInput | string
    lastAccessed?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type AnonymousUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    fingerprint?: StringFieldUpdateOperationsInput | string
    lastAccessed?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type AnonymousUserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    anonymousId: string
    fingerprint: string
    lastAccessed?: Date | string | null
  }

  export type AnonymousUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    fingerprint?: StringFieldUpdateOperationsInput | string
    lastAccessed?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type AnonymousUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    fingerprint?: StringFieldUpdateOperationsInput | string
    lastAccessed?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type BudgetCreateInput = {
    id?: string
    userId: string
    balance?: Decimal | DecimalJsLike | number | string
    currentCost?: Decimal | DecimalJsLike | number | string | null
    modelCost?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BudgetUncheckedCreateInput = {
    id?: string
    userId: string
    balance?: Decimal | DecimalJsLike | number | string
    currentCost?: Decimal | DecimalJsLike | number | string | null
    modelCost?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BudgetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currentCost?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    modelCost?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type BudgetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currentCost?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    modelCost?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type BudgetCreateManyInput = {
    id?: string
    userId: string
    balance?: Decimal | DecimalJsLike | number | string
    currentCost?: Decimal | DecimalJsLike | number | string | null
    modelCost?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BudgetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currentCost?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    modelCost?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type BudgetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    currentCost?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    modelCost?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type PromotionCreateInput = {
    id?: string
    name: string
    userId: string
    type: $Enums.PromotionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    validFrom: Date | string
    validUntil: Date | string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PromotionUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    type: $Enums.PromotionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    validFrom: Date | string
    validUntil: Date | string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PromotionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type PromotionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type PromotionCreateManyInput = {
    id?: string
    name: string
    userId: string
    type: $Enums.PromotionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    validFrom: Date | string
    validUntil: Date | string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PromotionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type PromotionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type agentsCreateInput = {
    id: string
    rootSpell?: NullableJsonNullValueInput | InputJsonValue
    publicVariables?: string | null
    secrets?: string | null
    name?: string | null
    enabled?: boolean | null
    updatedAt?: string | null
    pingedAt?: string | null
    projectId?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    runState?: string | null
    image?: string | null
    rootSpellId?: string | null
    default?: boolean | null
    createdAt?: Date | string | null
    currentSpellReleaseId?: string | null
    embedModel?: string | null
    version?: string | null
    embeddingProvider?: string | null
    embeddingModel?: string | null
    publicAgentId?: string | null
    description?: string | null
    remixable?: boolean | null
    featured?: boolean | null
    isTemplate?: boolean | null
    isPublic?: boolean | null
    creatorId?: string | null
    creatorName?: string | null
    creatorImage?: string | null
    likesCount?: number | null
    commentsCount?: bigint | number | null
    isDraft?: boolean | null
    draftAgentId?: string | null
  }

  export type agentsUncheckedCreateInput = {
    id: string
    rootSpell?: NullableJsonNullValueInput | InputJsonValue
    publicVariables?: string | null
    secrets?: string | null
    name?: string | null
    enabled?: boolean | null
    updatedAt?: string | null
    pingedAt?: string | null
    projectId?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    runState?: string | null
    image?: string | null
    rootSpellId?: string | null
    default?: boolean | null
    createdAt?: Date | string | null
    currentSpellReleaseId?: string | null
    embedModel?: string | null
    version?: string | null
    embeddingProvider?: string | null
    embeddingModel?: string | null
    publicAgentId?: string | null
    description?: string | null
    remixable?: boolean | null
    featured?: boolean | null
    isTemplate?: boolean | null
    isPublic?: boolean | null
    creatorId?: string | null
    creatorName?: string | null
    creatorImage?: string | null
    likesCount?: number | null
    commentsCount?: bigint | number | null
    isDraft?: boolean | null
    draftAgentId?: string | null
  }

  export type agentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rootSpell?: NullableJsonNullValueInput | InputJsonValue
    publicVariables?: NullableStringFieldUpdateOperationsInput | string | null
    secrets?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    pingedAt?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    runState?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rootSpellId?: NullableStringFieldUpdateOperationsInput | string | null
    default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    currentSpellReleaseId?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    embedModel?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    embeddingProvider?: NullableStringFieldUpdateOperationsInput | string | null
    embeddingModel?: NullableStringFieldUpdateOperationsInput | string | null
    publicAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    remixable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTemplate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?:
      | NullableBigIntFieldUpdateOperationsInput
      | bigint
      | number
      | null
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    draftAgentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rootSpell?: NullableJsonNullValueInput | InputJsonValue
    publicVariables?: NullableStringFieldUpdateOperationsInput | string | null
    secrets?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    pingedAt?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    runState?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rootSpellId?: NullableStringFieldUpdateOperationsInput | string | null
    default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    currentSpellReleaseId?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    embedModel?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    embeddingProvider?: NullableStringFieldUpdateOperationsInput | string | null
    embeddingModel?: NullableStringFieldUpdateOperationsInput | string | null
    publicAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    remixable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTemplate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?:
      | NullableBigIntFieldUpdateOperationsInput
      | bigint
      | number
      | null
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    draftAgentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agentsCreateManyInput = {
    id: string
    rootSpell?: NullableJsonNullValueInput | InputJsonValue
    publicVariables?: string | null
    secrets?: string | null
    name?: string | null
    enabled?: boolean | null
    updatedAt?: string | null
    pingedAt?: string | null
    projectId?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    runState?: string | null
    image?: string | null
    rootSpellId?: string | null
    default?: boolean | null
    createdAt?: Date | string | null
    currentSpellReleaseId?: string | null
    embedModel?: string | null
    version?: string | null
    embeddingProvider?: string | null
    embeddingModel?: string | null
    publicAgentId?: string | null
    description?: string | null
    remixable?: boolean | null
    featured?: boolean | null
    isTemplate?: boolean | null
    isPublic?: boolean | null
    creatorId?: string | null
    creatorName?: string | null
    creatorImage?: string | null
    likesCount?: number | null
    commentsCount?: bigint | number | null
    isDraft?: boolean | null
    draftAgentId?: string | null
  }

  export type agentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rootSpell?: NullableJsonNullValueInput | InputJsonValue
    publicVariables?: NullableStringFieldUpdateOperationsInput | string | null
    secrets?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    pingedAt?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    runState?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rootSpellId?: NullableStringFieldUpdateOperationsInput | string | null
    default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    currentSpellReleaseId?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    embedModel?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    embeddingProvider?: NullableStringFieldUpdateOperationsInput | string | null
    embeddingModel?: NullableStringFieldUpdateOperationsInput | string | null
    publicAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    remixable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTemplate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?:
      | NullableBigIntFieldUpdateOperationsInput
      | bigint
      | number
      | null
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    draftAgentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rootSpell?: NullableJsonNullValueInput | InputJsonValue
    publicVariables?: NullableStringFieldUpdateOperationsInput | string | null
    secrets?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    pingedAt?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    runState?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    rootSpellId?: NullableStringFieldUpdateOperationsInput | string | null
    default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    currentSpellReleaseId?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    embedModel?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    embeddingProvider?: NullableStringFieldUpdateOperationsInput | string | null
    embeddingModel?: NullableStringFieldUpdateOperationsInput | string | null
    publicAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    remixable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isTemplate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    creatorImage?: NullableStringFieldUpdateOperationsInput | string | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?:
      | NullableBigIntFieldUpdateOperationsInput
      | bigint
      | number
      | null
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    draftAgentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spellsCreateInput = {
    id: string
    name?: string | null
    projectId?: string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: string | null
    updatedAt?: string | null
    type?: string | null
    spellReleaseId?: string | null
  }

  export type spellsUncheckedCreateInput = {
    id: string
    name?: string | null
    projectId?: string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: string | null
    updatedAt?: string | null
    type?: string | null
    spellReleaseId?: string | null
  }

  export type spellsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    spellReleaseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spellsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    spellReleaseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spellsCreateManyInput = {
    id: string
    name?: string | null
    projectId?: string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: string | null
    updatedAt?: string | null
    type?: string | null
    spellReleaseId?: string | null
  }

  export type spellsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    spellReleaseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spellsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    spellReleaseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type documentsCreateInput = {
    id: string
    type?: string | null
    projectId?: string | null
    date?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type documentsUncheckedCreateInput = {
    id: string
    type?: string | null
    projectId?: string | null
    date?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type documentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type documentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type documentsCreateManyInput = {
    id: string
    type?: string | null
    projectId?: string | null
    date?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type documentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type documentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type customersCreateInput = {
    id: string
    object?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    email?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: string | null
    phone?: string | null
    shipping?: NullableJsonNullValueInput | InputJsonValue
    balance?: number | null
    created?: number | null
    currency?: string | null
    default_source?: string | null
    delinquent?: boolean | null
    discount?: NullableJsonNullValueInput | InputJsonValue
    invoice_prefix?: string | null
    invoice_settings?: NullableJsonNullValueInput | InputJsonValue
    livemode?: boolean | null
    next_invoice_sequence?: number | null
    preferred_locales?: NullableJsonNullValueInput | InputJsonValue
    tax_exempt?: string | null
    updated_at?: Date | string | null
    deleted?: boolean | null
  }

  export type customersUncheckedCreateInput = {
    id: string
    object?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    email?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: string | null
    phone?: string | null
    shipping?: NullableJsonNullValueInput | InputJsonValue
    balance?: number | null
    created?: number | null
    currency?: string | null
    default_source?: string | null
    delinquent?: boolean | null
    discount?: NullableJsonNullValueInput | InputJsonValue
    invoice_prefix?: string | null
    invoice_settings?: NullableJsonNullValueInput | InputJsonValue
    livemode?: boolean | null
    next_invoice_sequence?: number | null
    preferred_locales?: NullableJsonNullValueInput | InputJsonValue
    tax_exempt?: string | null
    updated_at?: Date | string | null
    deleted?: boolean | null
  }

  export type customersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    object?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    shipping?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    created?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    default_source?: NullableStringFieldUpdateOperationsInput | string | null
    delinquent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount?: NullableJsonNullValueInput | InputJsonValue
    invoice_prefix?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_settings?: NullableJsonNullValueInput | InputJsonValue
    livemode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    next_invoice_sequence?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null
    preferred_locales?: NullableJsonNullValueInput | InputJsonValue
    tax_exempt?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type customersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    object?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    shipping?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    created?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    default_source?: NullableStringFieldUpdateOperationsInput | string | null
    delinquent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount?: NullableJsonNullValueInput | InputJsonValue
    invoice_prefix?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_settings?: NullableJsonNullValueInput | InputJsonValue
    livemode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    next_invoice_sequence?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null
    preferred_locales?: NullableJsonNullValueInput | InputJsonValue
    tax_exempt?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type customersCreateManyInput = {
    id: string
    object?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    email?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: string | null
    phone?: string | null
    shipping?: NullableJsonNullValueInput | InputJsonValue
    balance?: number | null
    created?: number | null
    currency?: string | null
    default_source?: string | null
    delinquent?: boolean | null
    discount?: NullableJsonNullValueInput | InputJsonValue
    invoice_prefix?: string | null
    invoice_settings?: NullableJsonNullValueInput | InputJsonValue
    livemode?: boolean | null
    next_invoice_sequence?: number | null
    preferred_locales?: NullableJsonNullValueInput | InputJsonValue
    tax_exempt?: string | null
    updated_at?: Date | string | null
    deleted?: boolean | null
  }

  export type customersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    object?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    shipping?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    created?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    default_source?: NullableStringFieldUpdateOperationsInput | string | null
    delinquent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount?: NullableJsonNullValueInput | InputJsonValue
    invoice_prefix?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_settings?: NullableJsonNullValueInput | InputJsonValue
    livemode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    next_invoice_sequence?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null
    preferred_locales?: NullableJsonNullValueInput | InputJsonValue
    tax_exempt?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type customersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    object?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    shipping?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    created?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    default_source?: NullableStringFieldUpdateOperationsInput | string | null
    delinquent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount?: NullableJsonNullValueInput | InputJsonValue
    invoice_prefix?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_settings?: NullableJsonNullValueInput | InputJsonValue
    livemode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    next_invoice_sequence?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null
    preferred_locales?: NullableJsonNullValueInput | InputJsonValue
    tax_exempt?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type subscriptionsCreateInput = {
    id: string
    object?: string | null
    cancel_at_period_end?: boolean | null
    current_period_end?: number | null
    current_period_start?: number | null
    default_payment_method?: string | null
    items?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    pending_setup_intent?: string | null
    pending_update?: NullableJsonNullValueInput | InputJsonValue
    application_fee_percent?: number | null
    billing_cycle_anchor?: number | null
    billing_thresholds?: NullableJsonNullValueInput | InputJsonValue
    cancel_at?: number | null
    canceled_at?: number | null
    collection_method?: string | null
    created?: number | null
    days_until_due?: number | null
    default_source?: string | null
    default_tax_rates?: NullableJsonNullValueInput | InputJsonValue
    discount?: NullableJsonNullValueInput | InputJsonValue
    ended_at?: number | null
    livemode?: boolean | null
    next_pending_invoice_item_invoice?: number | null
    pause_collection?: NullableJsonNullValueInput | InputJsonValue
    pending_invoice_item_interval?: NullableJsonNullValueInput | InputJsonValue
    start_date?: number | null
    transfer_data?: NullableJsonNullValueInput | InputJsonValue
    trial_end?: NullableJsonNullValueInput | InputJsonValue
    trial_start?: NullableJsonNullValueInput | InputJsonValue
    schedule?: string | null
    customer?: string | null
    latest_invoice?: string | null
    plan?: string | null
    updated_at?: Date | string | null
  }

  export type subscriptionsUncheckedCreateInput = {
    id: string
    object?: string | null
    cancel_at_period_end?: boolean | null
    current_period_end?: number | null
    current_period_start?: number | null
    default_payment_method?: string | null
    items?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    pending_setup_intent?: string | null
    pending_update?: NullableJsonNullValueInput | InputJsonValue
    application_fee_percent?: number | null
    billing_cycle_anchor?: number | null
    billing_thresholds?: NullableJsonNullValueInput | InputJsonValue
    cancel_at?: number | null
    canceled_at?: number | null
    collection_method?: string | null
    created?: number | null
    days_until_due?: number | null
    default_source?: string | null
    default_tax_rates?: NullableJsonNullValueInput | InputJsonValue
    discount?: NullableJsonNullValueInput | InputJsonValue
    ended_at?: number | null
    livemode?: boolean | null
    next_pending_invoice_item_invoice?: number | null
    pause_collection?: NullableJsonNullValueInput | InputJsonValue
    pending_invoice_item_interval?: NullableJsonNullValueInput | InputJsonValue
    start_date?: number | null
    transfer_data?: NullableJsonNullValueInput | InputJsonValue
    trial_end?: NullableJsonNullValueInput | InputJsonValue
    trial_start?: NullableJsonNullValueInput | InputJsonValue
    schedule?: string | null
    customer?: string | null
    latest_invoice?: string | null
    plan?: string | null
    updated_at?: Date | string | null
  }

  export type subscriptionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    object?: NullableStringFieldUpdateOperationsInput | string | null
    cancel_at_period_end?:
      | NullableBoolFieldUpdateOperationsInput
      | boolean
      | null
    current_period_end?: NullableIntFieldUpdateOperationsInput | number | null
    current_period_start?: NullableIntFieldUpdateOperationsInput | number | null
    default_payment_method?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    items?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    pending_setup_intent?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    pending_update?: NullableJsonNullValueInput | InputJsonValue
    application_fee_percent?:
      | NullableFloatFieldUpdateOperationsInput
      | number
      | null
    billing_cycle_anchor?: NullableIntFieldUpdateOperationsInput | number | null
    billing_thresholds?: NullableJsonNullValueInput | InputJsonValue
    cancel_at?: NullableIntFieldUpdateOperationsInput | number | null
    canceled_at?: NullableIntFieldUpdateOperationsInput | number | null
    collection_method?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableIntFieldUpdateOperationsInput | number | null
    days_until_due?: NullableIntFieldUpdateOperationsInput | number | null
    default_source?: NullableStringFieldUpdateOperationsInput | string | null
    default_tax_rates?: NullableJsonNullValueInput | InputJsonValue
    discount?: NullableJsonNullValueInput | InputJsonValue
    ended_at?: NullableIntFieldUpdateOperationsInput | number | null
    livemode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    next_pending_invoice_item_invoice?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null
    pause_collection?: NullableJsonNullValueInput | InputJsonValue
    pending_invoice_item_interval?: NullableJsonNullValueInput | InputJsonValue
    start_date?: NullableIntFieldUpdateOperationsInput | number | null
    transfer_data?: NullableJsonNullValueInput | InputJsonValue
    trial_end?: NullableJsonNullValueInput | InputJsonValue
    trial_start?: NullableJsonNullValueInput | InputJsonValue
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: NullableStringFieldUpdateOperationsInput | string | null
    latest_invoice?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type subscriptionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    object?: NullableStringFieldUpdateOperationsInput | string | null
    cancel_at_period_end?:
      | NullableBoolFieldUpdateOperationsInput
      | boolean
      | null
    current_period_end?: NullableIntFieldUpdateOperationsInput | number | null
    current_period_start?: NullableIntFieldUpdateOperationsInput | number | null
    default_payment_method?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    items?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    pending_setup_intent?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    pending_update?: NullableJsonNullValueInput | InputJsonValue
    application_fee_percent?:
      | NullableFloatFieldUpdateOperationsInput
      | number
      | null
    billing_cycle_anchor?: NullableIntFieldUpdateOperationsInput | number | null
    billing_thresholds?: NullableJsonNullValueInput | InputJsonValue
    cancel_at?: NullableIntFieldUpdateOperationsInput | number | null
    canceled_at?: NullableIntFieldUpdateOperationsInput | number | null
    collection_method?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableIntFieldUpdateOperationsInput | number | null
    days_until_due?: NullableIntFieldUpdateOperationsInput | number | null
    default_source?: NullableStringFieldUpdateOperationsInput | string | null
    default_tax_rates?: NullableJsonNullValueInput | InputJsonValue
    discount?: NullableJsonNullValueInput | InputJsonValue
    ended_at?: NullableIntFieldUpdateOperationsInput | number | null
    livemode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    next_pending_invoice_item_invoice?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null
    pause_collection?: NullableJsonNullValueInput | InputJsonValue
    pending_invoice_item_interval?: NullableJsonNullValueInput | InputJsonValue
    start_date?: NullableIntFieldUpdateOperationsInput | number | null
    transfer_data?: NullableJsonNullValueInput | InputJsonValue
    trial_end?: NullableJsonNullValueInput | InputJsonValue
    trial_start?: NullableJsonNullValueInput | InputJsonValue
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: NullableStringFieldUpdateOperationsInput | string | null
    latest_invoice?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type subscriptionsCreateManyInput = {
    id: string
    object?: string | null
    cancel_at_period_end?: boolean | null
    current_period_end?: number | null
    current_period_start?: number | null
    default_payment_method?: string | null
    items?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    pending_setup_intent?: string | null
    pending_update?: NullableJsonNullValueInput | InputJsonValue
    application_fee_percent?: number | null
    billing_cycle_anchor?: number | null
    billing_thresholds?: NullableJsonNullValueInput | InputJsonValue
    cancel_at?: number | null
    canceled_at?: number | null
    collection_method?: string | null
    created?: number | null
    days_until_due?: number | null
    default_source?: string | null
    default_tax_rates?: NullableJsonNullValueInput | InputJsonValue
    discount?: NullableJsonNullValueInput | InputJsonValue
    ended_at?: number | null
    livemode?: boolean | null
    next_pending_invoice_item_invoice?: number | null
    pause_collection?: NullableJsonNullValueInput | InputJsonValue
    pending_invoice_item_interval?: NullableJsonNullValueInput | InputJsonValue
    start_date?: number | null
    transfer_data?: NullableJsonNullValueInput | InputJsonValue
    trial_end?: NullableJsonNullValueInput | InputJsonValue
    trial_start?: NullableJsonNullValueInput | InputJsonValue
    schedule?: string | null
    customer?: string | null
    latest_invoice?: string | null
    plan?: string | null
    updated_at?: Date | string | null
  }

  export type subscriptionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    object?: NullableStringFieldUpdateOperationsInput | string | null
    cancel_at_period_end?:
      | NullableBoolFieldUpdateOperationsInput
      | boolean
      | null
    current_period_end?: NullableIntFieldUpdateOperationsInput | number | null
    current_period_start?: NullableIntFieldUpdateOperationsInput | number | null
    default_payment_method?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    items?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    pending_setup_intent?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    pending_update?: NullableJsonNullValueInput | InputJsonValue
    application_fee_percent?:
      | NullableFloatFieldUpdateOperationsInput
      | number
      | null
    billing_cycle_anchor?: NullableIntFieldUpdateOperationsInput | number | null
    billing_thresholds?: NullableJsonNullValueInput | InputJsonValue
    cancel_at?: NullableIntFieldUpdateOperationsInput | number | null
    canceled_at?: NullableIntFieldUpdateOperationsInput | number | null
    collection_method?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableIntFieldUpdateOperationsInput | number | null
    days_until_due?: NullableIntFieldUpdateOperationsInput | number | null
    default_source?: NullableStringFieldUpdateOperationsInput | string | null
    default_tax_rates?: NullableJsonNullValueInput | InputJsonValue
    discount?: NullableJsonNullValueInput | InputJsonValue
    ended_at?: NullableIntFieldUpdateOperationsInput | number | null
    livemode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    next_pending_invoice_item_invoice?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null
    pause_collection?: NullableJsonNullValueInput | InputJsonValue
    pending_invoice_item_interval?: NullableJsonNullValueInput | InputJsonValue
    start_date?: NullableIntFieldUpdateOperationsInput | number | null
    transfer_data?: NullableJsonNullValueInput | InputJsonValue
    trial_end?: NullableJsonNullValueInput | InputJsonValue
    trial_start?: NullableJsonNullValueInput | InputJsonValue
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: NullableStringFieldUpdateOperationsInput | string | null
    latest_invoice?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type subscriptionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    object?: NullableStringFieldUpdateOperationsInput | string | null
    cancel_at_period_end?:
      | NullableBoolFieldUpdateOperationsInput
      | boolean
      | null
    current_period_end?: NullableIntFieldUpdateOperationsInput | number | null
    current_period_start?: NullableIntFieldUpdateOperationsInput | number | null
    default_payment_method?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    items?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    pending_setup_intent?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    pending_update?: NullableJsonNullValueInput | InputJsonValue
    application_fee_percent?:
      | NullableFloatFieldUpdateOperationsInput
      | number
      | null
    billing_cycle_anchor?: NullableIntFieldUpdateOperationsInput | number | null
    billing_thresholds?: NullableJsonNullValueInput | InputJsonValue
    cancel_at?: NullableIntFieldUpdateOperationsInput | number | null
    canceled_at?: NullableIntFieldUpdateOperationsInput | number | null
    collection_method?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableIntFieldUpdateOperationsInput | number | null
    days_until_due?: NullableIntFieldUpdateOperationsInput | number | null
    default_source?: NullableStringFieldUpdateOperationsInput | string | null
    default_tax_rates?: NullableJsonNullValueInput | InputJsonValue
    discount?: NullableJsonNullValueInput | InputJsonValue
    ended_at?: NullableIntFieldUpdateOperationsInput | number | null
    livemode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    next_pending_invoice_item_invoice?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null
    pause_collection?: NullableJsonNullValueInput | InputJsonValue
    pending_invoice_item_interval?: NullableJsonNullValueInput | InputJsonValue
    start_date?: NullableIntFieldUpdateOperationsInput | number | null
    transfer_data?: NullableJsonNullValueInput | InputJsonValue
    trial_end?: NullableJsonNullValueInput | InputJsonValue
    trial_start?: NullableJsonNullValueInput | InputJsonValue
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: NullableStringFieldUpdateOperationsInput | string | null
    latest_invoice?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type productsCreateInput = {
    id: string
    object?: string | null
    active?: boolean | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: string | null
    created?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    livemode?: boolean | null
    package_dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippable?: boolean | null
    statement_descriptor?: string | null
    unit_label?: string | null
    updated?: number | null
    url?: string | null
    updated_at?: Date | string | null
  }

  export type productsUncheckedCreateInput = {
    id: string
    object?: string | null
    active?: boolean | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: string | null
    created?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    livemode?: boolean | null
    package_dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippable?: boolean | null
    statement_descriptor?: string | null
    unit_label?: string | null
    updated?: number | null
    url?: string | null
    updated_at?: Date | string | null
  }

  export type productsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    object?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    livemode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    package_dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    statement_descriptor?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    unit_label?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type productsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    object?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    livemode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    package_dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    statement_descriptor?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    unit_label?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type productsCreateManyInput = {
    id: string
    object?: string | null
    active?: boolean | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: string | null
    created?: number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    livemode?: boolean | null
    package_dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippable?: boolean | null
    statement_descriptor?: string | null
    unit_label?: string | null
    updated?: number | null
    url?: string | null
    updated_at?: Date | string | null
  }

  export type productsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    object?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    livemode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    package_dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    statement_descriptor?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    unit_label?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type productsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    object?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableIntFieldUpdateOperationsInput | number | null
    images?: NullableJsonNullValueInput | InputJsonValue
    livemode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    package_dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    statement_descriptor?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    unit_label?: NullableStringFieldUpdateOperationsInput | string | null
    updated?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type pricesCreateInput = {
    id: string
    object?: string | null
    active?: boolean | null
    currency?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    nickname?: string | null
    recurring?: NullableJsonNullValueInput | InputJsonValue
    unit_amount?: number | null
    billing_scheme?: string | null
    created?: number | null
    livemode?: boolean | null
    lookup_key?: string | null
    transform_quantity?: NullableJsonNullValueInput | InputJsonValue
    unit_amount_decimal?: string | null
    product?: string | null
    updated_at?: Date | string | null
  }

  export type pricesUncheckedCreateInput = {
    id: string
    object?: string | null
    active?: boolean | null
    currency?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    nickname?: string | null
    recurring?: NullableJsonNullValueInput | InputJsonValue
    unit_amount?: number | null
    billing_scheme?: string | null
    created?: number | null
    livemode?: boolean | null
    lookup_key?: string | null
    transform_quantity?: NullableJsonNullValueInput | InputJsonValue
    unit_amount_decimal?: string | null
    product?: string | null
    updated_at?: Date | string | null
  }

  export type pricesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    object?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    recurring?: NullableJsonNullValueInput | InputJsonValue
    unit_amount?: NullableIntFieldUpdateOperationsInput | number | null
    billing_scheme?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableIntFieldUpdateOperationsInput | number | null
    livemode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lookup_key?: NullableStringFieldUpdateOperationsInput | string | null
    transform_quantity?: NullableJsonNullValueInput | InputJsonValue
    unit_amount_decimal?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type pricesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    object?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    recurring?: NullableJsonNullValueInput | InputJsonValue
    unit_amount?: NullableIntFieldUpdateOperationsInput | number | null
    billing_scheme?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableIntFieldUpdateOperationsInput | number | null
    livemode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lookup_key?: NullableStringFieldUpdateOperationsInput | string | null
    transform_quantity?: NullableJsonNullValueInput | InputJsonValue
    unit_amount_decimal?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type pricesCreateManyInput = {
    id: string
    object?: string | null
    active?: boolean | null
    currency?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    nickname?: string | null
    recurring?: NullableJsonNullValueInput | InputJsonValue
    unit_amount?: number | null
    billing_scheme?: string | null
    created?: number | null
    livemode?: boolean | null
    lookup_key?: string | null
    transform_quantity?: NullableJsonNullValueInput | InputJsonValue
    unit_amount_decimal?: string | null
    product?: string | null
    updated_at?: Date | string | null
  }

  export type pricesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    object?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    recurring?: NullableJsonNullValueInput | InputJsonValue
    unit_amount?: NullableIntFieldUpdateOperationsInput | number | null
    billing_scheme?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableIntFieldUpdateOperationsInput | number | null
    livemode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lookup_key?: NullableStringFieldUpdateOperationsInput | string | null
    transform_quantity?: NullableJsonNullValueInput | InputJsonValue
    unit_amount_decimal?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type pricesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    object?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    recurring?: NullableJsonNullValueInput | InputJsonValue
    unit_amount?: NullableIntFieldUpdateOperationsInput | number | null
    billing_scheme?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableIntFieldUpdateOperationsInput | number | null
    livemode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lookup_key?: NullableStringFieldUpdateOperationsInput | string | null
    transform_quantity?: NullableJsonNullValueInput | InputJsonValue
    unit_amount_decimal?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
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
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelevanceInput = {
    fields:
      | ProjectOrderByRelevanceFieldEnum
      | ProjectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
    lastActive?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
    lastActive?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
    lastActive?: SortOrder
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
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TemplateOrderByRelevanceInput = {
    fields:
      | TemplateOrderByRelevanceFieldEnum
      | TemplateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    graph?: SortOrder
    spells?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          'path'
        >
      >

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type LikesListRelationFilter = {
    every?: LikesWhereInput
    some?: LikesWhereInput
    none?: LikesWhereInput
  }

  export type ReportsListRelationFilter = {
    every?: ReportsWhereInput
    some?: ReportsWhereInput
    none?: ReportsWhereInput
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicAgentOrderByRelevanceInput = {
    fields:
      | PublicAgentOrderByRelevanceFieldEnum
      | PublicAgentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PublicAgentCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    userId?: SortOrder
    madePublic?: SortOrder
    deletedAt?: SortOrder
    description?: SortOrder
    remixable?: SortOrder
    isTemplate?: SortOrder
    featured?: SortOrder
  }

  export type PublicAgentMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    userId?: SortOrder
    madePublic?: SortOrder
    deletedAt?: SortOrder
    description?: SortOrder
    remixable?: SortOrder
    isTemplate?: SortOrder
    featured?: SortOrder
  }

  export type PublicAgentMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    userId?: SortOrder
    madePublic?: SortOrder
    deletedAt?: SortOrder
    description?: SortOrder
    remixable?: SortOrder
    isTemplate?: SortOrder
    featured?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PublicAgentRelationFilter = {
    is?: PublicAgentWhereInput
    isNot?: PublicAgentWhereInput
  }

  export type ReportsOrderByRelevanceInput = {
    fields:
      | ReportsOrderByRelevanceFieldEnum
      | ReportsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReportsCountOrderByAggregateInput = {
    id?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
  }

  export type ReportsMaxOrderByAggregateInput = {
    id?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
  }

  export type ReportsMinOrderByAggregateInput = {
    id?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
  }

  export type LikesOrderByRelevanceInput = {
    fields: LikesOrderByRelevanceFieldEnum | LikesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LikesUserIdPublicAgentIdCompoundUniqueInput = {
    userId: string
    publicAgentId: string
  }

  export type LikesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentsOrderByRelevanceInput = {
    fields:
      | CommentsOrderByRelevanceFieldEnum
      | CommentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AnonymousUserOrderByRelevanceInput = {
    fields:
      | AnonymousUserOrderByRelevanceFieldEnum
      | AnonymousUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AnonymousUserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    anonymousId?: SortOrder
    fingerprint?: SortOrder
    lastAccessed?: SortOrder
  }

  export type AnonymousUserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    anonymousId?: SortOrder
    fingerprint?: SortOrder
    lastAccessed?: SortOrder
  }

  export type AnonymousUserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    anonymousId?: SortOrder
    fingerprint?: SortOrder
    lastAccessed?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    not?:
      | NestedDecimalNullableFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
  }

  export type BudgetOrderByRelevanceInput = {
    fields: BudgetOrderByRelevanceFieldEnum | BudgetOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BudgetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currentCost?: SortOrder
    modelCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BudgetAvgOrderByAggregateInput = {
    balance?: SortOrder
    currentCost?: SortOrder
  }

  export type BudgetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currentCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BudgetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currentCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BudgetSumOrderByAggregateInput = {
    balance?: SortOrder
    currentCost?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    not?:
      | NestedDecimalNullableWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumPromotionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?:
      | $Enums.PromotionType[]
      | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?:
      | $Enums.PromotionType[]
      | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionTypeFilter<$PrismaModel> | $Enums.PromotionType
  }

  export type PromotionOrderByRelevanceInput = {
    fields:
      | PromotionOrderByRelevanceFieldEnum
      | PromotionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PromotionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PromotionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPromotionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?:
      | $Enums.PromotionType[]
      | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?:
      | $Enums.PromotionType[]
      | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?:
      | NestedEnumPromotionTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.PromotionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPromotionTypeFilter<$PrismaModel>
    _max?: NestedEnumPromotionTypeFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type agentsOrderByRelevanceInput = {
    fields: agentsOrderByRelevanceFieldEnum | agentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type agentsCountOrderByAggregateInput = {
    id?: SortOrder
    rootSpell?: SortOrder
    publicVariables?: SortOrder
    secrets?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
    updatedAt?: SortOrder
    pingedAt?: SortOrder
    projectId?: SortOrder
    data?: SortOrder
    runState?: SortOrder
    image?: SortOrder
    rootSpellId?: SortOrder
    default?: SortOrder
    createdAt?: SortOrder
    currentSpellReleaseId?: SortOrder
    embedModel?: SortOrder
    version?: SortOrder
    embeddingProvider?: SortOrder
    embeddingModel?: SortOrder
    publicAgentId?: SortOrder
    description?: SortOrder
    remixable?: SortOrder
    featured?: SortOrder
    isTemplate?: SortOrder
    isPublic?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    creatorImage?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    isDraft?: SortOrder
    draftAgentId?: SortOrder
  }

  export type agentsAvgOrderByAggregateInput = {
    likesCount?: SortOrder
    commentsCount?: SortOrder
  }

  export type agentsMaxOrderByAggregateInput = {
    id?: SortOrder
    publicVariables?: SortOrder
    secrets?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
    updatedAt?: SortOrder
    pingedAt?: SortOrder
    projectId?: SortOrder
    runState?: SortOrder
    image?: SortOrder
    rootSpellId?: SortOrder
    default?: SortOrder
    createdAt?: SortOrder
    currentSpellReleaseId?: SortOrder
    embedModel?: SortOrder
    version?: SortOrder
    embeddingProvider?: SortOrder
    embeddingModel?: SortOrder
    publicAgentId?: SortOrder
    description?: SortOrder
    remixable?: SortOrder
    featured?: SortOrder
    isTemplate?: SortOrder
    isPublic?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    creatorImage?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    isDraft?: SortOrder
    draftAgentId?: SortOrder
  }

  export type agentsMinOrderByAggregateInput = {
    id?: SortOrder
    publicVariables?: SortOrder
    secrets?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
    updatedAt?: SortOrder
    pingedAt?: SortOrder
    projectId?: SortOrder
    runState?: SortOrder
    image?: SortOrder
    rootSpellId?: SortOrder
    default?: SortOrder
    createdAt?: SortOrder
    currentSpellReleaseId?: SortOrder
    embedModel?: SortOrder
    version?: SortOrder
    embeddingProvider?: SortOrder
    embeddingModel?: SortOrder
    publicAgentId?: SortOrder
    description?: SortOrder
    remixable?: SortOrder
    featured?: SortOrder
    isTemplate?: SortOrder
    isPublic?: SortOrder
    creatorId?: SortOrder
    creatorName?: SortOrder
    creatorImage?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    isDraft?: SortOrder
    draftAgentId?: SortOrder
  }

  export type agentsSumOrderByAggregateInput = {
    likesCount?: SortOrder
    commentsCount?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?:
      | NestedBigIntNullableWithAggregatesFilter<$PrismaModel>
      | bigint
      | number
      | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type spellsOrderByRelevanceInput = {
    fields: spellsOrderByRelevanceFieldEnum | spellsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type spellsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    graph?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    spellReleaseId?: SortOrder
  }

  export type spellsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    spellReleaseId?: SortOrder
  }

  export type spellsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    spellReleaseId?: SortOrder
  }

  export type documentsOrderByRelevanceInput = {
    fields:
      | documentsOrderByRelevanceFieldEnum
      | documentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type documentsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    projectId?: SortOrder
    date?: SortOrder
    metadata?: SortOrder
  }

  export type documentsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    projectId?: SortOrder
    date?: SortOrder
  }

  export type documentsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    projectId?: SortOrder
    date?: SortOrder
  }

  export type customersOrderByRelevanceInput = {
    fields:
      | customersOrderByRelevanceFieldEnum
      | customersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type customersCountOrderByAggregateInput = {
    id?: SortOrder
    object?: SortOrder
    address?: SortOrder
    description?: SortOrder
    email?: SortOrder
    metadata?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    shipping?: SortOrder
    balance?: SortOrder
    created?: SortOrder
    currency?: SortOrder
    default_source?: SortOrder
    delinquent?: SortOrder
    discount?: SortOrder
    invoice_prefix?: SortOrder
    invoice_settings?: SortOrder
    livemode?: SortOrder
    next_invoice_sequence?: SortOrder
    preferred_locales?: SortOrder
    tax_exempt?: SortOrder
    updated_at?: SortOrder
    deleted?: SortOrder
  }

  export type customersAvgOrderByAggregateInput = {
    balance?: SortOrder
    created?: SortOrder
    next_invoice_sequence?: SortOrder
  }

  export type customersMaxOrderByAggregateInput = {
    id?: SortOrder
    object?: SortOrder
    description?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    balance?: SortOrder
    created?: SortOrder
    currency?: SortOrder
    default_source?: SortOrder
    delinquent?: SortOrder
    invoice_prefix?: SortOrder
    livemode?: SortOrder
    next_invoice_sequence?: SortOrder
    tax_exempt?: SortOrder
    updated_at?: SortOrder
    deleted?: SortOrder
  }

  export type customersMinOrderByAggregateInput = {
    id?: SortOrder
    object?: SortOrder
    description?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    balance?: SortOrder
    created?: SortOrder
    currency?: SortOrder
    default_source?: SortOrder
    delinquent?: SortOrder
    invoice_prefix?: SortOrder
    livemode?: SortOrder
    next_invoice_sequence?: SortOrder
    tax_exempt?: SortOrder
    updated_at?: SortOrder
    deleted?: SortOrder
  }

  export type customersSumOrderByAggregateInput = {
    balance?: SortOrder
    created?: SortOrder
    next_invoice_sequence?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type subscriptionsOrderByRelevanceInput = {
    fields:
      | subscriptionsOrderByRelevanceFieldEnum
      | subscriptionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type subscriptionsCountOrderByAggregateInput = {
    id?: SortOrder
    object?: SortOrder
    cancel_at_period_end?: SortOrder
    current_period_end?: SortOrder
    current_period_start?: SortOrder
    default_payment_method?: SortOrder
    items?: SortOrder
    metadata?: SortOrder
    pending_setup_intent?: SortOrder
    pending_update?: SortOrder
    application_fee_percent?: SortOrder
    billing_cycle_anchor?: SortOrder
    billing_thresholds?: SortOrder
    cancel_at?: SortOrder
    canceled_at?: SortOrder
    collection_method?: SortOrder
    created?: SortOrder
    days_until_due?: SortOrder
    default_source?: SortOrder
    default_tax_rates?: SortOrder
    discount?: SortOrder
    ended_at?: SortOrder
    livemode?: SortOrder
    next_pending_invoice_item_invoice?: SortOrder
    pause_collection?: SortOrder
    pending_invoice_item_interval?: SortOrder
    start_date?: SortOrder
    transfer_data?: SortOrder
    trial_end?: SortOrder
    trial_start?: SortOrder
    schedule?: SortOrder
    customer?: SortOrder
    latest_invoice?: SortOrder
    plan?: SortOrder
    updated_at?: SortOrder
  }

  export type subscriptionsAvgOrderByAggregateInput = {
    current_period_end?: SortOrder
    current_period_start?: SortOrder
    application_fee_percent?: SortOrder
    billing_cycle_anchor?: SortOrder
    cancel_at?: SortOrder
    canceled_at?: SortOrder
    created?: SortOrder
    days_until_due?: SortOrder
    ended_at?: SortOrder
    next_pending_invoice_item_invoice?: SortOrder
    start_date?: SortOrder
  }

  export type subscriptionsMaxOrderByAggregateInput = {
    id?: SortOrder
    object?: SortOrder
    cancel_at_period_end?: SortOrder
    current_period_end?: SortOrder
    current_period_start?: SortOrder
    default_payment_method?: SortOrder
    pending_setup_intent?: SortOrder
    application_fee_percent?: SortOrder
    billing_cycle_anchor?: SortOrder
    cancel_at?: SortOrder
    canceled_at?: SortOrder
    collection_method?: SortOrder
    created?: SortOrder
    days_until_due?: SortOrder
    default_source?: SortOrder
    ended_at?: SortOrder
    livemode?: SortOrder
    next_pending_invoice_item_invoice?: SortOrder
    start_date?: SortOrder
    schedule?: SortOrder
    customer?: SortOrder
    latest_invoice?: SortOrder
    plan?: SortOrder
    updated_at?: SortOrder
  }

  export type subscriptionsMinOrderByAggregateInput = {
    id?: SortOrder
    object?: SortOrder
    cancel_at_period_end?: SortOrder
    current_period_end?: SortOrder
    current_period_start?: SortOrder
    default_payment_method?: SortOrder
    pending_setup_intent?: SortOrder
    application_fee_percent?: SortOrder
    billing_cycle_anchor?: SortOrder
    cancel_at?: SortOrder
    canceled_at?: SortOrder
    collection_method?: SortOrder
    created?: SortOrder
    days_until_due?: SortOrder
    default_source?: SortOrder
    ended_at?: SortOrder
    livemode?: SortOrder
    next_pending_invoice_item_invoice?: SortOrder
    start_date?: SortOrder
    schedule?: SortOrder
    customer?: SortOrder
    latest_invoice?: SortOrder
    plan?: SortOrder
    updated_at?: SortOrder
  }

  export type subscriptionsSumOrderByAggregateInput = {
    current_period_end?: SortOrder
    current_period_start?: SortOrder
    application_fee_percent?: SortOrder
    billing_cycle_anchor?: SortOrder
    cancel_at?: SortOrder
    canceled_at?: SortOrder
    created?: SortOrder
    days_until_due?: SortOrder
    ended_at?: SortOrder
    next_pending_invoice_item_invoice?: SortOrder
    start_date?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type productsOrderByRelevanceInput = {
    fields:
      | productsOrderByRelevanceFieldEnum
      | productsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    object?: SortOrder
    active?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    name?: SortOrder
    created?: SortOrder
    images?: SortOrder
    livemode?: SortOrder
    package_dimensions?: SortOrder
    shippable?: SortOrder
    statement_descriptor?: SortOrder
    unit_label?: SortOrder
    updated?: SortOrder
    url?: SortOrder
    updated_at?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    created?: SortOrder
    updated?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    object?: SortOrder
    active?: SortOrder
    description?: SortOrder
    name?: SortOrder
    created?: SortOrder
    livemode?: SortOrder
    shippable?: SortOrder
    statement_descriptor?: SortOrder
    unit_label?: SortOrder
    updated?: SortOrder
    url?: SortOrder
    updated_at?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    object?: SortOrder
    active?: SortOrder
    description?: SortOrder
    name?: SortOrder
    created?: SortOrder
    livemode?: SortOrder
    shippable?: SortOrder
    statement_descriptor?: SortOrder
    unit_label?: SortOrder
    updated?: SortOrder
    url?: SortOrder
    updated_at?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    created?: SortOrder
    updated?: SortOrder
  }

  export type pricesOrderByRelevanceInput = {
    fields: pricesOrderByRelevanceFieldEnum | pricesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type pricesCountOrderByAggregateInput = {
    id?: SortOrder
    object?: SortOrder
    active?: SortOrder
    currency?: SortOrder
    metadata?: SortOrder
    nickname?: SortOrder
    recurring?: SortOrder
    unit_amount?: SortOrder
    billing_scheme?: SortOrder
    created?: SortOrder
    livemode?: SortOrder
    lookup_key?: SortOrder
    transform_quantity?: SortOrder
    unit_amount_decimal?: SortOrder
    product?: SortOrder
    updated_at?: SortOrder
  }

  export type pricesAvgOrderByAggregateInput = {
    unit_amount?: SortOrder
    created?: SortOrder
  }

  export type pricesMaxOrderByAggregateInput = {
    id?: SortOrder
    object?: SortOrder
    active?: SortOrder
    currency?: SortOrder
    nickname?: SortOrder
    unit_amount?: SortOrder
    billing_scheme?: SortOrder
    created?: SortOrder
    livemode?: SortOrder
    lookup_key?: SortOrder
    unit_amount_decimal?: SortOrder
    product?: SortOrder
    updated_at?: SortOrder
  }

  export type pricesMinOrderByAggregateInput = {
    id?: SortOrder
    object?: SortOrder
    active?: SortOrder
    currency?: SortOrder
    nickname?: SortOrder
    unit_amount?: SortOrder
    billing_scheme?: SortOrder
    created?: SortOrder
    livemode?: SortOrder
    lookup_key?: SortOrder
    unit_amount_decimal?: SortOrder
    product?: SortOrder
    updated_at?: SortOrder
  }

  export type pricesSumOrderByAggregateInput = {
    unit_amount?: SortOrder
    created?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TemplateCreatespellsInput = {
    set: string[]
  }

  export type TemplateUpdatespellsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CommentsCreateNestedManyWithoutPublicAgentInput = {
    create?:
      | XOR<
          CommentsCreateWithoutPublicAgentInput,
          CommentsUncheckedCreateWithoutPublicAgentInput
        >
      | CommentsCreateWithoutPublicAgentInput[]
      | CommentsUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?:
      | CommentsCreateOrConnectWithoutPublicAgentInput
      | CommentsCreateOrConnectWithoutPublicAgentInput[]
    createMany?: CommentsCreateManyPublicAgentInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type LikesCreateNestedManyWithoutPublicAgentInput = {
    create?:
      | XOR<
          LikesCreateWithoutPublicAgentInput,
          LikesUncheckedCreateWithoutPublicAgentInput
        >
      | LikesCreateWithoutPublicAgentInput[]
      | LikesUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?:
      | LikesCreateOrConnectWithoutPublicAgentInput
      | LikesCreateOrConnectWithoutPublicAgentInput[]
    createMany?: LikesCreateManyPublicAgentInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type ReportsCreateNestedManyWithoutPublicAgentInput = {
    create?:
      | XOR<
          ReportsCreateWithoutPublicAgentInput,
          ReportsUncheckedCreateWithoutPublicAgentInput
        >
      | ReportsCreateWithoutPublicAgentInput[]
      | ReportsUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?:
      | ReportsCreateOrConnectWithoutPublicAgentInput
      | ReportsCreateOrConnectWithoutPublicAgentInput[]
    createMany?: ReportsCreateManyPublicAgentInputEnvelope
    connect?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutPublicAgentInput = {
    create?:
      | XOR<
          CommentsCreateWithoutPublicAgentInput,
          CommentsUncheckedCreateWithoutPublicAgentInput
        >
      | CommentsCreateWithoutPublicAgentInput[]
      | CommentsUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?:
      | CommentsCreateOrConnectWithoutPublicAgentInput
      | CommentsCreateOrConnectWithoutPublicAgentInput[]
    createMany?: CommentsCreateManyPublicAgentInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutPublicAgentInput = {
    create?:
      | XOR<
          LikesCreateWithoutPublicAgentInput,
          LikesUncheckedCreateWithoutPublicAgentInput
        >
      | LikesCreateWithoutPublicAgentInput[]
      | LikesUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?:
      | LikesCreateOrConnectWithoutPublicAgentInput
      | LikesCreateOrConnectWithoutPublicAgentInput[]
    createMany?: LikesCreateManyPublicAgentInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type ReportsUncheckedCreateNestedManyWithoutPublicAgentInput = {
    create?:
      | XOR<
          ReportsCreateWithoutPublicAgentInput,
          ReportsUncheckedCreateWithoutPublicAgentInput
        >
      | ReportsCreateWithoutPublicAgentInput[]
      | ReportsUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?:
      | ReportsCreateOrConnectWithoutPublicAgentInput
      | ReportsCreateOrConnectWithoutPublicAgentInput[]
    createMany?: ReportsCreateManyPublicAgentInputEnvelope
    connect?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CommentsUpdateManyWithoutPublicAgentNestedInput = {
    create?:
      | XOR<
          CommentsCreateWithoutPublicAgentInput,
          CommentsUncheckedCreateWithoutPublicAgentInput
        >
      | CommentsCreateWithoutPublicAgentInput[]
      | CommentsUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?:
      | CommentsCreateOrConnectWithoutPublicAgentInput
      | CommentsCreateOrConnectWithoutPublicAgentInput[]
    upsert?:
      | CommentsUpsertWithWhereUniqueWithoutPublicAgentInput
      | CommentsUpsertWithWhereUniqueWithoutPublicAgentInput[]
    createMany?: CommentsCreateManyPublicAgentInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?:
      | CommentsUpdateWithWhereUniqueWithoutPublicAgentInput
      | CommentsUpdateWithWhereUniqueWithoutPublicAgentInput[]
    updateMany?:
      | CommentsUpdateManyWithWhereWithoutPublicAgentInput
      | CommentsUpdateManyWithWhereWithoutPublicAgentInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type LikesUpdateManyWithoutPublicAgentNestedInput = {
    create?:
      | XOR<
          LikesCreateWithoutPublicAgentInput,
          LikesUncheckedCreateWithoutPublicAgentInput
        >
      | LikesCreateWithoutPublicAgentInput[]
      | LikesUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?:
      | LikesCreateOrConnectWithoutPublicAgentInput
      | LikesCreateOrConnectWithoutPublicAgentInput[]
    upsert?:
      | LikesUpsertWithWhereUniqueWithoutPublicAgentInput
      | LikesUpsertWithWhereUniqueWithoutPublicAgentInput[]
    createMany?: LikesCreateManyPublicAgentInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?:
      | LikesUpdateWithWhereUniqueWithoutPublicAgentInput
      | LikesUpdateWithWhereUniqueWithoutPublicAgentInput[]
    updateMany?:
      | LikesUpdateManyWithWhereWithoutPublicAgentInput
      | LikesUpdateManyWithWhereWithoutPublicAgentInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type ReportsUpdateManyWithoutPublicAgentNestedInput = {
    create?:
      | XOR<
          ReportsCreateWithoutPublicAgentInput,
          ReportsUncheckedCreateWithoutPublicAgentInput
        >
      | ReportsCreateWithoutPublicAgentInput[]
      | ReportsUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?:
      | ReportsCreateOrConnectWithoutPublicAgentInput
      | ReportsCreateOrConnectWithoutPublicAgentInput[]
    upsert?:
      | ReportsUpsertWithWhereUniqueWithoutPublicAgentInput
      | ReportsUpsertWithWhereUniqueWithoutPublicAgentInput[]
    createMany?: ReportsCreateManyPublicAgentInputEnvelope
    set?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
    disconnect?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
    delete?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
    connect?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
    update?:
      | ReportsUpdateWithWhereUniqueWithoutPublicAgentInput
      | ReportsUpdateWithWhereUniqueWithoutPublicAgentInput[]
    updateMany?:
      | ReportsUpdateManyWithWhereWithoutPublicAgentInput
      | ReportsUpdateManyWithWhereWithoutPublicAgentInput[]
    deleteMany?: ReportsScalarWhereInput | ReportsScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutPublicAgentNestedInput = {
    create?:
      | XOR<
          CommentsCreateWithoutPublicAgentInput,
          CommentsUncheckedCreateWithoutPublicAgentInput
        >
      | CommentsCreateWithoutPublicAgentInput[]
      | CommentsUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?:
      | CommentsCreateOrConnectWithoutPublicAgentInput
      | CommentsCreateOrConnectWithoutPublicAgentInput[]
    upsert?:
      | CommentsUpsertWithWhereUniqueWithoutPublicAgentInput
      | CommentsUpsertWithWhereUniqueWithoutPublicAgentInput[]
    createMany?: CommentsCreateManyPublicAgentInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?:
      | CommentsUpdateWithWhereUniqueWithoutPublicAgentInput
      | CommentsUpdateWithWhereUniqueWithoutPublicAgentInput[]
    updateMany?:
      | CommentsUpdateManyWithWhereWithoutPublicAgentInput
      | CommentsUpdateManyWithWhereWithoutPublicAgentInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutPublicAgentNestedInput = {
    create?:
      | XOR<
          LikesCreateWithoutPublicAgentInput,
          LikesUncheckedCreateWithoutPublicAgentInput
        >
      | LikesCreateWithoutPublicAgentInput[]
      | LikesUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?:
      | LikesCreateOrConnectWithoutPublicAgentInput
      | LikesCreateOrConnectWithoutPublicAgentInput[]
    upsert?:
      | LikesUpsertWithWhereUniqueWithoutPublicAgentInput
      | LikesUpsertWithWhereUniqueWithoutPublicAgentInput[]
    createMany?: LikesCreateManyPublicAgentInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?:
      | LikesUpdateWithWhereUniqueWithoutPublicAgentInput
      | LikesUpdateWithWhereUniqueWithoutPublicAgentInput[]
    updateMany?:
      | LikesUpdateManyWithWhereWithoutPublicAgentInput
      | LikesUpdateManyWithWhereWithoutPublicAgentInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type ReportsUncheckedUpdateManyWithoutPublicAgentNestedInput = {
    create?:
      | XOR<
          ReportsCreateWithoutPublicAgentInput,
          ReportsUncheckedCreateWithoutPublicAgentInput
        >
      | ReportsCreateWithoutPublicAgentInput[]
      | ReportsUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?:
      | ReportsCreateOrConnectWithoutPublicAgentInput
      | ReportsCreateOrConnectWithoutPublicAgentInput[]
    upsert?:
      | ReportsUpsertWithWhereUniqueWithoutPublicAgentInput
      | ReportsUpsertWithWhereUniqueWithoutPublicAgentInput[]
    createMany?: ReportsCreateManyPublicAgentInputEnvelope
    set?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
    disconnect?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
    delete?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
    connect?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
    update?:
      | ReportsUpdateWithWhereUniqueWithoutPublicAgentInput
      | ReportsUpdateWithWhereUniqueWithoutPublicAgentInput[]
    updateMany?:
      | ReportsUpdateManyWithWhereWithoutPublicAgentInput
      | ReportsUpdateManyWithWhereWithoutPublicAgentInput[]
    deleteMany?: ReportsScalarWhereInput | ReportsScalarWhereInput[]
  }

  export type PublicAgentCreateNestedOneWithoutReportsInput = {
    create?: XOR<
      PublicAgentCreateWithoutReportsInput,
      PublicAgentUncheckedCreateWithoutReportsInput
    >
    connectOrCreate?: PublicAgentCreateOrConnectWithoutReportsInput
    connect?: PublicAgentWhereUniqueInput
  }

  export type PublicAgentUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<
      PublicAgentCreateWithoutReportsInput,
      PublicAgentUncheckedCreateWithoutReportsInput
    >
    connectOrCreate?: PublicAgentCreateOrConnectWithoutReportsInput
    upsert?: PublicAgentUpsertWithoutReportsInput
    connect?: PublicAgentWhereUniqueInput
    update?: XOR<
      XOR<
        PublicAgentUpdateToOneWithWhereWithoutReportsInput,
        PublicAgentUpdateWithoutReportsInput
      >,
      PublicAgentUncheckedUpdateWithoutReportsInput
    >
  }

  export type PublicAgentCreateNestedOneWithoutLikesInput = {
    create?: XOR<
      PublicAgentCreateWithoutLikesInput,
      PublicAgentUncheckedCreateWithoutLikesInput
    >
    connectOrCreate?: PublicAgentCreateOrConnectWithoutLikesInput
    connect?: PublicAgentWhereUniqueInput
  }

  export type PublicAgentUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<
      PublicAgentCreateWithoutLikesInput,
      PublicAgentUncheckedCreateWithoutLikesInput
    >
    connectOrCreate?: PublicAgentCreateOrConnectWithoutLikesInput
    upsert?: PublicAgentUpsertWithoutLikesInput
    connect?: PublicAgentWhereUniqueInput
    update?: XOR<
      XOR<
        PublicAgentUpdateToOneWithWhereWithoutLikesInput,
        PublicAgentUpdateWithoutLikesInput
      >,
      PublicAgentUncheckedUpdateWithoutLikesInput
    >
  }

  export type PublicAgentCreateNestedOneWithoutCommentsInput = {
    create?: XOR<
      PublicAgentCreateWithoutCommentsInput,
      PublicAgentUncheckedCreateWithoutCommentsInput
    >
    connectOrCreate?: PublicAgentCreateOrConnectWithoutCommentsInput
    connect?: PublicAgentWhereUniqueInput
  }

  export type PublicAgentUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<
      PublicAgentCreateWithoutCommentsInput,
      PublicAgentUncheckedCreateWithoutCommentsInput
    >
    connectOrCreate?: PublicAgentCreateOrConnectWithoutCommentsInput
    upsert?: PublicAgentUpsertWithoutCommentsInput
    connect?: PublicAgentWhereUniqueInput
    update?: XOR<
      XOR<
        PublicAgentUpdateToOneWithWhereWithoutCommentsInput,
        PublicAgentUpdateWithoutCommentsInput
      >,
      PublicAgentUncheckedUpdateWithoutCommentsInput
    >
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPromotionTypeFieldUpdateOperationsInput = {
    set?: $Enums.PromotionType
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
    search?: string
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
      notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null
      _count?: NestedIntNullableFilter<$PrismaModel>
      _min?: NestedDateTimeNullableFilter<$PrismaModel>
      _max?: NestedDateTimeNullableFilter<$PrismaModel>
    }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonNullableFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>
      >

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
      | null
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    not?:
      | NestedDecimalNullableFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>
        | null
      in?:
        | Decimal[]
        | DecimalJsLike[]
        | number[]
        | string[]
        | ListDecimalFieldRefInput<$PrismaModel>
        | null
      notIn?:
        | Decimal[]
        | DecimalJsLike[]
        | number[]
        | string[]
        | ListDecimalFieldRefInput<$PrismaModel>
        | null
      lt?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>
      lte?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>
      gt?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>
      gte?:
        | Decimal
        | DecimalJsLike
        | number
        | string
        | DecimalFieldRefInput<$PrismaModel>
      not?:
        | NestedDecimalNullableWithAggregatesFilter<$PrismaModel>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null
      _count?: NestedIntNullableFilter<$PrismaModel>
      _avg?: NestedDecimalNullableFilter<$PrismaModel>
      _sum?: NestedDecimalNullableFilter<$PrismaModel>
      _min?: NestedDecimalNullableFilter<$PrismaModel>
      _max?: NestedDecimalNullableFilter<$PrismaModel>
    }

  export type NestedEnumPromotionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?:
      | $Enums.PromotionType[]
      | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?:
      | $Enums.PromotionType[]
      | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionTypeFilter<$PrismaModel> | $Enums.PromotionType
  }

  export type NestedEnumPromotionTypeWithAggregatesFilter<
    $PrismaModel = never
  > = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?:
      | $Enums.PromotionType[]
      | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?:
      | $Enums.PromotionType[]
      | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?:
      | NestedEnumPromotionTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.PromotionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPromotionTypeFilter<$PrismaModel>
    _max?: NestedEnumPromotionTypeFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?:
      | NestedBigIntNullableWithAggregatesFilter<$PrismaModel>
      | bigint
      | number
      | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CommentsCreateWithoutPublicAgentInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CommentsUncheckedCreateWithoutPublicAgentInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CommentsCreateOrConnectWithoutPublicAgentInput = {
    where: CommentsWhereUniqueInput
    create: XOR<
      CommentsCreateWithoutPublicAgentInput,
      CommentsUncheckedCreateWithoutPublicAgentInput
    >
  }

  export type CommentsCreateManyPublicAgentInputEnvelope = {
    data:
      | CommentsCreateManyPublicAgentInput
      | CommentsCreateManyPublicAgentInput[]
    skipDuplicates?: boolean
  }

  export type LikesCreateWithoutPublicAgentInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type LikesUncheckedCreateWithoutPublicAgentInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type LikesCreateOrConnectWithoutPublicAgentInput = {
    where: LikesWhereUniqueInput
    create: XOR<
      LikesCreateWithoutPublicAgentInput,
      LikesUncheckedCreateWithoutPublicAgentInput
    >
  }

  export type LikesCreateManyPublicAgentInputEnvelope = {
    data: LikesCreateManyPublicAgentInput | LikesCreateManyPublicAgentInput[]
    skipDuplicates?: boolean
  }

  export type ReportsCreateWithoutPublicAgentInput = {
    id?: string
    createdAt?: Date | string
    message: string
  }

  export type ReportsUncheckedCreateWithoutPublicAgentInput = {
    id?: string
    createdAt?: Date | string
    message: string
  }

  export type ReportsCreateOrConnectWithoutPublicAgentInput = {
    where: ReportsWhereUniqueInput
    create: XOR<
      ReportsCreateWithoutPublicAgentInput,
      ReportsUncheckedCreateWithoutPublicAgentInput
    >
  }

  export type ReportsCreateManyPublicAgentInputEnvelope = {
    data:
      | ReportsCreateManyPublicAgentInput
      | ReportsCreateManyPublicAgentInput[]
    skipDuplicates?: boolean
  }

  export type CommentsUpsertWithWhereUniqueWithoutPublicAgentInput = {
    where: CommentsWhereUniqueInput
    update: XOR<
      CommentsUpdateWithoutPublicAgentInput,
      CommentsUncheckedUpdateWithoutPublicAgentInput
    >
    create: XOR<
      CommentsCreateWithoutPublicAgentInput,
      CommentsUncheckedCreateWithoutPublicAgentInput
    >
  }

  export type CommentsUpdateWithWhereUniqueWithoutPublicAgentInput = {
    where: CommentsWhereUniqueInput
    data: XOR<
      CommentsUpdateWithoutPublicAgentInput,
      CommentsUncheckedUpdateWithoutPublicAgentInput
    >
  }

  export type CommentsUpdateManyWithWhereWithoutPublicAgentInput = {
    where: CommentsScalarWhereInput
    data: XOR<
      CommentsUpdateManyMutationInput,
      CommentsUncheckedUpdateManyWithoutPublicAgentInput
    >
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: StringFilter<'Comments'> | string
    userId?: StringFilter<'Comments'> | string
    publicAgentId?: StringFilter<'Comments'> | string
    content?: StringFilter<'Comments'> | string
    createdAt?: DateTimeFilter<'Comments'> | Date | string
    updatedAt?: DateTimeNullableFilter<'Comments'> | Date | string | null
    deletedAt?: DateTimeNullableFilter<'Comments'> | Date | string | null
  }

  export type LikesUpsertWithWhereUniqueWithoutPublicAgentInput = {
    where: LikesWhereUniqueInput
    update: XOR<
      LikesUpdateWithoutPublicAgentInput,
      LikesUncheckedUpdateWithoutPublicAgentInput
    >
    create: XOR<
      LikesCreateWithoutPublicAgentInput,
      LikesUncheckedCreateWithoutPublicAgentInput
    >
  }

  export type LikesUpdateWithWhereUniqueWithoutPublicAgentInput = {
    where: LikesWhereUniqueInput
    data: XOR<
      LikesUpdateWithoutPublicAgentInput,
      LikesUncheckedUpdateWithoutPublicAgentInput
    >
  }

  export type LikesUpdateManyWithWhereWithoutPublicAgentInput = {
    where: LikesScalarWhereInput
    data: XOR<
      LikesUpdateManyMutationInput,
      LikesUncheckedUpdateManyWithoutPublicAgentInput
    >
  }

  export type LikesScalarWhereInput = {
    AND?: LikesScalarWhereInput | LikesScalarWhereInput[]
    OR?: LikesScalarWhereInput[]
    NOT?: LikesScalarWhereInput | LikesScalarWhereInput[]
    id?: StringFilter<'Likes'> | string
    userId?: StringFilter<'Likes'> | string
    publicAgentId?: StringFilter<'Likes'> | string
    createdAt?: DateTimeFilter<'Likes'> | Date | string
    updatedAt?: DateTimeNullableFilter<'Likes'> | Date | string | null
  }

  export type ReportsUpsertWithWhereUniqueWithoutPublicAgentInput = {
    where: ReportsWhereUniqueInput
    update: XOR<
      ReportsUpdateWithoutPublicAgentInput,
      ReportsUncheckedUpdateWithoutPublicAgentInput
    >
    create: XOR<
      ReportsCreateWithoutPublicAgentInput,
      ReportsUncheckedCreateWithoutPublicAgentInput
    >
  }

  export type ReportsUpdateWithWhereUniqueWithoutPublicAgentInput = {
    where: ReportsWhereUniqueInput
    data: XOR<
      ReportsUpdateWithoutPublicAgentInput,
      ReportsUncheckedUpdateWithoutPublicAgentInput
    >
  }

  export type ReportsUpdateManyWithWhereWithoutPublicAgentInput = {
    where: ReportsScalarWhereInput
    data: XOR<
      ReportsUpdateManyMutationInput,
      ReportsUncheckedUpdateManyWithoutPublicAgentInput
    >
  }

  export type ReportsScalarWhereInput = {
    AND?: ReportsScalarWhereInput | ReportsScalarWhereInput[]
    OR?: ReportsScalarWhereInput[]
    NOT?: ReportsScalarWhereInput | ReportsScalarWhereInput[]
    id?: StringFilter<'Reports'> | string
    publicAgentId?: StringFilter<'Reports'> | string
    createdAt?: DateTimeFilter<'Reports'> | Date | string
    message?: StringFilter<'Reports'> | string
  }

  export type PublicAgentCreateWithoutReportsInput = {
    id?: string
    agentId: string
    userId: string
    madePublic?: Date | string
    deletedAt?: Date | string | null
    description?: string
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
    comments?: CommentsCreateNestedManyWithoutPublicAgentInput
    likes?: LikesCreateNestedManyWithoutPublicAgentInput
  }

  export type PublicAgentUncheckedCreateWithoutReportsInput = {
    id?: string
    agentId: string
    userId: string
    madePublic?: Date | string
    deletedAt?: Date | string | null
    description?: string
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
    comments?: CommentsUncheckedCreateNestedManyWithoutPublicAgentInput
    likes?: LikesUncheckedCreateNestedManyWithoutPublicAgentInput
  }

  export type PublicAgentCreateOrConnectWithoutReportsInput = {
    where: PublicAgentWhereUniqueInput
    create: XOR<
      PublicAgentCreateWithoutReportsInput,
      PublicAgentUncheckedCreateWithoutReportsInput
    >
  }

  export type PublicAgentUpsertWithoutReportsInput = {
    update: XOR<
      PublicAgentUpdateWithoutReportsInput,
      PublicAgentUncheckedUpdateWithoutReportsInput
    >
    create: XOR<
      PublicAgentCreateWithoutReportsInput,
      PublicAgentUncheckedCreateWithoutReportsInput
    >
    where?: PublicAgentWhereInput
  }

  export type PublicAgentUpdateToOneWithWhereWithoutReportsInput = {
    where?: PublicAgentWhereInput
    data: XOR<
      PublicAgentUpdateWithoutReportsInput,
      PublicAgentUncheckedUpdateWithoutReportsInput
    >
  }

  export type PublicAgentUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentsUpdateManyWithoutPublicAgentNestedInput
    likes?: LikesUpdateManyWithoutPublicAgentNestedInput
  }

  export type PublicAgentUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentsUncheckedUpdateManyWithoutPublicAgentNestedInput
    likes?: LikesUncheckedUpdateManyWithoutPublicAgentNestedInput
  }

  export type PublicAgentCreateWithoutLikesInput = {
    id?: string
    agentId: string
    userId: string
    madePublic?: Date | string
    deletedAt?: Date | string | null
    description?: string
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
    comments?: CommentsCreateNestedManyWithoutPublicAgentInput
    Reports?: ReportsCreateNestedManyWithoutPublicAgentInput
  }

  export type PublicAgentUncheckedCreateWithoutLikesInput = {
    id?: string
    agentId: string
    userId: string
    madePublic?: Date | string
    deletedAt?: Date | string | null
    description?: string
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
    comments?: CommentsUncheckedCreateNestedManyWithoutPublicAgentInput
    Reports?: ReportsUncheckedCreateNestedManyWithoutPublicAgentInput
  }

  export type PublicAgentCreateOrConnectWithoutLikesInput = {
    where: PublicAgentWhereUniqueInput
    create: XOR<
      PublicAgentCreateWithoutLikesInput,
      PublicAgentUncheckedCreateWithoutLikesInput
    >
  }

  export type PublicAgentUpsertWithoutLikesInput = {
    update: XOR<
      PublicAgentUpdateWithoutLikesInput,
      PublicAgentUncheckedUpdateWithoutLikesInput
    >
    create: XOR<
      PublicAgentCreateWithoutLikesInput,
      PublicAgentUncheckedCreateWithoutLikesInput
    >
    where?: PublicAgentWhereInput
  }

  export type PublicAgentUpdateToOneWithWhereWithoutLikesInput = {
    where?: PublicAgentWhereInput
    data: XOR<
      PublicAgentUpdateWithoutLikesInput,
      PublicAgentUncheckedUpdateWithoutLikesInput
    >
  }

  export type PublicAgentUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentsUpdateManyWithoutPublicAgentNestedInput
    Reports?: ReportsUpdateManyWithoutPublicAgentNestedInput
  }

  export type PublicAgentUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentsUncheckedUpdateManyWithoutPublicAgentNestedInput
    Reports?: ReportsUncheckedUpdateManyWithoutPublicAgentNestedInput
  }

  export type PublicAgentCreateWithoutCommentsInput = {
    id?: string
    agentId: string
    userId: string
    madePublic?: Date | string
    deletedAt?: Date | string | null
    description?: string
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
    likes?: LikesCreateNestedManyWithoutPublicAgentInput
    Reports?: ReportsCreateNestedManyWithoutPublicAgentInput
  }

  export type PublicAgentUncheckedCreateWithoutCommentsInput = {
    id?: string
    agentId: string
    userId: string
    madePublic?: Date | string
    deletedAt?: Date | string | null
    description?: string
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
    likes?: LikesUncheckedCreateNestedManyWithoutPublicAgentInput
    Reports?: ReportsUncheckedCreateNestedManyWithoutPublicAgentInput
  }

  export type PublicAgentCreateOrConnectWithoutCommentsInput = {
    where: PublicAgentWhereUniqueInput
    create: XOR<
      PublicAgentCreateWithoutCommentsInput,
      PublicAgentUncheckedCreateWithoutCommentsInput
    >
  }

  export type PublicAgentUpsertWithoutCommentsInput = {
    update: XOR<
      PublicAgentUpdateWithoutCommentsInput,
      PublicAgentUncheckedUpdateWithoutCommentsInput
    >
    create: XOR<
      PublicAgentCreateWithoutCommentsInput,
      PublicAgentUncheckedCreateWithoutCommentsInput
    >
    where?: PublicAgentWhereInput
  }

  export type PublicAgentUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PublicAgentWhereInput
    data: XOR<
      PublicAgentUpdateWithoutCommentsInput,
      PublicAgentUncheckedUpdateWithoutCommentsInput
    >
  }

  export type PublicAgentUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    likes?: LikesUpdateManyWithoutPublicAgentNestedInput
    Reports?: ReportsUpdateManyWithoutPublicAgentNestedInput
  }

  export type PublicAgentUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    likes?: LikesUncheckedUpdateManyWithoutPublicAgentNestedInput
    Reports?: ReportsUncheckedUpdateManyWithoutPublicAgentNestedInput
  }

  export type CommentsCreateManyPublicAgentInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type LikesCreateManyPublicAgentInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ReportsCreateManyPublicAgentInput = {
    id?: string
    createdAt?: Date | string
    message: string
  }

  export type CommentsUpdateWithoutPublicAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type CommentsUncheckedUpdateWithoutPublicAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type CommentsUncheckedUpdateManyWithoutPublicAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type LikesUpdateWithoutPublicAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type LikesUncheckedUpdateWithoutPublicAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type LikesUncheckedUpdateManyWithoutPublicAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null
  }

  export type ReportsUpdateWithoutPublicAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ReportsUncheckedUpdateWithoutPublicAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ReportsUncheckedUpdateManyWithoutPublicAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use PublicAgentCountOutputTypeDefaultArgs instead
   */
  export type PublicAgentCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = PublicAgentCountOutputTypeDefaultArgs<ExtArgs>
  /**
   * @deprecated Use ProjectDefaultArgs instead
   */
  export type ProjectArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = ProjectDefaultArgs<ExtArgs>
  /**
   * @deprecated Use TemplateDefaultArgs instead
   */
  export type TemplateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = TemplateDefaultArgs<ExtArgs>
  /**
   * @deprecated Use PublicAgentDefaultArgs instead
   */
  export type PublicAgentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = PublicAgentDefaultArgs<ExtArgs>
  /**
   * @deprecated Use ReportsDefaultArgs instead
   */
  export type ReportsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = ReportsDefaultArgs<ExtArgs>
  /**
   * @deprecated Use LikesDefaultArgs instead
   */
  export type LikesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = LikesDefaultArgs<ExtArgs>
  /**
   * @deprecated Use CommentsDefaultArgs instead
   */
  export type CommentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = CommentsDefaultArgs<ExtArgs>
  /**
   * @deprecated Use AnonymousUserDefaultArgs instead
   */
  export type AnonymousUserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = AnonymousUserDefaultArgs<ExtArgs>
  /**
   * @deprecated Use BudgetDefaultArgs instead
   */
  export type BudgetArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = BudgetDefaultArgs<ExtArgs>
  /**
   * @deprecated Use PromotionDefaultArgs instead
   */
  export type PromotionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = PromotionDefaultArgs<ExtArgs>
  /**
   * @deprecated Use agentsDefaultArgs instead
   */
  export type agentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = agentsDefaultArgs<ExtArgs>
  /**
   * @deprecated Use spellsDefaultArgs instead
   */
  export type spellsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = spellsDefaultArgs<ExtArgs>
  /**
   * @deprecated Use documentsDefaultArgs instead
   */
  export type documentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = documentsDefaultArgs<ExtArgs>
  /**
   * @deprecated Use customersDefaultArgs instead
   */
  export type customersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = customersDefaultArgs<ExtArgs>
  /**
   * @deprecated Use subscriptionsDefaultArgs instead
   */
  export type subscriptionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = subscriptionsDefaultArgs<ExtArgs>
  /**
   * @deprecated Use productsDefaultArgs instead
   */
  export type productsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = productsDefaultArgs<ExtArgs>
  /**
   * @deprecated Use pricesDefaultArgs instead
   */
  export type pricesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = pricesDefaultArgs<ExtArgs>

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
