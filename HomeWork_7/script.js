function createCalculator(val) {
    return {
        add: (input) => (val = val + input),
        sub: (input) => (val = val - input),
        div: (input) => (val = val / input),
        mult: (input) => (val = val * input),
        set: (input) => (val = input)
    }
}

// const calc = createCalculator(100);
// const calc2 = createCalculator(700);