import { analyzeArray } from "./arrayAnalyzer.js"
import { expect } from "chai"

describe("analyzeArray", () => {
    it("should return undefined when pass empty array", () => {
        const inputEmptyArray = [];

        const result = analyzeArray(inputEmptyArray);

        expect(result).to.be.undefined;
    })

    it("should return undefined when pass non-array as input", () => {
        const inputEmptyArray = "someString";

        const result = analyzeArray(inputEmptyArray);

        expect(result).to.be.undefined;
    })

    it("should return correct value when pass array with different numbers as input", () => {
        const inputEmptyArray = [3, 5, -2, 4, 1];

        const result = analyzeArray(inputEmptyArray);

        expect(result).to.deep.equal({
            min: -2,
            max: 5,
            length: 5
        });
    })

    it("should return correct value when pass array with single element as input", () => {
        const inputEmptyArray = [3];

        const result = analyzeArray(inputEmptyArray);

        expect(result).to.deep.equal({
            min: 3,
            max: 3,
            length: 1
        });
    })

    it("should return correct value when pass array with equal elements as input", () => {
        const inputEmptyArray = [3, 3, 3];

        const result = analyzeArray(inputEmptyArray);

        expect(result).to.deep.equal({
            min: 3,
            max: 3,
            length: 3
        });
    })
})