import { test, expect } from '@playwright/test';

// npx playwright test --headed

// test('has title', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
//
//     // Ожидаем, что заголовок содержит подстроку
//     await expect(page).toHaveTitle(/Playwright/);
// });
//
// test('get started link', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
//
//     // Клик по ссылке "Get started"
//     await page.getByRole('link', { name: 'Get started' }).click();
//
//     // Ожидаем переход на страницу документации
//     await expect(page).toHaveURL(/.*docs\/intro/);
// });

test('test 1', async ({ page }) => {
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')

    const env = process.env.NODE_ENV;
    console.log(env)
});