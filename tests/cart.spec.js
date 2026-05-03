const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const data = require('../utils/testData');

test('Add to cart', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login(data.validUser.username, data.validUser.password);

  await inventory.addItemToCart();
  await inventory.goToCart();

  await expect(page).toHaveURL(/cart/);
});