
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Agency
 * 
 */
export type Agency = $Result.DefaultSelection<Prisma.$AgencyPayload>
/**
 * Model SocialAccount
 * 
 */
export type SocialAccount = $Result.DefaultSelection<Prisma.$SocialAccountPayload>
/**
 * Model CategoryGroup
 * 
 */
export type CategoryGroup = $Result.DefaultSelection<Prisma.$CategoryGroupPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Listing
 * 
 */
export type Listing = $Result.DefaultSelection<Prisma.$ListingPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  AGENCY: 'AGENCY',
  MODERATOR: 'MODERATOR',
  ADMIN: 'ADMIN',
  SUPERADMIN: 'SUPERADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AgencyType: {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE'
};

export type AgencyType = (typeof AgencyType)[keyof typeof AgencyType]


export const SubscriptionType: {
  FREE: 'FREE',
  PRO: 'PRO',
  PARTNER: 'PARTNER'
};

export type SubscriptionType = (typeof SubscriptionType)[keyof typeof SubscriptionType]


export const VerificationStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus]


export const ListingStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type ListingStatus = (typeof ListingStatus)[keyof typeof ListingStatus]


export const SocialProvider: {
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK'
};

export type SocialProvider = (typeof SocialProvider)[keyof typeof SocialProvider]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AgencyType = $Enums.AgencyType

export const AgencyType: typeof $Enums.AgencyType

export type SubscriptionType = $Enums.SubscriptionType

export const SubscriptionType: typeof $Enums.SubscriptionType

export type VerificationStatus = $Enums.VerificationStatus

export const VerificationStatus: typeof $Enums.VerificationStatus

export type ListingStatus = $Enums.ListingStatus

export const ListingStatus: typeof $Enums.ListingStatus

export type SocialProvider = $Enums.SocialProvider

export const SocialProvider: typeof $Enums.SocialProvider

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agency`: Exposes CRUD operations for the **Agency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agencies
    * const agencies = await prisma.agency.findMany()
    * ```
    */
  get agency(): Prisma.AgencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialAccount`: Exposes CRUD operations for the **SocialAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialAccounts
    * const socialAccounts = await prisma.socialAccount.findMany()
    * ```
    */
  get socialAccount(): Prisma.SocialAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryGroup`: Exposes CRUD operations for the **CategoryGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryGroups
    * const categoryGroups = await prisma.categoryGroup.findMany()
    * ```
    */
  get categoryGroup(): Prisma.CategoryGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listing`: Exposes CRUD operations for the **Listing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listings
    * const listings = await prisma.listing.findMany()
    * ```
    */
  get listing(): Prisma.ListingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Account: 'Account',
    User: 'User',
    Agency: 'Agency',
    SocialAccount: 'SocialAccount',
    CategoryGroup: 'CategoryGroup',
    Category: 'Category',
    Listing: 'Listing',
    Location: 'Location'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "user" | "agency" | "socialAccount" | "categoryGroup" | "category" | "listing" | "location"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Agency: {
        payload: Prisma.$AgencyPayload<ExtArgs>
        fields: Prisma.AgencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          findFirst: {
            args: Prisma.AgencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          findMany: {
            args: Prisma.AgencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          create: {
            args: Prisma.AgencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          createMany: {
            args: Prisma.AgencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          delete: {
            args: Prisma.AgencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          update: {
            args: Prisma.AgencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          deleteMany: {
            args: Prisma.AgencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          upsert: {
            args: Prisma.AgencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          aggregate: {
            args: Prisma.AgencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgency>
          }
          groupBy: {
            args: Prisma.AgencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgencyCountArgs<ExtArgs>
            result: $Utils.Optional<AgencyCountAggregateOutputType> | number
          }
        }
      }
      SocialAccount: {
        payload: Prisma.$SocialAccountPayload<ExtArgs>
        fields: Prisma.SocialAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>
          }
          findFirst: {
            args: Prisma.SocialAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>
          }
          findMany: {
            args: Prisma.SocialAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>[]
          }
          create: {
            args: Prisma.SocialAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>
          }
          createMany: {
            args: Prisma.SocialAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>[]
          }
          delete: {
            args: Prisma.SocialAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>
          }
          update: {
            args: Prisma.SocialAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>
          }
          deleteMany: {
            args: Prisma.SocialAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>[]
          }
          upsert: {
            args: Prisma.SocialAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>
          }
          aggregate: {
            args: Prisma.SocialAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialAccount>
          }
          groupBy: {
            args: Prisma.SocialAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialAccountCountArgs<ExtArgs>
            result: $Utils.Optional<SocialAccountCountAggregateOutputType> | number
          }
        }
      }
      CategoryGroup: {
        payload: Prisma.$CategoryGroupPayload<ExtArgs>
        fields: Prisma.CategoryGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryGroupPayload>
          }
          findFirst: {
            args: Prisma.CategoryGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryGroupPayload>
          }
          findMany: {
            args: Prisma.CategoryGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryGroupPayload>[]
          }
          create: {
            args: Prisma.CategoryGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryGroupPayload>
          }
          createMany: {
            args: Prisma.CategoryGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryGroupPayload>[]
          }
          delete: {
            args: Prisma.CategoryGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryGroupPayload>
          }
          update: {
            args: Prisma.CategoryGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryGroupPayload>
          }
          deleteMany: {
            args: Prisma.CategoryGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryGroupPayload>[]
          }
          upsert: {
            args: Prisma.CategoryGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryGroupPayload>
          }
          aggregate: {
            args: Prisma.CategoryGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryGroup>
          }
          groupBy: {
            args: Prisma.CategoryGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryGroupCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Listing: {
        payload: Prisma.$ListingPayload<ExtArgs>
        fields: Prisma.ListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findFirst: {
            args: Prisma.ListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findMany: {
            args: Prisma.ListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          create: {
            args: Prisma.ListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          createMany: {
            args: Prisma.ListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          delete: {
            args: Prisma.ListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          update: {
            args: Prisma.ListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          deleteMany: {
            args: Prisma.ListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          upsert: {
            args: Prisma.ListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          aggregate: {
            args: Prisma.ListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListing>
          }
          groupBy: {
            args: Prisma.ListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingCountArgs<ExtArgs>
            result: $Utils.Optional<ListingCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    user?: UserOmit
    agency?: AgencyOmit
    socialAccount?: SocialAccountOmit
    categoryGroup?: CategoryGroupOmit
    category?: CategoryOmit
    listing?: ListingOmit
    location?: LocationOmit
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
    | 'updateManyAndReturn'
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
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    SocialAccounts: number
    listings: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SocialAccounts?: boolean | AccountCountOutputTypeCountSocialAccountsArgs
    listings?: boolean | AccountCountOutputTypeCountListingsArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountSocialAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialAccountWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
  }


  /**
   * Count Type CategoryGroupCountOutputType
   */

  export type CategoryGroupCountOutputType = {
    categories: number
  }

  export type CategoryGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | CategoryGroupCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoryGroupCountOutputType without action
   */
  export type CategoryGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryGroupCountOutputType
     */
    select?: CategoryGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryGroupCountOutputType without action
   */
  export type CategoryGroupCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    listings: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | CategoryCountOutputTypeCountListingsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    listings: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | LocationCountOutputTypeCountListingsArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    rating: number | null
  }

  export type AccountSumAggregateOutputType = {
    rating: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    avatarUrl: string | null
    isEmailVerified: boolean | null
    isSubscribed: boolean | null
    subscriptionType: $Enums.SubscriptionType | null
    rating: number | null
    role: $Enums.Role | null
    isActive: boolean | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    avatarUrl: string | null
    isEmailVerified: boolean | null
    isSubscribed: boolean | null
    subscriptionType: $Enums.SubscriptionType | null
    rating: number | null
    role: $Enums.Role | null
    isActive: boolean | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    phoneNumber: number
    password: number
    avatarUrl: number
    isEmailVerified: number
    isSubscribed: number
    subscriptionType: number
    rating: number
    role: number
    isActive: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    rating?: true
  }

  export type AccountSumAggregateInputType = {
    rating?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    phoneNumber?: true
    password?: true
    avatarUrl?: true
    isEmailVerified?: true
    isSubscribed?: true
    subscriptionType?: true
    rating?: true
    role?: true
    isActive?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    phoneNumber?: true
    password?: true
    avatarUrl?: true
    isEmailVerified?: true
    isSubscribed?: true
    subscriptionType?: true
    rating?: true
    role?: true
    isActive?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    phoneNumber?: true
    password?: true
    avatarUrl?: true
    isEmailVerified?: true
    isSubscribed?: true
    subscriptionType?: true
    rating?: true
    role?: true
    isActive?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    phoneNumber: string
    password: string | null
    avatarUrl: string | null
    isEmailVerified: boolean
    isSubscribed: boolean
    subscriptionType: $Enums.SubscriptionType
    rating: number
    role: $Enums.Role
    isActive: boolean
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    avatarUrl?: boolean
    isEmailVerified?: boolean
    isSubscribed?: boolean
    subscriptionType?: boolean
    rating?: boolean
    role?: boolean
    isActive?: boolean
    user?: boolean | Account$userArgs<ExtArgs>
    agency?: boolean | Account$agencyArgs<ExtArgs>
    SocialAccounts?: boolean | Account$SocialAccountsArgs<ExtArgs>
    listings?: boolean | Account$listingsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    avatarUrl?: boolean
    isEmailVerified?: boolean
    isSubscribed?: boolean
    subscriptionType?: boolean
    rating?: boolean
    role?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    avatarUrl?: boolean
    isEmailVerified?: boolean
    isSubscribed?: boolean
    subscriptionType?: boolean
    rating?: boolean
    role?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    avatarUrl?: boolean
    isEmailVerified?: boolean
    isSubscribed?: boolean
    subscriptionType?: boolean
    rating?: boolean
    role?: boolean
    isActive?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "email" | "phoneNumber" | "password" | "avatarUrl" | "isEmailVerified" | "isSubscribed" | "subscriptionType" | "rating" | "role" | "isActive", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Account$userArgs<ExtArgs>
    agency?: boolean | Account$agencyArgs<ExtArgs>
    SocialAccounts?: boolean | Account$SocialAccountsArgs<ExtArgs>
    listings?: boolean | Account$listingsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      agency: Prisma.$AgencyPayload<ExtArgs> | null
      SocialAccounts: Prisma.$SocialAccountPayload<ExtArgs>[]
      listings: Prisma.$ListingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      email: string
      phoneNumber: string
      password: string | null
      avatarUrl: string | null
      isEmailVerified: boolean
      isSubscribed: boolean
      subscriptionType: $Enums.SubscriptionType
      rating: number
      role: $Enums.Role
      isActive: boolean
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Account$userArgs<ExtArgs> = {}>(args?: Subset<T, Account$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    agency<T extends Account$agencyArgs<ExtArgs> = {}>(args?: Subset<T, Account$agencyArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    SocialAccounts<T extends Account$SocialAccountsArgs<ExtArgs> = {}>(args?: Subset<T, Account$SocialAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listings<T extends Account$listingsArgs<ExtArgs> = {}>(args?: Subset<T, Account$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
    readonly email: FieldRef<"Account", 'String'>
    readonly phoneNumber: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly avatarUrl: FieldRef<"Account", 'String'>
    readonly isEmailVerified: FieldRef<"Account", 'Boolean'>
    readonly isSubscribed: FieldRef<"Account", 'Boolean'>
    readonly subscriptionType: FieldRef<"Account", 'SubscriptionType'>
    readonly rating: FieldRef<"Account", 'Float'>
    readonly role: FieldRef<"Account", 'Role'>
    readonly isActive: FieldRef<"Account", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.user
   */
  export type Account$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Account.agency
   */
  export type Account$agencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    where?: AgencyWhereInput
  }

  /**
   * Account.SocialAccounts
   */
  export type Account$SocialAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    where?: SocialAccountWhereInput
    orderBy?: SocialAccountOrderByWithRelationInput | SocialAccountOrderByWithRelationInput[]
    cursor?: SocialAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialAccountScalarFieldEnum | SocialAccountScalarFieldEnum[]
  }

  /**
   * Account.listings
   */
  export type Account$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    cursor?: ListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    accountId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    accountId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    accountId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    accountId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    accountId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    accountId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    accountId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    accountId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "accountId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      accountId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly accountId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Agency
   */

  export type AggregateAgency = {
    _count: AgencyCountAggregateOutputType | null
    _min: AgencyMinAggregateOutputType | null
    _max: AgencyMaxAggregateOutputType | null
  }

  export type AgencyMinAggregateOutputType = {
    id: string | null
    name: string | null
    bannerUrl: string | null
    address: string | null
    website: string | null
    agencyType: $Enums.AgencyType | null
    isVerified: boolean | null
    verificationStatus: $Enums.VerificationStatus | null
    accountId: string | null
  }

  export type AgencyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    bannerUrl: string | null
    address: string | null
    website: string | null
    agencyType: $Enums.AgencyType | null
    isVerified: boolean | null
    verificationStatus: $Enums.VerificationStatus | null
    accountId: string | null
  }

  export type AgencyCountAggregateOutputType = {
    id: number
    name: number
    socialMediaLinks: number
    bannerUrl: number
    address: number
    website: number
    agencyType: number
    isVerified: number
    verificationStatus: number
    accountId: number
    _all: number
  }


  export type AgencyMinAggregateInputType = {
    id?: true
    name?: true
    bannerUrl?: true
    address?: true
    website?: true
    agencyType?: true
    isVerified?: true
    verificationStatus?: true
    accountId?: true
  }

  export type AgencyMaxAggregateInputType = {
    id?: true
    name?: true
    bannerUrl?: true
    address?: true
    website?: true
    agencyType?: true
    isVerified?: true
    verificationStatus?: true
    accountId?: true
  }

  export type AgencyCountAggregateInputType = {
    id?: true
    name?: true
    socialMediaLinks?: true
    bannerUrl?: true
    address?: true
    website?: true
    agencyType?: true
    isVerified?: true
    verificationStatus?: true
    accountId?: true
    _all?: true
  }

  export type AgencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agency to aggregate.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agencies
    **/
    _count?: true | AgencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgencyMaxAggregateInputType
  }

  export type GetAgencyAggregateType<T extends AgencyAggregateArgs> = {
        [P in keyof T & keyof AggregateAgency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgency[P]>
      : GetScalarType<T[P], AggregateAgency[P]>
  }




  export type AgencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgencyWhereInput
    orderBy?: AgencyOrderByWithAggregationInput | AgencyOrderByWithAggregationInput[]
    by: AgencyScalarFieldEnum[] | AgencyScalarFieldEnum
    having?: AgencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgencyCountAggregateInputType | true
    _min?: AgencyMinAggregateInputType
    _max?: AgencyMaxAggregateInputType
  }

  export type AgencyGroupByOutputType = {
    id: string
    name: string
    socialMediaLinks: string[]
    bannerUrl: string | null
    address: string | null
    website: string | null
    agencyType: $Enums.AgencyType
    isVerified: boolean
    verificationStatus: $Enums.VerificationStatus
    accountId: string
    _count: AgencyCountAggregateOutputType | null
    _min: AgencyMinAggregateOutputType | null
    _max: AgencyMaxAggregateOutputType | null
  }

  type GetAgencyGroupByPayload<T extends AgencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgencyGroupByOutputType[P]>
            : GetScalarType<T[P], AgencyGroupByOutputType[P]>
        }
      >
    >


  export type AgencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    socialMediaLinks?: boolean
    bannerUrl?: boolean
    address?: boolean
    website?: boolean
    agencyType?: boolean
    isVerified?: boolean
    verificationStatus?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    socialMediaLinks?: boolean
    bannerUrl?: boolean
    address?: boolean
    website?: boolean
    agencyType?: boolean
    isVerified?: boolean
    verificationStatus?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    socialMediaLinks?: boolean
    bannerUrl?: boolean
    address?: boolean
    website?: boolean
    agencyType?: boolean
    isVerified?: boolean
    verificationStatus?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectScalar = {
    id?: boolean
    name?: boolean
    socialMediaLinks?: boolean
    bannerUrl?: boolean
    address?: boolean
    website?: boolean
    agencyType?: boolean
    isVerified?: boolean
    verificationStatus?: boolean
    accountId?: boolean
  }

  export type AgencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "socialMediaLinks" | "bannerUrl" | "address" | "website" | "agencyType" | "isVerified" | "verificationStatus" | "accountId", ExtArgs["result"]["agency"]>
  export type AgencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type AgencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type AgencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $AgencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agency"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      socialMediaLinks: string[]
      bannerUrl: string | null
      address: string | null
      website: string | null
      agencyType: $Enums.AgencyType
      isVerified: boolean
      verificationStatus: $Enums.VerificationStatus
      accountId: string
    }, ExtArgs["result"]["agency"]>
    composites: {}
  }

  type AgencyGetPayload<S extends boolean | null | undefined | AgencyDefaultArgs> = $Result.GetResult<Prisma.$AgencyPayload, S>

  type AgencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgencyCountAggregateInputType | true
    }

  export interface AgencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agency'], meta: { name: 'Agency' } }
    /**
     * Find zero or one Agency that matches the filter.
     * @param {AgencyFindUniqueArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgencyFindUniqueArgs>(args: SelectSubset<T, AgencyFindUniqueArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgencyFindUniqueOrThrowArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgencyFindUniqueOrThrowArgs>(args: SelectSubset<T, AgencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindFirstArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgencyFindFirstArgs>(args?: SelectSubset<T, AgencyFindFirstArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindFirstOrThrowArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgencyFindFirstOrThrowArgs>(args?: SelectSubset<T, AgencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agencies
     * const agencies = await prisma.agency.findMany()
     * 
     * // Get first 10 Agencies
     * const agencies = await prisma.agency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agencyWithIdOnly = await prisma.agency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgencyFindManyArgs>(args?: SelectSubset<T, AgencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agency.
     * @param {AgencyCreateArgs} args - Arguments to create a Agency.
     * @example
     * // Create one Agency
     * const Agency = await prisma.agency.create({
     *   data: {
     *     // ... data to create a Agency
     *   }
     * })
     * 
     */
    create<T extends AgencyCreateArgs>(args: SelectSubset<T, AgencyCreateArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agencies.
     * @param {AgencyCreateManyArgs} args - Arguments to create many Agencies.
     * @example
     * // Create many Agencies
     * const agency = await prisma.agency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgencyCreateManyArgs>(args?: SelectSubset<T, AgencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agencies and returns the data saved in the database.
     * @param {AgencyCreateManyAndReturnArgs} args - Arguments to create many Agencies.
     * @example
     * // Create many Agencies
     * const agency = await prisma.agency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agencies and only return the `id`
     * const agencyWithIdOnly = await prisma.agency.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgencyCreateManyAndReturnArgs>(args?: SelectSubset<T, AgencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agency.
     * @param {AgencyDeleteArgs} args - Arguments to delete one Agency.
     * @example
     * // Delete one Agency
     * const Agency = await prisma.agency.delete({
     *   where: {
     *     // ... filter to delete one Agency
     *   }
     * })
     * 
     */
    delete<T extends AgencyDeleteArgs>(args: SelectSubset<T, AgencyDeleteArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agency.
     * @param {AgencyUpdateArgs} args - Arguments to update one Agency.
     * @example
     * // Update one Agency
     * const agency = await prisma.agency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgencyUpdateArgs>(args: SelectSubset<T, AgencyUpdateArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agencies.
     * @param {AgencyDeleteManyArgs} args - Arguments to filter Agencies to delete.
     * @example
     * // Delete a few Agencies
     * const { count } = await prisma.agency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgencyDeleteManyArgs>(args?: SelectSubset<T, AgencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agencies
     * const agency = await prisma.agency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgencyUpdateManyArgs>(args: SelectSubset<T, AgencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agencies and returns the data updated in the database.
     * @param {AgencyUpdateManyAndReturnArgs} args - Arguments to update many Agencies.
     * @example
     * // Update many Agencies
     * const agency = await prisma.agency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agencies and only return the `id`
     * const agencyWithIdOnly = await prisma.agency.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgencyUpdateManyAndReturnArgs>(args: SelectSubset<T, AgencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agency.
     * @param {AgencyUpsertArgs} args - Arguments to update or create a Agency.
     * @example
     * // Update or create a Agency
     * const agency = await prisma.agency.upsert({
     *   create: {
     *     // ... data to create a Agency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agency we want to update
     *   }
     * })
     */
    upsert<T extends AgencyUpsertArgs>(args: SelectSubset<T, AgencyUpsertArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyCountArgs} args - Arguments to filter Agencies to count.
     * @example
     * // Count the number of Agencies
     * const count = await prisma.agency.count({
     *   where: {
     *     // ... the filter for the Agencies we want to count
     *   }
     * })
    **/
    count<T extends AgencyCountArgs>(
      args?: Subset<T, AgencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgencyAggregateArgs>(args: Subset<T, AgencyAggregateArgs>): Prisma.PrismaPromise<GetAgencyAggregateType<T>>

    /**
     * Group by Agency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyGroupByArgs} args - Group by arguments.
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
      T extends AgencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgencyGroupByArgs['orderBy'] }
        : { orderBy?: AgencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agency model
   */
  readonly fields: AgencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Agency model
   */
  interface AgencyFieldRefs {
    readonly id: FieldRef<"Agency", 'String'>
    readonly name: FieldRef<"Agency", 'String'>
    readonly socialMediaLinks: FieldRef<"Agency", 'String[]'>
    readonly bannerUrl: FieldRef<"Agency", 'String'>
    readonly address: FieldRef<"Agency", 'String'>
    readonly website: FieldRef<"Agency", 'String'>
    readonly agencyType: FieldRef<"Agency", 'AgencyType'>
    readonly isVerified: FieldRef<"Agency", 'Boolean'>
    readonly verificationStatus: FieldRef<"Agency", 'VerificationStatus'>
    readonly accountId: FieldRef<"Agency", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Agency findUnique
   */
  export type AgencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency findUniqueOrThrow
   */
  export type AgencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency findFirst
   */
  export type AgencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencies.
     */
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency findFirstOrThrow
   */
  export type AgencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencies.
     */
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency findMany
   */
  export type AgencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agencies to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency create
   */
  export type AgencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The data needed to create a Agency.
     */
    data: XOR<AgencyCreateInput, AgencyUncheckedCreateInput>
  }

  /**
   * Agency createMany
   */
  export type AgencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agencies.
     */
    data: AgencyCreateManyInput | AgencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agency createManyAndReturn
   */
  export type AgencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * The data used to create many Agencies.
     */
    data: AgencyCreateManyInput | AgencyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agency update
   */
  export type AgencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The data needed to update a Agency.
     */
    data: XOR<AgencyUpdateInput, AgencyUncheckedUpdateInput>
    /**
     * Choose, which Agency to update.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency updateMany
   */
  export type AgencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agencies.
     */
    data: XOR<AgencyUpdateManyMutationInput, AgencyUncheckedUpdateManyInput>
    /**
     * Filter which Agencies to update
     */
    where?: AgencyWhereInput
    /**
     * Limit how many Agencies to update.
     */
    limit?: number
  }

  /**
   * Agency updateManyAndReturn
   */
  export type AgencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * The data used to update Agencies.
     */
    data: XOR<AgencyUpdateManyMutationInput, AgencyUncheckedUpdateManyInput>
    /**
     * Filter which Agencies to update
     */
    where?: AgencyWhereInput
    /**
     * Limit how many Agencies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agency upsert
   */
  export type AgencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The filter to search for the Agency to update in case it exists.
     */
    where: AgencyWhereUniqueInput
    /**
     * In case the Agency found by the `where` argument doesn't exist, create a new Agency with this data.
     */
    create: XOR<AgencyCreateInput, AgencyUncheckedCreateInput>
    /**
     * In case the Agency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgencyUpdateInput, AgencyUncheckedUpdateInput>
  }

  /**
   * Agency delete
   */
  export type AgencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter which Agency to delete.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency deleteMany
   */
  export type AgencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agencies to delete
     */
    where?: AgencyWhereInput
    /**
     * Limit how many Agencies to delete.
     */
    limit?: number
  }

  /**
   * Agency without action
   */
  export type AgencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
  }


  /**
   * Model SocialAccount
   */

  export type AggregateSocialAccount = {
    _count: SocialAccountCountAggregateOutputType | null
    _min: SocialAccountMinAggregateOutputType | null
    _max: SocialAccountMaxAggregateOutputType | null
  }

  export type SocialAccountMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    provider: $Enums.SocialProvider | null
    providerId: string | null
    accountId: string | null
  }

  export type SocialAccountMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    provider: $Enums.SocialProvider | null
    providerId: string | null
    accountId: string | null
  }

  export type SocialAccountCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    provider: number
    providerId: number
    accountId: number
    _all: number
  }


  export type SocialAccountMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    provider?: true
    providerId?: true
    accountId?: true
  }

  export type SocialAccountMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    provider?: true
    providerId?: true
    accountId?: true
  }

  export type SocialAccountCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    provider?: true
    providerId?: true
    accountId?: true
    _all?: true
  }

  export type SocialAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialAccount to aggregate.
     */
    where?: SocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialAccounts to fetch.
     */
    orderBy?: SocialAccountOrderByWithRelationInput | SocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialAccounts
    **/
    _count?: true | SocialAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialAccountMaxAggregateInputType
  }

  export type GetSocialAccountAggregateType<T extends SocialAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialAccount[P]>
      : GetScalarType<T[P], AggregateSocialAccount[P]>
  }




  export type SocialAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialAccountWhereInput
    orderBy?: SocialAccountOrderByWithAggregationInput | SocialAccountOrderByWithAggregationInput[]
    by: SocialAccountScalarFieldEnum[] | SocialAccountScalarFieldEnum
    having?: SocialAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialAccountCountAggregateInputType | true
    _min?: SocialAccountMinAggregateInputType
    _max?: SocialAccountMaxAggregateInputType
  }

  export type SocialAccountGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    provider: $Enums.SocialProvider
    providerId: string
    accountId: string
    _count: SocialAccountCountAggregateOutputType | null
    _min: SocialAccountMinAggregateOutputType | null
    _max: SocialAccountMaxAggregateOutputType | null
  }

  type GetSocialAccountGroupByPayload<T extends SocialAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialAccountGroupByOutputType[P]>
            : GetScalarType<T[P], SocialAccountGroupByOutputType[P]>
        }
      >
    >


  export type SocialAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    providerId?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialAccount"]>

  export type SocialAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    providerId?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialAccount"]>

  export type SocialAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    providerId?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialAccount"]>

  export type SocialAccountSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    providerId?: boolean
    accountId?: boolean
  }

  export type SocialAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "provider" | "providerId" | "accountId", ExtArgs["result"]["socialAccount"]>
  export type SocialAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type SocialAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type SocialAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $SocialAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialAccount"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      provider: $Enums.SocialProvider
      providerId: string
      accountId: string
    }, ExtArgs["result"]["socialAccount"]>
    composites: {}
  }

  type SocialAccountGetPayload<S extends boolean | null | undefined | SocialAccountDefaultArgs> = $Result.GetResult<Prisma.$SocialAccountPayload, S>

  type SocialAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialAccountCountAggregateInputType | true
    }

  export interface SocialAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialAccount'], meta: { name: 'SocialAccount' } }
    /**
     * Find zero or one SocialAccount that matches the filter.
     * @param {SocialAccountFindUniqueArgs} args - Arguments to find a SocialAccount
     * @example
     * // Get one SocialAccount
     * const socialAccount = await prisma.socialAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialAccountFindUniqueArgs>(args: SelectSubset<T, SocialAccountFindUniqueArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialAccountFindUniqueOrThrowArgs} args - Arguments to find a SocialAccount
     * @example
     * // Get one SocialAccount
     * const socialAccount = await prisma.socialAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountFindFirstArgs} args - Arguments to find a SocialAccount
     * @example
     * // Get one SocialAccount
     * const socialAccount = await prisma.socialAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialAccountFindFirstArgs>(args?: SelectSubset<T, SocialAccountFindFirstArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountFindFirstOrThrowArgs} args - Arguments to find a SocialAccount
     * @example
     * // Get one SocialAccount
     * const socialAccount = await prisma.socialAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialAccounts
     * const socialAccounts = await prisma.socialAccount.findMany()
     * 
     * // Get first 10 SocialAccounts
     * const socialAccounts = await prisma.socialAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialAccountWithIdOnly = await prisma.socialAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialAccountFindManyArgs>(args?: SelectSubset<T, SocialAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialAccount.
     * @param {SocialAccountCreateArgs} args - Arguments to create a SocialAccount.
     * @example
     * // Create one SocialAccount
     * const SocialAccount = await prisma.socialAccount.create({
     *   data: {
     *     // ... data to create a SocialAccount
     *   }
     * })
     * 
     */
    create<T extends SocialAccountCreateArgs>(args: SelectSubset<T, SocialAccountCreateArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialAccounts.
     * @param {SocialAccountCreateManyArgs} args - Arguments to create many SocialAccounts.
     * @example
     * // Create many SocialAccounts
     * const socialAccount = await prisma.socialAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialAccountCreateManyArgs>(args?: SelectSubset<T, SocialAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialAccounts and returns the data saved in the database.
     * @param {SocialAccountCreateManyAndReturnArgs} args - Arguments to create many SocialAccounts.
     * @example
     * // Create many SocialAccounts
     * const socialAccount = await prisma.socialAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialAccounts and only return the `id`
     * const socialAccountWithIdOnly = await prisma.socialAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialAccount.
     * @param {SocialAccountDeleteArgs} args - Arguments to delete one SocialAccount.
     * @example
     * // Delete one SocialAccount
     * const SocialAccount = await prisma.socialAccount.delete({
     *   where: {
     *     // ... filter to delete one SocialAccount
     *   }
     * })
     * 
     */
    delete<T extends SocialAccountDeleteArgs>(args: SelectSubset<T, SocialAccountDeleteArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialAccount.
     * @param {SocialAccountUpdateArgs} args - Arguments to update one SocialAccount.
     * @example
     * // Update one SocialAccount
     * const socialAccount = await prisma.socialAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialAccountUpdateArgs>(args: SelectSubset<T, SocialAccountUpdateArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialAccounts.
     * @param {SocialAccountDeleteManyArgs} args - Arguments to filter SocialAccounts to delete.
     * @example
     * // Delete a few SocialAccounts
     * const { count } = await prisma.socialAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialAccountDeleteManyArgs>(args?: SelectSubset<T, SocialAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialAccounts
     * const socialAccount = await prisma.socialAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialAccountUpdateManyArgs>(args: SelectSubset<T, SocialAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialAccounts and returns the data updated in the database.
     * @param {SocialAccountUpdateManyAndReturnArgs} args - Arguments to update many SocialAccounts.
     * @example
     * // Update many SocialAccounts
     * const socialAccount = await prisma.socialAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialAccounts and only return the `id`
     * const socialAccountWithIdOnly = await prisma.socialAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SocialAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialAccount.
     * @param {SocialAccountUpsertArgs} args - Arguments to update or create a SocialAccount.
     * @example
     * // Update or create a SocialAccount
     * const socialAccount = await prisma.socialAccount.upsert({
     *   create: {
     *     // ... data to create a SocialAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialAccount we want to update
     *   }
     * })
     */
    upsert<T extends SocialAccountUpsertArgs>(args: SelectSubset<T, SocialAccountUpsertArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountCountArgs} args - Arguments to filter SocialAccounts to count.
     * @example
     * // Count the number of SocialAccounts
     * const count = await prisma.socialAccount.count({
     *   where: {
     *     // ... the filter for the SocialAccounts we want to count
     *   }
     * })
    **/
    count<T extends SocialAccountCountArgs>(
      args?: Subset<T, SocialAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialAccountAggregateArgs>(args: Subset<T, SocialAccountAggregateArgs>): Prisma.PrismaPromise<GetSocialAccountAggregateType<T>>

    /**
     * Group by SocialAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountGroupByArgs} args - Group by arguments.
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
      T extends SocialAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialAccountGroupByArgs['orderBy'] }
        : { orderBy?: SocialAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialAccount model
   */
  readonly fields: SocialAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SocialAccount model
   */
  interface SocialAccountFieldRefs {
    readonly id: FieldRef<"SocialAccount", 'String'>
    readonly createdAt: FieldRef<"SocialAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"SocialAccount", 'DateTime'>
    readonly provider: FieldRef<"SocialAccount", 'SocialProvider'>
    readonly providerId: FieldRef<"SocialAccount", 'String'>
    readonly accountId: FieldRef<"SocialAccount", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SocialAccount findUnique
   */
  export type SocialAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which SocialAccount to fetch.
     */
    where: SocialAccountWhereUniqueInput
  }

  /**
   * SocialAccount findUniqueOrThrow
   */
  export type SocialAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which SocialAccount to fetch.
     */
    where: SocialAccountWhereUniqueInput
  }

  /**
   * SocialAccount findFirst
   */
  export type SocialAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which SocialAccount to fetch.
     */
    where?: SocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialAccounts to fetch.
     */
    orderBy?: SocialAccountOrderByWithRelationInput | SocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialAccounts.
     */
    cursor?: SocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialAccounts.
     */
    distinct?: SocialAccountScalarFieldEnum | SocialAccountScalarFieldEnum[]
  }

  /**
   * SocialAccount findFirstOrThrow
   */
  export type SocialAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which SocialAccount to fetch.
     */
    where?: SocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialAccounts to fetch.
     */
    orderBy?: SocialAccountOrderByWithRelationInput | SocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialAccounts.
     */
    cursor?: SocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialAccounts.
     */
    distinct?: SocialAccountScalarFieldEnum | SocialAccountScalarFieldEnum[]
  }

  /**
   * SocialAccount findMany
   */
  export type SocialAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which SocialAccounts to fetch.
     */
    where?: SocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialAccounts to fetch.
     */
    orderBy?: SocialAccountOrderByWithRelationInput | SocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialAccounts.
     */
    cursor?: SocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialAccounts.
     */
    skip?: number
    distinct?: SocialAccountScalarFieldEnum | SocialAccountScalarFieldEnum[]
  }

  /**
   * SocialAccount create
   */
  export type SocialAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialAccount.
     */
    data: XOR<SocialAccountCreateInput, SocialAccountUncheckedCreateInput>
  }

  /**
   * SocialAccount createMany
   */
  export type SocialAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialAccounts.
     */
    data: SocialAccountCreateManyInput | SocialAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialAccount createManyAndReturn
   */
  export type SocialAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * The data used to create many SocialAccounts.
     */
    data: SocialAccountCreateManyInput | SocialAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialAccount update
   */
  export type SocialAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialAccount.
     */
    data: XOR<SocialAccountUpdateInput, SocialAccountUncheckedUpdateInput>
    /**
     * Choose, which SocialAccount to update.
     */
    where: SocialAccountWhereUniqueInput
  }

  /**
   * SocialAccount updateMany
   */
  export type SocialAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialAccounts.
     */
    data: XOR<SocialAccountUpdateManyMutationInput, SocialAccountUncheckedUpdateManyInput>
    /**
     * Filter which SocialAccounts to update
     */
    where?: SocialAccountWhereInput
    /**
     * Limit how many SocialAccounts to update.
     */
    limit?: number
  }

  /**
   * SocialAccount updateManyAndReturn
   */
  export type SocialAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * The data used to update SocialAccounts.
     */
    data: XOR<SocialAccountUpdateManyMutationInput, SocialAccountUncheckedUpdateManyInput>
    /**
     * Filter which SocialAccounts to update
     */
    where?: SocialAccountWhereInput
    /**
     * Limit how many SocialAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialAccount upsert
   */
  export type SocialAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialAccount to update in case it exists.
     */
    where: SocialAccountWhereUniqueInput
    /**
     * In case the SocialAccount found by the `where` argument doesn't exist, create a new SocialAccount with this data.
     */
    create: XOR<SocialAccountCreateInput, SocialAccountUncheckedCreateInput>
    /**
     * In case the SocialAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialAccountUpdateInput, SocialAccountUncheckedUpdateInput>
  }

  /**
   * SocialAccount delete
   */
  export type SocialAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * Filter which SocialAccount to delete.
     */
    where: SocialAccountWhereUniqueInput
  }

  /**
   * SocialAccount deleteMany
   */
  export type SocialAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialAccounts to delete
     */
    where?: SocialAccountWhereInput
    /**
     * Limit how many SocialAccounts to delete.
     */
    limit?: number
  }

  /**
   * SocialAccount without action
   */
  export type SocialAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
  }


  /**
   * Model CategoryGroup
   */

  export type AggregateCategoryGroup = {
    _count: CategoryGroupCountAggregateOutputType | null
    _min: CategoryGroupMinAggregateOutputType | null
    _max: CategoryGroupMaxAggregateOutputType | null
  }

  export type CategoryGroupMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    slug: string | null
    title_en: string | null
    title_ru: string | null
    title_hy: string | null
    icon: string | null
  }

  export type CategoryGroupMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    slug: string | null
    title_en: string | null
    title_ru: string | null
    title_hy: string | null
    icon: string | null
  }

  export type CategoryGroupCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    slug: number
    title_en: number
    title_ru: number
    title_hy: number
    icon: number
    _all: number
  }


  export type CategoryGroupMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    slug?: true
    title_en?: true
    title_ru?: true
    title_hy?: true
    icon?: true
  }

  export type CategoryGroupMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    slug?: true
    title_en?: true
    title_ru?: true
    title_hy?: true
    icon?: true
  }

  export type CategoryGroupCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    slug?: true
    title_en?: true
    title_ru?: true
    title_hy?: true
    icon?: true
    _all?: true
  }

  export type CategoryGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryGroup to aggregate.
     */
    where?: CategoryGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryGroups to fetch.
     */
    orderBy?: CategoryGroupOrderByWithRelationInput | CategoryGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryGroups
    **/
    _count?: true | CategoryGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryGroupMaxAggregateInputType
  }

  export type GetCategoryGroupAggregateType<T extends CategoryGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryGroup[P]>
      : GetScalarType<T[P], AggregateCategoryGroup[P]>
  }




  export type CategoryGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryGroupWhereInput
    orderBy?: CategoryGroupOrderByWithAggregationInput | CategoryGroupOrderByWithAggregationInput[]
    by: CategoryGroupScalarFieldEnum[] | CategoryGroupScalarFieldEnum
    having?: CategoryGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryGroupCountAggregateInputType | true
    _min?: CategoryGroupMinAggregateInputType
    _max?: CategoryGroupMaxAggregateInputType
  }

  export type CategoryGroupGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    slug: string
    title_en: string
    title_ru: string
    title_hy: string
    icon: string | null
    _count: CategoryGroupCountAggregateOutputType | null
    _min: CategoryGroupMinAggregateOutputType | null
    _max: CategoryGroupMaxAggregateOutputType | null
  }

  type GetCategoryGroupGroupByPayload<T extends CategoryGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupGroupByOutputType[P]>
        }
      >
    >


  export type CategoryGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slug?: boolean
    title_en?: boolean
    title_ru?: boolean
    title_hy?: boolean
    icon?: boolean
    categories?: boolean | CategoryGroup$categoriesArgs<ExtArgs>
    _count?: boolean | CategoryGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryGroup"]>

  export type CategoryGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slug?: boolean
    title_en?: boolean
    title_ru?: boolean
    title_hy?: boolean
    icon?: boolean
  }, ExtArgs["result"]["categoryGroup"]>

  export type CategoryGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slug?: boolean
    title_en?: boolean
    title_ru?: boolean
    title_hy?: boolean
    icon?: boolean
  }, ExtArgs["result"]["categoryGroup"]>

  export type CategoryGroupSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slug?: boolean
    title_en?: boolean
    title_ru?: boolean
    title_hy?: boolean
    icon?: boolean
  }

  export type CategoryGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "slug" | "title_en" | "title_ru" | "title_hy" | "icon", ExtArgs["result"]["categoryGroup"]>
  export type CategoryGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | CategoryGroup$categoriesArgs<ExtArgs>
    _count?: boolean | CategoryGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryGroup"
    objects: {
      categories: Prisma.$CategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      slug: string
      title_en: string
      title_ru: string
      title_hy: string
      icon: string | null
    }, ExtArgs["result"]["categoryGroup"]>
    composites: {}
  }

  type CategoryGroupGetPayload<S extends boolean | null | undefined | CategoryGroupDefaultArgs> = $Result.GetResult<Prisma.$CategoryGroupPayload, S>

  type CategoryGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryGroupCountAggregateInputType | true
    }

  export interface CategoryGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryGroup'], meta: { name: 'CategoryGroup' } }
    /**
     * Find zero or one CategoryGroup that matches the filter.
     * @param {CategoryGroupFindUniqueArgs} args - Arguments to find a CategoryGroup
     * @example
     * // Get one CategoryGroup
     * const categoryGroup = await prisma.categoryGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryGroupFindUniqueArgs>(args: SelectSubset<T, CategoryGroupFindUniqueArgs<ExtArgs>>): Prisma__CategoryGroupClient<$Result.GetResult<Prisma.$CategoryGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoryGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryGroupFindUniqueOrThrowArgs} args - Arguments to find a CategoryGroup
     * @example
     * // Get one CategoryGroup
     * const categoryGroup = await prisma.categoryGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryGroupClient<$Result.GetResult<Prisma.$CategoryGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupFindFirstArgs} args - Arguments to find a CategoryGroup
     * @example
     * // Get one CategoryGroup
     * const categoryGroup = await prisma.categoryGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryGroupFindFirstArgs>(args?: SelectSubset<T, CategoryGroupFindFirstArgs<ExtArgs>>): Prisma__CategoryGroupClient<$Result.GetResult<Prisma.$CategoryGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupFindFirstOrThrowArgs} args - Arguments to find a CategoryGroup
     * @example
     * // Get one CategoryGroup
     * const categoryGroup = await prisma.categoryGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryGroupClient<$Result.GetResult<Prisma.$CategoryGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryGroups
     * const categoryGroups = await prisma.categoryGroup.findMany()
     * 
     * // Get first 10 CategoryGroups
     * const categoryGroups = await prisma.categoryGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryGroupWithIdOnly = await prisma.categoryGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryGroupFindManyArgs>(args?: SelectSubset<T, CategoryGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoryGroup.
     * @param {CategoryGroupCreateArgs} args - Arguments to create a CategoryGroup.
     * @example
     * // Create one CategoryGroup
     * const CategoryGroup = await prisma.categoryGroup.create({
     *   data: {
     *     // ... data to create a CategoryGroup
     *   }
     * })
     * 
     */
    create<T extends CategoryGroupCreateArgs>(args: SelectSubset<T, CategoryGroupCreateArgs<ExtArgs>>): Prisma__CategoryGroupClient<$Result.GetResult<Prisma.$CategoryGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoryGroups.
     * @param {CategoryGroupCreateManyArgs} args - Arguments to create many CategoryGroups.
     * @example
     * // Create many CategoryGroups
     * const categoryGroup = await prisma.categoryGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryGroupCreateManyArgs>(args?: SelectSubset<T, CategoryGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategoryGroups and returns the data saved in the database.
     * @param {CategoryGroupCreateManyAndReturnArgs} args - Arguments to create many CategoryGroups.
     * @example
     * // Create many CategoryGroups
     * const categoryGroup = await prisma.categoryGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategoryGroups and only return the `id`
     * const categoryGroupWithIdOnly = await prisma.categoryGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CategoryGroup.
     * @param {CategoryGroupDeleteArgs} args - Arguments to delete one CategoryGroup.
     * @example
     * // Delete one CategoryGroup
     * const CategoryGroup = await prisma.categoryGroup.delete({
     *   where: {
     *     // ... filter to delete one CategoryGroup
     *   }
     * })
     * 
     */
    delete<T extends CategoryGroupDeleteArgs>(args: SelectSubset<T, CategoryGroupDeleteArgs<ExtArgs>>): Prisma__CategoryGroupClient<$Result.GetResult<Prisma.$CategoryGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoryGroup.
     * @param {CategoryGroupUpdateArgs} args - Arguments to update one CategoryGroup.
     * @example
     * // Update one CategoryGroup
     * const categoryGroup = await prisma.categoryGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryGroupUpdateArgs>(args: SelectSubset<T, CategoryGroupUpdateArgs<ExtArgs>>): Prisma__CategoryGroupClient<$Result.GetResult<Prisma.$CategoryGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoryGroups.
     * @param {CategoryGroupDeleteManyArgs} args - Arguments to filter CategoryGroups to delete.
     * @example
     * // Delete a few CategoryGroups
     * const { count } = await prisma.categoryGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryGroupDeleteManyArgs>(args?: SelectSubset<T, CategoryGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryGroups
     * const categoryGroup = await prisma.categoryGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryGroupUpdateManyArgs>(args: SelectSubset<T, CategoryGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryGroups and returns the data updated in the database.
     * @param {CategoryGroupUpdateManyAndReturnArgs} args - Arguments to update many CategoryGroups.
     * @example
     * // Update many CategoryGroups
     * const categoryGroup = await prisma.categoryGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CategoryGroups and only return the `id`
     * const categoryGroupWithIdOnly = await prisma.categoryGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CategoryGroup.
     * @param {CategoryGroupUpsertArgs} args - Arguments to update or create a CategoryGroup.
     * @example
     * // Update or create a CategoryGroup
     * const categoryGroup = await prisma.categoryGroup.upsert({
     *   create: {
     *     // ... data to create a CategoryGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryGroup we want to update
     *   }
     * })
     */
    upsert<T extends CategoryGroupUpsertArgs>(args: SelectSubset<T, CategoryGroupUpsertArgs<ExtArgs>>): Prisma__CategoryGroupClient<$Result.GetResult<Prisma.$CategoryGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoryGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupCountArgs} args - Arguments to filter CategoryGroups to count.
     * @example
     * // Count the number of CategoryGroups
     * const count = await prisma.categoryGroup.count({
     *   where: {
     *     // ... the filter for the CategoryGroups we want to count
     *   }
     * })
    **/
    count<T extends CategoryGroupCountArgs>(
      args?: Subset<T, CategoryGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryGroupAggregateArgs>(args: Subset<T, CategoryGroupAggregateArgs>): Prisma.PrismaPromise<GetCategoryGroupAggregateType<T>>

    /**
     * Group by CategoryGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryGroup model
   */
  readonly fields: CategoryGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends CategoryGroup$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, CategoryGroup$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CategoryGroup model
   */
  interface CategoryGroupFieldRefs {
    readonly id: FieldRef<"CategoryGroup", 'String'>
    readonly createdAt: FieldRef<"CategoryGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"CategoryGroup", 'DateTime'>
    readonly slug: FieldRef<"CategoryGroup", 'String'>
    readonly title_en: FieldRef<"CategoryGroup", 'String'>
    readonly title_ru: FieldRef<"CategoryGroup", 'String'>
    readonly title_hy: FieldRef<"CategoryGroup", 'String'>
    readonly icon: FieldRef<"CategoryGroup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CategoryGroup findUnique
   */
  export type CategoryGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryGroup
     */
    select?: CategoryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryGroup
     */
    omit?: CategoryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryGroupInclude<ExtArgs> | null
    /**
     * Filter, which CategoryGroup to fetch.
     */
    where: CategoryGroupWhereUniqueInput
  }

  /**
   * CategoryGroup findUniqueOrThrow
   */
  export type CategoryGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryGroup
     */
    select?: CategoryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryGroup
     */
    omit?: CategoryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryGroupInclude<ExtArgs> | null
    /**
     * Filter, which CategoryGroup to fetch.
     */
    where: CategoryGroupWhereUniqueInput
  }

  /**
   * CategoryGroup findFirst
   */
  export type CategoryGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryGroup
     */
    select?: CategoryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryGroup
     */
    omit?: CategoryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryGroupInclude<ExtArgs> | null
    /**
     * Filter, which CategoryGroup to fetch.
     */
    where?: CategoryGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryGroups to fetch.
     */
    orderBy?: CategoryGroupOrderByWithRelationInput | CategoryGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryGroups.
     */
    cursor?: CategoryGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryGroups.
     */
    distinct?: CategoryGroupScalarFieldEnum | CategoryGroupScalarFieldEnum[]
  }

  /**
   * CategoryGroup findFirstOrThrow
   */
  export type CategoryGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryGroup
     */
    select?: CategoryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryGroup
     */
    omit?: CategoryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryGroupInclude<ExtArgs> | null
    /**
     * Filter, which CategoryGroup to fetch.
     */
    where?: CategoryGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryGroups to fetch.
     */
    orderBy?: CategoryGroupOrderByWithRelationInput | CategoryGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryGroups.
     */
    cursor?: CategoryGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryGroups.
     */
    distinct?: CategoryGroupScalarFieldEnum | CategoryGroupScalarFieldEnum[]
  }

  /**
   * CategoryGroup findMany
   */
  export type CategoryGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryGroup
     */
    select?: CategoryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryGroup
     */
    omit?: CategoryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryGroupInclude<ExtArgs> | null
    /**
     * Filter, which CategoryGroups to fetch.
     */
    where?: CategoryGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryGroups to fetch.
     */
    orderBy?: CategoryGroupOrderByWithRelationInput | CategoryGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryGroups.
     */
    cursor?: CategoryGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryGroups.
     */
    skip?: number
    distinct?: CategoryGroupScalarFieldEnum | CategoryGroupScalarFieldEnum[]
  }

  /**
   * CategoryGroup create
   */
  export type CategoryGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryGroup
     */
    select?: CategoryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryGroup
     */
    omit?: CategoryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryGroup.
     */
    data: XOR<CategoryGroupCreateInput, CategoryGroupUncheckedCreateInput>
  }

  /**
   * CategoryGroup createMany
   */
  export type CategoryGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryGroups.
     */
    data: CategoryGroupCreateManyInput | CategoryGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryGroup createManyAndReturn
   */
  export type CategoryGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryGroup
     */
    select?: CategoryGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryGroup
     */
    omit?: CategoryGroupOmit<ExtArgs> | null
    /**
     * The data used to create many CategoryGroups.
     */
    data: CategoryGroupCreateManyInput | CategoryGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryGroup update
   */
  export type CategoryGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryGroup
     */
    select?: CategoryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryGroup
     */
    omit?: CategoryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryGroup.
     */
    data: XOR<CategoryGroupUpdateInput, CategoryGroupUncheckedUpdateInput>
    /**
     * Choose, which CategoryGroup to update.
     */
    where: CategoryGroupWhereUniqueInput
  }

  /**
   * CategoryGroup updateMany
   */
  export type CategoryGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryGroups.
     */
    data: XOR<CategoryGroupUpdateManyMutationInput, CategoryGroupUncheckedUpdateManyInput>
    /**
     * Filter which CategoryGroups to update
     */
    where?: CategoryGroupWhereInput
    /**
     * Limit how many CategoryGroups to update.
     */
    limit?: number
  }

  /**
   * CategoryGroup updateManyAndReturn
   */
  export type CategoryGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryGroup
     */
    select?: CategoryGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryGroup
     */
    omit?: CategoryGroupOmit<ExtArgs> | null
    /**
     * The data used to update CategoryGroups.
     */
    data: XOR<CategoryGroupUpdateManyMutationInput, CategoryGroupUncheckedUpdateManyInput>
    /**
     * Filter which CategoryGroups to update
     */
    where?: CategoryGroupWhereInput
    /**
     * Limit how many CategoryGroups to update.
     */
    limit?: number
  }

  /**
   * CategoryGroup upsert
   */
  export type CategoryGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryGroup
     */
    select?: CategoryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryGroup
     */
    omit?: CategoryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryGroup to update in case it exists.
     */
    where: CategoryGroupWhereUniqueInput
    /**
     * In case the CategoryGroup found by the `where` argument doesn't exist, create a new CategoryGroup with this data.
     */
    create: XOR<CategoryGroupCreateInput, CategoryGroupUncheckedCreateInput>
    /**
     * In case the CategoryGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryGroupUpdateInput, CategoryGroupUncheckedUpdateInput>
  }

  /**
   * CategoryGroup delete
   */
  export type CategoryGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryGroup
     */
    select?: CategoryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryGroup
     */
    omit?: CategoryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryGroupInclude<ExtArgs> | null
    /**
     * Filter which CategoryGroup to delete.
     */
    where: CategoryGroupWhereUniqueInput
  }

  /**
   * CategoryGroup deleteMany
   */
  export type CategoryGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryGroups to delete
     */
    where?: CategoryGroupWhereInput
    /**
     * Limit how many CategoryGroups to delete.
     */
    limit?: number
  }

  /**
   * CategoryGroup.categories
   */
  export type CategoryGroup$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * CategoryGroup without action
   */
  export type CategoryGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryGroup
     */
    select?: CategoryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryGroup
     */
    omit?: CategoryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryGroupInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    slug: string | null
    title_en: string | null
    title_hy: string | null
    title_ru: string | null
    description_en: string | null
    description_hy: string | null
    description_ru: string | null
    groupId: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    slug: string | null
    title_en: string | null
    title_hy: string | null
    title_ru: string | null
    description_en: string | null
    description_hy: string | null
    description_ru: string | null
    groupId: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    slug: number
    title_en: number
    title_hy: number
    title_ru: number
    description_en: number
    description_hy: number
    description_ru: number
    groupId: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    slug?: true
    title_en?: true
    title_hy?: true
    title_ru?: true
    description_en?: true
    description_hy?: true
    description_ru?: true
    groupId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    slug?: true
    title_en?: true
    title_hy?: true
    title_ru?: true
    description_en?: true
    description_hy?: true
    description_ru?: true
    groupId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    slug?: true
    title_en?: true
    title_hy?: true
    title_ru?: true
    description_en?: true
    description_hy?: true
    description_ru?: true
    groupId?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    slug: string
    title_en: string
    title_hy: string
    title_ru: string
    description_en: string
    description_hy: string
    description_ru: string
    groupId: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slug?: boolean
    title_en?: boolean
    title_hy?: boolean
    title_ru?: boolean
    description_en?: boolean
    description_hy?: boolean
    description_ru?: boolean
    groupId?: boolean
    group?: boolean | CategoryGroupDefaultArgs<ExtArgs>
    listings?: boolean | Category$listingsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slug?: boolean
    title_en?: boolean
    title_hy?: boolean
    title_ru?: boolean
    description_en?: boolean
    description_hy?: boolean
    description_ru?: boolean
    groupId?: boolean
    group?: boolean | CategoryGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slug?: boolean
    title_en?: boolean
    title_hy?: boolean
    title_ru?: boolean
    description_en?: boolean
    description_hy?: boolean
    description_ru?: boolean
    groupId?: boolean
    group?: boolean | CategoryGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slug?: boolean
    title_en?: boolean
    title_hy?: boolean
    title_ru?: boolean
    description_en?: boolean
    description_hy?: boolean
    description_ru?: boolean
    groupId?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "slug" | "title_en" | "title_hy" | "title_ru" | "description_en" | "description_hy" | "description_ru" | "groupId", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | CategoryGroupDefaultArgs<ExtArgs>
    listings?: boolean | Category$listingsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | CategoryGroupDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | CategoryGroupDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      group: Prisma.$CategoryGroupPayload<ExtArgs>
      listings: Prisma.$ListingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      slug: string
      title_en: string
      title_hy: string
      title_ru: string
      description_en: string
      description_hy: string
      description_ru: string
      groupId: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends CategoryGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryGroupDefaultArgs<ExtArgs>>): Prisma__CategoryGroupClient<$Result.GetResult<Prisma.$CategoryGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    listings<T extends Category$listingsArgs<ExtArgs> = {}>(args?: Subset<T, Category$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly title_en: FieldRef<"Category", 'String'>
    readonly title_hy: FieldRef<"Category", 'String'>
    readonly title_ru: FieldRef<"Category", 'String'>
    readonly description_en: FieldRef<"Category", 'String'>
    readonly description_hy: FieldRef<"Category", 'String'>
    readonly description_ru: FieldRef<"Category", 'String'>
    readonly groupId: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.listings
   */
  export type Category$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    cursor?: ListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Listing
   */

  export type AggregateListing = {
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  export type ListingAvgAggregateOutputType = {
    price: number | null
    area: number | null
  }

  export type ListingSumAggregateOutputType = {
    price: number | null
    area: number | null
  }

  export type ListingMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    price: number | null
    currency: string | null
    address: string | null
    area: number | null
    buildingType: string | null
    status: $Enums.ListingStatus | null
    isFavorite: boolean | null
    isTop: boolean | null
    locationId: string | null
    categoryId: string | null
    accountId: string | null
  }

  export type ListingMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    price: number | null
    currency: string | null
    address: string | null
    area: number | null
    buildingType: string | null
    status: $Enums.ListingStatus | null
    isFavorite: boolean | null
    isTop: boolean | null
    locationId: string | null
    categoryId: string | null
    accountId: string | null
  }

  export type ListingCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    description: number
    price: number
    currency: number
    address: number
    imageUrls: number
    area: number
    buildingType: number
    status: number
    priceHistory: number
    specificFields: number
    isFavorite: number
    isTop: number
    locationId: number
    categoryId: number
    accountId: number
    _all: number
  }


  export type ListingAvgAggregateInputType = {
    price?: true
    area?: true
  }

  export type ListingSumAggregateInputType = {
    price?: true
    area?: true
  }

  export type ListingMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    price?: true
    currency?: true
    address?: true
    area?: true
    buildingType?: true
    status?: true
    isFavorite?: true
    isTop?: true
    locationId?: true
    categoryId?: true
    accountId?: true
  }

  export type ListingMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    price?: true
    currency?: true
    address?: true
    area?: true
    buildingType?: true
    status?: true
    isFavorite?: true
    isTop?: true
    locationId?: true
    categoryId?: true
    accountId?: true
  }

  export type ListingCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    price?: true
    currency?: true
    address?: true
    imageUrls?: true
    area?: true
    buildingType?: true
    status?: true
    priceHistory?: true
    specificFields?: true
    isFavorite?: true
    isTop?: true
    locationId?: true
    categoryId?: true
    accountId?: true
    _all?: true
  }

  export type ListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listing to aggregate.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Listings
    **/
    _count?: true | ListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingMaxAggregateInputType
  }

  export type GetListingAggregateType<T extends ListingAggregateArgs> = {
        [P in keyof T & keyof AggregateListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListing[P]>
      : GetScalarType<T[P], AggregateListing[P]>
  }




  export type ListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithAggregationInput | ListingOrderByWithAggregationInput[]
    by: ListingScalarFieldEnum[] | ListingScalarFieldEnum
    having?: ListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingCountAggregateInputType | true
    _avg?: ListingAvgAggregateInputType
    _sum?: ListingSumAggregateInputType
    _min?: ListingMinAggregateInputType
    _max?: ListingMaxAggregateInputType
  }

  export type ListingGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    description: string
    price: number
    currency: string
    address: string
    imageUrls: string[]
    area: number
    buildingType: string
    status: $Enums.ListingStatus
    priceHistory: JsonValue | null
    specificFields: JsonValue
    isFavorite: boolean
    isTop: boolean
    locationId: string
    categoryId: string | null
    accountId: string | null
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  type GetListingGroupByPayload<T extends ListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingGroupByOutputType[P]>
            : GetScalarType<T[P], ListingGroupByOutputType[P]>
        }
      >
    >


  export type ListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    currency?: boolean
    address?: boolean
    imageUrls?: boolean
    area?: boolean
    buildingType?: boolean
    status?: boolean
    priceHistory?: boolean
    specificFields?: boolean
    isFavorite?: boolean
    isTop?: boolean
    locationId?: boolean
    categoryId?: boolean
    accountId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    Category?: boolean | Listing$CategoryArgs<ExtArgs>
    Account?: boolean | Listing$AccountArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    currency?: boolean
    address?: boolean
    imageUrls?: boolean
    area?: boolean
    buildingType?: boolean
    status?: boolean
    priceHistory?: boolean
    specificFields?: boolean
    isFavorite?: boolean
    isTop?: boolean
    locationId?: boolean
    categoryId?: boolean
    accountId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    Category?: boolean | Listing$CategoryArgs<ExtArgs>
    Account?: boolean | Listing$AccountArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    currency?: boolean
    address?: boolean
    imageUrls?: boolean
    area?: boolean
    buildingType?: boolean
    status?: boolean
    priceHistory?: boolean
    specificFields?: boolean
    isFavorite?: boolean
    isTop?: boolean
    locationId?: boolean
    categoryId?: boolean
    accountId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    Category?: boolean | Listing$CategoryArgs<ExtArgs>
    Account?: boolean | Listing$AccountArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    currency?: boolean
    address?: boolean
    imageUrls?: boolean
    area?: boolean
    buildingType?: boolean
    status?: boolean
    priceHistory?: boolean
    specificFields?: boolean
    isFavorite?: boolean
    isTop?: boolean
    locationId?: boolean
    categoryId?: boolean
    accountId?: boolean
  }

  export type ListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "description" | "price" | "currency" | "address" | "imageUrls" | "area" | "buildingType" | "status" | "priceHistory" | "specificFields" | "isFavorite" | "isTop" | "locationId" | "categoryId" | "accountId", ExtArgs["result"]["listing"]>
  export type ListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    Category?: boolean | Listing$CategoryArgs<ExtArgs>
    Account?: boolean | Listing$AccountArgs<ExtArgs>
  }
  export type ListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    Category?: boolean | Listing$CategoryArgs<ExtArgs>
    Account?: boolean | Listing$AccountArgs<ExtArgs>
  }
  export type ListingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    Category?: boolean | Listing$CategoryArgs<ExtArgs>
    Account?: boolean | Listing$AccountArgs<ExtArgs>
  }

  export type $ListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Listing"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
      Category: Prisma.$CategoryPayload<ExtArgs> | null
      Account: Prisma.$AccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      title: string
      description: string
      price: number
      currency: string
      address: string
      imageUrls: string[]
      area: number
      buildingType: string
      status: $Enums.ListingStatus
      priceHistory: Prisma.JsonValue | null
      specificFields: Prisma.JsonValue
      isFavorite: boolean
      isTop: boolean
      locationId: string
      categoryId: string | null
      accountId: string | null
    }, ExtArgs["result"]["listing"]>
    composites: {}
  }

  type ListingGetPayload<S extends boolean | null | undefined | ListingDefaultArgs> = $Result.GetResult<Prisma.$ListingPayload, S>

  type ListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListingCountAggregateInputType | true
    }

  export interface ListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Listing'], meta: { name: 'Listing' } }
    /**
     * Find zero or one Listing that matches the filter.
     * @param {ListingFindUniqueArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingFindUniqueArgs>(args: SelectSubset<T, ListingFindUniqueArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Listing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListingFindUniqueOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingFindFirstArgs>(args?: SelectSubset<T, ListingFindFirstArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listings
     * const listings = await prisma.listing.findMany()
     * 
     * // Get first 10 Listings
     * const listings = await prisma.listing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingWithIdOnly = await prisma.listing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListingFindManyArgs>(args?: SelectSubset<T, ListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Listing.
     * @param {ListingCreateArgs} args - Arguments to create a Listing.
     * @example
     * // Create one Listing
     * const Listing = await prisma.listing.create({
     *   data: {
     *     // ... data to create a Listing
     *   }
     * })
     * 
     */
    create<T extends ListingCreateArgs>(args: SelectSubset<T, ListingCreateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Listings.
     * @param {ListingCreateManyArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingCreateManyArgs>(args?: SelectSubset<T, ListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listings and returns the data saved in the database.
     * @param {ListingCreateManyAndReturnArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListingCreateManyAndReturnArgs>(args?: SelectSubset<T, ListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Listing.
     * @param {ListingDeleteArgs} args - Arguments to delete one Listing.
     * @example
     * // Delete one Listing
     * const Listing = await prisma.listing.delete({
     *   where: {
     *     // ... filter to delete one Listing
     *   }
     * })
     * 
     */
    delete<T extends ListingDeleteArgs>(args: SelectSubset<T, ListingDeleteArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Listing.
     * @param {ListingUpdateArgs} args - Arguments to update one Listing.
     * @example
     * // Update one Listing
     * const listing = await prisma.listing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingUpdateArgs>(args: SelectSubset<T, ListingUpdateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Listings.
     * @param {ListingDeleteManyArgs} args - Arguments to filter Listings to delete.
     * @example
     * // Delete a few Listings
     * const { count } = await prisma.listing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingDeleteManyArgs>(args?: SelectSubset<T, ListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingUpdateManyArgs>(args: SelectSubset<T, ListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings and returns the data updated in the database.
     * @param {ListingUpdateManyAndReturnArgs} args - Arguments to update many Listings.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListingUpdateManyAndReturnArgs>(args: SelectSubset<T, ListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Listing.
     * @param {ListingUpsertArgs} args - Arguments to update or create a Listing.
     * @example
     * // Update or create a Listing
     * const listing = await prisma.listing.upsert({
     *   create: {
     *     // ... data to create a Listing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listing we want to update
     *   }
     * })
     */
    upsert<T extends ListingUpsertArgs>(args: SelectSubset<T, ListingUpsertArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingCountArgs} args - Arguments to filter Listings to count.
     * @example
     * // Count the number of Listings
     * const count = await prisma.listing.count({
     *   where: {
     *     // ... the filter for the Listings we want to count
     *   }
     * })
    **/
    count<T extends ListingCountArgs>(
      args?: Subset<T, ListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListingAggregateArgs>(args: Subset<T, ListingAggregateArgs>): Prisma.PrismaPromise<GetListingAggregateType<T>>

    /**
     * Group by Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingGroupByArgs} args - Group by arguments.
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
      T extends ListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingGroupByArgs['orderBy'] }
        : { orderBy?: ListingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Listing model
   */
  readonly fields: ListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Listing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Category<T extends Listing$CategoryArgs<ExtArgs> = {}>(args?: Subset<T, Listing$CategoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Account<T extends Listing$AccountArgs<ExtArgs> = {}>(args?: Subset<T, Listing$AccountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Listing model
   */
  interface ListingFieldRefs {
    readonly id: FieldRef<"Listing", 'String'>
    readonly createdAt: FieldRef<"Listing", 'DateTime'>
    readonly updatedAt: FieldRef<"Listing", 'DateTime'>
    readonly title: FieldRef<"Listing", 'String'>
    readonly description: FieldRef<"Listing", 'String'>
    readonly price: FieldRef<"Listing", 'Float'>
    readonly currency: FieldRef<"Listing", 'String'>
    readonly address: FieldRef<"Listing", 'String'>
    readonly imageUrls: FieldRef<"Listing", 'String[]'>
    readonly area: FieldRef<"Listing", 'Float'>
    readonly buildingType: FieldRef<"Listing", 'String'>
    readonly status: FieldRef<"Listing", 'ListingStatus'>
    readonly priceHistory: FieldRef<"Listing", 'Json'>
    readonly specificFields: FieldRef<"Listing", 'Json'>
    readonly isFavorite: FieldRef<"Listing", 'Boolean'>
    readonly isTop: FieldRef<"Listing", 'Boolean'>
    readonly locationId: FieldRef<"Listing", 'String'>
    readonly categoryId: FieldRef<"Listing", 'String'>
    readonly accountId: FieldRef<"Listing", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Listing findUnique
   */
  export type ListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findUniqueOrThrow
   */
  export type ListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findFirst
   */
  export type ListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findFirstOrThrow
   */
  export type ListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findMany
   */
  export type ListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listings to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing create
   */
  export type ListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to create a Listing.
     */
    data: XOR<ListingCreateInput, ListingUncheckedCreateInput>
  }

  /**
   * Listing createMany
   */
  export type ListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Listing createManyAndReturn
   */
  export type ListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listing update
   */
  export type ListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to update a Listing.
     */
    data: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
    /**
     * Choose, which Listing to update.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing updateMany
   */
  export type ListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
  }

  /**
   * Listing updateManyAndReturn
   */
  export type ListingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listing upsert
   */
  export type ListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The filter to search for the Listing to update in case it exists.
     */
    where: ListingWhereUniqueInput
    /**
     * In case the Listing found by the `where` argument doesn't exist, create a new Listing with this data.
     */
    create: XOR<ListingCreateInput, ListingUncheckedCreateInput>
    /**
     * In case the Listing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
  }

  /**
   * Listing delete
   */
  export type ListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter which Listing to delete.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing deleteMany
   */
  export type ListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listings to delete
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to delete.
     */
    limit?: number
  }

  /**
   * Listing.Category
   */
  export type Listing$CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Listing.Account
   */
  export type Listing$AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * Listing without action
   */
  export type ListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    country: string | null
    city: string | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    country: string | null
    city: string | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    country: number
    city: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    country?: true
    city?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    country?: true
    city?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    country?: true
    city?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    country: string
    city: string
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean
    city?: boolean
    listings?: boolean | Location$listingsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean
    city?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean
    city?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean
    city?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "country" | "city", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | Location$listingsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      listings: Prisma.$ListingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      country: string
      city: string
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listings<T extends Location$listingsArgs<ExtArgs> = {}>(args?: Subset<T, Location$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
    readonly country: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.listings
   */
  export type Location$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    cursor?: ListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    phoneNumber: 'phoneNumber',
    password: 'password',
    avatarUrl: 'avatarUrl',
    isEmailVerified: 'isEmailVerified',
    isSubscribed: 'isSubscribed',
    subscriptionType: 'subscriptionType',
    rating: 'rating',
    role: 'role',
    isActive: 'isActive'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    accountId: 'accountId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AgencyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    socialMediaLinks: 'socialMediaLinks',
    bannerUrl: 'bannerUrl',
    address: 'address',
    website: 'website',
    agencyType: 'agencyType',
    isVerified: 'isVerified',
    verificationStatus: 'verificationStatus',
    accountId: 'accountId'
  };

  export type AgencyScalarFieldEnum = (typeof AgencyScalarFieldEnum)[keyof typeof AgencyScalarFieldEnum]


  export const SocialAccountScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    provider: 'provider',
    providerId: 'providerId',
    accountId: 'accountId'
  };

  export type SocialAccountScalarFieldEnum = (typeof SocialAccountScalarFieldEnum)[keyof typeof SocialAccountScalarFieldEnum]


  export const CategoryGroupScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    slug: 'slug',
    title_en: 'title_en',
    title_ru: 'title_ru',
    title_hy: 'title_hy',
    icon: 'icon'
  };

  export type CategoryGroupScalarFieldEnum = (typeof CategoryGroupScalarFieldEnum)[keyof typeof CategoryGroupScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    slug: 'slug',
    title_en: 'title_en',
    title_hy: 'title_hy',
    title_ru: 'title_ru',
    description_en: 'description_en',
    description_hy: 'description_hy',
    description_ru: 'description_ru',
    groupId: 'groupId'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ListingScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    description: 'description',
    price: 'price',
    currency: 'currency',
    address: 'address',
    imageUrls: 'imageUrls',
    area: 'area',
    buildingType: 'buildingType',
    status: 'status',
    priceHistory: 'priceHistory',
    specificFields: 'specificFields',
    isFavorite: 'isFavorite',
    isTop: 'isTop',
    locationId: 'locationId',
    categoryId: 'categoryId',
    accountId: 'accountId'
  };

  export type ListingScalarFieldEnum = (typeof ListingScalarFieldEnum)[keyof typeof ListingScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    country: 'country',
    city: 'city'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SubscriptionType'
   */
  export type EnumSubscriptionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionType'>
    


  /**
   * Reference to a field of type 'SubscriptionType[]'
   */
  export type ListEnumSubscriptionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'AgencyType'
   */
  export type EnumAgencyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgencyType'>
    


  /**
   * Reference to a field of type 'AgencyType[]'
   */
  export type ListEnumAgencyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgencyType[]'>
    


  /**
   * Reference to a field of type 'VerificationStatus'
   */
  export type EnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus'>
    


  /**
   * Reference to a field of type 'VerificationStatus[]'
   */
  export type ListEnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus[]'>
    


  /**
   * Reference to a field of type 'SocialProvider'
   */
  export type EnumSocialProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SocialProvider'>
    


  /**
   * Reference to a field of type 'SocialProvider[]'
   */
  export type ListEnumSocialProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SocialProvider[]'>
    


  /**
   * Reference to a field of type 'ListingStatus'
   */
  export type EnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus'>
    


  /**
   * Reference to a field of type 'ListingStatus[]'
   */
  export type ListEnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    email?: StringFilter<"Account"> | string
    phoneNumber?: StringFilter<"Account"> | string
    password?: StringNullableFilter<"Account"> | string | null
    avatarUrl?: StringNullableFilter<"Account"> | string | null
    isEmailVerified?: BoolFilter<"Account"> | boolean
    isSubscribed?: BoolFilter<"Account"> | boolean
    subscriptionType?: EnumSubscriptionTypeFilter<"Account"> | $Enums.SubscriptionType
    rating?: FloatFilter<"Account"> | number
    role?: EnumRoleFilter<"Account"> | $Enums.Role
    isActive?: BoolFilter<"Account"> | boolean
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    agency?: XOR<AgencyNullableScalarRelationFilter, AgencyWhereInput> | null
    SocialAccounts?: SocialAccountListRelationFilter
    listings?: ListingListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    isSubscribed?: SortOrder
    subscriptionType?: SortOrder
    rating?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    user?: UserOrderByWithRelationInput
    agency?: AgencyOrderByWithRelationInput
    SocialAccounts?: SocialAccountOrderByRelationAggregateInput
    listings?: ListingOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phoneNumber?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    password?: StringNullableFilter<"Account"> | string | null
    avatarUrl?: StringNullableFilter<"Account"> | string | null
    isEmailVerified?: BoolFilter<"Account"> | boolean
    isSubscribed?: BoolFilter<"Account"> | boolean
    subscriptionType?: EnumSubscriptionTypeFilter<"Account"> | $Enums.SubscriptionType
    rating?: FloatFilter<"Account"> | number
    role?: EnumRoleFilter<"Account"> | $Enums.Role
    isActive?: BoolFilter<"Account"> | boolean
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    agency?: XOR<AgencyNullableScalarRelationFilter, AgencyWhereInput> | null
    SocialAccounts?: SocialAccountListRelationFilter
    listings?: ListingListRelationFilter
  }, "id" | "email" | "phoneNumber">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    isSubscribed?: SortOrder
    subscriptionType?: SortOrder
    rating?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    email?: StringWithAggregatesFilter<"Account"> | string
    phoneNumber?: StringWithAggregatesFilter<"Account"> | string
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Account"> | string | null
    isEmailVerified?: BoolWithAggregatesFilter<"Account"> | boolean
    isSubscribed?: BoolWithAggregatesFilter<"Account"> | boolean
    subscriptionType?: EnumSubscriptionTypeWithAggregatesFilter<"Account"> | $Enums.SubscriptionType
    rating?: FloatWithAggregatesFilter<"Account"> | number
    role?: EnumRoleWithAggregatesFilter<"Account"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"Account"> | boolean
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    accountId?: StringFilter<"User"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    accountId?: SortOrder
    account?: AccountOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accountId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "id" | "accountId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    accountId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    accountId?: StringWithAggregatesFilter<"User"> | string
  }

  export type AgencyWhereInput = {
    AND?: AgencyWhereInput | AgencyWhereInput[]
    OR?: AgencyWhereInput[]
    NOT?: AgencyWhereInput | AgencyWhereInput[]
    id?: StringFilter<"Agency"> | string
    name?: StringFilter<"Agency"> | string
    socialMediaLinks?: StringNullableListFilter<"Agency">
    bannerUrl?: StringNullableFilter<"Agency"> | string | null
    address?: StringNullableFilter<"Agency"> | string | null
    website?: StringNullableFilter<"Agency"> | string | null
    agencyType?: EnumAgencyTypeFilter<"Agency"> | $Enums.AgencyType
    isVerified?: BoolFilter<"Agency"> | boolean
    verificationStatus?: EnumVerificationStatusFilter<"Agency"> | $Enums.VerificationStatus
    accountId?: StringFilter<"Agency"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type AgencyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    socialMediaLinks?: SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    agencyType?: SortOrder
    isVerified?: SortOrder
    verificationStatus?: SortOrder
    accountId?: SortOrder
    account?: AccountOrderByWithRelationInput
  }

  export type AgencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    website?: string
    accountId?: string
    AND?: AgencyWhereInput | AgencyWhereInput[]
    OR?: AgencyWhereInput[]
    NOT?: AgencyWhereInput | AgencyWhereInput[]
    socialMediaLinks?: StringNullableListFilter<"Agency">
    bannerUrl?: StringNullableFilter<"Agency"> | string | null
    address?: StringNullableFilter<"Agency"> | string | null
    agencyType?: EnumAgencyTypeFilter<"Agency"> | $Enums.AgencyType
    isVerified?: BoolFilter<"Agency"> | boolean
    verificationStatus?: EnumVerificationStatusFilter<"Agency"> | $Enums.VerificationStatus
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "id" | "name" | "website" | "accountId">

  export type AgencyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    socialMediaLinks?: SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    agencyType?: SortOrder
    isVerified?: SortOrder
    verificationStatus?: SortOrder
    accountId?: SortOrder
    _count?: AgencyCountOrderByAggregateInput
    _max?: AgencyMaxOrderByAggregateInput
    _min?: AgencyMinOrderByAggregateInput
  }

  export type AgencyScalarWhereWithAggregatesInput = {
    AND?: AgencyScalarWhereWithAggregatesInput | AgencyScalarWhereWithAggregatesInput[]
    OR?: AgencyScalarWhereWithAggregatesInput[]
    NOT?: AgencyScalarWhereWithAggregatesInput | AgencyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agency"> | string
    name?: StringWithAggregatesFilter<"Agency"> | string
    socialMediaLinks?: StringNullableListFilter<"Agency">
    bannerUrl?: StringNullableWithAggregatesFilter<"Agency"> | string | null
    address?: StringNullableWithAggregatesFilter<"Agency"> | string | null
    website?: StringNullableWithAggregatesFilter<"Agency"> | string | null
    agencyType?: EnumAgencyTypeWithAggregatesFilter<"Agency"> | $Enums.AgencyType
    isVerified?: BoolWithAggregatesFilter<"Agency"> | boolean
    verificationStatus?: EnumVerificationStatusWithAggregatesFilter<"Agency"> | $Enums.VerificationStatus
    accountId?: StringWithAggregatesFilter<"Agency"> | string
  }

  export type SocialAccountWhereInput = {
    AND?: SocialAccountWhereInput | SocialAccountWhereInput[]
    OR?: SocialAccountWhereInput[]
    NOT?: SocialAccountWhereInput | SocialAccountWhereInput[]
    id?: StringFilter<"SocialAccount"> | string
    createdAt?: DateTimeFilter<"SocialAccount"> | Date | string
    updatedAt?: DateTimeFilter<"SocialAccount"> | Date | string
    provider?: EnumSocialProviderFilter<"SocialAccount"> | $Enums.SocialProvider
    providerId?: StringFilter<"SocialAccount"> | string
    accountId?: StringFilter<"SocialAccount"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type SocialAccountOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    accountId?: SortOrder
    account?: AccountOrderByWithRelationInput
  }

  export type SocialAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerId?: SocialAccountProviderProviderIdCompoundUniqueInput
    AND?: SocialAccountWhereInput | SocialAccountWhereInput[]
    OR?: SocialAccountWhereInput[]
    NOT?: SocialAccountWhereInput | SocialAccountWhereInput[]
    createdAt?: DateTimeFilter<"SocialAccount"> | Date | string
    updatedAt?: DateTimeFilter<"SocialAccount"> | Date | string
    provider?: EnumSocialProviderFilter<"SocialAccount"> | $Enums.SocialProvider
    providerId?: StringFilter<"SocialAccount"> | string
    accountId?: StringFilter<"SocialAccount"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "id" | "provider_providerId">

  export type SocialAccountOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    accountId?: SortOrder
    _count?: SocialAccountCountOrderByAggregateInput
    _max?: SocialAccountMaxOrderByAggregateInput
    _min?: SocialAccountMinOrderByAggregateInput
  }

  export type SocialAccountScalarWhereWithAggregatesInput = {
    AND?: SocialAccountScalarWhereWithAggregatesInput | SocialAccountScalarWhereWithAggregatesInput[]
    OR?: SocialAccountScalarWhereWithAggregatesInput[]
    NOT?: SocialAccountScalarWhereWithAggregatesInput | SocialAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialAccount"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SocialAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SocialAccount"> | Date | string
    provider?: EnumSocialProviderWithAggregatesFilter<"SocialAccount"> | $Enums.SocialProvider
    providerId?: StringWithAggregatesFilter<"SocialAccount"> | string
    accountId?: StringWithAggregatesFilter<"SocialAccount"> | string
  }

  export type CategoryGroupWhereInput = {
    AND?: CategoryGroupWhereInput | CategoryGroupWhereInput[]
    OR?: CategoryGroupWhereInput[]
    NOT?: CategoryGroupWhereInput | CategoryGroupWhereInput[]
    id?: StringFilter<"CategoryGroup"> | string
    createdAt?: DateTimeFilter<"CategoryGroup"> | Date | string
    updatedAt?: DateTimeFilter<"CategoryGroup"> | Date | string
    slug?: StringFilter<"CategoryGroup"> | string
    title_en?: StringFilter<"CategoryGroup"> | string
    title_ru?: StringFilter<"CategoryGroup"> | string
    title_hy?: StringFilter<"CategoryGroup"> | string
    icon?: StringNullableFilter<"CategoryGroup"> | string | null
    categories?: CategoryListRelationFilter
  }

  export type CategoryGroupOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_ru?: SortOrder
    title_hy?: SortOrder
    icon?: SortOrderInput | SortOrder
    categories?: CategoryOrderByRelationAggregateInput
  }

  export type CategoryGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryGroupWhereInput | CategoryGroupWhereInput[]
    OR?: CategoryGroupWhereInput[]
    NOT?: CategoryGroupWhereInput | CategoryGroupWhereInput[]
    createdAt?: DateTimeFilter<"CategoryGroup"> | Date | string
    updatedAt?: DateTimeFilter<"CategoryGroup"> | Date | string
    title_en?: StringFilter<"CategoryGroup"> | string
    title_ru?: StringFilter<"CategoryGroup"> | string
    title_hy?: StringFilter<"CategoryGroup"> | string
    icon?: StringNullableFilter<"CategoryGroup"> | string | null
    categories?: CategoryListRelationFilter
  }, "id" | "slug">

  export type CategoryGroupOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_ru?: SortOrder
    title_hy?: SortOrder
    icon?: SortOrderInput | SortOrder
    _count?: CategoryGroupCountOrderByAggregateInput
    _max?: CategoryGroupMaxOrderByAggregateInput
    _min?: CategoryGroupMinOrderByAggregateInput
  }

  export type CategoryGroupScalarWhereWithAggregatesInput = {
    AND?: CategoryGroupScalarWhereWithAggregatesInput | CategoryGroupScalarWhereWithAggregatesInput[]
    OR?: CategoryGroupScalarWhereWithAggregatesInput[]
    NOT?: CategoryGroupScalarWhereWithAggregatesInput | CategoryGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CategoryGroup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CategoryGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CategoryGroup"> | Date | string
    slug?: StringWithAggregatesFilter<"CategoryGroup"> | string
    title_en?: StringWithAggregatesFilter<"CategoryGroup"> | string
    title_ru?: StringWithAggregatesFilter<"CategoryGroup"> | string
    title_hy?: StringWithAggregatesFilter<"CategoryGroup"> | string
    icon?: StringNullableWithAggregatesFilter<"CategoryGroup"> | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    slug?: StringFilter<"Category"> | string
    title_en?: StringFilter<"Category"> | string
    title_hy?: StringFilter<"Category"> | string
    title_ru?: StringFilter<"Category"> | string
    description_en?: StringFilter<"Category"> | string
    description_hy?: StringFilter<"Category"> | string
    description_ru?: StringFilter<"Category"> | string
    groupId?: StringFilter<"Category"> | string
    group?: XOR<CategoryGroupScalarRelationFilter, CategoryGroupWhereInput>
    listings?: ListingListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_hy?: SortOrder
    title_ru?: SortOrder
    description_en?: SortOrder
    description_hy?: SortOrder
    description_ru?: SortOrder
    groupId?: SortOrder
    group?: CategoryGroupOrderByWithRelationInput
    listings?: ListingOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    title_en?: StringFilter<"Category"> | string
    title_hy?: StringFilter<"Category"> | string
    title_ru?: StringFilter<"Category"> | string
    description_en?: StringFilter<"Category"> | string
    description_hy?: StringFilter<"Category"> | string
    description_ru?: StringFilter<"Category"> | string
    groupId?: StringFilter<"Category"> | string
    group?: XOR<CategoryGroupScalarRelationFilter, CategoryGroupWhereInput>
    listings?: ListingListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_hy?: SortOrder
    title_ru?: SortOrder
    description_en?: SortOrder
    description_hy?: SortOrder
    description_ru?: SortOrder
    groupId?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    title_en?: StringWithAggregatesFilter<"Category"> | string
    title_hy?: StringWithAggregatesFilter<"Category"> | string
    title_ru?: StringWithAggregatesFilter<"Category"> | string
    description_en?: StringWithAggregatesFilter<"Category"> | string
    description_hy?: StringWithAggregatesFilter<"Category"> | string
    description_ru?: StringWithAggregatesFilter<"Category"> | string
    groupId?: StringWithAggregatesFilter<"Category"> | string
  }

  export type ListingWhereInput = {
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    id?: StringFilter<"Listing"> | string
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    title?: StringFilter<"Listing"> | string
    description?: StringFilter<"Listing"> | string
    price?: FloatFilter<"Listing"> | number
    currency?: StringFilter<"Listing"> | string
    address?: StringFilter<"Listing"> | string
    imageUrls?: StringNullableListFilter<"Listing">
    area?: FloatFilter<"Listing"> | number
    buildingType?: StringFilter<"Listing"> | string
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    priceHistory?: JsonNullableFilter<"Listing">
    specificFields?: JsonFilter<"Listing">
    isFavorite?: BoolFilter<"Listing"> | boolean
    isTop?: BoolFilter<"Listing"> | boolean
    locationId?: StringFilter<"Listing"> | string
    categoryId?: StringNullableFilter<"Listing"> | string | null
    accountId?: StringNullableFilter<"Listing"> | string | null
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    Category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    Account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }

  export type ListingOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    address?: SortOrder
    imageUrls?: SortOrder
    area?: SortOrder
    buildingType?: SortOrder
    status?: SortOrder
    priceHistory?: SortOrderInput | SortOrder
    specificFields?: SortOrder
    isFavorite?: SortOrder
    isTop?: SortOrder
    locationId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    accountId?: SortOrderInput | SortOrder
    location?: LocationOrderByWithRelationInput
    Category?: CategoryOrderByWithRelationInput
    Account?: AccountOrderByWithRelationInput
  }

  export type ListingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    title?: StringFilter<"Listing"> | string
    description?: StringFilter<"Listing"> | string
    price?: FloatFilter<"Listing"> | number
    currency?: StringFilter<"Listing"> | string
    address?: StringFilter<"Listing"> | string
    imageUrls?: StringNullableListFilter<"Listing">
    area?: FloatFilter<"Listing"> | number
    buildingType?: StringFilter<"Listing"> | string
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    priceHistory?: JsonNullableFilter<"Listing">
    specificFields?: JsonFilter<"Listing">
    isFavorite?: BoolFilter<"Listing"> | boolean
    isTop?: BoolFilter<"Listing"> | boolean
    locationId?: StringFilter<"Listing"> | string
    categoryId?: StringNullableFilter<"Listing"> | string | null
    accountId?: StringNullableFilter<"Listing"> | string | null
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    Category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    Account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }, "id">

  export type ListingOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    address?: SortOrder
    imageUrls?: SortOrder
    area?: SortOrder
    buildingType?: SortOrder
    status?: SortOrder
    priceHistory?: SortOrderInput | SortOrder
    specificFields?: SortOrder
    isFavorite?: SortOrder
    isTop?: SortOrder
    locationId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    accountId?: SortOrderInput | SortOrder
    _count?: ListingCountOrderByAggregateInput
    _avg?: ListingAvgOrderByAggregateInput
    _max?: ListingMaxOrderByAggregateInput
    _min?: ListingMinOrderByAggregateInput
    _sum?: ListingSumOrderByAggregateInput
  }

  export type ListingScalarWhereWithAggregatesInput = {
    AND?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    OR?: ListingScalarWhereWithAggregatesInput[]
    NOT?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Listing"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
    title?: StringWithAggregatesFilter<"Listing"> | string
    description?: StringWithAggregatesFilter<"Listing"> | string
    price?: FloatWithAggregatesFilter<"Listing"> | number
    currency?: StringWithAggregatesFilter<"Listing"> | string
    address?: StringWithAggregatesFilter<"Listing"> | string
    imageUrls?: StringNullableListFilter<"Listing">
    area?: FloatWithAggregatesFilter<"Listing"> | number
    buildingType?: StringWithAggregatesFilter<"Listing"> | string
    status?: EnumListingStatusWithAggregatesFilter<"Listing"> | $Enums.ListingStatus
    priceHistory?: JsonNullableWithAggregatesFilter<"Listing">
    specificFields?: JsonWithAggregatesFilter<"Listing">
    isFavorite?: BoolWithAggregatesFilter<"Listing"> | boolean
    isTop?: BoolWithAggregatesFilter<"Listing"> | boolean
    locationId?: StringWithAggregatesFilter<"Listing"> | string
    categoryId?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    accountId?: StringNullableWithAggregatesFilter<"Listing"> | string | null
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    country?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    listings?: ListingListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    country?: SortOrder
    city?: SortOrder
    listings?: ListingOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    country?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    listings?: ListingListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    country?: SortOrder
    city?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    country?: StringWithAggregatesFilter<"Location"> | string
    city?: StringWithAggregatesFilter<"Location"> | string
  }

  export type AccountCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    isEmailVerified?: boolean
    isSubscribed?: boolean
    subscriptionType?: $Enums.SubscriptionType
    rating?: number
    role?: $Enums.Role
    isActive?: boolean
    user?: UserCreateNestedOneWithoutAccountInput
    agency?: AgencyCreateNestedOneWithoutAccountInput
    SocialAccounts?: SocialAccountCreateNestedManyWithoutAccountInput
    listings?: ListingCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    isEmailVerified?: boolean
    isSubscribed?: boolean
    subscriptionType?: $Enums.SubscriptionType
    rating?: number
    role?: $Enums.Role
    isActive?: boolean
    user?: UserUncheckedCreateNestedOneWithoutAccountInput
    agency?: AgencyUncheckedCreateNestedOneWithoutAccountInput
    SocialAccounts?: SocialAccountUncheckedCreateNestedManyWithoutAccountInput
    listings?: ListingUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    rating?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutAccountNestedInput
    agency?: AgencyUpdateOneWithoutAccountNestedInput
    SocialAccounts?: SocialAccountUpdateManyWithoutAccountNestedInput
    listings?: ListingUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    rating?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUncheckedUpdateOneWithoutAccountNestedInput
    agency?: AgencyUncheckedUpdateOneWithoutAccountNestedInput
    SocialAccounts?: SocialAccountUncheckedUpdateManyWithoutAccountNestedInput
    listings?: ListingUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    isEmailVerified?: boolean
    isSubscribed?: boolean
    subscriptionType?: $Enums.SubscriptionType
    rating?: number
    role?: $Enums.Role
    isActive?: boolean
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    rating?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    rating?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    account: AccountCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    accountId: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    accountId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type AgencyCreateInput = {
    id?: string
    name: string
    socialMediaLinks?: AgencyCreatesocialMediaLinksInput | string[]
    bannerUrl?: string | null
    address?: string | null
    website?: string | null
    agencyType: $Enums.AgencyType
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
    account: AccountCreateNestedOneWithoutAgencyInput
  }

  export type AgencyUncheckedCreateInput = {
    id?: string
    name: string
    socialMediaLinks?: AgencyCreatesocialMediaLinksInput | string[]
    bannerUrl?: string | null
    address?: string | null
    website?: string | null
    agencyType: $Enums.AgencyType
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
    accountId: string
  }

  export type AgencyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialMediaLinks?: AgencyUpdatesocialMediaLinksInput | string[]
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    agencyType?: EnumAgencyTypeFieldUpdateOperationsInput | $Enums.AgencyType
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    account?: AccountUpdateOneRequiredWithoutAgencyNestedInput
  }

  export type AgencyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialMediaLinks?: AgencyUpdatesocialMediaLinksInput | string[]
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    agencyType?: EnumAgencyTypeFieldUpdateOperationsInput | $Enums.AgencyType
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type AgencyCreateManyInput = {
    id?: string
    name: string
    socialMediaLinks?: AgencyCreatesocialMediaLinksInput | string[]
    bannerUrl?: string | null
    address?: string | null
    website?: string | null
    agencyType: $Enums.AgencyType
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
    accountId: string
  }

  export type AgencyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialMediaLinks?: AgencyUpdatesocialMediaLinksInput | string[]
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    agencyType?: EnumAgencyTypeFieldUpdateOperationsInput | $Enums.AgencyType
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
  }

  export type AgencyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialMediaLinks?: AgencyUpdatesocialMediaLinksInput | string[]
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    agencyType?: EnumAgencyTypeFieldUpdateOperationsInput | $Enums.AgencyType
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type SocialAccountCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: $Enums.SocialProvider
    providerId: string
    account: AccountCreateNestedOneWithoutSocialAccountsInput
  }

  export type SocialAccountUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: $Enums.SocialProvider
    providerId: string
    accountId: string
  }

  export type SocialAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: EnumSocialProviderFieldUpdateOperationsInput | $Enums.SocialProvider
    providerId?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneRequiredWithoutSocialAccountsNestedInput
  }

  export type SocialAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: EnumSocialProviderFieldUpdateOperationsInput | $Enums.SocialProvider
    providerId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type SocialAccountCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: $Enums.SocialProvider
    providerId: string
    accountId: string
  }

  export type SocialAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: EnumSocialProviderFieldUpdateOperationsInput | $Enums.SocialProvider
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type SocialAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: EnumSocialProviderFieldUpdateOperationsInput | $Enums.SocialProvider
    providerId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryGroupCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    title_en: string
    title_ru: string
    title_hy: string
    icon?: string | null
    categories?: CategoryCreateNestedManyWithoutGroupInput
  }

  export type CategoryGroupUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    title_en: string
    title_ru: string
    title_hy: string
    icon?: string | null
    categories?: CategoryUncheckedCreateNestedManyWithoutGroupInput
  }

  export type CategoryGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    title_hy?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoryUpdateManyWithoutGroupNestedInput
  }

  export type CategoryGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    title_hy?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoryUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type CategoryGroupCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    title_en: string
    title_ru: string
    title_hy: string
    icon?: string | null
  }

  export type CategoryGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    title_hy?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    title_hy?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    title_en: string
    title_hy: string
    title_ru: string
    description_en: string
    description_hy: string
    description_ru: string
    group: CategoryGroupCreateNestedOneWithoutCategoriesInput
    listings?: ListingCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    title_en: string
    title_hy: string
    title_ru: string
    description_en: string
    description_hy: string
    description_ru: string
    groupId: string
    listings?: ListingUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_hy?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_hy?: StringFieldUpdateOperationsInput | string
    description_ru?: StringFieldUpdateOperationsInput | string
    group?: CategoryGroupUpdateOneRequiredWithoutCategoriesNestedInput
    listings?: ListingUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_hy?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_hy?: StringFieldUpdateOperationsInput | string
    description_ru?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    listings?: ListingUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    title_en: string
    title_hy: string
    title_ru: string
    description_en: string
    description_hy: string
    description_ru: string
    groupId: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_hy?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_hy?: StringFieldUpdateOperationsInput | string
    description_ru?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_hy?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_hy?: StringFieldUpdateOperationsInput | string
    description_ru?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
  }

  export type ListingCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    price: number
    currency: string
    address: string
    imageUrls?: ListingCreateimageUrlsInput | string[]
    area: number
    buildingType: string
    status?: $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields: JsonNullValueInput | InputJsonValue
    isFavorite: boolean
    isTop: boolean
    location: LocationCreateNestedOneWithoutListingsInput
    Category?: CategoryCreateNestedOneWithoutListingsInput
    Account?: AccountCreateNestedOneWithoutListingsInput
  }

  export type ListingUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    price: number
    currency: string
    address: string
    imageUrls?: ListingCreateimageUrlsInput | string[]
    area: number
    buildingType: string
    status?: $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields: JsonNullValueInput | InputJsonValue
    isFavorite: boolean
    isTop: boolean
    locationId: string
    categoryId?: string | null
    accountId?: string | null
  }

  export type ListingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    area?: FloatFieldUpdateOperationsInput | number
    buildingType?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields?: JsonNullValueInput | InputJsonValue
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    location?: LocationUpdateOneRequiredWithoutListingsNestedInput
    Category?: CategoryUpdateOneWithoutListingsNestedInput
    Account?: AccountUpdateOneWithoutListingsNestedInput
  }

  export type ListingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    area?: FloatFieldUpdateOperationsInput | number
    buildingType?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields?: JsonNullValueInput | InputJsonValue
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    locationId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListingCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    price: number
    currency: string
    address: string
    imageUrls?: ListingCreateimageUrlsInput | string[]
    area: number
    buildingType: string
    status?: $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields: JsonNullValueInput | InputJsonValue
    isFavorite: boolean
    isTop: boolean
    locationId: string
    categoryId?: string | null
    accountId?: string | null
  }

  export type ListingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    area?: FloatFieldUpdateOperationsInput | number
    buildingType?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields?: JsonNullValueInput | InputJsonValue
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ListingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    area?: FloatFieldUpdateOperationsInput | number
    buildingType?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields?: JsonNullValueInput | InputJsonValue
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    locationId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocationCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country: string
    city: string
    listings?: ListingCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country: string
    city: string
    listings?: ListingUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    listings?: ListingUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    listings?: ListingUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country: string
    city: string
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
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
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumSubscriptionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeFilter<$PrismaModel> | $Enums.SubscriptionType
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AgencyNullableScalarRelationFilter = {
    is?: AgencyWhereInput | null
    isNot?: AgencyWhereInput | null
  }

  export type SocialAccountListRelationFilter = {
    every?: SocialAccountWhereInput
    some?: SocialAccountWhereInput
    none?: SocialAccountWhereInput
  }

  export type ListingListRelationFilter = {
    every?: ListingWhereInput
    some?: ListingWhereInput
    none?: ListingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SocialAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    isEmailVerified?: SortOrder
    isSubscribed?: SortOrder
    subscriptionType?: SortOrder
    rating?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    isEmailVerified?: SortOrder
    isSubscribed?: SortOrder
    subscriptionType?: SortOrder
    rating?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    isEmailVerified?: SortOrder
    isSubscribed?: SortOrder
    subscriptionType?: SortOrder
    rating?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    rating?: SortOrder
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
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumSubscriptionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    accountId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    accountId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    accountId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumAgencyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AgencyType | EnumAgencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AgencyType[] | ListEnumAgencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgencyType[] | ListEnumAgencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAgencyTypeFilter<$PrismaModel> | $Enums.AgencyType
  }

  export type EnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type AgencyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    socialMediaLinks?: SortOrder
    bannerUrl?: SortOrder
    address?: SortOrder
    website?: SortOrder
    agencyType?: SortOrder
    isVerified?: SortOrder
    verificationStatus?: SortOrder
    accountId?: SortOrder
  }

  export type AgencyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bannerUrl?: SortOrder
    address?: SortOrder
    website?: SortOrder
    agencyType?: SortOrder
    isVerified?: SortOrder
    verificationStatus?: SortOrder
    accountId?: SortOrder
  }

  export type AgencyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bannerUrl?: SortOrder
    address?: SortOrder
    website?: SortOrder
    agencyType?: SortOrder
    isVerified?: SortOrder
    verificationStatus?: SortOrder
    accountId?: SortOrder
  }

  export type EnumAgencyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgencyType | EnumAgencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AgencyType[] | ListEnumAgencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgencyType[] | ListEnumAgencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAgencyTypeWithAggregatesFilter<$PrismaModel> | $Enums.AgencyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgencyTypeFilter<$PrismaModel>
    _max?: NestedEnumAgencyTypeFilter<$PrismaModel>
  }

  export type EnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type EnumSocialProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialProvider | EnumSocialProviderFieldRefInput<$PrismaModel>
    in?: $Enums.SocialProvider[] | ListEnumSocialProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.SocialProvider[] | ListEnumSocialProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumSocialProviderFilter<$PrismaModel> | $Enums.SocialProvider
  }

  export type SocialAccountProviderProviderIdCompoundUniqueInput = {
    provider: $Enums.SocialProvider
    providerId: string
  }

  export type SocialAccountCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    accountId?: SortOrder
  }

  export type SocialAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    accountId?: SortOrder
  }

  export type SocialAccountMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    accountId?: SortOrder
  }

  export type EnumSocialProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialProvider | EnumSocialProviderFieldRefInput<$PrismaModel>
    in?: $Enums.SocialProvider[] | ListEnumSocialProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.SocialProvider[] | ListEnumSocialProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumSocialProviderWithAggregatesFilter<$PrismaModel> | $Enums.SocialProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSocialProviderFilter<$PrismaModel>
    _max?: NestedEnumSocialProviderFilter<$PrismaModel>
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryGroupCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_ru?: SortOrder
    title_hy?: SortOrder
    icon?: SortOrder
  }

  export type CategoryGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_ru?: SortOrder
    title_hy?: SortOrder
    icon?: SortOrder
  }

  export type CategoryGroupMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_ru?: SortOrder
    title_hy?: SortOrder
    icon?: SortOrder
  }

  export type CategoryGroupScalarRelationFilter = {
    is?: CategoryGroupWhereInput
    isNot?: CategoryGroupWhereInput
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_hy?: SortOrder
    title_ru?: SortOrder
    description_en?: SortOrder
    description_hy?: SortOrder
    description_ru?: SortOrder
    groupId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_hy?: SortOrder
    title_ru?: SortOrder
    description_en?: SortOrder
    description_hy?: SortOrder
    description_ru?: SortOrder
    groupId?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_hy?: SortOrder
    title_ru?: SortOrder
    description_en?: SortOrder
    description_hy?: SortOrder
    description_ru?: SortOrder
    groupId?: SortOrder
  }

  export type EnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type AccountNullableScalarRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type ListingCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    address?: SortOrder
    imageUrls?: SortOrder
    area?: SortOrder
    buildingType?: SortOrder
    status?: SortOrder
    priceHistory?: SortOrder
    specificFields?: SortOrder
    isFavorite?: SortOrder
    isTop?: SortOrder
    locationId?: SortOrder
    categoryId?: SortOrder
    accountId?: SortOrder
  }

  export type ListingAvgOrderByAggregateInput = {
    price?: SortOrder
    area?: SortOrder
  }

  export type ListingMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    address?: SortOrder
    area?: SortOrder
    buildingType?: SortOrder
    status?: SortOrder
    isFavorite?: SortOrder
    isTop?: SortOrder
    locationId?: SortOrder
    categoryId?: SortOrder
    accountId?: SortOrder
  }

  export type ListingMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    address?: SortOrder
    area?: SortOrder
    buildingType?: SortOrder
    status?: SortOrder
    isFavorite?: SortOrder
    isTop?: SortOrder
    locationId?: SortOrder
    categoryId?: SortOrder
    accountId?: SortOrder
  }

  export type ListingSumOrderByAggregateInput = {
    price?: SortOrder
    area?: SortOrder
  }

  export type EnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    country?: SortOrder
    city?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    country?: SortOrder
    city?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    country?: SortOrder
    city?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    connect?: UserWhereUniqueInput
  }

  export type AgencyCreateNestedOneWithoutAccountInput = {
    create?: XOR<AgencyCreateWithoutAccountInput, AgencyUncheckedCreateWithoutAccountInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutAccountInput
    connect?: AgencyWhereUniqueInput
  }

  export type SocialAccountCreateNestedManyWithoutAccountInput = {
    create?: XOR<SocialAccountCreateWithoutAccountInput, SocialAccountUncheckedCreateWithoutAccountInput> | SocialAccountCreateWithoutAccountInput[] | SocialAccountUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SocialAccountCreateOrConnectWithoutAccountInput | SocialAccountCreateOrConnectWithoutAccountInput[]
    createMany?: SocialAccountCreateManyAccountInputEnvelope
    connect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
  }

  export type ListingCreateNestedManyWithoutAccountInput = {
    create?: XOR<ListingCreateWithoutAccountInput, ListingUncheckedCreateWithoutAccountInput> | ListingCreateWithoutAccountInput[] | ListingUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutAccountInput | ListingCreateOrConnectWithoutAccountInput[]
    createMany?: ListingCreateManyAccountInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutAccountInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    connect?: UserWhereUniqueInput
  }

  export type AgencyUncheckedCreateNestedOneWithoutAccountInput = {
    create?: XOR<AgencyCreateWithoutAccountInput, AgencyUncheckedCreateWithoutAccountInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutAccountInput
    connect?: AgencyWhereUniqueInput
  }

  export type SocialAccountUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<SocialAccountCreateWithoutAccountInput, SocialAccountUncheckedCreateWithoutAccountInput> | SocialAccountCreateWithoutAccountInput[] | SocialAccountUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SocialAccountCreateOrConnectWithoutAccountInput | SocialAccountCreateOrConnectWithoutAccountInput[]
    createMany?: SocialAccountCreateManyAccountInputEnvelope
    connect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
  }

  export type ListingUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<ListingCreateWithoutAccountInput, ListingUncheckedCreateWithoutAccountInput> | ListingCreateWithoutAccountInput[] | ListingUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutAccountInput | ListingCreateOrConnectWithoutAccountInput[]
    createMany?: ListingCreateManyAccountInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumSubscriptionTypeFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdateOneWithoutAccountNestedInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    upsert?: UserUpsertWithoutAccountInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountInput, UserUpdateWithoutAccountInput>, UserUncheckedUpdateWithoutAccountInput>
  }

  export type AgencyUpdateOneWithoutAccountNestedInput = {
    create?: XOR<AgencyCreateWithoutAccountInput, AgencyUncheckedCreateWithoutAccountInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutAccountInput
    upsert?: AgencyUpsertWithoutAccountInput
    disconnect?: AgencyWhereInput | boolean
    delete?: AgencyWhereInput | boolean
    connect?: AgencyWhereUniqueInput
    update?: XOR<XOR<AgencyUpdateToOneWithWhereWithoutAccountInput, AgencyUpdateWithoutAccountInput>, AgencyUncheckedUpdateWithoutAccountInput>
  }

  export type SocialAccountUpdateManyWithoutAccountNestedInput = {
    create?: XOR<SocialAccountCreateWithoutAccountInput, SocialAccountUncheckedCreateWithoutAccountInput> | SocialAccountCreateWithoutAccountInput[] | SocialAccountUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SocialAccountCreateOrConnectWithoutAccountInput | SocialAccountCreateOrConnectWithoutAccountInput[]
    upsert?: SocialAccountUpsertWithWhereUniqueWithoutAccountInput | SocialAccountUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: SocialAccountCreateManyAccountInputEnvelope
    set?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    disconnect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    delete?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    connect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    update?: SocialAccountUpdateWithWhereUniqueWithoutAccountInput | SocialAccountUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: SocialAccountUpdateManyWithWhereWithoutAccountInput | SocialAccountUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: SocialAccountScalarWhereInput | SocialAccountScalarWhereInput[]
  }

  export type ListingUpdateManyWithoutAccountNestedInput = {
    create?: XOR<ListingCreateWithoutAccountInput, ListingUncheckedCreateWithoutAccountInput> | ListingCreateWithoutAccountInput[] | ListingUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutAccountInput | ListingCreateOrConnectWithoutAccountInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutAccountInput | ListingUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: ListingCreateManyAccountInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutAccountInput | ListingUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutAccountInput | ListingUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type UserUncheckedUpdateOneWithoutAccountNestedInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    upsert?: UserUpsertWithoutAccountInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountInput, UserUpdateWithoutAccountInput>, UserUncheckedUpdateWithoutAccountInput>
  }

  export type AgencyUncheckedUpdateOneWithoutAccountNestedInput = {
    create?: XOR<AgencyCreateWithoutAccountInput, AgencyUncheckedCreateWithoutAccountInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutAccountInput
    upsert?: AgencyUpsertWithoutAccountInput
    disconnect?: AgencyWhereInput | boolean
    delete?: AgencyWhereInput | boolean
    connect?: AgencyWhereUniqueInput
    update?: XOR<XOR<AgencyUpdateToOneWithWhereWithoutAccountInput, AgencyUpdateWithoutAccountInput>, AgencyUncheckedUpdateWithoutAccountInput>
  }

  export type SocialAccountUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<SocialAccountCreateWithoutAccountInput, SocialAccountUncheckedCreateWithoutAccountInput> | SocialAccountCreateWithoutAccountInput[] | SocialAccountUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SocialAccountCreateOrConnectWithoutAccountInput | SocialAccountCreateOrConnectWithoutAccountInput[]
    upsert?: SocialAccountUpsertWithWhereUniqueWithoutAccountInput | SocialAccountUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: SocialAccountCreateManyAccountInputEnvelope
    set?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    disconnect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    delete?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    connect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    update?: SocialAccountUpdateWithWhereUniqueWithoutAccountInput | SocialAccountUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: SocialAccountUpdateManyWithWhereWithoutAccountInput | SocialAccountUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: SocialAccountScalarWhereInput | SocialAccountScalarWhereInput[]
  }

  export type ListingUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<ListingCreateWithoutAccountInput, ListingUncheckedCreateWithoutAccountInput> | ListingCreateWithoutAccountInput[] | ListingUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutAccountInput | ListingCreateOrConnectWithoutAccountInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutAccountInput | ListingUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: ListingCreateManyAccountInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutAccountInput | ListingUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutAccountInput | ListingUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput
    connect?: AccountWhereUniqueInput
  }

  export type AccountUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput
    upsert?: AccountUpsertWithoutUserInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutUserInput, AccountUpdateWithoutUserInput>, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AgencyCreatesocialMediaLinksInput = {
    set: string[]
  }

  export type AccountCreateNestedOneWithoutAgencyInput = {
    create?: XOR<AccountCreateWithoutAgencyInput, AccountUncheckedCreateWithoutAgencyInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAgencyInput
    connect?: AccountWhereUniqueInput
  }

  export type AgencyUpdatesocialMediaLinksInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumAgencyTypeFieldUpdateOperationsInput = {
    set?: $Enums.AgencyType
  }

  export type EnumVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.VerificationStatus
  }

  export type AccountUpdateOneRequiredWithoutAgencyNestedInput = {
    create?: XOR<AccountCreateWithoutAgencyInput, AccountUncheckedCreateWithoutAgencyInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAgencyInput
    upsert?: AccountUpsertWithoutAgencyInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutAgencyInput, AccountUpdateWithoutAgencyInput>, AccountUncheckedUpdateWithoutAgencyInput>
  }

  export type AccountCreateNestedOneWithoutSocialAccountsInput = {
    create?: XOR<AccountCreateWithoutSocialAccountsInput, AccountUncheckedCreateWithoutSocialAccountsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSocialAccountsInput
    connect?: AccountWhereUniqueInput
  }

  export type EnumSocialProviderFieldUpdateOperationsInput = {
    set?: $Enums.SocialProvider
  }

  export type AccountUpdateOneRequiredWithoutSocialAccountsNestedInput = {
    create?: XOR<AccountCreateWithoutSocialAccountsInput, AccountUncheckedCreateWithoutSocialAccountsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSocialAccountsInput
    upsert?: AccountUpsertWithoutSocialAccountsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutSocialAccountsInput, AccountUpdateWithoutSocialAccountsInput>, AccountUncheckedUpdateWithoutSocialAccountsInput>
  }

  export type CategoryCreateNestedManyWithoutGroupInput = {
    create?: XOR<CategoryCreateWithoutGroupInput, CategoryUncheckedCreateWithoutGroupInput> | CategoryCreateWithoutGroupInput[] | CategoryUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutGroupInput | CategoryCreateOrConnectWithoutGroupInput[]
    createMany?: CategoryCreateManyGroupInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<CategoryCreateWithoutGroupInput, CategoryUncheckedCreateWithoutGroupInput> | CategoryCreateWithoutGroupInput[] | CategoryUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutGroupInput | CategoryCreateOrConnectWithoutGroupInput[]
    createMany?: CategoryCreateManyGroupInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CategoryUpdateManyWithoutGroupNestedInput = {
    create?: XOR<CategoryCreateWithoutGroupInput, CategoryUncheckedCreateWithoutGroupInput> | CategoryCreateWithoutGroupInput[] | CategoryUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutGroupInput | CategoryCreateOrConnectWithoutGroupInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutGroupInput | CategoryUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: CategoryCreateManyGroupInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutGroupInput | CategoryUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutGroupInput | CategoryUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<CategoryCreateWithoutGroupInput, CategoryUncheckedCreateWithoutGroupInput> | CategoryCreateWithoutGroupInput[] | CategoryUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutGroupInput | CategoryCreateOrConnectWithoutGroupInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutGroupInput | CategoryUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: CategoryCreateManyGroupInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutGroupInput | CategoryUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutGroupInput | CategoryUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CategoryGroupCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<CategoryGroupCreateWithoutCategoriesInput, CategoryGroupUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: CategoryGroupCreateOrConnectWithoutCategoriesInput
    connect?: CategoryGroupWhereUniqueInput
  }

  export type ListingCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ListingCreateWithoutCategoryInput, ListingUncheckedCreateWithoutCategoryInput> | ListingCreateWithoutCategoryInput[] | ListingUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutCategoryInput | ListingCreateOrConnectWithoutCategoryInput[]
    createMany?: ListingCreateManyCategoryInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type ListingUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ListingCreateWithoutCategoryInput, ListingUncheckedCreateWithoutCategoryInput> | ListingCreateWithoutCategoryInput[] | ListingUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutCategoryInput | ListingCreateOrConnectWithoutCategoryInput[]
    createMany?: ListingCreateManyCategoryInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type CategoryGroupUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<CategoryGroupCreateWithoutCategoriesInput, CategoryGroupUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: CategoryGroupCreateOrConnectWithoutCategoriesInput
    upsert?: CategoryGroupUpsertWithoutCategoriesInput
    connect?: CategoryGroupWhereUniqueInput
    update?: XOR<XOR<CategoryGroupUpdateToOneWithWhereWithoutCategoriesInput, CategoryGroupUpdateWithoutCategoriesInput>, CategoryGroupUncheckedUpdateWithoutCategoriesInput>
  }

  export type ListingUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ListingCreateWithoutCategoryInput, ListingUncheckedCreateWithoutCategoryInput> | ListingCreateWithoutCategoryInput[] | ListingUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutCategoryInput | ListingCreateOrConnectWithoutCategoryInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutCategoryInput | ListingUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ListingCreateManyCategoryInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutCategoryInput | ListingUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutCategoryInput | ListingUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type ListingUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ListingCreateWithoutCategoryInput, ListingUncheckedCreateWithoutCategoryInput> | ListingCreateWithoutCategoryInput[] | ListingUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutCategoryInput | ListingCreateOrConnectWithoutCategoryInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutCategoryInput | ListingUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ListingCreateManyCategoryInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutCategoryInput | ListingUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutCategoryInput | ListingUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type ListingCreateimageUrlsInput = {
    set: string[]
  }

  export type LocationCreateNestedOneWithoutListingsInput = {
    create?: XOR<LocationCreateWithoutListingsInput, LocationUncheckedCreateWithoutListingsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutListingsInput
    connect?: LocationWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutListingsInput = {
    create?: XOR<CategoryCreateWithoutListingsInput, CategoryUncheckedCreateWithoutListingsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutListingsInput
    connect?: CategoryWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutListingsInput = {
    create?: XOR<AccountCreateWithoutListingsInput, AccountUncheckedCreateWithoutListingsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutListingsInput
    connect?: AccountWhereUniqueInput
  }

  export type ListingUpdateimageUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumListingStatusFieldUpdateOperationsInput = {
    set?: $Enums.ListingStatus
  }

  export type LocationUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<LocationCreateWithoutListingsInput, LocationUncheckedCreateWithoutListingsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutListingsInput
    upsert?: LocationUpsertWithoutListingsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutListingsInput, LocationUpdateWithoutListingsInput>, LocationUncheckedUpdateWithoutListingsInput>
  }

  export type CategoryUpdateOneWithoutListingsNestedInput = {
    create?: XOR<CategoryCreateWithoutListingsInput, CategoryUncheckedCreateWithoutListingsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutListingsInput
    upsert?: CategoryUpsertWithoutListingsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutListingsInput, CategoryUpdateWithoutListingsInput>, CategoryUncheckedUpdateWithoutListingsInput>
  }

  export type AccountUpdateOneWithoutListingsNestedInput = {
    create?: XOR<AccountCreateWithoutListingsInput, AccountUncheckedCreateWithoutListingsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutListingsInput
    upsert?: AccountUpsertWithoutListingsInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutListingsInput, AccountUpdateWithoutListingsInput>, AccountUncheckedUpdateWithoutListingsInput>
  }

  export type ListingCreateNestedManyWithoutLocationInput = {
    create?: XOR<ListingCreateWithoutLocationInput, ListingUncheckedCreateWithoutLocationInput> | ListingCreateWithoutLocationInput[] | ListingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutLocationInput | ListingCreateOrConnectWithoutLocationInput[]
    createMany?: ListingCreateManyLocationInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type ListingUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<ListingCreateWithoutLocationInput, ListingUncheckedCreateWithoutLocationInput> | ListingCreateWithoutLocationInput[] | ListingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutLocationInput | ListingCreateOrConnectWithoutLocationInput[]
    createMany?: ListingCreateManyLocationInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type ListingUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ListingCreateWithoutLocationInput, ListingUncheckedCreateWithoutLocationInput> | ListingCreateWithoutLocationInput[] | ListingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutLocationInput | ListingCreateOrConnectWithoutLocationInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutLocationInput | ListingUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ListingCreateManyLocationInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutLocationInput | ListingUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutLocationInput | ListingUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type ListingUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ListingCreateWithoutLocationInput, ListingUncheckedCreateWithoutLocationInput> | ListingCreateWithoutLocationInput[] | ListingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutLocationInput | ListingCreateOrConnectWithoutLocationInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutLocationInput | ListingUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ListingCreateManyLocationInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutLocationInput | ListingUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutLocationInput | ListingUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumSubscriptionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeFilter<$PrismaModel> | $Enums.SubscriptionType
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumAgencyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AgencyType | EnumAgencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AgencyType[] | ListEnumAgencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgencyType[] | ListEnumAgencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAgencyTypeFilter<$PrismaModel> | $Enums.AgencyType
  }

  export type NestedEnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type NestedEnumAgencyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgencyType | EnumAgencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AgencyType[] | ListEnumAgencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgencyType[] | ListEnumAgencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAgencyTypeWithAggregatesFilter<$PrismaModel> | $Enums.AgencyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgencyTypeFilter<$PrismaModel>
    _max?: NestedEnumAgencyTypeFilter<$PrismaModel>
  }

  export type NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type NestedEnumSocialProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialProvider | EnumSocialProviderFieldRefInput<$PrismaModel>
    in?: $Enums.SocialProvider[] | ListEnumSocialProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.SocialProvider[] | ListEnumSocialProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumSocialProviderFilter<$PrismaModel> | $Enums.SocialProvider
  }

  export type NestedEnumSocialProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialProvider | EnumSocialProviderFieldRefInput<$PrismaModel>
    in?: $Enums.SocialProvider[] | ListEnumSocialProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.SocialProvider[] | ListEnumSocialProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumSocialProviderWithAggregatesFilter<$PrismaModel> | $Enums.SocialProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSocialProviderFilter<$PrismaModel>
    _max?: NestedEnumSocialProviderFilter<$PrismaModel>
  }

  export type NestedEnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
  }

  export type NestedEnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutAccountInput = {
    id?: string
    fullName: string
  }

  export type UserUncheckedCreateWithoutAccountInput = {
    id?: string
    fullName: string
  }

  export type UserCreateOrConnectWithoutAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
  }

  export type AgencyCreateWithoutAccountInput = {
    id?: string
    name: string
    socialMediaLinks?: AgencyCreatesocialMediaLinksInput | string[]
    bannerUrl?: string | null
    address?: string | null
    website?: string | null
    agencyType: $Enums.AgencyType
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
  }

  export type AgencyUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    socialMediaLinks?: AgencyCreatesocialMediaLinksInput | string[]
    bannerUrl?: string | null
    address?: string | null
    website?: string | null
    agencyType: $Enums.AgencyType
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
  }

  export type AgencyCreateOrConnectWithoutAccountInput = {
    where: AgencyWhereUniqueInput
    create: XOR<AgencyCreateWithoutAccountInput, AgencyUncheckedCreateWithoutAccountInput>
  }

  export type SocialAccountCreateWithoutAccountInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: $Enums.SocialProvider
    providerId: string
  }

  export type SocialAccountUncheckedCreateWithoutAccountInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: $Enums.SocialProvider
    providerId: string
  }

  export type SocialAccountCreateOrConnectWithoutAccountInput = {
    where: SocialAccountWhereUniqueInput
    create: XOR<SocialAccountCreateWithoutAccountInput, SocialAccountUncheckedCreateWithoutAccountInput>
  }

  export type SocialAccountCreateManyAccountInputEnvelope = {
    data: SocialAccountCreateManyAccountInput | SocialAccountCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type ListingCreateWithoutAccountInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    price: number
    currency: string
    address: string
    imageUrls?: ListingCreateimageUrlsInput | string[]
    area: number
    buildingType: string
    status?: $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields: JsonNullValueInput | InputJsonValue
    isFavorite: boolean
    isTop: boolean
    location: LocationCreateNestedOneWithoutListingsInput
    Category?: CategoryCreateNestedOneWithoutListingsInput
  }

  export type ListingUncheckedCreateWithoutAccountInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    price: number
    currency: string
    address: string
    imageUrls?: ListingCreateimageUrlsInput | string[]
    area: number
    buildingType: string
    status?: $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields: JsonNullValueInput | InputJsonValue
    isFavorite: boolean
    isTop: boolean
    locationId: string
    categoryId?: string | null
  }

  export type ListingCreateOrConnectWithoutAccountInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutAccountInput, ListingUncheckedCreateWithoutAccountInput>
  }

  export type ListingCreateManyAccountInputEnvelope = {
    data: ListingCreateManyAccountInput | ListingCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAccountInput = {
    update: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
  }

  export type AgencyUpsertWithoutAccountInput = {
    update: XOR<AgencyUpdateWithoutAccountInput, AgencyUncheckedUpdateWithoutAccountInput>
    create: XOR<AgencyCreateWithoutAccountInput, AgencyUncheckedCreateWithoutAccountInput>
    where?: AgencyWhereInput
  }

  export type AgencyUpdateToOneWithWhereWithoutAccountInput = {
    where?: AgencyWhereInput
    data: XOR<AgencyUpdateWithoutAccountInput, AgencyUncheckedUpdateWithoutAccountInput>
  }

  export type AgencyUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialMediaLinks?: AgencyUpdatesocialMediaLinksInput | string[]
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    agencyType?: EnumAgencyTypeFieldUpdateOperationsInput | $Enums.AgencyType
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
  }

  export type AgencyUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    socialMediaLinks?: AgencyUpdatesocialMediaLinksInput | string[]
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    agencyType?: EnumAgencyTypeFieldUpdateOperationsInput | $Enums.AgencyType
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
  }

  export type SocialAccountUpsertWithWhereUniqueWithoutAccountInput = {
    where: SocialAccountWhereUniqueInput
    update: XOR<SocialAccountUpdateWithoutAccountInput, SocialAccountUncheckedUpdateWithoutAccountInput>
    create: XOR<SocialAccountCreateWithoutAccountInput, SocialAccountUncheckedCreateWithoutAccountInput>
  }

  export type SocialAccountUpdateWithWhereUniqueWithoutAccountInput = {
    where: SocialAccountWhereUniqueInput
    data: XOR<SocialAccountUpdateWithoutAccountInput, SocialAccountUncheckedUpdateWithoutAccountInput>
  }

  export type SocialAccountUpdateManyWithWhereWithoutAccountInput = {
    where: SocialAccountScalarWhereInput
    data: XOR<SocialAccountUpdateManyMutationInput, SocialAccountUncheckedUpdateManyWithoutAccountInput>
  }

  export type SocialAccountScalarWhereInput = {
    AND?: SocialAccountScalarWhereInput | SocialAccountScalarWhereInput[]
    OR?: SocialAccountScalarWhereInput[]
    NOT?: SocialAccountScalarWhereInput | SocialAccountScalarWhereInput[]
    id?: StringFilter<"SocialAccount"> | string
    createdAt?: DateTimeFilter<"SocialAccount"> | Date | string
    updatedAt?: DateTimeFilter<"SocialAccount"> | Date | string
    provider?: EnumSocialProviderFilter<"SocialAccount"> | $Enums.SocialProvider
    providerId?: StringFilter<"SocialAccount"> | string
    accountId?: StringFilter<"SocialAccount"> | string
  }

  export type ListingUpsertWithWhereUniqueWithoutAccountInput = {
    where: ListingWhereUniqueInput
    update: XOR<ListingUpdateWithoutAccountInput, ListingUncheckedUpdateWithoutAccountInput>
    create: XOR<ListingCreateWithoutAccountInput, ListingUncheckedCreateWithoutAccountInput>
  }

  export type ListingUpdateWithWhereUniqueWithoutAccountInput = {
    where: ListingWhereUniqueInput
    data: XOR<ListingUpdateWithoutAccountInput, ListingUncheckedUpdateWithoutAccountInput>
  }

  export type ListingUpdateManyWithWhereWithoutAccountInput = {
    where: ListingScalarWhereInput
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyWithoutAccountInput>
  }

  export type ListingScalarWhereInput = {
    AND?: ListingScalarWhereInput | ListingScalarWhereInput[]
    OR?: ListingScalarWhereInput[]
    NOT?: ListingScalarWhereInput | ListingScalarWhereInput[]
    id?: StringFilter<"Listing"> | string
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    title?: StringFilter<"Listing"> | string
    description?: StringFilter<"Listing"> | string
    price?: FloatFilter<"Listing"> | number
    currency?: StringFilter<"Listing"> | string
    address?: StringFilter<"Listing"> | string
    imageUrls?: StringNullableListFilter<"Listing">
    area?: FloatFilter<"Listing"> | number
    buildingType?: StringFilter<"Listing"> | string
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    priceHistory?: JsonNullableFilter<"Listing">
    specificFields?: JsonFilter<"Listing">
    isFavorite?: BoolFilter<"Listing"> | boolean
    isTop?: BoolFilter<"Listing"> | boolean
    locationId?: StringFilter<"Listing"> | string
    categoryId?: StringNullableFilter<"Listing"> | string | null
    accountId?: StringNullableFilter<"Listing"> | string | null
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    isEmailVerified?: boolean
    isSubscribed?: boolean
    subscriptionType?: $Enums.SubscriptionType
    rating?: number
    role?: $Enums.Role
    isActive?: boolean
    agency?: AgencyCreateNestedOneWithoutAccountInput
    SocialAccounts?: SocialAccountCreateNestedManyWithoutAccountInput
    listings?: ListingCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    isEmailVerified?: boolean
    isSubscribed?: boolean
    subscriptionType?: $Enums.SubscriptionType
    rating?: number
    role?: $Enums.Role
    isActive?: boolean
    agency?: AgencyUncheckedCreateNestedOneWithoutAccountInput
    SocialAccounts?: SocialAccountUncheckedCreateNestedManyWithoutAccountInput
    listings?: ListingUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpsertWithoutUserInput = {
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutUserInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    rating?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    agency?: AgencyUpdateOneWithoutAccountNestedInput
    SocialAccounts?: SocialAccountUpdateManyWithoutAccountNestedInput
    listings?: ListingUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    rating?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    agency?: AgencyUncheckedUpdateOneWithoutAccountNestedInput
    SocialAccounts?: SocialAccountUncheckedUpdateManyWithoutAccountNestedInput
    listings?: ListingUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateWithoutAgencyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    isEmailVerified?: boolean
    isSubscribed?: boolean
    subscriptionType?: $Enums.SubscriptionType
    rating?: number
    role?: $Enums.Role
    isActive?: boolean
    user?: UserCreateNestedOneWithoutAccountInput
    SocialAccounts?: SocialAccountCreateNestedManyWithoutAccountInput
    listings?: ListingCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutAgencyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    isEmailVerified?: boolean
    isSubscribed?: boolean
    subscriptionType?: $Enums.SubscriptionType
    rating?: number
    role?: $Enums.Role
    isActive?: boolean
    user?: UserUncheckedCreateNestedOneWithoutAccountInput
    SocialAccounts?: SocialAccountUncheckedCreateNestedManyWithoutAccountInput
    listings?: ListingUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutAgencyInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutAgencyInput, AccountUncheckedCreateWithoutAgencyInput>
  }

  export type AccountUpsertWithoutAgencyInput = {
    update: XOR<AccountUpdateWithoutAgencyInput, AccountUncheckedUpdateWithoutAgencyInput>
    create: XOR<AccountCreateWithoutAgencyInput, AccountUncheckedCreateWithoutAgencyInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutAgencyInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutAgencyInput, AccountUncheckedUpdateWithoutAgencyInput>
  }

  export type AccountUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    rating?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutAccountNestedInput
    SocialAccounts?: SocialAccountUpdateManyWithoutAccountNestedInput
    listings?: ListingUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    rating?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUncheckedUpdateOneWithoutAccountNestedInput
    SocialAccounts?: SocialAccountUncheckedUpdateManyWithoutAccountNestedInput
    listings?: ListingUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateWithoutSocialAccountsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    isEmailVerified?: boolean
    isSubscribed?: boolean
    subscriptionType?: $Enums.SubscriptionType
    rating?: number
    role?: $Enums.Role
    isActive?: boolean
    user?: UserCreateNestedOneWithoutAccountInput
    agency?: AgencyCreateNestedOneWithoutAccountInput
    listings?: ListingCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutSocialAccountsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    isEmailVerified?: boolean
    isSubscribed?: boolean
    subscriptionType?: $Enums.SubscriptionType
    rating?: number
    role?: $Enums.Role
    isActive?: boolean
    user?: UserUncheckedCreateNestedOneWithoutAccountInput
    agency?: AgencyUncheckedCreateNestedOneWithoutAccountInput
    listings?: ListingUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutSocialAccountsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutSocialAccountsInput, AccountUncheckedCreateWithoutSocialAccountsInput>
  }

  export type AccountUpsertWithoutSocialAccountsInput = {
    update: XOR<AccountUpdateWithoutSocialAccountsInput, AccountUncheckedUpdateWithoutSocialAccountsInput>
    create: XOR<AccountCreateWithoutSocialAccountsInput, AccountUncheckedCreateWithoutSocialAccountsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutSocialAccountsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutSocialAccountsInput, AccountUncheckedUpdateWithoutSocialAccountsInput>
  }

  export type AccountUpdateWithoutSocialAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    rating?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutAccountNestedInput
    agency?: AgencyUpdateOneWithoutAccountNestedInput
    listings?: ListingUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutSocialAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    rating?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUncheckedUpdateOneWithoutAccountNestedInput
    agency?: AgencyUncheckedUpdateOneWithoutAccountNestedInput
    listings?: ListingUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type CategoryCreateWithoutGroupInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    title_en: string
    title_hy: string
    title_ru: string
    description_en: string
    description_hy: string
    description_ru: string
    listings?: ListingCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutGroupInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    title_en: string
    title_hy: string
    title_ru: string
    description_en: string
    description_hy: string
    description_ru: string
    listings?: ListingUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutGroupInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutGroupInput, CategoryUncheckedCreateWithoutGroupInput>
  }

  export type CategoryCreateManyGroupInputEnvelope = {
    data: CategoryCreateManyGroupInput | CategoryCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithWhereUniqueWithoutGroupInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutGroupInput, CategoryUncheckedUpdateWithoutGroupInput>
    create: XOR<CategoryCreateWithoutGroupInput, CategoryUncheckedCreateWithoutGroupInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutGroupInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutGroupInput, CategoryUncheckedUpdateWithoutGroupInput>
  }

  export type CategoryUpdateManyWithWhereWithoutGroupInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutGroupInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    slug?: StringFilter<"Category"> | string
    title_en?: StringFilter<"Category"> | string
    title_hy?: StringFilter<"Category"> | string
    title_ru?: StringFilter<"Category"> | string
    description_en?: StringFilter<"Category"> | string
    description_hy?: StringFilter<"Category"> | string
    description_ru?: StringFilter<"Category"> | string
    groupId?: StringFilter<"Category"> | string
  }

  export type CategoryGroupCreateWithoutCategoriesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    title_en: string
    title_ru: string
    title_hy: string
    icon?: string | null
  }

  export type CategoryGroupUncheckedCreateWithoutCategoriesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    title_en: string
    title_ru: string
    title_hy: string
    icon?: string | null
  }

  export type CategoryGroupCreateOrConnectWithoutCategoriesInput = {
    where: CategoryGroupWhereUniqueInput
    create: XOR<CategoryGroupCreateWithoutCategoriesInput, CategoryGroupUncheckedCreateWithoutCategoriesInput>
  }

  export type ListingCreateWithoutCategoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    price: number
    currency: string
    address: string
    imageUrls?: ListingCreateimageUrlsInput | string[]
    area: number
    buildingType: string
    status?: $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields: JsonNullValueInput | InputJsonValue
    isFavorite: boolean
    isTop: boolean
    location: LocationCreateNestedOneWithoutListingsInput
    Account?: AccountCreateNestedOneWithoutListingsInput
  }

  export type ListingUncheckedCreateWithoutCategoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    price: number
    currency: string
    address: string
    imageUrls?: ListingCreateimageUrlsInput | string[]
    area: number
    buildingType: string
    status?: $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields: JsonNullValueInput | InputJsonValue
    isFavorite: boolean
    isTop: boolean
    locationId: string
    accountId?: string | null
  }

  export type ListingCreateOrConnectWithoutCategoryInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutCategoryInput, ListingUncheckedCreateWithoutCategoryInput>
  }

  export type ListingCreateManyCategoryInputEnvelope = {
    data: ListingCreateManyCategoryInput | ListingCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryGroupUpsertWithoutCategoriesInput = {
    update: XOR<CategoryGroupUpdateWithoutCategoriesInput, CategoryGroupUncheckedUpdateWithoutCategoriesInput>
    create: XOR<CategoryGroupCreateWithoutCategoriesInput, CategoryGroupUncheckedCreateWithoutCategoriesInput>
    where?: CategoryGroupWhereInput
  }

  export type CategoryGroupUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: CategoryGroupWhereInput
    data: XOR<CategoryGroupUpdateWithoutCategoriesInput, CategoryGroupUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryGroupUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    title_hy?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryGroupUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    title_hy?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListingUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ListingWhereUniqueInput
    update: XOR<ListingUpdateWithoutCategoryInput, ListingUncheckedUpdateWithoutCategoryInput>
    create: XOR<ListingCreateWithoutCategoryInput, ListingUncheckedCreateWithoutCategoryInput>
  }

  export type ListingUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ListingWhereUniqueInput
    data: XOR<ListingUpdateWithoutCategoryInput, ListingUncheckedUpdateWithoutCategoryInput>
  }

  export type ListingUpdateManyWithWhereWithoutCategoryInput = {
    where: ListingScalarWhereInput
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyWithoutCategoryInput>
  }

  export type LocationCreateWithoutListingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country: string
    city: string
  }

  export type LocationUncheckedCreateWithoutListingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country: string
    city: string
  }

  export type LocationCreateOrConnectWithoutListingsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutListingsInput, LocationUncheckedCreateWithoutListingsInput>
  }

  export type CategoryCreateWithoutListingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    title_en: string
    title_hy: string
    title_ru: string
    description_en: string
    description_hy: string
    description_ru: string
    group: CategoryGroupCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutListingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    title_en: string
    title_hy: string
    title_ru: string
    description_en: string
    description_hy: string
    description_ru: string
    groupId: string
  }

  export type CategoryCreateOrConnectWithoutListingsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutListingsInput, CategoryUncheckedCreateWithoutListingsInput>
  }

  export type AccountCreateWithoutListingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    isEmailVerified?: boolean
    isSubscribed?: boolean
    subscriptionType?: $Enums.SubscriptionType
    rating?: number
    role?: $Enums.Role
    isActive?: boolean
    user?: UserCreateNestedOneWithoutAccountInput
    agency?: AgencyCreateNestedOneWithoutAccountInput
    SocialAccounts?: SocialAccountCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutListingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    isEmailVerified?: boolean
    isSubscribed?: boolean
    subscriptionType?: $Enums.SubscriptionType
    rating?: number
    role?: $Enums.Role
    isActive?: boolean
    user?: UserUncheckedCreateNestedOneWithoutAccountInput
    agency?: AgencyUncheckedCreateNestedOneWithoutAccountInput
    SocialAccounts?: SocialAccountUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutListingsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutListingsInput, AccountUncheckedCreateWithoutListingsInput>
  }

  export type LocationUpsertWithoutListingsInput = {
    update: XOR<LocationUpdateWithoutListingsInput, LocationUncheckedUpdateWithoutListingsInput>
    create: XOR<LocationCreateWithoutListingsInput, LocationUncheckedCreateWithoutListingsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutListingsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutListingsInput, LocationUncheckedUpdateWithoutListingsInput>
  }

  export type LocationUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUpsertWithoutListingsInput = {
    update: XOR<CategoryUpdateWithoutListingsInput, CategoryUncheckedUpdateWithoutListingsInput>
    create: XOR<CategoryCreateWithoutListingsInput, CategoryUncheckedCreateWithoutListingsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutListingsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutListingsInput, CategoryUncheckedUpdateWithoutListingsInput>
  }

  export type CategoryUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_hy?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_hy?: StringFieldUpdateOperationsInput | string
    description_ru?: StringFieldUpdateOperationsInput | string
    group?: CategoryGroupUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_hy?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_hy?: StringFieldUpdateOperationsInput | string
    description_ru?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUpsertWithoutListingsInput = {
    update: XOR<AccountUpdateWithoutListingsInput, AccountUncheckedUpdateWithoutListingsInput>
    create: XOR<AccountCreateWithoutListingsInput, AccountUncheckedCreateWithoutListingsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutListingsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutListingsInput, AccountUncheckedUpdateWithoutListingsInput>
  }

  export type AccountUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    rating?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutAccountNestedInput
    agency?: AgencyUpdateOneWithoutAccountNestedInput
    SocialAccounts?: SocialAccountUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    subscriptionType?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    rating?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUncheckedUpdateOneWithoutAccountNestedInput
    agency?: AgencyUncheckedUpdateOneWithoutAccountNestedInput
    SocialAccounts?: SocialAccountUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type ListingCreateWithoutLocationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    price: number
    currency: string
    address: string
    imageUrls?: ListingCreateimageUrlsInput | string[]
    area: number
    buildingType: string
    status?: $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields: JsonNullValueInput | InputJsonValue
    isFavorite: boolean
    isTop: boolean
    Category?: CategoryCreateNestedOneWithoutListingsInput
    Account?: AccountCreateNestedOneWithoutListingsInput
  }

  export type ListingUncheckedCreateWithoutLocationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    price: number
    currency: string
    address: string
    imageUrls?: ListingCreateimageUrlsInput | string[]
    area: number
    buildingType: string
    status?: $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields: JsonNullValueInput | InputJsonValue
    isFavorite: boolean
    isTop: boolean
    categoryId?: string | null
    accountId?: string | null
  }

  export type ListingCreateOrConnectWithoutLocationInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutLocationInput, ListingUncheckedCreateWithoutLocationInput>
  }

  export type ListingCreateManyLocationInputEnvelope = {
    data: ListingCreateManyLocationInput | ListingCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type ListingUpsertWithWhereUniqueWithoutLocationInput = {
    where: ListingWhereUniqueInput
    update: XOR<ListingUpdateWithoutLocationInput, ListingUncheckedUpdateWithoutLocationInput>
    create: XOR<ListingCreateWithoutLocationInput, ListingUncheckedCreateWithoutLocationInput>
  }

  export type ListingUpdateWithWhereUniqueWithoutLocationInput = {
    where: ListingWhereUniqueInput
    data: XOR<ListingUpdateWithoutLocationInput, ListingUncheckedUpdateWithoutLocationInput>
  }

  export type ListingUpdateManyWithWhereWithoutLocationInput = {
    where: ListingScalarWhereInput
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyWithoutLocationInput>
  }

  export type SocialAccountCreateManyAccountInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: $Enums.SocialProvider
    providerId: string
  }

  export type ListingCreateManyAccountInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    price: number
    currency: string
    address: string
    imageUrls?: ListingCreateimageUrlsInput | string[]
    area: number
    buildingType: string
    status?: $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields: JsonNullValueInput | InputJsonValue
    isFavorite: boolean
    isTop: boolean
    locationId: string
    categoryId?: string | null
  }

  export type SocialAccountUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: EnumSocialProviderFieldUpdateOperationsInput | $Enums.SocialProvider
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type SocialAccountUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: EnumSocialProviderFieldUpdateOperationsInput | $Enums.SocialProvider
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type SocialAccountUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: EnumSocialProviderFieldUpdateOperationsInput | $Enums.SocialProvider
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type ListingUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    area?: FloatFieldUpdateOperationsInput | number
    buildingType?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields?: JsonNullValueInput | InputJsonValue
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    location?: LocationUpdateOneRequiredWithoutListingsNestedInput
    Category?: CategoryUpdateOneWithoutListingsNestedInput
  }

  export type ListingUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    area?: FloatFieldUpdateOperationsInput | number
    buildingType?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields?: JsonNullValueInput | InputJsonValue
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    locationId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListingUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    area?: FloatFieldUpdateOperationsInput | number
    buildingType?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields?: JsonNullValueInput | InputJsonValue
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    locationId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateManyGroupInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    title_en: string
    title_hy: string
    title_ru: string
    description_en: string
    description_hy: string
    description_ru: string
  }

  export type CategoryUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_hy?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_hy?: StringFieldUpdateOperationsInput | string
    description_ru?: StringFieldUpdateOperationsInput | string
    listings?: ListingUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_hy?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_hy?: StringFieldUpdateOperationsInput | string
    description_ru?: StringFieldUpdateOperationsInput | string
    listings?: ListingUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_hy?: StringFieldUpdateOperationsInput | string
    title_ru?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_hy?: StringFieldUpdateOperationsInput | string
    description_ru?: StringFieldUpdateOperationsInput | string
  }

  export type ListingCreateManyCategoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    price: number
    currency: string
    address: string
    imageUrls?: ListingCreateimageUrlsInput | string[]
    area: number
    buildingType: string
    status?: $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields: JsonNullValueInput | InputJsonValue
    isFavorite: boolean
    isTop: boolean
    locationId: string
    accountId?: string | null
  }

  export type ListingUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    area?: FloatFieldUpdateOperationsInput | number
    buildingType?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields?: JsonNullValueInput | InputJsonValue
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    location?: LocationUpdateOneRequiredWithoutListingsNestedInput
    Account?: AccountUpdateOneWithoutListingsNestedInput
  }

  export type ListingUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    area?: FloatFieldUpdateOperationsInput | number
    buildingType?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields?: JsonNullValueInput | InputJsonValue
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    locationId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListingUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    area?: FloatFieldUpdateOperationsInput | number
    buildingType?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields?: JsonNullValueInput | InputJsonValue
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    locationId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListingCreateManyLocationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    price: number
    currency: string
    address: string
    imageUrls?: ListingCreateimageUrlsInput | string[]
    area: number
    buildingType: string
    status?: $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields: JsonNullValueInput | InputJsonValue
    isFavorite: boolean
    isTop: boolean
    categoryId?: string | null
    accountId?: string | null
  }

  export type ListingUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    area?: FloatFieldUpdateOperationsInput | number
    buildingType?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields?: JsonNullValueInput | InputJsonValue
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    Category?: CategoryUpdateOneWithoutListingsNestedInput
    Account?: AccountUpdateOneWithoutListingsNestedInput
  }

  export type ListingUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    area?: FloatFieldUpdateOperationsInput | number
    buildingType?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields?: JsonNullValueInput | InputJsonValue
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListingUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    imageUrls?: ListingUpdateimageUrlsInput | string[]
    area?: FloatFieldUpdateOperationsInput | number
    buildingType?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    specificFields?: JsonNullValueInput | InputJsonValue
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
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
  export const dmmf: runtime.BaseDMMF
}