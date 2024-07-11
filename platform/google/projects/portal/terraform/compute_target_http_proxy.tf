resource "google_compute_target_http_proxy" "portal_http_proxy" {
  name    = "portal-http-proxy"
  project = google_project.portal_project.project_id
  url_map = google_compute_url_map.portal_url_map.self_link
}