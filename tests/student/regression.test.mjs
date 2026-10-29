import test from 'node:test';
import assert from 'node:assert/strict';
import { getClaim } from '../../src/claims.mjs';
test('viewer user-4 does not receive claim-B owned by user-42', () => {
  const claims = [{ id: 'claim-B', ownerId: 'user-42', status: 'pending' }];
  assert.equal(getClaim(claims, 'user-4', 'claim-B'), null);
});
