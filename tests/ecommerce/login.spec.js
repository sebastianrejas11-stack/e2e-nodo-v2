
import { test, expect } from "@playwright/test";

test.describe("Pruebas de Login", () => {

  test("Validación con datos correctos", async ({ page }) => {

    await page.goto("https://ecommerce-js-test.vercel.app/");

    const linkLogin = page.getByRole("link", { name: "Login" });
 
    await linkLogin.click();

    await expect(page.getByRole("heading", { name: "Welcome Back!"})).toBeVisible();

    await page.getByRole('textbox', { name: 'Email Address' }).fill("admin@example.com");

    await page.getByPlaceholder('Enter your password').fill("admin123");

    await page.getByRole('button', { name: 'Sign In' }).click();

    await expect(page.getByText('Logout', { exact: true })).toBeVisible();

  });

});
