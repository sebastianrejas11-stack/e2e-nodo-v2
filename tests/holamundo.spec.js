import test from "@playwright/test";

test("Validacion del loguin con datos correctos", async ({ page }) => {
   await page.goto("https://crm-matosso.leonardojose.dev/login");
   
   await page.locator('#email').fill('nodo@nodo.com');
});