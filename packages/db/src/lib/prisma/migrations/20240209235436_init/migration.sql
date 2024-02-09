-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "vector";

-- CreateEnum
CREATE TYPE "portal"."PromotionType" AS ENUM ('INTRO', 'ADMIN');

-- CreateEnum
CREATE TYPE "portal"."InvitationStatus" AS ENUM ('ACCEPTED', 'PENDING', 'DECLINED');

-- CreateEnum
CREATE TYPE "portal"."SubscriptionType" AS ENUM ('FREE', 'STANDARD', 'PREMIUM');

-- CreateEnum
CREATE TYPE "portal"."TeamRole" AS ENUM ('MEMBER', 'OWNER');

-- CreateEnum
CREATE TYPE "portal"."UserRole" AS ENUM ('ADMIN', 'USER', 'TESTER');

-- CreateEnum
CREATE TYPE "portal"."pricing_plan_interval" AS ENUM ('day', 'week', 'month', 'year');

-- CreateEnum
CREATE TYPE "portal"."workspace_member_role" AS ENUM ('member', 'owner', 'admin');

-- CreateEnum
CREATE TYPE "portal"."workspace_member_status" AS ENUM ('pending', 'accepted', 'deleted');

-- CreateTable
CREATE TABLE "portal"."accounts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "oauth_token_secret" TEXT,
    "oauth_token" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."customerPayments" (
    "id" TEXT NOT NULL,
    "paymentId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "email" TEXT,
    "subscriptionType" "portal"."SubscriptionType" NOT NULL DEFAULT 'FREE',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "customerPayments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."domains" (
    "id" TEXT NOT NULL,
    "addedById" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),
    "subdomain" TEXT,
    "value" TEXT,
    "verified" BOOLEAN DEFAULT true,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "domains_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."members" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "inviter" TEXT NOT NULL,
    "invitedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "joinedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),
    "status" "portal"."InvitationStatus" NOT NULL DEFAULT 'PENDING',
    "teamRole" "portal"."TeamRole" NOT NULL DEFAULT 'MEMBER',
    "projectId" TEXT NOT NULL,

    CONSTRAINT "members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."sessions" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."credentials" (
    "user_id" TEXT NOT NULL,
    "hashed_password" TEXT NOT NULL,

    CONSTRAINT "credentials_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "portal"."email_confirmations" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiry" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "email_confirmations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "bannerImage" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),
    "role" TEXT DEFAULT 'TESTER',
    "about" TEXT,
    "discordId" TEXT,
    "roleId" TEXT,
    "lastActive" TIMESTAMP(3),
    "profileOnboarding" BOOLEAN DEFAULT false,
    "budgetId" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."profiles" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "profileImage" TEXT,
    "bannerImage" TEXT,
    "bio" TEXT,
    "public" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."password_reset_tokens" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiry" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "password_reset_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."onboarding" (
    "id" TEXT NOT NULL,
    "home" BOOLEAN NOT NULL DEFAULT false,
    "projects" BOOLEAN NOT NULL DEFAULT false,
    "agents" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "onboarding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."verificationTokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "portal"."projects" (
    "id" TEXT NOT NULL,
    "projectCode" TEXT NOT NULL,
    "inviteCode" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "templateId" TEXT,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),
    "completed" BOOLEAN NOT NULL DEFAULT true,
    "image" TEXT,
    "workspace_id" UUID,
    "lastActive" TIMESTAMP(3),

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."templates" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "graph" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."publicAgents" (
    "id" TEXT NOT NULL,
    "agentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "madePublic" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "description" TEXT NOT NULL DEFAULT '',
    "remixable" BOOLEAN NOT NULL DEFAULT false,
    "isTemplate" BOOLEAN NOT NULL DEFAULT false,
    "featured" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "publicAgents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."reports" (
    "id" TEXT NOT NULL,
    "publicAgentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT NOT NULL,

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."likes" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "publicAgentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."comments" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "publicAgentId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."AnonymousUser" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "anonymousId" TEXT NOT NULL,
    "fingerprint" TEXT NOT NULL,
    "lastAccessed" TIMESTAMP(3),

    CONSTRAINT "AnonymousUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."budget" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "balance" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "currentCost" DECIMAL(65,30) DEFAULT 0,
    "modelCost" JSONB DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "budget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."promotions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "portal"."PromotionType" NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "description" TEXT,
    "validFrom" TIMESTAMP(3) NOT NULL,
    "validUntil" TIMESTAMP(3) NOT NULL,
    "isUsed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "promotions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."roles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."workspaces" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "is_default" BOOLEAN DEFAULT false,
    "creator_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(6),

    CONSTRAINT "workspaces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."workspace_members" (
    "id" UUID NOT NULL,
    "workspace_id" UUID NOT NULL,
    "user_id" TEXT NOT NULL,
    "role" "portal"."workspace_member_role" NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(6),
    "status" "portal"."workspace_member_status" DEFAULT 'pending',

    CONSTRAINT "workspace_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."directus_activity" (
    "id" SERIAL NOT NULL,
    "action" VARCHAR(45) NOT NULL,
    "user" UUID,
    "timestamp" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip" VARCHAR(50),
    "user_agent" VARCHAR(255),
    "collection" VARCHAR(64) NOT NULL,
    "item" VARCHAR(255) NOT NULL,
    "comment" TEXT,
    "origin" VARCHAR(255),

    CONSTRAINT "directus_activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."directus_collections" (
    "collection" VARCHAR(64) NOT NULL,
    "icon" VARCHAR(30),
    "note" TEXT,
    "display_template" VARCHAR(255),
    "hidden" BOOLEAN NOT NULL DEFAULT false,
    "singleton" BOOLEAN NOT NULL DEFAULT false,
    "translations" JSON,
    "archive_field" VARCHAR(64),
    "archive_app_filter" BOOLEAN NOT NULL DEFAULT true,
    "archive_value" VARCHAR(255),
    "unarchive_value" VARCHAR(255),
    "sort_field" VARCHAR(64),
    "accountability" VARCHAR(255) DEFAULT 'all',
    "color" VARCHAR(255),
    "item_duplication_fields" JSON,
    "sort" INTEGER,
    "group" VARCHAR(64),
    "collapse" VARCHAR(255) NOT NULL DEFAULT 'open',
    "preview_url" VARCHAR(255),

    CONSTRAINT "directus_collections_pkey" PRIMARY KEY ("collection")
);

-- CreateTable
CREATE TABLE "portal"."directus_dashboards" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "icon" VARCHAR(30) NOT NULL DEFAULT 'dashboard',
    "note" TEXT,
    "date_created" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "user_created" UUID,
    "color" VARCHAR(255),

    CONSTRAINT "directus_dashboards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."directus_fields" (
    "id" SERIAL NOT NULL,
    "collection" VARCHAR(64) NOT NULL,
    "field" VARCHAR(64) NOT NULL,
    "special" VARCHAR(64),
    "interface" VARCHAR(64),
    "options" JSON,
    "display" VARCHAR(64),
    "display_options" JSON,
    "readonly" BOOLEAN NOT NULL DEFAULT false,
    "hidden" BOOLEAN NOT NULL DEFAULT false,
    "sort" INTEGER,
    "width" VARCHAR(30) DEFAULT 'full',
    "translations" JSON,
    "note" TEXT,
    "conditions" JSON,
    "required" BOOLEAN DEFAULT false,
    "group" VARCHAR(64),
    "validation" JSON,
    "validation_message" TEXT,

    CONSTRAINT "directus_fields_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."directus_files" (
    "id" UUID NOT NULL,
    "storage" VARCHAR(255) NOT NULL,
    "filename_disk" VARCHAR(255),
    "filename_download" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255),
    "type" VARCHAR(255),
    "folder" UUID,
    "uploaded_by" UUID,
    "uploaded_on" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_by" UUID,
    "modified_on" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "charset" VARCHAR(50),
    "filesize" BIGINT,
    "width" INTEGER,
    "height" INTEGER,
    "duration" INTEGER,
    "embed" VARCHAR(200),
    "description" TEXT,
    "location" TEXT,
    "tags" TEXT,
    "metadata" JSON,

    CONSTRAINT "directus_files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."directus_flows" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "icon" VARCHAR(30),
    "color" VARCHAR(255),
    "description" TEXT,
    "status" VARCHAR(255) NOT NULL DEFAULT 'active',
    "trigger" VARCHAR(255),
    "accountability" VARCHAR(255) DEFAULT 'all',
    "options" JSON,
    "operation" UUID,
    "date_created" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "user_created" UUID,

    CONSTRAINT "directus_flows_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."directus_folders" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "parent" UUID,

    CONSTRAINT "directus_folders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."directus_migrations" (
    "version" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "timestamp" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "directus_migrations_pkey" PRIMARY KEY ("version")
);

-- CreateTable
CREATE TABLE "portal"."directus_notifications" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "status" VARCHAR(255) DEFAULT 'inbox',
    "recipient" UUID NOT NULL,
    "sender" UUID,
    "subject" VARCHAR(255) NOT NULL,
    "message" TEXT,
    "collection" VARCHAR(64),
    "item" VARCHAR(255),

    CONSTRAINT "directus_notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."directus_operations" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255),
    "key" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "position_x" INTEGER NOT NULL,
    "position_y" INTEGER NOT NULL,
    "options" JSON,
    "resolve" UUID,
    "reject" UUID,
    "flow" UUID NOT NULL,
    "date_created" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "user_created" UUID,

    CONSTRAINT "directus_operations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."directus_panels" (
    "id" UUID NOT NULL,
    "dashboard" UUID NOT NULL,
    "name" VARCHAR(255),
    "icon" VARCHAR(30),
    "color" VARCHAR(10),
    "show_header" BOOLEAN NOT NULL DEFAULT false,
    "note" TEXT,
    "type" VARCHAR(255) NOT NULL,
    "position_x" INTEGER NOT NULL,
    "position_y" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "options" JSON,
    "date_created" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "user_created" UUID,

    CONSTRAINT "directus_panels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."directus_permissions" (
    "id" SERIAL NOT NULL,
    "role" UUID,
    "collection" VARCHAR(64) NOT NULL,
    "action" VARCHAR(10) NOT NULL,
    "permissions" JSON,
    "validation" JSON,
    "presets" JSON,
    "fields" TEXT,

    CONSTRAINT "directus_permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."directus_presets" (
    "id" SERIAL NOT NULL,
    "bookmark" VARCHAR(255),
    "user" UUID,
    "role" UUID,
    "collection" VARCHAR(64),
    "search" VARCHAR(100),
    "layout" VARCHAR(100) DEFAULT 'tabular',
    "layout_query" JSON,
    "layout_options" JSON,
    "refresh_interval" INTEGER,
    "filter" JSON,
    "icon" VARCHAR(30) DEFAULT 'bookmark',
    "color" VARCHAR(255),

    CONSTRAINT "directus_presets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."directus_relations" (
    "id" SERIAL NOT NULL,
    "many_collection" VARCHAR(64) NOT NULL,
    "many_field" VARCHAR(64) NOT NULL,
    "one_collection" VARCHAR(64),
    "one_field" VARCHAR(64),
    "one_collection_field" VARCHAR(64),
    "one_allowed_collections" TEXT,
    "junction_field" VARCHAR(64),
    "sort_field" VARCHAR(64),
    "one_deselect_action" VARCHAR(255) NOT NULL DEFAULT 'nullify',

    CONSTRAINT "directus_relations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."directus_revisions" (
    "id" SERIAL NOT NULL,
    "activity" INTEGER NOT NULL,
    "collection" VARCHAR(64) NOT NULL,
    "item" VARCHAR(255) NOT NULL,
    "data" JSON,
    "delta" JSON,
    "parent" INTEGER,

    CONSTRAINT "directus_revisions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."directus_roles" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "icon" VARCHAR(30) NOT NULL DEFAULT 'supervised_user_circle',
    "description" TEXT,
    "ip_access" TEXT,
    "enforce_tfa" BOOLEAN NOT NULL DEFAULT false,
    "admin_access" BOOLEAN NOT NULL DEFAULT false,
    "app_access" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "directus_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."directus_sessions" (
    "token" VARCHAR(64) NOT NULL,
    "user" UUID,
    "expires" TIMESTAMPTZ(6) NOT NULL,
    "ip" VARCHAR(255),
    "user_agent" VARCHAR(255),
    "share" UUID,
    "origin" VARCHAR(255),

    CONSTRAINT "directus_sessions_pkey" PRIMARY KEY ("token")
);

-- CreateTable
CREATE TABLE "portal"."directus_settings" (
    "id" SERIAL NOT NULL,
    "project_name" VARCHAR(100) NOT NULL DEFAULT 'Directus',
    "project_url" VARCHAR(255),
    "project_color" VARCHAR(50),
    "project_logo" UUID,
    "public_foreground" UUID,
    "public_background" UUID,
    "public_note" TEXT,
    "auth_login_attempts" INTEGER DEFAULT 25,
    "auth_password_policy" VARCHAR(100),
    "storage_asset_transform" VARCHAR(7) DEFAULT 'all',
    "storage_asset_presets" JSON,
    "custom_css" TEXT,
    "storage_default_folder" UUID,
    "basemaps" JSON,
    "mapbox_key" VARCHAR(255),
    "module_bar" JSON,
    "project_descriptor" VARCHAR(100),
    "default_language" VARCHAR(255) NOT NULL DEFAULT 'en-US',
    "custom_aspect_ratios" JSON,

    CONSTRAINT "directus_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."directus_shares" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255),
    "collection" VARCHAR(64) NOT NULL,
    "item" VARCHAR(255) NOT NULL,
    "role" UUID,
    "password" VARCHAR(255),
    "user_created" UUID,
    "date_created" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "date_start" TIMESTAMPTZ(6),
    "date_end" TIMESTAMPTZ(6),
    "times_used" INTEGER DEFAULT 0,
    "max_uses" INTEGER,

    CONSTRAINT "directus_shares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."directus_translations" (
    "id" UUID NOT NULL,
    "language" VARCHAR(255) NOT NULL,
    "key" VARCHAR(255) NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "directus_translations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."directus_users" (
    "id" UUID NOT NULL,
    "first_name" VARCHAR(50),
    "last_name" VARCHAR(50),
    "email" VARCHAR(128),
    "password" VARCHAR(255),
    "location" VARCHAR(255),
    "title" VARCHAR(50),
    "description" TEXT,
    "tags" JSON,
    "avatar" UUID,
    "language" VARCHAR(255),
    "theme" VARCHAR(20) DEFAULT 'auto',
    "tfa_secret" VARCHAR(255),
    "status" VARCHAR(16) NOT NULL DEFAULT 'active',
    "role" UUID,
    "token" VARCHAR(255),
    "last_access" TIMESTAMPTZ(6),
    "last_page" VARCHAR(255),
    "provider" VARCHAR(128) NOT NULL DEFAULT 'default',
    "external_identifier" VARCHAR(255),
    "auth_data" JSON,
    "email_notifications" BOOLEAN DEFAULT true,

    CONSTRAINT "directus_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."directus_webhooks" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "method" VARCHAR(10) NOT NULL DEFAULT 'POST',
    "url" VARCHAR(255) NOT NULL,
    "status" VARCHAR(10) NOT NULL DEFAULT 'active',
    "data" BOOLEAN NOT NULL DEFAULT true,
    "actions" VARCHAR(100) NOT NULL,
    "collections" VARCHAR(255) NOT NULL,
    "headers" JSON,

    CONSTRAINT "directus_webhooks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."home_carousel" (
    "id" UUID NOT NULL,
    "status" VARCHAR(255) NOT NULL DEFAULT 'draft',
    "sort" INTEGER,
    "image" UUID NOT NULL,
    "roles" JSON,
    "hero_text" TEXT,
    "button_text" VARCHAR(255),
    "link" VARCHAR(255),

    CONSTRAINT "home_carousel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_providerAccountId_key" ON "portal"."accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "customerPayments_paymentId_key" ON "portal"."customerPayments"("paymentId");

-- CreateIndex
CREATE UNIQUE INDEX "customerPayments_customerId_key" ON "portal"."customerPayments"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "customerPayments_email_key" ON "portal"."customerPayments"("email");

-- CreateIndex
CREATE UNIQUE INDEX "members_projectId_email_key" ON "portal"."members"("projectId", "email");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_sessionToken_key" ON "portal"."sessions"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "credentials_user_id_key" ON "portal"."credentials"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "portal"."users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "portal"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_id_key" ON "portal"."profiles"("id");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_username_key" ON "portal"."profiles"("username");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_userId_key" ON "portal"."profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "verificationTokens_token_key" ON "portal"."verificationTokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "verificationTokens_identifier_token_key" ON "portal"."verificationTokens"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "projects_projectCode_key" ON "portal"."projects"("projectCode");

-- CreateIndex
CREATE UNIQUE INDEX "projects_inviteCode_key" ON "portal"."projects"("inviteCode");

-- CreateIndex
CREATE UNIQUE INDEX "projects_projectCode_inviteCode_key" ON "portal"."projects"("projectCode", "inviteCode");

-- CreateIndex
CREATE UNIQUE INDEX "publicAgents_agentId_key" ON "portal"."publicAgents"("agentId");

-- CreateIndex
CREATE UNIQUE INDEX "likes_userId_publicAgentId_key" ON "portal"."likes"("userId", "publicAgentId");

-- CreateIndex
CREATE UNIQUE INDEX "AnonymousUser_anonymousId_key" ON "portal"."AnonymousUser"("anonymousId");

-- CreateIndex
CREATE UNIQUE INDEX "budget_userId_key" ON "portal"."budget"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "portal"."roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "workspace_members_workspace_id_user_id_key" ON "portal"."workspace_members"("workspace_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "directus_flows_operation_unique" ON "portal"."directus_flows"("operation");

-- CreateIndex
CREATE UNIQUE INDEX "directus_operations_resolve_unique" ON "portal"."directus_operations"("resolve");

-- CreateIndex
CREATE UNIQUE INDEX "directus_operations_reject_unique" ON "portal"."directus_operations"("reject");

-- CreateIndex
CREATE UNIQUE INDEX "directus_users_email_unique" ON "portal"."directus_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "directus_users_token_unique" ON "portal"."directus_users"("token");

-- CreateIndex
CREATE UNIQUE INDEX "directus_users_external_identifier_unique" ON "portal"."directus_users"("external_identifier");

-- AddForeignKey
ALTER TABLE "portal"."accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "portal"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."customerPayments" ADD CONSTRAINT "customerPayments_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "portal"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."domains" ADD CONSTRAINT "domains_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "portal"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."domains" ADD CONSTRAINT "domains_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "portal"."projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."members" ADD CONSTRAINT "members_email_fkey" FOREIGN KEY ("email") REFERENCES "portal"."users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."members" ADD CONSTRAINT "members_inviter_fkey" FOREIGN KEY ("inviter") REFERENCES "portal"."users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."members" ADD CONSTRAINT "members_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "portal"."projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "portal"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."credentials" ADD CONSTRAINT "credentials_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "portal"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."email_confirmations" ADD CONSTRAINT "email_confirmations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "portal"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."profiles" ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "portal"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."password_reset_tokens" ADD CONSTRAINT "password_reset_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "portal"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."onboarding" ADD CONSTRAINT "onboarding_id_fkey" FOREIGN KEY ("id") REFERENCES "portal"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."projects" ADD CONSTRAINT "projects_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "portal"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."projects" ADD CONSTRAINT "projects_workspace_id_fkey" FOREIGN KEY ("workspace_id") REFERENCES "portal"."workspaces"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."reports" ADD CONSTRAINT "reports_publicAgentId_fkey" FOREIGN KEY ("publicAgentId") REFERENCES "portal"."publicAgents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."likes" ADD CONSTRAINT "likes_publicAgentId_fkey" FOREIGN KEY ("publicAgentId") REFERENCES "portal"."publicAgents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."likes" ADD CONSTRAINT "likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "portal"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."comments" ADD CONSTRAINT "comments_publicAgentId_fkey" FOREIGN KEY ("publicAgentId") REFERENCES "portal"."publicAgents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."comments" ADD CONSTRAINT "comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "portal"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."budget" ADD CONSTRAINT "budget_userId_fkey" FOREIGN KEY ("userId") REFERENCES "portal"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."promotions" ADD CONSTRAINT "promotions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "portal"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."workspaces" ADD CONSTRAINT "workspaces_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "portal"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."workspace_members" ADD CONSTRAINT "workspace_members_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "portal"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."workspace_members" ADD CONSTRAINT "workspace_members_workspace_id_fkey" FOREIGN KEY ("workspace_id") REFERENCES "portal"."workspaces"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_collections" ADD CONSTRAINT "directus_collections_group_foreign" FOREIGN KEY ("group") REFERENCES "portal"."directus_collections"("collection") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_dashboards" ADD CONSTRAINT "directus_dashboards_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "portal"."directus_users"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_files" ADD CONSTRAINT "directus_files_folder_foreign" FOREIGN KEY ("folder") REFERENCES "portal"."directus_folders"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_files" ADD CONSTRAINT "directus_files_modified_by_foreign" FOREIGN KEY ("modified_by") REFERENCES "portal"."directus_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_files" ADD CONSTRAINT "directus_files_uploaded_by_foreign" FOREIGN KEY ("uploaded_by") REFERENCES "portal"."directus_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_flows" ADD CONSTRAINT "directus_flows_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "portal"."directus_users"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_folders" ADD CONSTRAINT "directus_folders_parent_foreign" FOREIGN KEY ("parent") REFERENCES "portal"."directus_folders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_notifications" ADD CONSTRAINT "directus_notifications_recipient_foreign" FOREIGN KEY ("recipient") REFERENCES "portal"."directus_users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_notifications" ADD CONSTRAINT "directus_notifications_sender_foreign" FOREIGN KEY ("sender") REFERENCES "portal"."directus_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_operations" ADD CONSTRAINT "directus_operations_flow_foreign" FOREIGN KEY ("flow") REFERENCES "portal"."directus_flows"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_operations" ADD CONSTRAINT "directus_operations_reject_foreign" FOREIGN KEY ("reject") REFERENCES "portal"."directus_operations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_operations" ADD CONSTRAINT "directus_operations_resolve_foreign" FOREIGN KEY ("resolve") REFERENCES "portal"."directus_operations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_operations" ADD CONSTRAINT "directus_operations_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "portal"."directus_users"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_panels" ADD CONSTRAINT "directus_panels_dashboard_foreign" FOREIGN KEY ("dashboard") REFERENCES "portal"."directus_dashboards"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_panels" ADD CONSTRAINT "directus_panels_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "portal"."directus_users"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_permissions" ADD CONSTRAINT "directus_permissions_role_foreign" FOREIGN KEY ("role") REFERENCES "portal"."directus_roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_presets" ADD CONSTRAINT "directus_presets_role_foreign" FOREIGN KEY ("role") REFERENCES "portal"."directus_roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_presets" ADD CONSTRAINT "directus_presets_user_foreign" FOREIGN KEY ("user") REFERENCES "portal"."directus_users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_revisions" ADD CONSTRAINT "directus_revisions_activity_foreign" FOREIGN KEY ("activity") REFERENCES "portal"."directus_activity"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_revisions" ADD CONSTRAINT "directus_revisions_parent_foreign" FOREIGN KEY ("parent") REFERENCES "portal"."directus_revisions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_sessions" ADD CONSTRAINT "directus_sessions_share_foreign" FOREIGN KEY ("share") REFERENCES "portal"."directus_shares"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_sessions" ADD CONSTRAINT "directus_sessions_user_foreign" FOREIGN KEY ("user") REFERENCES "portal"."directus_users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_settings" ADD CONSTRAINT "directus_settings_project_logo_foreign" FOREIGN KEY ("project_logo") REFERENCES "portal"."directus_files"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_settings" ADD CONSTRAINT "directus_settings_public_background_foreign" FOREIGN KEY ("public_background") REFERENCES "portal"."directus_files"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_settings" ADD CONSTRAINT "directus_settings_public_foreground_foreign" FOREIGN KEY ("public_foreground") REFERENCES "portal"."directus_files"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_settings" ADD CONSTRAINT "directus_settings_storage_default_folder_foreign" FOREIGN KEY ("storage_default_folder") REFERENCES "portal"."directus_folders"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_shares" ADD CONSTRAINT "directus_shares_collection_foreign" FOREIGN KEY ("collection") REFERENCES "portal"."directus_collections"("collection") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_shares" ADD CONSTRAINT "directus_shares_role_foreign" FOREIGN KEY ("role") REFERENCES "portal"."directus_roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_shares" ADD CONSTRAINT "directus_shares_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "portal"."directus_users"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."directus_users" ADD CONSTRAINT "directus_users_role_foreign" FOREIGN KEY ("role") REFERENCES "portal"."directus_roles"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "portal"."home_carousel" ADD CONSTRAINT "home_carousel_image_foreign" FOREIGN KEY ("image") REFERENCES "portal"."directus_files"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
