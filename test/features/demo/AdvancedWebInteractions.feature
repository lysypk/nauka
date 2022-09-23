Feature: Advanced Web Interactions 


    @Advanced
    Scenario Outline: Demo adv interactions
        Given Login to inventory app
        When <numberOfProducts> products are listed
        Then All product have valid price
        

        Examples:
            | TestID    | numberOfProducts | expectedURL           |
            | WEB_TC003 | 6                | https://webdriver.io/ |
