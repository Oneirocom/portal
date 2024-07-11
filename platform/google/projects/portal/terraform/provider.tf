provider "google" {
  project = "portal-52sgs2sgx"
  region  = "us-east4"
}

terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 4.33.0"
    }
  }
}