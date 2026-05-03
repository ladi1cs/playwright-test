import { test, expect } from '@playwright/test';

test('navigate to Contact page', async ({ page }) => {
  await page.goto('/');

  await page.click('text=Contact');

  await expect(page).toHaveURL('/contact');
});