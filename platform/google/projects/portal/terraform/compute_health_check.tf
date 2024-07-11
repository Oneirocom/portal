resource "google_compute_health_check" "portal_health_check" {
  name               = "portal-health-check"
  project = google_project.portal_project.project_id

  check_interval_sec = 5
  timeout_sec        = 5

  tcp_health_check {
    port = "80"
  }

  depends_on = [time_sleep.wait_30_seconds]
}