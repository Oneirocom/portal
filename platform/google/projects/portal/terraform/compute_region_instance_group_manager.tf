resource "google_compute_region_instance_group_manager" "portal_mig" {
  base_instance_name = "portal-instance"
  name               = "portal-mig"

  named_port {
    name = "http"
    port = "80"
  }

  project     = google_project.portal_project.project_id
  region      = "us-east4"
  target_size = "2"

  version {
    instance_template = google_compute_instance_template.portal_instance_template.self_link
  }

  depends_on = [google_service_account.compute_service_account, google_project_iam_member.compute_service_account_roles]
}
