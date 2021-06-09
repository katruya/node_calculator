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
    // clear, etc
    let clearBtn = document.getElementById('clear');
    // button functions
    const clear = () => {
        calculatorIO.innerHTML = '';
        Memory = '';
    };
    const add = () => {
        calculatorIO.innerHTML += `<h1>+</h1>`;
        Memory += '+';
    };
    const subtract = () => {
        calculatorIO.innerHTML += `<h1>-</h1>`;
        Memory += '-';
    };
    const multiply = () => {
        calculatorIO.innerHTML += `<h1>x</h1>`;
        Memory += '*';
    };
    const divide = () => {
        calculatorIO.innerHTML += `<h1>/</h1>`;
        Memory += '/';
    };
    const equal = () => {
        calculatorIO.innerHTML = `<h1>${EvaluateExpression(Memory)}</h1>`;
    };
    const decimal = () => {
        calculatorIO.innerHTML += `<h1>.</h1>`;
        Memory += '.';
    };
    const oneBtn = () => {
        // store 1 in input area
        calculatorIO.innerHTML += `<h1>1</h1>`;
        // store for calculation
        Memory += '1';
    };
    const twoBtn = () => {
        calculatorIO.innerHTML += `<h1>2</h1>`;
        Memory += '2';
    };
    const threeBtn = () => {
        calculatorIO.innerHTML += `<h1>3</h1>`;
        Memory += '3';
    };
    const fourBtn = () => {
        calculatorIO.innerHTML += `<h1>4</h1>`;
        Memory += '4';
    };
    const fiveBtn = () => {
        calculatorIO.innerHTML += `<h1>5</h1>`;
        Memory += '5';
    };
    const sixBtn = () => {
        calculatorIO.innerHTML += `<h1>6</h1>`;
        Memory += '6';
    };
    const sevenBtn = () => {
        calculatorIO.innerHTML += `<h1>7</h1>`;
        Memory += '7';
    };
    const eightBtn = () => {
        calculatorIO.innerHTML += `<h1>8</h1>`;
        Memory += '8';
    };
    const nineBtn = () => {
        calculatorIO.innerHTML += `<h1>9</h1>`;
        Memory += '9';
    };
    const zeroBtn = () => {
        calculatorIO.innerHTML += `<h1>0</h1>`;
        Memory += '0';
    };
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
    // clear calculator
    clearBtn.addEventListener("click", () => {
        clear();
    });
    // pressing keys
    document.onkeydown = (event) => {
        switch (event.key) {
            case '0':
                zero.classList.toggle("light-up-on-key");
                zeroBtn();
                break;
            case '1':
                one.classList.toggle('light-up-on-key');
                oneBtn();
                break;
            case '2':
                two.classList.toggle('light-up-on-key');
                twoBtn();
                break;
            case '3':
                three.classList.toggle('light-up-on-key');
                threeBtn();
                break;
            case '4':
                four.classList.toggle('light-up-on-key');
                fourBtn();
                break;
            case '5':
                five.classList.toggle('light-up-on-key');
                fiveBtn();
                break;
            case '6':
                six.classList.toggle('light-up-on-key');
                sixBtn();
                break;
            case '7':
                seven.classList.toggle('light-up-on-key');
                sevenBtn();
                break;
            case '8':
                eight.classList.toggle('light-up-on-key');
                eightBtn();
                break;
            case '9':
                nine.classList.toggle('light-up-on-key');
                nineBtn();
                break;
            case '+':
                addBtn.classList.toggle('light-up-on-key');
                add();
                break;
            case '-':
                subtractBtn.classList.toggle('light-up-on-key');
                subtract();
                break;
            case '*':
                multiplyBtn.classList.toggle('light-up-on-key');
                multiply();
                break;
            case '/':
                divideBtn.classList.toggle('light-up-on-key');
                divide();
                break;
            case '.':
                decimalBtn.classList.toggle('light-up-on-key');
                decimal();
                break;
            case '=':
                equalsBtn.classList.toggle('light-up-on-key');
                equal();
                break;
        }
        if (event.code == 'NumpadEnter' || event.code == 'Enter') {
            equalsBtn.classList.toggle('light-up-on-key');
            equal();
        }
        else if (event.code == 'Delete') {
            clearBtn.classList.toggle('light-up-on-key');
            clear();
        }
        else if (event.code == 'Backspace') {
            if (Memory !== null && Memory != '') {
                Memory = Memory.substr(0, Memory.length - 1);
                calculatorIO.innerHTML = `<h1>${Memory}</h1>`;
            }
        }
    };
    document.onkeyup = (event) => {
        switch (event.key) {
            case '0':
                zero.classList.toggle("light-up-on-key");
                break;
            case '1':
                one.classList.toggle('light-up-on-key');
                break;
            case '2':
                two.classList.toggle('light-up-on-key');
                break;
            case '3':
                three.classList.toggle('light-up-on-key');
                break;
            case '4':
                four.classList.toggle('light-up-on-key');
                break;
            case '5':
                five.classList.toggle('light-up-on-key');
                break;
            case '6':
                six.classList.toggle('light-up-on-key');
                break;
            case '7':
                seven.classList.toggle('light-up-on-key');
                break;
            case '8':
                eight.classList.toggle('light-up-on-key');
                break;
            case '9':
                nine.classList.toggle('light-up-on-key');
                break;
            case '+':
                addBtn.classList.toggle('light-up-on-key');
                break;
            case '-':
                subtractBtn.classList.toggle('light-up-on-key');
                break;
            case '*':
                multiplyBtn.classList.toggle('light-up-on-key');
                break;
            case '/':
                divideBtn.classList.toggle('light-up-on-key');
                break;
            case '.':
                decimalBtn.classList.toggle('light-up-on-key');
                break;
            case '=':
                equalsBtn.classList.toggle('light-up-on-key');
                break;
        }
        if (event.code == 'NumpadEnter' || event.code == 'Enter') {
            equalsBtn.classList.toggle('light-up-on-key');
        }
        else if (event.code == 'Delete') {
            clearBtn.classList.toggle('light-up-on-key');
        }
    };
};
export default {};
//# sourceMappingURL=buttons.js.map