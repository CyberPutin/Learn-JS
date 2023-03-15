//Задача-3
//В свойство функции записано значение. 
//Изменится ли оно после применения bind? Обоснуйте ответ. 

"use strict";

function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася",
});

alert(bound.test); //undefined

// Изменится, т.к. у  объекта, к которому относится bind, нет свойства "тест".