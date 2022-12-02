# TA-Bootcamp-E2E

# Description:
File contains two tests of https://www.newegg.com/

## Test 1 @searchBar

- Opens the main page;
- Sets value "Windows" on the midle top search bar;
- Click "Search" icon;
   - Refreshes page and starts from the 2nd step;
- Expects that at least one element appers on the search;

## Test 2: @logoButton

- Opens the main page;
- Sets value "Windows" on the midle top search bar;
- Click "Search" icon;
   - Refreshes page and starts from the 2nd step;
- Open "Today's Best Deals" tab by clicking link from the top sub-menu bar;
- Checks that we are on the right page by h1 title;
- Click on the top-left logo and expects that it novigates back to main page
- Check that we are on the right place after the clicking on the logo


### Note:
Use command "yarn wdio" to execute tests through the terminal. Make sure that you have installed yarn and WebdriverIO to execute tests. 