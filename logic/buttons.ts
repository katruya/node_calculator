import InputIsValid from './error_handler.js';
import EvaluateExpression from './evaluate.js';

// make sure DOM is loaded
window.onload = () => {
    const placeholderText: string = `<h1>0</h1>`;
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
    let output: Element = document.getElementById('calculator-io');
    let memoryOutput: Element = document.getElementById('mem-out');

    // simplifies code
    output.innerHTML = placeholderText;

    // clear, etc
    let clearBtn: Element = document.getElementById('clear');

    // button functions
    const clear = () => {
        output.innerHTML = placeholderText;
        memoryOutput.innerHTML = `<h3>[]</h3>`;
        Memory = '';
    }

    const isDefault = () => {
        return output.innerHTML == placeholderText;
    }

    const initialize = (symbol: string, text: string) => {
        if ((isDefault() || !InputIsValid(Memory)) && symbol != '.') {
            output.innerHTML = text;
        } 
        else {
            output.innerHTML += text;
               
        }
        Memory += symbol;
        memoryOutput.innerHTML = `<h3>[${Memory}]</h3>`; 
    }

    const add = () => {
        const additionText: string = `<h1>+</h1>`;
        initialize('+', additionText);
    }

    const subtract = () => {
        const subtractionText: string = `<h1>-</h1>`;
        initialize('-', subtractionText);
    }

    const multiply = () => {
        const multiplyText: string = `<h1>x</h1>`;
        initialize('*', multiplyText);
    }

    const divide = () => {
        const divideText: string = `<h1>/</h1>`;
        initialize('/', divideText)
        
    }

    const equal = () => {
        let result = EvaluateExpression(Memory).toString();
        output.innerHTML = `<h1>${result}</h1>`;
        // console.log(Memory); // debugging
    }
    
    const decimal = () => {
        const decimalText: string = `<h1>.</h1>`;
        initialize('.', decimalText);
    }

    // number buttons
    const oneBtn = () => {
        const oneText = `<h1>1</h1>`;
        initialize('1', oneText);
    }

    const twoBtn = () => {
        const twoText = `<h1>2</h1>`;
        initialize('2', twoText);    
    }

    const threeBtn = () => {
        const threeText = `<h1>3</h1>`;
        initialize('3', threeText);    
    }

    const fourBtn = () => {
        const fourText: string = `<h1>4</h1>`;
        initialize('4', fourText);    
    }

    const fiveBtn = () => {
        const fiveText: string = `<h1>5</h1>`;
        initialize('5', fiveText);    
    }

    const sixBtn = () => {
        const sixText: string = `<h1>6</h1>`;
        initialize('6', sixText);    
    }

    const sevenBtn = () => {
        const sevenText: string = `<h1>7</h1>`;
        initialize('7', sevenText);    
    }

    const eightBtn = () => {
        const eightText = `<h1>8</h1>`;
        initialize('8', eightText);    
    }

    const nineBtn = () => {
        const nineText = `<h1>9</h1>`;
        initialize('9', nineText);    
    }

    const zeroBtn = () => {
        const zeroText = `<h1>0</h1>`;
        initialize('0', zeroText);
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
                output.innerHTML = `<h1>${Memory}</h1>`
            }
            
        }
        
    }

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
        
    }
};


export default {};
