const CalculatorBtn = (btnText: string, type: string = '', id: string = '', listener='') => {
    return id !== "" ? `
        <span class="col btn btn-dark btn-outline-info">
            <h1 id="${id}" class="text-center ${type}">${btnText}</h1>
        </span>
    ` :
    `   <span class="col btn btn-dark btn-outline-info">
            <h1 class="text-center ${type}">${btnText}</h1>
        </span>
    `; 
}

export default CalculatorBtn;