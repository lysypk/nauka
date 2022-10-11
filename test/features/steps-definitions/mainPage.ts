import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"
import logger from "../../helper/logger"
import MainPage from "../../page-objects/magento.demo.main"

Given(/^User go to main page$/, async function () {
    logger.info(`${this.testid}: Started logger, user going to main page`)
    try {
        //@ts-ignore
        await MainPage.navigateTo(browser.config.baseUrlSite)
    } catch (err) {
        err.message = `Failed enter website ${err.message}`
        throw err
    }
})
When(/^User select category$/, async function () {
    logger.info(`${this.testid}: User selected category`)
    try {
        await MainPage.selectCategory(this.testid)
    } catch (err) {
        err.message = `Failed during category selection ${err.message}`
        throw err
    }
})
