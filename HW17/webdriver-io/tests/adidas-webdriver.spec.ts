import { expect } from '@wdio/globals';
import { AdidasHomePage } from 'src/pages/adidas.page';

describe('WebdriverIO Adidas tests with Page Objects', () => {
    let adidasHomePage: AdidasHomePage;

    beforeEach(async () => {
        adidasHomePage = new AdidasHomePage();
        await adidasHomePage.open();
    });

    it('all football equipment', async () => {
        await adidasHomePage.searchFor('football');
    });

    it('add equip to favor and verify added item in favorites list', async () => {
        await adidasHomePage.navigateToCategory();
        await adidasHomePage.navigateToProductListing();
        await adidasHomePage.navigateToProductDetails();
        await adidasHomePage.closePopup();
        await adidasHomePage.navigateToFavorites();

        const favoritesListText = await adidasHomePage.getFavoritesListText();
        expect(favoritesListText).toContain('League Fold-Over');
    });
});
