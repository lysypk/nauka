import Page from "./page";
import chai, { use } from "chai";
import reporter from "../helper/reporter"

class MainPage extends Page {
    constructor() {
        super()
    }
    //Page objects
    get womenCategory() {return $('#ui-id-4')}
    get womenTop() {return $('#ui-id-9')}

    //methods
    async selectCategory(testid: string) {
        try {
            await this.womenCategory.moveTo()
            await this.click(await this.womenTop)
            reporter.addStep(testid, "info", `Category successfully selected` )
            await browser.debug()
        } catch (err) {
            err.message = `Error while selecting category, ${err.message}`
            throw err
        }
    }
    async selectItem(testid: string) {
        
    }
}
export default new MainPage()