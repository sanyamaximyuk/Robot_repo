import { ChainablePromiseElement } from 'webdriverio';
import { $, browser } from '@wdio/globals';

export class AdidasPage {
    public get userLogo(): ChainablePromiseElement {
        return $('nav button img');
    }

    public goTo(): void {
        browser.url('https://adidas.ua/');
    }
}
