@libraries=bottle2, common
Feature: Login
    In order to access the application
    As a registered user
    I need to be able to log in

    # @Pending
    Scenario: Successful login
        Given I am a registered user "Max"
        When I enter my credentials and submit the login form
        Then I should see a welcome page

    # @Pending
    Scenario: Successful login 2
        Given I am a registered user 2
        When I enter my credentials and submit the login form 2
        Then I should see a welcome page 2
