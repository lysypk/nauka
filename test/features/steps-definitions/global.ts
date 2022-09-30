import { setWorldConstructor } from "@wdio/cucumber-framework";
import chai from "chai";

class CustomWorld {
    testid: string
    constructor(){
        this.testid = ""
    }
}
setWorldConstructor(CustomWorld)