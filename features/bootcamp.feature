Feature: Bootcamp E2E

  Background: 
    Given I am on the main page

  @searchBar
  Scenario: Use midle-top search bar and check for the results
    When I search for a "<searchFor>" in the middle-top search bar
    Then Check that at least one item appears

    Examples: 
      | searchFor | 
      | Windows   |

  @logoButton
  Scenario: Click on logo from the left-top to move back to the main page
    When I open "<tab>" tab
    Then I lick on the logo to move back to the main page
    
    Examples: 
      | tab                |
      | Today's Best Deals |
