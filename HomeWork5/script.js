alert('Hello World !');

let inputA,
    inputB,
    inputC,
    mathOperation,
    theEnd,
    resultHistory,
    arrayHistory = [];

do {
    function nameOperation(inputA, mathOperation) {
            inputA = +prompt('Enter a number');
            while (isNaN(inputA) || inputA == "") {
                alert("You entered not a number. Reload the page and try again");
                inputA = +prompt('Enter a number');
            };
            mathOperation = prompt('Choose an opeartion you would like to perform with that number.\nList of available operations: \n + \n - \n * \n / \n sin \n cos \n pow');
            while (mathOperation !== "+" && mathOperation !== "-" && mathOperation !== "*" && mathOperation !== "/" && mathOperation !== "sin" && mathOperation !== "cos" && mathOperation !== "pow") {
                alert ("You picked unvalid operaration. Reload the page and try again");
                mathOperation = prompt('Choose an opeartion you would like to perform with that number.\nList of available operations: \n + \n - \n * \n / \n sin \n cos \n pow');
            };
            if(mathOperation == "sin") {
                function sinOperation(inputA) {
                    let sin = Math.sin(inputA);
                    alert(sin);
                    arrayHistory.unshift(`sin(${inputA}) = ${sin}`);
                };
                sinOperation(inputA);
            } else if (mathOperation == "cos") {
                function cosOperation(inputA) {
                    let cos = Math.cos(inputA);
                    alert(cos);
                    arrayHistory.unshift(`cos(${inputA}) = ${cos}`);
                };
                cosOperation(inputA);
            } else if (mathOperation == "pow") {
                function powOperation(inputC) {
                    inputC = +prompt('Choose a pow:');
                    while (isNaN(inputC) || inputC == "") {
                        alert("You entered not a number. Reload the page and try again");
                        inputC = +prompt('Enter a number');
                    };
                    let pow = Math.pow(inputA, inputC);
                    alert(pow);
                    arrayHistory.unshift(`${inputA}^${inputC} = ${pow}`);
                };
                powOperation();
            } else if (mathOperation == "+") {
                function sumOperation(inputA, inputB) {
                    inputB = +prompt('Choose the number you want to add to the first number');
                    while (isNaN(inputB) || inputB == "") {
                        alert("You entered not a number. Reload the page and try again");
                        inputB = +prompt('Enter a number');
                    };
                    let sum = inputA + inputB;
                    alert(sum);
                    arrayHistory.unshift(`${inputA} + ${inputB} = ${sum}`);
                }
                sumOperation(inputA, inputB)
            } else if (mathOperation == "-") {
                function diffOperation(inputA, inputB) {
                    inputB = +prompt('Choose the number you want to substract from the first number');
                    while (isNaN(inputB) || inputB == "") {
                        alert("You entered not a number. Reload the page and try again");
                        inputB = +prompt('Enter a number');
                    };
                    let diff = inputA - inputB;
                    alert(diff);
                    arrayHistory.unshift(`${inputA} - ${inputB} = ${diff}`);
                };
                diffOperation(inputA, inputB);
            } else if (mathOperation == "*") {
                function multOperation(inputA, inputB) {
                    inputB = +prompt('Choose the number on which you want multiply the first number');
                    while (isNaN(inputB) || inputB == "") {
                        alert("You entered not a number. Reload the page and try again");
                        inputB = +prompt('Enter a number');
                    }
                    let mult = inputA * inputB;
                    alert(mult);
                    arrayHistory.unshift(`${inputA} * ${inputB} = ${mult}`);
                };
                multOperation();
            } else if (mathOperation == "/") {
                function divOperation(inputA, inputB) {
                    inputB = +prompt('Choose the number on which you want to devide the first number');
                    while (isNaN(inputB) || inputB == "") {
                        alert("You entered not a number. Reload the page and try again");
                        inputB = +prompt('Enter a number');
                    };
                    let div = inputA / inputB;
                    alert(div);
                    arrayHistory.unshift(`${inputA} / ${inputB} = ${div}`);
                };
                divOperation(inputA, inputB);
            }; 
            resultHistory = confirm('Do you want to see the history of your actions ?');
            if (resultHistory == true) {
                alert(arrayHistory.join('\n'));
                theEnd = confirm('A you gonna calculate one more time ?');
            } else {
                theEnd = confirm('A you gonna calculate one more time ?');
            };  
    };
    nameOperation();
} while (theEnd == true);