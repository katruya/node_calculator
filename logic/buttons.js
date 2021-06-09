// memory for calculation
let Memory = [];
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
export default {};
//# sourceMappingURL=buttons.js.map