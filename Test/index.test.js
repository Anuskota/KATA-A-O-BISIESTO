const { expect } = require("@jest/globals");
const leapYear = require("../leapYear");

describe("Tests de validacion si un año no  es Bisiesto o no", () => {

    test("Test devuelve False si este año es divisible por 4", () => {
       
        expect(leapYear(1997)).toBe(false);
    });

    test("Test devuelve True  si este año es divisible por 4", () => {
        expect(leapYear(1996)).toBe(true);
    });

    test("Test devuelve True si este año es divisible por 400", () => {
        expect(leapYear(1600)).toBe(true);
    });

    test("Test devuelve False si este año es divisible por 100, divisible por 4, pero no es divisible por 400, es", () => {
        expect(leapYear(1800)).toBe(false);
    });

});

