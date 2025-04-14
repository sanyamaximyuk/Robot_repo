Feature: Sinsay Website Tests

  Background:
    Given I have navigated to the Sinsay home page and accepted cookies

  Scenario: Check if the home page opens correctly
    Then the home page should open correctly

  Scenario: Search for a product and verify results
    When I search for "Футболка"
    Then I should see search results containing "футболка"

  Scenario: Navigate to a product details page
    When I search for "Джинси"
    And I navigate to the first product details page
    Then I should see a product details page with a title