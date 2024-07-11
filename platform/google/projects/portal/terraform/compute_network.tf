resource "google_compute_network" "portal_network" {
  name                    = "portal-network"
  auto_create_subnetworks = false
  project                 = google_project.portal_project.project_id


  depends_on = [time_sleep.wait_30_seconds]
}
