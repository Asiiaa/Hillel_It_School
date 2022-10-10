let burgers = {
    SMALL_SIZE: { price: 50, callories: 20 },
    AVERAGE_SIZE: { price: 75, callories: 30 },
    BIG_SIZE: { price: 100, callories: 40 }
}

const toppings = {
    TOPPING_CHEESE: { price: 10, callories: 20 },
    TOPPING_SALAD: { price: 20, callories: 5 },
    TOPPING_POTATO: { price: 15, callories: 10 },
    TOPPING_FLAVORING: { price: 15, callories: 0 },
    TOPPING_MAYO: { price: 20, callories: 5 }
}

function Hamburger(burgers) {
    this.burgerAndTopping = [];
    this.burgerAndTopping.push(burgers);

    this.typeHam = burgers;

    this.addTopping = function(toppings){
        this.burgerAndTopping.push(toppings);

        this.allPrices = [];
        for (let i = 0; i < this.burgerAndTopping.length; i++) {
            this.allPrices.push(this.burgerAndTopping[i].price)
        }

        this.allCallories = [];
        for (let i = 0; i < this.burgerAndTopping.length; i++) {
            this.allCallories.push(this.burgerAndTopping[i].callories)
        }
        this.price();
        this.callories();
    }
}

Hamburger.prototype.price = function() {
    this.sum = 0;
    for (i = 0; i < this.allPrices.length; i++) {
        this.sum += this.allPrices[i];
    }
    return this.sum;
}

Hamburger.prototype.callories = function() {
    this.sum = 0;
    for (i = 0; i < this.allCallories.length; i++) {
        this.sum += this.allCallories[i];
    }
    return this.sum;
}

const hamburger = new Hamburger(burgers.AVERAGE_SIZE);
hamburger.addTopping(toppings.TOPPING_MAYO);
hamburger.addTopping(toppings.TOPPING_SALAD);
hamburger.price();
hamburger.callories();
console.log(`Price with sauce: ${hamburger.price()}`);
console.log(`Callories with sauce: ${hamburger.callories()}`);
