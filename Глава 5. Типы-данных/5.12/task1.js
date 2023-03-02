let user = {
  name: "Василий Иванович",
  age: 35,
};

const jsonStringify = JSON.stringify(user);
const jsonParse = JSON.parse(jsonStringify);

console.log(user);
console.log(jsonStringify);
console.log(jsonParse);
