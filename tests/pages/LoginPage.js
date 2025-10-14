import {expect } from "@playwright/test";

export class LoginPage {

    /**
     * @param {import('playwright').Page} page
     */

    constructor(page) {
        this.page = page;
      }

    async visit(){
        await this.page.goto('/')
    }

    async submitForm(username, password){
        await this.page.getByPlaceholder('Username').fill(username)
        await this.page.getByPlaceholder('Password').fill(password)
        await this.page.locator('[data-test="login-button"]').click()
    }

    
    async alertHaveText(text){
        const alert = this.page.locator('[data-test="error"]')
        await expect(alert).toHaveText(text)
    }
}  