//Задача-1

//Что выведет функция?

"use strict"

function f() {
  alert(this); // null
}

let user = {
  g: f.bind(null),
};

user.g();