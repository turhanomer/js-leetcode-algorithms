class Calculator {
  constructor(value = 0) {
    this.x = value;
  }

  add(value) {
    this.x += value;
    return this;
  }
  subtract(value) {
    this.x -= value;
    return this;
  }
  multiply(value) {
    this.x *= value;
    return this;
  }
  divide(value) {
    if (value == 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.x /= value;
    return this;
  }
  power(value) {
    this.x = Math.pow(this.x, value);
    return this;
  }
  getResult() {
    return this.x;
  }
}

const val = new Calculator();

val.add(5);
val.divide(10);
val.multiply(4);
val.subtract(2);

console.log(val.getResult());
