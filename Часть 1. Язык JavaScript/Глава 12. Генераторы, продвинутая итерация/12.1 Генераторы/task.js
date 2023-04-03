// Создать функцию-генератор pseudoRandom(seed), которая получает seed и создаёт генератор с указанной формулой.

// next = previous * 16807 % 2147483647

// Если мы используем 1 как зерно, то значения будут:

// 1. 16807
// 2. 282475249
// 3. 1622650073
// 4. …и так далее…

function* pseudoRandom(seed) {
  let value = seed

  while(true) {
    value = value * 16807 % 2147483647
    yield value
  }

}

let generator = pseudoRandom(1)

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)