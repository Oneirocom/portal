

# tfdoc:file:description FAST stage interface.

variable "automation" {
  # tfdoc:variable:source 0-bootstrap
  description = "Automation resources created by the bootstrap stage."
  type = object({
    outputs_bucket          = string
    project_id              = string
    project_number          = string
    federated_identity_pool = string
    federated_identity_providers = map(object({
      audiences        = list(string)
      issuer           = string
      issuer_uri       = string
      name             = string
      principal_branch = string
      principal_repo   = string
    }))
    service_accounts = object({
      resman-r = string
    })
  })
  nullable = false
}

variable "billing_account" {
  # tfdoc:variable:source 0-bootstrap
  description = "Billing account id. If billing account is not part of the same org set `is_org_level` to `false`. To disable handling of billing IAM roles set `no_iam` to `true`."
  type = object({
    id           = string
    is_org_level = optional(bool, true)
    no_iam       = optional(bool, false)
  })
  nullable = false
}

variable "custom_roles" {
  # tfdoc:variable:source 0-bootstrap
  description = "Custom roles defined at the org level, in key => id format."
  type = object({
    gcve_network_admin            = string
    organization_admin_viewer     = string
    service_project_network_admin = string
    storage_viewer                = string
  })
  default = null
}

variable "groups" {
  # tfdoc:variable:source 0-bootstrap
  # https://cloud.google.com/docs/enterprise/setup-checklist
  description = "Group names or IAM-format principals to grant organization-level permissions. If just the name is provided, the 'group:' principal and organization domain are interpolated."
  type = object({
    gcp-billing-admins      = optional(string, "gcp-billing-admins")
    gcp-devops              = optional(string, "gcp-devops")
    gcp-network-admins      = optional(string, "gcp-vpc-network-admins")
    gcp-organization-admins = optional(string, "gcp-organization-admins")
    gcp-security-admins     = optional(string, "gcp-security-admins")
  })
  nullable = false
  default  = {}
}

variable "locations" {
  # tfdoc:variable:source 0-bootstrap
  description = "Optional locations for GCS, BigQuery, and logging buckets created here."
  type = object({
    bq      = optional(string, "EU")
    gcs     = optional(string, "EU")
    logging = optional(string, "global")
    pubsub  = optional(list(string), [])
  })
  nullable = false
  default  = {}
}

variable "logging" {
  # tfdoc:variable:source 1-tenant-factory
  description = "Logging configuration for tenants."
  type = object({
    project_id = string
    log_sinks = optional(map(object({
      filter = string
      type   = string
    })), {})
  })
  nullable = false
}

variable "organization" {
  # tfdoc:variable:source 0-bootstrap
  description = "Organization details."
  type = object({
    domain      = string
    id          = number
    customer_id = string
  })
  nullable = false
}

check "prefix_validator" {
  assert {
    condition     = (try(length(var.prefix), 0) < 10) || (try(length(var.prefix), 0) < 12 && var.root_node != null)
    error_message = "var.prefix must be 9 characters or shorter for organizations, and 11 chars or shorter for tenants."
  }
}

variable "prefix" {
  # tfdoc:variable:source 0-bootstrap
  description = "Prefix used for resources that need unique names. Use 9 characters or less."
  type        = string
}

variable "root_node" {
  # tfdoc:variable:source 0-bootstrap
  description = "Root node for the hierarchy, if running in tenant mode."
  type        = string
  default     = null
  validation {
    condition = (
      var.root_node == null ||
      startswith(coalesce(var.root_node, "-"), "folders/")
    )
    error_message = "Root node must be in folders/nnnnn format if specified."
  }
}
