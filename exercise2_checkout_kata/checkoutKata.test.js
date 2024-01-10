const {Checkout} = require("./checkoutKata");

describe("Checkout Kata", () => {

    it("should return 0 when there are no items scanned", () => {

        const checkout = new Checkout();
        checkout.getTotal();
        expect(checkout.getTotal()).toBe(0);
    })
    it("should apply the regular price for a single item scanned", () => {
        
        const checkout = new Checkout();
        checkout.scan("A");
        expect(checkout.getTotal()).toBe(50);
    })
    it("should add the regular price for single items scanned", () => {

        const checkout = new Checkout();
        checkout.scan("AB");
        expect(checkout.getTotal()).toBe(80);
    })
    it("should apply pricing rule for single items scanned", () => {

        const checkout = new Checkout();
        checkout.scan("AAA");
        expect(checkout.getTotal()).toBe(130);
    })
    it("should apply pricing rule for multiple items scanned", () => {

        const checkout = new Checkout();
        checkout.scan("AAABB");
        expect(checkout.getTotal()).toBe(175);
    })
    it("should apply pricing rule and regular pricing for items scanned", () => {

        const checkout = new Checkout()
        checkout.scan("AAAA");
        expect(checkout.getTotal()).toBe(180);
    })
})