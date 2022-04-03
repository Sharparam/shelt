import test, { expect } from '@playwright/test';

test('home page has correct heading', async ({ page }) => {
  await page.goto('/');
  expect(await page.textContent('h1')).toBe('Hi, I’m Adam');
});
