resource "google_compute_global_forwarding_rule" "portal_forwarding_rule" {
  ip_address            = google_compute_global_address.portal_global_address.self_link
  ip_protocol           = "TCP"
  load_balancing_scheme = "EXTERNAL_MANAGED"
  name                  = "portal-forwarding-rule"
  port_range            = "80"
  project               = google_project.portal_project.project_id
  target                = google_compute_target_http_proxy.portal_http_proxy.self_link
}