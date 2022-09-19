Feature: Web Interactions 


    @WebInteractions
    Scenario Outline: Demo interactions
        Given Webpage Open
        When Perform web interactions
        

        Examples:
            | TestID | searchItem | expectedURL |
            | WEB_TC002  | WDIO  | https://webdriver.io/  |
