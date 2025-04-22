import { Page, Locator } from "@playwright/test";
import { HomePage } from "./home_page.ts";

export class RegisterPage {
  private readonly page: Page;
  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly email: Locator;
  private readonly telephone: Locator;
  private readonly password: Locator;
  private readonly passwordConfirm: Locator;
  private readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator("#input-firstname");
    this.lastName = page.locator("#input-lastname");
    this.email = page.locator("#input-email");
    this.telephone = page.locator("#input-telephone");
    this.password = page.locator("#input-password");
    this.passwordConfirm = page.locator("#input-confirm");
    this.submitButton = page.locator('input[type="submit"]');
  }

  async typeFirstName(firstName: string): Promise<RegisterPage> {
    await this.firstName.fill(firstName);
    return this;
  }

  async typeLastName(lastName: string): Promise<RegisterPage> {
    await this.lastName.fill(lastName);
    return this;
  }

  async typeEmail(email: string): Promise<RegisterPage> {
    await this.email.fill(email);
    return this;
  }

  async typeTelephone(telephone: string): Promise<RegisterPage> {
    await this.telephone.fill(telephone);
    return this;
  }

  async typePassword(password: string): Promise<RegisterPage> {
    await this.password.fill(password);
    return this;
  }

  async typePasswordConfirm(passwordConfirm: string): Promise<RegisterPage> {
    await this.passwordConfirm.fill(passwordConfirm);
    return this;
  }

  async submitForm(): Promise<HomePage> {
    await this.submitButton.click();
    return new HomePage(this.page);
  }

  async fillRegistrationForm(
    firstName: string,
    lastName: string,
    email: string,
    telephone: number,
    password: string,
    passwordConfirm: string
  ): Promise<HomePage> {
    await this.typeFirstName(firstName);
    await this.typeLastName(lastName);
    await this.typeEmail(email);
    await this.typeTelephone(telephone.toString());
    await this.typePassword(password);
    await this.typePasswordConfirm(passwordConfirm);
    return new HomePage(this.page);
  }
}
