//Задача-6
//Напишите функцию byField, которая может быть использована для сортировки массива объектов.

const byField = (field) => (a, b) => a[field] > b[field] ? 1 : -1;

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

users.sort(byField("name"));
users.forEach((user) => console.log(user.name)); //Ann, John, Pete

users.sort(byField("age"));
users.forEach((user) => console.log(user.name)); //Pete, Ann, John