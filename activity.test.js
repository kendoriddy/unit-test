const task = require("./activity.js");
const Calculator = require("./calculator.js");

describe("String Functions", () => {
  test("string length should equal to 10", () => {
    expect(stringLength("microverse")).toEqual(10);
  });

  test("throw error if string is empty or > 10", () => {
    expect(() => {
      stringLength("");
    }).toThrow("String length must be between 1-10");

    expect(() => {
      stringLength("motivational");
    }).toThrow("String length must be between 1-10");
  });

  test("should return esrevorcim as a reverse string", () => {
    expect(reverseString("microverse")).toEqual("esrevorcim");
  });

  test("should return esrevorcim as a reverse string", () => {
    expect(() => {
      reverseString(0);
    }).toThrow("Not a string");
  });

  test("should return microverse for capitalize()", () => {
    expect(capitalize("microverse")).toEqual("Microverse");
  });

  test("should return microverse as a reverse string", () => {
    expect(() => {
      capitalize(1);
    }).toThrow("Not a string");
  });
});

describe("Calculator Functions", () => {
  const calc = new Calculator();
  test("should throw error if no argument is passed", () => {
    expect(() => {
      calc.add();
    }).toThrow();

    expect(() => {
      calc.subtract();
    }).toThrow();

    expect(() => {
      calc.divide();
    }).toThrow();

    expect(() => {
      calc.multiply();
    }).toThrow();
  });
  test("should return typeof add as function", () => {
    expect(typeof calc.add).toEqual("function");
  });

  test("should return 10 for add(7,3)", () => {
    expect(calc.add(7, 3)).toEqual(10);
  });

  //subtract
  test("should return 4 for subtract(7,3)", () => {
    expect(calc.subtract(7, 3)).toEqual(4);
  });

  test("should return 7 for subtract(0,7)", () => {
    expect(calc.subtract(0, 7)).toEqual(7);
  });

  test("should return 1 for subtract(-1,0)", () => {
    expect(calc.subtract(-1, 0)).toEqual(1);
  });

  //divide
  test("should return divisor should be > 0 for 0/0", () => {
    expect(calc.divide(0, 0)).toEqual("Error. Divisor should be > 0");
  });

  test("should return 0 for 0/5", () => {
    expect(calc.divide(0, 5)).toEqual(0);
  });

  test("should return 4 for 20/5", () => {
    expect(calc.divide(20, 5)).toEqual(4);
  });

  //multiply
  test("should return -2 for -1*2", () => {
    expect(calc.multiply(-1, 2)).toEqual(-2);
  });

  test("should return 2 for -1*-2", () => {
    expect(calc.multiply(-1, -2)).toEqual(2);
  });

  test("should return 0 for 0*0", () => {
    expect(calc.multiply(0, 0)).toEqual(0);
  });

  test("should return 10 for 2*5", () => {
    expect(calc.multiply(2, 5)).toEqual(10);
  });
});
