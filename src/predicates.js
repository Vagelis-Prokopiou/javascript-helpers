const isFunction = function (param)
{
    return typeof param === 'function';
};

const isString = function (param)
{
    return typeof param === 'string' || Object.prototype.toString.call(param) === '[object String]';
};

const isEmptyString = function (param)
{
    return isString(param) && param.length === 0;
};

const isObject = function (param)
{
    return typeof param === 'object' && !Array.isArray(param);
};

const isArray = function (param)
{
    return typeof param === 'object' && Array.isArray(param);
};

const isInteger = function (param)
{
    return typeof param === 'number' && !isNaN(param) && param !== Infinity && (param % 1 === 0);
};

const isPositiveInteger = function (param)
{
    return isInteger(param) && param > 0;
};

const isNegativeInteger = function (param)
{
    return isInteger(param) && param < 0;
};

const isFloat = function (param)
{
    return typeof param === 'number' && !isNaN(param) && param !== Infinity && (param % 1 !== 0);
};

const isPositiveFloat = function (param)
{
    return isFloat(param) && param > 0;
};

const isNegativeFloat = function (param)
{
    return isFloat(param) && param < 0;
};

module.exports = {
    isFunction: isFunction
    , isEmptyString: isEmptyString
    , isString: isString
    , isObject: isObject
    , isArray: isArray
    , isInteger: isInteger
    , isPositiveInteger: isPositiveInteger
    , isNegativeInteger: isNegativeInteger
    , isFloat: isFloat
    , isPositiveFloat: isPositiveFloat
    , isNegativeFloat: isNegativeFloat
};