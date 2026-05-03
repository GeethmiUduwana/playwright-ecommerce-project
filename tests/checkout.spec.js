const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const data = require('../utils/testData');

test('Checkout flow', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login(data.validUser.username, data.validUser.password);

  await inventory.addItemToCart();
  await inventory.goToCart();

  await page.click('#checkout');
  await checkout.checkoutInfo();
  await page.click('#continue');
  await checkout.finishCheckout();

  await expect(page).toHaveURL(/checkout-complete/);
});