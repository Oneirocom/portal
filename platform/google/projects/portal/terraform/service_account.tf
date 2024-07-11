resource "google_service_account" "compute_service_account" {
  account_id   = "compute-service-account"
  display_name = "Compute Service Account"
  project      = google_project.portal_project.project_id
}

# Grant the service account the required roles
resource "google_project_iam_member" "compute_service_account_roles" {
  project = google_project.portal_project.project_id
  role    = "roles/compute.instanceAdmin.v1"
  member  = "serviceAccount:${google_service_account.compute_service_account.email}"
}