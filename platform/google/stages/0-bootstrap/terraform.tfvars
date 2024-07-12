# use `gcloud beta billing accounts list`
# if you have too many accounts, check the Cloud Console :)
billing_account = {
  id = "014A04-66D62D-8D3B17"
}

# locations for GCS, BigQuery, and logging buckets created here
locations = {
  bq      = "US-EAST4"
  gcs     = "US-EAST4"
  logging = "global"
  pubsub  = []
}

# use `gcloud organizations list`
organization = {
  domain      = "greentea.coffee"
  id          = 1038710168312
  customer_id = "C02rvf6dx"
}

outputs_location = "~/gcp/configs/greentea.coffee"

# use something unique and no longer than 9 characters
prefix = "gtc-gcp"
