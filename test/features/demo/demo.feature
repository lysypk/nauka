@demo
Feature: Demofeature


    
    Scenario Outline: Running chrome and google
        Given Google page is opened
        When Search item <searchItem>
        Then Click on first search result
        Then URL should match <expectedURL>

        Examples:
            | TestID | searchItem | expectedURL |
            | TC_001  | WDIO  | https://webdriver.io/  |
