import Page from "./page";
import chai, { assert, use } from "chai";
import reporter from "../helper/reporter"

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
            await this.click(await this.sizes[0])
            reporter.addStep(testid, "info", `Size successfully selected`)  
        } catch (err) {
            err.message = `Product size unavailable, ${err.message}`
            throw err
            
        }
    }
    async selectColor(testid: string) {
        try {
            await this.click(await this.colors[0])
            reporter.addStep(testid, "info", "Color is selected")
        } catch (err) {
            err.message = `Color is unavailable, ${err.message}`
            throw err
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