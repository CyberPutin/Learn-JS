const getAverageAge = (users) => {
  let i = 0;
  users.forEach((user) => (i = i + user.age));
  return i / users.length;
};

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr));
