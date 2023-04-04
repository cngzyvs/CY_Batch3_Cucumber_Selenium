Feature: Login with scenario outline

  @scenarioOutline
  Scenario Outline: Positive login test with diffirent users
    Given The user is on the login page
    When The user user logs in using wrong "<userEmail>" or "<password>"
    Then Verify that warning message "<message>" is vicible
    Examples:
      | userEmail               | password  | message                                  |
      | mike@gmail..com         | mike1234. | Email address is incorrect. Please check |
      | john@gmail.com.         | John123   | Email address is incorrect. Please check |
      | eddiem@k.com            | eddiem12  | Email address is incorrect. Please check |
      |                         | mfreeman  | Please enter your email!      |
      | morganfreeman@kraft.com |           | Please enter your password!     |


  Scenario Outline: Positive login test with diffirent users
    Given The user is on the login page
    When The user user logs in using "<userEmail>" and "<password>"
    Then Verify that "<name>" is vicible on the dashboard
    Examples:
      | userEmail               | password  | name           |
      | mike@gmail.com          | mike1234  | mike           |
      | john@gmail.com          | John1234. | John           |
      | eddiem@kraft.com        | eddiem12  | Eddie Murphy   |
      | morganfreeman@kraft.com | mfreeman  | Morgan Freeman |

