

# tfdoc:file:description Production spoke VPC and related resources.

module "prod-spoke-project" {
  source          = "../../../../remotes/cloud-foundation-fabric/modules/project"
  billing_account = var.billing_account.id
  name            = "prod-net-spoke-0"
  parent          = var.folder_ids.networking-prod
  prefix          = var.prefix
  services = concat(
    [
      "container.googleapis.com",
      "compute.googleapis.com",
      "dns.googleapis.com",
      "iap.googleapis.com",
      "networkmanagement.googleapis.com",
      "servicenetworking.googleapis.com",
      "stackdriver.googleapis.com",
      "vpcaccess.googleapis.com"
    ],
    (
      var.fast_features.gcve
      ? ["vmwareengine.googleapis.com"]
      : []
    )
  )
  shared_vpc_host_config = {
    enabled = true
  }
  metric_scopes = [module.landing-project.project_id]
  iam = {
    "roles/dns.admin" = compact([
      try(local.service_accounts.gke-prod, null),
      try(local.service_accounts.project-factory, null),
      try(local.service_accounts.project-factory-prod, null),
    ])
  }
  # allow specific service accounts to assign a set of roles
  iam_bindings = {
    sa_delegated_grants = {
      role = "roles/resourcemanager.projectIamAdmin"
      members = compact([
        try(local.service_accounts.data-platform-prod, null),
        try(local.service_accounts.project-factory, null),
        try(local.service_accounts.project-factory-prod, null),
        try(local.service_accounts.gke-prod, null),
      ])
      condition = {
        title       = "prod_stage3_sa_delegated_grants"
        description = "Production host project delegated grants."
        expression = format(
          "api.getAttribute('iam.googleapis.com/modifiedGrantsByRole', []).hasOnly([%s])",
          join(",", formatlist("'%s'", local.stage3_sas_delegated_grants))
        )
      }
    }
  }
}

module "prod-spoke-vpc" {
  source     = "../../../../remotes/cloud-foundation-fabric/modules/net-vpc"
  project_id = module.prod-spoke-project.project_id
  name       = "prod-spoke-0"
  mtu        = 1500
  dns_policy = {
    logging = var.dns.enable_logging
  }
  factories_config = {
    subnets_folder = "${var.factories_config.data_dir}/subnets/prod"
  }
  psa_configs                     = var.psa_ranges.prod
  delete_default_routes_on_create = true
  routes = {
    default = {
      dest_range    = "0.0.0.0/0"
      next_hop      = "default-internet-gateway"
      next_hop_type = "gateway"
      priority      = 1000
    }
  }
}

module "prod-spoke-firewall" {
  source     = "../../../../remotes/cloud-foundation-fabric/modules/net-vpc-firewall"
  project_id = module.prod-spoke-project.project_id
  network    = module.prod-spoke-vpc.name
  default_rules_config = {
    disabled = true
  }
  factories_config = {
    cidr_tpl_file = "${var.factories_config.data_dir}/cidrs.yaml"
    rules_folder  = "${var.factories_config.data_dir}/firewall-rules/prod"
  }
}

module "prod-spoke-cloudnat" {
  source         = "../../../../remotes/cloud-foundation-fabric/modules/net-cloudnat"
  for_each       = toset(var.enable_cloud_nat ? values(module.prod-spoke-vpc.subnet_regions) : [])
  project_id     = module.prod-spoke-project.project_id
  region         = each.value
  name           = "prod-nat-${local.region_shortnames[each.value]}"
  router_create  = true
  router_network = module.prod-spoke-vpc.name
  logging_filter = "ERRORS_ONLY"
}
