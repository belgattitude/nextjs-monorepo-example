import { test, expect } from '@playwright/test';
import commonJsonEn from '@/public/locales/en/common.json';

test.describe('Demo page', () => {
  test('should have the title in english by default', async ({ page }) => {
    await page.goto('/');
    const title = await page.title();
    expect(title).toBe(commonJsonEn.pages.home.title);
  });
});
