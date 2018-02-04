const isFunction = require('../src/predicates').isFunction;
const isEmptyString = require('../src/predicates').isEmptyString;
const isString = require('../src/predicates').isString;
const isObject = require('../src/predicates').isObject;
const isArray = require('../src/predicates').isArray;
const isInteger = require('../src/predicates').isInteger;
const isPositiveInteger = require('../src/predicates').isPositiveInteger;
const isNegativeInteger = require('../src/predicates').isNegativeInteger;
const isFloat = require('../src/predicates').isFloat;
const isPositiveFloat = require('../src/predicates').isPositiveFloat;
const isNegativeFloat = require('../src/predicates').isNegativeFloat;

describe("isFunction(param)", function ()
{
    it("should return true if the param is a function, false otherwise", function ()
    {
        const myFunc = function () {return 'hello'};

        expect(isFunction(isFunction)).toBe(true);
        expect(isFunction(myFunc)).toBe(true);
        expect(isFunction(Array.isArray)).toBe(true);
        expect(isFunction(function () { })).toBe(true);
        expect(isFunction([])).toBe(false);
        expect(isFunction({})).toBe(false);
        expect(isFunction(NaN)).toBe(false);
        expect(isFunction(undefined)).toBe(false);
        expect(isFunction('')).toBe(false);
        expect(isFunction(Infinity)).toBe(false);
    });
});

describe("isEmptyString(param)", function ()
{
    it("should return true if the param is a zero lenght string, false otherwise", function ()
    {
        expect(isEmptyString('')).toBe(true);
        expect(isEmptyString('test')).toBe(false);
        expect(isEmptyString([])).toBe(false);
        expect(isEmptyString({})).toBe(false);
        expect(isEmptyString(undefined)).toBe(false);
        expect(isEmptyString(NaN)).toBe(false);
    });
});

describe("isString(param)", function ()
{
    it("should return true if the param is a string, false otherwise", function ()
        {
            expect(isString('a')).toBe(true);
            expect(isString('')).toBe(true);
            expect(isString(Array.isArray)).toBe(false);
            expect(isString(function () {})).toBe(false);
            expect(isString(function () { })).toBe(false);
            expect(isString([])).toBe(false);
            expect(isString({})).toBe(false);
            expect(isString(NaN)).toBe(false);
            expect(isString(undefined)).toBe(false);
            expect(isString(Infinity)).toBe(false);
        }
    );
});

describe("isObject(param)", function ()
{
    it("should return true if the param is an object, false otherwise", function ()

        {
            expect(isObject({})).toBe(true);
            expect(isObject('a')).toBe(false);
            expect(isObject(Array.isArray)).toBe(false);
            expect(isObject(function () {})).toBe(false);
            expect(isObject(function () { })).toBe(false);
            expect(isObject([])).toBe(false);
            expect(isObject(NaN)).toBe(false);
            expect(isObject(undefined)).toBe(false);
            expect(isObject('')).toBe(false);
            expect(isObject(Infinity)).toBe(false);
        }
    );
});

describe("isArray(param)", function ()
{
    it("should return true if the param is an object, false otherwise", function ()
        {
            expect(isArray([])).toBe(true);
            expect(isArray([{}, {}])).toBe(true);
            expect(isArray(Array.isArray)).toBe(false);
            expect(isArray({})).toBe(false);
            expect(isArray('a')).toBe(false);
            expect(isArray(function () {})).toBe(false);
            expect(isArray(NaN)).toBe(false);
            expect(isArray(undefined)).toBe(false);
            expect(isArray('')).toBe(false);
            expect(isArray(Infinity)).toBe(false);
        }
    );
});

describe("isInteger(param)", function ()
{
    it("should return true if the param is an integer, false otherwise", function ()
        {
            expect(isInteger(1)).toBe(true);
            expect(isInteger(0)).toBe(true);
            expect(isInteger(-1)).toBe(true);
            expect(isInteger([])).toBe(false);
            expect(isInteger([{}, {}])).toBe(false);
            expect(isInteger({})).toBe(false);
            expect(isInteger('a')).toBe(false);
            expect(isInteger(function () {})).toBe(false);
            expect(isInteger(NaN)).toBe(false);
            expect(isInteger(undefined)).toBe(false);
            expect(isInteger('')).toBe(false);
            expect(isInteger(Infinity)).toBe(false);
        }
    );
});

describe("isPositiveInteger(param)", function ()
{
    it("should return true if the param is a positive integer, false otherwise", function ()
        {
            expect(isPositiveInteger(1)).toBe(true);
            expect(isPositiveInteger(0)).toBe(false);
            expect(isPositiveInteger(-1)).toBe(false);
            expect(isPositiveInteger([])).toBe(false);
            expect(isPositiveInteger([{}, {}])).toBe(false);
            expect(isPositiveInteger({})).toBe(false);
            expect(isPositiveInteger('a')).toBe(false);
            expect(isPositiveInteger(function () {})).toBe(false);
            expect(isPositiveInteger(NaN)).toBe(false);
            expect(isPositiveInteger(undefined)).toBe(false);
            expect(isPositiveInteger('')).toBe(false);
            expect(isPositiveInteger(Infinity)).toBe(false);
        }
    );
});

describe("isNegativeInteger(param)", function ()
{
    it("should return true if the param is a positive integer, false otherwise", function ()

        {
            expect(isNegativeInteger(-1)).toBe(true);
            expect(isNegativeInteger(1)).toBe(false);
            expect(isNegativeInteger(0)).toBe(false);
            expect(isNegativeInteger([])).toBe(false);
            expect(isNegativeInteger([{}, {}])).toBe(false);
            expect(isNegativeInteger({})).toBe(false);
            expect(isNegativeInteger('a')).toBe(false);
            expect(isNegativeInteger(function () {})).toBe(false);
            expect(isNegativeInteger(NaN)).toBe(false);
            expect(isNegativeInteger(undefined)).toBe(false);
            expect(isNegativeInteger('')).toBe(false);
            expect(isNegativeInteger(Infinity)).toBe(false);
        }
    );
});

describe("isFloat(param)", function ()
{
    it("should return true if the param is a float, false otherwise", function ()

        {
            expect(isFloat(1.1)).toBe(true);
            expect(isFloat(-1.1)).toBe(true);
            expect(isFloat(1)).toBe(false);
            expect(isFloat(0)).toBe(false);
            expect(isFloat(-1)).toBe(false);
            expect(isFloat([])).toBe(false);
            expect(isFloat([{}, {}])).toBe(false);
            expect(isFloat({})).toBe(false);
            expect(isFloat('a')).toBe(false);
            expect(isFloat(function () {})).toBe(false);
            expect(isFloat(NaN)).toBe(false);
            expect(isFloat(undefined)).toBe(false);
            expect(isFloat('')).toBe(false);
            expect(isFloat(Infinity)).toBe(false);
        }
    );
});

describe("isPositiveFloat(param)", function ()
{
    it("should return true if the param is a positive float, false otherwise", function ()

        {
            expect(isPositiveFloat(1.1)).toBe(true);
            expect(isPositiveFloat(-1.1)).toBe(false);
            expect(isPositiveFloat(1)).toBe(false);
            expect(isPositiveFloat(0)).toBe(false);
            expect(isPositiveFloat(-1)).toBe(false);
            expect(isPositiveFloat([])).toBe(false);
            expect(isPositiveFloat([{}, {}])).toBe(false);
            expect(isPositiveFloat({})).toBe(false);
            expect(isPositiveFloat('a')).toBe(false);
            expect(isPositiveFloat(function () {})).toBe(false);
            expect(isPositiveFloat(NaN)).toBe(false);
            expect(isPositiveFloat(undefined)).toBe(false);
            expect(isPositiveFloat('')).toBe(false);
            expect(isPositiveFloat(Infinity)).toBe(false);
        }
    );
});

describe("isNegativeFloat(param)", function ()
{
    it("should return true if the param is a positive float, false otherwise", function ()

        {
            expect(isNegativeFloat(-1.1)).toBe(true);
            expect(isNegativeFloat(1.1)).toBe(false);
            expect(isNegativeFloat(-1)).toBe(false);
            expect(isNegativeFloat(1)).toBe(false);
            expect(isNegativeFloat(0)).toBe(false);
            expect(isNegativeFloat([])).toBe(false);
            expect(isNegativeFloat([{}, {}])).toBe(false);
            expect(isNegativeFloat({})).toBe(false);
            expect(isNegativeFloat('a')).toBe(false);
            expect(isNegativeFloat(function () {})).toBe(false);
            expect(isNegativeFloat(NaN)).toBe(false);
            expect(isNegativeFloat(undefined)).toBe(false);
            expect(isNegativeFloat('')).toBe(false);
            expect(isNegativeFloat(Infinity)).toBe(false);
        }
    );
});
