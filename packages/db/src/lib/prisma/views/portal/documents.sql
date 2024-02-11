SELECT
  ad.id,
  ad.type,
  ad."projectId",
  ad.date,
  ad.metadata
FROM
  public.documents ad;