//Задача-5

//Сделайте набор «готовых к употреблению» фильтров:

//inBetween(a, b) – между a и b (включительно).
//inArray([...]) – находится в данном массиве.

//Они должны использоваться таким образом:

//arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
//arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

const inBetween = (a, b) => (x) => x >= a && x <= b;

const inArray = (arr) => (x) => arr.includes(x);

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));// [3, 4, 5, 6]
console.log(arr.filter(inArray([1, 2, 10])));// [1, 2]