import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly rejectAllButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rejectAllButton = page.getByRole('button', { name: 'Reject all' });
  }

  async goto() {
    await this.page.goto('https://lokalise.com');
  }

  async rejectAll() {
    await this.rejectAllButton.click();
  }
}