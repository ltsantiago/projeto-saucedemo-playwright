import { expect } from "@playwright/test";
import { routes } from "../../lib/utils/routes";

const elements = {
  selectFilter: '[data-test="product-sort-container"]',
  itemPrice: '.inventory_item_price',
  itemDetails: '.inventory_details_name',
  itemPriceLink: '.inventory_item a'
};

const text = {};

export class ProductsPage {
  /**
   * @param {import('playwright').Page} page
   */

  constructor(page) {
    this.page = page;
  }

  async isLogged() {
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveURL(routes.login);
  }

  // ------- Locators-----

  getProduct(name) {
    return this.page.getByText(name);
  }

  productItem() {
    return this.page.locator(elements.itemPriceLink);
  }

  productDetailsTitle() {
    return this.page.locator(elements.itemDetails);
  }

  //----- Actions----

  async selectFilterItem(value) {
    const sortDropdown = this.page.locator(elements.selectFilter);
    await sortDropdown.selectOption(value);
  }

  async checkFirstPriceProduct(valuePrice) {
    const priceExpected = await this.page
      .locator(elements.itemPrice)
      .first()
      .textContent();
    expect(priceExpected.trim()).toBe(valuePrice);
  }

  async clickDetailsFirstProduct(){
    await this.page.locator(elements.itemPriceLink).first().click();
  }

  //-------Assertions---

  async expectProductVisible(name) {
    await expect(this.getProduct(name)).toBeVisible();
  }

  async expectProductNotFound(name) {
    await expect(this.getProduct(name)).toHaveCount(0);
  }

  async expectProductDetailsVisible() {
    await expect(this.productDetailsTitle()).toBeVisible();
    await expect(this.page).toHaveURL(routes.detailsProduct)
  }

  async expectProduct(productName) {
    const productExpected = this.page.getByText(productName);
    await expect(productExpected).toBeVisible();
  }
}
