//Задача-2

//Напишите функцию sum, которая бы работала следующим образом:

//sum(1)(2) == 3; // 1 + 2
//sum(1)(2)(3) == 6; // 1 + 2 + 3
//sum(5)(-1)(2) == 6
//sum(6)(-1)(-2)(-3) == 0
//sum(0)(1)(2)(3)(4)(5) == 15

function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

function sum(a){
  sum.count += a;
return sum;
}

sum.count = 0;

sum.toString = function(){
let count = sum.count;
sum.count = 0;
return count;
}

console.log(JSON.parse(sum(1)(2))); // 3
console.log(JSON.parse(sum(5)(-1)(2))); // 6
console.log(JSON.parse(sum(6)(-1)(-2)(-3))); // 0
console.log(JSON.parse(sum(0)(1)(2)(3)(4)(5))); // 15