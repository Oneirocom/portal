#!/bin/bash

if [ $# -eq 0 ]; then
  echo "Error: no folder or GCS bucket specified. Use -h or --help for usage."
  exit 1
fi

if [[ "$1" == "-h" || "$1" == "--help" ]]; then
  cat <<END
Create commands to initialize stage provider and tfvars files.

Usage with GCS output files bucket:
  stage-links.sh GCS_BUCKET_URI

Usage with local output files folder:
  stage-links.sh FOLDER_PATH
END
  exit 0
fi

if [[ "$1" == "gs://"* ]]; then
  CMD="gcloud alpha storage cp $1"
  CP_CMD=$CMD
elif [ ! -d "$1" ]; then
  echo "folder $1 not found"
  exit 1
else
  CMD="ln -s $1"
  CP_CMD="cp $1"
fi

GLOBALS="tfvars/0-globals.auto.tfvars.json"
PROVIDER_CMD=$CMD
STAGE_NAME=$(basename "$(pwd)")

case $STAGE_NAME in

"0-bootstrap")
  unset GLOBALS
  PROVIDER="providers/0-bootstrap-providers.tf"
  TFVARS=""
  ;;
"1-resman" | "1-tenant-factory")
  PROVIDER="providers/${STAGE_NAME}-providers.tf"
  TFVARS="tfvars/0-bootstrap.auto.tfvars.json"
  ;;
"2-networking"*)
  if [[ -z "$TENANT" ]]; then
    echo "# if this is a tenant stage, set a \$TENANT variable with the tenant shortname and run the command again"
    PROVIDER="providers/2-networking-providers.tf"
    TFVARS="tfvars/0-bootstrap.auto.tfvars.json
    tfvars/1-resman.auto.tfvars.json"
  else
    unset GLOBALS
    PROVIDER="tenants/$TENANT/providers/2-networking-providers.tf"
    TFVARS="tenants/$TENANT/tfvars/0-bootstrap-tenant.auto.tfvars.json
    tenants/$TENANT/tfvars/1-resman.auto.tfvars.json"
  fi
  ;;
"2-security"*)
  if [[ -z "$TENANT" ]]; then
    echo "# if this is a tenant stage, set a \$TENANT variable with the tenant shortname and run the command again"
    PROVIDER="providers/2-security-providers.tf"
    TFVARS="tfvars/0-bootstrap.auto.tfvars.json
    tfvars/1-resman.auto.tfvars.json"
  else
    unset GLOBALS
    PROVIDER="tenants/$TENANT/providers/2-security-providers.tf"
    TFVARS="tenants/$TENANT/tfvars/0-bootstrap-tenant.auto.tfvars.json
    tenants/$TENANT/tfvars/1-resman.auto.tfvars.json"
  fi
  ;;
*)
  # check for a "dev" stage 3
  echo "no stage found, trying for parent stage 3..."
  STAGE_NAME=$(basename $(dirname "$(pwd)"))
  if [[ "$STAGE_NAME" == "3-"* ]]; then
    if [[ "$STAGE_NAME" == "3-gke-multitenant"* ]]; then
      STAGE_NAME="3-gke"
    fi
    SUFFIX=$(basename "$(pwd)")
    STAGE_NAME="${STAGE_NAME}-$SUFFIX"
    PROVIDER="providers/${STAGE_NAME}-providers.tf"
    TFVARS="tfvars/0-bootstrap.auto.tfvars.json
    tfvars/1-resman.auto.tfvars.json
    tfvars/2-networking.auto.tfvars.json
    tfvars/2-security.auto.tfvars.json"
  else
    echo "stage '$STAGE_NAME' not found"
  fi
  ;;

esac

echo -e "# copy and paste the following commands for '$STAGE_NAME'\n"

echo "$PROVIDER_CMD/$PROVIDER ./"

# if [[ -v GLOBALS ]]; then
# OSX uses an old bash version
if [[ ! -z ${GLOBALS+x} ]]; then
  echo "$CMD/$GLOBALS ./"
fi

for f in $TFVARS; do
  echo "$CMD/$f ./"
done

if [[ ! -z ${MESSAGE+x} ]]; then
  echo -e "\n# ---> $MESSAGE <---"
fi
