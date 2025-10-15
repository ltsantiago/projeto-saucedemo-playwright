const elements ={
    inputPlaceholderName: 'Username',
    inputPlaceholderPassword: 'Password',
    buttonLogin: '[data-test="login-button"]'
}
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
        await this.page.getByPlaceholder(elements.inputPlaceholderName).fill(username)
        await this.page.getByPlaceholder(elements.inputPlaceholderPassword).fill(password)
        await this.page.locator(elements.buttonLogin).click()
    }

    async doLogin(username,password){
        this.visit()
        this.submitForm(username,password)
    }

 
}  