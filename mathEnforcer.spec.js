import { mathEnforcer } from "./mathEnforcer.js"
import { expect } from "chai"

describe("mathEnforcer", () => {
    describe("addFive", () => {
        it("should return undefined when pass string as input", () => {
            //Arrange
            const inputString = "someString";
            //Act
            const result = mathEnforcer.addFive(inputString);
            //Assert
            expect(result).to.be.undefined;
        })
        it("should return undefined when pass undefined as input", () => {
            //Arrange
            const inputUndefined = undefined;
            //Act
            const result = mathEnforcer.addFive(inputUndefined);
            //Assert
            expect(result).to.be.undefined;
        })
        it("should return undefined when pass null as input", () => {
            //Arrange
            const inputNull = null;
            //Act
            const result = mathEnforcer.addFive(inputNull);
            //Assert
            expect(result).to.be.undefined;
        })
        it("should return correct result when pass float number as input and assert with closeTo", () => {
            //Arrange
            const inputFloatNumber = 15.63;
            //Act
            const result = mathEnforcer.addFive(inputFloatNumber);
            //Assert
            expect(result).to.be.closeTo(20.63, 0.01);
        })
        it("should return correct result when pass float number as input and assert with equal", () => {
            //Arrange
            const inputFloatNumber = 1.01;
            //Act
            const result = mathEnforcer.addFive(inputFloatNumber);
            //Assert
            expect(result).to.be.equal(6.01);
        })
        it("should return correct result when pass float number with a lot of digits as input and assert with closeTo", () => {
            //Arrange
            const inputFloatNumber = 1.0000001;
            //Act
            const result = mathEnforcer.addFive(inputFloatNumber);
            //Assert
            expect(result).to.be.closeTo(6.01, 0.01);
        })
        it("should return correct result when pass number as input", () => {
            //Arrange
            const inputNumber = 10;
            //Act
            const result = mathEnforcer.addFive(inputNumber);
            //Assert
            expect(result).to.be.equal(15);
        })
        it("should return correct result when pass a negative number as input", () => {
            //Arrange
            const inputNumber = -10;
            //Act
            const result = mathEnforcer.addFive(inputNumber);
            //Assert
            expect(result).to.be.equal(-5);
        })
        it("should return correct result when pass zero as input", () => {
            //Arrange
            const inputNumber = 0;
            //Act
            const result = mathEnforcer.addFive(inputNumber);
            //Assert
            expect(result).to.be.equal(5);
        })
    })
    describe("subtractTen", () => {
        it("should return undefined when pass string as input", () => {
            //Arrange
            const inputString = "someString";
            //Act
            const result = mathEnforcer.subtractTen(inputString);
            //Assert
            expect(result).to.be.undefined;
        })
        it("should return undefined when pass undefined as input", () => {
            //Arrange
            const inputUndefined = undefined;
            //Act
            const result = mathEnforcer.subtractTen(inputUndefined);
            //Assert
            expect(result).to.be.undefined;
        })
        it("should return undefined when pass null as input", () => {
            //Arrange
            const inputNull = null;
            //Act
            const result = mathEnforcer.subtractTen(inputNull);
            //Assert
            expect(result).to.be.undefined;
        })
        it("should return correct result when pass float number as input and assert with closeTo", () => {
            //Arrange
            const inputFloatNumber = 15.63;
            //Act
            const result = mathEnforcer.subtractTen(inputFloatNumber);
            //Assert
            expect(result).to.be.closeTo(5.63, 0.01);
        })
        it("should return correct result when pass float number as input and assert with equal", () => {
            //Arrange
            const inputFloatNumber = 1.01;
            //Act
            const result = mathEnforcer.subtractTen(inputFloatNumber);
            //Assert
            expect(result).to.be.equal(-8.99);
        })
        it("should return correct result when pass float number with a lot of digits as input and assert with closeTo", () => {
            //Arrange
            const inputFloatNumber = 11.0000001;
            //Act
            const result = mathEnforcer.subtractTen(inputFloatNumber);
            //Assert
            expect(result).to.be.closeTo(1.01, 0.01);
        })
        it("should return correct result when pass number as input", () => {
            //Arrange
            const inputNumber = 12;
            //Act
            const result = mathEnforcer.subtractTen(inputNumber);
            //Assert
            expect(result).to.be.equal(2);
        })
        it("should return correct result when pass a negative number as input", () => {
            //Arrange
            const inputNumber = -10;
            //Act
            const result = mathEnforcer.subtractTen(inputNumber);
            //Assert
            expect(result).to.be.equal(-20);
        })
        it("should return correct result when pass zero as input", () => {
            //Arrange
            const inputNumber = 0;
            //Act
            const result = mathEnforcer.subtractTen(inputNumber);
            //Assert
            expect(result).to.be.equal(-10);
        })
    })
    describe("sum", () => {
        it("should return undefined when pass a string as first parameter and number as second", () => {
            const stringFirstParameter = "someText";
            const numberSecondParameter = 10;

            const result = mathEnforcer.sum(stringFirstParameter, numberSecondParameter);

            expect(result).to.be.undefined;
        })

        it("should return undefined when pass a number as first parameter and a string as second", () => {
            const numberFirstParameter = 10;
            const stringSecondParameter = "someText";

            const result = mathEnforcer.sum(numberFirstParameter, stringSecondParameter);

            expect(result).to.be.undefined;
        })

        it("should return undefined when pass a undefined as first parameter and number as second", () => {
            const undefinedFirstParameter = undefined;
            const numberSecondParameter = 10;

            const result = mathEnforcer.sum(undefinedFirstParameter, numberSecondParameter);

            expect(result).to.be.undefined;
        })

        it("should return undefined when pass a number as first parameter and a undefined as second", () => {
            const numberFirstParameter = 10;
            const undefinedSecondParameter = undefined;

            const result = mathEnforcer.sum(numberFirstParameter, undefinedSecondParameter);

            expect(result).to.be.undefined;
        })

        it("should return undefined when pass a null as first parameter and number as second", () => {
            const nullFirstParameter = null;
            const numberSecondParameter = 10;

            const result = mathEnforcer.sum(nullFirstParameter, numberSecondParameter);

            expect(result).to.be.undefined;
        })

        it("should return undefined when pass a number as first parameter and a null as second", () => {
            const numberFirstParameter = 10;
            const nullSecondParameter = null;

            const result = mathEnforcer.sum(numberFirstParameter, nullSecondParameter);

            expect(result).to.be.undefined;
        })

        it("should return correct result when pass a float number as first parameter and number as second", () => {
            const floatFirstParameter = 1.01;
            const numberSecondParameter = 10;

            const result = mathEnforcer.sum(floatFirstParameter, numberSecondParameter);

            expect(result).to.be.closeTo(11.01, 0.01);
        })

        it("should return correct result when pass a float number as first parameter and number as second with equal", () => {
            const floatFirstParameter = 5.01;
            const numberSecondParameter = 5;

            const result = mathEnforcer.sum(floatFirstParameter, numberSecondParameter);

            expect(result).to.be.equal(10.01);
        })

        it("should return correct result when pass a number as first parameter and a float number as second", () => {
            const numberFirstParameter = 10;
            const floatSecondParameter = 1.01;

            const result = mathEnforcer.sum(numberFirstParameter, floatSecondParameter);

            expect(result).to.be.closeTo(11.01, 0.01);
        })

        it("should return correct result when pass a number as first parameter and a number as second", () => {
            const numberFirstParameter = 10;
            const numberSecondParameter = 10;

            const result = mathEnforcer.sum(numberFirstParameter, numberSecondParameter);

            expect(result).to.be.equal(20);
        })

        it("should return correct result when pass a negative number as first parameter and a number as second", () => {
            const numberFirstParameter = -9;
            const numberSecondParameter = 10;

            const result = mathEnforcer.sum(numberFirstParameter, numberSecondParameter);

            expect(result).to.be.equal(1);
        })

        it("should return correct result when pass a number as first parameter and a negative number as second", () => {
            const numberFirstParameter = 10;
            const numberSecondParameter = -8;

            const result = mathEnforcer.sum(numberFirstParameter, numberSecondParameter);

            expect(result).to.be.equal(2);
        })

        it("should return correct result when pass a zero as first parameter and a float number as second", () => {
            const numberFirstParameter = 0;
            const numberSecondParameter = 0.1;

            const result = mathEnforcer.sum(numberFirstParameter, numberSecondParameter);

            expect(result).to.be.closeTo(0.1, 0.01);
        })
    })
})