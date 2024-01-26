import { lookupChar } from "./charLookUp.js"
import { expect } from "chai"

describe("lookupChar", () => {

    it("should return undefined when the first parameter is incorrect and the second parameter is correct type", () => {
        const incorrectFirstParam = 123;
        const correctSecondParam = 1;
        
        const result = lookupChar(incorrectFirstParam, correctSecondParam);

        expect(result).to.be.undefined;
    })

    it("should return undefined when the first parameter is correct and the second parameter is incorrect float type", () => {
        const correctFirstParam = "some text";
        const incorrectSecondParam = 15.5;
        
        const result = lookupChar(correctFirstParam, incorrectSecondParam);

        expect(result).to.be.undefined;
    })

    it("should return undefined when the first parameter is correct and the second parameter is incorrect type", () => {
        const correctFirstParam = "some text";
        const incorrectSecondParam = "10";
        
        const result = lookupChar(correctFirstParam, incorrectSecondParam);

        expect(result).to.be.undefined;
    })

    it("should return index is incorrect when the index is bigger than the string length", () => {
        const correctFirstParam = "hello";
        const correctSecondParam = 7;
        
        const result = lookupChar(correctFirstParam, correctSecondParam);

        expect(result).to.be.equal("Incorrect index");
    })

    it("should return index is incorrect when the index is equal to the string length", () => {
        const correctFirstParam = "hello";
        const correctSecondParam = 5;
        
        const result = lookupChar(correctFirstParam, correctSecondParam);

        expect(result).to.be.equal("Incorrect index");
    })

    it("should return index is incorrect when the index is negative number", () => {
        const correctFirstParam = "hello";
        const correctSecondParam = -2;
        
        const result = lookupChar(correctFirstParam, correctSecondParam);

        expect(result).to.be.equal("Incorrect index");
    })

    it("should return correct char relative to the index", () => {
        const correctFirstParam = "hello";
        const correctSecondParam = 1;
        
        const result = lookupChar(correctFirstParam, correctSecondParam);

        expect(result).to.be.equal("e");
    })
})