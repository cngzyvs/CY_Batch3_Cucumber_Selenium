@regression
  @loginWithParameter @rerun
Feature: Log in as diffirent user

Background:
  Given The user is on the login page

  Scenario: Log in as Mike wit parameter.

    When The user user logs in using "mike@gmail.com" and "mike1234"
    Then The user should be able to login
    And The user name should be "mike"
  Scenario: Log in as Mike wit parameter.
    When The user user logs in using "john@gmail.com" and "John1234."
    Then The user should be able to login
    And The user name should be "John"
@smoke
  Scenario: Log in as Mike wit parameter.

    When The user user logs in using "eddiem@kraft.com" and "eddiem12"
    Then The user should be able to login
    And The user name should be "Eddie Murphy"

  Scenario: Log in as Mike wit parameter.
    When The user user logs in using "morganfreeman@kraft.com" and "mfreeman"
    Then The user should be able to login
    And The user name should be "Morgan Freeman"