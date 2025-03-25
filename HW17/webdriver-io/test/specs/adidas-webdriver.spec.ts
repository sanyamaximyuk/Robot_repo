import { expect } from 'expect-webdriverio';
import { AdidasPage } from 'src/pages/adidas.page';

describe('WebdriverIO Adidas tests', () => {
    beforeEach(async () => {
        AdidasPage;
    });

    it('all football equipment', async () => {
        const inputSelector = '//input[@name="search-input"]';
        const inputElement = $(inputSelector);
        await inputElement.waitForDisplayed();
        await inputElement.setValue('football');

        const searchSuggestionLink = '//div[2]/a/span';
        const searchSuggestionElement = $(searchSuggestionLink);
        searchSuggestionElement.click();
    });

    it('add equip to favor and verify added item in favorites list', async () => {
        const categoryLink = '//div[2]/ul/li[5]/a';
        const categoryElement = $(categoryLink);
        categoryElement.click();

        const productListingLink = '//div[1]/section[2]/div/div[2]/div/div[1]/div[2]/div/a/div';
        const productListingElement = $(productListingLink);
        productListingElement.click();

        const productDetailsLink = '//div/div[1]/main/div/div[3]/div/section/div/div[1]';
        const productDetailsElement = $(productDetailsLink);
        productDetailsElement.click();

        const closeButtonLink = '//div[3]/div/div[3]/div/div[2]/button';
        const closeButtonElement = $(closeButtonLink);
        closeButtonElement.click();

        const favoritesLink = '//*[@id="__layout"]/div/header/div/div[2]/div/div[3]/div[2]/div[3]/div/div[4]/a';
        const favoritesElement = $(favoritesLink);
        favoritesElement.click();

        const favoritesListSelector = '//*[@id="__layout"]/div/div[1]/main/section';
        const favoritesListElement = $(favoritesListSelector);
        const favoritesListText = await favoritesListElement.getText();

        expect(favoritesListText).toContain('League Fold-Over');
    });
});
