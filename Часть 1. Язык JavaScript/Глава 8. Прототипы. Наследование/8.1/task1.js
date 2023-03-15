//Задача-1

//В приведённом ниже коде создаются и изменяются два объекта.
//Какие значения показываются в процессе выполнения кода?

let animal = {
  jumps: null,
};

let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // true - из rabbit

delete rabbit.jumps;

console.log(rabbit.jumps); // null - из animal

delete animal.jumps;

console.log(rabbit.jumps); // undefined - т.к. свойство удалено