import { expect } from "@playwright/test";

export class ProductsPage {
  /**
   * @param {import('playwright').Page} page
   */

  constructor(page) {
    this.page = page;
  }

  async isLogged() {
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveURL(/.*inventory/);
  }

  async dropdownFilter(){
    
  }
}