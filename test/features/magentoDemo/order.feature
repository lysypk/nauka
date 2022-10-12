@magentoOrder
Feature: Order placement

    Scenario Outline: <TestID> Order placement for not logged user
        Given User go to main page
        #Add different categories as TC
        When User select category
        And User click on product on listing page
        And User add product to cart
        And User open minicart
        And User proceed to checkout
        And User filled up address form 
        And User selected shipping method
        Then User review summary and placed order

        Examples:
            | TestID    | 
            | WEB_TC001 |
  



