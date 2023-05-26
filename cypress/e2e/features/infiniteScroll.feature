Feature: infiniteScroll
    Scenario: When a user scrolls down randomly then more elements are loaded
    Given A infinite scrollable site
    When I scroll down randomly
    Then More elements are loaded