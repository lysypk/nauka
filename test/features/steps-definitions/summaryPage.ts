import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"
import logger from "../../helper/logger"
import SummaryPage from "../../page-objects/summary"

Then(/^User review summary and placed order$/, async function() {
    logger.info(`${this.testid}: User trying to place order`)
    try {
        await SummaryPage.placeOrder(this.testid)
    } catch (err) {
        err.message = `Error during order placing: ${err.message}`
        throw err
    }
})