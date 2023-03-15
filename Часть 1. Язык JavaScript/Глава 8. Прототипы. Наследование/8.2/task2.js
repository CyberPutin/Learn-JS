//Задача-2

//Создать новый объект с помощью уже существующего.

//let obj2 = new obj.constructor();

function User(name) {
  this.name = name;
}

// User.prototype = {};

let user = new User("John");
let user2 = new user.constructor("Pete");

console.log(user2.name);