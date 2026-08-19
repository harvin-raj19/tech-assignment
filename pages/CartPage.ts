import {Page, Locator, expect} from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get cartList(): Locator {
    return this.page.getByTestId('cart-list');
  }

  get cartItems(): Locator {
    return this.page.getByTestId('inventory-item');
  }

  get checkoutButton(): Locator {
    return this.page.getByTestId('checkout');
  }

  async expectPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/cart\.html/);
    await expect(this.cartList).toBeVisible();
  }

  async expectItemIsListed(itemName: string): Promise<void> {
    const item = this.cartItems.filter({hasText: itemName});
    await expect(item).toHaveCount(1);
    await expect(item.getByTestId('inventory-item-name')).toHaveText(itemName);
  }

  async checkout(): Promise<void> {
    await this.checkoutButton.click();
  }
}