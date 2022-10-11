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
When(/^User open minicart$/, async function () {
    logger.info(`${this.testid}: User open minicart`)
    try {
        await MainPage.openMinicart(this.testid)
    } catch (err) {
        err.message = `Failed during clicking on minicart ${err.message}`
        throw err
    }
})
When (/^User proceed to checkout$/, async function(){
    logger.info(`${this.test}: User proceed to checkout`)
    try {
        await MainPage.goToCheckout(this.testid)
    } catch (err) {
        err.message = `Failed during proceeding to checkout ${err.message}`
        throw err
    }
})
