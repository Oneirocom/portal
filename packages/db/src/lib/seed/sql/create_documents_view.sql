SELECT
  ad.*,
  p.workspace_id
FROM
  public.documents ad
  JOIN portal.projects p ON ad."projectId" = p.id;