-- -- This is an empty migration.CREATE OR REPLACE VIEW portal.agents AS
-- SELECT aa.*,
--   pa."id" AS "publicAgentId",
--   pa."description",
--   pa."remixable",
--   pa."featured",
--   pa."isTemplate",
--   CASE
--     WHEN pa."agentId" IS NOT NULL
--     AND pa."deletedAt" IS NULL THEN TRUE
--     ELSE FALSE
--   END AS "isPublic",
--   p.owner AS "creatorId",
--   p.name AS "creatorName",
--   p.image AS "creatorImage",
--   CAST(COALESCE(l."likesCount", 0) AS integer) AS "likesCount",
--   COALESCE(c."commentsCount", 0) AS "commentsCount",
--   aa."isDraft",
--   aa."draftAgentId"
-- FROM public.agents aa
--   LEFT JOIN portal."publicAgents" pa ON aa.id::TEXT = pa."agentId"
--   JOIN portal.projects p ON aa."projectId" = p.id
--   LEFT JOIN (
--     SELECT "publicAgentId",
--       COUNT(id) AS "likesCount"
--     FROM portal.likes
--     GROUP BY "publicAgentId"
--   ) l ON pa.id = l."publicAgentId"
--   LEFT JOIN (
--     SELECT "publicAgentId",
--       COUNT(id) AS "commentsCount"
--     FROM portal."comments"
--     WHERE "deletedAt" IS NULL
--     GROUP BY "publicAgentId"
--   ) c ON pa.id = c."publicAgentId";