const numberA = document.querySelector('#numberA');
const numberB = document.querySelector('#numberB');
const btnResult = document.querySelector('#btnResult');
const mathOperation = document.querySelector('#operation');
const resultSection = document.querySelector('#resultSection');
let result;

btnResult.addEventListener('click', () => {
if (isNaN(numberA.value) || numberA.value === '' || isNaN(numberB.value) || numberB.value === ''){ 
    if (isNaN(numberA.value) || numberA.value === '') {
        numberA.classList.add('not-a-number');
    } else {
        numberA.classList.remove('not-a-number');
    }
    if (isNaN(numberB.value) || numberB.value === '') {
        numberB.classList.add('not-a-number');
    } else {
        numberB.classList.remove('not-a-number');
    }
} else {
    numberA.classList.remove('not-a-number');
    numberB.classList.remove('not-a-number');
    doCalculation();
    showResult();
    resetInputs();
}
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