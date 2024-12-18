import { test, expect } from '@playwright/test'
//import { test, expect } from '../fixtures/base-fixture';
import { HomePage } from '../pages/home-page';

test.describe('lokalise smoke tests', () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);

    await page.goto('https://lokalise.com/');
  });

  test('lokalise sign up message', async ({ page }) => {
    //await expect(page.locator('form')).toContainText('Please enter your e-mail');
    });
});