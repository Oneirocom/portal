resource "google_compute_instance_template" "portal_instance_template" {
  name        = "portal-instance-template"
  description = "This template uses a container image from Google's sample GCR registry"

  machine_type = "e2-medium"

  disk {
    source_image = "cos-cloud/cos-stable"
    auto_delete  = true
    boot         = true
  }

  network_interface {
    network    = google_compute_network.portal_network.self_link
    subnetwork = google_compute_subnetwork.portal_subnetwork.self_link
  }

  service_account {
    email  = google_service_account.compute_service_account.email
    scopes = ["cloud-platform"]
  }

  metadata = {
    gce-container-declaration = yamlencode({
      spec = {
        containers = [{
          image = "gcr.io/google-samples/hello-app:1.0"
          name  = "hello-app"
        }]
        restartPolicy = "Always"
      }
    })
  }

  labels = {
    container-vm = "cos-stable"
  }

  project = google_project.portal_project.project_id
  region  = "us-east4"

  depends_on = [google_project_iam_member.compute_service_account_roles]
}
