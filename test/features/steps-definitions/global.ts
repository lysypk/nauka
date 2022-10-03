import { setWorldConstructor } from "@wdio/cucumber-framework";
import chai from "chai";
import logger from "../../helper/logger"

class CustomWorld {
    testid: string
    constructor(){
        this.testid = ""
    }
}
setWorldConstructor(CustomWorld)