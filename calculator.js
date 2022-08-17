module.exports = class Calculator {
    add = (a, b) => {
       this.throwError(a, b);
       return a + b;
    }
 
    subtract = (a, b) => {
       this.throwError(a, b);
       return Math.abs(a - b);
    }
 
    divide = (a, b) => {
       this.throwError(a, b);
       if (b === 0) return 'Error. Divisor should be > 0'
       return a / b;
    }
 
    multiply = (a, b) => {
       this.throwError(a, b);
       return a * b;
    }
 
    throwError = (a, b) => {
       if (a === undefined || b === undefined) throw new Error('Arguments not passed');
    }
 }
 