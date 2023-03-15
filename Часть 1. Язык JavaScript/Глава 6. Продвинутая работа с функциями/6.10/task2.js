//Задача-2
// Что выведет этот код?

"use strict";

function f() {
  alert(this.name);// Вася
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f();