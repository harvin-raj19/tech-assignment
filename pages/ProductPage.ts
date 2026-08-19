import {Page, Locator, expect} from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get pageHeader(): Locator {
    return this.page.getByText('Products');
  }

  get inventoryContainer(): Locator {
    return this.page.getByTestId('inventory-container');
  }

  get inventoryItems(): Locator {
    return this.page.getByTestId('inventory-item');
  }

  get cartLink(): Locator {
    return this.page.getByTestId('shopping-cart-link');
  }

  get cartBadge(): Locator {
    return this.page.getByTestId('shopping-cart-badge');
  }

  async expectPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.pageHeader).toHaveText('Products');
    await expect(this.inventoryContainer).toBeVisible();
    await expect(this.inventoryItems.first()).toBeVisible();
  }

  async addItemToCart(itemName: string): Promise<void> {
    const itemId = `add-to-cart-${itemName.toLowerCase().replace(/ /g, '-')}`;
    await this.page.getByTestId(itemId).click();
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }
}