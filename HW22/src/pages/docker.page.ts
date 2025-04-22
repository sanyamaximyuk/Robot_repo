import { type Page, type Locator } from '@playwright/test';

export class TransactionPage {
    public readonly page: Page;
    public readonly descriptionInput: Locator;
    public readonly amountInput: Locator;
    public readonly submitButton: Locator;
    public readonly successMessage: Locator;
    public readonly pageUrl: string = 'http://localhost:3001/';

    public constructor(page: Page) {
        this.page = page;
        this.descriptionInput = page.locator('#description');
        this.amountInput = page.locator('#transactionamount');
        this.submitButton = page.locator('xpath=//*[@id="root"]/div/div[4]/form/button');
        this.successMessage = page.locator('text="Transaction successful"');
    }

    public async navigate(): Promise<void> {
        await this.page.goto(this.pageUrl);
    }

    public async enterDetailsWithOffsetClick(description: string, amount: string): Promise<void> {
        await this.descriptionInput.click({
            position: { x: 77, y: 32 }
        });
        await this.descriptionInput.fill(description);

        await this.amountInput.click({
            position: { x: 108, y: 24.8 }
        });
        await this.amountInput.fill(amount);
    }

    public async submitWithOffsetClick(): Promise<void> {
        await this.submitButton.click({
            position: { x: 124, y: 7.6 }
        });
    }

    public async performTransactionWithOffsetClicks(description: string, amount: string): Promise<void> {
        await this.enterDetailsWithOffsetClick(description, amount);
        await this.submitWithOffsetClick();
    }

    public async getDescriptionValue(): Promise<string> {
        return await this.descriptionInput.inputValue();
    }

    public async getAmountValue(): Promise<string> {
        return await this.amountInput.inputValue();
    }
}
