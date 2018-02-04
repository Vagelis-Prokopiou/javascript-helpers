const saveObjectToLocalStorage = require('../src/helpers').saveObjectToLocalStorage;
const getObjectFromLocalStorage = require('../src/helpers').getObjectFromLocalStorage;
const arrayContains = require('../src/helpers').arrayContains;

describe("#saveObjectToLocalStorage", function ()
{
    it("should save an object to localStorage as a string", function ()
    {
        saveObjectToLocalStorage("myObj#1", {1: 1, 2: 2});
        expect(saveObjectToLocalStorage("myObj#1", {1: 1, 2: 2})).toEqual('{"1":1,"2":2}');
    });
});

describe("#getObjectFromLocalStorage", function ()
{
    it("should retrieve an object from localStorage", function ()
    {
        saveObjectToLocalStorage("myObj#2", {1: 1, 2: 2});
        expect(getObjectFromLocalStorage("myObj#2")).toEqual({1: 1, 2: 2});
    });
});

describe("#arrayContains", function ()
{
    it("should return true if a value is the provided array, false otherwise", function ()
    {
        tests = [
            , {array: [1, 2, 3], value: 3, expected: true}
            , {array: [1, 'a', 3], value: 'a', expected: true}
            , {array: [], value: 'b', expected: false}
            , {array: ['b'], value: 'b', expected: true}
            , {array: [1, 'a', 3], value: 'b', expected: false}
        ];

        tests.forEach(function (test)
        {
            expect(arrayContains(test.array, test.value)).toBe(test.expected);
        });
    });
});

