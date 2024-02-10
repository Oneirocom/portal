SELECT
  ad.id,
  ad.type,
  ad."projectId",
  ad.date,
  ad.metadata,
  p.workspace_id
FROM
  (
    public.documents ad
    JOIN projects p ON ((ad."projectId" = p.id))
  );