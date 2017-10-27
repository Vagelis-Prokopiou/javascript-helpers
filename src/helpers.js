let stubLocalStorage = {};
let localStorage = function ()
{
};
localStorage.getItem = function (key)
{
    return JSON.parse(stubLocalStorage[key]);
}
localStorage.setItem = function (key, obj)
{
    stubLocalStorage[key] = JSON.stringify(obj);
    return localStorage.getItem(key);
}

const saveObjectToLocalStorage = (key, object) => localStorage.setItem(key, JSON.stringify(object));
const getObjectFromLocalStorage = key => JSON.parse(localStorage.getItem(key));

const extractIntegersFromString = function(str)
{
    return str.split(" ")
        .filter(value => !isNaN(value))
        .map(value => parseInt(value));
}
const extractFloatsFromString = function(str)
{
    return str.split(" ")
        .filter(value => !isNaN(value))
        .map(value => parseFloat(value));
}

module.exports = {
    saveObjectToLocalStorage
    , getObjectFromLocalStorage
    , extractIntegersFromString
    , extractFloatsFromString
}
