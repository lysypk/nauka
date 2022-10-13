import chai from "chai"

export default class Page {
    constructor() {

    }
    /**All reusable web functions */
    async navigateTo(path: string) {
        await browser.url(path)
        // await browser.maximizeWindow()
    }
    async click(ele: WebdriverIO.Element) {
        await ele.waitForClickable({ timeout: 15000 })
        if (!ele.elementId) {
            throw Error(ele.error.message)
        }
        await ele.click()
    }
    async typeInto(ele: WebdriverIO.Element, text: string) {
        await ele.waitForDisplayed({ timeout: 15000 })
        if (!ele.elementId) {
            throw Error(ele.error.message)
        }
        await ele.setValue(text)
    }
    async addValueTo(ele: WebdriverIO.Element, text: string) {
        await ele.waitForDisplayed({ timeout: 15000 })
        if (!ele.elementId) {
            throw Error(ele.error.message)
        }
        await ele.addValue(text)
    }
    async isDisplayed(ele: WebdriverIO.Element) {
        await ele.waitForDisplayed({timeout: 15000})
        if(!ele.elementId) {
            throw Error(ele.error.message)
        }
    }
    async randomizer(selectorsArray: WebdriverIO.ElementArray) {
        return Math.floor(Math.random()* selectorsArray.length)
    }
    async randomNumber() {
        //or math ranodm? - return Math.floor(Math.random()* 1000000000)
        return (+new Date).toString(36).slice(-10)
    }

}
