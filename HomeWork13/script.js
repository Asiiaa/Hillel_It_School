const SMALL_SIZE = { 
    price: 50, 
    callories: 20 
};
const AVERAGE_SIZE = { 
    price: 75, 
    callories: 30 
};
const BIG_SIZE = { 
    price: 100, 
    callories: 40 
};
const TOPPING_CHEESE = { 
    price: 10, 
    callories: 20 
};
const TOPPING_SALAD = { 
    price: 20, 
    callories: 5 
};
const TOPPING_POTATO = { 
    price: 15, 
    callories: 10 
};
const TOPPING_FLAVORING = { 
    price: 15, 
    callories: 0 
};
const TOPPING_MAYO = { 
    price: 20, 
    callories: 5 
};

function Hamburger(burgers) {
    this.burgerAndTopping = [];
    this.typeHam = burgers;
}
Hamburger.prototype.sizeHam = function() {
    return this.typeHam;
}
Hamburger.prototype.addTopping = function(toppings) {
    this.burgerAndTopping.push(toppings);
    return this.getTopping();
}
Hamburger.prototype.getTopping = function() {
    return this.burgerAndTopping;
}
Hamburger.prototype.price = function() {
    return this.getTopping().reduce((item, { price }) => (item += price), this.sizeHam().price);
}

Hamburger.prototype.callories = function() {
    return this.getTopping().reduce((item, { callories }) => (item += callories), this.sizeHam().callories);
}


const hamburger = new Hamburger(AVERAGE_SIZE);
hamburger.addTopping(TOPPING_MAYO);
hamburger.addTopping(TOPPING_SALAD);
hamburger.price();
hamburger.callories();
console.log(`Price with sauce: ${hamburger.price()}`);
console.log(`Callories with sauce: ${hamburger.callories()}`);