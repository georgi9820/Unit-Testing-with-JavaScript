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


})