

# tfdoc:file:description Project factory stage resources.

# automation service accounts

module "branch-pf-sa" {
  source       = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  count        = var.fast_features.project_factory ? 1 : 0
  project_id   = var.automation.project_id
  name         = "resman-pf-0"
  display_name = "Terraform project factory main service account."
  prefix       = var.prefix
  iam = {
    "roles/iam.serviceAccountTokenCreator" = compact([
      try(module.branch-pf-sa-cicd[0].iam_email, null)
    ])
  }
  iam_project_roles = {
    (var.automation.project_id) = ["roles/serviceusage.serviceUsageConsumer"]
  }
  iam_storage_roles = {
    (var.automation.outputs_bucket) = ["roles/storage.objectAdmin"]
  }
}

module "branch-pf-dev-sa" {
  source       = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  count        = var.fast_features.project_factory ? 1 : 0
  project_id   = var.automation.project_id
  name         = "dev-resman-pf-0"
  display_name = "Terraform project factory development service account."
  prefix       = var.prefix
  iam = {
    "roles/iam.serviceAccountTokenCreator" = compact([
      try(module.branch-pf-dev-sa-cicd[0].iam_email, null)
    ])
  }
  iam_project_roles = {
    (var.automation.project_id) = ["roles/serviceusage.serviceUsageConsumer"]
  }
  iam_storage_roles = {
    (var.automation.outputs_bucket) = ["roles/storage.objectAdmin"]
  }
}

module "branch-pf-prod-sa" {
  source       = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  count        = var.fast_features.project_factory ? 1 : 0
  project_id   = var.automation.project_id
  name         = "prod-resman-pf-0"
  display_name = "Terraform project factory production service account."
  prefix       = var.prefix
  iam = {
    "roles/iam.serviceAccountTokenCreator" = compact([
      try(module.branch-pf-prod-sa-cicd[0].iam_email, null)
    ])
  }
  iam_project_roles = {
    (var.automation.project_id) = ["roles/serviceusage.serviceUsageConsumer"]
  }
  iam_storage_roles = {
    (var.automation.outputs_bucket) = ["roles/storage.objectAdmin"]
  }
}

# automation read-only service accounts

module "branch-pf-r-sa" {
  source       = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  count        = var.fast_features.project_factory ? 1 : 0
  project_id   = var.automation.project_id
  name         = "resman-pf-0r"
  display_name = "Terraform project factory main service account (read-only)."
  prefix       = var.prefix
  iam = {
    "roles/iam.serviceAccountTokenCreator" = compact([
      try(module.branch-pf-r-sa-cicd[0].iam_email, null)
    ])
  }
  iam_project_roles = {
    (var.automation.project_id) = ["roles/serviceusage.serviceUsageConsumer"]
  }
  iam_storage_roles = {
    (var.automation.outputs_bucket) = [var.custom_roles["storage_viewer"]]
  }
}

module "branch-pf-dev-r-sa" {
  source       = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  count        = var.fast_features.project_factory ? 1 : 0
  project_id   = var.automation.project_id
  name         = "dev-resman-pf-0r"
  display_name = "Terraform project factory development service account (read-only)."
  prefix       = var.prefix
  iam = {
    "roles/iam.serviceAccountTokenCreator" = compact([
      try(module.branch-pf-dev-r-sa-cicd[0].iam_email, null)
    ])
  }
  iam_project_roles = {
    (var.automation.project_id) = ["roles/serviceusage.serviceUsageConsumer"]
  }
  iam_storage_roles = {
    (var.automation.outputs_bucket) = [var.custom_roles["storage_viewer"]]
  }
}

module "branch-pf-prod-r-sa" {
  source       = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  count        = var.fast_features.project_factory ? 1 : 0
  project_id   = var.automation.project_id
  name         = "prod-resman-pf-0r"
  display_name = "Terraform project factory production service account (read-only)."
  prefix       = var.prefix
  iam = {
    "roles/iam.serviceAccountTokenCreator" = compact([
      try(module.branch-pf-prod-r-sa-cicd[0].iam_email, null)
    ])
  }
  iam_project_roles = {
    (var.automation.project_id) = ["roles/serviceusage.serviceUsageConsumer"]
  }
  iam_storage_roles = {
    (var.automation.outputs_bucket) = [var.custom_roles["storage_viewer"]]
  }
}

# automation buckets

module "branch-pf-gcs" {
  source        = "../../../../remotes/cloud-foundation-fabric/modules/gcs"
  count         = var.fast_features.project_factory ? 1 : 0
  project_id    = var.automation.project_id
  name          = "resman-pf-0"
  prefix        = var.prefix
  location      = var.locations.gcs
  storage_class = local.gcs_storage_class
  versioning    = true
  iam = {
    "roles/storage.objectAdmin"  = [module.branch-pf-sa[0].iam_email]
    "roles/storage.objectViewer" = [module.branch-pf-r-sa[0].iam_email]
  }
}

module "branch-pf-dev-gcs" {
  source        = "../../../../remotes/cloud-foundation-fabric/modules/gcs"
  count         = var.fast_features.project_factory ? 1 : 0
  project_id    = var.automation.project_id
  name          = "dev-resman-pf-0"
  prefix        = var.prefix
  location      = var.locations.gcs
  storage_class = local.gcs_storage_class
  versioning    = true
  iam = {
    "roles/storage.objectAdmin"  = [module.branch-pf-dev-sa[0].iam_email]
    "roles/storage.objectViewer" = [module.branch-pf-dev-r-sa[0].iam_email]
  }
}

module "branch-pf-prod-gcs" {
  source        = "../../../../remotes/cloud-foundation-fabric/modules/gcs"
  count         = var.fast_features.project_factory ? 1 : 0
  project_id    = var.automation.project_id
  name          = "prod-resman-pf-0"
  prefix        = var.prefix
  location      = var.locations.gcs
  storage_class = local.gcs_storage_class
  versioning    = true
  iam = {
    "roles/storage.objectAdmin"  = [module.branch-pf-prod-sa[0].iam_email]
    "roles/storage.objectViewer" = [module.branch-pf-prod-r-sa[0].iam_email]
  }
}
