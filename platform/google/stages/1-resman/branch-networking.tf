

# tfdoc:file:description Networking stage resources.

locals {
  # FAST-specific IAM
  _network_folder_fast_iam = {
    # read-write (apply) automation service account
    "roles/logging.admin"                  = [module.branch-network-sa.iam_email]
    "roles/owner"                          = [module.branch-network-sa.iam_email]
    "roles/resourcemanager.folderAdmin"    = [module.branch-network-sa.iam_email]
    "roles/resourcemanager.projectCreator" = [module.branch-network-sa.iam_email]
    "roles/compute.xpnAdmin"               = [module.branch-network-sa.iam_email]
    # read-only (plan) automation service account
    "roles/viewer"                       = [module.branch-network-r-sa.iam_email]
    "roles/resourcemanager.folderViewer" = [module.branch-network-r-sa.iam_email]
  }
  # deep-merge FAST-specific IAM with user-provided bindings in var.folder_iam
  _network_folder_iam = merge(
    var.folder_iam.network,
    {
      for role, principals in local._network_folder_fast_iam :
      role => distinct(concat(principals, lookup(var.folder_iam.network, role, [])))
    }
  )
}

module "branch-network-folder" {
  source = "../../../../remotes/cloud-foundation-fabric/modules/folder"
  parent = local.root_node
  name   = "Networking"
  iam_by_principals = {
    (local.principals.gcp-network-admins) = [
      # owner and viewer roles are broad and might grant unwanted access
      # replace them with more selective custom roles for production deployments
      "roles/editor",
    ]
  }
  iam = local._network_folder_iam
  tag_bindings = {
    context = try(
      local.tag_values["${var.tag_names.context}/networking"].id, null
    )
  }
}

module "branch-network-prod-folder" {
  source = "../../../../remotes/cloud-foundation-fabric/modules/folder"
  parent = module.branch-network-folder.id
  name   = "Production"
  iam = {
    # read-write (apply) automation service accounts
    (local.custom_roles.service_project_network_admin) = concat(
      local.branch_optional_sa_lists.dp-prod,
      local.branch_optional_sa_lists.gke-prod,
      local.branch_optional_sa_lists.gcve-prod,
      local.branch_optional_sa_lists.pf,
      local.branch_optional_sa_lists.pf-prod,
    )
    # read-only (plan) automation service accounts
    "roles/compute.networkViewer" = concat(
      local.branch_optional_r_sa_lists.dp-prod,
      local.branch_optional_r_sa_lists.gke-prod,
      local.branch_optional_r_sa_lists.gcve-prod,
      local.branch_optional_r_sa_lists.pf,
      local.branch_optional_r_sa_lists.pf-prod,
    )
    (local.custom_roles.gcve_network_admin) = local.branch_optional_sa_lists.gcve-prod
  }
  tag_bindings = {
    environment = try(
      local.tag_values["${var.tag_names.environment}/production"].id,
      null
    )
  }
}

module "branch-network-dev-folder" {
  source = "../../../../remotes/cloud-foundation-fabric/modules/folder"
  parent = module.branch-network-folder.id
  name   = "Development"
  iam = {
    # read-write (apply) automation service accounts
    (local.custom_roles.service_project_network_admin) = concat(
      local.branch_optional_sa_lists.dp-dev,
      local.branch_optional_sa_lists.gke-dev,
      local.branch_optional_sa_lists.gcve-dev,
      local.branch_optional_sa_lists.pf,
      local.branch_optional_sa_lists.pf-dev,
    )
    # read-only (plan) automation service accounts
    "roles/compute.networkViewer" = concat(
      local.branch_optional_r_sa_lists.dp-dev,
      local.branch_optional_r_sa_lists.gke-dev,
      local.branch_optional_r_sa_lists.gcve-dev,
      local.branch_optional_r_sa_lists.pf,
      local.branch_optional_r_sa_lists.pf-dev,
    )
    (local.custom_roles.gcve_network_admin) = local.branch_optional_sa_lists.gcve-dev
  }
  tag_bindings = {
    environment = try(
      local.tag_values["${var.tag_names.environment}/development"].id,
      null
    )
  }
}

# automation service account

module "branch-network-sa" {
  source                 = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  project_id             = var.automation.project_id
  name                   = "prod-resman-net-0"
  display_name           = "Terraform resman networking service account."
  prefix                 = var.prefix
  service_account_create = var.root_node == null
  iam = {
    "roles/iam.serviceAccountTokenCreator" = compact([
      try(module.branch-network-sa-cicd[0].iam_email, null)
    ])
  }
  iam_project_roles = {
    (var.automation.project_id) = ["roles/serviceusage.serviceUsageConsumer"]
  }
  iam_storage_roles = {
    (var.automation.outputs_bucket) = ["roles/storage.objectAdmin"]
  }
}

# automation read-only service account

module "branch-network-r-sa" {
  source       = "../../../../remotes/cloud-foundation-fabric/modules/iam-service-account"
  project_id   = var.automation.project_id
  name         = "prod-resman-net-0r"
  display_name = "Terraform resman networking service account (read-only)."
  prefix       = var.prefix
  iam = {
    "roles/iam.serviceAccountTokenCreator" = compact([
      try(module.branch-network-r-sa-cicd[0].iam_email, null)
    ])
  }
  iam_project_roles = {
    (var.automation.project_id) = ["roles/serviceusage.serviceUsageConsumer"]
  }
  iam_storage_roles = {
    (var.automation.outputs_bucket) = [var.custom_roles["storage_viewer"]]
  }
}

# automation bucket

module "branch-network-gcs" {
  source        = "../../../../remotes/cloud-foundation-fabric/modules/gcs"
  project_id    = var.automation.project_id
  name          = "prod-resman-net-0"
  prefix        = var.prefix
  location      = var.locations.gcs
  storage_class = local.gcs_storage_class
  versioning    = true
  iam = {
    "roles/storage.objectAdmin"  = [module.branch-network-sa.iam_email]
    "roles/storage.objectViewer" = [module.branch-network-r-sa.iam_email]
  }
}
