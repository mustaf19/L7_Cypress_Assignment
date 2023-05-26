Feature: Test Cypressio site
  
  Scenario: Validate Menu items and click on docs link
    Given User is on main Cypressio site homepage
    Then validate the menu items
    Then Hover over docs
    Then click on provided text

  Scenario: Search for the given text on E2E test page
    Given User is on E2E main page
    Then validate url contains the given text
    Then verify page title
    Then Search for the provided text


  Scenario: Validation of Viewport docs
    Given Viewport home page
    Then validate header contains this text
    Then validate the page contains a particular text