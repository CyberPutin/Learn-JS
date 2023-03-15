//Задача-1

// Как найти?…

// 1.Таблицу с id="age-table".
// 2.Все элементы label внутри этой таблицы (их три).
// 3.Первый td в этой таблице (со словом «Age»).
// 4.Форму form с именем name="search".
// 5.Первый input в этой форме.
// 6.Последний input в этой форме.

// 1
let table = document.querySelector("#age-table");

// 2
let label = document.querySelectorAll("#age-table label");

// 3
let td = table.getElementsByTagName("td")[0];

// 4
let form = document.getElementsByName("search")[0];

// 5
let input = form.querySelector("input");

// 6
let inputs = form.querySelectorAll("input"); 
   inputs[inputs.length - 1]; 

console.log(table);
console.log(label);
console.log(td);
console.log(form);
console.log(input);
console.log(inputs);