import { ChainablePromiseElement } from 'webdriverio';
import { $, browser } from '@wdio/globals';

export class AdidasHomePage {
    public get searchInput(): ChainablePromiseElement {
        return $('//input[@name="search-input"]');
    }
    public get searchSuggestionLink(): ChainablePromiseElement {
        return $('//div[2]/a/span');
    }
    public get categoryLink(): ChainablePromiseElement {
        return $('//div[2]/ul/li[5]/a');
    }
    public get productListingLink(): ChainablePromiseElement {
        return $('//div[1]/section[2]/div/div[2]/div/div[1]/div[2]/div/a/div');
    }
    public get productDetailsLink(): ChainablePromiseElement {
        return $('//div/div[1]/main/div/div[3]/div/section/div/div[1]');
    }
    public get closeButtonLink(): ChainablePromiseElement {
        return $('//div[3]/div/div[3]/div/div[2]/button');
    }
    public get favoritesLink(): ChainablePromiseElement {
        return $('//*[@id="__layout"]/div/header/div/div[2]/div/div[3]/div[2]/div[3]/div/div[4]/a');
    }
    public get favoritesList(): ChainablePromiseElement {
        return $('//*[@id="__layout"]/div/div[1]/main/section');
    }

    public async open(): Promise<void> {
        await browser.url('https://adidas.ua/');
    }

    public async searchFor(searchTerm: string): Promise<void> {
        await this.searchInput.waitForDisplayed();
        await this.searchInput.setValue(searchTerm);
        await this.searchSuggestionLink.click();
    }

    public async navigateToCategory(): Promise<void> {
        await this.categoryLink.click();
    }

    public async navigateToProductListing(): Promise<void> {
        await this.productListingLink.click();
    }

    public async navigateToProductDetails(): Promise<void> {
        await this.productDetailsLink.click();
    }

    public async closePopup(): Promise<void> {
        await this.closeButtonLink.click();
    }

    public async navigateToFavorites(): Promise<void> {
        await this.favoritesLink.click();
    }

    public async getFavoritesListText(): Promise<string> {
        return await this.favoritesList.getText();
    }
}
