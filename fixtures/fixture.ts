import {test as base} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {ProductPage} from '../pages/ProductPage';
import {CartPage} from '../pages/CartPage';
import {CheckoutPage} from '../pages/CheckoutPage';

export const test = base.extend<{
  loginPage: LoginPage;
  productPage: ProductPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
}>({
  loginPage: async ({page}, use) => {
    await use(new LoginPage(page));
  },

  productPage: async ({page}, use) => {
    await use(new ProductPage(page));
  },

  cartPage: async ({page}, use) => {
    await use(new CartPage(page));
  },

  checkoutPage: async ({page}, use) => {
    await use(new CheckoutPage(page));
  },
});