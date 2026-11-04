import { test, expect } from '@playwright/test';

test.afterEach(async ({page}) => {
    console.log("Finalizó una prueba");
});


test.beforeEach(async ({page}) => {
    await page.goto('https://ecommerce-js-test.vercel.app');

    await page.getByRole('link', { name: 'Register' }).click();
});


test('Registro rechazado por correo inválido', async ({page}) => {



await page.getByRole('textbox', { name: 'Full Name' }).fill('Ana Prueba QA');

await page.getByRole('textbox', { name: 'Email Address' }).fill('ana.prueba.qa.03112026example.com');

await page.getByLabel('Password', { exact: true }).fill('QaPrueba2026!x');

await page.getByLabel('Confirm Password').fill('QaPrueba2026!x');

await page.getByRole('button', { name: 'Create Account' }).click();

await expect(page.getByRole('textbox', { name: 'Email Address' })).toBeFocused();

await page.pause();

//await expect(page.getByText('Logout', { exact: true })).toBeVisible();

})