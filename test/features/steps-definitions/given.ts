import { Given } from "@wdio/cucumber-framework";
import chai from "chai"
import logger from "../../helper/logger"
import LoginPage from "../../page-objects/login.page"

Given(/^Login to inventory app$/, async function () {

    // await browser.url('https://www.saucedemo.com/')
    // await browser.setTimeout({ implicit: 15000, pageLoad: 100000 })
    // await browser.maximizeWindow()
    try {
        await LoginPage.navigateTo(browser.config.baseUrlSauce)
        await LoginPage.loginToSauce(this.testid, process.env.testUsername, process.env.testPassword)
    } 
    catch (err) {
        err.message = `Failed login step ${err.message}`
        throw err
    }
})