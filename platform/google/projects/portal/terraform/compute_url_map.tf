resource "google_compute_url_map" "portal_url_map" {
  default_service = google_compute_backend_service.portal_backend.self_link

  host_rule {
    hosts        = ["example.com"]
    path_matcher = "default"
  }

  name = "portal-url-map"

  path_matcher {
    default_service = google_compute_backend_service.portal_backend.self_link
    name            = "default"

    path_rule {
      paths   = ["/helloworld"]
      service = google_compute_backend_service.portal_backend.self_link
    }
  }

  project = google_project.portal_project.project_id
}