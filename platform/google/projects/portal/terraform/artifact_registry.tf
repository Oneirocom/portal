resource "google_artifact_registry_repository" "docker_registry" {
  location      = "us-east4"
  repository_id = "docker-repo"
  description   = "Docker repository"
  format        = "DOCKER"
  project       = google_project.portal_project.project_id

  depends_on = [time_sleep.wait_30_seconds]
}

resource "google_artifact_registry_repository" "npm_registry" {
  location      = "us-east4"
  repository_id = "npm-repo"
  description   = "NPM repository"
  format        = "NPM"
  project       = google_project.portal_project.project_id

  depends_on = [time_sleep.wait_30_seconds]
}