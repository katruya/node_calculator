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

    // button functions
    const add = () => {
        calculatorIO.innerHTML += `<h1>+</h1>`;
        Memory += '+';
    }

    const subtract = () => {
        calculatorIO.innerHTML += `<h1>-</h1>`;
        Memory += '-';
    }

    const multiply = () => {
        calculatorIO.innerHTML += `<h1>x</h1>`;
        Memory += '*';
    }

    const divide = () => {
        calculatorIO.innerHTML += `<h1>/</h1>`;
        Memory += '/';
    }

    const equal = () => {
        calculatorIO.innerHTML = `<h1>${EvaluateExpression(Memory)}</h1>`;
    }

    const decimal = () => {
        calculatorIO.innerHTML += `<h1>.</h1>`;
        Memory += '.';
    }

    const oneBtn = () => {
        // store 1 in input area
        calculatorIO.innerHTML += `<h1>1</h1>`;
        // store for calculation
        Memory += '1';
    }

    const twoBtn = () => {
        calculatorIO.innerHTML += `<h1>2</h1>`;
        Memory += '2';
    }

    const threeBtn = () => {
        calculatorIO.innerHTML += `<h1>3</h1>`;
        Memory += '3';
    }

    const fourBtn = () => {
        calculatorIO.innerHTML += `<h1>4</h1>`;
        Memory += '4';
    }

    const fiveBtn = () => {
        calculatorIO.innerHTML += `<h1>5</h1>`;
        Memory += '5';
    }

    const sixBtn = () => {
        calculatorIO.innerHTML += `<h1>6</h1>`;
        Memory += '6';
    }

    const sevenBtn = () => {
        calculatorIO.innerHTML += `<h1>7</h1>`;
        Memory += '7';
    }

    const eightBtn = () => {
        calculatorIO.innerHTML += `<h1>8</h1>`;
        Memory += '8';
    }

    const nineBtn = () => {
        calculatorIO.innerHTML += `<h1>9</h1>`;
        Memory += '9';
    }

    const zeroBtn = () => {
        calculatorIO.innerHTML += `<h1>0</h1>`;
        Memory += '0';
    }

    // number button events
    zero.addEventListener("click", () => {
        zeroBtn();
    });

    one.addEventListener("click", () => {
        oneBtn();
    });

    two.addEventListener("click", () => {
        twoBtn();
    });

    three.addEventListener("click", () => {
        threeBtn();
    });

    four.addEventListener("click", () => {
        fourBtn();
    });

    five.addEventListener("click", () => {
        fiveBtn();
    });

    six.addEventListener("click", () => {
        sixBtn();
    });

    seven.addEventListener("click", () => {
        sevenBtn();
    });

    eight.addEventListener("click", () => {
        eightBtn();
    });

    nine.addEventListener("click", () => {
        nineBtn();
    });

    // operations events
    addBtn.addEventListener("click", () => {
        add();
    });

    subtractBtn.addEventListener("click", () => {
        subtract();
    });

    multiplyBtn.addEventListener("click", () => {
        multiply();
    });

    divideBtn.addEventListener("click", () => {
        divide();
    });

    // decimal placement
    decimalBtn.addEventListener("click", () => {
        decimal();
    });

    // completing operation
    equalsBtn.addEventListener("click", () => {
        equal();
    });

    // pressing keys
    document.onkeyup = (event) => {
        switch (event.key) {
            case '0':
                zeroBtn();
                break;
            case '1':
                oneBtn();
                break;
            case '2':
                twoBtn();
                break;
            case '3':
                threeBtn();
                break;
            case '4':
                fourBtn();
                break;
            case '5':
                fiveBtn();
                break;
            case '6':
                sixBtn();
                break;
            case '7':
                sevenBtn();
                break;
            case '8':
                eightBtn();
                break;
            case '9':
                nineBtn();
                break;
            case '+':
                add();
                break;
            case '-':
                subtract();
                break;
            case '*':
                multiply();
                break;
            case '/':
                divide();
                break;
            case '.':
                decimal();
                break;
            case '=':
                equal();
                break;
        }

        if (event.code == 'NumpadEnter' || event.code == 'Enter') {
            equal();
        }
    };
};


export default {};
