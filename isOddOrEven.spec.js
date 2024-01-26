import { isOddOrEven } from "./isOddOrEven.js"
import { expect } from "chai"

describe("isOddOrEven", () => {

    it("should return undefined when pass non string value as input", () => {
        //Arrange
        const inputValueNumber = 15;
        const inputValueFloatNumber = 15.10;
        const inputValueUndefined = undefined;
        const inputValueNull = null;
        //Act
        const resultNumber = isOddOrEven(inputValueNumber);
        const resultFloatNumber = isOddOrEven(inputValueFloatNumber);
        const resultUndefined = isOddOrEven(inputValueUndefined);
        const resultNull = isOddOrEven(inputValueNull);
        //Assert
        expect(resultNumber).to.be.undefined;
        expect(resultFloatNumber).to.be.undefined;
        expect(resultUndefined).to.be.undefined;
        expect(resultNull).to.be.undefined;
    })

    it("should return even when the input string length is even", () => {
        const evenStringLength = "1234";

        const result = isOddOrEven(evenStringLength);

        expect(result).to.be.equal("even");
    })

    it("should return odd when the input string length is odd", () => {
        const oddStringLength = "123";

        const result = isOddOrEven(oddStringLength);

        expect(result).to.be.equal("odd");
    })
})