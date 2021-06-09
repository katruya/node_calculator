import UI from './app.js';
import CalculatorBtn from './components/CalculatorBtn.js';
import Header from './components/Header.js';
const Definition = `
    ${Header()}
    <div class="row">
        ${CalculatorBtn('7')}
        ${CalculatorBtn('8')}
        ${CalculatorBtn('9')}
        ${CalculatorBtn('/')}
    </div>

    <div class="row">
       ${CalculatorBtn('4')}
       ${CalculatorBtn('5')}
       ${CalculatorBtn('6')}
       ${CalculatorBtn('x')}
    </div>

    <div class="row">
       ${CalculatorBtn('1')}
       ${CalculatorBtn('2')}
       ${CalculatorBtn('3')}
       ${CalculatorBtn('-')}
    </div>

    <div class="row">
       ${CalculatorBtn('0')}
       ${CalculatorBtn('.')}
       ${CalculatorBtn('=')}
       ${CalculatorBtn('+')}
    </div>
`;
UI(Definition);
//# sourceMappingURL=index.js.map