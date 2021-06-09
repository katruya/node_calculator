import EvaluateExpression from './evaluate.js';
// make sure DOM is loaded
window.onload = () => {
    // memory for calculation
    let Memory = '';
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
    // decimal point
    let decimalBtn = document.getElementById('decimal');
    // operations
    let addBtn = document.getElementById('plus');
    let subtractBtn = document.getElementById('subtract');
    let multiplyBtn = document.getElementById('multiply');
    let divideBtn = document.getElementById('divide');
    // equals
    let equalsBtn = document.getElementById('equals');
    // input area
    let calculatorIO = document.getElementById('calculator-io');
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
        calculatorIO.innerHTML = `<h1>${EvaluateExpression(Memory)}</h1>`;
    });
};
export default {};
//# sourceMappingURL=buttons.js.map