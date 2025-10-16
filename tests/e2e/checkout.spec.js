const { test, expect } = require("../support");

test.describe("Checkout", { tag: "@cart" }, () => {
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
});