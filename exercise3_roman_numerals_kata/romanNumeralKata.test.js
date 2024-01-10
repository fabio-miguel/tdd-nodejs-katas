const {romanNumeralConverter} = require("./romanNumeralKata")

describe("Roman Numeral Converter", () => {

    it("should return nothing when nothing is entered", () => {

        expect(romanNumeralConverter()).toBe("");
    })
    it("should return an I when entering a 1", () => {
        
        expect(romanNumeralConverter(1)).toBe("I");
    })
    it("should return an II when entering a 2", () => {
        
        expect(romanNumeralConverter(2)).toBe("II");
    })
    it("should return a V when entering a 5", () => {

        expect(romanNumeralConverter(5)).toBe("V");
    })
    it("should return VI when entering a 6", () => {

        expect(romanNumeralConverter(6)).toBe("VI");
    })
    it("should return X when entering a 10", () => {

        expect(romanNumeralConverter(10)).toBe("X");
    })
    it("should return IX when entering a 9", () => {

        expect(romanNumeralConverter(9)).toBe("IX");
    })
    it("should return XL when entering a 40", () => {

        expect(romanNumeralConverter(40)).toBe("XL");
    })
    it("should return L when entering a 50", () => {

        expect(romanNumeralConverter(50)).toBe("L");
    })
    it("should return XC when entering a 90", () => {

        expect(romanNumeralConverter(90)).toBe("XC");
    })
    it("should return C when entering a 100", () => {

        expect(romanNumeralConverter(100)).toBe("C");
    })
    it("should return CD when entering a 400", () => {

        expect(romanNumeralConverter(400)).toBe("CD");
    })
    it("should return D when entering a 500", () => {

        expect(romanNumeralConverter(500)).toBe("D");
    })
    it("should return CM when entering a 900", () => {

        expect(romanNumeralConverter(900)).toBe("CM");
    })
    it("should return M when entering a 1000", () => {

        expect(romanNumeralConverter(1000)).toBe("M");
    })
})