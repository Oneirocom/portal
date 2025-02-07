# tfdoc:file:description Audit log project and sink.

locals {
  log_sink_destinations = merge(
    # use the same dataset for all sinks with `bigquery` as  destination
    {
      for k, v in var.log_sinks :
      k => module.log-export-dataset[0] if v.type == "bigquery"
    },
    # use the same gcs bucket for all sinks with `storage` as destination
    {
      for k, v in var.log_sinks :
      k => module.log-export-gcs[0] if v.type == "storage"
    },
    # use separate pubsub topics and logging buckets for sinks with
    # destination `pubsub` and `logging`
    module.log-export-pubsub,
    module.log-export-logbucket
  )
  log_types = toset([for k, v in var.log_sinks : v.type])
}

module "log-export-project" {
  source = "../../../../remotes/cloud-foundation-fabric/modules/project"
  name   = "audit-logs-0"
  parent = coalesce(
    var.project_parent_ids.logging, "organizations/${var.organization.id}"
  )
  prefix          = local.prefix
  billing_account = var.billing_account.id
  contacts = (
    var.bootstrap_user != null || var.essential_contacts == null
    ? {}
    : { (var.essential_contacts) = ["ALL"] }
  )
  iam = {
    "roles/owner"  = [module.automation-tf-bootstrap-sa.iam_email]
    "roles/viewer" = [module.automation-tf-bootstrap-r-sa.iam_email]
  }
  services = [
    # "cloudresourcemanager.googleapis.com",
    # "iam.googleapis.com",
    # "serviceusage.googleapis.com",
    "bigquery.googleapis.com",
    "storage.googleapis.com",
    "stackdriver.googleapis.com"
  ]
}

# one log export per type, with conditionals to skip those not needed

module "log-export-dataset" {
  source        = "../../../../remotes/cloud-foundation-fabric/modules/bigquery-dataset"
  count         = contains(local.log_types, "bigquery") ? 1 : 0
  project_id    = module.log-export-project.project_id
  id            = "logs"
  friendly_name = "Audit logs export."
  location      = local.locations.bq
}

module "log-export-gcs" {
  source        = "../../../../remotes/cloud-foundation-fabric/modules/gcs"
  count         = contains(local.log_types, "storage") ? 1 : 0
  project_id    = module.log-export-project.project_id
  name          = "logs"
  prefix        = local.prefix
  location      = local.locations.gcs
  storage_class = local.gcs_storage_class
}

module "log-export-logbucket" {
  source        = "../../../../remotes/cloud-foundation-fabric/modules/logging-bucket"
  for_each      = toset([for k, v in var.log_sinks : k if v.type == "logging"])
  parent_type   = "project"
  parent        = module.log-export-project.project_id
  id            = each.key
  location      = local.locations.logging
  log_analytics = { enable = true }

  # org-level logging settings ready before we create any logging buckets
  depends_on = [module.organization-logging]
}

module "log-export-pubsub" {
  source     = "../../../../remotes/cloud-foundation-fabric/modules/pubsub"
  for_each   = toset([for k, v in var.log_sinks : k if v.type == "pubsub"])
  project_id = module.log-export-project.project_id
  name       = each.key
  regions    = local.locations.pubsub
}
