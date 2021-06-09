const CalculatorBtn = (btnText, type = '', id = '', listener = '') => {
    return id !== "" ? `
        <span class="col btn btn-dark btn-outline-info">
            <h1 id="${id}" class="text-center ${type}">${btnText}</h1>
        </span>
    ` :
        `   <span class="col btn btn-dark btn-outline-info">
            <h1 class="text-center ${type}">${btnText}</h1>
        </span>
    `;
};
export default CalculatorBtn;
//# sourceMappingURL=CalculatorBtn.js.map