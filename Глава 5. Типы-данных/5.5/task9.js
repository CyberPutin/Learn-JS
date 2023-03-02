const sortByAge = (users) => {
  arr = users.sort((i1, i2) => i1.age - i2.age);
};

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);
console.log(arr);
