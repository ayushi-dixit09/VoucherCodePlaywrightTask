import { expect } from '@playwright/test';

export class RestaurantPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.acceptCookiesBtn = page.locator('#onetrust-accept-btn-handler');
    this.categoriesMenu = page.locator('#categories-dialog' );
    this.restaurantsLink = page.getByRole('link', { name: 'Restaurants icon Restaurants' })
    this.locationInput = page.getByRole('textbox', { name: 'Location' });
    this.dateInput = page.getByLabel('Day');
    this.peopleDropdown = page.getByLabel('People');
    this.findVouchersBtn = page.getByRole('button', { name: 'Find restaurants vouchers' });
    this.offers = page.locator('.offer, article, section');
  }

  async openSite() {
    await this.page.goto('https://www.vouchercodes.co.uk');
  }

  async acceptCookiesIfVisible() {
    if (await this.acceptCookiesBtn.isVisible({timeout:5000})) {
        await this.acceptCookiesBtn.scrollIntoViewIfNeeded();
        await this.acceptCookiesBtn.click({force:true});
    }
  }

  async goToRestaurants() {
    await this.categoriesMenu.click({force:true});
    await this.restaurantsLink.click({force:true});
  }

  async searchRestaurants() {
    await this.locationInput.click();
    await this.locationInput.fill('London');

    // Select any day
    if (await this.dateInput.isVisible()) {
      await this.dateInput.click();
      await this.dateInput.first().selectOption('Any');
    }

    // Select any number of people
    await this.peopleDropdown.selectOption('Any');
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
