import Page from "./page";
import chai, { assert, use } from "chai";
import reporter from "../helper/reporter"

class MainPage extends Page {
    constructor() {
        super()
    }
    //Page objects
    get womenCategory() {return $('#ui-id-4')}
    get womenTop() {return $('#ui-id-9')}

    //Methods
    async selectCategory(testid: string) {
        try {
            await this.womenCategory.moveTo()
            await this.click(await this.womenTop)
            reporter.addStep(testid, "info", `Category successfully selected` )
        } catch (err) {
            err.message = `Error while selecting category, ${err.message}`
            throw err
        }
    }
}
export default new MainPage()