import { Page, Locator } from "@playwright/test";
import { RegisterPage } from "./register_page.ts";

export class HomePage {
  private readonly page: Page;
  private readonly url = "https://tredgate.com/eshop/";
  private readonly myAccountButton: Locator;
  private readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccountButton = page.locator("#top-links a i.fa-user");
    this.registerButton = page.locator(
      '.dropdown-menu a[href="https://tredgate.com/eshop/index.php?route=account/register"]'
    );
  }

  async openHomePage(): Promise<HomePage> {
    await this.page.goto(this.url);
    return this;
  }

  async clickMyAccount(): Promise<HomePage> {
    await this.myAccountButton.click();
    return this;
  }

  async clickRegister(): Promise<RegisterPage> {
    await this.registerButton.click();
    return new RegisterPage(this.page);
  }
}
