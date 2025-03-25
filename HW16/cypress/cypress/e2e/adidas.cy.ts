describe('cypress tests', () => {
    beforeEach(() => {
        cy.visit('https://www.adidas.ua/');
    });
    it('should found all football equip', () => {
        cy.get('.search-input__input').type('football');
        cy.get('.recommendation > .button-link > .button-link__btn > .button-link__text').click();
    });

    it('add item to favor and verify that added equip is in favorites', () => {
        cy.get(':nth-child(5) > .header-menu__item__link').click();
        cy.get(':nth-child(1) > .section-container__inner-container > .common-container > .compilation-carousel > #undefined > .carousel__content > :nth-child(3) > .compilation > .common-title').click();
        cy.get('.l-0 > .product__content > .product__info > :nth-child(1) > .product__title').click();
        cy.get('[data-v-4fbab6b0=""][data-v-74893a00=""] > .product__actions > .button-favorite > .button-favorite__btn').click();
        cy.get('#__layout > div > header > div > div:nth-child(2) > div > div.header-main__actions-container > div.header-main__actions-container__bottom.common-row.header-main__actions-container__bottom > div.header-main__actions-container__bottom__search-and-icons > div > div.header-icon-container__favorite.button-icon > a').click();
        cy.get('#__layout > div > div.layout-default__main-container > main > section').should('contain', 'League Fold-Over');
    });
});
