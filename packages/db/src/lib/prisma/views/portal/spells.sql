SELECT
  spells.id,
  spells.name,
  spells."projectId",
  spells.graph,
  spells."createdAt",
  spells."updatedAt",
  spells.type,
  spells."spellReleaseId"
FROM
  public.spells;