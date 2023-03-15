//Задача-1
//Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.
//Они независимы? Что покажет второй счётчик?

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // 0
console.log( counter2() ); // 1

//Счётчики независимы