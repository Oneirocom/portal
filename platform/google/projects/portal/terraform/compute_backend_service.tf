resource "google_compute_backend_service" "portal_backend" {
  backend {
    balancing_mode  = "UTILIZATION"
    capacity_scaler = "1.0"
    group           = google_compute_region_instance_group_manager.portal_mig.instance_group
  }

  enable_cdn            = false
  health_checks         = [google_compute_health_check.portal_health_check.self_link]
  load_balancing_scheme = "EXTERNAL_MANAGED"
  name                  = "portal-backend"
  port_name             = "http"
  project               = google_project.portal_project.project_id
  protocol              = "HTTP"

  depends_on = [google_project_service.services["compute.googleapis.com"]]
}
