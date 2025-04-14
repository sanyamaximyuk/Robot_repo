import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';
import { expect } from '@playwright/test';
import { SinsayHomePage } from '../pages/sinsay.page.ts';

let browser: Browser;
let page: Page;
let sinsayHomePage: SinsayHomePage;

Before(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    sinsayHomePage = new SinsayHomePage(page);
    await sinsayHomePage.gotoHomePage();
    await sinsayHomePage.acceptCookies();
});

After(async () => {
    await browser.close();
});

Given('I am on the Sinsay home page', async () => {
    await sinsayHomePage.gotoHomePage();
    await expect(page).toHaveURL('https://www.sinsay.com/ua/uk/');
});

When('I search for {string}', async (searchTerm: string) => {
    await sinsayHomePage.searchForItem(searchTerm);
});

Then('I should see search results containing {string}', async (searchTerm: string) => {
    const searchResultsTitles = await sinsayHomePage.getSearchResultsTitles();
    expect(searchResultsTitles.length).toBeGreaterThan(0);
    expect(searchResultsTitles.some((title) => title.toLowerCase().includes(searchTerm.toLowerCase()))).toBe(true);
});

When('I navigate to the first product details page', async () => {
    await sinsayHomePage.navigateToFirstProductDetails();
});

Then('I should see a product details page with a title', async () => {
    const productDetailsTitle = await sinsayHomePage.getProductDetailsTitle();
    expect(productDetailsTitle).not.toBeNull();
    expect(productDetailsTitle).not.toBe('');
});

Given('I have navigated to the Sinsay home page and accepted cookies', async () => {
    // This step is covered by the Before hook
});

Then('the home page should open correctly', async () => {
    await expect(page).toHaveURL('https://www.sinsay.com/ua/uk/');
});
