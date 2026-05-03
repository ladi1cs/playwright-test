import { test, expect } from '@playwright/test';

test('footer is visible with correct text', async ({ page }) => {
  await page.goto('/');

  const footer = page.locator('footer');

  await expect(footer).toBeVisible();
  await expect(footer).toContainText('© 2026 Rena&Ira Test Website');
});