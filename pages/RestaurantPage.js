import { expect } from '@playwright/test';

export class RestaurantPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.acceptCookiesBtn = page.locator('#onetrust-accept-btn-handler');
    this.categoriesMenu = page.locator('#categories-dialog');
    this.restaurantsLink = page.getByRole('link', { name: 'Restaurants icon Restaurants' });
    this.locationInput = page.getByRole('textbox', { name: 'Location' });
    this.dateInput = page.locator('#day-select');
    this.peopleDropdown = page.locator('#people-select');
    this.findVouchersBtn = page.getByRole('button', { name: 'Find restaurants vouchers' });
    this.offers = page.locator('.offer, article, section');
  }

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
      // Cookie banner not found within 5s — ignore
    }
  }

  async goToRestaurants() {
    await this.categoriesMenu.click({ force: true });
    await this.restaurantsLink.click({ force: true });
  }

  async enterTown(town = 'London') {
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

  async clickFindVouchers() {
    await this.findVouchersBtn.click();
  }

  async verifyOffersVisible() {
    await this.offers.first().waitFor({ timeout: 10000 });
    const count = await this.offers.count();
    expect(count).toBeGreaterThan(0);
  }
}
