import { expect } from "@playwright/test";

const elements = {
  buttonAddProductBackpack: '[data-test="add-to-cart-sauce-labs-backpack"]',
  badgeCart: ".shopping_cart_badge",
  buttomRemoveBackpack: '[data-test="remove-sauce-labs-backpack"]',
  iconCartRedirectLink: ".shopping_cart_link",
  buttonContinueShoopingCart: '#continue-shopping',
  buttonCheckout: '[data-test="checkout"]'
};

const text = {
 textContinueShopping: 'Continue Shopping'
}

export class CartPage {
  /**
   * @param {import('playwright').Page} page
   */

  constructor(page) {
    this.page = page;
  }

  async addProductCart() {
    await this.page.locator(elements.buttonAddProductBackpack).click();
  }

  async removeButtonProduct() {
    await this.page.locator(elements.buttomRemoveBackpack).click();
  }

  async validateButtonCheckout(){
    await this.page.locator(elements.buttonCheckout).click();
  }

  async checkBadgeCart() {
    const badge = this.page.locator(elements.badgeCart);
    await expect(badge).toHaveText("1");
  }

  async redirectShoppingCart() {
    await this.page.locator(elements.iconCartRedirectLink).click();
  }

  async expectRemoveProductCart(){
    await expect(this.page.locator(".cart_item")).toHaveCount(0);
    await expect(this.page.locator(elements.buttonContinueShoopingCart)).toHaveText(text.textContinueShopping);
  }
}
