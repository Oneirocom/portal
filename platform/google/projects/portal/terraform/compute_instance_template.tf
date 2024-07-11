resource "google_compute_instance_template" "portal_instance_template" {
  disk {
    boot         = true
    source_image = "debian-cloud/debian-11"
  }

  machine_type            = "e2-medium"
  metadata_startup_script = "echo \"helloworld!\""
  name                    = "portal-instance-template"

  network_interface {
    network            = google_compute_network.portal_network.self_link
    subnetwork         = google_compute_subnetwork.portal_subnetwork.self_link
    subnetwork_project = google_project.portal_project.project_id
  }

  project = google_project.portal_project.project_id
  region  = "us-east4"

  service_account {
    email  = google_service_account.compute_service_account.email
    scopes = ["cloud-platform"]
  }

  depends_on = [google_project_iam_member.compute_service_account_roles]
}
