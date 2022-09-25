const numberA = document.querySelector('#numberA');
const numberB = document.querySelector('#numberB');
const btnResult = document.querySelector('#btnResult');
const mathOperation = document.querySelector('#operation');
const resultSection = document.querySelector('#resultSection');
let result;

btnResult.addEventListener('click', () => {
    doCalculation();
    showResult();
    resetInputs();
});

function doCalculation() {
    switch (mathOperation.value) {
        case '+':
            result = +numberA.value + +numberB.value;
            break;

        case '-':
            result = +numberA.value - +numberB.value;
            break;

        case '*':
            result = +numberA.value * +numberB.value;
            break;

        case '/':
            result = +numberA.value / +numberB.value;
            break;

        default:
            break;
    }
    return result;
}

function showResult() {
    resultSection.textContent = `${numberA.value} ${mathOperation.value} ${numberB.value} = ${result}`
}

function resetInputs() {
    numberA.value = '';
    numberB.value = '';
}