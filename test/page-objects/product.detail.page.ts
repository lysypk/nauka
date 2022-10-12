import Page from "./page";
import chai, { assert, use } from "chai";
import reporter from "../helper/reporter"
import logger from "../helper/logger";

class ProductDetail extends Page {
    constructor() {
        super()
    }
    //Page objects
    
    get products() {return $$('.product-image-photo')}
    get sizes() {return $$('.swatch-option.text')}
    get colors() {return $$('.swatch-option.color')}
    get addToCartButton() {return $('#product-addtocart-button')}
    get successMessageAddToCart() {return $('.message-success')}
    
    //Methods
    async selectSize(testid: string) {
        try {
            await this.click(await this.sizes[await this.randomizer(await this.sizes)])
            console.log(this.sizes.length)
            reporter.addStep(testid, "info", `Size successfully selected ${await this.sizes.length}`)  
        } catch (err) {
            logger.error(`Product size unavailable, ${err.message}`)
            
        }
    }
    async selectColor(testid: string) {
        try {
            await this.click(await this.colors[await this.randomizer(await this.colors)])
            reporter.addStep(testid, "info", "Color is selected")
        } catch (err) {
            logger.error(`Color is unavailable, ${err.message}`)
        }
    }
    async addToCart(testid: string) {
        try {
            await this.click(await this.addToCartButton)
            reporter.addStep(testid,"info", "User clicked on add to cart button")
            await this.isDisplayed(await this.successMessageAddToCart)
            reporter.addStep(testid,"info", "Success message is displayed")
        } catch (err) {
            err.message = `Add to cart is unavailabe, ${err.message}`
            throw err
        }
    }

}

    export default new ProductDetail()