const { test, expect } = require('@playwright/test');
import { Eyes, Target, MatchLevel } from '@applitools/eyes-playwright';

/* test('it should have a title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle('The Hundred - Your antidote to information overload.');
});
 */
test('this should test the current localhost page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const eyes = new Eyes();
  eyes.setMatchLevel(MatchLevel.Layout);
  await eyes.open(page, 'The Hundred', 'App');
  await eyes.check(Target.window().fully())
  await eyes.close();
});

/* test('it should navigate to an article then signup', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const eyes = new Eyes();

  eyes.setMatchLevel(MatchLevel.Layout);

  await eyes.open(page, 'The Hundred', 'Signup');
  await eyes.check('Home', Target.window().fully())

  await page.getByRole('heading', { name: 'Latest' }).locator('..').locator('ul li:first-child p a').click();

  await eyes.check('Article', Target.window().fully())

  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('test@test.com');
  await page.getByRole('button', { name: 'Sign Up' }).click();

  await eyes.check('Confirmation', Target.window().fully());
  await eyes.close();
}); */