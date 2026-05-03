class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addToCartBtn = '.inventory_item button';
    this.cartLink = '.shopping_cart_link';
  }

  async addItemToCart() {
    await this.page.click(this.addToCartBtn);
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }
}

module.exports = { InventoryPage };