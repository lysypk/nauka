@magentoRegistration
Feature: Registration

    Scenario Outline: <TestID> Registration
    Given User go to main page
    When User click on Create Account button
    #Add email randomizer 
    And User filled up registration form
    Then User user can see his account page
     

        Examples:
            | TestID      |
            | Registration_TC001 |