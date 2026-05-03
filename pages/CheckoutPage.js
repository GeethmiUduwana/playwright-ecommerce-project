class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = '#checkout';
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';
    this.finishBtn = '#finish';
  }

  async checkoutInfo() {
    await this.page.fill(this.firstName, 'Test');
    await this.page.fill(this.lastName, 'User');
    await this.page.fill(this.postalCode, '12345');
  }

  async finishCheckout() {
    await this.page.click(this.finishBtn);
  }
}

module.exports = { CheckoutPage };