//Задача-1
//В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.


function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

console.log(rabbit.eats); // true

// Rabbit.prototype = {};  // true
// Rabbit.prototype.eats = false; // false
// delete rabbit.eats; // true
// delete Rabbit.prototype.eats; // undefined