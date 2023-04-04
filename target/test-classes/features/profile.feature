Feature: Profile tests

  Background:
    Given The user is on the login page


  Scenario: User should be able to edit his/her profile
    When The user user logs in using "john@gmail.com" and "John1234."
    Then The user should be able to login
    And User should go to my profile with "John"
    And User should navigate to "Edit Profile"
   # And User should fill out necessary input boxes and tab save changes button
    #Then User should verify the profile updated message


  Scenario: User should be able to edit his/her profile and fills out necessary boxes

    When The user user logs in using "john@gmail.com" and "John1234."
    Then The user should be able to login
    And User should go to my profile with "John"
    And User should navigate to "Edit Profile"
    And User should fill out necessary input boxes that are "John" "About coding" "Amazon" "QA" "krafttech" "Canada" "Risk assesment,HTML" and tab save changes button
    Then User should verify the profile updated message

  @scenario
  Scenario: User should be able to edit his/her profile and fills out necessary boxes

    When The user user logs in using "john@gmail.com" and "John1234."
    Then The user should be able to login
    And User should go to my profile with "John"
    And User should navigate to "Edit Profile"
    And User should fill out necessary input boxes with below and tab save changes button
      | John                |
      | Aboud coding        |
      | Amazon              |
      | QA                  |
      | Krafttech           |
      | Canada              |
      | Risk Assesment,HTML |
    Then User should verify the profile updated message


