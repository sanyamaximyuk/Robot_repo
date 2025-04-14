export const olxHomePageLocators = {
    header: {
        searchBarInput: '//*[@id="search"]',
        searchButton: 'button[data-testid="search-submit"]',
        categoryMenu: '//*[@id="searchmain-container"]/div[2]',
        locationSelector: '//*[@id="location-input"]',
        loginButton: 'a[class="css-12l1k7f"]'
    },
    footer: {
        helpLink: 'span[class="css-m7mm85"]',
        socialMediaLink: '//a[@data-testid="facebook"]',
        languageSelector: '//*[@id="hydrate-root"]/header/div/div/ul/li[2]/a'
    }
};
