Feature: Web Interactions


    @WebInteractions
    Scenario Outline: <TestID>: Demo interactions
        Given Webpage Open
        When Perform web interactions


        Examples:
            | TestID    |
            | WEB_TC002 |
