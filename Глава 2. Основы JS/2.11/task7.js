const age = prompt("Введите свой возраст", "");

let result1 = !(age >= 14 && age <= 90) ? "Ваш возраст НЕ находиться в диапазоне от 14 до 90 лет" :
 "Ваш возраст находиться в диапазоне от 14 до 90 лет";
let result2 = (age <= 14 || age >= 90) ? "Ваш возраст НЕ находиться в диапазоне от 14 до 90 лет" :
 "Ваш возраст находиться в диапазоне от 14 до 90 лет";

alert(result1);