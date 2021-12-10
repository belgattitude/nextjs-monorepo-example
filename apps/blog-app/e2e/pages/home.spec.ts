import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should have a title containing blog-app', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/.*blog-app/);
  });
});
