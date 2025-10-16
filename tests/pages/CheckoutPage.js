import { expect } from "@playwright/test";
import { routes } from "../../lib/utils/routes";

const elements = {
  buttonContinueCheckout: '[data-test="continue"]',
  buttonCancelCheckoutOverview: '[data-test="cancel"]',
  buttonFinishCheckout: '[data-test="finish"]',
  inputPlaceholderFirstName: "First Name",
  inputPlaceholderLastName: "Last Name",
  inputPlaceholderZipCode: "Zip/Postal Code",
  orderCompleteMessage: ".complete-header",
};

const texts = {
  titleCheckoutOverview: "Checkout: Overview",
};

export class CheckoutPage {
  /**
   * @param {import('playwright').Page} page
   */

  constructor(page) {
    this.page = page;
  }

  //Actions

  async formCheckout(firstName, lastName, zipCode) {
    await this.page
      .getByPlaceholder(elements.inputPlaceholderFirstName)
      .fill(firstName);
    await this.page
      .getByPlaceholder(elements.inputPlaceholderLastName)
      .fill(lastName);
    await this.page
      .getByPlaceholder(elements.inputPlaceholderZipCode)
      .fill(zipCode);
    await this.page.locator(elements.buttonContinueCheckout).click();
  }

  async clickbuttonCancelCheckoutOverview() {
    await this.page.locator(elements.buttonCancelCheckoutOverview).click();
  }

  async clickFisnishCheckout() {
    await this.page.locator(elements.buttonFinishCheckout).click();
  }

  //Assertions

  async validateRedirectionCheckoutOverview() {
    await expect(this.page).toHaveURL(routes.checkoutOverview);
  }

  async expectValidationCheckoutOverview() {
    await expect(
      this.page.getByText(texts.titleCheckoutOverview)
    ).toBeVisible();
    await expect(this.page.locator(".cart_item")).toHaveCount(1);
    await expect(this.page.locator('[data-test="total-label"]')).toBeVisible();
  }

  async validateExpectRedirectionUrl() {
    await expect(this.page).toHaveURL(routes.login);
  }
  async expectvalidateCompleteOrder(message) {
    await expect(this.page.locator(elements.orderCompleteMessage)).toHaveText(message);
    await expect(this.page).toHaveURL(routes.checkoutComplete);
  }
}
