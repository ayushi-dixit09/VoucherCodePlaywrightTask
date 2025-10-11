import { test } from '@playwright/test';
import { RestaurantPage } from '../pages/RestaurantPage.js';

test('Search for restaurant offers in London via Categories flow', async ({ page }) => {
    const restaurantPage = new RestaurantPage(page);

    // Step 1: Open website
    await restaurantPage.openSite();

    // Step 2: Accept cookies if visible
    await restaurantPage.acceptCookiesIfVisible();

    // Step 3: Go to Categories > Restaurants
    await restaurantPage.goToRestaurants();

    // Step 4: Fill search details
    await restaurantPage.searchRestaurants('London');

    // Step 5: Click on Find Vouchers
    await restaurantPage.clickFindVouchers();

    // Step 6: Verify offers are visible
    await restaurantPage.verifyOffersVisible();
});
