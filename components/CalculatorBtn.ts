const CalculatorBtn = (btnText: string, id: string = '', listener='') => {
    return id !== "" ? `
        <span id="${id}" class="col btn btn-dark btn-outline-info">
            <h1 class="text-center">${btnText}</h1>
        </span>
    ` :
    `   <span class="col btn btn-dark btn-outline-info">
            <h1 class="text-center">${btnText}</h1>
        </span>
    `; 
}

export default CalculatorBtn;