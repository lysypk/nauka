import { Then } from "@wdio/cucumber-framework";
import chai from "chai"



Then (/^All product have valid price$/, async function () {
    // product list
    let productElements = await $$('.inventory_item_price')
    let priceStringArray = []
    for(let i = 0; i < productElements.length; i++ ) {
        //return single element
        let priceString = await productElements[i].getText()
        priceStringArray.push(priceString)
    }
    //Convert string to int
    let priceNumberArray = priceStringArray.map(ele => +(ele.replace("$", "")))
    //compare with incorrect value
    let invalidPriceArr = priceNumberArray.filter(ele => ele <=0 )
    console.log(invalidPriceArr)
    chai.expect(invalidPriceArr.length).to.equal(0) 
})