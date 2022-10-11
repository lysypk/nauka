import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"
import logger from "../../helper/logger"
import ProductDetail from "../../page-objects/product.detail.page"


When(/^User add product to cart$/, async function() {
    logger.info(`${this.testid}: User added item to cart`)
    try {
        await ProductDetail.selectSize(this.testid)
        await ProductDetail.selectColor(this.testid)
        await ProductDetail.addToCart(this.testid)
        await browser.pause(3000)
    } catch (err) {
        err.message = `Failed during adding to cart ${err.message}`
        throw err
    }
})