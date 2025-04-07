import { Page } from '@playwright/test';
import { olxHomePageLocators } from '../elements/olx.elements';

class OLXHeader {
    public constructor(public page: Page) {}

    public async searchForItem(query: string): Promise<void> {
        await this.page.locator(olxHomePageLocators.header.searchBarInput).fill(query);
        await this.page.locator(olxHomePageLocators.header.searchButton).click();
    }

    public async navigateToCategory(categoryText: string): Promise<void> {
        await this.page.locator(olxHomePageLocators.header.categoryMenu, { hasText: categoryText }).click();
    }

    public async openLocationSelector(): Promise<void> {
        await this.page.locator(olxHomePageLocators.header.locationSelector).click();
    }

    public async openLogin(): Promise<void> {
        await this.page.locator(olxHomePageLocators.header.loginButton).click();
    }
}

class OLXFooter {
    public constructor(public page: Page) {}

    public async navigateToHelp(): Promise<void> {
        await this.page.locator(olxHomePageLocators.footer.helpLink).click();
    }

    public async getAllSocialMediaLinks(): Promise<string[]> {
        const links = await this.page.locator(olxHomePageLocators.footer.socialMediaLink).allInnerTexts();
        return links;
    }

    public async changeLanguage(language: string): Promise<void> {
        await this.page.locator(olxHomePageLocators.footer.languageSelector).click();
        await this.page.locator(olxHomePageLocators.footer.languageSelector, { hasText: language }).click();
    }
}

class OLXHomePage {
    public constructor(public page: Page) {
        this.header = new OLXHeader(page);
        this.footer = new OLXFooter(page);
    }

    public header: OLXHeader;
    public footer: OLXFooter;

    public async open(): Promise<void> {
        await this.page.goto('https://www.olx.ua/uk/');
    }
}

export default OLXHomePage;
