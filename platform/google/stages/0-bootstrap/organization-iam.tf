# tfdoc:file:description Organization-level IAM bindings locals.

locals {
  # IAM roles in the org to reset (remove principals)
  iam_delete_roles = [
    "roles/billing.creator"
  ]
  # domain IAM bindings
  iam_domain_bindings = var.organization.domain == null ? {} : {
    "domain:${var.organization.domain}" = {
      authoritative = ["roles/browser"]
      additive      = []
    }
  }
  # human (groups) IAM bindings
  iam_principal_bindings = {
    (local.principals.gcp-billing-admins) = {
      authoritative = []
      additive = (
        local.billing_mode != "org" ? [] : [
          "roles/billing.admin"
        ]
      )
    }
    (local.principals.gcp-network-admins) = {
      authoritative = [
        "roles/cloudasset.owner",
        "roles/cloudsupport.techSupportEditor",
      ]
      additive = [
        "roles/compute.orgFirewallPolicyAdmin",
        "roles/compute.xpnAdmin"
      ]
    }
    (local.principals.gcp-organization-admins) = {
      authoritative = [
        "roles/cloudasset.owner",
        "roles/cloudsupport.admin",
        "roles/compute.osAdminLogin",
        "roles/compute.osLoginExternalUser",
        "roles/owner",
        "roles/resourcemanager.folderAdmin",
        "roles/resourcemanager.organizationAdmin",
        "roles/resourcemanager.projectCreator",
        "roles/resourcemanager.tagAdmin",
        "roles/iam.workforcePoolAdmin"
      ]
      additive = concat(
        [
          "roles/orgpolicy.policyAdmin"
        ],
        local.billing_mode != "org" ? [] : [
          "roles/billing.admin"
        ]
      )
    }
    (local.principals.gcp-security-admins) = {
      authoritative = [
        "roles/cloudasset.owner",
        "roles/cloudsupport.techSupportEditor",
        "roles/iam.securityReviewer",
        "roles/logging.admin",
        "roles/securitycenter.admin",
      ]
      additive = [
        "roles/accesscontextmanager.policyAdmin",
        "roles/iam.organizationRoleAdmin",
        "roles/orgpolicy.policyAdmin"
      ]
    }
    (local.principals.gcp-support) = {
      authoritative = [
        "roles/cloudsupport.techSupportEditor",
        "roles/logging.viewer",
        "roles/monitoring.viewer",
      ]
      additive = []
    }
  }
  # machine (service accounts) IAM bindings, in logical format
  # the service account module's "magic" outputs allow us to use dynamic values
  iam_sa_bindings = {
    (module.automation-tf-bootstrap-sa.iam_email) = {
      authoritative = [
        "roles/essentialcontacts.admin",
        "roles/iam.workforcePoolAdmin",
        "roles/logging.admin",
        "roles/resourcemanager.organizationAdmin",
        "roles/resourcemanager.projectCreator",
        "roles/resourcemanager.projectMover",
        "roles/resourcemanager.tagAdmin"
      ]
      additive = concat(
        [
          "roles/iam.organizationRoleAdmin",
          "roles/orgpolicy.policyAdmin"
        ],
        local.billing_mode != "org" ? [] : [
          "roles/billing.admin"
        ]
      )
    }
    (module.automation-tf-bootstrap-r-sa.iam_email) = {
      authoritative = [
        "roles/essentialcontacts.viewer",
        "roles/logging.viewer",
        "roles/resourcemanager.folderViewer",
        "roles/resourcemanager.tagViewer"
      ]
      additive = concat(
        [
          # the organizationAdminViewer custom role is granted via the SA module
          "roles/iam.organizationRoleViewer",
          "roles/iam.workforcePoolViewer",
          "roles/orgpolicy.policyViewer"
        ],
        local.billing_mode != "org" ? [] : [
          "roles/billing.viewer"
        ]
      )
    }
    (module.automation-tf-resman-sa.iam_email) = {
      authoritative = [
        "roles/essentialcontacts.admin",
        "roles/logging.admin",
        "roles/resourcemanager.folderAdmin",
        "roles/resourcemanager.projectCreator",
        "roles/resourcemanager.tagAdmin",
        "roles/resourcemanager.tagUser"
      ]
      additive = concat(
        [
          "roles/accesscontextmanager.policyAdmin",
          "roles/orgpolicy.policyAdmin"
        ],
        local.billing_mode != "org" ? [] : [
          "roles/billing.admin"
        ]
      )
    }
    (module.automation-tf-resman-r-sa.iam_email) = {
      authoritative = [
        "roles/accesscontextmanager.policyReader",
        "roles/essentialcontacts.viewer",
        "roles/logging.viewer",
        "roles/resourcemanager.folderViewer",
        "roles/resourcemanager.tagViewer",
        "roles/serviceusage.serviceUsageViewer"
      ]
      additive = concat(
        [
          # the organizationAdminViewer custom role is granted via the SA module
          "roles/orgpolicy.policyViewer"
        ],
        local.billing_mode != "org" ? [] : [
          "roles/billing.viewer"
        ]
      )
    }
  }
  # bootstrap user bindings
  iam_user_bootstrap_bindings = var.bootstrap_user == null ? {} : {
    "user:${var.bootstrap_user}" = {
      authoritative = [
        "roles/logging.admin",
        "roles/owner",
        "roles/resourcemanager.organizationAdmin",
        "roles/resourcemanager.projectCreator",
        "roles/resourcemanager.tagAdmin"
      ]
      # TODO: align additive roles with the README
      additive = (
        local.billing_mode != "org" ? [] : [
          "roles/billing.admin"
        ]
      )
    }
  }
}
