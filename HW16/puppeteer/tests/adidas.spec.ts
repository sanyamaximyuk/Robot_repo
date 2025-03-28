import { expect } from 'chai';
import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';

export async function sleep(time: number): Promise<void> {
    return new Promise(function(resolve) {
        setTimeout(resolve, time);
    });
}

describe('Puppeteer Adidas tests', function () {
    this.timeout(20000);

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    before(async () => {
        browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1200, height: 800 } });
    });

    beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    after(async () => {
        await browser.close();
    });

    it('all football equipment', async () => {
        await page.goto('https://adidas.ua/', { waitUntil: 'domcontentloaded' });
        const inputSelector = '::-p-xpath(//input[@name="search-input"])';
        await page.waitForSelector(inputSelector);
        await page.type(inputSelector, 'football');
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
            (
                page.locator(
                    '::-p-xpath(//div[2]/a/span)'
                )
            ).click()
        ]);
    });

    it('add equip to favor and verify added item in favorites list', async () => {
        await page.goto('https://adidas.ua/', { waitUntil: 'domcontentloaded' });
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
            (
                page.locator(
                    '::-p-xpath(//div[2]/ul/li[5]/a)'
                )
            ).click()
        ]);
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
            (
                page.locator(
                    '::-p-xpath(//div[1]/section[2]/div/div[2]/div/div[1]/div[2]/div/a/div)'
                )
            ).click()
        ]);
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
            (
                page.locator(
                    '::-p-xpath(//div/div[1]/main/div/div[3]/div/section/div/div[1])'
                )
            ).click()
        ]);
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
            (
                page.locator(
                    '::-p-xpath(//div[3]/div/div[3]/div/div[2]/button)'
                )
            ).click()
        ]);
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
            (
                page.locator(
                    '::-p-xpath(//*[@id="__layout"]/div/header/div/div[2]/div/div[3]/div[2]/div[3]/div/div[4]/a)'
                )
            ).click()
        ]);

        const favoritesListText = await page.$eval('//*[@id="__layout"]/div/div[1]/main/section', el => el.textContent);
        expect(favoritesListText).to.include('League Fold-Over');
    });
});
