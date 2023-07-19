import { test, expect } from '@playwright/test';

const subscriptionUrl = 'https://www.collegekickstart.com/pricing/students-parents';

test('Go to Website and Check Alert for All Fields Filled Out in Form', async ({ page }) => {
  //Go To Website Page
  await page.goto(subscriptionUrl);

  //Click/Check on the "Sign Up" button
  await page.click('text=Sign Up');
 
  //Fill Out the Form With Blank Last Name
  await page.locator('#payplansRegisterAutoFname').fill('Mickee');
  await page.locator('#payplansRegisterAutoUsername').fill('MickeeYoung123');
  await page.locator('#payplansRegisterAutoEmail').fill('mickee@gmail.com');
  await page.locator('#payplansRegisterAutoPassword').fill('securePassword123');

  //Select from Drop Down Menu in Form
  await page.selectOption("#payplansRegisterAutoRole", {
    value: "S24"
  })

  //Fill Name of High School Text Box 
  await page.type('#payplansRegisterAutoCeeb', 'Copley High School (Copley, OH)');
 
  //Submit the form
  await page.click('#payplans-order-confirm');

  //To Click it Again to Reveal Error Message
  await page.click('#payplans-order-confirm');

  //Check for Validation Message
  await expect(page.getByText('This is required')).toBeVisible();
   
});


