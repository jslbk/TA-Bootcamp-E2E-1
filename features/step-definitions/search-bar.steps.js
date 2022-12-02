const { Given, When, Then } = require('@wdio/cucumber-framework');

When("I search for a {string} in the middle-top search bar", async (searchFor) => {
   try {
    await $(`//input[@type='search']`).setValue(searchFor);
    await $(`//button[@class='ico ico-search']`).click();
   } catch (error) {
     browser.refresh();
     await $(`//input[@type='search']`).setValue(searchFor);
     await $(`//button[@class='ico ico-search']`).click();
   }
});

Then("Check that at least one item appears", async () => {
    const elem = await $(`//div[@class='item-cell']`);
    await expect(elem).toBeDisplayed();
});