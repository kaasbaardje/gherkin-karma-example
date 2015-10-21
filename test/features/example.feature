Feature: Create a thought
  As a person with a thought, I would like
  to be able to receive a list of the ones I have created.
  Scenario: Author a thought

    given An authenticated user
    when a GET request on /thought is performed
    then a thought is returned
