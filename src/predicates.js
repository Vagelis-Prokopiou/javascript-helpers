const isFunction = param => typeof param === 'function';
const isEmptyString = param => typeof param === 'string' && param.length === 0;
const isString = param => typeof param === 'string' && !isEmptyString(param);
const isObject = param => typeof param === 'object' && !Array.isArray(param);
const isArray = param => typeof param === 'object' && Array.isArray(param);
const isInteger = param => typeof param === 'number' && !isNaN(param) && param !== Infinity && (param % 1 === 0);
const isPositiveInteger = param => isInteger(param) && param > 0;
const isNegativeInteger = param => isInteger(param) && param < 0;
const isFloat = param => typeof param === 'number' && !isNaN(param) && param !== Infinity && (param % 1 !== 0);
const isPositiveFloat = param => isFloat(param) && param > 0;
const isNegativeFloat = param => isFloat(param) && param < 0;

module.exports = {
    isFunction,
    isEmptyString,
    isString,
    isObject,
    isArray,
    isInteger,
    isPositiveInteger,
    isNegativeInteger,
    isFloat,
    isPositiveFloat,
    isNegativeFloat
}