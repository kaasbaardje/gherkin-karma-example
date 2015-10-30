Feature: Login
    In order to access the application
    As a registered user
    I need to be able to log in

    # @Pending
    Scenario: BLA Successful login
        Given BLA I am a registered user "Max"
        When BLA I enter my credentials and submit the login form
        Then BLA I should see a welcome page

    # @Pending
    Scenario: BLA Successful login 2
        Given BLA I am a registered user 2
        When BLA I enter my credentials and submit the login form 2
        Then BLA I should see a welcome page 2
