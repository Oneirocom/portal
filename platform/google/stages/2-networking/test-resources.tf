

# tfdoc:file:description Temporary instances for testing

locals {
  test-vms = var.create_test_instances != true ? {} : {
    dev-spoke-primary = {
      region     = var.regions.primary
      project_id = module.dev-spoke-project.project_id
      zone       = "b"
      network    = module.dev-spoke-vpc.self_link
      subnetwork = module.dev-spoke-vpc.subnet_self_links["${var.regions.primary}/dev-default"]
    }
    landing-primary = {
      region     = var.regions.primary
      project_id = module.landing-project.project_id
      zone       = "b"
      network    = module.landing-vpc.self_link
      subnetwork = module.landing-vpc.subnet_self_links["${var.regions.primary}/landing-default"]
    }
    prod-spoke-primary = {
      region     = var.regions.primary
      project_id = module.prod-spoke-project.project_id
      zone       = "b"
      network    = module.prod-spoke-vpc.self_link
      subnetwork = module.prod-spoke-vpc.subnet_self_links["${var.regions.primary}/prod-default"]
    }
  }
}

module "test-vms" {
  for_each = local.test-vms
  # for_each   = {}
  source     = "../../../../remotes/cloud-foundation-fabric/modules/compute-vm"
  project_id = each.value.project_id
  zone       = "${each.value.region}-${each.value.zone}"
  name       = "test-vm-${each.key}"
  network_interfaces = [{
    network = each.value.network
    # change the subnet name to match the values you are actually using
    subnetwork = each.value.subnetwork
  }]
  instance_type = "e2-micro"
  tags          = ["ssh"]
  boot_disk = {
    initialize_params = {
      image = "projects/debian-cloud/global/images/family/debian-11"
    }
  }
  options = {
    spot               = true
    termination_action = "STOP"
  }
  metadata = {
    startup-script = <<EOF
      apt update
      apt install -y iputils-ping bind9-dnsutils
    EOF
  }
}
