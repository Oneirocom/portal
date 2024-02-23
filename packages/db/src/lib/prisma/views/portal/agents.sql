SELECT
  aa.id,
  aa."rootSpell",
  aa."publicVariables",
  aa.secrets,
  aa.name,
  aa.enabled,
  aa."updatedAt",
  aa."pingedAt",
  aa."projectId",
  aa.data,
  aa."runState",
  aa.image,
  aa."rootSpellId",
  aa."default",
  aa."createdAt",
  aa."currentSpellReleaseId",
  aa."embedModel",
  aa.version,
  aa."embeddingProvider",
  aa."embeddingModel",
  aa."isDraft",
  aa."draftAgentId",
  pa.id AS "publicAgentId",
  pa.description,
  pa.remixable,
  pa.featured,
  pa."isTemplate",
  CASE
    WHEN (
      (pa."agentId" IS NOT NULL)
      AND (pa."deletedAt" IS NULL)
    ) THEN TRUE
    ELSE false
  END AS "isPublic",
  p.owner AS "creatorId",
  p.name AS "creatorName",
  p.image AS "creatorImage",
  (COALESCE(l."likesCount", (0) :: bigint)) :: integer AS "likesCount",
  COALESCE(c."commentsCount", (0) :: bigint) AS "commentsCount"
FROM
  (
    (
      (
        (
          public.agents aa
          LEFT JOIN "publicAgents" pa ON (((aa.id) :: text = pa."agentId"))
        )
        JOIN projects p ON ((aa."projectId" = p.id))
      )
      LEFT JOIN (
        SELECT
          likes."publicAgentId",
          count(likes.id) AS "likesCount"
        FROM
          likes
        GROUP BY
          likes."publicAgentId"
      ) l ON ((pa.id = l."publicAgentId"))
    )
    LEFT JOIN (
      SELECT
        comments."publicAgentId",
        count(comments.id) AS "commentsCount"
      FROM
        comments
      WHERE
        (comments."deletedAt" IS NULL)
      GROUP BY
        comments."publicAgentId"
    ) c ON ((pa.id = c."publicAgentId"))
  );