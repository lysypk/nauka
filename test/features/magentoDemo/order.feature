@magentoOrder
Feature: Order placement

    Scenario Outline: Basic not logged order from category
        Given User go to main page
        #Think about category randomizing
        When User select category
        #Think about randomizing
        And User click on product on listing page
        #Find the way to skip if do not have size/color
        And User add product to cart
        And User open minicart
        And User proceed to checkout
        And User filled up address form 
        And User selected shipping method
        Then User review summary and placed order

        Examples:
            | TestID    | 
            | WEB_TC001 |
  



