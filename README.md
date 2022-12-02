# TA-Bootcamp-E2E-1

## Description:
The file contains bootcamp.feature file with two scenarios to test https://www.newegg.com/ f-ty

Project should contain:

```
- common.steps.js
- logo-button.steps.js
- search-bar.steps.js
- .gitigone
- package-lock.json
- package.jsob
- README.md
- wdio.conf.js
```

## Before start:
Make sure that you have installed yarn and WebdriverIO to execute tests. More information at:
- https://yarnpkg.com/getting-started
- https://webdriver.io/docs/gettingstarted

## Test 1: @searchBar
- Opens the main page;
- Sets value "Windows" on the middle top search bar;
- Click the "Search" icon;
 - Refreshes page and starts from the 2nd step;
- Expects that at least one element appears on the search;

## Test 2: @logoButton
- Opens the main page;
- Sets value "Windows" on the middle top search bar;
- Click the "Search" icon;
- Refreshes page and starts from the 2nd step;
- Open the "Today's Best Deals" tab by clicking the link from the top sub-menu bar;
- Checks that we are on the right page by h1 title;
- Click on the top-left logo and expects it navigates back to the main page
- Check that we are in the right place after clicking on the logo

## Note: 
Use the command "yarn wdio" to execute tests through the terminal.
