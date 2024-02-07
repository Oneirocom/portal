SELECT
  embeddings.id,
  embeddings."documentId",
  embeddings.content,
  embeddings.embedding,
  embeddings.index
FROM
  embeddings;