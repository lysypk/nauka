import Page from "./page";
import chai, { assert, use } from "chai";
import reporter from "../helper/reporter"
import logger from "../helper/logger"

class MainPage extends Page {
    constructor() {
        super()
    }
    //Page objects
    /* it's better for this specific project to add every category by ID
    and use them as different scenarios than use randomizer*/
    
    get womenCategory() {return $('#ui-id-4')} 
    get womenTop() {return $('#ui-id-9')} 
    get minicart() {return $('.action.showcart')}
    get goToCheckoutButton() {return $('#top-cart-btn-checkout')}

    //Methods
    async selectCategory(testid: string) {
        try {
            await this.womenCategory.moveTo()
            await this.click(await this.womenTop)
            reporter.addStep(testid, "info", `Category successfully selected` )
        } catch (err) {
            logger.error(`Error while selecting category, probably no-sub category ${err.message}`)
        }
    }
    async openMinicart(testid: string) {
        try {
            await this.click(await this.minicart)
            reporter.addStep(testid, "info", "User clicked on minicart")
            
        } catch (err) {
            err.message = `Error while clicking on minicart, ${err.message}`
            throw err
            
        }
    }
    async goToCheckout(testid: string) {
        try {
            await this.click(await this.goToCheckoutButton)
            reporter.addStep(testid, "info", "User clicked on go to checkout button")
        } catch (err) {
            err.message = `Error while clicking on go to checkout button, ${err.message}`
            throw err 
        }

    }
}
export default new MainPage()