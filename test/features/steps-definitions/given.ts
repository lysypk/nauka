import { Given } from "@wdio/cucumber-framework";
import chai from "chai"
import logger from "../../helper/logger"

Given (/^Login to inventory app$/, async function () {
    await browser.url('https://www.saucedemo.com/')
    await browser.setTimeout({implicit: 15000, pageLoad: 100000})
    await browser.maximizeWindow()
    
    const loginSauce = $('#user-name')
    const passwordSauce = $('#password')
    const loginButton = $('#login-button')
    await loginSauce.click()
    await loginSauce.setValue(process.env.testUsername)
    await passwordSauce.click()
    await passwordSauce.setValue(process.env.testPassword)
    await loginButton.click()
})