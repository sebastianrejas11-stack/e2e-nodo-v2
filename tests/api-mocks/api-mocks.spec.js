import { test, expect } from "@playwright/test";

test.describe("Validación de comportamiento del backend", () => {

    test("Lista de productos vacia", async ({ page }) => {

        await page.route('**/products', async (route) => {

            await route.fulfill({
                body: JSON.stringify([])
            });

        });

        // Visitar el sitio web
        await page.goto('https://ecommerce-js-test.vercel.app/');

        // Verificar que no hay productos disponibles
        await expect(
            page.getByText('Ningún producto disponible.', { exact: true })
        ).toBeVisible();

    });

});