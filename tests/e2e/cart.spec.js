const { test, expect } = require("../support");

test.describe("Carrinho", { tag: "@cart" }, () => {
  test.beforeEach(async ({ page }) => {
    await page.login.doLogin("standard_user", "secret_sauce");
    await page.products.isLogged();
  });

  test("Deve adicionar um produto com sucesso no carrinho", async ({
    page,
  }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    const badge = page.locator(".shopping_cart_badge");
    await expect(badge).toHaveText("1");
  });

  test("Deve remover produto no carrinho", async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator(".shopping_cart_link").click();
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await expect(page.locator(".cart_item")).toHaveCount(0);
    await expect(page.locator("#continue-shopping")).toHaveText(
      "Continue Shopping"
    );
  });

  test("Deve Validar fluxo ate página de checkout", async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator(".shopping_cart_link").click();
    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL(/checkout-step-one/);
  });
});
