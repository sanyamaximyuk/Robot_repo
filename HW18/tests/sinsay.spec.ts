import { test, expect } from '@playwright/test';
import { SinsayHomePage } from '../src/pages/sinsay.page';

test.describe('Sinsay Tests', () => {
    let sinsayHomePage: SinsayHomePage;

    test.beforeEach(async ({ page }) => {
        sinsayHomePage = new SinsayHomePage(page);
        await sinsayHomePage.gotoHomePage();
        await sinsayHomePage.acceptCookies();
    });

    test('Check if the home page opens correctly', async () => {
        await sinsayHomePage.gotoHomePage();
        await expect(sinsayHomePage.page).toHaveURL('https://www.sinsay.com/ua/uk/');
    });

    test('Search for a product and verify results', async () => {
        const searchTerm = 'Футболка';
        await sinsayHomePage.searchForItem(searchTerm);
        const searchResultsTitles = await sinsayHomePage.getSearchResultsTitles();
        expect(searchResultsTitles.length).toBeGreaterThan(0);
        expect(searchResultsTitles.some((title) => title.toLowerCase().includes(searchTerm.toLowerCase()))).toBe(true);
    });

    test('Navigate to a product details page', async () => {
        await sinsayHomePage.searchForItem('Джинси');
        await sinsayHomePage.navigateToFirstProductDetails();
        const productDetailsTitle = await sinsayHomePage.getProductDetailsTitle();
        expect(productDetailsTitle).not.toBeNull();
        expect(productDetailsTitle).not.toBe('');
    });

});
