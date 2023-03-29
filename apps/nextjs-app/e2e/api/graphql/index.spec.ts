import { test, expect } from '@playwright/test';
import { isNonEmptyString, isParsableNumeric } from '@your-org/ts-utils';

test('should call the getUser graphql endpoint', async ({ request }) => {
  const resp = await request.post('/api/graphql', {
    data: {
      query: `query { getUser(id: 1) { email, id } }`,
    },
  });
  expect(resp).toBeOK();
  const headers = resp.headers();
  expect(headers['content-type']).toEqual('application/json; charset=utf-8');
  const json = await resp.json();
  const { id, email } = json?.data?.getUser ?? {};
  expect(isNonEmptyString(email)).toBeTruthy();
  expect(isParsableNumeric(id)).toBeTruthy();
});
