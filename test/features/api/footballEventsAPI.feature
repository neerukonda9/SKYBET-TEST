Feature: As a user
  I want get /football/live rest API
  So that I can see football events returned and each competitor of the events ‘home’ and an ‘away’


  Scenario:I want get /football/live rest API  and see football events returned and each competitor of the events ‘home’ and an ‘away’
    Given I've get all Football events service
    When I get all Football events
    Then I see Football events returned
    And I see that there is a home and an away competitor for each of the events



