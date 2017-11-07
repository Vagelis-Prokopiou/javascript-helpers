var regExpEmail = new RegExp("^([0-9a-zA-Z_.\-]+\@[0-9a-zA-Z_\-]+\.[0-9a-zA-Z_.\-]{2,255})$");
var regExpPhone = new RegExp("^[0-9+]+$");
var regExpAlphaNumeric = new RegExp("^([0-9α-ωΑ-ΩάέήίόύώΆ-Ώϊϋΐΰa-zA-Z-\\\\/]+)$");
var regExpStrictAlphaNumeric = new RegExp("^([0-9α-ωΑ-Ωa-zA-Z]+)$");
var regExpGreekCapitalAlphaNumeric = new RegExp("^([0-9Α-Ω]+)$");

let stubLocalStorage = {};
let localStorage = function()
{
};
localStorage.getItem = function(key)
{
    return JSON.parse(stubLocalStorage[key]);
}
localStorage.setItem = function(key, obj)
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


function remove_spaces(str)
{
    while (str.charAt(str.length - 1) == ' ')
    {
        str = str.substring(0, str.length - 1)
    }
    while (str.charAt(0) == ' ')
    {
        str = str.substring(1, str.length)
    }
    while (str.search('  ') != -1)
    {
        str = str.replace('  ', ' ');
        if (str.length == 1) str = '';
    }
    return (str);
}

function replaceStr(expression, find, replacement)
{
    var strout = "", tmp = ""
    for (i = 0; i < expression.length; i++)
    {
        tmp = expression.charAt(i)
        if (expression.charAt(i) == find)
            tmp = replacement;
        strout = strout + tmp;
    }
    return strout;
}


function validDate(date, separator)
{
    function leapYear(year)
    {
        return (year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))
    }
    function validDay(day, month, year)
    {
        var days = Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
        if (leapYear(year))
        {
            days[1] = days[1] + 1;
        }
        return (day >= 1) && (day <= days[month - 1])
    }

    var tmp = date.split(separator)
    if (tmp.length != 3) return false
    if (tmp[0].charAt(0) == '0') tmp[0] = tmp[0].charAt(1)
    if (tmp[1].charAt(0) == '0') tmp[1] = tmp[1].charAt(1)
    var day = parseInt(tmp[0], 10)
    var month = parseInt(tmp[1], 10)
    var year = parseInt(tmp[2], 10)

    return (validDay(day, month, year) && (month >= 1) && (month <= 12) && (year >= 1800) && (year <= 3000))
}

function dateToANSI(date, separator)
{
    var tmp = date.split(separator)
    if (tmp.length != 3) return false
    if (tmp[0].length == 1) tmp[0] = '0' + tmp[0]
    if (tmp[1].length == 1) tmp[1] = '0' + tmp[1]
    return tmp[2] + tmp[1] + tmp[0]
}


function validMonthYear(date, separator)
{
    var tmp = date.split(separator);
    if (tmp.length != 2) return false;

    if (tmp[0].charAt(0) == '0') tmp[0] = tmp[0].charAt(1);
    var month = parseInt(tmp[0], 10);
    var year = parseInt(tmp[1], 10);
    return ((month >= 1) && (month <= 12) && (year >= 1800) && (year <= 3000));
}

function validMonth2DigitYear(date, separator)
{
    var tmp = date.split('/');
    if (tmp.length != 2)
    {
        return false;
    }

    if (tmp[0].charAt(0) == '0') tmp[0] = tmp[0].charAt(1);
    var month = parseInt(tmp[0], 10);
    var year = 2000 + parseInt(tmp[1]);

    return ((month >= 1) && (month <= 12) && (year >= 1800) && (year <= 3000));
}


function daysBetween(date1, date2)
{
    var DSTAdjust = 0;
    // constants used for our calculations below
    oneMinute = 1000 * 60;
    var oneDay = oneMinute * 60 * 24;
    // equalize times in case date objects have them
    date1.setHours(0);
    date1.setMinutes(0);
    date1.setSeconds(0);
    date2.setHours(0);
    date2.setMinutes(0);
    date2.setSeconds(0);
    // take care of spans across Daylight Saving Time changes
    if (date2 > date1)
    {
        DSTAdjust =
            (date2.getTimezoneOffset() - date1.getTimezoneOffset()) * oneMinute;
    } else
    {
        DSTAdjust =
            (date1.getTimezoneOffset() - date2.getTimezoneOffset()) * oneMinute;
    }
    var diff = Math.abs(date2.getTime() - date1.getTime()) - DSTAdjust;
    return Math.ceil(diff / oneDay);
}

module.exports = {
    saveObjectToLocalStorage
    , getObjectFromLocalStorage
    , extractIntegersFromString
    , extractFloatsFromString
}
