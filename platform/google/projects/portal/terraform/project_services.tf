resource "google_project_service" "services" {
  for_each = toset([
    "compute.googleapis.com",
    "cloudresourcemanager.googleapis.com",
    "iam.googleapis.com",
    "servicenetworking.googleapis.com",
    "artifactregistry.googleapis.com",
    "cloudbuild.googleapis.com",
    "secretmanager.googleapis.com"
  ])

  project = google_project.portal_project.project_id
  service = each.key

  disable_on_destroy         = false
  disable_dependent_services = true
}

# Add a time delay to allow API activation to propagate
resource "time_sleep" "wait_30_seconds" {
  depends_on = [google_project_service.services]

  create_duration = "30s"
}

# Add an additional delay for Cloud Build service account creation
resource "time_sleep" "wait_60_seconds" {
  depends_on = [time_sleep.wait_30_seconds]

  create_duration = "60s"
}