const { test: base, expect } = require("@playwright/test");

import { ProductsPage } from "../pages/ProductsPage";
import { LoginPage } from "../pages/LoginPage";
import { MessageError } from "../pages/components/Error";

const test = base.extend({
  page: async ({ page }, use) => {
    const context = page;
    context["products"] = new ProductsPage(page);
    context["login"] = new LoginPage(page);
    context["errorMessage"] = new MessageError(page);

    await use(context)
  }
})

export { test, expect };