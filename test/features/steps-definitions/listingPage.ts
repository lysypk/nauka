import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"
import logger from "../../helper/logger"
import ProductListing from "../../page-objects/product.listing"

When(/^User click on product on listing page$/, async function () {
    logger.info(`${this.testid}: User clicked on random product`)
    try {
        await ProductListing.selectItem(this.testid)
    } catch (err) {
        err.message = `Failed during category selection ${err.message}`
        throw err
    }
})