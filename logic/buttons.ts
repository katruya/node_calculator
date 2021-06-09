import InputIsValid from './error_handler.js';
import EvaluateExpression from './evaluate.js'

// make sure DOM is loaded
window.onload = () => {
    // memory for calculation
    let Memory: string = '';

    // number buttons
    let zero: Element = document.getElementById('zero');
    let one: Element = document.getElementById('one');
    let two: Element = document.getElementById('two');
    let three: Element = document.getElementById('three');
    let four: Element = document.getElementById('four');
    let five: Element = document.getElementById('five');
    let six: Element = document.getElementById('six');
    let seven: Element = document.getElementById('seven');
    let eight: Element = document.getElementById('eight');
    let nine: Element = document.getElementById('nine');

    // decimal point
    let decimalBtn: Element = document.getElementById('decimal');

    // operations
    let addBtn: Element = document.getElementById('plus');
    let subtractBtn: Element = document.getElementById('subtract');
    let multiplyBtn: Element = document.getElementById('multiply');
    let divideBtn: Element = document.getElementById('divide');

    // equals
    let equalsBtn: Element = document.getElementById('equals');

    // input area
    let calculatorIO: Element = document.getElementById('calculator-io');

    // number button events
    zero.addEventListener("click", () => {
        calculatorIO.innerHTML += `<h1>0</h1>`;
        Memory += '0';
    });

    one.addEventListener("click", () => {
        // store 1 in input area
        calculatorIO.innerHTML += `<h1>1</h1>`;
        // store for calculation
        Memory += '1';
    });

    two.addEventListener("click", () => {
        calculatorIO.innerHTML += `<h1>2</h1>`;
        Memory += '2';
    });

    three.addEventListener("click", () => {
        calculatorIO.innerHTML += `<h1>3</h1>`;
        Memory += '3';
    });

    four.addEventListener("click", () => {
        calculatorIO.innerHTML += `<h1>4</h1>`;
        Memory += '4';
    });

    five.addEventListener("click", () => {
        calculatorIO.innerHTML += `<h1>5</h1>`;
        Memory += '5';
    });

    six.addEventListener("click", () => {
        calculatorIO.innerHTML += `<h1>6</h1>`;
        Memory += '6';
    });

    seven.addEventListener("click", () => {
        calculatorIO.innerHTML += `<h1>7</h1>`;
        Memory += '7';
    });

    eight.addEventListener("click", () => {
        calculatorIO.innerHTML += `<h1>8</h1>`;
        Memory += '8';
    });

    nine.addEventListener("click", () => {
        calculatorIO.innerHTML += `<h1>9</h1>`;
        Memory += '9';
    });

    // operations events
    addBtn.addEventListener("click", () => {
        calculatorIO.innerHTML += `<h1>+</h1>`;
        Memory += '+';
    });

    subtractBtn.addEventListener("click", () => {
        calculatorIO.innerHTML += `<h1>-</h1>`;
        Memory += '-';
    });

    multiplyBtn.addEventListener("click", () => {
        calculatorIO.innerHTML += `<h1>x</h1>`;
        Memory += '*';
    });

    divideBtn.addEventListener("click", () => {
        calculatorIO.innerHTML += `<h1>/</h1>`;
        Memory += '/';
    });

    // decimal placement
    decimalBtn.addEventListener("click", () => {
        calculatorIO.innerHTML += `<h1>.</h1>`;
        Memory += '.';
    });

    // completing operation
    equalsBtn.addEventListener("click", () => {
        // 1. Determine if the input is valid
        // 2. If valid, parse the string
        // 3. Evaluate the expression
        // 4. Store in result
        // 5. Display in calculatorIO
        let result: string = '';
        // console.log(result); // debugging

        // TO DO
        // if (!InputIsValid(result)) {
        //     result = 'Error: Invalid Input.';
        // }
        // else {
        //     // evaluate
        // }

        calculatorIO.innerHTML = `<h1>${EvaluateExpression(Memory)}</h1>`;
        
    });
};


export default {};
