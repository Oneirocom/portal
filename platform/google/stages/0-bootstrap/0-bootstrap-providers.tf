terraform {
  backend "gcs" {
    bucket                      = "gtc-gcp-prod-iac-core-bootstrap-0"
    impersonate_service_account = "gtc-gcp-prod-bootstrap-0@gtc-gcp-prod-iac-core-0.iam.gserviceaccount.com"
  }
}
provider "google" {
  impersonate_service_account = "gtc-gcp-prod-bootstrap-0@gtc-gcp-prod-iac-core-0.iam.gserviceaccount.com"
}
provider "google-beta" {
  impersonate_service_account = "gtc-gcp-prod-bootstrap-0@gtc-gcp-prod-iac-core-0.iam.gserviceaccount.com"
}

# end provider.tf for bootstrap
