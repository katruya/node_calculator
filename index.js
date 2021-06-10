import UI from './app.js';
import CalculatorBtn from './components/CalculatorBtn.js';
import CalculatorIO from './components/CalculatorIO.js';
const Definition = `
    ${CalculatorIO()}
    <div class="row">
      <div class="col">
         ${CalculatorBtn('sqrt', 'sqrt')}
         ${CalculatorBtn('pow', 'pow')}
         ${CalculatorBtn('mod', 'modulus')}
      </div>
      <div class="col">
         ${CalculatorBtn('CLEAR', 'clear')}
         ${CalculatorBtn('Usage', 'help')}
         ${CalculatorBtn('About', 'about')}
      </div>
    </div>
    <div class="row">
        ${CalculatorBtn('7', 'seven')}
        ${CalculatorBtn('8', 'eight')}
        ${CalculatorBtn('9', 'nine')}
        ${CalculatorBtn('/', 'divide')}
    </div>

    <div class="row">
       ${CalculatorBtn('4', 'four')}
       ${CalculatorBtn('5', 'five')}
       ${CalculatorBtn('6', 'six')}
       ${CalculatorBtn('x', 'multiply')}
    </div>

    <div class="row">
       ${CalculatorBtn('1', 'one')}
       ${CalculatorBtn('2', 'two')}
       ${CalculatorBtn('3', 'three')}
       ${CalculatorBtn('-', 'subtract')}
    </div>

    <div class="row">
       ${CalculatorBtn('0', 'zero')}
       ${CalculatorBtn('.', 'decimal')}
       ${CalculatorBtn('=', 'equals')}
       ${CalculatorBtn('+', 'plus')}
    </div>
`;
UI(Definition);
//# sourceMappingURL=index.js.map