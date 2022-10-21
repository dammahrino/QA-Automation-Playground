import { test, expect } from '@playwright/test'

test('Simple basic test', async ({ page }) => {
  await page.goto('https://www.example.com')
  const pageTitle = page.locator('h1')
  await expect(pageTitle).toContainText('Example Domain')
})

test('Clicking on Elements', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/index.html')
  await page.click('#signin_button')
  await page.click('text=Sign in')

  const errorMessage = page.locator('.alert-error')
  await expect(errorMessage).toContainText('Login and/or password are wrong.')
})

test.skip('Selectors', async ({ page }) => {
  // Text Selectors
  await page.click('text=some text')

  // CSS Selectors (ID, Class, HTML Element)
  await page.click('buttons')
  await page.click('#id')
  await page.click('.class')

  // Only visible CSS Selector
  // Playwright will only click the button if it's visible
  await page.click('.submit-button:visible')

  // Selector combinations
  await page.click('#username .first')

  // XPath
  await page.click('//button')
})

test('Working with Inputs', async ({page}) => {
  await page.goto('http://zero.webappsecurity.com/index.html')
  await page.click('#signin_button')

  await page.type('#user_login', 'some username')
  await page.type('#user_password', 'some password')
})