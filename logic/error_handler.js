// when is input valid?
// 1. when it doesnt start/end with an operator
// 2. when there is no more than one operator separating each number
// 3. no more than one decimal point in each number
/* Pseudocode
if (result[0] is an operator):
    result <-- 'invalid input'
elif (result[n] is an operator):
    result <-- 'invalid input'
else:
    foreach(item in result):
        if (two or more items in a row are operators):
            result <-- 'invalid input'
        else:
            parseExpression

*/
const isOperator = (input) => {
    const operators = ['+', '-', '*', '/'];
    return input in operators;
};
const InputIsValid = (expression) => {
    try {
        return !isNaN(eval(expression));
    }
    catch (err) {
        return false;
    }
};
// const InputIsValid = (input: string): Boolean => {
//     const inputArr = input.split('');
//     let count = 0;
//     inputArr.forEach(item => {
//         let operatorArr: Array<string> = [];
//         if (isOperator(item)) {
//             operatorArr.push(item);
//         } 
//         operatorArr.forEach(operator => {
//             count++;
//         });
//     });
//     return (isOperator(input) || isOperator(input[0]) || isOperator(input[input.length - 1]) || count < 2);
// };
export default InputIsValid;
//# sourceMappingURL=error_handler.js.map