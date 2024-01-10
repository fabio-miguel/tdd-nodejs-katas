const {fizzBuzz} = require("./fizzBuzzKata")

describe("FizzBuzz Kata", () => {

    it("should return Fizz if the number entered is divisible by 3", () => {

        expect(fizzBuzz(3)).toBe("Fizz");
    })
    it("should return Buzz if the number entered is divisible by 5", () => {

        expect(fizzBuzz(5)).toBe("Buzz");
    })
    it("should return FizzBuzz if the number entered is divisible by 3 and 5", () => {

        expect(fizzBuzz(15)).toBe("FizzBuzz");
    })
    it("should return any other number entered as a string", () => {

        expect(fizzBuzz(2)).toBe("2");
    })
})