import {expect } from "@playwright/test";

export class MessageError {

   constructor(page) {
    this.page = page;
  }

    async errorHaveText(text){
        const alert = this.page.locator('[data-test="error"]')
        await expect(alert).toHaveText(text)
    }

}