import { test, expect } from '@playwright/test';
import { isNonEmptyString, isParsableNumeric } from '@your-org/ts-utils';

test('should call the mesh for random cats', async ({ request }) => {
  const resp = await request.post('/api/gateway/graphql', {
    data: {
      query: `{ getRandomFact { fact, length } }`,
    },
  });
  expect(resp).toBeOK();
  const headers = resp.headers();
  expect(headers['content-type']).toEqual('application/json; charset=utf-8');
  const json = await resp.json();
  const { fact, length } = json?.data?.getRandomFact ?? {};
  expect(isNonEmptyString(fact)).toBeTruthy();
  expect(isParsableNumeric(length)).toBeTruthy();
});
