const { Given, When, Then } = require('@wdio/cucumber-framework');

When("I open {string} tab", async (tab) => {
    try {
        await $(`//span[text()="${tab}"]`).click();
    } catch (error) {
        browser.refresh();
        await $(`//span[text()="${tab}"]`).click();
    }
    const pageTitle = await $(`//h1/span[text()="${tab}"]`)
    await expect(pageTitle).toBeDisplayed();
});

Then("I lick on the logo to move back to the main page", async () => {
    const logo = await $(`//div[@class='header2021-logo']`);
    await expect(logo).toBeDisplayed();
    await logo.click();
    await browser.url('https://www.newegg.com/')
    await expect(browser).toHaveUrl('https://www.newegg.com/');
});