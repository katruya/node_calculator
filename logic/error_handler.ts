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

const isOperator = (input: string): Boolean => {
    const operators = ['+', '-', '*', '/'];
    return input in operators;
}

const InputIsValid = (expression: string): Boolean => {
    try {
        return !isNaN(eval(expression)); 
    } catch (err) {
        return false;
    }  
}

export default InputIsValid;