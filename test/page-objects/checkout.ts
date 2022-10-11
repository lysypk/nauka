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
    get countryDropdownCheckout() { return $('[name="country_id"') }
    get stateDropdownCheckout() { return $('[name="region_id"]') }
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
            await this.addValueTo(await this.lastNameFieldCheckout, "Kedzierski")
            reporter.addStep(testid, "info", `User try to fill last name field`)
        } catch (err) {
            err.message = `Error during adding last name, ${err.message}`
            throw err
        }
       
    }
    async addStreetAddressCheckout(testid : string) {
        try {
            await this.click(await this.addressFieldCheckout)
            await this.addValueTo(await this.addressFieldCheckout, "Pomorska 94")
            reporter.addStep(testid, "info", `User try to fill address field`)
        } catch (err) {
            err.message = `Error during adding address, ${err.message}`
            throw err
        }
       
    }
    async addCityCheckout(testid : string) {
        try {
            await this.click(await this.cityFieldCheckout)
            await this.addValueTo(await this.cityFieldCheckout, "Łódź")
            reporter.addStep(testid, "info", `User try to fill City field`)
        } catch (err) {
            err.message = `Error during adding city, ${err.message}`
            throw err
        }
       
    }
    async selectCountry(testid : string) {
        try {
            await this.countryDropdownCheckout.selectByVisibleText("Poland")
            reporter.addStep(testid, "info", `User select Poland as country`)
        } catch (err) {
            err.message = `Error on country dropdown: ${err.message}`
            throw err
        }
    }
    async selectState(testid : string) {
        try {
            await this.stateDropdownCheckout.selectByVisibleText("łódzkie")
            reporter.addStep(testid, "info", `User select łódzkie as state`)
        } catch (err) {
            err.message = `Error on state dropdown: ${err.message}`
            throw err
        }
    }
    async addZipCode(testid: string) {
        try {
            await this.click(await this.postcodeFieldCheckout)
            await this.addValueTo(await this.postcodeFieldCheckout, "91-402")
            reporter.addStep(testid, "info", "User is adding ZIP-Code" )
        } catch (err) {
            err.message = `Error during ZIP-Code add ${err.message}`
            throw err
        }
    }
    async addPhoneNumber(testid: string) {
        try {
            await this.click(await this.phoneFieldCheckout)
            await this.addValueTo(await this.phoneFieldCheckout, "123123123")
            reporter.addStep(testid, "info", "User is adding phone number" )
        } catch (err) {
            err.message = `Error during phone number add ${err.message}`
            throw err
        }
    }
    async selectPaymentMethod(testid: string) {
        try {
            await this.click(await this.paymentRadioButtons[0])
            reporter.addStep(testid, "info", "User is selecting payment method")
        } catch (err) {
            err.message = `Error during selection of payment method: ${err.message}`
            throw err
        }
    }
    async goToSummaryPage(testid: string) {
        try {
            await this.click(await this.goToNextStepButton)
            reporter.addStep(testid, "info", "User is clicking on go to next step button")
        } catch (err) {
            err.message = `Error during proceeding o checkout: ${err.message}`
            throw err
        }
    }
}

    export default new CheckoutPage()