//Задача-3
//Посмотрите на код. Какой будет результат у вызова на последней строке?

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);// Hello, John
  }
}

sayHi();

// Как ни странно, функция работает, несмотря на то, что находится внутри блока if