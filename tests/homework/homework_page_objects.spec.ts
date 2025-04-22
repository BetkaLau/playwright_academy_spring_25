import { test } from "@playwright/test";
import { HomePage } from "src/pages/tredgate-eshop/home_page";
import { faker } from "@faker-js/faker";

test("Fill Register Form Test", async ({ page }) => {
  const homePage = new HomePage(page);
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.exampleEmail({ firstName, lastName });
  const telephone = faker.string.numeric(9);
  const password = faker.internet.password();

  await homePage
    .openHomePage()
    .then((homePage) => homePage.clickMyAccount())
    .then((homePage) => homePage.clickRegister())
    .then((registerPage) => registerPage.typeFirstName(firstName))
    .then((registerPage) => registerPage.typeLastName(lastName))
    .then((registerPage) => registerPage.typeEmail(email))
    .then((registerPage) => registerPage.typeTelephone(telephone))
    .then((registerPage) => registerPage.typePassword(password))
    .then((registerPage) => registerPage.typePasswordConfirm(password))
    .then((registerPage) => registerPage.submitForm());
});
