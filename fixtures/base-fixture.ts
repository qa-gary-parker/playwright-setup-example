import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home-page';

// Declare the types of your fixtures.
type MyFixtures = {
  homePage: HomePage;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    // Set up the fixture.
    const homePage = new HomePage(page);
    await homePage.rejectAll()

    // Use the fixture value in the test.
    await use(homePage);

    // Clean up the fixture.
    // empty
  },
});
export { expect } from '@playwright/test';