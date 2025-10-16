const { test, expect } = require("../support");
const { faker } = require("@faker-js/faker");
const { Messages } = require("../../lib/utils/messages");

test.describe("Checkout Information", { tag: "@checkout" }, () => {
  test.beforeEach(async ({ page }) => {
    //Realizando Login
    await page.login.doLogin("standard_user", "secret_sauce");
    await page.products.isLogged();

    // Realizando fluxo
    await page.cart.addProductCart();
    await page.cart.redirectShoppingCart();
    await page.cart.validateButtonCheckout();
    await page.cart.validateRedirectionCheckoutInformation();
  });

  test("Deve redirecionar para tela de **Checkout: Overview** após dados válidos preenchidos", async ({
    page,
  }) => {
    const username = faker.internet.username();
    const lastname = faker.person.lastName();
    const zipcode = faker.location.zipCode();
    await page.checkout.formCheckout(username, lastname, zipcode);
    await page.checkout.validateRedirectionCheckoutOverview();
  });

  test("Não deve finalizar compra sem os dados preenchidos", async ({
    page,
  }) => {
    await page.checkout.formCheckout("", "", "");
    await page.errorMessage.errorHaveText(
      Messages.CHECKOUT.required_first_name
    );
  });

  test("Não deve finalizar compra sem o campo: **Last Name** estar preenchido", async ({
    page,
  }) => {
    const username = faker.internet.username();
    await page.checkout.formCheckout(username, "", "");
    await page.errorMessage.errorHaveText(Messages.CHECKOUT.required_last_name);
  });

  test("Não deve finalizar compra sem o campo: **Zip/Postal Code** estar preenchido", async ({
    page,
  }) => {
    const username = faker.internet.username();
    const lastname = faker.person.lastName();
    await page.checkout.formCheckout(username, lastname, "");
    await page.errorMessage.errorHaveText(
      Messages.CHECKOUT.required_postal_code
    );
  });
});

test.describe("Checkout Overview", { tag: "@checkout" }, () => {
  test.beforeEach(async ({ page }) => {
    //Realizando Login
    await page.login.doLogin("standard_user", "secret_sauce");
    await page.products.isLogged();

    // Realizando fluxo
    await page.cart.addProductCart();
    await page.cart.redirectShoppingCart();
    await page.cart.validateButtonCheckout();
    await page.cart.validateRedirectionCheckoutInformation();

    const username = faker.internet.username();
    const lastname = faker.person.lastName();
    const zipcode = faker.location.zipCode();
    await page.checkout.formCheckout(username, lastname, zipcode);
    await page.checkout.validateRedirectionCheckoutOverview();
  });

  // Tela: Checkout Overview
  test("Deve validar as informações do produto antes de finalizar o pagamento ", async ({
    page,
  }) => {
    await page.checkout.expectValidationCheckoutOverview();
  });

  test("Deve validar que o clique no botão: **Cancel** retorne a página do carrinho", async ({
    page,
  }) => {
    await page.checkout.clickbuttonCancelCheckoutOverview();
    await page.checkout.validateExpectRedirectionUrl();
  });
});

test.describe("Checkout complete", { tag: "@checkout" }, () => {
  test.beforeEach(async ({ page }) => {
    //Realizando Login
    await page.login.doLogin("standard_user", "secret_sauce");
    await page.products.isLogged();

    // Realizando fluxo
    await page.cart.addProductCart();
    await page.cart.redirectShoppingCart();
    await page.cart.validateButtonCheckout();
    await page.cart.validateRedirectionCheckoutInformation();

    const username = faker.internet.username();
    const lastname = faker.person.lastName();
    const zipcode = faker.location.zipCode();
    await page.checkout.formCheckout(username, lastname, zipcode);
    await page.checkout.validateRedirectionCheckoutOverview();
  });

  // Tela: Checkout Complete
  test("Deve realizar a compra com sucesso", async ({ page }) => {
    await page.checkout.clickFisnishCheckout();
    await page.checkout.expectvalidateCompleteOrder('Thank you for your order!');
  });
});
