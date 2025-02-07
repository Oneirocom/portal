

# tfdoc:file:description VPN between landing and spokes.

locals {
  # persistent_counter.units.values[k]
  bgp_sessions_range_0 = "169.254.250.0/25"
  bgp_sessions_range_1 = "169.254.250.128/25"
  bgp_session_ranges = {
    prod-primary = {
      0 = cidrsubnet(local.bgp_sessions_range_0, 5, 0)
      1 = cidrsubnet(local.bgp_sessions_range_1, 5, 0)
    }
    prod-secondary = {
      0 = cidrsubnet(local.bgp_sessions_range_0, 5, 1)
      1 = cidrsubnet(local.bgp_sessions_range_1, 5, 1)
    }
    dev-primary = {
      0 = cidrsubnet(local.bgp_sessions_range_0, 5, 2)
      1 = cidrsubnet(local.bgp_sessions_range_1, 5, 2)
    }
  }
}

moved {
  from = module.landing-to-spokes-primary-vpn
  to   = module.landing-to-spokes-primary-vpn[0]
}

module "landing-to-spokes-primary-vpn" {
  count      = local.spoke_connection == "vpn" ? 1 : 0
  source     = "../../../../remotes/cloud-foundation-fabric/modules/net-vpn-ha"
  project_id = module.landing-project.project_id
  network    = module.landing-vpc.self_link
  region     = var.regions.primary
  name       = "to-spokes-${local.region_shortnames[var.regions.primary]}"
  peer_gateways = {
    dev  = { gcp = module.dev-to-landing-primary-vpn[0].self_link }
    prod = { gcp = module.prod-to-landing-primary-vpn[0].self_link }
  }
  router_config = {
    asn              = var.spoke_configs.vpn_configs.landing.asn
    custom_advertise = var.spoke_configs.vpn_configs.landing.custom_advertise
  }
  tunnels = {
    dev-0 = {
      bgp_peer = {
        address = cidrhost(local.bgp_session_ranges.dev-primary[0], 2)
        asn     = var.spoke_configs.vpn_configs.dev.asn
      }
      bgp_session_range     = "${cidrhost(local.bgp_session_ranges.dev-primary[0], 1)}/30"
      peer_gateway          = "dev"
      vpn_gateway_interface = 0
    }
    dev-1 = {
      bgp_peer = {
        address = cidrhost(local.bgp_session_ranges.dev-primary[1], 2)
        asn     = var.spoke_configs.vpn_configs.dev.asn
      }
      bgp_session_range     = "${cidrhost(local.bgp_session_ranges.dev-primary[1], 1)}/30"
      peer_gateway          = "dev"
      vpn_gateway_interface = 1
    }
    prod-0 = {
      bgp_peer = {
        address = cidrhost(local.bgp_session_ranges.prod-primary[0], 2)
        asn     = var.spoke_configs.vpn_configs.prod.asn
      }
      bgp_session_range     = "${cidrhost(local.bgp_session_ranges.prod-primary[0], 1)}/30"
      peer_gateway          = "prod"
      vpn_gateway_interface = 0
    }
    prod-1 = {
      bgp_peer = {
        address = cidrhost(local.bgp_session_ranges.prod-primary[1], 2)
        asn     = var.spoke_configs.vpn_configs.prod.asn
      }
      bgp_session_range     = "${cidrhost(local.bgp_session_ranges.prod-primary[1], 1)}/30"
      peer_gateway          = "prod"
      vpn_gateway_interface = 1
    }
  }
}

moved {
  from = module.landing-to-spokes-secondary-vpn
  to   = module.landing-to-spokes-secondary-vpn[1]
}

module "landing-to-spokes-secondary-vpn" {
  count      = local.spoke_connection == "vpn" ? 1 : 0
  source     = "../../../../remotes/cloud-foundation-fabric/modules/net-vpn-ha"
  project_id = module.landing-project.project_id
  network    = module.landing-vpc.self_link
  region     = var.regions.secondary
  name       = "to-spokes-${local.region_shortnames[var.regions.secondary]}"
  peer_gateways = {
    prod = { gcp = module.prod-to-landing-secondary-vpn[0].self_link }
  }
  router_config = {
    asn              = var.spoke_configs.vpn_configs.landing.asn
    custom_advertise = var.spoke_configs.vpn_configs.landing.custom_advertise
  }
  tunnels = {
    prod-0 = {
      bgp_peer = {
        address = cidrhost(local.bgp_session_ranges.prod-secondary[0], 2)
        asn     = var.spoke_configs.vpn_configs.prod.asn
      }
      bgp_session_range     = "${cidrhost(local.bgp_session_ranges.prod-secondary[0], 1)}/30"
      peer_gateway          = "prod"
      vpn_gateway_interface = 0
    }
    prod-1 = {
      bgp_peer = {
        address = cidrhost(local.bgp_session_ranges.prod-secondary[1], 2)
        asn     = var.spoke_configs.vpn_configs.prod.asn
      }
      bgp_session_range     = "${cidrhost(local.bgp_session_ranges.prod-secondary[1], 1)}/30"
      peer_gateway          = "prod"
      vpn_gateway_interface = 1
    }
  }
}

moved {
  from = module.dev-to-landing-primary-vpn
  to   = module.dev-to-landing-primary-vpn[1]
}

module "dev-to-landing-primary-vpn" {
  count      = local.spoke_connection == "vpn" ? 1 : 0
  source     = "../../../../remotes/cloud-foundation-fabric/modules/net-vpn-ha"
  project_id = module.dev-spoke-project.project_id
  network    = module.dev-spoke-vpc.self_link
  region     = var.regions.primary
  name       = "to-landing-${local.region_shortnames[var.regions.primary]}"
  peer_gateways = {
    default = { gcp = module.landing-to-spokes-primary-vpn[0].self_link }
  }
  router_config = {
    asn              = var.spoke_configs.vpn_configs.dev.asn
    custom_advertise = var.spoke_configs.vpn_configs.dev.custom_advertise
  }
  tunnels = {
    0 = {
      bgp_peer = {
        address = cidrhost(local.bgp_session_ranges.dev-primary[0], 1)
        asn     = var.spoke_configs.vpn_configs.landing.asn
      }
      bgp_session_range     = "${cidrhost(local.bgp_session_ranges.dev-primary[0], 2)}/30"
      shared_secret         = module.landing-to-spokes-primary-vpn[0].random_secret
      vpn_gateway_interface = 0
    }
    1 = {
      bgp_peer = {
        address = cidrhost(local.bgp_session_ranges.dev-primary[1], 1)
        asn     = var.spoke_configs.vpn_configs.landing.asn
      }
      bgp_session_range     = "${cidrhost(local.bgp_session_ranges.dev-primary[1], 2)}/30"
      shared_secret         = module.landing-to-spokes-primary-vpn[0].random_secret
      vpn_gateway_interface = 1
    }
  }
}

moved {
  from = module.prod-to-landing-primary-vpn
  to   = module.prod-to-landing-primary-vpn[1]
}

module "prod-to-landing-primary-vpn" {
  count      = local.spoke_connection == "vpn" ? 1 : 0
  source     = "../../../../remotes/cloud-foundation-fabric/modules/net-vpn-ha"
  project_id = module.prod-spoke-project.project_id
  network    = module.prod-spoke-vpc.self_link
  region     = var.regions.primary
  name       = "to-landing-${local.region_shortnames[var.regions.primary]}"
  peer_gateways = {
    default = { gcp = module.landing-to-spokes-primary-vpn[0].self_link }
  }
  router_config = {
    asn              = var.spoke_configs.vpn_configs.prod.asn
    custom_advertise = var.spoke_configs.vpn_configs.prod.custom_advertise
  }
  tunnels = {
    0 = {
      bgp_peer = {
        address = cidrhost(local.bgp_session_ranges.prod-primary[0], 1)
        asn     = var.spoke_configs.vpn_configs.landing.asn
      }
      bgp_session_range     = "${cidrhost(local.bgp_session_ranges.prod-primary[0], 2)}/30"
      shared_secret         = module.landing-to-spokes-primary-vpn[0].random_secret
      vpn_gateway_interface = 0
    }
    1 = {
      bgp_peer = {
        address = cidrhost(local.bgp_session_ranges.prod-primary[1], 1)
        asn     = var.spoke_configs.vpn_configs.landing.asn
      }
      bgp_session_range     = "${cidrhost(local.bgp_session_ranges.prod-primary[1], 2)}/30"
      shared_secret         = module.landing-to-spokes-primary-vpn[0].random_secret
      vpn_gateway_interface = 1
    }
  }
}

moved {
  from = module.prod-to-landing-secondary-vpn
  to   = module.prod-to-landing-secondary-vpn[1]
}
module "prod-to-landing-secondary-vpn" {
  count      = local.spoke_connection == "vpn" ? 1 : 0
  source     = "../../../../remotes/cloud-foundation-fabric/modules/net-vpn-ha"
  project_id = module.prod-spoke-project.project_id
  network    = module.prod-spoke-vpc.self_link
  region     = var.regions.secondary
  name       = "to-landing-${local.region_shortnames[var.regions.secondary]}"
  peer_gateways = {
    default = { gcp = module.landing-to-spokes-secondary-vpn[0].self_link }
  }
  router_config = {
    asn              = var.spoke_configs.vpn_configs.prod.asn
    custom_advertise = var.spoke_configs.vpn_configs.prod.custom_advertise
  }
  tunnels = {
    0 = {
      bgp_peer = {
        address = cidrhost(local.bgp_session_ranges.prod-secondary[0], 1)
        asn     = var.spoke_configs.vpn_configs.landing.asn
      }
      bgp_session_range     = "${cidrhost(local.bgp_session_ranges.prod-secondary[0], 2)}/30"
      shared_secret         = module.landing-to-spokes-secondary-vpn[0].random_secret
      vpn_gateway_interface = 0
    }
    1 = {
      bgp_peer = {
        address = cidrhost(local.bgp_session_ranges.prod-secondary[1], 1)
        asn     = var.spoke_configs.vpn_configs.landing.asn
      }
      bgp_session_range     = "${cidrhost(local.bgp_session_ranges.prod-secondary[1], 2)}/30"
      shared_secret         = module.landing-to-spokes-secondary-vpn[0].random_secret
      vpn_gateway_interface = 1
    }
  }
}
