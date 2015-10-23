Feature: Login
  In order to access the application
  As a registered user
  I need to be able to log in
  Scenario: Successful login

    Given I am a registered user
    When I enter my credentials and submit the login form
    Then I should see a welcome page
