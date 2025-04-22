import { test, expect } from '@playwright/test';
import { TransactionPage } from '../src/pages/docker.page';

test.use({
    viewport: { width: 1088, height: 729 },
    actionTimeout: 5000,
    navigationTimeout: 10000
});

test.describe('Transaction Form Functionality', () => {
    let transactionPage: TransactionPage;

    test.beforeEach(async ({ page }): Promise<void> => {
        transactionPage = new TransactionPage(page);
        await transactionPage.navigate();
    });

    test('Test 1: Verify successful form submission', async (): Promise<void> => {
        const testDescription = '45';
        const testAmount = '45';

        await transactionPage.performTransactionWithOffsetClicks(testDescription, testAmount);

        await expect(transactionPage.successMessage).toBeVisible({ timeout: 10000 });
    });

    test('Test 2: Verify input fields reflect entered values before submit', async (): Promise<void> => {
        const testDescription = 'Test Data Entry';
        const testAmount = '123.45';

        await transactionPage.enterDetailsWithOffsetClick(testDescription, testAmount);

        await expect(transactionPage.descriptionInput).toHaveValue(testDescription);
        await expect(transactionPage.amountInput).toHaveValue(testAmount);
        expect(await transactionPage.getDescriptionValue()).toBe(testDescription);
        expect(await transactionPage.getAmountValue()).toBe(testAmount);
    });

    test('Test 3: Ensure submit button is clickable and initiates action', async (): Promise<void> => {
        const testDescription = 'Submit Test';
        const testAmount = '10';

        await transactionPage.enterDetailsWithOffsetClick(testDescription, testAmount);

        await expect(transactionPage.submitButton).toBeVisible();
        await expect(transactionPage.submitButton).toBeEnabled();

        await transactionPage.submitWithOffsetClick();
        await expect(transactionPage.successMessage).toBeVisible({ timeout: 10000 });
    });
});
