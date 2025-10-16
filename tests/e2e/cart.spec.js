const { test, expect } = require("../support");

test.describe("Carrinho", { tag: "@cart" }, () => {
  test.beforeEach(async ({ page }) => {
    await page.login.doLogin("standard_user", "secret_sauce");
    await page.products.isLogged();
  });

  test("Deve adicionar um produto com sucesso no carrinho", async ({
    page,
  }) => {
    await page.cart.addProductCart();
    await page.cart.checkBadgeCart();
  });

  test("Deve remover produto no carrinho", async ({ page }) => {
    await page.cart.addProductCart();
    await page.cart.redirectShoppingCart();
    await page.cart.removeButtonProduct();
    await page.cart.expectRemoveProductCart()
  });

  test("Deve Validar fluxo ate página de checkout", async ({ page }) => {
    await page.cart.addProductCart();
    await page.cart.redirectShoppingCart();
    await page.cart.validateButtonCheckout()
    await page.cart.validateRedirectionCheckoutInformation()
  });
});
