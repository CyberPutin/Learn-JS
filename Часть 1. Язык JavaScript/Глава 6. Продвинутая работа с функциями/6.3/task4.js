//Задача-4
//Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

const sum = (a) => (b) => a + b;

console.log(sum(5)(-1));//4
console.log(sum(1)(2));//3