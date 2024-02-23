Object.defineProperty(exports, '__esModule', { value: true })

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
  client: '5.9.1',
  engine: '23fdc5965b1e05fc54e5f26ed3de66776b93de64',
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError
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
  AnyNull: objectEnumValues.classes.AnyNull,
}

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
})

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  owner: 'owner',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt',
  updatedAt: 'updatedAt',
  image: 'image',
  lastActive: 'lastActive',
}

exports.Prisma.TemplateScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  image: 'image',
  graph: 'graph',
  spells: 'spells',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt',
  updatedAt: 'updatedAt',
}

exports.Prisma.PublicAgentScalarFieldEnum = {
  id: 'id',
  agentId: 'agentId',
  userId: 'userId',
  madePublic: 'madePublic',
  deletedAt: 'deletedAt',
  description: 'description',
  remixable: 'remixable',
  isTemplate: 'isTemplate',
  featured: 'featured',
}

exports.Prisma.ReportsScalarFieldEnum = {
  id: 'id',
  publicAgentId: 'publicAgentId',
  createdAt: 'createdAt',
  message: 'message',
}

exports.Prisma.LikesScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  publicAgentId: 'publicAgentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
}

exports.Prisma.CommentsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  publicAgentId: 'publicAgentId',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
}

exports.Prisma.AnonymousUserScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  anonymousId: 'anonymousId',
  fingerprint: 'fingerprint',
  lastAccessed: 'lastAccessed',
}

exports.Prisma.BudgetScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  balance: 'balance',
  currentCost: 'currentCost',
  modelCost: 'modelCost',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
}

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
  updatedAt: 'updatedAt',
}

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
  commentsCount: 'commentsCount',
  isDraft: 'isDraft',
  draftAgentId: 'draftAgentId',
}

exports.Prisma.SpellsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  projectId: 'projectId',
  graph: 'graph',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  type: 'type',
  spellReleaseId: 'spellReleaseId',
}

exports.Prisma.DocumentsScalarFieldEnum = {
  id: 'id',
  type: 'type',
  projectId: 'projectId',
  date: 'date',
  metadata: 'metadata',
}

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
  deleted: 'deleted',
}

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
  updated_at: 'updated_at',
}

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
  updated_at: 'updated_at',
}

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
  updated_at: 'updated_at',
}

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc',
}

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
}

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive',
}

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last',
}

exports.Prisma.ProjectOrderByRelevanceFieldEnum = {
  id: 'id',
  owner: 'owner',
  name: 'name',
  description: 'description',
  image: 'image',
}

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull,
}

exports.Prisma.TemplateOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  image: 'image',
  spells: 'spells',
}

exports.Prisma.PublicAgentOrderByRelevanceFieldEnum = {
  id: 'id',
  agentId: 'agentId',
  userId: 'userId',
  description: 'description',
}

exports.Prisma.ReportsOrderByRelevanceFieldEnum = {
  id: 'id',
  publicAgentId: 'publicAgentId',
  message: 'message',
}

exports.Prisma.LikesOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  publicAgentId: 'publicAgentId',
}

exports.Prisma.CommentsOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  publicAgentId: 'publicAgentId',
  content: 'content',
}

exports.Prisma.AnonymousUserOrderByRelevanceFieldEnum = {
  id: 'id',
  anonymousId: 'anonymousId',
  fingerprint: 'fingerprint',
}

exports.Prisma.BudgetOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
}

exports.Prisma.PromotionOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  userId: 'userId',
  description: 'description',
}

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
  creatorImage: 'creatorImage',
  draftAgentId: 'draftAgentId',
}

exports.Prisma.spellsOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  projectId: 'projectId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  type: 'type',
  spellReleaseId: 'spellReleaseId',
}

exports.Prisma.documentsOrderByRelevanceFieldEnum = {
  id: 'id',
  type: 'type',
  projectId: 'projectId',
  date: 'date',
}

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
  tax_exempt: 'tax_exempt',
}

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
  plan: 'plan',
}

exports.Prisma.productsOrderByRelevanceFieldEnum = {
  id: 'id',
  object: 'object',
  description: 'description',
  name: 'name',
  statement_descriptor: 'statement_descriptor',
  unit_label: 'unit_label',
  url: 'url',
}

exports.Prisma.pricesOrderByRelevanceFieldEnum = {
  id: 'id',
  object: 'object',
  currency: 'currency',
  nickname: 'nickname',
  billing_scheme: 'billing_scheme',
  lookup_key: 'lookup_key',
  unit_amount_decimal: 'unit_amount_decimal',
  product: 'product',
}
exports.PromotionType = exports.$Enums.PromotionType = {
  INTRO: 'INTRO',
  ADMIN: 'ADMIN',
}

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
  prices: 'prices',
}
/**
 * Create the Client
 */
const config = {
  generator: {
    name: 'client',
    provider: {
      fromEnvVar: null,
      value: 'prisma-client-js',
    },
    output: {
      value:
        '/Users/jakobgrant/Workspaces/Oneirocom/test/Magick/portal/cloud/packages/db/src/lib/prisma/client-portal',
      fromEnvVar: null,
    },
    config: {
      name: 'prisma',
      engineType: 'library',
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: 'darwin-arm64',
        native: true,
      },
    ],
    previewFeatures: [
      'fullTextSearch',
      'multiSchema',
      'postgresqlExtensions',
      'views',
    ],
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: null,
  },
  relativePath: '..',
  clientVersion: '5.9.1',
  engineVersion: '23fdc5965b1e05fc54e5f26ed3de66776b93de64',
  datasourceNames: ['db'],
  activeProvider: 'postgresql',
  postinstall: false,
  inlineDatasources: {
    db: {
      url: {
        fromEnvVar: 'PORTAL_DATABASE_URL',
        value: null,
      },
    },
  },
  inlineSchema:
    'Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgICAgID0gIi4vY2xpZW50LXBvcnRhbCIKICBwcmV2aWV3RmVhdHVyZXMgPSBbImZ1bGxUZXh0U2VhcmNoIiwgIm11bHRpU2NoZW1hIiwgInBvc3RncmVzcWxFeHRlbnNpb25zIiwgInZpZXdzIl0KICBuYW1lICAgICAgICAgICAgPSAicHJpc21hIgp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciAgICAgICAgICA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgICAgICAgICAgID0gZW52KCJQT1JUQUxfREFUQUJBU0VfVVJMIikKICBzaGFkb3dEYXRhYmFzZVVybCA9IGVudigiUE9SVEFMX1NIQURPV19EQVRBQkFTRV9VUkwiKQogIGV4dGVuc2lvbnMgICAgICAgID0gW3V1aWRfb3NzcChtYXA6ICJ1dWlkLW9zc3AiKSwgdmVjdG9yXQogIHNjaGVtYXMgICAgICAgICAgID0gWyJwb3J0YWwiXQp9Cgptb2RlbCBQcm9qZWN0IHsKICBpZCAgICAgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkKICBvd25lciAgICAgICBTdHJpbmcKICBuYW1lICAgICAgICBTdHJpbmcKICBkZXNjcmlwdGlvbiBTdHJpbmc/CiAgY3JlYXRlZEF0ICAgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKQogIGRlbGV0ZWRBdCAgIERhdGVUaW1lPwogIHVwZGF0ZWRBdCAgIERhdGVUaW1lPyBAdXBkYXRlZEF0CiAgaW1hZ2UgICAgICAgU3RyaW5nPwogIGxhc3RBY3RpdmUgIERhdGVUaW1lPwoKICBAQG1hcCgicHJvamVjdHMiKQogIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cgptb2RlbCBUZW1wbGF0ZSB7CiAgaWQgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpCiAgbmFtZSAgICAgICAgU3RyaW5nCiAgZGVzY3JpcHRpb24gU3RyaW5nPwogIGltYWdlICAgICAgIFN0cmluZz8KICBncmFwaCAgICAgICBKc29uPwogIHNwZWxscyAgICAgIFN0cmluZ1tdICBAZGVmYXVsdChbXSkKICBjcmVhdGVkQXQgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpCiAgZGVsZXRlZEF0ICAgRGF0ZVRpbWU/CiAgdXBkYXRlZEF0ICAgRGF0ZVRpbWU/IEB1cGRhdGVkQXQKCiAgQEBtYXAoInRlbXBsYXRlcyIpCiAgQEBzY2hlbWEoInBvcnRhbCIpCn0KCm1vZGVsIFB1YmxpY0FnZW50IHsKICBpZCAgICAgICAgICBTdHJpbmcgICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpCiAgYWdlbnRJZCAgICAgU3RyaW5nICAgICBAdW5pcXVlCiAgdXNlcklkICAgICAgU3RyaW5nCiAgbWFkZVB1YmxpYyAgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkKICBkZWxldGVkQXQgICBEYXRlVGltZT8KICBkZXNjcmlwdGlvbiBTdHJpbmcgICAgIEBkZWZhdWx0KCIiKQogIHJlbWl4YWJsZSAgIEJvb2xlYW4gICAgQGRlZmF1bHQoZmFsc2UpCiAgaXNUZW1wbGF0ZSAgQm9vbGVhbiAgICBAZGVmYXVsdChmYWxzZSkKICBmZWF0dXJlZCAgICBCb29sZWFuICAgIEBkZWZhdWx0KGZhbHNlKQogIGNvbW1lbnRzICAgIENvbW1lbnRzW10KICBsaWtlcyAgICAgICBMaWtlc1tdCiAgUmVwb3J0cyAgICAgUmVwb3J0c1tdCgogIEBAbWFwKCJwdWJsaWNBZ2VudHMiKQogIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cgptb2RlbCBSZXBvcnRzIHsKICBpZCAgICAgICAgICAgIFN0cmluZyAgICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpCiAgcHVibGljQWdlbnRJZCBTdHJpbmcKICBjcmVhdGVkQXQgICAgIERhdGVUaW1lICAgIEBkZWZhdWx0KG5vdygpKQogIG1lc3NhZ2UgICAgICAgU3RyaW5nCiAgcHVibGljQWdlbnQgICBQdWJsaWNBZ2VudCBAcmVsYXRpb24oZmllbGRzOiBbcHVibGljQWdlbnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQoKICBAQG1hcCgicmVwb3J0cyIpCiAgQEBzY2hlbWEoInBvcnRhbCIpCn0KCm1vZGVsIExpa2VzIHsKICBpZCAgICAgICAgICAgIFN0cmluZyAgICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpCiAgdXNlcklkICAgICAgICBTdHJpbmcKICBwdWJsaWNBZ2VudElkIFN0cmluZwogIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICBEYXRlVGltZT8gICBAdXBkYXRlZEF0CiAgcHVibGljQWdlbnQgICBQdWJsaWNBZ2VudCBAcmVsYXRpb24oZmllbGRzOiBbcHVibGljQWdlbnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQoKICBAQHVuaXF1ZShbdXNlcklkLCBwdWJsaWNBZ2VudElkXSkKICBAQG1hcCgibGlrZXMiKQogIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cgptb2RlbCBDb21tZW50cyB7CiAgaWQgICAgICAgICAgICBTdHJpbmcgICAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogIHVzZXJJZCAgICAgICAgU3RyaW5nCiAgcHVibGljQWdlbnRJZCBTdHJpbmcKICBjb250ZW50ICAgICAgIFN0cmluZwogIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICBEYXRlVGltZT8gICBAdXBkYXRlZEF0CiAgZGVsZXRlZEF0ICAgICBEYXRlVGltZT8KICBwdWJsaWNBZ2VudCAgIFB1YmxpY0FnZW50IEByZWxhdGlvbihmaWVsZHM6IFtwdWJsaWNBZ2VudElkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCgogIEBAbWFwKCJjb21tZW50cyIpCiAgQEBzY2hlbWEoInBvcnRhbCIpCn0KCm1vZGVsIEFub255bW91c1VzZXIgewogIGlkICAgICAgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkKICBjcmVhdGVkQXQgICAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQogIGFub255bW91c0lkICBTdHJpbmcgICAgQHVuaXF1ZQogIGZpbmdlcnByaW50ICBTdHJpbmcKICBsYXN0QWNjZXNzZWQgRGF0ZVRpbWU/CgogIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cgptb2RlbCBCdWRnZXQgewogIGlkICAgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogIHVzZXJJZCAgICAgIFN0cmluZyAgICBAdW5pcXVlCiAgYmFsYW5jZSAgICAgRGVjaW1hbCAgIEBkZWZhdWx0KDApCiAgY3VycmVudENvc3QgRGVjaW1hbD8gIEBkZWZhdWx0KDApCiAgbW9kZWxDb3N0ICAgSnNvbj8gICAgIEBkZWZhdWx0KCJ7fSIpCiAgY3JlYXRlZEF0ICAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgIERhdGVUaW1lPyBAdXBkYXRlZEF0CgogIEBAbWFwKCJidWRnZXQiKQogIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cgptb2RlbCBQcm9tb3Rpb24gewogIGlkICAgICAgICAgIFN0cmluZyAgICAgICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkKICBuYW1lICAgICAgICBTdHJpbmcKICB1c2VySWQgICAgICBTdHJpbmcKICB0eXBlICAgICAgICBQcm9tb3Rpb25UeXBlCiAgYW1vdW50ICAgICAgRGVjaW1hbAogIGRlc2NyaXB0aW9uIFN0cmluZz8KICB2YWxpZEZyb20gICBEYXRlVGltZQogIHZhbGlkVW50aWwgIERhdGVUaW1lCiAgaXNVc2VkICAgICAgQm9vbGVhbiAgICAgICBAZGVmYXVsdChmYWxzZSkKICBjcmVhdGVkQXQgICBEYXRlVGltZSAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgIERhdGVUaW1lPyAgICAgQHVwZGF0ZWRBdAoKICBAQG1hcCgicHJvbW90aW9ucyIpCiAgQEBzY2hlbWEoInBvcnRhbCIpCn0KCnZpZXcgYWdlbnRzIHsKICBpZCAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgIEB1bmlxdWUgQGRiLlV1aWQKICByb290U3BlbGwgICAgICAgICAgICAgSnNvbj8KICBwdWJsaWNWYXJpYWJsZXMgICAgICAgU3RyaW5nPwogIHNlY3JldHMgICAgICAgICAgICAgICBTdHJpbmc/CiAgbmFtZSAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBlbmFibGVkICAgICAgICAgICAgICAgQm9vbGVhbj8KICB1cGRhdGVkQXQgICAgICAgICAgICAgU3RyaW5nPwogIHBpbmdlZEF0ICAgICAgICAgICAgICBTdHJpbmc/CiAgcHJvamVjdElkICAgICAgICAgICAgIFN0cmluZz8KICBkYXRhICAgICAgICAgICAgICAgICAgSnNvbj8KICBydW5TdGF0ZSAgICAgICAgICAgICAgU3RyaW5nPwogIGltYWdlICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgcm9vdFNwZWxsSWQgICAgICAgICAgIFN0cmluZz8gICBAZGIuVXVpZAogIGRlZmF1bHQgICAgICAgICAgICAgICBCb29sZWFuPwogIGNyZWF0ZWRBdCAgICAgICAgICAgICBEYXRlVGltZT8gQGRiLlRpbWVzdGFtcHR6KDYpCiAgY3VycmVudFNwZWxsUmVsZWFzZUlkIFN0cmluZz8gICBAZGIuVXVpZAogIGVtYmVkTW9kZWwgICAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIHZlcnNpb24gICAgICAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIGVtYmVkZGluZ1Byb3ZpZGVyICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIGVtYmVkZGluZ01vZGVsICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIHB1YmxpY0FnZW50SWQgICAgICAgICBTdHJpbmc/CiAgZGVzY3JpcHRpb24gICAgICAgICAgIFN0cmluZz8KICByZW1peGFibGUgICAgICAgICAgICAgQm9vbGVhbj8KICBmZWF0dXJlZCAgICAgICAgICAgICAgQm9vbGVhbj8KICBpc1RlbXBsYXRlICAgICAgICAgICAgQm9vbGVhbj8KICBpc1B1YmxpYyAgICAgICAgICAgICAgQm9vbGVhbj8KICBjcmVhdG9ySWQgICAgICAgICAgICAgU3RyaW5nPwogIGNyZWF0b3JOYW1lICAgICAgICAgICBTdHJpbmc/CiAgY3JlYXRvckltYWdlICAgICAgICAgIFN0cmluZz8KICBsaWtlc0NvdW50ICAgICAgICAgICAgSW50PwogIGNvbW1lbnRzQ291bnQgICAgICAgICBCaWdJbnQ/CiAgaXNEcmFmdCAgICAgICAgICAgICAgIEJvb2xlYW4/CiAgZHJhZnRBZ2VudElkICAgICAgICAgIFN0cmluZz8KCiAgQEBzY2hlbWEoInBvcnRhbCIpCn0KCnZpZXcgc3BlbGxzIHsKICBpZCAgICAgICAgICAgICBTdHJpbmcgIEB1bmlxdWUgQGRiLlV1aWQKICBuYW1lICAgICAgICAgICBTdHJpbmc/CiAgcHJvamVjdElkICAgICAgU3RyaW5nPwogIGdyYXBoICAgICAgICAgIEpzb24/CiAgY3JlYXRlZEF0ICAgICAgU3RyaW5nPwogIHVwZGF0ZWRBdCAgICAgIFN0cmluZz8KICB0eXBlICAgICAgICAgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICBzcGVsbFJlbGVhc2VJZCBTdHJpbmc/IEBkYi5VdWlkCgogIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cgp2aWV3IGRvY3VtZW50cyB7CiAgaWQgICAgICAgIFN0cmluZyAgQHVuaXF1ZSBAZGIuVXVpZAogIHR5cGUgICAgICBTdHJpbmc/CiAgcHJvamVjdElkIFN0cmluZz8KICBkYXRlICAgICAgU3RyaW5nPwogIG1ldGFkYXRhICBKc29uPwoKICBAQHNjaGVtYSgicG9ydGFsIikKfQoKdmlldyBjdXN0b21lcnMgewogIGlkICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgQGlkIEB1bmlxdWUKICBvYmplY3QgICAgICAgICAgICAgICAgU3RyaW5nPwogIGFkZHJlc3MgICAgICAgICAgICAgICBKc29uPwogIGRlc2NyaXB0aW9uICAgICAgICAgICBTdHJpbmc/CiAgZW1haWwgICAgICAgICAgICAgICAgIFN0cmluZz8KICBtZXRhZGF0YSAgICAgICAgICAgICAgSnNvbj8KICBuYW1lICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIHBob25lICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgc2hpcHBpbmcgICAgICAgICAgICAgIEpzb24/CiAgYmFsYW5jZSAgICAgICAgICAgICAgIEludD8KICBjcmVhdGVkICAgICAgICAgICAgICAgSW50PwogIGN1cnJlbmN5ICAgICAgICAgICAgICBTdHJpbmc/CiAgZGVmYXVsdF9zb3VyY2UgICAgICAgIFN0cmluZz8KICBkZWxpbnF1ZW50ICAgICAgICAgICAgQm9vbGVhbj8KICBkaXNjb3VudCAgICAgICAgICAgICAgSnNvbj8KICBpbnZvaWNlX3ByZWZpeCAgICAgICAgU3RyaW5nPwogIGludm9pY2Vfc2V0dGluZ3MgICAgICBKc29uPwogIGxpdmVtb2RlICAgICAgICAgICAgICBCb29sZWFuPwogIG5leHRfaW52b2ljZV9zZXF1ZW5jZSBJbnQ/CiAgcHJlZmVycmVkX2xvY2FsZXMgICAgIEpzb24/CiAgdGF4X2V4ZW1wdCAgICAgICAgICAgIFN0cmluZz8KICB1cGRhdGVkX2F0ICAgICAgICAgICAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXB0eig2KQogIGRlbGV0ZWQgICAgICAgICAgICAgICBCb29sZWFuPwoKICBAQHNjaGVtYSgicG9ydGFsIikKfQoKdmlldyBzdWJzY3JpcHRpb25zIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlkIEB1bmlxdWUKICBvYmplY3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGNhbmNlbF9hdF9wZXJpb2RfZW5kICAgICAgICAgICAgICBCb29sZWFuPwogIGN1cnJlbnRfcGVyaW9kX2VuZCAgICAgICAgICAgICAgICBJbnQ/CiAgY3VycmVudF9wZXJpb2Rfc3RhcnQgICAgICAgICAgICAgIEludD8KICBkZWZhdWx0X3BheW1lbnRfbWV0aG9kICAgICAgICAgICAgU3RyaW5nPwogIGl0ZW1zICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKc29uPwogIG1ldGFkYXRhICAgICAgICAgICAgICAgICAgICAgICAgICBKc29uPwogIHBlbmRpbmdfc2V0dXBfaW50ZW50ICAgICAgICAgICAgICBTdHJpbmc/CiAgcGVuZGluZ191cGRhdGUgICAgICAgICAgICAgICAgICAgIEpzb24/CiAgc3RhdHVzICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuc3VwcG9ydGVkKCJzdWJzY3JpcHRpb25fc3RhdHVzIik/CiAgYXBwbGljYXRpb25fZmVlX3BlcmNlbnQgICAgICAgICAgIEZsb2F0PwogIGJpbGxpbmdfY3ljbGVfYW5jaG9yICAgICAgICAgICAgICBJbnQ/CiAgYmlsbGluZ190aHJlc2hvbGRzICAgICAgICAgICAgICAgIEpzb24/CiAgY2FuY2VsX2F0ICAgICAgICAgICAgICAgICAgICAgICAgIEludD8KICBjYW5jZWxlZF9hdCAgICAgICAgICAgICAgICAgICAgICAgSW50PwogIGNvbGxlY3Rpb25fbWV0aG9kICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgY3JlYXRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8KICBkYXlzX3VudGlsX2R1ZSAgICAgICAgICAgICAgICAgICAgSW50PwogIGRlZmF1bHRfc291cmNlICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgZGVmYXVsdF90YXhfcmF0ZXMgICAgICAgICAgICAgICAgIEpzb24/CiAgZGlzY291bnQgICAgICAgICAgICAgICAgICAgICAgICAgIEpzb24/CiAgZW5kZWRfYXQgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8KICBsaXZlbW9kZSAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbj8KICBuZXh0X3BlbmRpbmdfaW52b2ljZV9pdGVtX2ludm9pY2UgSW50PwogIHBhdXNlX2NvbGxlY3Rpb24gICAgICAgICAgICAgICAgICBKc29uPwogIHBlbmRpbmdfaW52b2ljZV9pdGVtX2ludGVydmFsICAgICBKc29uPwogIHN0YXJ0X2RhdGUgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/CiAgdHJhbnNmZXJfZGF0YSAgICAgICAgICAgICAgICAgICAgIEpzb24/CiAgdHJpYWxfZW5kICAgICAgICAgICAgICAgICAgICAgICAgIEpzb24/CiAgdHJpYWxfc3RhcnQgICAgICAgICAgICAgICAgICAgICAgIEpzb24/CiAgc2NoZWR1bGUgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBjdXN0b21lciAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGxhdGVzdF9pbnZvaWNlICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgcGxhbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlRpbWVzdGFtcHR6KDYpCgogIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cgp2aWV3IHByb2R1Y3RzIHsKICBpZCAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgQGlkIEB1bmlxdWUKICBvYmplY3QgICAgICAgICAgICAgICBTdHJpbmc/CiAgYWN0aXZlICAgICAgICAgICAgICAgQm9vbGVhbj8KICBkZXNjcmlwdGlvbiAgICAgICAgICBTdHJpbmc/CiAgbWV0YWRhdGEgICAgICAgICAgICAgSnNvbj8KICBuYW1lICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgY3JlYXRlZCAgICAgICAgICAgICAgSW50PwogIGltYWdlcyAgICAgICAgICAgICAgIEpzb24/CiAgbGl2ZW1vZGUgICAgICAgICAgICAgQm9vbGVhbj8KICBwYWNrYWdlX2RpbWVuc2lvbnMgICBKc29uPwogIHNoaXBwYWJsZSAgICAgICAgICAgIEJvb2xlYW4/CiAgc3RhdGVtZW50X2Rlc2NyaXB0b3IgU3RyaW5nPwogIHVuaXRfbGFiZWwgICAgICAgICAgIFN0cmluZz8KICB1cGRhdGVkICAgICAgICAgICAgICBJbnQ/CiAgdXJsICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIHVwZGF0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wdHooNikKCiAgQEBzY2hlbWEoInBvcnRhbCIpCn0KCnZpZXcgcHJpY2VzIHsKICBpZCAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAdW5pcXVlCiAgb2JqZWN0ICAgICAgICAgICAgICBTdHJpbmc/CiAgYWN0aXZlICAgICAgICAgICAgICBCb29sZWFuPwogIGN1cnJlbmN5ICAgICAgICAgICAgU3RyaW5nPwogIG1ldGFkYXRhICAgICAgICAgICAgSnNvbj8KICBuaWNrbmFtZSAgICAgICAgICAgIFN0cmluZz8KICByZWN1cnJpbmcgICAgICAgICAgIEpzb24/CiAgdHlwZSAgICAgICAgICAgICAgICBVbnN1cHBvcnRlZCgicHJpY2luZ190eXBlIik/CiAgdW5pdF9hbW91bnQgICAgICAgICBJbnQ/CiAgYmlsbGluZ19zY2hlbWUgICAgICBTdHJpbmc/CiAgY3JlYXRlZCAgICAgICAgICAgICBJbnQ/CiAgbGl2ZW1vZGUgICAgICAgICAgICBCb29sZWFuPwogIGxvb2t1cF9rZXkgICAgICAgICAgU3RyaW5nPwogIHRpZXJzX21vZGUgICAgICAgICAgVW5zdXBwb3J0ZWQoInByaWNpbmdfdGllcnMiKT8KICB0cmFuc2Zvcm1fcXVhbnRpdHkgIEpzb24/CiAgdW5pdF9hbW91bnRfZGVjaW1hbCBTdHJpbmc/CiAgcHJvZHVjdCAgICAgICAgICAgICBTdHJpbmc/CiAgdXBkYXRlZF9hdCAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICBAZGIuVGltZXN0YW1wdHooNikKCiAgQEBzY2hlbWEoInBvcnRhbCIpCn0KCmVudW0gUHJvbW90aW9uVHlwZSB7CiAgSU5UUk8KICBBRE1JTgoKICBAQHNjaGVtYSgicG9ydGFsIikKfQoKZW51bSBTdWJzY3JpcHRpb25UeXBlIHsKICBGUkVFCiAgU1RBTkRBUkQKICBQUkVNSVVNCgogIEBAc2NoZW1hKCJwb3J0YWwiKQp9Cg==',
  inlineSchemaHash:
    '4fed13432be678b33a8e58a59a1333be4bc2a062bdb51f54b315c48904dbc6c8',
  noEngine: false,
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse(
  '{"models":{"Project":{"dbName":"projects","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"owner","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"deletedAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"image","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"lastActive","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Template":{"dbName":"templates","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"image","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"graph","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"spells","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":[],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"deletedAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"PublicAgent":{"dbName":"publicAgents","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"agentId","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"madePublic","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"deletedAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"","isGenerated":false,"isUpdatedAt":false},{"name":"remixable","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"isTemplate","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"featured","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"comments","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Comments","relationName":"CommentsToPublicAgent","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"likes","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Likes","relationName":"LikesToPublicAgent","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"Reports","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Reports","relationName":"PublicAgentToReports","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Reports":{"dbName":"reports","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"publicAgentId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"message","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"publicAgent","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"PublicAgent","relationName":"PublicAgentToReports","relationFromFields":["publicAgentId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Likes":{"dbName":"likes","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"publicAgentId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"publicAgent","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"PublicAgent","relationName":"LikesToPublicAgent","relationFromFields":["publicAgentId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["userId","publicAgentId"]],"uniqueIndexes":[{"name":null,"fields":["userId","publicAgentId"]}],"isGenerated":false},"Comments":{"dbName":"comments","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"publicAgentId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"deletedAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"publicAgent","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"PublicAgent","relationName":"CommentsToPublicAgent","relationFromFields":["publicAgentId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"AnonymousUser":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"anonymousId","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"fingerprint","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"lastAccessed","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Budget":{"dbName":"budget","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"balance","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Decimal","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"currentCost","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Decimal","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"modelCost","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Json","default":"{}","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Promotion":{"dbName":"promotions","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"cuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"type","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"PromotionType","isGenerated":false,"isUpdatedAt":false},{"name":"amount","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"validFrom","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"validUntil","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"isUsed","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"agents":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"rootSpell","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"publicVariables","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"secrets","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enabled","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"pingedAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"projectId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"data","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"runState","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"image","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"rootSpellId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"default","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"currentSpellReleaseId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"embedModel","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"version","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"embeddingProvider","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"embeddingModel","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"publicAgentId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"remixable","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"featured","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"isTemplate","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"isPublic","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"creatorId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"creatorName","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"creatorImage","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"likesCount","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"commentsCount","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"isDraft","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"draftAgentId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"spells":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"projectId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"graph","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"type","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"spellReleaseId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"documents":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"type","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"projectId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"date","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"customers":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"object","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"address","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"phone","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"shipping","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"balance","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"created","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"currency","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"default_source","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"delinquent","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"discount","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"invoice_prefix","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"invoice_settings","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"livemode","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"next_invoice_sequence","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"preferred_locales","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"tax_exempt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"deleted","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"subscriptions":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"object","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cancel_at_period_end","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"current_period_end","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"current_period_start","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"default_payment_method","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"items","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"pending_setup_intent","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"pending_update","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"application_fee_percent","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"billing_cycle_anchor","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"billing_thresholds","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"cancel_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"canceled_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"collection_method","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"days_until_due","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"default_source","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"default_tax_rates","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"discount","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"ended_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"livemode","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"next_pending_invoice_item_invoice","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"pause_collection","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"pending_invoice_item_interval","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"start_date","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"transfer_data","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"trial_end","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"trial_start","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"schedule","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"customer","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"latest_invoice","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"plan","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"products":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"object","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"active","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"images","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"livemode","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"package_dimensions","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"shippable","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"statement_descriptor","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"unit_label","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"updated","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"url","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"prices":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"object","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"active","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"currency","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"nickname","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"recurring","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"unit_amount","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"billing_scheme","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"livemode","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"lookup_key","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"transform_quantity","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"unit_amount_decimal","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"product","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{"PromotionType":{"values":[{"name":"INTRO","dbName":null},{"name":"ADMIN","dbName":null}],"dbName":null},"SubscriptionType":{"values":[{"name":"FREE","dbName":null},{"name":"STANDARD","dbName":null},{"name":"PREMIUM","dbName":null}],"dbName":null}},"types":{}}'
)
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    PORTAL_DATABASE_URL:
      (typeof globalThis !== 'undefined' &&
        globalThis['PORTAL_DATABASE_URL']) ||
      (typeof process !== 'undefined' &&
        process.env &&
        process.env.PORTAL_DATABASE_URL) ||
      undefined,
  },
})

if (
  (typeof globalThis !== 'undefined' && globalThis['DEBUG']) ||
  (typeof process !== 'undefined' && process.env && process.env.DEBUG) ||
  undefined
) {
  Debug.enable(
    (typeof globalThis !== 'undefined' && globalThis['DEBUG']) ||
      (typeof process !== 'undefined' && process.env && process.env.DEBUG) ||
      undefined
  )
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
