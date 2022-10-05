function calculator(value) {
    this.value = value;
    this.add = function(event) {
        value = value + event;
        // console.log(value)
        return value;
    }
    this.div = function(event) {
        value = value/event;
        // console.log(value)
        return value;
    }
    this.sub = function(event) {
        value = value - event;
        // console.log(value)
        return value;
    }
    this.mult = function(event) {
        value = value * event;
        // console.log(value)
        return value;
    }
    this.result = function() {
        this.value = value;
        // console.log(value)
        return value;
    }
}

// const calc = new calculator(80);
// calc.result();//80
// calc.add(100); //100+80=180
// calc.result();//180
// calc.div(10);//180/10=18
// calc.result();//18
// calc.sub(70);//18-70=-52
// calc.result();//-52
// calc.mult(2);//-52*2=104
// calc.result();//-104