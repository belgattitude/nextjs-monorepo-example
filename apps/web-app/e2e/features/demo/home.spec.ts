import { test, expect } from '@playwright/test';
import homeJson from '../../../public/locales/en/demo.json';

test('should navigate to the home page', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('title')).toContainText(homeJson.page.title);
});
