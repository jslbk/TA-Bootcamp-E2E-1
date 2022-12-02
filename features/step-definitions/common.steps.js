const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the main page", async () => {
    browser.url("https://www.newegg.com/");
});