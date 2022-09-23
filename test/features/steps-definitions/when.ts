import { When } from "@wdio/cucumber-framework";
import chai from "chai"

When (/^(.*) products are listed$/, async function(numberOfProducts) {
    //if <null>
    if (!numberOfProducts) throw Error(`Invalid number of products: ${numberOfProducts}`)

    let inventoryArreys = await $$(".inventory_item_name")
    //parseInt because in steps we always provide string 
    chai.expect(inventoryArreys.length).to.equal(parseInt(numberOfProducts))
    
})