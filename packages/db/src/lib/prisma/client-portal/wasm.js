
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  owner: 'owner',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt',
  updatedAt: 'updatedAt',
  image: 'image',
  lastActive: 'lastActive'
};

exports.Prisma.TemplateScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  image: 'image',
  graph: 'graph',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PublicAgentScalarFieldEnum = {
  id: 'id',
  agentId: 'agentId',
  userId: 'userId',
  madePublic: 'madePublic',
  deletedAt: 'deletedAt',
  description: 'description',
  remixable: 'remixable',
  isTemplate: 'isTemplate',
  featured: 'featured'
};

exports.Prisma.ReportsScalarFieldEnum = {
  id: 'id',
  publicAgentId: 'publicAgentId',
  createdAt: 'createdAt',
  message: 'message'
};

exports.Prisma.LikesScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  publicAgentId: 'publicAgentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CommentsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  publicAgentId: 'publicAgentId',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.AnonymousUserScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  anonymousId: 'anonymousId',
  fingerprint: 'fingerprint',
  lastAccessed: 'lastAccessed'
};

exports.Prisma.BudgetScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  balance: 'balance',
  currentCost: 'currentCost',
  modelCost: 'modelCost',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PromotionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  userId: 'userId',
  type: 'type',
  amount: 'amount',
  description: 'description',
  validFrom: 'validFrom',
  validUntil: 'validUntil',
  isUsed: 'isUsed',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AgentsScalarFieldEnum = {
  id: 'id',
  rootSpell: 'rootSpell',
  publicVariables: 'publicVariables',
  secrets: 'secrets',
  name: 'name',
  enabled: 'enabled',
  updatedAt: 'updatedAt',
  pingedAt: 'pingedAt',
  projectId: 'projectId',
  data: 'data',
  runState: 'runState',
  image: 'image',
  rootSpellId: 'rootSpellId',
  default: 'default',
  createdAt: 'createdAt',
  currentSpellReleaseId: 'currentSpellReleaseId',
  embedModel: 'embedModel',
  version: 'version',
  embeddingProvider: 'embeddingProvider',
  embeddingModel: 'embeddingModel',
  publicAgentId: 'publicAgentId',
  description: 'description',
  remixable: 'remixable',
  featured: 'featured',
  isTemplate: 'isTemplate',
  isPublic: 'isPublic',
  creatorId: 'creatorId',
  creatorName: 'creatorName',
  creatorImage: 'creatorImage',
  likesCount: 'likesCount',
  commentsCount: 'commentsCount'
};

exports.Prisma.SpellsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  projectId: 'projectId',
  graph: 'graph',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  type: 'type',
  spellReleaseId: 'spellReleaseId'
};

exports.Prisma.DocumentsScalarFieldEnum = {
  id: 'id',
  type: 'type',
  projectId: 'projectId',
  date: 'date',
  metadata: 'metadata'
};

exports.Prisma.CustomersScalarFieldEnum = {
  id: 'id',
  object: 'object',
  address: 'address',
  description: 'description',
  email: 'email',
  metadata: 'metadata',
  name: 'name',
  phone: 'phone',
  shipping: 'shipping',
  balance: 'balance',
  created: 'created',
  currency: 'currency',
  default_source: 'default_source',
  delinquent: 'delinquent',
  discount: 'discount',
  invoice_prefix: 'invoice_prefix',
  invoice_settings: 'invoice_settings',
  livemode: 'livemode',
  next_invoice_sequence: 'next_invoice_sequence',
  preferred_locales: 'preferred_locales',
  tax_exempt: 'tax_exempt',
  updated_at: 'updated_at',
  deleted: 'deleted'
};

exports.Prisma.SubscriptionsScalarFieldEnum = {
  id: 'id',
  object: 'object',
  cancel_at_period_end: 'cancel_at_period_end',
  current_period_end: 'current_period_end',
  current_period_start: 'current_period_start',
  default_payment_method: 'default_payment_method',
  items: 'items',
  metadata: 'metadata',
  pending_setup_intent: 'pending_setup_intent',
  pending_update: 'pending_update',
  application_fee_percent: 'application_fee_percent',
  billing_cycle_anchor: 'billing_cycle_anchor',
  billing_thresholds: 'billing_thresholds',
  cancel_at: 'cancel_at',
  canceled_at: 'canceled_at',
  collection_method: 'collection_method',
  created: 'created',
  days_until_due: 'days_until_due',
  default_source: 'default_source',
  default_tax_rates: 'default_tax_rates',
  discount: 'discount',
  ended_at: 'ended_at',
  livemode: 'livemode',
  next_pending_invoice_item_invoice: 'next_pending_invoice_item_invoice',
  pause_collection: 'pause_collection',
  pending_invoice_item_interval: 'pending_invoice_item_interval',
  start_date: 'start_date',
  transfer_data: 'transfer_data',
  trial_end: 'trial_end',
  trial_start: 'trial_start',
  schedule: 'schedule',
  customer: 'customer',
  latest_invoice: 'latest_invoice',
  plan: 'plan',
  updated_at: 'updated_at'
};

exports.Prisma.ProductsScalarFieldEnum = {
  id: 'id',
  object: 'object',
  active: 'active',
  description: 'description',
  metadata: 'metadata',
  name: 'name',
  created: 'created',
  images: 'images',
  livemode: 'livemode',
  package_dimensions: 'package_dimensions',
  shippable: 'shippable',
  statement_descriptor: 'statement_descriptor',
  unit_label: 'unit_label',
  updated: 'updated',
  url: 'url',
  updated_at: 'updated_at'
};

exports.Prisma.PricesScalarFieldEnum = {
  id: 'id',
  object: 'object',
  active: 'active',
  currency: 'currency',
  metadata: 'metadata',
  nickname: 'nickname',
  recurring: 'recurring',
  unit_amount: 'unit_amount',
  billing_scheme: 'billing_scheme',
  created: 'created',
  livemode: 'livemode',
  lookup_key: 'lookup_key',
  transform_quantity: 'transform_quantity',
  unit_amount_decimal: 'unit_amount_decimal',
  product: 'product',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.ProjectOrderByRelevanceFieldEnum = {
  id: 'id',
  owner: 'owner',
  name: 'name',
  description: 'description',
  image: 'image'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.TemplateOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  image: 'image'
};

exports.Prisma.PublicAgentOrderByRelevanceFieldEnum = {
  id: 'id',
  agentId: 'agentId',
  userId: 'userId',
  description: 'description'
};

exports.Prisma.ReportsOrderByRelevanceFieldEnum = {
  id: 'id',
  publicAgentId: 'publicAgentId',
  message: 'message'
};

exports.Prisma.LikesOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  publicAgentId: 'publicAgentId'
};

exports.Prisma.CommentsOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  publicAgentId: 'publicAgentId',
  content: 'content'
};

exports.Prisma.AnonymousUserOrderByRelevanceFieldEnum = {
  id: 'id',
  anonymousId: 'anonymousId',
  fingerprint: 'fingerprint'
};

exports.Prisma.BudgetOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId'
};

exports.Prisma.PromotionOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  userId: 'userId',
  description: 'description'
};

exports.Prisma.agentsOrderByRelevanceFieldEnum = {
  id: 'id',
  publicVariables: 'publicVariables',
  secrets: 'secrets',
  name: 'name',
  updatedAt: 'updatedAt',
  pingedAt: 'pingedAt',
  projectId: 'projectId',
  runState: 'runState',
  image: 'image',
  rootSpellId: 'rootSpellId',
  currentSpellReleaseId: 'currentSpellReleaseId',
  embedModel: 'embedModel',
  version: 'version',
  embeddingProvider: 'embeddingProvider',
  embeddingModel: 'embeddingModel',
  publicAgentId: 'publicAgentId',
  description: 'description',
  creatorId: 'creatorId',
  creatorName: 'creatorName',
  creatorImage: 'creatorImage'
};

exports.Prisma.spellsOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  projectId: 'projectId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  type: 'type',
  spellReleaseId: 'spellReleaseId'
};

exports.Prisma.documentsOrderByRelevanceFieldEnum = {
  id: 'id',
  type: 'type',
  projectId: 'projectId',
  date: 'date'
};

exports.Prisma.customersOrderByRelevanceFieldEnum = {
  id: 'id',
  object: 'object',
  description: 'description',
  email: 'email',
  name: 'name',
  phone: 'phone',
  currency: 'currency',
  default_source: 'default_source',
  invoice_prefix: 'invoice_prefix',
  tax_exempt: 'tax_exempt'
};

exports.Prisma.subscriptionsOrderByRelevanceFieldEnum = {
  id: 'id',
  object: 'object',
  default_payment_method: 'default_payment_method',
  pending_setup_intent: 'pending_setup_intent',
  collection_method: 'collection_method',
  default_source: 'default_source',
  schedule: 'schedule',
  customer: 'customer',
  latest_invoice: 'latest_invoice',
  plan: 'plan'
};

exports.Prisma.productsOrderByRelevanceFieldEnum = {
  id: 'id',
  object: 'object',
  description: 'description',
  name: 'name',
  statement_descriptor: 'statement_descriptor',
  unit_label: 'unit_label',
  url: 'url'
};

exports.Prisma.pricesOrderByRelevanceFieldEnum = {
  id: 'id',
  object: 'object',
  currency: 'currency',
  nickname: 'nickname',
  billing_scheme: 'billing_scheme',
  lookup_key: 'lookup_key',
  unit_amount_decimal: 'unit_amount_decimal',
  product: 'product'
};
exports.PromotionType = exports.$Enums.PromotionType = {
  INTRO: 'INTRO',
  ADMIN: 'ADMIN'
};

exports.Prisma.ModelName = {
  Project: 'Project',
  Template: 'Template',
  PublicAgent: 'PublicAgent',
  Reports: 'Reports',
  Likes: 'Likes',
  Comments: 'Comments',
  AnonymousUser: 'AnonymousUser',
  Budget: 'Budget',
  Promotion: 'Promotion',
  agents: 'agents',
  spells: 'spells',
  documents: 'documents',
  customers: 'customers',
  subscriptions: 'subscriptions',
  products: 'products',
  prices: 'prices'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
