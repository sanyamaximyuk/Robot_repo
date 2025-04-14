import { Page } from '@playwright/test';

export class SinsayHomePage {
    public constructor(public page: Page) {}

    public async gotoHomePage(): Promise<void> {
        await this.page.goto('https://www.sinsay.com/ua/uk/');
    }

    public async acceptCookies(): Promise<void> {
        try {
            const acceptCookiesButton = this.page.locator('#cookiebotDialogOkButton');
            await acceptCookiesButton.click();
            await this.page.waitForSelector('cookiebotDialogOkButtonFull', { state: 'detached' });
        } catch (error) {
            console.warn('Cookies acceptance button not found or failed to click:', error);
        }
    }

    public async searchForItem(searchTerm: string): Promise<void> {
        const searchInput = this.page.locator('#algoliaButton');
        await searchInput.click();
        const searchInput2 = this.page.locator('//*[@id="algolia-content-overlay"]/div/div/div[1]/div/div/div/div[2]/input');
        await searchInput2.click();
        await searchInput2.fill(searchTerm);
        await searchInput2.press('Enter');
    }

    public async getSearchResultsTitles(): Promise<string[]> {
        const searchResults = this.page.locator(
            '//*[@id="algolia-content-overlay"]/div/div/div[2]/div[2]/div/div[1]/div/div[2]/div[1]/a/h2'
        );
        await searchResults.waitFor({ state: 'attached' });
        const titles = await searchResults.allTextContents();
        return titles;
    }

    public async navigateToFirstProductDetails(): Promise<void> {
        const firstProduct = this.page
            .locator('//*[@id="algolia-content-overlay"]/div/div/div[2]/div[2]/div/div[1]/div/div[2]/div[1]/a/h2')
            .first();
        await firstProduct.click();
    }

    public async getProductDetailsTitle(): Promise<string | null> {
        try {
            const productTitle = await this.page
                .locator('//*[@id="productContainer"]/div[1]/div/div[3]/section/div[1]/div[1]/h1')
                .textContent();
            return productTitle;
        } catch (error) {
            console.error('Could not find product details title:', error);
            return null;
        }
    }
}
