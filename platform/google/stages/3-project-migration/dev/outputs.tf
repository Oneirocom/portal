output "projects" {
  description = "Created projects."
  value = {
    for k, v in module.projects.projects : k => {
      number     = v.number
      project_id = v.id
    }
  }
}

output "service_accounts" {
  description = "Created service accounts."
  value       = module.projects.service_accounts
}
