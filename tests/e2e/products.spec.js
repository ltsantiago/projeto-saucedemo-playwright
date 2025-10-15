const { test, expect } = require("../support");

test.describe(" Navegar em Produtos E Realizar Filtros", () => {
  test.beforeEach(async ({ page }) => {
    await page.login.doLogin("standard_user", "secret_sauce");
    await page.products.isLogged();
  });

  test.describe("Filtros", () => {
    test("Deve validar os produtos com filtro opção: A to Z", async ({
      page,
    }) => {
      await page.products.selectFilterItem({ label: "Name (A to Z)" });
      await page.products.expectProduct("Sauce Labs Onesie");
    });

    test("Deve validar os produtos com filtro opção: Z to A", async ({
      page,
    }) => {
      await page.products.selectFilterItem({ label: "Name (Z to A)" });
      await page.products.expectProduct("Sauce Labs Fleece Jacket");
    });

    test("Deve validar os produtos com filtro opção: Price (low to high)", async ({
      page,
    }) => {
      await page.products.selectFilterItem({ label: "Price (low to high)" });
      await page.products.checkFirstPriceProduct("$7.99");
    });

    test("Deve validar os produtos com filtro opção: Price (high to low)", async ({
      page,
    }) => {
      await page.products.selectFilterItem({ label: "Price (high to low)" });
      await page.products.checkFirstPriceProduct("$49.99");
    });
  });

  test.describe("Navegação", () => {
    test('Deve encontrar o produto: "Sauce Labs Backpack na lista"', async ({
      page,
    }) => {
      await page.products.expectProductVisible("Sauce Labs Backpack");
    });

    test("Não deve encontrar o produto inexistente na lista", async ({
      page,
    }) => {
      await page.products.expectProductNotFound("Playstation 5")
    });

    test("Deve retornar detalhes de um produto após clicado pelo usuário", async ({
      page,
    }) => {
      await page.products.clickDetailsFirstProduct()
      await page.products.expectProductDetailsVisible()
    });
  });
});
