// Contract: docs/contract.md. Pure function; do not mutate claims.
function normalizeId(value) {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed === '' ? null : trimmed;
}

export function getClaim(claims, viewerId, claimId) {
  if (!Array.isArray(claims)) return null;
  const target = normalizeId(claimId);
  const viewer = normalizeId(viewerId);
  if (target === null || viewer === null) return null;
  for (const claim of claims) {
    if (claim === null || typeof claim !== 'object') continue;
    if (normalizeId(claim.id) === target && normalizeId(claim.ownerId) === viewer) return claim;
  }
  return null;
}
