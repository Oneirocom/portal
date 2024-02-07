SELECT
  ad.id,
  ad.type,
  ad."projectId",
  ad.date,
  ad.metadata,
  p.workspace_id
FROM
  (
    documents ad
    JOIN portal.projects p ON ((ad."projectId" = p.id))
  );