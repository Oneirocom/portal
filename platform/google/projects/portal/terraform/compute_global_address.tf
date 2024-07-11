resource "google_compute_global_address" "portal_global_address" {
  name    = "portal-global-address"
  project = google_project.portal_project.project_id


  depends_on = [time_sleep.wait_30_seconds]
}