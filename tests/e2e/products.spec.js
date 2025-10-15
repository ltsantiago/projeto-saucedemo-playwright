const { test, expect } = require("../support");

test.describe(" Navegar em Produtos E Realizar Filtros", () => {
  test.beforeEach(async ({ page }) => {
    await page.login.doLogin("standard_user", "secret_sauce");
    await page.products.isLogged();
  });
  test.describe("Filtros", () => {
    test("Deve validar os produtos com filtro opção: A a Z", async ({
      page,
    }) => {
      await page.locator('[data-test="product-sort-container"]').click();
      const dropdown = page.locator('[data-test="product-sort-container"]');
      dropdown.selectOption({ value: "az" });
      const productSucess = page.getByText("Sauce Labs Bike Light");
      await expect(productSucess).toBeVisible();
    });
  });
  test.describe("Navegação", () => {
    test('Deve encontrar o produto: "Sauce Labs Backpack na lista"', async ({
      page,
    }) => {
      const product = page.getByText("Sauce Labs Backpack");
      await expect(product).toBeVisible();
    });

    test('Não deve encontrar o produto inexistente na lista', async ({
      page,
    }) => {
      const failProduct = page.getByText("Playstation 5");
      await expect(failProduct).toHaveCount(0);
    });

    test('Deve retornar a lista de produtos contendo nome e preço', async ({
      page,
    }) => {
      const Products = await page.$$('.inventory_item')
      for( const Product of Products){
        await expect(page.locator('.inventory_item_name')).toBeVisible()
        await expect(page.locator('.inventory_item_price')).toBeVisible()
      }
    });

    test('Deve retornar detalhes de um produto após clicado pelo usuário', async ({
      page,
    }) => {
      const detailsProduct = page.click(".inventory_item a");
      await expect(page.locator('.inventory_details_name')).toBeVisible();
    });
  });
});
