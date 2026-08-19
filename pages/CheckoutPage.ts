import {Page, Locator, expect} from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get firstNameInput(): Locator {
    return this.page.getByTestId('firstName');
  }

  get lastNameInput(): Locator {
    return this.page.getByTestId('lastName');
  }

  get postalCodeInput(): Locator {
    return this.page.getByTestId('postalCode');
  }

  get continueButton(): Locator {
    return this.page.getByTestId('continue');
  }

  get finishButton(): Locator {
    return this.page.getByTestId('finish');
  }

  get completeHeader(): Locator {
    return this.page.getByTestId('complete-header');
  }

  get backToProductsButton(): Locator {
    return this.page.getByTestId('back-to-products');
  }

  async expectPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/checkout-step-one\.html/);
    await expect(this.firstNameInput).toBeVisible();
  }

  async fillCheckoutDetails(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async expectOverviewLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/checkout-step-two\.html/);
    await expect(this.finishButton).toBeVisible();
  }

  async expectItemInSummary(itemName: string): Promise<void> {
    await expect(this.page.getByTestId('inventory-item-name').filter({hasText: itemName})).toBeVisible();
  }

  async finishPurchase(): Promise<void> {
    await this.finishButton.click();
  }

  async expectSuccessMessage(): Promise<void> {
    await expect(this.page).toHaveURL(/checkout-complete\.html/);
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
}