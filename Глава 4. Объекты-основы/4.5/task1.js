let obj = {}

function A() { return obj }
function B() { return obj }

let a = new A();
let b = new B();

// alert( a == b );
console.log(a == b)

// Возможно ли создать функции A и B, чтобы new A() == new B()?

//Да, функция вернет объект вместо this