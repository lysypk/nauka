import Page from "./page";
import chai, { assert, use } from "chai";
import reporter from "../helper/reporter"

class SummaryPage extends Page {
    constructor() {
        super()
    }
    //Page objects
    get placeOrderButton() {return $("button[title='Place Order']")}
    //Methods
    async placeOrder(testid: string) {
        try {
            await this.click(await this.placeOrderButton)
            reporter.addStep(testid, "info","User is clicking on place order button" )
        } catch (err) {
            err.message = `Error during order placing: ${err.message}`
            throw err
        }
        
    }
}

export default new SummaryPage()