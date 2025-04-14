import { test, expect } from '@playwright/test';
import OLXHomePage from '../src/pages/olx.page';

test.describe('OLX.ua Tests', () => {
    let olxHomePage: OLXHomePage;

    test.beforeEach(async ({ page }) => {
        olxHomePage = new OLXHomePage(page);
        await olxHomePage.open();
    });

    test('Navigate to a category', async () => {
        const categoryName = 'Електроніка';
        await olxHomePage.header.navigateToCategory(categoryName);
        expect(olxHomePage.page.url()).toBe('https://www.olx.ua/uk/');
    });

    test('Check footer links', async () => {
        await olxHomePage.footer.navigateToHelp();
        expect(olxHomePage.page.url()).toContain('/myaccount/answers');

        await olxHomePage.page.goBack();
        const socialLinks = await olxHomePage.footer.getAllSocialMediaLinks();
        expect(socialLinks.length).toBeGreaterThan(0);
    });

    test('Check search bar functionality', async ({ page }) => {
        const searchTerm = 'велосипед';
        await olxHomePage.header.searchForItem(searchTerm);
        expect(page.url()).toContain(`/list/q=${encodeURIComponent(searchTerm)}`);
    });
});
