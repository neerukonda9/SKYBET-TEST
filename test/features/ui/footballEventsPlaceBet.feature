Feature: As a user
  I wish to be able to see a market for ‘Both Teams To Score’
  So that I can place a bet on this market (display property is true)


  Scenario:I wish to be able to see a market for ‘Both Teams To Score’ and full time results win and draw

    Given I am on homepage
    When I select football event class
    And I select first event
    And I select Both Teams To Score
    Then I see in the "Both Teams To Score" market name Yes
    And I see a price
    And I see full time results Win and Draw



