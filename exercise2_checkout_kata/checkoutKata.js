const ITEMS = require("./checkoutKataItems");
const RULES = require("./checkoutKataRules")

class Checkout {
    constructor() {
        this.total = 0;
        this.scannedItems = new Map(); 
    }

    getTotal() {
        return this.total;
    }
    scan(items) {
        // Iterates through each item in the scanned list of items
        for (const item of items) {

            // You want to keep track of items scanned and their Qty:
            // Why? So rule only applies if itemQty is met for rule
            // 1. this.scannedItems.get(item) is either truthy or falsey
            // I.e. scannedItems Map either has or doesn't have the scanned item
            // 2. If item is not found on map it returns undefined
            // If undefined it defaults to zero, so itemQty is zero
            // But, because item has been scanned we increment by 1
            const itemQty = (this.scannedItems.get(item) || 0) + 1;
            // Set the item scanned and its Qty on the this.scannedItems Map:
            // 1. item is the key name E.g. "A"
            // 2. itemQty is the variable above which has been updated after scan
            // 3. Map now has new or the same key (unique keys) and new value
            // E.g. {["A", 1]}
            this.scannedItems.set(item, itemQty);


            // Gets pricing rule (if there is one)
            const rule = RULES.get(item);
            // Conditional to check if there is a pricing rule for the item 
            // Does the rule (item) have necessary Qty for the rule to be applied 
            if (rule && itemQty % rule.quantity === 0) {
                // Calculate the discounted price for item to be added to this.total
                // E.g. for rule "A" and itemQty of 3: 130 - (2 * 50) = 30
                // this.total will be 100 (curr total in loop) + 30 = 130
                this.total += rule.discountedPrice - rule.discount * ITEMS.get(item);
            } else {
                // If item doesn't meet the coniditonal, simply add regular pricing
                this.total += ITEMS.get(item);
            }
        }
    }
}


module.exports = { Checkout };


// NOTES:

// A big part of the job is looking at code and trying to understand what it’s doing. You should be able to step through it in your head line by line (or with a debugger), substitute in the variables (e.g first loop item is A, what happens), and see what’s going wrong. Btw remember that the scan method returns void, so no value should be being returned. Remember also that a return exits out of a for loop, so if you have an unknown item and a known item, the total will be 0 which is probably not right.