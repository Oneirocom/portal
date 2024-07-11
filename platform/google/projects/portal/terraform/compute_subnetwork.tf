resource "google_compute_subnetwork" "portal_subnetwork" {
  ip_cidr_range            = "10.0.0.0/24"
  name                     = "portal-subnetwork"
  network                  = "${google_compute_network.portal_network.self_link}"
  private_ip_google_access = true
  project                  = google_project.portal_project.project_id
  region                   = "us-east4"
}