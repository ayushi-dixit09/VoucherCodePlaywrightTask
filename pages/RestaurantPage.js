import { expect } from '@playwright/test';

export class RestaurantPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.acceptCookiesBtn = page.locator('#onetrust-accept-btn-handler');
    this.categoriesMenu = page.locator('#categories-dialog');
    this.restaurantsLink = page.getByRole('link', { name: 'Restaurants' });
    this.locationInput = page.getByRole('textbox', { name: 'Location' });
    this.dateInput = page.locator('#day-select');
    this.peopleDropdown = page.locator('#people-select');
    this.findVouchersBtn = page.getByRole('button', { name: 'Find restaurants vouchers' });
    this.offers = page.locator('.offer, article, section');
  }

  // Open the website
  async openSite() {
    await this.page.goto('https://www.vouchercodes.co.uk');
  }

  // Handle cookies banner safely
  async acceptCookiesIfVisible() {
    try {
      await this.acceptCookiesBtn.waitFor({ state: 'visible', timeout: 5000 });
      await this.acceptCookiesBtn.scrollIntoViewIfNeeded();
      await this.acceptCookiesBtn.click({ force: true });
    } catch {
      // Cookie banner not found within timeout — safe to ignore
    }
  }

  // Navigate to Categories → Restaurants
  async goToRestaurants() {
    await this.categoriesMenu.click({ force: true });
    await this.restaurantsLink.click({ force: true });
  }

  // Enter search details (town, day, people)
  async enterTown(town = 'London') {
    await this.locationInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.locationInput.click();
    await this.locationInput.fill(town);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');

    // Select any day
    if (await this.dateInput.isVisible()) {
      await this.dateInput.selectOption({ label: 'Any' });
    }

    // Select any number of people
    await this.peopleDropdown.waitFor({ state: 'visible' });
    await this.peopleDropdown.selectOption({ index: 1 });
  }

  // Click on "Find Vouchers"
  async clickFindVouchers() {
    await this.findVouchersBtn.click();
  }

  // Verify that restaurant offers are visible
  async verifyOffersVisible() {
    await this.offers.first().waitFor({ timeout: 10000 });
    const count = await this.offers.count();
    expect(count).toBeGreaterThan(0);
  }
}
