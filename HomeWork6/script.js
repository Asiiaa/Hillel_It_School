let util = {
    reversed: function(source) {
            if(typeof(source) === "string") { //проверка на строку
                function reverseStr (source) {
                    let newStr = '';
                    for (let i = source.length-1; i >= 0; i--) {
                         newStr += source.charAt(i);            
                    };
                    return newStr;
                };
                console.log(reverseStr(source));
            } else if(typeof(source) === "object") { //проверка на массив
                function reverseArray(source) {
                    let newArray = [];
                    for (let i = 0; i < source.length; i++) {
                        newArray[i] = source[(source.length-1) - i];
                    };
                    return newArray;
                };
                console.log(reverseArray(source));
            } else { //т.к. в условии сказано либо строка, либо массив, сделала третий вариант
                console.log("Neither array nor string entered");
            };
    },
    verifyNumbers: function(source) {
        let newArray = [];
        for (let i = 0; i < source.length; i++) {
            if (typeof(source[i]) === 'number' && isFinite(source[i])) { //прописала, чтобы не выводило NaN, почему-то js считает его числом
                newArray.push(source[i])
            };
        };
        console.log(newArray);
    },
    getMin: function(source) {
        function getMinNumber(source) {
            for (let i = 0; i < source.length; i++) {
                if (source[0] > source[i]) {
                    source[0] = source[i];
                };
            };
            return source[0];
        };
        console.log(getMinNumber(source));
    },
    getAverage: function(source) {
        function average(source) {
            let sum = 0;
            for (let i = 0; i < source.length; i++) {
                sum += source[i];
            };
            return sum / source.length;
        };
        console.log(average(source));
    },
    getMaxString: function(source) {
        let maxStr = 0;
        let max;
        function longStr(source) {
            for (let i = 0; i < source.length; i++) {
                if (source[i].length > maxStr) {
                    maxStr = source[i].length;
                    max = source[i];
                };
            };
            return max;
        };
        console.log(longStr(source))
    }
};

/* Проверка */
util.reversed("Hellow World!");
util.reversed(['Bob', 39, true, NaN]);

util.verifyNumbers(['Bob', 39, true, -24, 3.52, 678, NaN, null, 887, 8, "778"]);
util.getMin([13, 0, -1.43, 6, 7654, 543, 53, 932]);
util.getAverage([2, 4, 4]);
util.getMaxString([ "Hellow!", "Hellow World!", "Very looooong string", "World!"]);
