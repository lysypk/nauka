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
    get products() {return $$('.product-image-photo')}
    get sizes() {return $$('.swatch-option.text')}
    get colors() {return $$('.swatch-option.color')}
    get addToCartButton() {return $('..submit')}
    get successMessageAddToCart() {return $('.message-success')}

    //methods
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
    async selectItem(testid: string) {
        try {
            await this.click(await this.products[0])
            reporter.addStep(testid, "info", `Product successfully selected`)
        } catch (err) {
            err.message = `Error while selecting product, ${err.message}`
            throw err
            
        }

    }
    async selectSize(testid: string) {
        try {
            await this.click(await this.sizes[0])
            reporter.addStep(testid, "info", `Size successfully selected`)  
        } catch (err) {
            err.message = `Product size unavailable`
            throw err
            
        }
    }
    async selectColor(testid: string) {
        try {
            await this.click(await this.colors[0])
            reporter.addStep(testid, "info", "Color is selected")
        } catch (err) {
            err.message = `Color is unavailable`
            throw err
        }
    }
    async addToCart(testid: string) {
        try {
            await this.click(await this.addToCartButton)
            reporter.addStep(testid,"info", "User clicked on add to cart button")
            await this.isDisplayed(await this.successMessageAddToCart)
        } catch (err) {
            err.message = `Add to cart is unavailabe`
            throw err
        }
    }

}
export default new MainPage()