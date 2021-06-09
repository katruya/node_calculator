const add = (a: number, b: number): number => a + b;
const subtract = (a: number, b: number): number => a - b;
const divide = (a: number, b: number): number => a / b;
const multiply = (a: number, b: number): number => a * b;

const calculate = (func: Function, a: number, b: number) => func(a, b);

// console.log(calculate(add, 2, 4));
export default {calculate, add, subtract, divide, multiply};

