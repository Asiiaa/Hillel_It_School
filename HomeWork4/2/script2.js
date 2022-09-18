alert('Hello World !');

let numberA,
    numberB,
    numberC,
    mathOperation,
    theEnd,
    resultHistory,
    arrayHistory = [];

do {
    mathOperation = prompt('Choose an opeartion you would like to perform with that number.\nList of available operations: \n + \n - \n * \n / \n sin \n cos \n pow \n history');
    while (mathOperation !== "+" && mathOperation !== "-" && mathOperation !== "*" && mathOperation !== "/" && mathOperation !== "sin" && mathOperation !== "cos" && mathOperation !== "pow" && mathOperation !== "history") {
        alert ("You picked unvalid operaration. Reload the page and try again");
        mathOperation = prompt('Choose an opeartion you would like to perform with that number.\nList of available operations: \n + \n - \n * \n / \n sin \n cos \n pow \n history');
    };
    inputA = +prompt('Enter a number');
    while (isNaN(inputA) || inputA == "") {
        alert("You entered not a number. Reload the page and try again");
        inputA = +prompt('Enter a number');
    }
    if(mathOperation == "sin") {
        let sin = Math.sin(inputA);
        alert(sin);
        arrayHistory.unshift(`sin(${inputA}) = ${sin}`);
        theEnd = confirm('A you gonna calculate one more time ?');
    } else if (mathOperation == "cos") {
        let cos = Math.cos(inputA);
        alert(cos);
        arrayHistory.unshift(`cos(${inputA}) = ${cos}`);
        theEnd = confirm('A you gonna calculate one more time ?');
    } else if (mathOperation == "pow") {
        inputC = +prompt('Choose a pow:');
        while (isNaN(inputC) || inputC == "") {
            alert("You entered not a number. Reload the page and try again");
            inputC = +prompt('Enter a number');
        };
        let pow = Math.pow(inputA, inputC);
        alert(pow);
        arrayHistory.unshift(`${inputA}^${inputC} = ${pow}`);
        theEnd = confirm('A you gonna calculate one more time ?');
    } else if (mathOperation == "+") {
        inputB = +prompt('Choose the number you want to add to the first number');
        while (isNaN(inputB) || inputB == "") {
            alert("You entered not a number. Reload the page and try again");
            inputB = +prompt('Enter a number');
        };
        let sum = inputA + inputB;
        alert(sum);
        arrayHistory.unshift(`${inputA} + ${inputB} = ${sum}`);
        theEnd = confirm('A you gonna calculate one more time ?');
    } else if (mathOperation == "-") {
        inputB = +prompt('Choose the number you want to substract from the first number');
        while (isNaN(inputB) || inputB == "") {
            alert("You entered not a number. Reload the page and try again");
            inputB = +prompt('Enter a number');
        };
        let diff = inputA - inputB;
        alert(diff);
        arrayHistory.unshift(`${inputA} - ${inputB} = ${diff}`);
        theEnd = confirm('A you gonna calculate one more time ?');
    } else if (mathOperation == "*") {
        inputB = +prompt('Choose the number on which you want multiply the first number');
        while (isNaN(inputB) || inputB == "") {
            alert("You entered not a number. Reload the page and try again");
            inputB = +prompt('Enter a number');
        }
        let mult = inputA * inputB;
        alert(mult);
        arrayHistory.unshift(`${inputA} * ${inputB} = ${mult}`);
        theEnd = confirm('A you gonna calculate one more time ?');
    } else if (mathOperation == "/") {
        inputB = +prompt('Choose the number on which you want to devide the first number');
        while (isNaN(inputB) || inputB == "") {
            alert("You entered not a number. Reload the page and try again");
            inputB = +prompt('Enter a number');
        };
        let div = inputA / inputB;
        alert(div);
        arrayHistory.unshift(`${inputA} / ${inputB} = ${div}`);
    } else if (mathOperation == "history") {
        alert(arrayHistory.join("\n"));
        theEnd = confirm('A you gonna calculate one more time ?');
    }
} while (theEnd == true);