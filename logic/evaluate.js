import InputIsValid from './error_handler.js';
const EvaluateExpression = (expression) => {
    return !InputIsValid(expression) ? `<h1 class="text-danger">Error: Invalid Syntax.</h1>` : eval(expression);
};
export default EvaluateExpression;
//# sourceMappingURL=evaluate.js.map