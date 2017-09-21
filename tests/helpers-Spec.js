const saveObjectToLocalStorage = require('../src/helpers').saveObjectToLocalStorage;
const getObjectFromLocalStorage = require('../src/helpers').getObjectFromLocalStorage;

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