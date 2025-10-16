const { test } = require("../support");
const { faker } = require("@faker-js/faker");
const { Messages } = require("../../lib/utils/messages");

test.describe("Login", { tag: "@login" }, () => {
  test("Deve logar como usuário válido", async ({ page }) => {
    await page.login.visit();
    await page.login.submitForm("standard_user", "secret_sauce");
    await page.products.isLogged();
  });

  test("Não Deve logar como usuário inválido", async ({ page }) => {
    const username = faker.internet.username();

    await page.login.visit();
    await page.login.submitForm(username, "secret_sauce");
    await page.errorMessage.errorHaveText(
      Messages.LOGIN.required_user_and_password
    );
  });

  test("Não Deve logar como senha incorreta", async ({ page }) => {
    const password = faker.internet.password();

    await page.login.visit();
    await page.login.submitForm("standard_user", password);
    await page.errorMessage.errorHaveText(
      Messages.LOGIN.required_user_and_password
    );
  });

  test("Não Deve logar quando o email não é preenchido", async ({ page }) => {
    await page.login.visit();
    await page.login.submitForm("", "secret_sauce");
    await page.errorMessage.errorHaveText(Messages.LOGIN.required_userName);
  });

  test("Não Deve logar quando  nenhum campo é preenchido", async ({ page }) => {
    await page.login.visit();
    await page.login.submitForm("", "");
    await page.errorMessage.errorHaveText(Messages.LOGIN.required_userName);
  });

  test("Não Deve logar quando a senha não é preenchida", async ({ page }) => {
    await page.login.visit();
    await page.login.submitForm("standard_user", "");
    await page.errorMessage.errorHaveText(Messages.LOGIN.required_password);
  });
});
