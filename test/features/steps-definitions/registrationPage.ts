import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"
import logger from "../../helper/logger"
import Registration from "../../page-objects/registration"

When(/^User filled up registration form$/, async function() {
    logger.info(`${this.testid}: User trying to fill registration form`)
    try {
        browser.pause(3000)
        await Registration.fillRegistrationForm(this.testid)
        await Registration.confirmRegistration(this.testid)
    } catch (err) {
        err.message = `Error during registration process: ${err.message}`
        throw err
    }
})