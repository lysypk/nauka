import Page from "./page";
import chai, { assert, use } from "chai";
import reporter from "../helper/reporter"

class CheckoutPage extends Page {
    constructor() {
        super()
    }
    //Page objects
    get emailFieldCheckout() { return $('#customer-email') }
    get firstNameFieldCheckout() { return $('[name="firstname"]') }
    get lastNameFieldCheckout() { return $('[name="lastname"]') }
    get addressFieldCheckout() { return $('[name="street[0]"]') }
    get cityFieldCheckout() { return $('[name="city"]') }
    get countryDropdownCheckout() { return $('.country_id') }
    get stateDropdownCheckout() { return $('.region_id') }
    get postcodeFieldCheckout() { return $('[name="postcode"]') }
    get phoneFieldCheckout() { return $('[name="telephone"]') }
    get paymentRadioButtons() { return $$('.radio') }
    get goToNextStepButton() { return $('.button.action.continue.primary') }

    //Methods
    async addEmailCheckout(testid : string) {
        try {
            await this.click(await this.emailFieldCheckout)
            await this.typeInto(await this.emailFieldCheckout, "piotr.kedzierski@orba.co")
            reporter.addStep(testid, "info", `User try to fill email field`)
        } catch (err) {
            err.message = `Error during adding email address, ${err.message}`
            throw err
        }
       
    }
    async addFirstNameCheckout(testid : string) {
        try {
            await this.click(await this.firstNameFieldCheckout)
            await this.addValueTo(await this.firstNameFieldCheckout, "Piotr")
            reporter.addStep(testid, "info", `User try to fill name field`)
        } catch (err) {
            err.message = `Error during adding first name, ${err.message}`
            throw err
        }
       
    }
    async addLastNameCheckout(testid : string) {
        try {
            await this.click(await this.lastNameFieldCheckout)
            await this.addValueTo(await this.lastNameFieldCheckout, "Piotr")
            reporter.addStep(testid, "info", `User try to fill last name field`)
        } catch (err) {
            err.message = `Error during adding last name, ${err.message}`
            throw err
        }
       
    }
    async addStreetAddressCheckout(testid : string) {
        try {
            await this.click(await this.addressFieldCheckout)
            await this.addValueTo(await this.addressFieldCheckout, "Piotr")
            reporter.addStep(testid, "info", `User try to fill address field`)
        } catch (err) {
            err.message = `Error during adding address, ${err.message}`
            throw err
        }
       
    }
    async addCityCheckout(testid : string) {
        try {
            await this.click(await this.cityFieldCheckout)
            await this.addValueTo(await this.cityFieldCheckout, "Piotr")
            reporter.addStep(testid, "info", `User try to fill City field`)
        } catch (err) {
            err.message = `Error during adding city, ${err.message}`
            throw err
        }
       
    }
}

    export default new CheckoutPage()