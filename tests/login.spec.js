const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const data = require('../utils/testData');

test('Valid Login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login(data.validUser.username, data.validUser.password);
  await expect(page).toHaveURL(/inventory/);
});