import { Builder, By, WebDriver, WebElement, until } from 'selenium-webdriver';
import { expect } from 'chai';

describe('Selenium tests', () => {
    let driver: WebDriver;

    beforeEach(async function () {
        this.timeout(10000);
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.adidas.ua/');
    });

    afterEach(async function () {
        this.timeout(10000);
        if (driver) {
            await driver.quit();
        }
    });

    it('should found all football equip', async () => {
        const searchInput: WebElement = await driver.findElement(By.css('.search-input__input'));
        await searchInput.sendKeys('football');

        const recommendationButton: WebElement = await driver.findElement(
            By.css('.recommendation > .button-link > .button-link__btn > .button-link__text')
        );
        await recommendationButton.click();

        try {
            await driver.wait(until.elementLocated(By.css('.product-card')), 10000);
            const productCards = await driver.findElements(By.css('.product-card'));
            expect(productCards.length).to.be.greaterThan(0);
            for (const card of productCards) {
                const cardText = await card.getText();
                expect(cardText.toLowerCase()).to.contain('football');
            }
        } catch {
            expect.fail('Product card not found');
        }
    });

    it('add item to favor and verify that added equip is in favorites', async () => {
        const categoryLink: WebElement = await driver.findElement(By.css(':nth-child(5) > .header-menu__item__link'));
        await categoryLink.click();

        const productListingLink: WebElement = await driver.findElement(
            By.css('a[href*="/product/"]')
        );
        await productListingLink.click();

        const productDetailsLink: WebElement = await driver.findElement(
            By.css('.product__title')
        );
        await productDetailsLink.click();

        const addToFavoritesButton: WebElement = await driver.findElement(
            By.css('div[data-testid="favorite-button"]')
        );
        await addToFavoritesButton.click();

        const favoritesLink: WebElement = await driver.findElement(
            By.css('a[href*="favorites"]')
        );
        await favoritesLink.click();

        const favoritesSection: WebElement = await driver.findElement(
            By.css('#__layout > div > div.layout-default__main-container > main > section')
        );
        const favoritesSectionText = await favoritesSection.getText();
        const productTitleElement: WebElement = await driver.findElement(By.css('.product__title'));
        const productTitle: string = await productTitleElement.getText();
        expect(favoritesSectionText).to.contain(productTitle);
    });
});
