//Задача-2
//Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.


const factorial = (n) => ((n != 1) ? n * factorial(n - 1) : 1);

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));