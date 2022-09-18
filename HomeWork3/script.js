let inputA = +prompt('Enter a number');
let sin = Math.sin(inputA);
let cos = Math.cos(inputA);
let inputB;
if (isNaN(inputA) || inputA == "") {
    alert("You entered not a number. Reload the page and try again");
} else {
let mathOperation = prompt('Choose an opeartion you would like to perform with that number.\nList of available operations: \n + \n - \n * \n / \n sin \n cos \n pow');
if(mathOperation == "sin") {
    alert(sin);
} else if (mathOperation == "cos") {
    alert(cos);
} else if (mathOperation == "pow") {
    let inputC = +prompt('Choose a pow:');
    let pow = Math.pow(inputA, inputC);
    alert(pow);
} else if (mathOperation == "+") {
    inputB = +prompt('Choose the number you want to add to the first number');
    let sum = inputA + inputB;
    alert(sum);
} else if (mathOperation == "-") {
    inputB = +prompt('Choose the number you want to substract from the first number');
    let diff = inputA - inputB;
    alert(diff);
} else if (mathOperation == "*") {
    inputB = +prompt('Choose the number on which you want multiply the first number');
    let mult = inputA * inputB;
    alert(mult);
} else if (mathOperation == "/") {
    inputB = +prompt('Choose the number on which you want to devide the first number');
    let div = inputA / inputB;
    alert(div);
} else {
    alert ("You picked unvalid operaration. Reload the page and try again");
}
}
