import { test, expect } from '@playwright/test';
import { RestaurantPage } from '../pages/RestaurantPage.js';

test('Negative case: element not found to trigger failure', async ({ page }) => {
    const restaurantPage = new RestaurantPage(page);

    await test.step('Open website and accept cookies', async () => {
        await restaurantPage.openSite();
        await restaurantPage.acceptCookiesIfVisible();
    });

    await test.step('Attempt to verify a non-existent element', async () => {
        // This intentionally fails to validate error handling
        await expect(page.locator('#non-existent-element')).toBeVisible();
    });
});