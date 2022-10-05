import Page from "./page";
import chai, { use } from "chai";
import reporter from "../helper/reporter"

class LoginPage extends Page {
    constructor() {
        super()
    }
    //Define page objects  
    get usernameInput() {return $('#user-name')}
    get passwordInput() {return $('#password')}
    get loginButton() {return $('#login-button')}
    //Page actions
    async enterUserName(testid: string, username: string) {
        if(!username) throw Error(`Given username ${username} is not valid`);
        try {
            username = username.trim()
            await this.typeInto(await this.usernameInput, username)
            reporter.addStep(testid, "info", `Username ${username} is entered successfully` )
        } catch (err) {
            err.message = `Error entering username ${username}, ${err.message}`
            throw err
        }   
    }
    async enterPassword(testid: string, password: string) {
        if(!password) throw Error(`Given password is not valid`);
        try {
            password = password.trim()
            await this.typeInto(await this.passwordInput, password)
            reporter.addStep(testid, "info", `Password is entered successfully` )
        } catch (err) {
            err.message = `Error entering password, ${err.message}`
            throw err
        }   
    }
    async clickLoginButton(testid: string) {
        try {
            await this.click(await this.loginButton)
            reporter.addStep(testid, "info", `Login button is clicked correctly` )
        } catch (err) {
            err.message = `Error when clicked button, ${err.message}`
            throw err
        }   
    }
    //full method functions
    async loginToSauce(testid: string, username: string, password: string) {
        try {
            await this.enterUserName(testid, username)
            await this.enterPassword(testid, password)
            await this.clickLoginButton(testid)
        } catch (err) {
            throw err
        }
       
    }

}

export default new LoginPage()