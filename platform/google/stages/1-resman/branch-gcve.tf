

# tfdoc:file:description GCVE stage resources.

module "branch-gcve-folder" {
  source = "../../../../remotes/cloud-foundation-fabric/modules/folder"
  count  = var.fast_features.gcve ? 1 : 0
  parent = local.root_node
  name   = "GCVE"
  iam    = var.folder_iam.gcve
  tag_bindings = {
    context = try(
      local.tag_values["${var.tag_names.context}/gcve"].id, null
    )
  }
}

module "branch-gcve-dev-folder" {
  source = "../../../../remotes/cloud-foundation-fabric/modules/folder"
  count  = var.fast_features.gcve ? 1 : 0
  parent = module.branch-gcve-folder[0].id
  name   = "Development"
  iam = {
    # read-write (apply) automation service account
    "roles/owner"                          = [module.branch-gcve-dev-sa[0].iam_email]
    "roles/logging.admin"                  = [module.branch-gcve-dev-sa[0].iam_email]
    "roles/resourcemanager.folderAdmin"    = [module.branch-gcve-dev-sa[0].iam_email]
    "roles/resourcemanager.projectCreator" = [module.branch-gcve-dev-sa[0].iam_email]
    "roles/compute.xpnAdmin"               = [module.branch-gcve-dev-sa[0].iam_email]
    # read-only (plan) automation service account
    "roles/viewer"                       = [module.branch-gcve-dev-r-sa[0].iam_email]
    "roles/resourcemanager.folderViewer" = [module.branch-gcve-dev-r-sa[0].iam_email]
  }
  tag_bindings = {
    context = try(
      local.tag_values["${var.tag_names.environment}/development"].id,
      null
    )
  }
}

module "branch-gcve-prod-folder" {
  source = "../../../../remotes/cloud-foundation-fabric/modules/folder"
  count  = var.fast_features.gcve ? 1 : 0
  parent = module.branch-gcve-folder[0].id
  name   = "Production"
  iam = {
    # read-write (apply) automation service account
    "roles/owner"                          = [module.branch-gcve-prod-sa[0].iam_email]
    "roles/logging.admin"                  = [module.branch-gcve-prod-sa[0].iam_email]
    "roles/resourcemanager.folderAdmin"    = [module.branch-gcve-prod-sa[0].iam_email]
    "roles/resourcemanager.projectCreator" = [module.branch-gcve-prod-sa[0].iam_email]
    "roles/compute.xpnAdmin"               = [module.branch-gcve-prod-sa[0].iam_email]
    # read-only (plan) automation service account
    "roles/viewer"                       = [module.branch-gcve-prod-r-sa[0].iam_email]
    "roles/resourcemanager.folderViewer" = [module.branch-gcve-prod-r-sa[0].iam_email]
  }
  tag_bindings = {
    context = try(
      local.tag_values["${var.tag_names.environment}/production"].id,
      null
    )
  }
}

# automation service accounts

module "branch-gcve-dev-sa" {
  source       = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  count        = var.fast_features.gcve ? 1 : 0
  project_id   = var.automation.project_id
  name         = "dev-resman-gcve-0"
  display_name = "Terraform GCVE development service account."
  prefix       = var.prefix
  iam = {
    "roles/iam.serviceAccountTokenCreator" = concat(
      [local.principals.gcp-devops],
      compact([
        try(module.branch-gcve-dev-sa-cicd[0].iam_email, null)
      ])
    )
  }
  iam_project_roles = {
    (var.automation.project_id) = ["roles/serviceusage.serviceUsageConsumer"]
  }
  iam_storage_roles = {
    (var.automation.outputs_bucket) = ["roles/storage.objectAdmin"]
  }
}

module "branch-gcve-prod-sa" {
  source       = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  count        = var.fast_features.gcve ? 1 : 0
  project_id   = var.automation.project_id
  name         = "prod-resman-gcve-0"
  display_name = "Terraform GCVE production service account."
  prefix       = var.prefix
  iam = {
    "roles/iam.serviceAccountTokenCreator" = concat(
      [local.principals.gcp-devops],
      compact([
        try(module.branch-gcve-prod-sa-cicd[0].iam_email, null)
      ])
    )
  }
  iam_project_roles = {
    (var.automation.project_id) = ["roles/serviceusage.serviceUsageConsumer"]
  }
  iam_storage_roles = {
    (var.automation.outputs_bucket) = ["roles/storage.objectAdmin"]
  }
}

# automation read-only service accounts

module "branch-gcve-dev-r-sa" {
  source       = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  count        = var.fast_features.gcve ? 1 : 0
  project_id   = var.automation.project_id
  name         = "dev-resman-gcve-0r"
  display_name = "Terraform GCVE development service account (read-only)."
  prefix       = var.prefix
  iam = {
    "roles/iam.serviceAccountTokenCreator" = compact([
      try(module.branch-gcve-dev-r-sa-cicd[0].iam_email, null)
    ])
  }
  iam_project_roles = {
    (var.automation.project_id) = ["roles/serviceusage.serviceUsageConsumer"]
  }
  iam_storage_roles = {
    (var.automation.outputs_bucket) = [var.custom_roles["storage_viewer"]]
  }
}

module "branch-gcve-prod-r-sa" {
  source       = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  count        = var.fast_features.gcve ? 1 : 0
  project_id   = var.automation.project_id
  name         = "prod-resman-gcve-0r"
  display_name = "Terraform GCVE production service account (read-only)."
  prefix       = var.prefix
  iam = {
    "roles/iam.serviceAccountTokenCreator" = compact([
      try(module.branch-gcve-prod-r-sa-cicd[0].iam_email, null)
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

module "branch-gcve-dev-gcs" {
  source        = "../../../../remotes/cloud-foundation-fabric/modules/gcs"
  count         = var.fast_features.gcve ? 1 : 0
  project_id    = var.automation.project_id
  name          = "dev-resman-gcve-0"
  prefix        = var.prefix
  location      = var.locations.gcs
  storage_class = local.gcs_storage_class
  versioning    = true
  iam = {
    "roles/storage.objectAdmin"  = [module.branch-gcve-dev-sa[0].iam_email]
    "roles/storage.objectViewer" = [module.branch-gcve-dev-r-sa[0].iam_email]
  }
}

module "branch-gcve-prod-gcs" {
  source        = "../../../../remotes/cloud-foundation-fabric/modules/gcs"
  count         = var.fast_features.gcve ? 1 : 0
  project_id    = var.automation.project_id
  name          = "prod-resman-gcve-0"
  prefix        = var.prefix
  location      = var.locations.gcs
  storage_class = local.gcs_storage_class
  versioning    = true
  iam = {
    "roles/storage.objectAdmin"  = [module.branch-gcve-prod-sa[0].iam_email]
    "roles/storage.objectViewer" = [module.branch-gcve-prod-r-sa[0].iam_email]
  }
}
