
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/parzival/workspace/oneirocom/magickML/portal/cloud/packages/db/src/lib/prisma/client-portal",
      "fromEnvVar": null
    },
    "config": {
      "name": "prisma",
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [
      "fullTextSearch",
      "multiSchema",
      "postgresqlExtensions",
      "views"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "..",
  "clientVersion": "5.9.1",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "PORTAL_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgICBwcm92aWRlciAgICAgICAgPSAicHJpc21hLWNsaWVudC1qcyIKICAgIG91dHB1dCAgICAgICAgICA9ICIuL2NsaWVudC1wb3J0YWwiCiAgICBwcmV2aWV3RmVhdHVyZXMgPSBbImZ1bGxUZXh0U2VhcmNoIiwgIm11bHRpU2NoZW1hIiwgInBvc3RncmVzcWxFeHRlbnNpb25zIiwgInZpZXdzIl0KICAgIG5hbWUgICAgICAgICAgICA9ICJwcmlzbWEiCn0KCmRhdGFzb3VyY2UgZGIgewogICAgcHJvdmlkZXIgICAgICAgICAgPSAicG9zdGdyZXNxbCIKICAgIHVybCAgICAgICAgICAgICAgID0gZW52KCJQT1JUQUxfREFUQUJBU0VfVVJMIikKICAgIHNoYWRvd0RhdGFiYXNlVXJsID0gZW52KCJQT1JUQUxfU0hBRE9XX0RBVEFCQVNFX1VSTCIpCiAgICBleHRlbnNpb25zICAgICAgICA9IFt1dWlkX29zc3AobWFwOiAidXVpZC1vc3NwIiksIHZlY3Rvcl0KICAgIHNjaGVtYXMgICAgICAgICAgID0gWyJwb3J0YWwiXQp9Cgptb2RlbCBQcm9qZWN0IHsKICAgIGlkICAgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogICAgb3duZXIgICAgICAgU3RyaW5nCiAgICBuYW1lICAgICAgICBTdHJpbmcKICAgIGRlc2NyaXB0aW9uIFN0cmluZz8KICAgIGNyZWF0ZWRBdCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkKICAgIGRlbGV0ZWRBdCAgIERhdGVUaW1lPwogICAgdXBkYXRlZEF0ICAgRGF0ZVRpbWU/IEB1cGRhdGVkQXQKICAgIGltYWdlICAgICAgIFN0cmluZz8KICAgIGxhc3RBY3RpdmUgIERhdGVUaW1lPwoKICAgIEBAbWFwKCJwcm9qZWN0cyIpCiAgICBAQHNjaGVtYSgicG9ydGFsIikKfQoKbW9kZWwgVGVtcGxhdGUgewogICAgaWQgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpCiAgICBuYW1lICAgICAgICBTdHJpbmcKICAgIGRlc2NyaXB0aW9uIFN0cmluZz8KICAgIGltYWdlICAgICAgIFN0cmluZz8KICAgIGdyYXBoICAgICAgIEpzb24KICAgIGNyZWF0ZWRBdCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkKICAgIGRlbGV0ZWRBdCAgIERhdGVUaW1lPwogICAgdXBkYXRlZEF0ICAgRGF0ZVRpbWU/IEB1cGRhdGVkQXQKCiAgICBAQG1hcCgidGVtcGxhdGVzIikKICAgIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cgptb2RlbCBQdWJsaWNBZ2VudCB7CiAgICBpZCAgICAgICAgICBTdHJpbmcgICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpCiAgICBhZ2VudElkICAgICBTdHJpbmcgICAgIEB1bmlxdWUKICAgIHVzZXJJZCAgICAgIFN0cmluZwogICAgbWFkZVB1YmxpYyAgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkKICAgIGRlbGV0ZWRBdCAgIERhdGVUaW1lPwogICAgZGVzY3JpcHRpb24gU3RyaW5nICAgICBAZGVmYXVsdCgiIikKICAgIHJlbWl4YWJsZSAgIEJvb2xlYW4gICAgQGRlZmF1bHQoZmFsc2UpCiAgICBpc1RlbXBsYXRlICBCb29sZWFuICAgIEBkZWZhdWx0KGZhbHNlKQogICAgZmVhdHVyZWQgICAgQm9vbGVhbiAgICBAZGVmYXVsdChmYWxzZSkKICAgIGNvbW1lbnRzICAgIENvbW1lbnRzW10KICAgIGxpa2VzICAgICAgIExpa2VzW10KICAgIFJlcG9ydHMgICAgIFJlcG9ydHNbXQoKICAgIEBAbWFwKCJwdWJsaWNBZ2VudHMiKQogICAgQEBzY2hlbWEoInBvcnRhbCIpCn0KCm1vZGVsIFJlcG9ydHMgewogICAgaWQgICAgICAgICAgICBTdHJpbmcgICAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogICAgcHVibGljQWdlbnRJZCBTdHJpbmcKICAgIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgICAgQGRlZmF1bHQobm93KCkpCiAgICBtZXNzYWdlICAgICAgIFN0cmluZwogICAgcHVibGljQWdlbnQgICBQdWJsaWNBZ2VudCBAcmVsYXRpb24oZmllbGRzOiBbcHVibGljQWdlbnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQoKICAgIEBAbWFwKCJyZXBvcnRzIikKICAgIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cgptb2RlbCBMaWtlcyB7CiAgICBpZCAgICAgICAgICAgIFN0cmluZyAgICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpCiAgICB1c2VySWQgICAgICAgIFN0cmluZwogICAgcHVibGljQWdlbnRJZCBTdHJpbmcKICAgIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgICAgQGRlZmF1bHQobm93KCkpCiAgICB1cGRhdGVkQXQgICAgIERhdGVUaW1lPyAgIEB1cGRhdGVkQXQKICAgIHB1YmxpY0FnZW50ICAgUHVibGljQWdlbnQgQHJlbGF0aW9uKGZpZWxkczogW3B1YmxpY0FnZW50SWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKCiAgICBAQHVuaXF1ZShbdXNlcklkLCBwdWJsaWNBZ2VudElkXSkKICAgIEBAbWFwKCJsaWtlcyIpCiAgICBAQHNjaGVtYSgicG9ydGFsIikKfQoKbW9kZWwgQ29tbWVudHMgewogICAgaWQgICAgICAgICAgICBTdHJpbmcgICAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogICAgdXNlcklkICAgICAgICBTdHJpbmcKICAgIHB1YmxpY0FnZW50SWQgU3RyaW5nCiAgICBjb250ZW50ICAgICAgIFN0cmluZwogICAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSAgICBAZGVmYXVsdChub3coKSkKICAgIHVwZGF0ZWRBdCAgICAgRGF0ZVRpbWU/ICAgQHVwZGF0ZWRBdAogICAgZGVsZXRlZEF0ICAgICBEYXRlVGltZT8KICAgIHB1YmxpY0FnZW50ICAgUHVibGljQWdlbnQgQHJlbGF0aW9uKGZpZWxkczogW3B1YmxpY0FnZW50SWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKCiAgICBAQG1hcCgiY29tbWVudHMiKQogICAgQEBzY2hlbWEoInBvcnRhbCIpCn0KCm1vZGVsIEFub255bW91c1VzZXIgewogICAgaWQgICAgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogICAgY3JlYXRlZEF0ICAgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkKICAgIGFub255bW91c0lkICBTdHJpbmcgICAgQHVuaXF1ZQogICAgZmluZ2VycHJpbnQgIFN0cmluZwogICAgbGFzdEFjY2Vzc2VkIERhdGVUaW1lPwoKICAgIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cgptb2RlbCBCdWRnZXQgewogICAgaWQgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpCiAgICB1c2VySWQgICAgICBTdHJpbmcgICAgQHVuaXF1ZQogICAgYmFsYW5jZSAgICAgRGVjaW1hbCAgIEBkZWZhdWx0KDApCiAgICBjdXJyZW50Q29zdCBEZWNpbWFsPyAgQGRlZmF1bHQoMCkKICAgIG1vZGVsQ29zdCAgIEpzb24/ICAgICBAZGVmYXVsdCgie30iKQogICAgY3JlYXRlZEF0ICAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQogICAgdXBkYXRlZEF0ICAgRGF0ZVRpbWU/IEB1cGRhdGVkQXQKCiAgICBAQG1hcCgiYnVkZ2V0IikKICAgIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cgptb2RlbCBQcm9tb3Rpb24gewogICAgaWQgICAgICAgICAgU3RyaW5nICAgICAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogICAgbmFtZSAgICAgICAgU3RyaW5nCiAgICB1c2VySWQgICAgICBTdHJpbmcKICAgIHR5cGUgICAgICAgIFByb21vdGlvblR5cGUKICAgIGFtb3VudCAgICAgIERlY2ltYWwKICAgIGRlc2NyaXB0aW9uIFN0cmluZz8KICAgIHZhbGlkRnJvbSAgIERhdGVUaW1lCiAgICB2YWxpZFVudGlsICBEYXRlVGltZQogICAgaXNVc2VkICAgICAgQm9vbGVhbiAgICAgICBAZGVmYXVsdChmYWxzZSkKICAgIGNyZWF0ZWRBdCAgIERhdGVUaW1lICAgICAgQGRlZmF1bHQobm93KCkpCiAgICB1cGRhdGVkQXQgICBEYXRlVGltZT8gICAgIEB1cGRhdGVkQXQKCiAgICBAQG1hcCgicHJvbW90aW9ucyIpCiAgICBAQHNjaGVtYSgicG9ydGFsIikKfQoKdmlldyBhZ2VudHMgewogICAgaWQgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICBAdW5pcXVlIEBkYi5VdWlkCiAgICByb290U3BlbGwgICAgICAgICAgICAgSnNvbj8KICAgIHB1YmxpY1ZhcmlhYmxlcyAgICAgICBTdHJpbmc/CiAgICBzZWNyZXRzICAgICAgICAgICAgICAgU3RyaW5nPwogICAgbmFtZSAgICAgICAgICAgICAgICAgIFN0cmluZz8KICAgIGVuYWJsZWQgICAgICAgICAgICAgICBCb29sZWFuPwogICAgdXBkYXRlZEF0ICAgICAgICAgICAgIFN0cmluZz8KICAgIHBpbmdlZEF0ICAgICAgICAgICAgICBTdHJpbmc/CiAgICBwcm9qZWN0SWQgICAgICAgICAgICAgU3RyaW5nPwogICAgZGF0YSAgICAgICAgICAgICAgICAgIEpzb24/CiAgICBydW5TdGF0ZSAgICAgICAgICAgICAgU3RyaW5nPwogICAgaW1hZ2UgICAgICAgICAgICAgICAgIFN0cmluZz8KICAgIHJvb3RTcGVsbElkICAgICAgICAgICBTdHJpbmc/ICAgQGRiLlV1aWQKICAgIGRlZmF1bHQgICAgICAgICAgICAgICBCb29sZWFuPwogICAgY3JlYXRlZEF0ICAgICAgICAgICAgIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wdHooNikKICAgIGN1cnJlbnRTcGVsbFJlbGVhc2VJZCBTdHJpbmc/ICAgQGRiLlV1aWQKICAgIGVtYmVkTW9kZWwgICAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogICAgdmVyc2lvbiAgICAgICAgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgICBlbWJlZGRpbmdQcm92aWRlciAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICAgIGVtYmVkZGluZ01vZGVsICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogICAgcHVibGljQWdlbnRJZCAgICAgICAgIFN0cmluZz8KICAgIGRlc2NyaXB0aW9uICAgICAgICAgICBTdHJpbmc/CiAgICByZW1peGFibGUgICAgICAgICAgICAgQm9vbGVhbj8KICAgIGZlYXR1cmVkICAgICAgICAgICAgICBCb29sZWFuPwogICAgaXNUZW1wbGF0ZSAgICAgICAgICAgIEJvb2xlYW4/CiAgICBpc1B1YmxpYyAgICAgICAgICAgICAgQm9vbGVhbj8KICAgIGNyZWF0b3JJZCAgICAgICAgICAgICBTdHJpbmc/CiAgICBjcmVhdG9yTmFtZSAgICAgICAgICAgU3RyaW5nPwogICAgY3JlYXRvckltYWdlICAgICAgICAgIFN0cmluZz8KICAgIGxpa2VzQ291bnQgICAgICAgICAgICBJbnQ/CiAgICBjb21tZW50c0NvdW50ICAgICAgICAgQmlnSW50PwoKICAgIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cgp2aWV3IHNwZWxscyB7CiAgICBpZCAgICAgICAgICAgICBTdHJpbmcgIEB1bmlxdWUgQGRiLlV1aWQKICAgIG5hbWUgICAgICAgICAgIFN0cmluZz8KICAgIHByb2plY3RJZCAgICAgIFN0cmluZz8KICAgIGdyYXBoICAgICAgICAgIEpzb24/CiAgICBjcmVhdGVkQXQgICAgICBTdHJpbmc/CiAgICB1cGRhdGVkQXQgICAgICBTdHJpbmc/CiAgICB0eXBlICAgICAgICAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICAgIHNwZWxsUmVsZWFzZUlkIFN0cmluZz8gQGRiLlV1aWQKCiAgICBAQHNjaGVtYSgicG9ydGFsIikKfQoKdmlldyBkb2N1bWVudHMgewogICAgaWQgICAgICAgIFN0cmluZyAgQHVuaXF1ZSBAZGIuVXVpZAogICAgdHlwZSAgICAgIFN0cmluZz8KICAgIHByb2plY3RJZCBTdHJpbmc/CiAgICBkYXRlICAgICAgU3RyaW5nPwogICAgbWV0YWRhdGEgIEpzb24/CgogICAgQEBzY2hlbWEoInBvcnRhbCIpCn0KCnZpZXcgY3VzdG9tZXJzIHsKICAgIGlkICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgQGlkIEB1bmlxdWUKICAgIG9iamVjdCAgICAgICAgICAgICAgICBTdHJpbmc/CiAgICBhZGRyZXNzICAgICAgICAgICAgICAgSnNvbj8KICAgIGRlc2NyaXB0aW9uICAgICAgICAgICBTdHJpbmc/CiAgICBlbWFpbCAgICAgICAgICAgICAgICAgU3RyaW5nPwogICAgbWV0YWRhdGEgICAgICAgICAgICAgIEpzb24/CiAgICBuYW1lICAgICAgICAgICAgICAgICAgU3RyaW5nPwogICAgcGhvbmUgICAgICAgICAgICAgICAgIFN0cmluZz8KICAgIHNoaXBwaW5nICAgICAgICAgICAgICBKc29uPwogICAgYmFsYW5jZSAgICAgICAgICAgICAgIEludD8KICAgIGNyZWF0ZWQgICAgICAgICAgICAgICBJbnQ/CiAgICBjdXJyZW5jeSAgICAgICAgICAgICAgU3RyaW5nPwogICAgZGVmYXVsdF9zb3VyY2UgICAgICAgIFN0cmluZz8KICAgIGRlbGlucXVlbnQgICAgICAgICAgICBCb29sZWFuPwogICAgZGlzY291bnQgICAgICAgICAgICAgIEpzb24/CiAgICBpbnZvaWNlX3ByZWZpeCAgICAgICAgU3RyaW5nPwogICAgaW52b2ljZV9zZXR0aW5ncyAgICAgIEpzb24/CiAgICBsaXZlbW9kZSAgICAgICAgICAgICAgQm9vbGVhbj8KICAgIG5leHRfaW52b2ljZV9zZXF1ZW5jZSBJbnQ/CiAgICBwcmVmZXJyZWRfbG9jYWxlcyAgICAgSnNvbj8KICAgIHRheF9leGVtcHQgICAgICAgICAgICBTdHJpbmc/CiAgICB1cGRhdGVkX2F0ICAgICAgICAgICAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXB0eig2KQogICAgZGVsZXRlZCAgICAgICAgICAgICAgIEJvb2xlYW4/CgogICAgQEBzY2hlbWEoInBvcnRhbCIpCn0KCnZpZXcgc3Vic2NyaXB0aW9ucyB7CiAgICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlkIEB1bmlxdWUKICAgIG9iamVjdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgICBjYW5jZWxfYXRfcGVyaW9kX2VuZCAgICAgICAgICAgICAgQm9vbGVhbj8KICAgIGN1cnJlbnRfcGVyaW9kX2VuZCAgICAgICAgICAgICAgICBJbnQ/CiAgICBjdXJyZW50X3BlcmlvZF9zdGFydCAgICAgICAgICAgICAgSW50PwogICAgZGVmYXVsdF9wYXltZW50X21ldGhvZCAgICAgICAgICAgIFN0cmluZz8KICAgIGl0ZW1zICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKc29uPwogICAgbWV0YWRhdGEgICAgICAgICAgICAgICAgICAgICAgICAgIEpzb24/CiAgICBwZW5kaW5nX3NldHVwX2ludGVudCAgICAgICAgICAgICAgU3RyaW5nPwogICAgcGVuZGluZ191cGRhdGUgICAgICAgICAgICAgICAgICAgIEpzb24/CiAgICBzdGF0dXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5zdXBwb3J0ZWQoInN1YnNjcmlwdGlvbl9zdGF0dXMiKT8KICAgIGFwcGxpY2F0aW9uX2ZlZV9wZXJjZW50ICAgICAgICAgICBGbG9hdD8KICAgIGJpbGxpbmdfY3ljbGVfYW5jaG9yICAgICAgICAgICAgICBJbnQ/CiAgICBiaWxsaW5nX3RocmVzaG9sZHMgICAgICAgICAgICAgICAgSnNvbj8KICAgIGNhbmNlbF9hdCAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/CiAgICBjYW5jZWxlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgSW50PwogICAgY29sbGVjdGlvbl9tZXRob2QgICAgICAgICAgICAgICAgIFN0cmluZz8KICAgIGNyZWF0ZWQgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/CiAgICBkYXlzX3VudGlsX2R1ZSAgICAgICAgICAgICAgICAgICAgSW50PwogICAgZGVmYXVsdF9zb3VyY2UgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICAgIGRlZmF1bHRfdGF4X3JhdGVzICAgICAgICAgICAgICAgICBKc29uPwogICAgZGlzY291bnQgICAgICAgICAgICAgICAgICAgICAgICAgIEpzb24/CiAgICBlbmRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PwogICAgbGl2ZW1vZGUgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4/CiAgICBuZXh0X3BlbmRpbmdfaW52b2ljZV9pdGVtX2ludm9pY2UgSW50PwogICAgcGF1c2VfY29sbGVjdGlvbiAgICAgICAgICAgICAgICAgIEpzb24/CiAgICBwZW5kaW5nX2ludm9pY2VfaXRlbV9pbnRlcnZhbCAgICAgSnNvbj8KICAgIHN0YXJ0X2RhdGUgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/CiAgICB0cmFuc2Zlcl9kYXRhICAgICAgICAgICAgICAgICAgICAgSnNvbj8KICAgIHRyaWFsX2VuZCAgICAgICAgICAgICAgICAgICAgICAgICBKc29uPwogICAgdHJpYWxfc3RhcnQgICAgICAgICAgICAgICAgICAgICAgIEpzb24/CiAgICBzY2hlZHVsZSAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogICAgY3VzdG9tZXIgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICAgIGxhdGVzdF9pbnZvaWNlICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgICBwbGFuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogICAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXB0eig2KQoKICAgIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cgp2aWV3IHByb2R1Y3RzIHsKICAgIGlkICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICBAaWQgQHVuaXF1ZQogICAgb2JqZWN0ICAgICAgICAgICAgICAgU3RyaW5nPwogICAgYWN0aXZlICAgICAgICAgICAgICAgQm9vbGVhbj8KICAgIGRlc2NyaXB0aW9uICAgICAgICAgIFN0cmluZz8KICAgIG1ldGFkYXRhICAgICAgICAgICAgIEpzb24/CiAgICBuYW1lICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgICBjcmVhdGVkICAgICAgICAgICAgICBJbnQ/CiAgICBpbWFnZXMgICAgICAgICAgICAgICBKc29uPwogICAgbGl2ZW1vZGUgICAgICAgICAgICAgQm9vbGVhbj8KICAgIHBhY2thZ2VfZGltZW5zaW9ucyAgIEpzb24/CiAgICBzaGlwcGFibGUgICAgICAgICAgICBCb29sZWFuPwogICAgc3RhdGVtZW50X2Rlc2NyaXB0b3IgU3RyaW5nPwogICAgdW5pdF9sYWJlbCAgICAgICAgICAgU3RyaW5nPwogICAgdXBkYXRlZCAgICAgICAgICAgICAgSW50PwogICAgdXJsICAgICAgICAgICAgICAgICAgU3RyaW5nPwogICAgdXBkYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXB0eig2KQoKICAgIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cgp2aWV3IHByaWNlcyB7CiAgICBpZCAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAdW5pcXVlCiAgICBvYmplY3QgICAgICAgICAgICAgIFN0cmluZz8KICAgIGFjdGl2ZSAgICAgICAgICAgICAgQm9vbGVhbj8KICAgIGN1cnJlbmN5ICAgICAgICAgICAgU3RyaW5nPwogICAgbWV0YWRhdGEgICAgICAgICAgICBKc29uPwogICAgbmlja25hbWUgICAgICAgICAgICBTdHJpbmc/CiAgICByZWN1cnJpbmcgICAgICAgICAgIEpzb24/CiAgICB0eXBlICAgICAgICAgICAgICAgIFVuc3VwcG9ydGVkKCJwcmljaW5nX3R5cGUiKT8KICAgIHVuaXRfYW1vdW50ICAgICAgICAgSW50PwogICAgYmlsbGluZ19zY2hlbWUgICAgICBTdHJpbmc/CiAgICBjcmVhdGVkICAgICAgICAgICAgIEludD8KICAgIGxpdmVtb2RlICAgICAgICAgICAgQm9vbGVhbj8KICAgIGxvb2t1cF9rZXkgICAgICAgICAgU3RyaW5nPwogICAgdGllcnNfbW9kZSAgICAgICAgICBVbnN1cHBvcnRlZCgicHJpY2luZ190aWVycyIpPwogICAgdHJhbnNmb3JtX3F1YW50aXR5ICBKc29uPwogICAgdW5pdF9hbW91bnRfZGVjaW1hbCBTdHJpbmc/CiAgICBwcm9kdWN0ICAgICAgICAgICAgIFN0cmluZz8KICAgIHVwZGF0ZWRfYXQgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcHR6KDYpCgogICAgQEBzY2hlbWEoInBvcnRhbCIpCn0KCmVudW0gUHJvbW90aW9uVHlwZSB7CiAgICBJTlRSTwogICAgQURNSU4KCiAgICBAQHNjaGVtYSgicG9ydGFsIikKfQoKZW51bSBTdWJzY3JpcHRpb25UeXBlIHsKICAgIEZSRUUKICAgIFNUQU5EQVJECiAgICBQUkVNSVVNCgogICAgQEBzY2hlbWEoInBvcnRhbCIpCn0K",
  "inlineSchemaHash": "480361d93d19c1999d1ba1dea8306b4997aba1828e47c20e1a6ad6d164a5bc93",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Project\":{\"dbName\":\"projects\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Template\":{\"dbName\":\"templates\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"graph\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PublicAgent\":{\"dbName\":\"publicAgents\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"madePublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remixable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isTemplate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"featured\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Comments\",\"relationName\":\"CommentsToPublicAgent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Likes\",\"relationName\":\"LikesToPublicAgent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Reports\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reports\",\"relationName\":\"PublicAgentToReports\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Reports\":{\"dbName\":\"reports\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicAgentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicAgent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PublicAgent\",\"relationName\":\"PublicAgentToReports\",\"relationFromFields\":[\"publicAgentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Likes\":{\"dbName\":\"likes\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicAgentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"publicAgent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PublicAgent\",\"relationName\":\"LikesToPublicAgent\",\"relationFromFields\":[\"publicAgentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"publicAgentId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"publicAgentId\"]}],\"isGenerated\":false},\"Comments\":{\"dbName\":\"comments\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicAgentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicAgent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PublicAgent\",\"relationName\":\"CommentsToPublicAgent\",\"relationFromFields\":[\"publicAgentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AnonymousUser\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anonymousId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fingerprint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastAccessed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Budget\":{\"dbName\":\"budget\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentCost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelCost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Json\",\"default\":\"{}\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Promotion\":{\"dbName\":\"promotions\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PromotionType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"validFrom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"validUntil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"agents\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rootSpell\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicVariables\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"secrets\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pingedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"runState\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rootSpellId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentSpellReleaseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"embedModel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"embeddingProvider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"embeddingModel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicAgentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remixable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"featured\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isTemplate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatorName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatorImage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likesCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commentsCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"spells\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"graph\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spellReleaseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"documents\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"customers\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"object\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shipping\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default_source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delinquent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invoice_prefix\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invoice_settings\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"livemode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"next_invoice_sequence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preferred_locales\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tax_exempt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"subscriptions\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"object\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancel_at_period_end\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_period_end\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_period_start\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default_payment_method\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"items\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pending_setup_intent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pending_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"application_fee_percent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"billing_cycle_anchor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"billing_thresholds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancel_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"canceled_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collection_method\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"days_until_due\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default_source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default_tax_rates\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ended_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"livemode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"next_pending_invoice_item_invoice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pause_collection\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pending_invoice_item_interval\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transfer_data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trial_end\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trial_start\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schedule\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latest_invoice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"products\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"object\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"livemode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"package_dimensions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shippable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statement_descriptor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unit_label\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"prices\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"object\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nickname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recurring\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unit_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"billing_scheme\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"livemode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lookup_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transform_quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unit_amount_decimal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"PromotionType\":{\"values\":[{\"name\":\"INTRO\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null}],\"dbName\":null},\"SubscriptionType\":{\"values\":[{\"name\":\"FREE\",\"dbName\":null},{\"name\":\"STANDARD\",\"dbName\":null},{\"name\":\"PREMIUM\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    PORTAL_DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['PORTAL_DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.PORTAL_DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

