import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"
import logger from "../../helper/logger"
import CheckoutPage from "../../page-objects/checkout"

Given(/^User filled up address form$/, async function() {
    logger.info(`${this.testid}: User trying to fill address form on checkout`)
    try {
        await browser.pause(3000)
        await CheckoutPage.addEmailCheckout(this.testid)
        await CheckoutPage.addFirstNameCheckout(this.testid)
        await CheckoutPage.addLastNameCheckout(this.testid)
        await CheckoutPage.addStreetAddressCheckout(this.testid)
        await CheckoutPage.addCityCheckout(this.testid)
        await CheckoutPage.selectCountry(this.testid)
        await CheckoutPage.selectState(this.testid)
        await CheckoutPage.addZipCode(this.testid)
        await CheckoutPage.addPhoneNumber(this.testid)
    } catch (err) {
        err.message = `Error during filling of address form on checkout ${err.message}`
        throw err
    }
})
Given(/^User selected shipping method$/, async function() {
    logger.info(`${this.testid}: User trying to select shipping method`)
    try {
        await CheckoutPage.selectPaymentMethod(this.testid)
        await CheckoutPage.goToSummaryPage(this.testid)
    } catch (err) {
        err.message = `Error during payment method selection: ${err.message}`
        throw err
    }
})