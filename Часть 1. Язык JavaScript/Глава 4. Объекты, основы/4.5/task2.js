function Calculator() {
  this.read = function () {
    this.a = +prompt("Введите число a", 0);
    this.b = +prompt("Введите число b", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

const sum = `${calculator.a} + ${calculator.b} = ${calculator.sum()}`;
const mul = `${calculator.a} + ${calculator.b} = ${calculator.mul()}`;

alert(sum);
alert(mul);
