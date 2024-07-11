resource "google_project" "portal_project" {
  project_id      = "portal-52sgs2sgx"
  name            = "portal"
  billing_account = "014A04-66D62D-8D3B17"
  folder_id       = "573470352547"
  # org_id          = "1038710168312"
}

output "project_id" {
  value = google_project.portal_project.project_id
}