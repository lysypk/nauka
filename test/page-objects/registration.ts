import Page from "./page";
import chai, { assert, use } from "chai";
import reporter from "../helper/reporter"

class Registration extends Page {
    constructor() {
        super()
    }
    //Page objects
    get firstNameRegField() {return $("#firstname")}
    get lastNameRegField() {return $("#lastname")}
    get emailRegField() {return $('#email_address')}
    get emailPasswordField() {return $('#password')}
    get emailPasswordConfirmationField() {return $('#password-confirmation')}
    get newsletterRegCheckbox() {return $('#is_subscribed')}
    get registrationConfirmationButton() {return $('.action.submit.primary')}

    //Methods
    async fillPersonalInformation(testid: string) {
        try {
            await this.click(await this.firstNameRegField)
            await this.addValueTo(await this.firstNameRegField, "Piotr")
            await this.click(await this.lastNameRegField)
            await this.addValueTo(await this.lastNameRegField, "Test")
            reporter.addStep(testid, "info", `User is adding Personal Information`)
        } catch (err) {
            err.message = `Error while adding Personal Information, ${err.message}`
            throw err
            
        }
    }
    async selectingNewsletterCheckbox(testid:string) {
        try {
            if (!(await this.newsletterRegCheckbox).isSelected) {
                (await this.newsletterRegCheckbox).click()  
            }
        } catch (err) {
            err.message = `Error during newsletter checkbox selection: ${err.message}`
            throw err
        }
    }
    async fillSignInInformation(testid:string) {
        try {
            await this.click(await this.emailRegField)
            await this.addValueTo(await this.emailRegField, `piotr.kedzierski+registration${await this.randomNumber()}` + "@orba.co")
            await this.click(await this.emailPasswordField)
            await this.addValueTo(await this.emailPasswordField, "Qweasdzxc1!")
            await this.click(await this.emailPasswordConfirmationField)
            await this.addValueTo(await this.emailPasswordConfirmationField, "Qweasdzxc1!")
        } catch (err) {
            err.message = `Error during filling SignIN information: ${err.message}`
            throw err
        }
    }
    async confirmRegistration(testid: string) {
        try {
            await this.click(await this.registrationConfirmationButton)
            
        } catch (err) {
            err.message = `Error during clicking on confirm button: ${err.message}`
            throw err
        }
    }
    async fillRegistrationForm(testid: string) {
        await this.fillPersonalInformation(testid)
        await this.selectingNewsletterCheckbox(testid)
        await this.fillSignInInformation(testid)

    }

}

    export default new Registration()