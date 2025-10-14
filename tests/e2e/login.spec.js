import { test, expect } from "@playwright/test";
const { LoginPage } = require("../pages/LoginPage");
const { ProductsPage } = require("../pages/ProductsPage");

let loginPage;
let productsPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  productsPage = new ProductsPage(page);
});

test.describe("Login", () => {
  test("Deve logar como usuário válido", async ({ page }) => {
    
    await loginPage.visit();
    // Preencher usuário e senha
    await loginPage.submitForm("standard_user", "secret_sauce");
    // Verificar se o login foi bem-sucedido
    await productsPage.isLogged();
  });

  test("Não Deve logar como e-mail inválido", async ({ page }) => {
    await loginPage.visit();
    await loginPage.submitForm("standard_not", "secret_sauce");

    await loginPage.alertHaveText(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  test("Não Deve logar como senha incorreta", async ({ page }) => {
    await loginPage.visit();
    await loginPage.submitForm("standard_user", "secret_saucenot");

    await loginPage.alertHaveText(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  test("Não Deve logar quando o email não é preenchido", async ({ page }) => {
    await loginPage.visit();
    await loginPage.submitForm("", "abc123");
    await loginPage.alertHaveText("Epic sadface: Username is required");
  });

  test("Não Deve logar quando  nenhum campo é preenchido", async ({ page }) => {
    await loginPage.visit();
    await loginPage.submitForm("", "");
    await loginPage.alertHaveText("Epic sadface: Username is required");
  });

  test("Não Deve logar quando a senha não é preenchida", async ({ page }) => {
    await loginPage.visit();
    await loginPage.submitForm("standard_user", "");
    await loginPage.alertHaveText("Epic sadface: Password is required");
  });
});
