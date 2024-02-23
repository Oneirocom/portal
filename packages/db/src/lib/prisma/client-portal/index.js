
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
} = require('./runtime/library.js')


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


  const path = require('path')

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
  spells: 'spells',
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
  image: 'image',
  spells: 'spells'
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
      "value": "/home/coffee/Desktop/m/portal/cloud/packages/db/src/lib/prisma/client-portal",
      "fromEnvVar": null
    },
    "config": {
      "name": "prisma",
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
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
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgICBwcm92aWRlciAgICAgICAgPSAicHJpc21hLWNsaWVudC1qcyIKICAgIG91dHB1dCAgICAgICAgICA9ICIuL2NsaWVudC1wb3J0YWwiCiAgICBwcmV2aWV3RmVhdHVyZXMgPSBbImZ1bGxUZXh0U2VhcmNoIiwgIm11bHRpU2NoZW1hIiwgInBvc3RncmVzcWxFeHRlbnNpb25zIiwgInZpZXdzIl0KICAgIG5hbWUgICAgICAgICAgICA9ICJwcmlzbWEiCn0KCmRhdGFzb3VyY2UgZGIgewogICAgcHJvdmlkZXIgICAgICAgICAgPSAicG9zdGdyZXNxbCIKICAgIHVybCAgICAgICAgICAgICAgID0gZW52KCJQT1JUQUxfREFUQUJBU0VfVVJMIikKICAgIHNoYWRvd0RhdGFiYXNlVXJsID0gZW52KCJQT1JUQUxfU0hBRE9XX0RBVEFCQVNFX1VSTCIpCiAgICBleHRlbnNpb25zICAgICAgICA9IFt1dWlkX29zc3AobWFwOiAidXVpZC1vc3NwIiksIHZlY3Rvcl0KICAgIHNjaGVtYXMgICAgICAgICAgID0gWyJwb3J0YWwiXQp9Cgptb2RlbCBQcm9qZWN0IHsKICAgIGlkICAgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogICAgb3duZXIgICAgICAgU3RyaW5nCiAgICBuYW1lICAgICAgICBTdHJpbmcKICAgIGRlc2NyaXB0aW9uIFN0cmluZz8KICAgIGNyZWF0ZWRBdCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkKICAgIGRlbGV0ZWRBdCAgIERhdGVUaW1lPwogICAgdXBkYXRlZEF0ICAgRGF0ZVRpbWU/IEB1cGRhdGVkQXQKICAgIGltYWdlICAgICAgIFN0cmluZz8KICAgIGxhc3RBY3RpdmUgIERhdGVUaW1lPwoKICAgIEBAbWFwKCJwcm9qZWN0cyIpCiAgICBAQHNjaGVtYSgicG9ydGFsIikKfQoKbW9kZWwgVGVtcGxhdGUgewogICAgaWQgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpCiAgICBuYW1lICAgICAgICBTdHJpbmcKICAgIGRlc2NyaXB0aW9uIFN0cmluZz8KICAgIGltYWdlICAgICAgIFN0cmluZz8KICAgIGdyYXBoICAgICAgIEpzb24/CiAgICBzcGVsbHMgICAgICBTdHJpbmdbXSAgQGRlZmF1bHQoW10pCiAgICBjcmVhdGVkQXQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpCiAgICBkZWxldGVkQXQgICBEYXRlVGltZT8KICAgIHVwZGF0ZWRBdCAgIERhdGVUaW1lPyBAdXBkYXRlZEF0CgogICAgQEBtYXAoInRlbXBsYXRlcyIpCiAgICBAQHNjaGVtYSgicG9ydGFsIikKfQoKbW9kZWwgUHVibGljQWdlbnQgewogICAgaWQgICAgICAgICAgU3RyaW5nICAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogICAgYWdlbnRJZCAgICAgU3RyaW5nICAgICBAdW5pcXVlCiAgICB1c2VySWQgICAgICBTdHJpbmcKICAgIG1hZGVQdWJsaWMgIERhdGVUaW1lICAgQGRlZmF1bHQobm93KCkpCiAgICBkZWxldGVkQXQgICBEYXRlVGltZT8KICAgIGRlc2NyaXB0aW9uIFN0cmluZyAgICAgQGRlZmF1bHQoIiIpCiAgICByZW1peGFibGUgICBCb29sZWFuICAgIEBkZWZhdWx0KGZhbHNlKQogICAgaXNUZW1wbGF0ZSAgQm9vbGVhbiAgICBAZGVmYXVsdChmYWxzZSkKICAgIGZlYXR1cmVkICAgIEJvb2xlYW4gICAgQGRlZmF1bHQoZmFsc2UpCiAgICBjb21tZW50cyAgICBDb21tZW50c1tdCiAgICBsaWtlcyAgICAgICBMaWtlc1tdCiAgICBSZXBvcnRzICAgICBSZXBvcnRzW10KCiAgICBAQG1hcCgicHVibGljQWdlbnRzIikKICAgIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cgptb2RlbCBSZXBvcnRzIHsKICAgIGlkICAgICAgICAgICAgU3RyaW5nICAgICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkKICAgIHB1YmxpY0FnZW50SWQgU3RyaW5nCiAgICBjcmVhdGVkQXQgICAgIERhdGVUaW1lICAgIEBkZWZhdWx0KG5vdygpKQogICAgbWVzc2FnZSAgICAgICBTdHJpbmcKICAgIHB1YmxpY0FnZW50ICAgUHVibGljQWdlbnQgQHJlbGF0aW9uKGZpZWxkczogW3B1YmxpY0FnZW50SWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKCiAgICBAQG1hcCgicmVwb3J0cyIpCiAgICBAQHNjaGVtYSgicG9ydGFsIikKfQoKbW9kZWwgTGlrZXMgewogICAgaWQgICAgICAgICAgICBTdHJpbmcgICAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogICAgdXNlcklkICAgICAgICBTdHJpbmcKICAgIHB1YmxpY0FnZW50SWQgU3RyaW5nCiAgICBjcmVhdGVkQXQgICAgIERhdGVUaW1lICAgIEBkZWZhdWx0KG5vdygpKQogICAgdXBkYXRlZEF0ICAgICBEYXRlVGltZT8gICBAdXBkYXRlZEF0CiAgICBwdWJsaWNBZ2VudCAgIFB1YmxpY0FnZW50IEByZWxhdGlvbihmaWVsZHM6IFtwdWJsaWNBZ2VudElkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCgogICAgQEB1bmlxdWUoW3VzZXJJZCwgcHVibGljQWdlbnRJZF0pCiAgICBAQG1hcCgibGlrZXMiKQogICAgQEBzY2hlbWEoInBvcnRhbCIpCn0KCm1vZGVsIENvbW1lbnRzIHsKICAgIGlkICAgICAgICAgICAgU3RyaW5nICAgICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkKICAgIHVzZXJJZCAgICAgICAgU3RyaW5nCiAgICBwdWJsaWNBZ2VudElkIFN0cmluZwogICAgY29udGVudCAgICAgICBTdHJpbmcKICAgIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgICAgQGRlZmF1bHQobm93KCkpCiAgICB1cGRhdGVkQXQgICAgIERhdGVUaW1lPyAgIEB1cGRhdGVkQXQKICAgIGRlbGV0ZWRBdCAgICAgRGF0ZVRpbWU/CiAgICBwdWJsaWNBZ2VudCAgIFB1YmxpY0FnZW50IEByZWxhdGlvbihmaWVsZHM6IFtwdWJsaWNBZ2VudElkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCgogICAgQEBtYXAoImNvbW1lbnRzIikKICAgIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cgptb2RlbCBBbm9ueW1vdXNVc2VyIHsKICAgIGlkICAgICAgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkKICAgIGNyZWF0ZWRBdCAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpCiAgICBhbm9ueW1vdXNJZCAgU3RyaW5nICAgIEB1bmlxdWUKICAgIGZpbmdlcnByaW50ICBTdHJpbmcKICAgIGxhc3RBY2Nlc3NlZCBEYXRlVGltZT8KCiAgICBAQHNjaGVtYSgicG9ydGFsIikKfQoKbW9kZWwgQnVkZ2V0IHsKICAgIGlkICAgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogICAgdXNlcklkICAgICAgU3RyaW5nICAgIEB1bmlxdWUKICAgIGJhbGFuY2UgICAgIERlY2ltYWwgICBAZGVmYXVsdCgwKQogICAgY3VycmVudENvc3QgRGVjaW1hbD8gIEBkZWZhdWx0KDApCiAgICBtb2RlbENvc3QgICBKc29uPyAgICAgQGRlZmF1bHQoInt9IikKICAgIGNyZWF0ZWRBdCAgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkKICAgIHVwZGF0ZWRBdCAgIERhdGVUaW1lPyBAdXBkYXRlZEF0CgogICAgQEBtYXAoImJ1ZGdldCIpCiAgICBAQHNjaGVtYSgicG9ydGFsIikKfQoKbW9kZWwgUHJvbW90aW9uIHsKICAgIGlkICAgICAgICAgIFN0cmluZyAgICAgICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkKICAgIG5hbWUgICAgICAgIFN0cmluZwogICAgdXNlcklkICAgICAgU3RyaW5nCiAgICB0eXBlICAgICAgICBQcm9tb3Rpb25UeXBlCiAgICBhbW91bnQgICAgICBEZWNpbWFsCiAgICBkZXNjcmlwdGlvbiBTdHJpbmc/CiAgICB2YWxpZEZyb20gICBEYXRlVGltZQogICAgdmFsaWRVbnRpbCAgRGF0ZVRpbWUKICAgIGlzVXNlZCAgICAgIEJvb2xlYW4gICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgICBjcmVhdGVkQXQgICBEYXRlVGltZSAgICAgIEBkZWZhdWx0KG5vdygpKQogICAgdXBkYXRlZEF0ICAgRGF0ZVRpbWU/ICAgICBAdXBkYXRlZEF0CgogICAgQEBtYXAoInByb21vdGlvbnMiKQogICAgQEBzY2hlbWEoInBvcnRhbCIpCn0KCnZpZXcgYWdlbnRzIHsKICAgIGlkICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgQHVuaXF1ZSBAZGIuVXVpZAogICAgcm9vdFNwZWxsICAgICAgICAgICAgIEpzb24/CiAgICBwdWJsaWNWYXJpYWJsZXMgICAgICAgU3RyaW5nPwogICAgc2VjcmV0cyAgICAgICAgICAgICAgIFN0cmluZz8KICAgIG5hbWUgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgICBlbmFibGVkICAgICAgICAgICAgICAgQm9vbGVhbj8KICAgIHVwZGF0ZWRBdCAgICAgICAgICAgICBTdHJpbmc/CiAgICBwaW5nZWRBdCAgICAgICAgICAgICAgU3RyaW5nPwogICAgcHJvamVjdElkICAgICAgICAgICAgIFN0cmluZz8KICAgIGRhdGEgICAgICAgICAgICAgICAgICBKc29uPwogICAgcnVuU3RhdGUgICAgICAgICAgICAgIFN0cmluZz8KICAgIGltYWdlICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgICByb290U3BlbGxJZCAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5VdWlkCiAgICBkZWZhdWx0ICAgICAgICAgICAgICAgQm9vbGVhbj8KICAgIGNyZWF0ZWRBdCAgICAgICAgICAgICBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcHR6KDYpCiAgICBjdXJyZW50U3BlbGxSZWxlYXNlSWQgU3RyaW5nPyAgIEBkYi5VdWlkCiAgICBlbWJlZE1vZGVsICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICAgIHZlcnNpb24gICAgICAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogICAgZW1iZWRkaW5nUHJvdmlkZXIgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgICBlbWJlZGRpbmdNb2RlbCAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICAgIHB1YmxpY0FnZW50SWQgICAgICAgICBTdHJpbmc/CiAgICBkZXNjcmlwdGlvbiAgICAgICAgICAgU3RyaW5nPwogICAgcmVtaXhhYmxlICAgICAgICAgICAgIEJvb2xlYW4/CiAgICBmZWF0dXJlZCAgICAgICAgICAgICAgQm9vbGVhbj8KICAgIGlzVGVtcGxhdGUgICAgICAgICAgICBCb29sZWFuPwogICAgaXNQdWJsaWMgICAgICAgICAgICAgIEJvb2xlYW4/CiAgICBjcmVhdG9ySWQgICAgICAgICAgICAgU3RyaW5nPwogICAgY3JlYXRvck5hbWUgICAgICAgICAgIFN0cmluZz8KICAgIGNyZWF0b3JJbWFnZSAgICAgICAgICBTdHJpbmc/CiAgICBsaWtlc0NvdW50ICAgICAgICAgICAgSW50PwogICAgY29tbWVudHNDb3VudCAgICAgICAgIEJpZ0ludD8KCiAgICBAQHNjaGVtYSgicG9ydGFsIikKfQoKdmlldyBzcGVsbHMgewogICAgaWQgICAgICAgICAgICAgU3RyaW5nICBAdW5pcXVlIEBkYi5VdWlkCiAgICBuYW1lICAgICAgICAgICBTdHJpbmc/CiAgICBwcm9qZWN0SWQgICAgICBTdHJpbmc/CiAgICBncmFwaCAgICAgICAgICBKc29uPwogICAgY3JlYXRlZEF0ICAgICAgU3RyaW5nPwogICAgdXBkYXRlZEF0ICAgICAgU3RyaW5nPwogICAgdHlwZSAgICAgICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyNTUpCiAgICBzcGVsbFJlbGVhc2VJZCBTdHJpbmc/IEBkYi5VdWlkCgogICAgQEBzY2hlbWEoInBvcnRhbCIpCn0KCnZpZXcgZG9jdW1lbnRzIHsKICAgIGlkICAgICAgICBTdHJpbmcgIEB1bmlxdWUgQGRiLlV1aWQKICAgIHR5cGUgICAgICBTdHJpbmc/CiAgICBwcm9qZWN0SWQgU3RyaW5nPwogICAgZGF0ZSAgICAgIFN0cmluZz8KICAgIG1ldGFkYXRhICBKc29uPwoKICAgIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cgp2aWV3IGN1c3RvbWVycyB7CiAgICBpZCAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgIEBpZCBAdW5pcXVlCiAgICBvYmplY3QgICAgICAgICAgICAgICAgU3RyaW5nPwogICAgYWRkcmVzcyAgICAgICAgICAgICAgIEpzb24/CiAgICBkZXNjcmlwdGlvbiAgICAgICAgICAgU3RyaW5nPwogICAgZW1haWwgICAgICAgICAgICAgICAgIFN0cmluZz8KICAgIG1ldGFkYXRhICAgICAgICAgICAgICBKc29uPwogICAgbmFtZSAgICAgICAgICAgICAgICAgIFN0cmluZz8KICAgIHBob25lICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgICBzaGlwcGluZyAgICAgICAgICAgICAgSnNvbj8KICAgIGJhbGFuY2UgICAgICAgICAgICAgICBJbnQ/CiAgICBjcmVhdGVkICAgICAgICAgICAgICAgSW50PwogICAgY3VycmVuY3kgICAgICAgICAgICAgIFN0cmluZz8KICAgIGRlZmF1bHRfc291cmNlICAgICAgICBTdHJpbmc/CiAgICBkZWxpbnF1ZW50ICAgICAgICAgICAgQm9vbGVhbj8KICAgIGRpc2NvdW50ICAgICAgICAgICAgICBKc29uPwogICAgaW52b2ljZV9wcmVmaXggICAgICAgIFN0cmluZz8KICAgIGludm9pY2Vfc2V0dGluZ3MgICAgICBKc29uPwogICAgbGl2ZW1vZGUgICAgICAgICAgICAgIEJvb2xlYW4/CiAgICBuZXh0X2ludm9pY2Vfc2VxdWVuY2UgSW50PwogICAgcHJlZmVycmVkX2xvY2FsZXMgICAgIEpzb24/CiAgICB0YXhfZXhlbXB0ICAgICAgICAgICAgU3RyaW5nPwogICAgdXBkYXRlZF9hdCAgICAgICAgICAgIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wdHooNikKICAgIGRlbGV0ZWQgICAgICAgICAgICAgICBCb29sZWFuPwoKICAgIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cgp2aWV3IHN1YnNjcmlwdGlvbnMgewogICAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAdW5pcXVlCiAgICBvYmplY3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogICAgY2FuY2VsX2F0X3BlcmlvZF9lbmQgICAgICAgICAgICAgIEJvb2xlYW4/CiAgICBjdXJyZW50X3BlcmlvZF9lbmQgICAgICAgICAgICAgICAgSW50PwogICAgY3VycmVudF9wZXJpb2Rfc3RhcnQgICAgICAgICAgICAgIEludD8KICAgIGRlZmF1bHRfcGF5bWVudF9tZXRob2QgICAgICAgICAgICBTdHJpbmc/CiAgICBpdGVtcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSnNvbj8KICAgIG1ldGFkYXRhICAgICAgICAgICAgICAgICAgICAgICAgICBKc29uPwogICAgcGVuZGluZ19zZXR1cF9pbnRlbnQgICAgICAgICAgICAgIFN0cmluZz8KICAgIHBlbmRpbmdfdXBkYXRlICAgICAgICAgICAgICAgICAgICBKc29uPwogICAgc3RhdHVzICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuc3VwcG9ydGVkKCJzdWJzY3JpcHRpb25fc3RhdHVzIik/CiAgICBhcHBsaWNhdGlvbl9mZWVfcGVyY2VudCAgICAgICAgICAgRmxvYXQ/CiAgICBiaWxsaW5nX2N5Y2xlX2FuY2hvciAgICAgICAgICAgICAgSW50PwogICAgYmlsbGluZ190aHJlc2hvbGRzICAgICAgICAgICAgICAgIEpzb24/CiAgICBjYW5jZWxfYXQgICAgICAgICAgICAgICAgICAgICAgICAgSW50PwogICAgY2FuY2VsZWRfYXQgICAgICAgICAgICAgICAgICAgICAgIEludD8KICAgIGNvbGxlY3Rpb25fbWV0aG9kICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgICBjcmVhdGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PwogICAgZGF5c191bnRpbF9kdWUgICAgICAgICAgICAgICAgICAgIEludD8KICAgIGRlZmF1bHRfc291cmNlICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgICBkZWZhdWx0X3RheF9yYXRlcyAgICAgICAgICAgICAgICAgSnNvbj8KICAgIGRpc2NvdW50ICAgICAgICAgICAgICAgICAgICAgICAgICBKc29uPwogICAgZW5kZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8KICAgIGxpdmVtb2RlICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuPwogICAgbmV4dF9wZW5kaW5nX2ludm9pY2VfaXRlbV9pbnZvaWNlIEludD8KICAgIHBhdXNlX2NvbGxlY3Rpb24gICAgICAgICAgICAgICAgICBKc29uPwogICAgcGVuZGluZ19pbnZvaWNlX2l0ZW1faW50ZXJ2YWwgICAgIEpzb24/CiAgICBzdGFydF9kYXRlICAgICAgICAgICAgICAgICAgICAgICAgSW50PwogICAgdHJhbnNmZXJfZGF0YSAgICAgICAgICAgICAgICAgICAgIEpzb24/CiAgICB0cmlhbF9lbmQgICAgICAgICAgICAgICAgICAgICAgICAgSnNvbj8KICAgIHRyaWFsX3N0YXJ0ICAgICAgICAgICAgICAgICAgICAgICBKc29uPwogICAgc2NoZWR1bGUgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICAgIGN1c3RvbWVyICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgICBsYXRlc3RfaW52b2ljZSAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogICAgcGxhbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICAgIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wdHooNikKCiAgICBAQHNjaGVtYSgicG9ydGFsIikKfQoKdmlldyBwcm9kdWN0cyB7CiAgICBpZCAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgQGlkIEB1bmlxdWUKICAgIG9iamVjdCAgICAgICAgICAgICAgIFN0cmluZz8KICAgIGFjdGl2ZSAgICAgICAgICAgICAgIEJvb2xlYW4/CiAgICBkZXNjcmlwdGlvbiAgICAgICAgICBTdHJpbmc/CiAgICBtZXRhZGF0YSAgICAgICAgICAgICBKc29uPwogICAgbmFtZSAgICAgICAgICAgICAgICAgU3RyaW5nPwogICAgY3JlYXRlZCAgICAgICAgICAgICAgSW50PwogICAgaW1hZ2VzICAgICAgICAgICAgICAgSnNvbj8KICAgIGxpdmVtb2RlICAgICAgICAgICAgIEJvb2xlYW4/CiAgICBwYWNrYWdlX2RpbWVuc2lvbnMgICBKc29uPwogICAgc2hpcHBhYmxlICAgICAgICAgICAgQm9vbGVhbj8KICAgIHN0YXRlbWVudF9kZXNjcmlwdG9yIFN0cmluZz8KICAgIHVuaXRfbGFiZWwgICAgICAgICAgIFN0cmluZz8KICAgIHVwZGF0ZWQgICAgICAgICAgICAgIEludD8KICAgIHVybCAgICAgICAgICAgICAgICAgIFN0cmluZz8KICAgIHVwZGF0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wdHooNikKCiAgICBAQHNjaGVtYSgicG9ydGFsIikKfQoKdmlldyBwcmljZXMgewogICAgaWQgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQHVuaXF1ZQogICAgb2JqZWN0ICAgICAgICAgICAgICBTdHJpbmc/CiAgICBhY3RpdmUgICAgICAgICAgICAgIEJvb2xlYW4/CiAgICBjdXJyZW5jeSAgICAgICAgICAgIFN0cmluZz8KICAgIG1ldGFkYXRhICAgICAgICAgICAgSnNvbj8KICAgIG5pY2tuYW1lICAgICAgICAgICAgU3RyaW5nPwogICAgcmVjdXJyaW5nICAgICAgICAgICBKc29uPwogICAgdHlwZSAgICAgICAgICAgICAgICBVbnN1cHBvcnRlZCgicHJpY2luZ190eXBlIik/CiAgICB1bml0X2Ftb3VudCAgICAgICAgIEludD8KICAgIGJpbGxpbmdfc2NoZW1lICAgICAgU3RyaW5nPwogICAgY3JlYXRlZCAgICAgICAgICAgICBJbnQ/CiAgICBsaXZlbW9kZSAgICAgICAgICAgIEJvb2xlYW4/CiAgICBsb29rdXBfa2V5ICAgICAgICAgIFN0cmluZz8KICAgIHRpZXJzX21vZGUgICAgICAgICAgVW5zdXBwb3J0ZWQoInByaWNpbmdfdGllcnMiKT8KICAgIHRyYW5zZm9ybV9xdWFudGl0eSAgSnNvbj8KICAgIHVuaXRfYW1vdW50X2RlY2ltYWwgU3RyaW5nPwogICAgcHJvZHVjdCAgICAgICAgICAgICBTdHJpbmc/CiAgICB1cGRhdGVkX2F0ICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgIEBkYi5UaW1lc3RhbXB0eig2KQoKICAgIEBAc2NoZW1hKCJwb3J0YWwiKQp9CgplbnVtIFByb21vdGlvblR5cGUgewogICAgSU5UUk8KICAgIEFETUlOCgogICAgQEBzY2hlbWEoInBvcnRhbCIpCn0KCmVudW0gU3Vic2NyaXB0aW9uVHlwZSB7CiAgICBGUkVFCiAgICBTVEFOREFSRAogICAgUFJFTUlVTQoKICAgIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cg==",
  "inlineSchemaHash": "842ee7970ef3e11321e9f1c93e6b246420593cbcb2eeb35c0c83765097ec019c",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/lib/prisma/client-portal",
    "lib/prisma/client-portal",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Project\":{\"dbName\":\"projects\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Template\":{\"dbName\":\"templates\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"graph\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spells\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PublicAgent\":{\"dbName\":\"publicAgents\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"madePublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remixable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isTemplate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"featured\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Comments\",\"relationName\":\"CommentsToPublicAgent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Likes\",\"relationName\":\"LikesToPublicAgent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Reports\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reports\",\"relationName\":\"PublicAgentToReports\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Reports\":{\"dbName\":\"reports\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicAgentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicAgent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PublicAgent\",\"relationName\":\"PublicAgentToReports\",\"relationFromFields\":[\"publicAgentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Likes\":{\"dbName\":\"likes\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicAgentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"publicAgent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PublicAgent\",\"relationName\":\"LikesToPublicAgent\",\"relationFromFields\":[\"publicAgentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"publicAgentId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"publicAgentId\"]}],\"isGenerated\":false},\"Comments\":{\"dbName\":\"comments\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicAgentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicAgent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PublicAgent\",\"relationName\":\"CommentsToPublicAgent\",\"relationFromFields\":[\"publicAgentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AnonymousUser\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anonymousId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fingerprint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastAccessed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Budget\":{\"dbName\":\"budget\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentCost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelCost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Json\",\"default\":\"{}\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Promotion\":{\"dbName\":\"promotions\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PromotionType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"validFrom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"validUntil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"agents\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rootSpell\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicVariables\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"secrets\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pingedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"runState\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rootSpellId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentSpellReleaseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"embedModel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"embeddingProvider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"embeddingModel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicAgentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remixable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"featured\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isTemplate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatorName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatorImage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likesCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commentsCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"spells\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"graph\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spellReleaseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"documents\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"projectId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"customers\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"object\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shipping\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default_source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delinquent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invoice_prefix\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invoice_settings\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"livemode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"next_invoice_sequence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preferred_locales\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tax_exempt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"subscriptions\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"object\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancel_at_period_end\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_period_end\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_period_start\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default_payment_method\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"items\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pending_setup_intent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pending_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"application_fee_percent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"billing_cycle_anchor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"billing_thresholds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancel_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"canceled_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collection_method\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"days_until_due\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default_source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default_tax_rates\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ended_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"livemode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"next_pending_invoice_item_invoice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pause_collection\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pending_invoice_item_interval\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transfer_data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trial_end\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trial_start\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schedule\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latest_invoice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"products\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"object\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"livemode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"package_dimensions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shippable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statement_descriptor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unit_label\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"prices\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"object\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nickname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recurring\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unit_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"billing_scheme\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"livemode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lookup_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transform_quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unit_amount_decimal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"PromotionType\":{\"values\":[{\"name\":\"INTRO\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null}],\"dbName\":null},\"SubscriptionType\":{\"values\":[{\"name\":\"FREE\",\"dbName\":null},{\"name\":\"STANDARD\",\"dbName\":null},{\"name\":\"PREMIUM\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "src/lib/prisma/client-portal/libquery_engine-debian-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/lib/prisma/client-portal/schema.prisma")
