import calculate from '../calculator.js';
import add from '../calculator.js';
import subtract from '../calculator.js';
import multiply from '../calculator.js';
import divide from '../calculator.js';

// memory for calculation
let Memory: Array<string> = [];

// number buttons
let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');

// operations

// input area
let calculatorIO = document.getElementById('calculator-io');

// number button events
zero.addEventListener("click", () => {
    calculatorIO.innerHTML += `<h1>0</h1>`;
    Memory.push('0');
});

one.addEventListener("click", () => {
    // store 1 in input area
    calculatorIO.innerHTML += `<h1>1</h1>`;
    // store for calculation
    Memory.push('1');
});

two.addEventListener("click", () => {
    calculatorIO.innerHTML += `<h1>2</h1>`;
    Memory.push('2');
});

three.addEventListener("click", () => {
    calculatorIO.innerHTML += `<h1>3</h1>`;
    Memory.push('3');
});

four.addEventListener("click", () => {
    calculatorIO.innerHTML += `<h1>4</h1>`;
    Memory.push('4');
});

five.addEventListener("click", () => {
    calculatorIO.innerHTML += `<h1>5</h1>`;
    Memory.push('5');
});

six.addEventListener("click", () => {
    calculatorIO.innerHTML += `<h1>6</h1>`;
    Memory.push('6');
});

seven.addEventListener("click", () => {
    calculatorIO.innerHTML += `<h1>7</h1>`;
    Memory.push('7');
});

eight.addEventListener("click", () => {
    calculatorIO.innerHTML += `<h1>8</h1>`;
    Memory.push('8');
});

nine.addEventListener("click", () => {
    calculatorIO.innerHTML += `<h1>9</h1>`;
    Memory.push('9');
});

export default {};
