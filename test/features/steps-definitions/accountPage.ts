import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"
import logger from "../../helper/logger"
import AccountPage from "../../page-objects/account"

Then(/^User user can see his account page$/, async function() {
    logger.info(`${this.testid}: User is checking his account page`)
    try {
        browser.pause(7000)
       await AccountPage.titleCheck(this.testid)
    } catch (err) {
        err.message = `Error during checking account page: ${err.message}`
        throw err
    }
})