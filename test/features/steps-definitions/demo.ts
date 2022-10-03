import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"
import logger from "../../helper/logger"

Given(/^Google page is opened$/, async function() {
    logger.info(`${this.testid}: Started logger`) 
    const termsGoogle = await $("[class=tHlp8d]")
    await browser.url("https://www.google.com/")
    await termsGoogle.click()
    
})

When(/^Search item (.*)$/, async function (searchItem) {
    const searchBar = await $('[name=q]')
    await searchBar.setValue(searchItem)
    await browser.keys("Enter")
})

Then(/^Click on first search result$/, async function() {
    const firstResult = await $('<h3>')
    await firstResult.click()
})

Then (/^URL should match (.*)$/, async function (expectedURL) {
    const getUrl = await browser.getUrl()
    chai.expect(getUrl).to.equal(expectedURL)
})
