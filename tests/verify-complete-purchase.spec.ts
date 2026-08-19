import {test} from '../fixtures/fixture';
import {expect} from '@playwright/test';
import {users} from '../test-data/users';
import {customer} from '../test-data/customer';

test.describe('Complete Purchase Flow', () => {
  test('verify user can add a product to the cart and complete the purchase', async ({
    page,
    loginPage,
    productPage,
    cartPage,
    checkoutPage,
  }) => {
    const itemName = 'Sauce Labs Backpack';

    await page.goto('/');

    await loginPage.login(users.username, users.password);

    await productPage.expectPageLoaded();

    await productPage.addItemToCart(itemName);
    await expect(productPage.cartBadge).toHaveText('1');

    await productPage.openCart();
    await cartPage.expectPageLoaded();
    await cartPage.expectItemIsListed(itemName);

    await cartPage.checkout();
    await checkoutPage.expectPageLoaded();
    await checkoutPage.fillCheckoutDetails(customer.firstName, customer.lastName, customer.postalCode);

    await checkoutPage.expectOverviewLoaded();
    await checkoutPage.expectItemInSummary(itemName);
    await checkoutPage.finishPurchase();

    await checkoutPage.expectSuccessMessage();
  });
});