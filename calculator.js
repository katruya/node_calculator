"use strict";
(() => {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;
    const calculate = (func, a, b) => func(a, b);
    console.log(calculate(add, 2, 4));
})();
//# sourceMappingURL=calculator.js.map