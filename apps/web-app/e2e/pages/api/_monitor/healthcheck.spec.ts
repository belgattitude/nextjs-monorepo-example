import { test, expect } from '@playwright/test';

//test.describe('Api Monitor Healthcheck route', () => {
test('should return a success payload', async ({ request }) => {
  const status = await request.get('/api/_monitor/healthcheck');
  console.log(await status.body());
  console.log(status.url());
  console.log(await status.json());
  expect(1).toEqual(1);
  //expect(await status.ok()).toBeTruthy();
  expect(await status.json()).toContainEqual(
    expect.objectContaining({
      success: true,
      body: 'Bug description',
    })
  );
});
//});
