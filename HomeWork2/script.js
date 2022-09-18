const numberA = prompt('Введите число:');
const numberB = prompt('Введите еще одно число:');

let sum = +numberA + +numberB;
let diff = +numberA - +numberB;
let mult = +numberA * +numberB;
let div = +numberA / +numberB;

let result = `Sum: ${numberA} + ${numberB} = ${sum}
Diff: ${numberA} - ${numberB} = ${diff}
Mult: ${numberA} * ${numberB} = ${mult}
Div: ${numberA} / ${numberB} = ${div}`;

alert(result);

console.log(typeof result);
