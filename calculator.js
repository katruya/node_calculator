"use strict";
(function () {
    var add = function (a, b) { return a + b; };
    var subtract = function (a, b) { return a - b; };
    var divide = function (a, b) { return a / b; };
    var multiply = function (a, b) { return a * b; };
    var calculate = function (func, a, b) { return func(a, b); };
    console.log(calculate(add, 2, 4));
})();
