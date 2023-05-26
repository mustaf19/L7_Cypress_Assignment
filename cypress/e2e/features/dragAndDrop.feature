Feature: Drag and Drop
    Scenario: When a user drags and drops a box, it actually get dragged and dropped
    Given A drag and drop test site
    When A user drags a box and Drops over another
    Then It gets dragged and dropped