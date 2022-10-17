import Page from "./page";
import chai, { assert, use } from "chai";
import reporter from "../helper/reporter"

class AccountPage extends Page {
    constructor() {
        super()
    }
    //Page objects
    get myAccountTitle() { return $(".base") }
    //Methods
    async titleCheck(testid: string) {
        try {
            await this.isDisplayed(await this.myAccountTitle)
            assert.equal('My Account', await this.myAccountTitle.getText())
            reporter.addStep(testid, "info", `Checking user account title`)
        } catch (err) {
            err.message = `Error while checking account page, ${err.message}`
            throw err
        }
    }
}

export default new AccountPage()