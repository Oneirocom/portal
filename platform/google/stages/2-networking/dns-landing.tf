

# tfdoc:file:description Landing DNS zones and peerings setup.

# forwarding to on-prem DNS resolvers

module "landing-dns-fwd-onprem-example" {
  source     = "../../../../remotes/cloud-foundation-fabric/modules/dns"
  count      = length(var.dns.resolvers) > 0 ? 1 : 0
  project_id = module.landing-project.project_id
  name       = "example-com"
  zone_config = {
    domain = "onprem.example.com."
    forwarding = {
      client_networks = [module.landing-vpc.self_link]
      forwarders      = { for ip in var.dns.resolvers : ip => null }
    }
  }
}

module "landing-dns-fwd-onprem-rev-10" {
  source     = "../../../../remotes/cloud-foundation-fabric/modules/dns"
  count      = length(var.dns.resolvers) > 0 ? 1 : 0
  project_id = module.landing-project.project_id
  name       = "root-reverse-10"
  zone_config = {
    domain = "10.in-addr.arpa."
    forwarding = {
      client_networks = [module.landing-vpc.self_link]
      forwarders      = { for ip in var.dns.resolvers : ip => null }
    }
  }
}

module "landing-dns-priv-gcp" {
  source     = "../../../../remotes/cloud-foundation-fabric/modules/dns"
  project_id = module.landing-project.project_id
  name       = "gcp-example-com"
  zone_config = {
    domain = "gcp.example.com."
    private = {
      client_networks = [module.landing-vpc.self_link]
    }
  }
  recordsets = {
    "A localhost" = { records = ["127.0.0.1"] }
  }
}

# Google APIs via response policies

module "landing-dns-policy-googleapis" {
  source     = "../../../../remotes/cloud-foundation-fabric/modules/dns-response-policy"
  project_id = module.landing-project.project_id
  name       = "googleapis"
  factories_config = {
    rules = var.factories_config.dns_policy_rules_file
  }
  networks = {
    landing = module.landing-vpc.self_link
  }
}
