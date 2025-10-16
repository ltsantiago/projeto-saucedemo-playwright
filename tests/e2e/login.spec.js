const { test } = require("../support");
const { faker } = require("@faker-js/faker");


test.describe("Login", { tag: "@login" }, () => {
  test("Deve logar como usuário válido", async ({ page }) => {
    await page.login.visit();
    await page.login.submitForm("standard_use", "secret_sauce");
    await page.products.isLogged();
  });

  test("Não Deve logar como usuário inválido", async ({ page }) => {
    const username = faker.internet.username();

    await page.login.visit();
    await page.login.submitForm(username, "secret_sauce");

    const message =
      "Epic sadface: Username and password do not match any user in this service";
    await page.errorMessage.errorHaveText(message);
  });

  test("Não Deve logar como senha incorreta", async ({ page }) => {
    const password = faker.internet.password();

    await page.login.visit();
    await page.login.submitForm("standard_user", password);

    const message =
      "Epic sadface: Username and password do not match any user in this service";
    await page.errorMessage.errorHaveText(message);
  });

  test("Não Deve logar quando o email não é preenchido", async ({ page }) => {
    await page.login.visit();
    await page.login.submitForm("", "secret_sauce");

    const messageErrorUsername = "Epic sadface: Username is required";
    await page.errorMessage.errorHaveText(messageErrorUsername);
  });

  test("Não Deve logar quando  nenhum campo é preenchido", async ({ page }) => {
    await page.login.visit();
    await page.login.submitForm("", "");

    const messageErrorUsername = "Epic sadface: Username is required";
    await page.errorMessage.errorHaveText(messageErrorUsername);
  });

  test("Não Deve logar quando a senha não é preenchida", async ({ page }) => {
    await page.login.visit();
    await page.login.submitForm("standard_user", "");

    const messageErrorPassword = "Epic sadface: Password is required";
    await page.errorMessage.errorHaveText(messageErrorPassword);
  });
});
