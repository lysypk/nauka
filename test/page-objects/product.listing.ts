import Page from "./page";
import chai, { assert, use } from "chai";
import reporter from "../helper/reporter"

class ProductListing extends Page {
    constructor() {
        super()
    }
    //Page objects
    get products() {return $$('.product-image-photo')}
    //Methods
    async selectItem(testid: string) {
        try {
            await this.click(await this.products[0])
            reporter.addStep(testid, "info", `Product successfully selected`)
        } catch (err) {
            err.message = `Error while selecting product, ${err.message}`
            throw err
            
        }

    }

}

    export default new ProductListing()